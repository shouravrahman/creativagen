import { z } from "zod";
import axios from "axios";
import { saveAs } from "file-saver";
import { toast } from "sonner";
// Validation schemas
export const ImageQualitySchema = z.enum(["standard", "high", "premium"]);

export const ImageGenerationParamsSchema = z.object({
	prompt: z.string().min(1, "Prompt is required"),
	style: z.string().min(1).optional(),
	mood: z.string().min(1).optional(),
	resolution: z
		.string()
		.regex(/^\d+x\d+$/)
		.default("512x512"),
	width: z.number().min(64).max(1024).default(512),
	height: z.number().min(64).max(1024).default(512),
	quality: ImageQualitySchema.default("standard"),
	variants: z.number().min(1).max(4).default(1),
	model: z.string().optional(),
	seed: z.number().optional(),
});

export type ImageGenerationParams = z.infer<typeof ImageGenerationParamsSchema>;

export interface ImageGenerationResponse {
	success: boolean;
	imageUrl: string;
	additionalImages?: string[];
	error?: string;
	provider?: string;
}

// Utility functions
const validateParams = (
	params: ImageGenerationParams
): ImageGenerationParams => {
	return ImageGenerationParamsSchema.parse(params);
};

const combinePrompt = (params: ImageGenerationParams): string => {
	return [
		params.prompt,
		params.style ? `${params.style} style` : "",
		params.mood ? `${params.mood} mood` : "",
	]
		.filter(Boolean)
		.join(", ");
};

// Provider implementations
export const generateWithEdenAI = async (
	params: ImageGenerationParams,
	apiKey: string
): Promise<ImageGenerationResponse> => {
	const validatedParams = validateParams(params);
	const fullPrompt = combinePrompt(validatedParams);

	const providerMapping = {
		standard: "openai/dall-e-2",
		high: "openai/dall-e-2",
		premium: "openai/dall-e-3",
	};

	try {
		const response = await axios.post(
			"https://api.edenai.run/v2/image/generation",
			{
				text: fullPrompt,
				resolution: `${validatedParams.width}x${validatedParams.height}`,
				providers: providerMapping[validatedParams.quality],
				num_images: validatedParams.variants,
				response_as_dict: true,
				show_base_64: false,
				settings: {
					stability_ai: {
						model: validatedParams.model || "stable-diffusion-2",
					},
				},
			},
			{
				headers: {
					Authorization: `Bearer ${apiKey}`,
					"Content-Type": "application/json",
				},
			}
		);

		const provider = providerMapping[validatedParams.quality].split("/")[0];
		const providerResponse = response.data[provider];

		if (providerResponse.status === "success") {
			return {
				success: true,
				imageUrl: providerResponse.items[0].image_resource_url,
				additionalImages: providerResponse.items
					.slice(1)
					.map((item: any) => item.image_resource_url),
				provider: "EdenAI",
			};
		}

		throw new Error(
			providerResponse.error?.message || "Failed to generate image"
		);
	} catch (error) {
		return {
			success: false,
			imageUrl: "",
			error:
				error instanceof Error
					? error.message
					: "Failed to generate image",
			provider: "EdenAI",
		};
	}
};

export const generateWithHuggingFace = async (
	params: ImageGenerationParams,
	apiKey: string
): Promise<ImageGenerationResponse> => {
	const validatedParams = validateParams(params);
	const fullPrompt = combinePrompt(validatedParams);

	try {
		const response = await axios.post(
			"https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev",
			{
				inputs: fullPrompt,
			},
			{
				headers: {
					Authorization: `Bearer ${apiKey}`,
					"Content-Type": "application/json",
				},
				responseType: "arraybuffer",
			}
		);

		const base64Image = Buffer.from(response.data, "binary").toString(
			"base64"
		);
		const imageUrl = `data:image/jpeg;base64,${base64Image}`;

		return {
			success: true,
			imageUrl,
			provider: "HuggingFace",
		};
	} catch (error) {
		return {
			success: false,
			imageUrl: "",
			error:
				error instanceof Error
					? error.message
					: "Failed to generate image",
			provider: "HuggingFace",
		};
	}
};

export const generateWithPollinations = async (
	params: ImageGenerationParams
): Promise<ImageGenerationResponse> => {
	const validatedParams = validateParams(params);
	const fullPrompt = combinePrompt(validatedParams);

	try {
		const imageUrl = `https://pollinations.ai/p/${encodeURIComponent(
			fullPrompt
		)}?width=${validatedParams.width}&height=${
			validatedParams.height
		}&seed=${validatedParams.seed || 43}&model=${
			validatedParams.model || "FLUX_REALISM"
		}`;

		return {
			success: true,
			imageUrl,
			provider: "Pollinations",
		};
	} catch (error) {
		return {
			success: false,
			imageUrl: "",
			error:
				error instanceof Error
					? error.message
					: "Failed to generate image URL",
			provider: "Pollinations",
		};
	}
};

// Image service configuration
interface ProviderConfig {
	edenAIKey?: string;
	huggingFaceKey?: string;
}

export const createImageService = (config: ProviderConfig) => {
	const providers: ((
		params: ImageGenerationParams
	) => Promise<ImageGenerationResponse>)[] = [];

	if (config.edenAIKey) {
		providers.push((params) =>
			generateWithEdenAI(params, config.edenAIKey!)
		);
	}
	if (config.huggingFaceKey) {
		providers.push((params) =>
			generateWithHuggingFace(params, config.huggingFaceKey!)
		);
	}
	providers.push(generateWithPollinations);

	return {
		generateImage: async (
			params: ImageGenerationParams
		): Promise<ImageGenerationResponse> => {
			for (const provider of providers) {
				try {
					const result = await provider(params);
					if (result.success) {
						return result;
					}
				} catch (error) {
					console.error("Provider failed:", error);
				}
			}

			return {
				success: false,
				imageUrl: "",
				error: "All providers failed to generate image",
			};
		},
	};
};

// Utility functions for image handling
export const ImageUtils = {
	async downloadImage(
		imageUrl: string,
		filename: string = "generated-image"
	) {
		try {
			const response = await fetch(imageUrl, { mode: "no-cors" });
			if (!response.ok) {
				console.error(
					"Fetch failed:",
					response.status,
					response,
					response.statusText
				);
				throw new Error("Failed to fetch image");
			}

			const blob = await response.blob();
			saveAs(blob, `${filename}.png`);
			toast.success("Image saved");
		} catch (error) {
			console.error("Error downloading image:", error);
		}
	},
	isBase64Image(imageUrl: string): boolean {
		return imageUrl.startsWith("data:image");
	},

	async getImageDimensions(
		imageUrl: string
	): Promise<{ width: number; height: number }> {
		return new Promise((resolve, reject) => {
			const img = new Image();
			img.onload = () =>
				resolve({ width: img.width, height: img.height });
			img.onerror = () => reject(new Error("Failed to load image"));
			img.src = imageUrl;
		});
	},
};

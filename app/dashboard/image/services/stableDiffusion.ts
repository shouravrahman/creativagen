import axios from "axios";
import { ImageGenerationResponse, ImageGenerationParams } from "./types";

const STABLE_DIFFUSION_API_KEY = "your-stable-diffusion-api-key";
const BASE_URL = "https://stablediffusionapi.com/api/v3/text2img";

export async function generateWithStableDiffusion(
	params: ImageGenerationParams
): Promise<ImageGenerationResponse> {
	try {
		const [width, height] = params.resolution.split("x").map(Number);
		const response = await axios.post(BASE_URL, {
			key: STABLE_DIFFUSION_API_KEY,
			prompt: `${params.prompt}, ${params.style} style, ${params.mood} mood`,
			negative_prompt: "blurry, bad quality, distorted",
			width: width.toString(),
			height: height.toString(),
			samples: params.variants.toString(),
			num_inference_steps:
				params.quality === "Ultra HD"
					? "50"
					: params.quality === "HD"
					? "35"
					: "20",
			safety_checker: "yes",
			enhance_prompt: "yes",
			seed: null,
			guidance_scale: 7.5,
			webhook: null,
			track_id: null,
		});

		if (response.data.status === "success") {
			return {
				success: true,
				imageUrl: response.data.output[0],
			};
		}

		throw new Error(response.data.message || "Failed to generate image");
	} catch (error) {
		return {
			success: false,
			imageUrl: "",
			error:
				error instanceof Error
					? error.message
					: "Failed to generate image",
		};
	}
}

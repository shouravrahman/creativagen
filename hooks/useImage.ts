import { useState } from "react";
import { toast } from "sonner";
import {
	ImageGenerationParams,
	createImageService,
	ImageUtils,
} from "@/services/imageService";

interface UseImageGeneratorConfig {
	edenAIKey?: string;
	huggingFaceKey?: string;
}

export const useImageGenerator = (config: UseImageGeneratorConfig) => {
	const [loading, setLoading] = useState(false);
	const [image, setImage] = useState<string | null>(null);
	const [additionalImages, setAdditionalImages] = useState<string[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [currentProvider, setCurrentProvider] = useState<string | null>(null);

	const imageService = createImageService(config);

	const generateImage = async (params: ImageGenerationParams) => {
		setLoading(true);
		setError(null);

		try {
			const result = await imageService.generateImage(params);

			if (result.success && result.imageUrl) {
				setImage(result.imageUrl);
				setAdditionalImages(result.additionalImages || []);
				setCurrentProvider(result.provider || null);
				toast.success("Image generated successfully!");
			} else {
				throw new Error(result.error || "Failed to generate image");
			}
		} catch (err) {
			const errorMessage =
				err instanceof Error ? err.message : "Failed to generate image";
			setError(errorMessage);
			toast.error(errorMessage);
			setImage(null);
			setAdditionalImages([]);
		} finally {
			setLoading(false);
		}
	};

	const downloadImage = async (filename?: string) => {
		console.log("image", image);
		if (!image) {
			toast.error("No image to download");
			return;
		}

		try {
			await ImageUtils.downloadImage(image, filename);
		} catch (err) {
			toast.error("Failed to download image");
		}
	};

	return {
		generateImage,
		loading,
		image,
		additionalImages,
		error,
		currentProvider,
		downloadImage,
	};
};

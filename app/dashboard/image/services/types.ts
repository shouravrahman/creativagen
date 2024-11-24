export interface ImageGenerationResponse {
	success: boolean;
	imageUrl: string;
	error?: string;
}

export interface ApiConfig {
	apiKey: string;
	baseUrl: string;
}

export interface ImageGenerationParams {
	prompt: string;
	style: string;
	mood: string;
	resolution: string;
	quality: string;
	variants: number;
}

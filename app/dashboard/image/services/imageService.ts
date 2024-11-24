import { generateWithStableDiffusion } from './stableDiffusion';
import { generateWithHuggingFace } from './huggingFace';
import { generateWithDeepAI } from './deepAi';
import { ImageGenerationParams, ImageGenerationResponse } from './types';

export async function generateImage(params: ImageGenerationParams): Promise<ImageGenerationResponse> {
  // Try Stable Diffusion first
  const stableDiffusionResult = await generateWithStableDiffusion(params);
  if (stableDiffusionResult.success) {
    return stableDiffusionResult;
  }

  // Fallback to Hugging Face
  const huggingFaceResult = await generateWithHuggingFace(params);
  if (huggingFaceResult.success) {
    return huggingFaceResult;
  }

  // Final fallback to DeepAI
  const deepAiResult = await generateWithDeepAI(params);
  return deepAiResult;
}
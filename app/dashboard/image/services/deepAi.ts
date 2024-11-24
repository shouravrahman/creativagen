import axios from 'axios';
import { ImageGenerationResponse, ImageGenerationParams } from './types';

const DEEP_AI_API_KEY = 'your-deep-ai-api-key';
const BASE_URL = 'https://api.deepai.org/api/text2img';

export async function generateWithDeepAI(
  params: ImageGenerationParams
): Promise<ImageGenerationResponse> {
  try {
    const response = await axios.post(
      BASE_URL,
      {
        text: `${params.prompt}, ${params.style} style, ${params.mood} mood`,
      },
      {
        headers: {
          'api-key': DEEP_AI_API_KEY,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    if (response.data.output_url) {
      return {
        success: true,
        imageUrl: response.data.output_url
      };
    }

    throw new Error('Failed to generate image');
  } catch (error) {
    return {
      success: false,
      imageUrl: '',
      error: error instanceof Error ? error.message : 'Failed to generate image'
    };
  }
}
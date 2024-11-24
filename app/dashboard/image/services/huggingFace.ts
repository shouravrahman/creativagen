import axios from 'axios';
import { ImageGenerationResponse, ImageGenerationParams } from './types';

const HUGGING_FACE_API_KEY = 'your-hugging-face-api-key';
const BASE_URL = 'https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5';

export async function generateWithHuggingFace(
  params: ImageGenerationParams
): Promise<ImageGenerationResponse> {
  try {
    const response = await axios.post(
      BASE_URL,
      {
        inputs: `${params.prompt}, ${params.style} style, ${params.mood} mood`,
      },
      {
        headers: {
          Authorization: `Bearer ${HUGGING_FACE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        responseType: 'arraybuffer',
      }
    );

    const base64Image = Buffer.from(response.data, 'binary').toString('base64');
    const imageUrl = `data:image/jpeg;base64,${base64Image}`;

    return {
      success: true,
      imageUrl
    };
  } catch (error) {
    return {
      success: false,
      imageUrl: '',
      error: error instanceof Error ? error.message : 'Failed to generate image'
    };
  }
}
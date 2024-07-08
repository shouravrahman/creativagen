import { auth } from '@clerk/nextjs/server'; import { NextResponse } from "next/server";

import { incrementApiLimit } from "@/lib/api-limit";
import { validateRequest } from "@/lib/validator";
import { checkSubscriptionAndApiLimit } from "@/lib/subscriptionApiLimit";
// import { openai } from "@/lib/openApiConfig";
import { Configuration, OpenAIApi } from "openai";



const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,

});

const openai = new OpenAIApi(configuration);

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const validationResponse = validateRequest(req);


    if (validationResponse) {
      return validationResponse;
    }


    const body = await req.json();
    const { prompt, amount = 1, resolution = "1024*1024" } = body;

    const { isPro, freeTrial } = await checkSubscriptionAndApiLimit();

    // Your image processing logic using OpenAI API
    const response = await openai.createImage({
      prompt,
      model: "dall-e-3",
      n: parseInt(amount, 10),
      size: resolution,
    });

    if (!isPro) {
      await incrementApiLimit();
    }

    return NextResponse.json(response.data.data);
  } catch (error) {

    if (error.response) {
      console.log('[IMAGE_ERROR]', error.response.status);
      console.log('[IMAGE_ERROR]', error.response.data);
    } else {
      console.log('[IMAGE_ERROR]', error.message);
    }

    return new NextResponse("Internal Error", { status: 500 });
  }
}
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
});

// IMPORTANT! Set the runtime to edge
export const runtime = "edge";

const systemPrompt = `You are an expert Tailwind developer. A user will provide you with a
 low-fidelity wireframe of an application and you will return a single html file that uses Tailwind to create the website. Use creative license to make the application more fleshed out. If you need to insert an image, use placehold.co to create a placeholder image. Respond only with the html file.`;

export async function POST(request: Request) {
  try {
    const { image } = await request.json();

    if (!image) {
      return NextResponse.json("No image provided", { status: 400 });
    }

    const completion = await openai.chat.completions.create({
      max_tokens: 4096,
      model: "gpt-4-vision-preview",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: [{ type: "image_url", image_url: image }] },
      ],
    });
    return NextResponse.json(completion);
  } catch (error) {
    return NextResponse.json("Internal server error", { status: 500 });
  }
}

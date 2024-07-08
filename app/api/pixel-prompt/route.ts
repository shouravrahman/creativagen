import { NextResponse } from "next/server";

type RequestBody = {
  prompt: string;
  image: string;
};

export async function POST(request: Request) {
  const body: RequestBody = await request.json();

  const startResponse = await fetch(
    "https://api.replicate.com/v1/predictions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${process.env.REPLICATE_API_KEY}`,
      },
      body: JSON.stringify({
        // https://replicate.com/timothybrooks/instruct-pix2pix/versions
        version:
          "30c1d0b916a6f8efce20493f5d61ee27491ab2a60437c13c588468b9810ec23f",
        input: body,
      }),
    }
  );

  const jsonStartResponse = await startResponse.json();
  const endpointUrl = jsonStartResponse.urls.get;
  let image: string | null = null;

  while (!image) {
    // GET request to get the status of the image restoration process & return the result when it's ready
    const finalResponse = await fetch(endpointUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${process.env.REPLICATE_API_KEY}`,
      },
    });
    console.log("polling for result...");

    const jsonFinalResponse = await finalResponse.json();

    if (jsonFinalResponse.status === "succeeded") {
      image = jsonFinalResponse.output[0];
    } else if (jsonFinalResponse.status === "failed") {
      break;
    } else {
      // Loop in 1s intervals until status of succeeded
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }

  if (!image) {
    console.log("Failed to generate image");
    return new Response("Failed to generate image", { status: 400 });
  }

  return NextResponse.json(image);
}

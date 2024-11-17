import { NextResponse } from "next/server";
import { openai } from "./openApiConfig";
import { currentUser } from "./auth.ts";

export function validateRequest(req: Request): NextResponse | null {
  const user = currentUser();

  if (!user) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

//   console.log(openai);
  if (!openai) {
    return new NextResponse("OpenAI API Key not configured.", { status: 500 });
  }

  return null; // Request is valid
}

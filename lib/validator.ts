import { auth } from '@clerk/nextjs/server'; import { NextResponse } from "next/server";
import { openai } from "./openApiConfig";

export function validateRequest(req: Request): NextResponse | null {
   const { userId } = auth();

   if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
   }

   console.log(openai);
   if (!openai) {
      return new NextResponse("OpenAI API Key not configured.", { status: 500 });
   }


   return null; // Request is valid
}
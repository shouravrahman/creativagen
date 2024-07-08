// openaiConfig.js
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
   apiKey: process.env.OPENAI_API_KEY,
   model: "gpt-4"
});

export const openai = new OpenAIApi(configuration);
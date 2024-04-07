import OpenAI from "openai";
import "dotenv/config";

export const openai = new OpenAI({
  apiKey: process.env.VITE_AI_API_KEY,
  baseURL: "https://api.perplexity.ai",
});

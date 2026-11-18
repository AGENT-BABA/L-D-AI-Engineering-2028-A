import "dotenv/config";

import { GoogleGenAI } from "@google/genai";


export const ai = new GoogleGenAI({
    apiKey : process.env.GEMINI_API_KEY,
})


export const model = "gemini-3.8-flash"

console.log(model)
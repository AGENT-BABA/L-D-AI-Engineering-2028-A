
/**
 * SECTION 05 — Build an AI chatbot REST API with LangChain
 *
 * Teach:
 * Client -> Express -> LangChain -> Gemini -> JSON
 * Server-side API keys, input validation, async/await.
 *
 * Run: node sections/05-langchain-chatbot-api.js
 *
 * POST http://localhost:8082/chat
 * JSON: {"prompt":"Explain closures simply"}
 */

import express from "express";
import { llm } from "./04-LangChain.js";

const app = express();

// STEP 1 — Enable JSON request body parsing.
app.use(express.json());

// STEP 2 — Create our chatbot endpoint.
app.post("/chat", async (req, res) => {

  // Extract the user's prompt.
  const { prompt } = req.body ?? {};

  // STEP 3 — Validate incoming input.
  if (typeof prompt !== "string" || !prompt.trim()) {
    return res.status(400).json({
      error: "A non-empty prompt is required",
    });
  }

  try {
    // STEP 4 — Send the prompt to Gemini through LangChain.
    const result = await llm.invoke(prompt);

    // STEP 5 — Extract the generated text.
    const answer = result.text ?? "";

    // STEP 6 — Return the response to the client.
    return res.json({
      response: answer,
    });

  } catch (error) {
    console.error("LangChain call failed:", error.message);

    return res.status(502).json({
      error: "AI service failed",
    });
  }
});

// STEP 7 — Start the Express server.
const PORT = process.env.PORT || 8083;

app.listen(PORT, () => {
  console.log(`LangChain chatbot running on port ${PORT}`);
});

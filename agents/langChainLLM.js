
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
import { TavilySearch } from "@langchain/tavily";

import { createAgent } from 'langchain'

const app = express();

// STEP 1 — Enable JSON request body parsing.
app.use(express.json());


const searchTool = new TavilySearch({
    maxResults: 5,
    topic: "general",
});





// What is an Agent?

const agent = createAgent({
    model: llm,
    tools: [searchTool],

    systemPrompt: `You are a helpful AI assistant with access to a real-time web search tool.

Guidelines for using the search tool:
1. WHEN TO SEARCH: Always use the search tool for current events, real-time data (weather, stocks, sports), recent facts, or any information you are not 100% certain about. Do not search for basic math, coding syntax, or timeless general knowledge.
2. QUERY FORMULATION: Convert the user's question into concise, keyword-focused search queries rather than full conversational sentences.
3. ITERATE IF NEEDED: If the first search returns irrelevant or incomplete results, refine your keywords and search again (up to 3 times).
4. SYNTHESIZE & CITE: Answer the user's question directly based on the retrieved search results. Mention your sources or include links when helpful.
5. HONESTY: If the search results do not contain the answer, clearly state that you could not find the information rather than guessing.`
})




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

        const result = await agent.invoke({
            messages: [
                {
                    role: 'user',
                    content: prompt

                }

            ]
        })


        // Messages - 


        // console.log(result.messages.at(-1).content)

       return res.send(result.messages.at(-1).content)


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

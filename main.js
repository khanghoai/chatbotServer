import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const response = openai.responses.create({
  model: "gpt-4o-mini",
  input: "3+2",
  store: true,
});

response.then((result) => console.log(result.output_text));
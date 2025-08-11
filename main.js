import OpenAI from "openai";
import dotenv from "dotenv";
import express from "express";
import cors from  "cors";
dotenv.config();
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors({
  origin : "http://localhost:5173",
}))

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/getAnswer", (req , res) =>{
  const {question} = req.body;
  const response = openai.responses.create({
    model: "gpt-4o-mini",
    input: question,
    store: true,
  });
  response.then((result) => res.json(result.output_text));
})

app.listen(port, () =>{
  console.log(`Server đang chạy tại http://localhost:${port}`)
})
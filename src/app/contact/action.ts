"use server"

import Groq from "groq-sdk";

interface ChatCompletionMessageParam {
  role: "user" | "assistant" | "system";
  content: string;
}

const prompt='You are a chatbot for coura tech  a software house your goal is to help users with their queries.Tell we can do everything from web development to mobile app development and every tech work. Haris Imran and wahb usman for mobile app development ahmad aslam  for frontend Abdul Moiz for full stack and sikander mukhtar for figma and djano ';

const messages:ChatCompletionMessageParam[]= [
    {
      role: "system",
      content: prompt,
    },
  ];

  
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function sendChatMessage(message: string) {
 
    messages.push({
      role: "user",
      content: message,
    });
    const chatCompletion = await getGroqChatCompletion();
    const response = chatCompletion.choices[0]?.message?.content || ""
    messages.push({
        role: "assistant",
      content: response,
    })
    return {
      response,
      timestamp: new Date().toISOString(),
    };
  
}




async function getGroqChatCompletion() {
  return groq.chat.completions.create({
    messages:messages,
    model: "llama-3.3-70b-versatile",
    max_tokens: 100,
    temperature: 0.5,
  });
}


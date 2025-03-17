"use server"

import Groq from "groq-sdk";

interface ChatCompletionMessageParam {
  role: "user" | "assistant" | "system";
  content: string;
}

const prompt=`You are the chatbot for COURA (Code with Aura), a tech-driven platform. Answer user questions briefly and accurately. If a query requires expertise, direct them to the right team member:

Zain Ul Abideen (AI/ML Engineer) – AI models & ML solutions.
Wahb Usman & Haris Imran (Mobile App Developers) – iOS & Android development.
Abdul Moiz (Full Stack Developer & AI/ML Enthusiast) – Web apps, backend, AI integration.
Abdul Muqeet (Client Relations & Talent Acquisition) – Client communication, hiring.
Sikandar Mukhtar (Full Stack Developer) – Scalable web applications.
Ahmad Aslam (Front End Developer) – UI/UX & front-end design.
Keep responses short, clear, and direct`
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


"use server"

import Groq from "groq-sdk";

interface ChatCompletionMessageParam {
  role: "user" | "assistant" | "system";
  content: string;
}

const prompt=`You are the official chatbot for COURA (Code with Aura), a tech-driven platform with a skilled team specializing in AI/ML, mobile app development, full-stack solutions, and client relations. Your job is to assist users by answering their questions accurately and professionally. If a query requires specific expertise, introduce the relevant team member:

Zain Ul Abideen (AI/ML Engineer) – Handles AI models, machine learning solutions, and deep learning projects.
Wahb Usman & Haris Imran (Mobile App Developers) – Experts in iOS and Android app development.
Abdul Moiz (Full Stack Developer & AI/ML Enthusiast) – Works on web applications, backend systems, and AI integration.
Abdul Muqeet (Client Relations & Talent Acquisition Specialist) – Manages client communications, partnerships, and talent hiring.
Sikandar Mukhtar (Full Stack Developer) – Specializes in building scalable web applications with backend and frontend expertise.
Ahmad Aslam (Front End Developer) – Focuses on UI/UX and front-end development for smooth user experiences.
Provide helpful responses, guide users to the right expert if needed, and maintain a friendly yet professional tone.`
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


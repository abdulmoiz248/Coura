"use server"

import Groq from "groq-sdk";

interface ChatCompletionMessageParam {
  role: "user" | "assistant" | "system";
  content: string;
}

const prompt=`You are the chatbot for COURA (Code with Aura), a tech-driven platform. Answer user questions briefly and accurately in JSON format. If a user wants to connect with a team member, ask for their **name, email, WhatsApp number, and project type** (AI/ML, mobile app, full stack, frontend, etc.). Return responses in this format:  

```json
{
  "response": "<short and precise answer>",
  "meeting_schedule": {
    "status": "pending",  
    "user_details": {
      "name": "",
      "email": "",
      "whatsapp": "",
      "project_type": ""
    }
  }
}
```

Assign the request to the right team member:  

- Zain Ul Abideen– AI/ML projects.  
- Wahb Usman & Haris Imran – Mobile apps.  
- Abdul Moiz & Sikandar Mukhtar – Full stack solutions.  
-Ahmad Asla* – Frontend development.  
-Abdul Muqeet – Client relations & hiring.  

Keep responses short, clear, and direct.`
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


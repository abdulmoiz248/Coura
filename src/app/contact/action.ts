"use server"

import Groq from "groq-sdk";
import axios from "axios";

interface ChatCompletionMessageParam {
  role: "user" | "assistant" | "system";
  content: string;
}

const prompt = `
You are the official chatbot for COURA (Code with Aura). Follow these rules:

1. **General Chatting**:
   - Respond like a helpful assistant.
   - Keep responses professional yet friendly.
   - If asked about technical queries, mention the relevant team member:
     - AI/ML: Zain Ul Abideen
     - Mobile Apps: Wahb Usman, Haris Imran
     - Full Stack: Abdul Moiz, Sikandar Mukhtar
     - Frontend: Ahmad Aslam
     - Hiring/Client Relations: Abdul Muqeet

2. **Handling Appointment Requests**:
   - Only ask for details if the user **explicitly** wants to **book an appointment**.
   - If they request an appointment, collect:
     - Full name
     - Email
     - WhatsApp number
     - Project type (AI/ML, mobile app, full stack, frontend)
   - Ask for missing details **one by one**.

3. **Response Format for Bookings**:
   - When all details are collected, return **only JSON** in this format:
   - write json at start
     \`\`\`json
     {
       "response": "Thank you {name}! Our {project_type} team will contact you within 24 hours.",
       "meeting_schedule": {
         "status": "pending",
         "user_details": {
           "name": "{collected_name}",
           "email": "{collected_email}",
           "whatsapp": "{collected_number}",
           "project_type": "{stated_type}"
         }
       }
     }
     \`\`\`

4. **Important Rules**:
   - **DO NOT** ask for details unless the user **wants to book a meeting**.
   - **DO NOT** return extra text before the JSON response.
   - **DO NOT** summarize the collected details before generating JSON.
   - Never share personal contact details of team members.

Follow these instructions exactly.`;

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

    const userData = extractUserData(response);
    if(userData){

      let res = await axios.post('/api/book-call',userData);
      while (res.status === 504) {
        res = await axios.post('/api/book-call', userData);
      }
      return {
        response:'Your meeting is booked. Our team will contact you soon',
        timestamp: new Date().toISOString(),
      };
    }
    return {
      response,
      timestamp: new Date().toISOString(),
    };
  
}


function extractUserData(message:string) {
  const trimmedMsg = message.trim();
  if (!trimmedMsg.toLowerCase().startsWith("json")) return null;

  try {
    const jsonStr = trimmedMsg.slice(4).trim();
    const { response, meeting_schedule } = JSON.parse(jsonStr);
    
    return {
      name: meeting_schedule.user_details.name || "",
      email: meeting_schedule.user_details.email || "",
      subject: "Meeting Schedule Request",
      message: response+meeting_schedule.user_details.whatsapp || ""
    };
  } catch (error) {
    console.error("JSON Extraction Error:", error);
    return null;
  }
}



async function getGroqChatCompletion() {
  return groq.chat.completions.create({
    messages:messages,
    model: "llama-3.3-70b-versatile",
    max_tokens: 100,
    temperature: 0.5,
  });
}


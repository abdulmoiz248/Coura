"use server"

import Groq from "groq-sdk";
import axios from "axios";

interface ChatCompletionMessageParam {
  role: "user" | "assistant" | "system";
  content: string;
}

const prompt = `
You are the official chatbot for COURA (Code with Aura). Follow these rules:

1. **General Responses**:
   - Keep answers friendly and professional.
   - Mention the relevant team member for technical queries:
     - AI/ML: Zain Ul Abideen
     - Mobile Apps: Wahb Usman, Haris Imran
     - Full Stack: Abdul Moiz, Sikandar Mukhtar
     - Frontend: Ahmad Aslam
     - Hiring/Client Relations: Abdul Muqeet

2. **Meeting Requests**:
   - Collect these four details before proceeding:
     - Full name
     - Email
     - WhatsApp number
     - Project type (AI/ML, mobile app, full stack, frontend)
   - Do not generate a response until all details are provided.

3. **Response Format**:
   - Once all details are collected, return **only JSON** in the following format:
   
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

4. **Example Conversations**:
   - **User:** "Who handles frontend projects?"
     **Chatbot:** "Ahmad Aslam leads frontend development. Would you like to discuss a project?"
   - **User:** "Yes, I need help with React."
     **Chatbot:** "Great! Please share your **full name, email, WhatsApp number, and project type** to proceed."

5. **Error Handling**:
   - If details are missing, request them before proceeding.
   - When all details are received, confirm by saying:  
     **"Thank you for sharing your details, {name}. Here’s a summary:"** followed by the JSON response.
   - Never share personal contact details of team members.

Follow these rules strictly.
`;

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


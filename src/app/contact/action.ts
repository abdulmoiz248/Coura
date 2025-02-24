"use server"

export async function sendChatMessage(message: string) {
 
  return {
    response: `Thanks for your message! This is a demo response to: "${message}"`,
    timestamp: new Date().toISOString(),
  }
}


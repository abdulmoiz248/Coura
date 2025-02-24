"use client"

import type React from "react"
import { useState, useEffect, useRef, useTransition } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useOptimistic } from "react"
import { sendChatMessage } from "@/app/contact/action"

interface Message {
  content: string
  isUser: boolean
  timestamp: string
  id: string
  pending?: boolean
}

export function ChatWindow() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      content: "Hi! How can I help you today?",
      isUser: false,
      timestamp: new Date().toISOString(),
      id: "welcome",
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const isFirstRender = useRef(true)

  // Optimistic updates for messages
  const [optimisticMessages, addOptimisticMessage] = useOptimistic<Message[], Message>(
    messages,
    (state, newMessage) => [...state, newMessage],
  )

  // Scroll to bottom when messages change
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    const scrollToBottom = () => {
      if (scrollAreaRef.current) {
        const scrollContainer = scrollAreaRef.current.querySelector("[data-radix-scroll-area-viewport]")
        if (scrollContainer) {
          setTimeout(() => {
            scrollContainer.scrollTop = scrollContainer.scrollHeight
          }, 0)
        }
      }
    }

    scrollToBottom()
  }, [optimisticMessages]) // Depend on both optimistic and real messages

  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    const trimmedMessage = inputMessage.trim()
    if (!trimmedMessage) return

    setError(null)
    setInputMessage("") // Clear input immediately for better UX

    const newMessage: Message = {
      content: trimmedMessage,
      isUser: true,
      timestamp: new Date().toISOString(),
      id: crypto.randomUUID(),
    }

    // Add typing indicator message
    const typingIndicator: Message = {
      content: "Typing...",
      isUser: false,
      timestamp: new Date().toISOString(),
      id: "typing-" + crypto.randomUUID(),
      pending: true,
    }

    startTransition(() => {
      // Add user message and typing indicator
      addOptimisticMessage(newMessage)
      addOptimisticMessage(typingIndicator)
    })

    try {
      const response = await sendChatMessage(trimmedMessage)
      const botMessage: Message = {
        content: response.response,
        isUser: false,
        timestamp: response.timestamp,
        id: crypto.randomUUID(),
      }

      startTransition(() => {
        // Remove typing indicator and add bot response
        setMessages((prev) => [...prev.filter((msg) => !msg.pending), newMessage, botMessage])
      })
    } catch (error) {
      console.log(error);
      setError("Failed to send message. Please try again.")
      // Remove the optimistic messages on error
      startTransition(() => {
        setMessages((prev) => prev.filter((msg) => msg.id !== newMessage.id && !msg.pending))
      })
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full h-12 w-12 p-0 shadow-lg hover:shadow-xl transition-shadow"
          aria-label="Open chat"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      ) : (
        <Card className="w-[350px] h-[500px] flex flex-col shadow-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4 border-b">
            <CardTitle className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00FF94] to-[#00B8FF]  ">Chat with us</CardTitle>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} aria-label="Close chat">
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <ScrollArea ref={scrollAreaRef} className="flex-1 px-4">
            <div className="space-y-4 py-4">
              {optimisticMessages.map((message) => (
                <div key={message.id} className={`flex flex-col ${message.isUser ? "items-end" : "items-start"}`}>
                  <div
                    className={`rounded-lg px-4 py-2 max-w-[85%] break-words ${
                      message.isUser ? "bg-primary text-primary-foreground rounded-br-none" : "bg-muted rounded-bl-none"
                    } ${message.pending ? "opacity-70" : ""}`}
                  >
                    {message.pending ? (
                      <div className="flex items-center space-x-1">
                        <div
                          className="w-2 h-2 bg-current rounded-full animate-bounce"
                          style={{ animationDelay: "0ms" }}
                        />
                        <div
                          className="w-2 h-2 bg-current rounded-full animate-bounce"
                          style={{ animationDelay: "150ms" }}
                        />
                        <div
                          className="w-2 h-2 bg-current rounded-full animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        />
                      </div>
                    ) : (
                      <div className="whitespace-pre-wrap text-sm">{message.content}</div>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground mt-1">{formatTimestamp(message.timestamp)}</span>
                </div>
              ))}
              {error && <div className="text-sm text-red-500 text-center p-2 bg-red-50 rounded my-2">{error}</div>}
            </div>
          </ScrollArea>
          <CardContent className="p-4 pt-2 border-t">
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <Input
                placeholder="Type your message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-1"
                aria-label="Message input"
                disabled={isPending}
              />
              <Button type="submit" size="icon" disabled={!inputMessage.trim() || isPending} aria-label="Send message">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  )
}


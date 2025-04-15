
"use client"

import { useState, useRef, useEffect } from "react"
import MarkdownMessage from "./MarkdownMessage"; // adjust path as needed

interface Message {
  text: string
  isUser: boolean
  timestamp?: string;

}
interface MessagePair {
  question: string;
  answer: string;
  timestamp?: string;


}

interface UserAIProps {
  accessToken?: string;
}

interface ChatData {
  id: string
  chat_id: string
  timestamp: string
  // Add other properties as needed
}


export default function UserAI({ accessToken }: UserAIProps) {
  const [messages, setMessages] = useState<Message[]>([])

  const [inputMessage, setInputMessage] = useState("")
  const [chatList, setChatList] = useState<ChatData[]>([])
  const [currentChat, setCurrentChat] = useState<string>("")
  const chatWindowRef = useRef<HTMLDivElement>(null)

  
  useEffect(() => {
    const fetchChats = async () => {
      if (!accessToken) return

      try {

        const response = await fetch(`${process.env.NEXT_PUBLIC_BE_API_URL}/users/chat/list/`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })

        if (!response.ok) {
          throw new Error(`Failed to fetch chats: ${response.status}`)
        }

        const data = await response.json()
        setChatList(data.chats || []);
        
        // Auto-select the latest chat
        if (data.chats && data.chats.length > 0) {
          setCurrentChat(data.chats[0]?.chat_id || "");
        }
      } catch (err) {
        console.error("Error fetching chats:", err)
       
      }
    }

    fetchChats()
  }, [accessToken])

  useEffect(() => {
    const fetchMessages = async () => {
      if (!currentChat) return
      const res = await fetch(`${process.env.NEXT_PUBLIC_BE_API_URL}/users/chat/history/${currentChat}/`, {
        headers: {
          "Authorization": `Bearer ${accessToken}`,
        },
      })
      const data = await res.json()
      const formattedMessages = (data.chats as MessagePair[]).flatMap((msg) => [
        { text: msg.question, isUser: true, timestamp: msg.timestamp },
        { text: msg.answer, isUser: false, timestamp: msg.timestamp },
      ]);
      setMessages(formattedMessages)
    }

    fetchMessages()
  }, [currentChat])

  useEffect(() => {
    chatWindowRef.current?.scrollTo({ top: chatWindowRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage: Message = { text: inputMessage, isUser: true }
    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BE_API_URL}/users/chat/ai_agent/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            message: inputMessage,
            chat_id: currentChat || null,
          }),
        }
      )

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`)
      }

      const data = await response.json()
      const botMessage: Message = { text: data.message, isUser: false }
      setMessages((prev) => [...prev, botMessage])

      // If it's a new chat, save the new chat ID
      if (!currentChat && data.chat_id) {
        setCurrentChat(data.chat_id)
        setChatList(prev => [data.chat_id, ...prev])
      }
    } catch (error) {
      console.error("Error fetching chatbot response:", error)
      setMessages((prev) => [...prev, { text: "Error: Unable to fetch response", isUser: false }])
    }
  }

  const handleNewChat = () => {
    setCurrentChat("")
    setMessages([])
  }

  return (
    <div className="flex flex-col sm:flex-row h-[calc(100vh-90px)] w-full overflow-hidden">
      {/* Sidebar */}
      <aside className="w-full sm:w-64 bg-gray-800 text-white p-4 flex flex-col overflow-y-auto sm:overflow-y-auto">
        <div className="mb-4">
          <button
            onClick={handleNewChat}
            className="w-full bg-blue-400 text-[#0f1729] px-4 py-2 rounded-md font-bold hover:bg-blue-500"
          >
            + New Chat
          </button>
        </div>
        <ul className="space-y-2">
        {chatList.map((chat, idx) => (
          <li
            key={chat.id}
            onClick={() => setCurrentChat(chat.chat_id)}
            className={`cursor-pointer px-4 py-2 rounded-md ${currentChat === chat.chat_id ? "bg-gray-700" : "hover:bg-gray-700"}`}
          >
            Chat {idx + 1} — {new Date(chat.timestamp).toLocaleString()}
          </li>
        ))}

        </ul>
      </aside>

      {/* Main Chat Section */}
      <div className="flex flex-col flex-grow bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-gray-100 overflow-hidden">
        <div className="flex flex-col h-full px-4 sm:px-6 md:px-8">
        {/* <div
          ref={chatWindowRef}
          className="flex-grow overflow-y-auto p-4 bg-gray-900 rounded-2xl shadow-md"
        >
          {messages.map((message, index) => (
            <div key={index} className={`mb-2 flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
            <div className="max-w-full sm:max-w-2xl lg:max-w-3xl">
            <span className={`block p-3 rounded-lg ${message.isUser ? 'bg-blue-400 text-[#0f1729]' : 'bg-gray-700 text-white'}`}>
                  <div className="prose prose-invert">
                    <ReactMarkdown>{message.text}</ReactMarkdown>
                  </div>
                </span>
                {message.timestamp && (
                  <span className="text-xs text-gray-400 block mt-1 text-right">
                    {new Date(message.timestamp).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div> */}

<div
  ref={chatWindowRef}
  className="flex-grow overflow-y-auto p-4 bg-gray-900 rounded-2xl shadow-md"
>
  {messages.map((message, index) => (
    <div
      key={index}
      className={`mb-3 flex ${message.isUser ? "justify-end" : "justify-start"}`}
    >
      <div className="max-w-full sm:max-w-2xl lg:max-w-3xl space-y-1">
        <div
          className={`p-3 rounded-lg whitespace-pre-wrap 
            ${message.isUser ? "bg-blue-400 text-[#0f1729]" : "bg-gray-700 text-white"}
            prose prose-sm dark:prose-invert max-w-none
            prose-p:mb-1 prose-li:mb-0.5 prose-pre:my-3 prose-ul:pl-5 prose-code:px-1 leading-snug
          `}
        >
          <MarkdownMessage text={message.text} />
        </div>
        {message.timestamp && (
          <div className="text-xs text-gray-400 text-right">
            {new Date(message.timestamp).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}
          </div>
        )}
      </div>
    </div>
  ))}
</div>



          <form
            onSubmit={handleSendMessage}
            className="mt-4 flex items-center gap-2 w-full pb-4 sm:pb-0"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow bg-gray-800 text-white rounded-full px-4 py-3 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-400 text-[#0f1729] rounded-full px-6 py-3 font-semibold hover:bg-blue-500 transition-colors mb-4"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

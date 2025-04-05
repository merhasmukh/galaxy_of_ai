"use client"

import { useState, useRef, useEffect } from "react"
import ReactMarkdown from "react-markdown"

interface Message {
  text: string
  isUser: boolean
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState("")
  const [chatList, setChatList] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem("chatList") || "[\"Default Chat\"]")
    }
    return ["Default Chat"]
  })
  const [currentChat, setCurrentChat] = useState<string>(
    typeof window !== 'undefined'
      ? localStorage.getItem("currentChat") || "Default Chat"
      : "Default Chat"
  )
  const chatWindowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const storedMessages = localStorage.getItem(`messages_${currentChat}`)
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages))
    } else {
      setMessages([])
    }
    localStorage.setItem("currentChat", currentChat)
  }, [currentChat])

  useEffect(() => {
    localStorage.setItem(`messages_${currentChat}`, JSON.stringify(messages))
  }, [messages, currentChat])

  useEffect(() => {
    chatWindowRef.current?.scrollTo({ top: chatWindowRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    localStorage.setItem("chatList", JSON.stringify(chatList))
  }, [chatList])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage: Message = { text: inputMessage, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BE_API_URL}/chat/galaxy_ai_agent/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: inputMessage }),
        }
      );

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      const data = await response.json();
      const botMessage: Message = { text: data.message, isUser: false };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
      setMessages((prev) => [...prev, { text: "Error: Unable to fetch response", isUser: false }]);
    }
  };

  const handleNewChat = () => {
    const newChat = `Chat ${chatList.length + 1}`;
    setChatList([...chatList, newChat]);
    setCurrentChat(newChat);
    setMessages([]);
  };

  return (
    <div className="flex flex-col sm:flex-row h-screen w-full overflow-hidden">
      {/* Sidebar */}
      <aside className="w-full sm:w-64 bg-gray-800 text-white p-4 flex flex-col overflow-y-auto sm:overflow-y-auto">
        <div className="mb-4">
          <button
            onClick={handleNewChat}
            className="w-full bg-orange-400 text-[#0f1729] px-4 py-2 rounded-md font-bold hover:bg-orange-500"
          >
            + New Chat
          </button>
        </div>
        <ul className="space-y-2">
          {chatList.map((chat, idx) => (
            <li
              key={idx}
              onClick={() => setCurrentChat(chat)}
              className={`cursor-pointer px-4 py-2 rounded-md ${currentChat === chat ? "bg-gray-700" : "hover:bg-gray-700"}`}
            >
              {chat}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Chat Section */}
      <div className="flex flex-col flex-grow bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-gray-100 overflow-hidden">
        <div className="flex flex-col h-full px-4 sm:px-6 md:px-8">
          <div
            ref={chatWindowRef}
            className="flex-grow overflow-y-auto p-4 bg-gray-900 rounded-2xl shadow-md"
          >
            {messages.map((message, index) => (
              <div key={index} className={`mb-2 flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                <span className={`p-3 rounded-lg ${message.isUser ? 'bg-orange-400 text-[#0f1729]' : 'bg-gray-700 text-white'}`}>
                  <div className="prose prose-invert">
                    <ReactMarkdown>{message.text}</ReactMarkdown>
                  </div>
                </span>
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
              className="bg-orange-400 text-[#0f1729] rounded-full px-6 py-3 font-semibold hover:bg-orange-500 transition-colors mb-4"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

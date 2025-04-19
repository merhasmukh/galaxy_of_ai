"use client"

import { useState, useRef, useEffect } from "react"
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight"; // Optional: for code highlighting
import "highlight.js/styles/github-dark.css";    // Optional: Code block theme

interface Message {
  text: string
  isUser: boolean
  created_at?: string;
}

interface MessagePair {
  question: string;
  answer: string;
  created_at?: string;
}

interface UserAIProps {
  accessToken?: string;
}

interface ChatData {
  id: string;
  chat_id: string;
  created_at: string;
  name?: string;       
  description?: string;  
  language?: string;   
}

export default function UserAI({ accessToken }: UserAIProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState("")
  const [chatList, setChatList] = useState<ChatData[]>([])
  const [currentChat, setCurrentChat] = useState<string>("")
  const chatWindowRef = useRef<HTMLDivElement>(null)
  const [chatName, setChatName] = useState("");
  const [chatDescription, setChatDescription] = useState("");
  const [chatLanguage, setChatLanguage] = useState("English");
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const selectedChat = chatList.find(chat => chat.chat_id === currentChat);
    setChatName(selectedChat?.name || "");
    setChatDescription(selectedChat?.description || "");
    setChatLanguage(selectedChat?.language || "");
  }, [currentChat]);
  
  const handleSaveChatInfo = async () => {
    if (!currentChat || !chatName.trim()) return;
  
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BE_API_URL}/users/chat/update/${currentChat}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          name: chatName,
          description: chatDescription,
          language: chatLanguage,
        }),
      });
  
      if (!res.ok) throw new Error("Failed to update chat info");
  
      // Update local chatList with new name/description
      setChatList(prev => prev.map(chat =>
        chat.chat_id === currentChat ? { ...chat, name: chatName, description: chatDescription, language: chatLanguage } : chat
      ));
      
      // Hide sidebar after saving on mobile
      if (window.innerWidth < 640) {
        setShowSidebar(false);
      }
    } catch (err) {
      console.error("Failed to save chat info:", err);
    }
  };
   
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
        { text: msg.question, isUser: true, timestamp: msg.created_at },
        { text: msg.answer, isUser: false, timestamp: msg.created_at },
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
    // Hide sidebar after creating new chat on mobile
    if (window.innerWidth < 640) {
      setShowSidebar(false);
    }
  }

  const handleSelectChat = (chatId: string) => {
    setCurrentChat(chatId);
    // Hide sidebar after selecting chat on mobile
    if (window.innerWidth < 640) {
      setShowSidebar(false);
    }
  }

  return (
    <div className="flex flex-col sm:flex-row h-[calc(100vh-90px)] w-full overflow-hidden rounded-md relative">
      {/* Mobile Toggle Button */}
    

          {/* Sidebar */}


      <aside
            className={`fixed top-0 left-0 z-40 w-64 h-full bg-gray-800 text-white p-4 rounded-md transform transition-transform duration-300 ease-in-out
              ${showSidebar ? "translate-x-0" : "-translate-x-full"} 
              sm:translate-x-0 sm:relative sm:top-auto sm:left-auto sm:z-0 sm:w-64 sm:h-auto sm:flex sm:flex-col sm:p-4 sm:bg-gray-800 sm:block`}
          >
            {/* Sidebar Form Section */}
            <div className="mb-4">
              <label className="block text-sm text-white mb-1">Chat Bot Name:</label>
              <input
                type="text"
                placeholder="Chat Name"
                value={chatName}
                onChange={(e) => setChatName(e.target.value)}
                className="w-full bg-gray-700 text-white p-2 rounded mb-2"
              />
              <label className="block text-sm text-white mb-1">Project Description:</label>
              <textarea
                placeholder="Chat Description"
                value={chatDescription}
                onChange={(e) => setChatDescription(e.target.value)}
                rows={2}
                className="w-full bg-gray-700 text-white p-2 rounded resize-none mb-2"
              />
              <label className="block text-sm text-white mb-1">Response Language:</label>
              <select
                value={chatLanguage}
                onChange={(e) => setChatLanguage(e.target.value)}
                className="w-full bg-gray-700 text-white p-2 rounded mb-2"
              >
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
                <option value="gujarati">Gujarati</option>
                <option value="hinglish">Hinglish</option>
              </select>
              <button
                onClick={handleSaveChatInfo}
                className="w-full bg-blue-400 text-[#0f1729] px-4 py-2 rounded-md font-bold hover:bg-blue-500"
              >
                Save Chat Info
              </button>
            </div>

            {/* New Chat Button */}
            <div className="mb-4">
              <button
                onClick={handleNewChat}
                className="w-full bg-blue-400 text-[#0f1729] px-4 py-2 rounded-md font-bold hover:bg-blue-500"
              >
                + New Chat
              </button>
            </div>

            {/* Chat List */}
            <ul className="space-y-2 overflow-y-auto">
              {chatList.map((chat, idx) => (
                <li
                  key={chat.id}
                  onClick={() => handleSelectChat(chat.chat_id)}
                  className={`cursor-pointer px-4 py-2 rounded-md ${
                    currentChat === chat.chat_id ? "bg-gray-700" : "hover:bg-gray-700"
                  }`}
                >
                  {chat.name || `Chat ${idx + 1}`} —{" "}
                  {new Date(chat.created_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </li>
              ))}
            </ul>
            
          </aside>


      {/* Main Chat Section */}
      <div className="flex flex-col flex-grow bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-gray-100 overflow-hidden">
      <button 
          onClick={() => setShowSidebar(!showSidebar)} 
          className="sm:hidden fixed  right-3 z-50 bg-gray-700 text-white p-2 rounded-full"
        >
          {showSidebar ? "✕" : "☰"}
        </button>
        <div className="flex flex-col h-full px-4 sm:px-6 md:px-8 pt-12 sm:pt-0">
       
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
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      rehypePlugins={[rehypeHighlight]} // Optional
                    >
                      {message.text}
                    </ReactMarkdown>
                  </div>
                  {message.created_at && (
                    <div className="text-xs text-gray-400 text-right">
                      {new Date(message.created_at).toLocaleTimeString([], {
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
          className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full pb-4 sm:pb-0 px-2"
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
            className="bg-blue-400 text-[#0f1729] rounded-full px-6 py-3 font-semibold hover:bg-blue-500 transition-colors w-full sm:w-auto"
          >
            Send
          </button>
        </form>

        </div>
      </div>
    </div>
  )
}
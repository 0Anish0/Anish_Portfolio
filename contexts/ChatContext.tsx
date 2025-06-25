'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  type: string;
  suggestions?: string[];
}

interface ChatContextType {
  messages: Message[];
  addMessage: (message: Message) => void;
  clearMessages: () => void;
  isTyping: boolean;
  setIsTyping: (typing: boolean) => void;
}

interface ChatProviderProps {
  children: ReactNode;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const useChat = (): ChatContextType => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Anish's AI assistant. I can help you learn about his skills, projects, and experience in ML and full-stack development. What would you like to know?",
      sender: 'bot',
      timestamp: new Date(),
      type: 'text',
      suggestions: [
        "Tell me about your ML projects",
        "What technologies do you use?",
        "Show me your experience",
        "How can we collaborate?"
      ]
    }
  ]);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const addMessage = (message: Message) => {
    setMessages(prev => [...prev, message]);
  };

  const clearMessages = () => {
    setMessages([
      {
        id: 1,
        text: "Hi! I'm Anish's AI assistant. I can help you learn about his skills, projects, and experience in ML and full-stack development. What would you like to know?",
        sender: 'bot',
        timestamp: new Date(),
        type: 'text',
        suggestions: [
          "Tell me about your ML projects",
          "What technologies do you use?",
          "Show me your experience",
          "How can we collaborate?"
        ]
      }
    ]);
  };

  return (
    <ChatContext.Provider value={{
      messages,
      addMessage,
      clearMessages,
      isTyping,
      setIsTyping,
    }}>
      {children}
    </ChatContext.Provider>
  );
};
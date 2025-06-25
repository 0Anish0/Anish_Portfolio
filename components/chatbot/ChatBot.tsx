'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaTimes, 
  FaPaperPlane, 
  FaRobot, 
  FaUser, 
  FaCode, 
  FaBrain, 
  FaLightbulb,
  FaMicrophone,
  FaMicrophoneSlash 
} from 'react-icons/fa';
import { useChat } from '@/contexts/ChatContext';
import axios from 'axios';

interface QuickReply {
  text: string;
  icon: React.ComponentType<{className?: string}>;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>('');
  const [isListening, setIsListening] = useState<boolean>(false);
  const [conversationHistory, setConversationHistory] = useState<Array<{role: 'user' | 'assistant', content: string}>>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  
  const { messages, addMessage, isTyping, setIsTyping } = useChat();

  const quickReplies: QuickReply[] = [
    { text: "Tell me about your ML projects", icon: FaBrain },
    { text: "What technologies do you use?", icon: FaCode },
    { text: "Show me your experience", icon: FaLightbulb },
    { text: "How can we collaborate?", icon: FaUser },
  ];

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async (text: string = inputText): Promise<void> => {
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: text.trim(),
      sender: 'user' as const,
      timestamp: new Date(),
      type: 'text'
    };

    addMessage(userMessage);
    setInputText('');
    setIsTyping(true);

    const newHistory = [...conversationHistory, { role: 'user' as const, content: text.trim() }];
    setConversationHistory(newHistory);

    try {
      const response = await axios.post('/api/chat', {
        message: text.trim(),
        conversationHistory: newHistory,
      });

      const botMessage = {
        id: Date.now() + 1,
        text: response.data.message,
        sender: 'bot' as const,
        timestamp: new Date(),
        type: response.data.type || 'text',
        suggestions: response.data.suggestions
      };

      addMessage(botMessage);
      setConversationHistory([...newHistory, { role: 'assistant', content: response.data.message }]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage = {
        id: Date.now() + 1,
        text: "I'm sorry, I'm having trouble processing your request right now. Please try again or contact Anish directly at anishpandey4576@gmail.com.",
        sender: 'bot' as const,
        timestamp: new Date(),
        type: 'error'
      };
      addMessage(errorMessage);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>): void => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const startListening = (): void => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
        const transcript: string = event.results[0][0].transcript;
        setInputText(transcript);
        setIsListening(false);
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    }
  };

  return (
    <>
      {/* Floating ChatBot Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full shadow-2xl hover:shadow-primary-500/25 transition-all duration-300 flex items-center justify-center group"
          title="Chat with AI Assistant"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaRobot className="w-8 h-8" />
          </motion.div>
          
          {/* Pulse Effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 animate-ping opacity-20"></div>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            Chat with AI Assistant
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
          </div>
        </motion.button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              className="w-full max-w-2xl h-[600px] bg-white dark:bg-dark-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                  >
                    <FaRobot className="w-5 h-5 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-white font-semibold">AI Assistant</h3>
                    <p className="text-white/80 text-sm">Powered by OpenAI</p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <FaTimes className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        message.sender === 'user' 
                          ? 'bg-primary-500 text-white' 
                          : 'bg-gray-200 dark:bg-dark-700 text-gray-600 dark:text-gray-300'
                      }`}>
                        {message.sender === 'user' ? <FaUser className="w-4 h-4" /> : <FaRobot className="w-4 h-4" />}
                      </div>
                      <div className={`rounded-2xl px-4 py-2 ${
                        message.sender === 'user'
                          ? 'bg-primary-500 text-white'
                          : 'bg-gray-100 dark:bg-dark-700 text-gray-800 dark:text-gray-200'
                      }`}>
                        <p className="whitespace-pre-line">{message.text}</p>
                        {message.suggestions && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {message.suggestions.map((suggestion: string, index: number) => (
                              <motion.button
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleSendMessage(suggestion)}
                                className="px-3 py-1 bg-white/20 rounded-full text-xs hover:bg-white/30 transition-colors"
                              >
                                {suggestion}
                              </motion.button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="flex items-start space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-dark-700 flex items-center justify-center">
                        <FaRobot className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                      </div>
                      <div className="bg-gray-100 dark:bg-dark-700 rounded-2xl px-4 py-2">
                        <div className="flex space-x-1">
                          {[0, 1, 2].map((i: number) => (
                            <motion.div
                              key={i}
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
                              className="w-2 h-2 bg-gray-400 rounded-full"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Replies */}
              <div className="px-4 py-2 border-t border-gray-200 dark:border-dark-700">
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply: QuickReply, index: number) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleSendMessage(reply.text)}
                      className="flex items-center space-x-2 px-3 py-2 bg-gray-100 dark:bg-dark-700 rounded-full text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors"
                    >
                      <reply.icon className="w-3 h-3" />
                      <span>{reply.text}</span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <div className="p-4 border-t border-gray-200 dark:border-dark-700">
                <div className="flex items-center space-x-2">
                  <div className="flex-1 relative">
                    <textarea
                      ref={inputRef}
                      value={inputText}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setInputText(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      className="w-full px-4 py-2 pr-12 bg-gray-100 dark:bg-dark-700 border border-gray-300 dark:border-dark-600 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-800 dark:text-gray-200"
                      rows={1}
                    />
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={startListening}
                      className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-1 rounded-full ${
                        isListening ? 'bg-red-500 text-white' : 'text-gray-400 hover:text-gray-600'
                      }`}
                    >
                      {isListening ? <FaMicrophoneSlash className="w-4 h-4" /> : <FaMicrophone className="w-4 h-4" />}
                    </motion.button>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleSendMessage()}
                    disabled={!inputText.trim() || isTyping}
                    className="w-10 h-10 bg-primary-500 text-white rounded-xl flex items-center justify-center hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <FaPaperPlane className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
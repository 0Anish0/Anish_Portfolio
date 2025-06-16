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
import { useTheme } from '../../contexts/ThemeContext';

const ChatBot = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your AI assistant. I can help you learn about my skills, projects, and experience in ML and full-stack development. What would you like to know?",
      sender: 'bot',
      timestamp: new Date(),
      type: 'text'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const { isDark } = useTheme();

  const quickReplies = [
    { text: "Tell me about your ML projects", icon: FaBrain },
    { text: "What technologies do you use?", icon: FaCode },
    { text: "Show me your experience", icon: FaLightbulb },
    { text: "How can we collaborate?", icon: FaUser },
  ];

  const scrollToBottom = () => {
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

  const generateBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('ml') || message.includes('machine learning') || message.includes('ai')) {
      return {
        text: "I specialize in Machine Learning with expertise in Python, TensorFlow, PyTorch, and scikit-learn. I've worked on projects involving computer vision, NLP, and predictive analytics. Would you like to know about any specific ML project?",
        suggestions: ["Computer Vision Projects", "NLP Applications", "Predictive Models"]
      };
    }
    
    if (message.includes('project') || message.includes('work')) {
      return {
        text: "I've built several exciting projects including:\n\n🤖 AI-powered chatbots\n📊 Data visualization dashboards\n🔍 Computer vision applications\n🌐 Full-stack web applications\n\nWhich type of project interests you most?",
        suggestions: ["Web Applications", "AI Projects", "Data Science"]
      };
    }
    
    if (message.includes('technology') || message.includes('tech') || message.includes('stack')) {
      return {
        text: "My tech stack includes:\n\n**Frontend:** React, Next.js, TypeScript, Tailwind CSS\n**Backend:** Node.js, Python, Express, FastAPI\n**ML/AI:** TensorFlow, PyTorch, scikit-learn, OpenCV\n**Database:** MongoDB, PostgreSQL, Redis\n**Cloud:** AWS, Google Cloud, Docker\n\nWhat specific technology would you like to discuss?",
        suggestions: ["Frontend Development", "Backend Systems", "ML Frameworks"]
      };
    }
    
    if (message.includes('experience') || message.includes('background')) {
      return {
        text: "I have 3+ years of experience in full-stack development and 2+ years in machine learning. I've worked on enterprise applications, startup projects, and research initiatives. My experience spans from building scalable web applications to developing intelligent ML models.",
        suggestions: ["Career Journey", "Key Achievements", "Skills Timeline"]
      };
    }
    
    if (message.includes('collaborate') || message.includes('hire') || message.includes('work together')) {
      return {
        text: "I'd love to collaborate! I'm available for:\n\n💼 Full-time opportunities\n🚀 Freelance projects\n🤝 Consulting work\n📚 Mentoring\n\nFeel free to reach out via email or LinkedIn. What type of collaboration are you interested in?",
        suggestions: ["View Resume", "Contact Information", "Project Discussion"]
      };
    }
    
    if (message.includes('contact') || message.includes('email') || message.includes('reach')) {
      return {
        text: "You can reach me through:\n\n📧 anishpandey4576@gmail.com\n📱 +91 9852208695\n💼 LinkedIn: /in/anish-kumar-pandey\n🐙 GitHub: /0Anish0\n\nI typically respond within 24 hours!",
        suggestions: ["Send Email", "View LinkedIn", "Check GitHub"]
      };
    }
    
    // Default response
    return {
      text: "That's an interesting question! I'm here to help you learn about my background in ML and full-stack development. You can ask me about my projects, skills, experience, or how we might work together. What would you like to explore?",
      suggestions: ["My Projects", "Technical Skills", "Work Experience", "Contact Info"]
    };
  };

  const handleSendMessage = async (text = inputText) => {
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date(),
      type: 'text'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = generateBotResponse(text);
      const botMessage = {
        id: Date.now() + 1,
        text: botResponse.text,
        sender: 'bot',
        timestamp: new Date(),
        type: 'text',
        suggestions: botResponse.suggestions
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const startListening = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
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

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
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
                <p className="text-white/80 text-sm">Always here to help</p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
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
                        {message.suggestions.map((suggestion, index) => (
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
                      {[0, 1, 2].map((i) => (
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
              {quickReplies.map((reply, index) => (
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
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="w-full px-4 py-2 pr-12 bg-gray-100 dark:bg-dark-700 border border-gray-300 dark:border-dark-600 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-800 dark:text-gray-200"
                  rows="1"
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
                disabled={!inputText.trim()}
                className="w-10 h-10 bg-primary-500 text-white rounded-xl flex items-center justify-center hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <FaPaperPlane className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ChatBot;
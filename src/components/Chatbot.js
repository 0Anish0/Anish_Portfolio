import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaTimes, FaCommentDots } from 'react-icons/fa';
import '../components/styles/ChatbotStyles.css';

// Custom SVG Chatbot Logo (chat bubble with sparkle)
const ChatbotLogo = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="8" width="32" height="22" rx="11" fill="url(#bubble)"/>
    <ellipse cx="32" cy="8" rx="2" ry="2" fill="#fff"/>
    <ellipse cx="10" cy="19" rx="2" ry="2" fill="#fff"/>
    <ellipse cx="20" cy="19" rx="2" ry="2" fill="#fff"/>
    <ellipse cx="30" cy="19" rx="2" ry="2" fill="#fff"/>
    <path d="M32 30L36 36" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
    <defs>
      <linearGradient id="bubble" x1="4" y1="8" x2="36" y2="30" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3b82f6"/>
        <stop offset="1" stopColor="#06b6d4"/>
      </linearGradient>
    </defs>
  </svg>
);

const USER_AVATAR = <FaCommentDots size={24} />;

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', content: "Hi! I'm your AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll to bottom on new message
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  // Send message to backend
  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch('/api/gemini/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map(m => ({ role: m.role === 'user' ? 'user' : 'model', content: m.content }))
        })
      });
      const data = await res.json();
      let botReply = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I could not understand that.';
      setMessages([...newMessages, { role: 'bot', content: botReply }]);
    } catch (err) {
      setMessages([...newMessages, { role: 'bot', content: 'Error: Unable to reach Gemini API.' }]);
    } finally {
      setLoading(false);
    }
  };

  // Handle Enter key
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        className="chatbot-fab"
        whileHover={{ scale: 1.08 }}
        onClick={() => setOpen(true)}
        aria-label="Open chat"
      >
        <ChatbotLogo size={32} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="chatbot-window"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.25 }}
          >
            {/* Header */}
            <div className="chatbot-header">
              <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <ChatbotLogo size={28} />
                <span style={{ fontWeight: 700, fontSize: 18, letterSpacing: 0.5 }}>AnishVerse</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}
                aria-label="Close chat"
              >
                <FaTimes size={22} />
              </button>
            </div>
            {/* Messages */}
            <div className="chatbot-messages">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    flexDirection: msg.role === 'user' ? 'row-reverse' : 'row',
                    alignItems: 'flex-end',
                    gap: 10,
                  }}
                >
                  <div className={`chatbot-bubble ${msg.role === 'user' ? 'chatbot-bubble-user' : 'chatbot-bubble-bot'}`}>
                    {msg.content}
                  </div>
                  <div className={`chatbot-avatar${msg.role === 'user' ? ' chatbot-avatar-user' : ''}`}>
                    {msg.role === 'user' ? USER_AVATAR : <ChatbotLogo size={22} />}
                  </div>
                </div>
              ))}
              {loading && (
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                  <div className="chatbot-bubble chatbot-bubble-bot chatbot-typing">
                    <span>Gemini is thinking</span>
                    <span className="chatbot-typing-dots">
                      <span className="chatbot-typing-dot" />
                      <span className="chatbot-typing-dot" />
                      <span className="chatbot-typing-dot" />
                    </span>
                  </div>
                  <div className="chatbot-avatar">
                    <ChatbotLogo size={22} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            {/* Input */}
            <form
              className="chatbot-input-area"
              onSubmit={e => { e.preventDefault(); sendMessage(); }}
            >
              <input
                type="text"
                className="chatbot-input"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                disabled={loading}
                autoFocus={open}
              />
              <button
                type="submit"
                className="chatbot-send-btn"
                disabled={loading || !input.trim()}
                aria-label="Send message"
              >
                <FaPaperPlane />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot; 
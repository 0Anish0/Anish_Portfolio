import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';

// Layout Components
import Navbar from './components/layout/Navbar';
// import Footer from './components/layout/Footer';
// import ChatBot from './components/chatbot/ChatBot';

// Pages
import Home from './pages/Home';
// import About from './pages/About';
// import Skills from './pages/Skills';
// import Projects from './pages/Projects';
// import Experience from './pages/Experience';
// import Contact from './pages/Contact';

// Context
import { ThemeProvider } from './contexts/ThemeContext';

// Styles
import './index.css';

// Temporary simple components to avoid errors
const Footer: React.FC = () => <footer>Footer</footer>;
const ChatBot: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => (
  isOpen ? <div onClick={onClose}>ChatBot (Click to close)</div> : null
);
const About: React.FC = () => <div>About Page</div>;
const Skills: React.FC = () => <div>Skills Page</div>;
const Projects: React.FC = () => <div>Projects Page</div>;
const Experience: React.FC = () => <div>Experience Page</div>;
const Contact: React.FC = () => <div>Contact Page</div>;

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const pageTransition = {
    type: 'tween' as const,
    ease: 'anticipate' as const,
    duration: 0.5
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-dark-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Navbar onChatToggle={() => setIsChatOpen(true)} />
        
        <AnimatePresence mode="wait">
          <motion.main
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            {...({} as any)}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.main>
        </AnimatePresence>

        <Footer />
        
        <ChatBot 
          isOpen={isChatOpen} 
          onClose={() => setIsChatOpen(false)} 
        />

        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: 'var(--toast-bg)',
              color: 'var(--toast-color)',
              border: '1px solid var(--toast-border)',
            },
          }}
        />
      </div>
    </ThemeProvider>
  );
};

export default App; 
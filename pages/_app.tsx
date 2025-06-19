import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { FaRobot } from 'react-icons/fa';
import Head from 'next/head';

// Layout Components
import Navbar from '../src/components/layout/Navbar';
import Footer from '../src/components/layout/Footer';
import ChatBot from '../src/components/chatbot/ChatBot';

// Context
import { ThemeProvider } from '../src/contexts/ThemeContext';

// Styles
import '../src/index.css';

export default function App({ Component, pageProps, router }: AppProps) {
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
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-dark-900 text-gray-900 dark:text-white transition-colors duration-300">
          <Navbar />
          
          <AnimatePresence mode="wait">
            <motion.main
              key={router.route}
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Component {...pageProps} />
            </motion.main>
          </AnimatePresence>

          <Footer />
          
          {/* Floating ChatBot Button */}
          {!isChatOpen && (
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsChatOpen(true)}
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
    </>
  );
} 
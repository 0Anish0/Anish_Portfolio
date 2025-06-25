import React from 'react';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Poppins } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { ChatProvider } from '@/contexts/ChatContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ChatBot from '@/components/chatbot/ChatBot';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Anish Kumar Pandey - AI/ML Engineer & Full Stack Developer | Noida, India',
  description: 'Expert ML Engineer and Full Stack Developer from Noida, India. Specializing in Machine Learning, AI, Python, React, and modern web technologies. Available for freelance projects and full-time opportunities.',
  keywords: 'Anish, Anish Kumar, Anish Kumar Pandey, ML Engineer, Machine Learning Engineer, Full Stack Developer, Python Developer, React Developer, AI Engineer, Noida Developer, India, Freelancer, Software Engineer, Artificial Intelligence, Data Science, Web Development',
  authors: [{ name: 'Anish Kumar Pandey' }],
  creator: 'Anish Kumar Pandey',
  publisher: 'Anish Kumar Pandey',
  robots: 'index, follow',
  canonical: 'https://anishpandey.netlify.app',
  openGraph: {
    title: 'Anish Kumar Pandey - ML Engineer & Full Stack Developer',
    description: 'Expert ML Engineer and Full Stack Developer from Noida, India. Specializing in Machine Learning, AI, Python, React, and modern web technologies.',
    type: 'website',
    url: 'https://anishpandey.netlify.app',
    siteName: 'Anish Kumar Pandey Portfolio',
    locale: 'en_US',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Anish Kumar Pandey - ML Engineer & Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anish Kumar Pandey - ML Engineer & Full Stack Developer',
    description: 'Expert ML Engineer and Full Stack Developer from Noida, India',
    creator: '@Factlogical_Ani',
    images: ['/logo.png'],
  },
  other: {
    'geo.region': 'IN-UP',
    'geo.placename': 'Noida',
    'geo.position': '28.5355;77.3910',
    'ICBM': '28.5355, 77.3910',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Anish Kumar Pandey",
              "jobTitle": "ML Engineer & Full Stack Developer",
              "description": "Expert ML Engineer and Full Stack Developer specializing in Machine Learning, AI, Python, React, and modern web technologies.",
              "url": "https://anishpandey.netlify.app",
              "image": "https://anishpandey.netlify.app/logo.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Noida",
                "addressRegion": "Uttar Pradesh",
                "addressCountry": "India"
              },
              "email": "anishpandey4576@gmail.com",
              "telephone": "+91-9852208695",
              "sameAs": [
                "https://www.linkedin.com/in/anish-kumar-pandey-57390b190/",
                "https://github.com/0Anish0",
                "https://twitter.com/Factlogical_Ani",
                "https://www.instagram.com/factlogical_anish/",
                "https://www.youtube.com/@Factlogical_Anish/videos"
              ],
              "knowsAbout": [
                "Machine Learning",
                "Artificial Intelligence",
                "Python",
                "React",
                "Node.js",
                "TensorFlow",
                "PyTorch",
                "Full Stack Development",
                "Web Development"
              ],
              "alumniOf": "Bharat Institute of Technology",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              }
            })
          }}
        />
      </head>
      <body className="font-sans">
        <ThemeProvider>
          <ChatProvider>
            <div className="min-h-screen bg-white dark:bg-dark-900 text-gray-900 dark:text-white transition-colors duration-300">
              <Navbar />
              <main>{children}</main>
              <Footer />
              <ChatBot />
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
          </ChatProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
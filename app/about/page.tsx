import React from 'react';
import type { Metadata } from 'next';
import About from '@/components/pages/About';

export const metadata: Metadata = {
  title: 'About - Anish Kumar Pandey | ML Engineer & Developer',
  description: 'Learn about Anish Kumar Pandey\'s background, experience, and passion for Machine Learning and Full Stack Development.',
  keywords: 'About Anish, ML Engineer, Full Stack Developer, Background, Experience',
  openGraph: {
    title: 'About - Anish Kumar Pandey',
    description: 'Learn about Anish Kumar Pandey\'s background and experience',
  },
};

export default function AboutPage() {
  return <About />;
}
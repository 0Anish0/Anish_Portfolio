import React from 'react';
import type { Metadata } from 'next';
import Experience from '@/components/pages/Experience';

export const metadata: Metadata = {
  title: 'Experience - Anish Kumar Pandey | Professional Background',
  description: 'Discover Anish Kumar Pandey\'s professional experience in Machine Learning, AI development, and Full Stack Development.',
  keywords: 'Experience, Professional Background, Work History, ML Engineer, Full Stack Developer',
  openGraph: {
    title: 'Experience - Anish Kumar Pandey',
    description: 'Professional experience and work history of Anish Kumar Pandey',
  },
};

export default function ExperiencePage() {
  return <Experience />;
}
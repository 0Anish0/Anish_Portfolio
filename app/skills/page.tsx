import React from 'react';
import type { Metadata } from 'next';
import Skills from '../../components/pages/Skills';

export const metadata: Metadata = {
  title: 'Skills - Anish Kumar Pandey | Technical Expertise',
  description: 'Explore Anish Kumar Pandey\'s technical skills including Machine Learning, AI, Python, React, Node.js, and more.',
  keywords: 'Skills, Machine Learning, AI, Python, React, Node.js, Full Stack Development',
  openGraph: {
    title: 'Skills - Anish Kumar Pandey',
    description: 'Technical skills and expertise of Anish Kumar Pandey',
  },
};

export default function SkillsPage() {
  return <Skills />;
}
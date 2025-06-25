import React from 'react';
import type { Metadata } from 'next';
import Projects from '@/components/pages/Projects';

export const metadata: Metadata = {
  title: 'Projects - Anish Kumar Pandey | Portfolio & Work',
  description: 'Explore Anish Kumar Pandey\'s portfolio of ML projects, web applications, and software development work.',
  keywords: 'Projects, Portfolio, Machine Learning Projects, Web Development, Software Development',
  openGraph: {
    title: 'Projects - Anish Kumar Pandey',
    description: 'Portfolio and projects by Anish Kumar Pandey',
  },
};

export default function ProjectsPage() {
  return <Projects />;
}
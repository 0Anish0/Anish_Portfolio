import React from 'react';
import type { Metadata } from 'next';
import Contact from '../../components/pages/Contact';

export const metadata: Metadata = {
  title: 'Contact - Anish Kumar Pandey | Get In Touch',
  description: 'Get in touch with Anish Kumar Pandey for ML engineering, full stack development projects, or collaboration opportunities.',
  keywords: 'Contact, Get In Touch, Hire ML Engineer, Full Stack Developer, Collaboration',
  openGraph: {
    title: 'Contact - Anish Kumar Pandey',
    description: 'Contact Anish Kumar Pandey for projects and collaborations',
  },
};

export default function ContactPage() {
  return <Contact />;
}
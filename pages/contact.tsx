import React from 'react';
import Head from 'next/head';
import Contact from '../src/pages/Contact';

const ContactPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contact - Anish Kumar Pandey | Get In Touch</title>
        <meta name="description" content="Get in touch with Anish Kumar Pandey for ML engineering, full stack development projects, or collaboration opportunities." />
        <meta name="keywords" content="Contact, Get In Touch, Hire ML Engineer, Full Stack Developer, Collaboration" />
        <meta property="og:title" content="Contact - Anish Kumar Pandey" />
        <meta property="og:description" content="Contact Anish Kumar Pandey for projects and collaborations" />
      </Head>
      <Contact />
    </>
  );
};

export default ContactPage; 
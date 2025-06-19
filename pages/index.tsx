import React from 'react';
import Head from 'next/head';
import HeroSection from '../src/components/sections/HeroSection';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Anish Kumar Pandey - AI/ML Engineer & Full Stack Developer | Noida, India</title>
        <meta name="description" content="Expert ML Engineer and Full Stack Developer from Noida, India. Specializing in Machine Learning, AI, Python, React, and modern web technologies." />
        <meta name="keywords" content="ML Engineer, Full Stack Developer, AI, Machine Learning, Python, React, Next.js, Noida, India" />
        <meta name="author" content="Anish Kumar Pandey" />
        <meta property="og:title" content="Anish Kumar Pandey - AI/ML Engineer & Full Stack Developer" />
        <meta property="og:description" content="Expert ML Engineer and Full Stack Developer from Noida, India" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Anish Kumar Pandey - AI/ML Engineer & Full Stack Developer" />
        <meta name="twitter:description" content="Expert ML Engineer and Full Stack Developer from Noida, India" />
      </Head>
      <div>
        <HeroSection />
      </div>
    </>
  );
};

export default Home; 
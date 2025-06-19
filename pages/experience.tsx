import React from 'react';
import Head from 'next/head';
import Experience from '../src/pages/Experience';

const ExperiencePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Experience - Anish Kumar Pandey | Professional Background</title>
        <meta name="description" content="Discover Anish Kumar Pandey's professional experience in Machine Learning, AI development, and Full Stack Development." />
        <meta name="keywords" content="Experience, Professional Background, Work History, ML Engineer, Full Stack Developer" />
        <meta property="og:title" content="Experience - Anish Kumar Pandey" />
        <meta property="og:description" content="Professional experience and work history of Anish Kumar Pandey" />
      </Head>
      <Experience />
    </>
  );
};

export default ExperiencePage; 
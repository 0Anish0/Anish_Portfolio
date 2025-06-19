import React from 'react';
import Head from 'next/head';
import Skills from '../src/pages/Skills';

const SkillsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Skills - Anish Kumar Pandey | Technical Expertise</title>
        <meta name="description" content="Explore Anish Kumar Pandey's technical skills including Machine Learning, AI, Python, React, Node.js, and more." />
        <meta name="keywords" content="Skills, Machine Learning, AI, Python, React, Node.js, Full Stack Development" />
        <meta property="og:title" content="Skills - Anish Kumar Pandey" />
        <meta property="og:description" content="Technical skills and expertise of Anish Kumar Pandey" />
      </Head>
      <Skills />
    </>
  );
};

export default SkillsPage; 
import React from 'react';
import Head from 'next/head';
import About from '../src/pages/About';

const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>About - Anish Kumar Pandey | ML Engineer & Developer</title>
        <meta name="description" content="Learn about Anish Kumar Pandey's background, experience, and passion for Machine Learning and Full Stack Development." />
        <meta name="keywords" content="About Anish, ML Engineer, Full Stack Developer, Background, Experience" />
        <meta property="og:title" content="About - Anish Kumar Pandey" />
        <meta property="og:description" content="Learn about Anish Kumar Pandey's background and experience" />
      </Head>
      <About />
    </>
  );
};

export default AboutPage; 
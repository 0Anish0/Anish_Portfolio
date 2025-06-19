import React from 'react';
import Head from 'next/head';
import Projects from '../src/pages/Projects';

const ProjectsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Projects - Anish Kumar Pandey | Portfolio & Work</title>
        <meta name="description" content="Explore Anish Kumar Pandey's portfolio of ML projects, web applications, and software development work." />
        <meta name="keywords" content="Projects, Portfolio, Machine Learning Projects, Web Development, Software Development" />
        <meta property="og:title" content="Projects - Anish Kumar Pandey" />
        <meta property="og:description" content="Portfolio and projects by Anish Kumar Pandey" />
      </Head>
      <Projects />
    </>
  );
};

export default ProjectsPage; 
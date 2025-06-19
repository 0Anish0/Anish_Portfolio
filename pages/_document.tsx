import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0ea5e9" />
        
        {/* SEO Meta Tags */}
        <meta name="description" content="Anish Kumar Pandey - Expert ML Engineer and Full Stack Developer from Noida, India. Specializing in Machine Learning, AI, Python, React, and modern web technologies. Available for freelance projects and full-time opportunities." />
        <meta name="keywords" content="Anish, Anish Kumar, Anish Kumar Pandey, ML Engineer, Machine Learning Engineer, Full Stack Developer, Python Developer, React Developer, AI Engineer, Noida Developer, India, Freelancer, Software Engineer" />
        <meta name="author" content="Anish Kumar Pandey" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://anishpandey.netlify.app" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Anish Kumar Pandey - ML Engineer & Full Stack Developer" />
        <meta property="og:description" content="Expert ML Engineer and Full Stack Developer from Noida, India. Specializing in Machine Learning, AI, Python, React, and modern web technologies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://anishpandey.netlify.app" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:site_name" content="Anish Kumar Pandey Portfolio" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Anish Kumar Pandey - ML Engineer & Full Stack Developer" />
        <meta name="twitter:description" content="Expert ML Engineer and Full Stack Developer from Noida, India. Specializing in Machine Learning, AI, Python, React, and modern web technologies." />
        <meta name="twitter:image" content="/logo.png" />
        <meta name="twitter:creator" content="@Factlogical_Ani" />
        
        {/* Additional SEO Tags */}
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Noida" />
        <meta name="geo.position" content="28.5355;77.3910" />
        <meta name="ICBM" content="28.5355, 77.3910" />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Anish Kumar Pandey",
              "jobTitle": "ML Engineer & Full Stack Developer",
              "description": "Expert ML Engineer and Full Stack Developer specializing in Machine Learning, AI, Python, React, and modern web technologies.",
              "url": "https://anishpandey.netlify.app",
              "image": "https://anishpandey.netlify.app/logo.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Noida",
                "addressRegion": "Uttar Pradesh",
                "addressCountry": "India"
              },
              "email": "anishpandey4576@gmail.com",
              "telephone": "+91-9852208695",
              "sameAs": [
                "https://www.linkedin.com/in/anish-kumar-pandey-57390b190/",
                "https://github.com/0Anish0",
                "https://twitter.com/Factlogical_Ani",
                "https://www.instagram.com/factlogical_anish/",
                "https://www.youtube.com/@Factlogical_Anish/videos"
              ],
              "knowsAbout": [
                "Machine Learning",
                "Artificial Intelligence",
                "Python",
                "React",
                "Node.js",
                "TensorFlow",
                "PyTorch",
                "Full Stack Development",
                "Web Development"
              ],
              "alumniOf": "Bharat Institute of Technology",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              }
            })
          }}
        />
        
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=JetBrains+Mono:wght@100;200;300;400;500;600;700;800&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 
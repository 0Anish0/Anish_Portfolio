import React from 'react';
import './styles/HomeHeroStyles.css';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import anishImg from '../assets/Anish.jpeg';
import { FaCode, FaRobot, FaDatabase, FaCloud, FaBrain } from 'react-icons/fa';
import ParticlesBackground from './ParticlesBackground';

const techStack = [
  {
    icon: <FaCode />,
    title: "Full Stack Development",
    description: "Expert in MERN stack, Next.js, and modern web technologies",
    skills: ["React", "Node.js", "Express", "MongoDB", "TypeScript"]
  },
  {
    icon: <FaRobot />,
    title: "AI/ML Development",
    description: "Building intelligent systems and machine learning models",
    skills: ["TensorFlow", "PyTorch", "NLP", "Computer Vision", "Deep Learning"]
  },
  {
    icon: <FaDatabase />,
    title: "Database Architecture",
    description: "Designing scalable and efficient database solutions",
    skills: ["SQL", "NoSQL", "Redis", "GraphQL", "Data Modeling"]
  },
  {
    icon: <FaCloud />,
    title: "Cloud & DevOps",
    description: "Deploying and managing applications in the cloud",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Serverless"]
  },
  {
    icon: <FaBrain />,
    title: "Advanced Analytics",
    description: "Implementing data-driven solutions and analytics",
    skills: ["Data Analysis", "Big Data", "MLOps", "A/B Testing", "Predictive Modeling"]
  }
];

const HomeHeroSection = () => {
  return (
    <>
      <div className="section-layout hero-container">
        <ParticlesBackground id="particles" className="particles-canvas" />
        <div className="section-content hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <h1 className="hero-title">
              <span style={{ color: "var(--text-color)" }}>Hi, I'm</span> <span className="text-gradient">Anish Kumar Pandey</span>
            </h1>
            <div className="hero-subtitle">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'AI/ML Developer',
                  2000,
                  'Web3/Blockchain Developer',
                  2000,
                  'Mobile App Developer',
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <p className="hero-description">
              I create beautiful, responsive, and user-friendly web applications
              that make a difference.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hero-cta"
            >
              <a href="#contact" className="cta-button">
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-image"
          >
            <div className="image-container">
              <div className="image-border"></div>
              <img
                src={anishImg}
                alt="Profile"
                className="profile-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/400x400?text=Profile';
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* TechShowcase Section */}
      <section className="section-layout tech-showcase">
        <ParticlesBackground id="tech-particles" className="particles-canvas" />
        <div className="section-content tech-showcase-content">
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-description">
            Explore my core areas of expertise in full stack development, AI/ML, cloud, and more. Hover or wait to see the cube rotate!
          </p>
          <div className="tech-cube">
            {techStack.map((tech, index) => (
              <div className="tech-face" key={index}>
                <div className="tech-icon">{tech.icon}</div>
                <h3>{tech.title}</h3>
                <p>{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Coding Section */}
      <section className="section-layout live-coding">
        <div className="section-content">
          <div className="live-coding-header">
            <h2 className="section-title">Innovate. Code. Deliver.</h2>
            <p className="section-description">From concept to deployment, I turn complex challenges into working products.</p>
          </div>
          <div className="coding-container">
            <div className="code-editor">
              <div className="editor-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="editor-content">
                <pre>
                  <code>
                    {`// AI-Powered Portfolio
const Portfolio = () => {
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    // Fetch and display skills
    // Showcase projects
    // Demonstrate expertise
  }, []);

  return (
    <div className="portfolio">
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeHeroSection; 
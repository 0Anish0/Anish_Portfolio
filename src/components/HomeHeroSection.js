import React from 'react';
import './styles/HomeHeroStyles.css';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import anishImg from '../assets/Anish.jpeg';
import { FaCode, FaRobot, FaDatabase, FaCloud, FaBrain, FaArrowDown } from 'react-icons/fa';
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

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.3
    }
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      delay: 0.2
    }
  }
};

const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const techCubeVariants = {
  hidden: { opacity: 0, rotateY: -90 },
  visible: {
    opacity: 1,
    rotateY: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
      staggerChildren: 0.1
    }
  }
};

const techFaceVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const codeVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const HomeHeroSection = () => {
  return (
    <>
      <motion.div 
        className="section-layout hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <ParticlesBackground id="particles" className="particles-canvas" />
        <div className="section-content hero-content">
          <motion.div
            className="hero-text"
            variants={textVariants}
          >
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span style={{ color: "var(--text-color)" }}>Hi, I'm</span>{" "}
              <motion.span 
                className="text-gradient"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Anish Kumar Pandey
              </motion.span>
            </motion.h1>
            <motion.div 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'AI/ML Developer',
                  2000,
                  'Web3/Blockchain Developer',
                  2000,
                  'Mobile App Developer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              I create beautiful, responsive, and user-friendly web applications
              that make a difference. Let's build something amazing together.
            </motion.p>
            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#contact" className="cta-button">
                Get in Touch
                <motion.span
                  className="cta-arrow"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            className="hero-image"
            variants={imageVariants}
          >
            <motion.div 
              className="image-container"
              variants={floatingVariants}
              animate="animate"
            >
              <div className="image-border"></div>
              <motion.img
                src={anishImg}
                alt="Profile"
                className="profile-image"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/400x400?text=Profile';
                }}
              />
              <motion.div
                className="image-glow"
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          onClick={() => {
            const techSection = document.querySelector('.tech-showcase');
            if (techSection) {
              techSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ cursor: 'pointer' }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FaArrowDown />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* TechShowcase Section */}
      <motion.section 
        className="section-layout tech-showcase"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <ParticlesBackground id="tech-particles" className="particles-canvas" />
        <div className="section-content tech-showcase-content">
          <motion.h2 
            className="section-title"
            variants={textVariants}
          >
            Technical Expertise
          </motion.h2>
          <motion.p 
            className="section-description"
            variants={textVariants}
          >
            Explore my core areas of expertise in full stack development, AI/ML, cloud, and more. 
            Hover or wait to see the cube rotate!
          </motion.p>
          <motion.div 
            className="tech-cube"
            variants={techCubeVariants}
          >
            {techStack.map((tech, index) => (
              <motion.div 
                className="tech-face" 
                key={index}
                variants={techFaceVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="tech-icon"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {tech.icon}
                </motion.div>
                <h3>{tech.title}</h3>
                <p>{tech.description}</p>
                <motion.div 
                  className="tech-skills"
                  initial={{ opacity: 0, height: 0 }}
                  whileHover={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  {tech.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Live Coding Section */}
      <motion.section 
        className="section-layout live-coding"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="section-content">
          <motion.div 
            className="live-coding-header"
            variants={textVariants}
          >
            <h2 className="section-title">Innovate. Code. Deliver.</h2>
            <p className="section-description">
              From concept to deployment, I turn complex challenges into working products.
            </p>
          </motion.div>
          <motion.div 
            className="coding-container"
            variants={codeVariants}
          >
            <motion.div 
              className="code-editor"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="editor-header">
                <motion.span 
                  className="dot red"
                  whileHover={{ scale: 1.2 }}
                ></motion.span>
                <motion.span 
                  className="dot yellow"
                  whileHover={{ scale: 1.2 }}
                ></motion.span>
                <motion.span 
                  className="dot green"
                  whileHover={{ scale: 1.2 }}
                ></motion.span>
              </div>
              <div className="editor-content">
                <pre>
                  <motion.code
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  >
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
                  </motion.code>
                </pre>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default HomeHeroSection; 
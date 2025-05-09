import React, { useState, useRef, useEffect } from 'react';
import './styles/MyProjectStyle.css';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaLayerGroup, FaStar } from 'react-icons/fa';

const MyProject = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [category, setCategory] = useState('all');
  const [hoverDetails, setHoverDetails] = useState(null);
  const containerRef = useRef(null);
  const [viewportHeight, setViewportHeight] = useState(0);

  // Track mouse position for parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Create spring motions for smoother movement
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });
  
  // Create transforms for different projects
  const evenProjectX = useTransform(springX, [0, containerRef.current?.offsetWidth || 1000], [-5, 5]);
  const oddProjectX = useTransform(springX, [0, containerRef.current?.offsetWidth || 1000], [5, -5]);
  const evenProjectY = useTransform(springY, [0, viewportHeight], [-10, 10]);
  const oddProjectY = useTransform(springY, [0, viewportHeight], [10, -10]);

  useEffect(() => {
    setViewportHeight(window.innerHeight);
    const handleResize = () => setViewportHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle mouse move for interactive effects
  const handleMouseMove = (e) => {
    const { left, top } = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with user authentication, product management, and payment integration.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'fullstack',
      demoLink: 'https://ecommerce-demo.com',
      githubLink: 'https://github.com/username/ecommerce',
      highlights: [
        'Secure payment processing',
        'Real-time inventory management',
        'Responsive admin dashboard'
      ],
      featured: true,
      stats: {
        commits: 156,
        stars: 24,
        forks: 8
      }
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A modern portfolio website showcasing my projects and skills.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      technologies: ['React', 'Framer Motion', 'CSS'],
      category: 'frontend',
      demoLink: 'https://portfolio-demo.com',
      githubLink: 'https://github.com/username/portfolio',
      highlights: [
        'Interactive animations',
        'Dark/light mode support',
        'Responsive design'
      ],
      featured: false,
      stats: {
        commits: 87,
        stars: 12,
        forks: 3
      }
    },
    {
      id: 3,
      title: 'Task Management API',
      description: 'RESTful API for task management with authentication and real-time updates.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Socket.io'],
      category: 'backend',
      demoLink: 'https://api-demo.com',
      githubLink: 'https://github.com/username/task-api',
      highlights: [
        'JWT authentication',
        'Real-time notifications',
        'Comprehensive API documentation'
      ],
      featured: true,
      stats: {
        commits: 112,
        stars: 18,
        forks: 5
      }
    }
  ];

  const getCategoryIcon = (cat) => {
    switch(cat) {
      case 'frontend': return <FaCode />;
      case 'backend': return <FaServer />;
      case 'fullstack': return <FaLayerGroup />;
      default: return <FaCode />;
    }
  };

  const filteredProjects = category === 'all' 
    ? projects 
    : projects.filter(project => project.category === category);

  // Helper function to get the right parallax values for each project
  const getParallaxProps = (index) => {
    return {
      x: index % 2 === 0 ? evenProjectX : oddProjectX,
      y: index % 2 === 0 ? evenProjectY : oddProjectY,
    };
  };

  return (
    <section 
      className="projects-showcase" 
      id="projects"
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      <div className="showcase-blob"></div>
      <div className="showcase-blob-2"></div>
      
      <div className="showcase-header">
        <motion.h2 
          className="showcase-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Work
        </motion.h2>
        
        <motion.ul 
          className="categories"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <li className={category === 'all' ? 'active' : ''} onClick={() => setCategory('all')}>All</li>
          <li className={category === 'frontend' ? 'active' : ''} onClick={() => setCategory('frontend')}>Frontend</li>
          <li className={category === 'backend' ? 'active' : ''} onClick={() => setCategory('backend')}>Backend</li>
          <li className={category === 'fullstack' ? 'active' : ''} onClick={() => setCategory('fullstack')}>Full Stack</li>
        </motion.ul>
      </div>
      
      <div className="projects-container">
        <motion.div 
          className="projects-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const parallaxProps = getParallaxProps(index);
              
              return (
                <motion.div 
                  key={project.id}
                  className={`project-tile ${activeProject === project.id ? 'active' : ''} ${project.featured ? 'featured' : ''}`}
                  onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
                  whileHover="hover"
                  variants={{
                    hover: { y: -8, transition: { duration: 0.3 } }
                  }}
                  layout
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20,
                    layout: { duration: 0.5 }
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  style={parallaxProps}
                  onHoverStart={() => setHoverDetails(project.id)}
                  onHoverEnd={() => setHoverDetails(null)}
                >
                  {project.featured && (
                    <div className="featured-badge">
                      <FaStar /> Featured
                    </div>
                  )}
                  
                  <div className="project-image-wrap">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <span className="category-badge">
                        {getCategoryIcon(project.category)}
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    
                    <div className="project-tech-stack">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-pill">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="project-stats">
                      <div className="stat">
                        <FaStar className="stat-icon" />
                        <span>{project.stats.stars}</span>
                      </div>
                      <div className="stat">
                        <FaGithub className="stat-icon" />
                        <span>{project.stats.commits} commits</span>
                      </div>
                    </div>
                  </div>
                  
                  <AnimatePresence>
                    {activeProject === project.id && (
                      <motion.div 
                        className="project-details"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="details-inner">
                          <div className="highlights">
                            <h4>Key Features</h4>
                            <ul>
                              {project.highlights.map((highlight, idx) => (
                                <motion.li 
                                  key={idx}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.1 }}
                                >
                                  {highlight}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="project-actions">
                            <a 
                              href={project.demoLink} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="action-button primary"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <FaExternalLinkAlt /> Live Demo
                            </a>
                            <a 
                              href={project.githubLink} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="action-button secondary"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <FaGithub /> View Code
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
      
      <motion.div 
        className="showcase-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <p>Want to see more? Check out my <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">GitHub profile</a> for additional projects.</p>
      </motion.div>
    </section>
  );
};

export default MyProject;

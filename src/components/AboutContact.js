import "./styles/AboutContactStyle.css";
import React from "react";
import { motion } from 'framer-motion';

const AboutContact = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'TypeScript'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'Java', 'MongoDB'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'VS Code', 'Postman'] },
    { category: 'Soft Skills', items: ['Problem Solving', 'Team Leadership', 'Communication', 'Agile'] }
  ];

  const experiences = [
    {
      year: '2023',
      title: 'Full Stack Developer',
      company: 'Tech Corp',
      description: 'Led development of enterprise web applications using React and Node.js.'
    },
    {
      year: '2022',
      title: 'Frontend Developer',
      company: 'Digital Agency',
      description: 'Developed responsive web interfaces and improved user experience.'
    },
    {
      year: '2021',
      title: 'Software Engineer Intern',
      company: 'StartUp Inc',
      description: 'Contributed to backend development using Python and MongoDB.'
    }
  ];

  return (
    <section className="about-section" id="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="about-header"
        >
          <h2 className="section-title">About Me</h2>
          <p className="about-description">
            I'm a passionate Full Stack Developer with expertise in building modern web applications.
            I love turning complex problems into simple, beautiful, and intuitive solutions.
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="skills-section"
          >
            <h3>Skills & Expertise</h3>
            <div className="skills-grid">
              {skills.map((skillGroup, index) => (
                <div key={index} className="skill-group">
                  <h4>{skillGroup.category}</h4>
                  <div className="skill-tags">
                    {skillGroup.items.map((skill, i) => (
                      <motion.span
                        key={i}
                        className="skill-tag"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5,
                          backgroundColor: 'var(--primary-color)',
                          color: 'white'
                        }}
                        whileTap={{ 
                          scale: 0.95,
                          rotate: -5
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="experience-section"
          >
            <h3>Experience</h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="timeline-year">{exp.year}</span>
                    <h4>{exp.title}</h4>
                    <h5>{exp.company}</h5>
                    <p>{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="cta-section"
        >
          <h3>Let's Work Together</h3>
          <p>
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <a href="#contact" className="cta-button">
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutContact;

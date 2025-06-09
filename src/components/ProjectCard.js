import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';
import { Button } from './ui/Button';
import './styles/ProjectCardStyle.css';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="project-card">
        <div className="project-image">
          <img src={project.image} alt={project.title} />
          <div className="project-overlay">
            <div className="project-links">
              {project.demoLink && (
                <Button asChild variant="default" size="sm">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    Live Demo
                  </a>
                </Button>
              )}
              {project.githubLink && (
                <Button asChild variant="light" size="sm">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    GitHub
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
        <CardContent className="project-content">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="project-title">{project.title}</CardTitle>
            <CardDescription className="project-description">{project.description}</CardDescription>
          </CardHeader>
          <div className="project-tech">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard; 
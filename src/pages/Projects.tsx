import React, { useState } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaCode, 
  FaBrain, 
  FaRocket,
  FaTimes
} from 'react-icons/fa';
import { IconType } from 'react-icons';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

interface FilterOption {
  label: string;
  value: string;
  icon: IconType;
}

const Projects: React.FC = () => {
  const { elementRef, hasIntersected } = useIntersectionObserver();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterOptions: FilterOption[] = [
    { label: 'All Projects', value: 'all', icon: FaCode },
    { label: 'Machine Learning', value: 'ml', icon: FaBrain },
    { label: 'Web Development', value: 'web', icon: FaRocket },
    { label: 'Full Stack', value: 'fullstack', icon: FaCode },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'AI-Powered Chatbot Platform',
      description: 'Intelligent conversational AI system with natural language processing capabilities.',
      longDescription: 'A comprehensive chatbot platform built with advanced NLP techniques, featuring sentiment analysis, intent recognition, and multi-language support. The system can handle complex conversations and learn from user interactions.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'TensorFlow', 'React', 'Node.js', 'MongoDB'],
      category: 'ml',
      githubUrl: 'https://github.com/0Anish0',
      liveUrl: 'https://example.com',
      featured: true
    },
    {
      id: 2,
      title: 'E-Commerce Analytics Dashboard',
      description: 'Real-time analytics dashboard for e-commerce businesses with predictive insights.',
      longDescription: 'A comprehensive analytics platform that provides real-time insights into e-commerce performance, customer behavior, and sales predictions using machine learning algorithms.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
      category: 'web',
      githubUrl: 'https://github.com/0Anish0',
      liveUrl: 'https://example.com',
      featured: true
    },
    {
      id: 3,
      title: 'Computer Vision Image Classifier',
      description: 'Deep learning model for image classification with 95% accuracy.',
      longDescription: 'A state-of-the-art image classification system using convolutional neural networks, capable of identifying objects in images with high accuracy across multiple categories.',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'PyTorch', 'OpenCV', 'Flask', 'Docker'],
      category: 'ml',
      githubUrl: 'https://github.com/0Anish0',
      liveUrl: 'https://example.com',
      featured: false
    },
    {
      id: 4,
      title: 'Social Media Management Tool',
      description: 'Complete social media management platform with scheduling and analytics.',
      longDescription: 'A full-featured social media management platform that allows users to schedule posts, analyze engagement metrics, and manage multiple social media accounts from a single dashboard.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
      category: 'fullstack',
      githubUrl: 'https://github.com/0Anish0',
      liveUrl: 'https://example.com',
      featured: true
    },
    {
      id: 5,
      title: 'Blockchain Voting System',
      description: 'Secure and transparent voting system built on blockchain technology.',
      longDescription: 'A decentralized voting platform that ensures transparency, security, and immutability of votes using blockchain technology and smart contracts.',
      image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Solidity', 'Web3.js', 'React', 'Node.js', 'Ethereum'],
      category: 'web',
      githubUrl: 'https://github.com/0Anish0',
      liveUrl: 'https://example.com',
      featured: false
    },
    {
      id: 6,
      title: 'Real-time Collaboration Platform',
      description: 'Multi-user collaboration platform with real-time editing and communication.',
      longDescription: 'A comprehensive collaboration platform featuring real-time document editing, video conferencing, task management, and team communication tools.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'WebRTC'],
      category: 'fullstack',
      githubUrl: 'https://github.com/0Anish0',
      liveUrl: 'https://example.com',
      featured: false
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  const handleProjectClick = (project: Project): void => {
    setSelectedProject(project);
  };

  const closeModal = (): void => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              My Projects
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my work in machine learning, web development, and full-stack applications. 
            Each project represents a unique challenge and innovative solution.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.slice(0, 2).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <Card className="overflow-hidden h-full cursor-pointer" onClick={() => handleProjectClick(project)}>
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-400 rounded-full text-sm">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    <div className="flex space-x-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.githubUrl, '_blank');
                        }}
                      >
                        <FaGithub className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.liveUrl, '_blank');
                        }}
                      >
                        <FaExternalLinkAlt className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          ref={elementRef as any}
          initial={{ opacity: 0, y: 30 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filterOptions.map((option) => (
            <motion.button
              key={option.value}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(option.value)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === option.value
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600'
              }`}
              {...({} as HTMLMotionProps<"button">)}
            >
              <option.icon className="w-4 h-4" />
              <span>{option.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* All Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={hasIntersected ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="overflow-hidden h-full cursor-pointer" onClick={() => handleProjectClick(project)}>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  {project.featured && (
                    <div className="absolute top-3 right-3 bg-primary-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 2).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-400 rounded-full text-xs">
                        +{project.technologies.length - 2}
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubUrl, '_blank');
                      }}
                    >
                      <FaGithub className="w-3 h-3 mr-1" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.liveUrl, '_blank');
                      }}
                    >
                      <FaExternalLinkAlt className="w-3 h-3 mr-1" />
                      Demo
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-dark-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  <FaTimes className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
                  {selectedProject.title}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {selectedProject.longDescription}
                </p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">
                    Technologies Used:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                  >
                    <FaGithub className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                  <Button
                    onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                  >
                    <FaExternalLinkAlt className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;
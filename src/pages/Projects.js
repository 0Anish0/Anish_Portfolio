import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaPlay,
  FaBrain,
  FaCode,
  FaMobile,
  FaChartBar
} from 'react-icons/fa';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { elementRef, hasIntersected } = useIntersectionObserver();

  const categories = [
    { id: 'all', name: 'All Projects', icon: FaCode },
    { id: 'ml', name: 'Machine Learning', icon: FaBrain },
    { id: 'web', name: 'Web Applications', icon: FaCode },
    { id: 'mobile', name: 'Mobile Apps', icon: FaMobile },
    { id: 'data', name: 'Data Science', icon: FaChartBar },
  ];

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Chatbot Platform',
      description: 'Intelligent conversational AI system with natural language processing capabilities, built with TensorFlow and React.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'ml',
      technologies: ['TensorFlow', 'React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/0Anish0',
      demo: 'https://demo.example.com',
      featured: true
    },
    {
      id: 2,
      title: 'E-Commerce Analytics Dashboard',
      description: 'Real-time analytics dashboard for e-commerce businesses with predictive insights and data visualization.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'data',
      technologies: ['Python', 'Plotly', 'FastAPI', 'PostgreSQL'],
      github: 'https://github.com/0Anish0',
      demo: 'https://demo.example.com',
      featured: true
    },
    {
      id: 3,
      title: 'Smart Home IoT System',
      description: 'IoT-based smart home automation system with mobile app control and machine learning optimization.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'mobile',
      technologies: ['React Native', 'Arduino', 'Firebase', 'TensorFlow Lite'],
      github: 'https://github.com/0Anish0',
      demo: 'https://demo.example.com',
      featured: false
    },
    {
      id: 4,
      title: 'Blockchain Voting System',
      description: 'Secure and transparent voting system built on blockchain technology with smart contracts.',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'web',
      technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
      github: 'https://github.com/0Anish0/D-VottingSystem',
      demo: 'https://github.com/0Anish0/D-VottingSystem',
      featured: true
    },
    {
      id: 5,
      title: 'Computer Vision Object Detection',
      description: 'Real-time object detection and tracking system using advanced computer vision techniques.',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'ml',
      technologies: ['OpenCV', 'YOLO', 'Python', 'Flask'],
      github: 'https://github.com/0Anish0',
      demo: 'https://demo.example.com',
      featured: false
    },
    {
      id: 6,
      title: 'BlogHub - Content Management',
      description: 'Full-featured blogging platform with user authentication, rich text editor, and social features.',
      image: 'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/0Anish0/CRT-Internship',
      demo: 'https://nice-erin-python-garb.cyclic.cloud/account',
      featured: false
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

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
            A showcase of my work spanning machine learning, web development, 
            and innovative solutions that solve real-world problems.
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
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="overflow-hidden h-full group">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          onClick={() => window.open(project.demo, '_blank')}
                          className="flex-1"
                        >
                          <FaPlay className="mr-2" />
                          Demo
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(project.github, '_blank')}
                          className="flex-1 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                        >
                          <FaGithub className="mr-2" />
                          Code
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button
                        size="sm"
                        onClick={() => window.open(project.demo, '_blank')}
                        className="flex-1"
                      >
                        <FaExternalLinkAlt className="mr-2" />
                        View Project
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.github, '_blank')}
                        className="flex-1"
                      >
                        <FaGithub className="mr-2" />
                        Source
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          ref={elementRef}
          initial={{ opacity: 0, y: 30 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600'
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="overflow-hidden h-full group">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => window.open(project.demo, '_blank')}
                          className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                        >
                          <FaExternalLinkAlt className="w-3 h-3" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => window.open(project.github, '_blank')}
                          className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                        >
                          <FaGithub className="w-3 h-3" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-400 rounded text-xs">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl p-12 border border-primary-200 dark:border-primary-800"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always excited to work on new challenges and bring innovative ideas to life. 
            Let's discuss how we can collaborate!
          </p>
          <Button
            size="lg"
            onClick={() => window.location.href = '/contact'}
          >
            Start a Project
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
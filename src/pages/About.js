import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import Card from '../components/ui/Card';
import { FaCode, FaBrain, FaRocket, FaHeart } from 'react-icons/fa';

const About = () => {
  const { elementRef, hasIntersected } = useIntersectionObserver();

  const skills = [
    {
      icon: FaBrain,
      title: 'Machine Learning',
      description: 'Developing intelligent systems with TensorFlow, PyTorch, and scikit-learn',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FaCode,
      title: 'Full-Stack Development',
      description: 'Building scalable applications with React, Node.js, and modern frameworks',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FaRocket,
      title: 'Innovation',
      description: 'Turning complex problems into elegant, user-friendly solutions',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: FaHeart,
      title: 'Passion',
      description: 'Driven by curiosity and the desire to make a positive impact',
      color: 'from-red-500 to-orange-500'
    }
  ];

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
              About Me
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate about creating intelligent solutions that bridge the gap between 
            cutting-edge technology and real-world applications.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="About Me"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-secondary-500/20 rounded-2xl"></div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full opacity-20"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full opacity-10"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
              Crafting Digital Experiences with{' '}
              <span className="text-primary-500">Intelligence</span>
            </h2>
            
            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                I'm a passionate ML Engineer and Full-Stack Developer with over 3 years of experience 
                in creating innovative solutions that combine the power of artificial intelligence 
                with intuitive user experiences.
              </p>
              
              <p>
                My journey began with a fascination for how machines can learn and adapt, leading me 
                to explore the intersection of data science, machine learning, and web development. 
                Today, I specialize in building end-to-end applications that leverage AI to solve 
                real-world problems.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge through technical writing and mentoring.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              {['Python', 'JavaScript', 'React', 'TensorFlow', 'Node.js', 'AWS'].map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full text-primary-600 dark:text-primary-400 font-medium border border-primary-200 dark:border-primary-800"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          ref={elementRef}
          initial={{ opacity: 0, y: 50 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What I Bring to the Table
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card hover glow className="p-6 text-center h-full">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center`}>
                    <skill.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                    {skill.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {skill.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl p-12 border border-primary-200 dark:border-primary-800"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always excited to work on new projects and collaborate with like-minded individuals. 
            Let's turn your ideas into reality!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => window.location.href = '/contact'}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
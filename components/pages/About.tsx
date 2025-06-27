'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Card from '@/components/ui/Card';
import { 
  FaGraduationCap, 
  FaCode, 
  FaBrain, 
  FaRocket,
  FaHeart,
  FaGamepad,
  FaMusic,
  FaCamera
} from 'react-icons/fa';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const interests = [
    { icon: FaCode, name: 'Coding', color: 'from-blue-500 to-cyan-500' },
    { icon: FaBrain, name: 'AI Research', color: 'from-purple-500 to-pink-500' },
    { icon: FaGamepad, name: 'Gaming', color: 'from-green-500 to-teal-500' },
    { icon: FaMusic, name: 'Music', color: 'from-yellow-500 to-orange-500' },
    { icon: FaCamera, name: 'Photography', color: 'from-red-500 to-pink-500' },
    { icon: FaRocket, name: 'Space Tech', color: 'from-indigo-500 to-purple-500' },
  ];

  const timeline = [
    {
      year: '2023 - Present',
      title: 'Senior ML Engineer',
      company: 'TechCorp Solutions',
      description: 'Leading machine learning initiatives and developing AI-powered solutions for enterprise clients.',
    },
    {
      year: '2022 - 2023',
      title: 'Full-Stack Developer',
      company: 'StartupXYZ',
      description: 'Developed and maintained web applications using modern technologies and frameworks.',
    },
    {
      year: '2020 - 2022',
      title: 'Bachelor of Technology',
      company: 'Bharat Institute of Technology',
      description: 'Graduated with honors in Computer Science Engineering, specializing in AI and Machine Learning.',
    },
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
            Passionate ML Engineer and Full-Stack Developer with a mission to create 
            intelligent solutions that make a real difference in the world.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Story */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-8 h-full">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                My Journey
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Hello! I'm Anish Kumar Pandey, a passionate ML Engineer and Full-Stack Developer 
                  based in the vibrant tech hub of Noida, Uttar Pradesh (NCR), India. My journey 
                  in technology began with a simple curiosity about how machines could learn and 
                  think like humans.
                </p>
                <p>
                  With over 3 years of hands-on experience, I've had the privilege of working on 
                  diverse projects ranging from intelligent chatbots to complex data analytics 
                  platforms. My expertise spans across machine learning, artificial intelligence, 
                  and modern web development technologies.
                </p>
                <p>
                  What drives me is the endless possibility of creating solutions that not only 
                  solve problems but also enhance human experiences. Whether it's building a 
                  recommendation system that helps users discover new content or developing a 
                  web application that streamlines business processes, I'm always excited about 
                  the next challenge.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring the latest AI research papers, 
                  contributing to open-source projects, or sharing my knowledge through technical 
                  blogs and community talks.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Profile Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="p-8">
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto mb-4 relative">
                  <div className="w-full h-full bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full p-1">
                    <img
                      src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Anish Kumar Pandey"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-dark-800 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  Anish Kumar Pandey
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  ML Engineer & Full Stack Developer
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-gray-50 dark:bg-dark-700 rounded-lg">
                  <div className="text-2xl font-bold text-primary-500 mb-1">3+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Exp.</div>
                </div>
                <div className="text-center p-3 bg-gray-50 dark:bg-dark-700 rounded-lg">
                  <div className="text-2xl font-bold text-secondary-500 mb-1">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                </div>
                <div className="text-center p-3 bg-gray-50 dark:bg-dark-700 rounded-lg">
                  <div className="text-2xl font-bold text-purple-500 mb-1">15+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
                </div>
                <div className="text-center p-3 bg-gray-50 dark:bg-dark-700 rounded-lg">
                  <div className="text-2xl font-bold text-green-500 mb-1">100%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Satisfaction</div>
                </div>
              </div>
            </Card>

            {/* Interests */}
            <Card className="p-6">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
                Interests & Hobbies
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {interests.map((interest, index) => {
                  const IconComponent = interest.icon;
                  return (
                    <motion.div
                      key={interest.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="text-center"
                    >
                      <div className={`w-12 h-12 mx-auto mb-2 bg-gradient-to-r ${interest.color} rounded-lg flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {interest.name}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            My Journey Timeline
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 * index }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <Card className="p-6">
                      <div className="text-primary-500 font-semibold mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                        {item.title}
                      </h3>
                      <div className="text-secondary-500 font-medium mb-3">
                        {item.company}
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </Card>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="w-2/12 flex justify-center">
                    <div className="w-4 h-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full border-4 border-white dark:border-dark-900 shadow-lg" />
                  </div>
                  
                  <div className="w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Card className="p-8 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20">
            <FaHeart className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Let's Create Something Amazing Together
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always excited to work on new projects and collaborate with like-minded 
              individuals. Whether you have a groundbreaking idea or need help bringing 
              your vision to life, let's connect!
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-200"
            >
              Get In Touch
              <FaRocket className="w-4 h-4 ml-2" />
            </motion.a>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
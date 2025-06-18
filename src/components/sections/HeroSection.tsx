import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaPlay, FaRocket, FaBrain, FaCode } from 'react-icons/fa';
import { IconType } from 'react-icons';
import ParticleBackground from '../ui/ParticleBackground';
import Button from '../ui/Button';

interface FloatingIcon {
  icon: IconType;
  delay: number;
  position: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
}

interface Stat {
  number: string;
  label: string;
}

const HeroSection: React.FC = () => {
  const [currentRole, setCurrentRole] = useState<number>(0);
  const roles: string[] = [
    'ML Engineer',
    'Full-Stack Developer',
    'AI Enthusiast',
    'Data Scientist',
    'Tech Innovator'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingIcons: FloatingIcon[] = [
    { icon: FaBrain, delay: 0, position: { top: '20%', left: '10%' } },
    { icon: FaCode, delay: 1, position: { top: '60%', right: '15%' } },
    { icon: FaRocket, delay: 2, position: { bottom: '30%', left: '20%' } },
  ];

  const stats: Stat[] = [
    { number: '50+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '15+', label: 'Technologies' },
    { number: '100%', label: 'Client Satisfaction' },
  ];

  const handleViewWork = (): void => {
    const projectsElement = document.getElementById('projects');
    if (projectsElement) {
      projectsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = (): void => {
    window.open('https://drive.google.com/file/d/1WG1s2yiIMZHpgRXSn2ZZNl1ZWqrdpt8T/view?usp=sharing', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
      {/* Tailwind Test Element - Remove this after confirming styles work */}
      <div className="test-tailwind fixed top-4 right-4 z-50 text-sm">
        ✅ Tailwind CSS Working!
      </div>
      
      <ParticleBackground />
      
      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute hidden lg:block"
          style={item.position}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: item.delay,
          }}
          {...({} as any)}
        >
          <div className="w-16 h-16 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
            <item.icon className="w-8 h-8 text-primary-500" />
          </div>
        </motion.div>
      ))}

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        {...({} as any)}
      >
        <motion.div variants={itemVariants} className="mb-8" {...({} as any)}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-32 h-32 mx-auto mb-8 relative"
            {...({} as any)}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 p-1">
              <div className="w-full h-full rounded-full bg-white dark:bg-dark-800 flex items-center justify-center">
                <img
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Profile"
                  className="w-28 h-28 rounded-full object-cover"
                />
              </div>
            </div>
            <motion.div
              className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-dark-800"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              {...({} as any)}
            />
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-6" {...({} as any)}>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Hi, I'm{' '}
            </span>
            <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              Anish
            </span>
          </h1>
          
          <div className="h-16 flex items-center justify-center">
            <motion.h2
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-2xl md:text-4xl font-semibold text-gray-600 dark:text-gray-300"
              {...({} as any)}
            >
              {roles[currentRole]}
            </motion.h2>
          </div>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          {...({} as any)}
        >
          Transforming ideas into intelligent solutions through{' '}
          <span className="text-primary-500 font-semibold">Machine Learning</span> and{' '}
          <span className="text-secondary-500 font-semibold">Full-Stack Development</span>.
          Let's build the future together.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          {...({} as any)}
        >
          <Button
            size="lg"
            className="group"
            onClick={handleViewWork}
          >
            <FaPlay className="mr-2 group-hover:translate-x-1 transition-transform" />
            View My Work
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            onClick={handleDownloadResume}
          >
            <FaDownload className="mr-2" />
            Download Resume
          </Button>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          {...({} as any)}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.05 }}
              {...({} as any)}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        {...({} as any)}
      >
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            {...({} as any)}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection; 
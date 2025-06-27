'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Card from '@/components/ui/Card';
import { 
  FaPython, 
  FaReact, 
  FaNodeJs, 
  FaDocker, 
  FaAws,
  FaGitAlt,
  FaDatabase,
  FaBrain
} from 'react-icons/fa';
import { 
  SiTensorflow, 
  SiPytorch, 
  SiTypescript, 
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiKubernetes,
  SiOpenai
} from 'react-icons/si';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Machine Learning & AI',
      icon: FaBrain,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Python', icon: FaPython, level: 95 },
        { name: 'TensorFlow', icon: SiTensorflow, level: 90 },
        { name: 'PyTorch', icon: SiPytorch, level: 85 },
        { name: 'OpenAI', icon: SiOpenai, level: 88 },
      ]
    },
    {
      title: 'Frontend Development',
      icon: FaReact,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', icon: FaReact, level: 92 },
        { name: 'Next.js', icon: SiNextdotjs, level: 88 },
        { name: 'TypeScript', icon: SiTypescript, level: 85 },
        { name: 'JavaScript', icon: FaReact, level: 90 },
      ]
    },
    {
      title: 'Backend Development',
      icon: FaNodeJs,
      color: 'from-green-500 to-teal-500',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, level: 88 },
        { name: 'Express.js', icon: FaNodeJs, level: 85 },
        { name: 'FastAPI', icon: FaPython, level: 82 },
        { name: 'REST APIs', icon: FaDatabase, level: 90 },
      ]
    },
    {
      title: 'Database & Cloud',
      icon: FaAws,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, level: 85 },
        { name: 'PostgreSQL', icon: SiPostgresql, level: 80 },
        { name: 'AWS', icon: FaAws, level: 75 },
        { name: 'Docker', icon: FaDocker, level: 82 },
      ]
    }
  ];

  const tools = [
    { name: 'Git', icon: FaGitAlt, color: 'text-orange-500' },
    { name: 'Docker', icon: FaDocker, color: 'text-blue-500' },
    { name: 'Kubernetes', icon: SiKubernetes, color: 'text-blue-600' },
    { name: 'AWS', icon: FaAws, color: 'text-yellow-500' },
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
              My Skills
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use 
            to bring ideas to life.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.title}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              >
                <Card className="p-8 h-full">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                      <CategoryIcon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                      {category.title}
                    </h2>
                  </div>

                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <SkillIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                              <span className="font-medium text-gray-800 dark:text-white">
                                {skill.name}
                              </span>
                            </div>
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={inView ? { width: `${skill.level}%` } : {}}
                              transition={{ duration: 1.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                              className={`h-2 bg-gradient-to-r ${category.color} rounded-full`}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-white">
              Tools & Technologies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {tools.map((tool, index) => {
                const ToolIcon = tool.icon;
                return (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center p-4 bg-gray-50 dark:bg-dark-700 rounded-lg hover:shadow-lg transition-all duration-200"
                  >
                    <ToolIcon className={`w-12 h-12 mx-auto mb-3 ${tool.color}`} />
                    <p className="font-medium text-gray-800 dark:text-white">
                      {tool.name}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </Card>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Certifications & Achievements
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'AWS Certified Developer',
                issuer: 'Amazon Web Services',
                year: '2023',
                color: 'from-yellow-500 to-orange-500'
              },
              {
                title: 'TensorFlow Developer Certificate',
                issuer: 'Google',
                year: '2022',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'React Professional Certificate',
                issuer: 'Meta',
                year: '2022',
                color: 'from-purple-500 to-pink-500'
              }
            ].map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * index }}
              >
                <Card className="p-6 text-center hover:shadow-xl transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${cert.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-white font-bold text-xl">🏆</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    {cert.year}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
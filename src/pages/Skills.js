import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import Card from '../components/ui/Card';
import { 
  FaPython, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaAws, 
  FaDocker,
  FaGitAlt,
  FaDatabase
} from 'react-icons/fa';
import { 
  SiTensorflow, 
  SiPytorch, 
  SiMongodb, 
  SiPostgresql,
  SiKubernetes,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss
} from 'react-icons/si';

const Skills = () => {
  const { elementRef, hasIntersected } = useIntersectionObserver();

  const skillCategories = [
    {
      title: 'Machine Learning & AI',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'TensorFlow', icon: SiTensorflow, level: 90 },
        { name: 'PyTorch', icon: SiPytorch, level: 85 },
        { name: 'Python', icon: FaPython, level: 95 },
        { name: 'Scikit-learn', icon: FaPython, level: 88 },
      ]
    },
    {
      title: 'Frontend Development',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', icon: FaReact, level: 92 },
        { name: 'Next.js', icon: SiNextdotjs, level: 88 },
        { name: 'TypeScript', icon: SiTypescript, level: 85 },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90 },
      ]
    },
    {
      title: 'Backend Development',
      color: 'from-green-500 to-teal-500',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, level: 90 },
        { name: 'JavaScript', icon: FaJs, level: 93 },
        { name: 'MongoDB', icon: SiMongodb, level: 87 },
        { name: 'PostgreSQL', icon: SiPostgresql, level: 82 },
      ]
    },
    {
      title: 'DevOps & Cloud',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'AWS', icon: FaAws, level: 85 },
        { name: 'Docker', icon: FaDocker, level: 88 },
        { name: 'Kubernetes', icon: SiKubernetes, level: 75 },
        { name: 'Git', icon: FaGitAlt, level: 92 },
      ]
    }
  ];

  const certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      badge: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      title: 'TensorFlow Developer Certificate',
      issuer: 'Google',
      date: '2023',
      badge: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      title: 'Full Stack Web Development',
      issuer: 'Meta',
      date: '2022',
      badge: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=100'
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
              Skills & Expertise
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, tools, and technologies 
            I use to build innovative solutions.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          ref={elementRef}
          initial={{ opacity: 0, y: 50 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-8 mb-20"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <Card className="p-8 h-full">
                <div className={`w-full h-2 bg-gradient-to-r ${category.color} rounded-full mb-6`} />
                <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={hasIntersected ? { opacity: 1, x: 0 } : {}}
                      transition={{ 
                        duration: 0.5, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      className="flex items-center space-x-4"
                    >
                      <div className="w-10 h-10 flex items-center justify-center">
                        <skill.icon className="w-8 h-8 text-primary-500" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-gray-800 dark:text-white">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        
                        <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={hasIntersected ? { width: `${skill.level}%` } : {}}
                            transition={{ 
                              duration: 1, 
                              delay: categoryIndex * 0.1 + skillIndex * 0.1,
                              ease: "easeOut"
                            }}
                            className={`h-2 bg-gradient-to-r ${category.color} rounded-full`}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Certifications & Achievements
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 text-center h-full">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={cert.badge} 
                      alt={cert.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                    {cert.title}
                  </h3>
                  <p className="text-primary-500 font-medium mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {cert.date}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Tools & Technologies I Love
          </h2>
          
          <div className="flex flex-wrap justify-center gap-6">
            {[
              'VS Code', 'Jupyter', 'Postman', 'Figma', 'Slack', 'Notion',
              'GitHub', 'GitLab', 'Jira', 'Confluence', 'Vercel', 'Netlify'
            ].map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-6 py-3 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full border border-primary-200 dark:border-primary-800 text-gray-700 dark:text-gray-300 font-medium"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
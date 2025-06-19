import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import Card from '../components/ui/Card';
import { 
  FaPython, 
  FaReact, 
  FaNodeJs, 
  FaAws, 
  FaDocker, 
  FaGitAlt,
  FaBrain,
  FaCode,
  FaServer,
  FaChartLine
} from 'react-icons/fa';
import { 
  SiTensorflow, 
  SiPytorch, 
  SiTypescript, 
  SiMongodb, 
  SiPostgresql,
  SiKubernetes,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress
} from 'react-icons/si';
import { IconType } from 'react-icons';

interface Skill {
  name: string;
  icon: IconType;
  level: number;
  color: string;
}

interface SkillCategory {
  title: string;
  icon: IconType;
  skills: Skill[];
  color: string;
}

const Skills: React.FC = () => {
  const { elementRef, hasIntersected } = useIntersectionObserver();

  const skillCategories: SkillCategory[] = [
    {
      title: 'Machine Learning & AI',
      icon: FaBrain,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Python', icon: FaPython, level: 95, color: 'text-yellow-500' },
        { name: 'TensorFlow', icon: SiTensorflow, level: 90, color: 'text-orange-500' },
        { name: 'PyTorch', icon: SiPytorch, level: 85, color: 'text-red-500' },
        { name: 'Scikit-learn', icon: FaChartLine, level: 88, color: 'text-blue-500' },
      ]
    },
    {
      title: 'Frontend Development',
      icon: FaCode,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', icon: FaReact, level: 92, color: 'text-blue-400' },
        { name: 'Next.js', icon: SiNextdotjs, level: 88, color: 'text-gray-800' },
        { name: 'TypeScript', icon: SiTypescript, level: 85, color: 'text-blue-600' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90, color: 'text-teal-500' },
      ]
    },
    {
      title: 'Backend Development',
      icon: FaServer,
      color: 'from-green-500 to-teal-500',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, level: 88, color: 'text-green-500' },
        { name: 'Express.js', icon: SiExpress, level: 85, color: 'text-gray-600' },
        { name: 'MongoDB', icon: SiMongodb, level: 82, color: 'text-green-600' },
        { name: 'PostgreSQL', icon: SiPostgresql, level: 80, color: 'text-blue-700' },
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: FaAws,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'AWS', icon: FaAws, level: 85, color: 'text-orange-500' },
        { name: 'Docker', icon: FaDocker, level: 82, color: 'text-blue-500' },
        { name: 'Kubernetes', icon: SiKubernetes, level: 75, color: 'text-blue-600' },
        { name: 'Git', icon: FaGitAlt, level: 90, color: 'text-red-500' },
      ]
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
            A comprehensive overview of my technical skills and proficiency levels 
            across various domains of software development and machine learning.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              ref={categoryIndex === 0 ? elementRef as any : undefined}
              initial={{ opacity: 0, y: 50 }}
              animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="space-y-8"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                  {category.title}
                </h2>
              </div>

              {/* Skills Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={hasIntersected ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="p-6 text-center h-full">
                      <div className="flex flex-col items-center space-y-4">
                        <skill.icon className={`w-12 h-12 ${skill.color}`} />
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                          {skill.name}
                        </h3>
                        
                        {/* Skill Level */}
                        <div className="w-full">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              Proficiency
                            </span>
                            <span className="text-sm font-semibold text-primary-500">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                            <motion.div
                              className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full"
                              initial={{ width: 0 }}
                              animate={hasIntersected ? { width: `${skill.level}%` } : {}}
                              transition={{ 
                                duration: 1, 
                                delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5 
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <Card className="p-8 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-200 dark:border-primary-800">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-white">
              Additional Technologies & Tools
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                'FastAPI', 'Redis', 'GraphQL', 'Jest', 'Cypress', 'Figma',
                'Jupyter', 'Pandas', 'NumPy', 'OpenCV', 'Selenium', 'Jenkins'
              ].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-dark-800 rounded-lg p-3 text-center shadow-sm border border-gray-200 dark:border-dark-700"
                >
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {tech}
                  </span>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            Ready to Work Together?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how my skills can help bring your project to life.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => window.location.href = '/contact'}
            {...({} as HTMLMotionProps<"button">)}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
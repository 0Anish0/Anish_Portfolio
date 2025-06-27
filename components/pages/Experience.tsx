'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Card from '@/components/ui/Card';
import { 
  FaBriefcase, 
  FaGraduationCap, 
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaTrophy,
  FaStar
} from 'react-icons/fa';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      id: 1,
      type: 'work',
      title: 'Senior ML Engineer',
      company: 'TechCorp Solutions',
      location: 'Noida, Uttar Pradesh (NCR), India',
      period: '2023 - Present',
      description: 'Leading machine learning initiatives and developing AI-powered solutions for enterprise clients. Responsible for architecting scalable ML systems and mentoring junior developers.',
      achievements: [
        'Developed and deployed 5+ ML models in production',
        'Improved model accuracy by 25% through advanced optimization techniques',
        'Led a team of 4 ML engineers on critical projects',
        'Reduced inference time by 40% through model optimization'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'AWS', 'Docker', 'Kubernetes'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      type: 'work',
      title: 'Full-Stack Developer',
      company: 'StartupXYZ',
      location: 'Remote',
      period: '2022 - 2023',
      description: 'Developed and maintained web applications using modern technologies. Collaborated with cross-functional teams to deliver high-quality software solutions.',
      achievements: [
        'Built 10+ responsive web applications from scratch',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Optimized database queries improving performance by 35%',
        'Mentored 2 junior developers'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'TypeScript', 'AWS'],
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 3,
      type: 'work',
      title: 'Junior Software Developer',
      company: 'InnovateTech',
      location: 'Noida, Uttar Pradesh (NCR), India',
      period: '2021 - 2022',
      description: 'Started my professional journey as a software developer, working on various web development projects and learning industry best practices.',
      achievements: [
        'Contributed to 15+ client projects',
        'Learned and implemented modern web technologies',
        'Collaborated with senior developers on complex features',
        'Maintained 99% code quality standards'
      ],
      technologies: ['JavaScript', 'React', 'PHP', 'MySQL', 'HTML/CSS', 'Git'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 4,
      type: 'education',
      title: 'Bachelor of Technology',
      company: 'Bharat Institute of Technology',
      location: 'Meerut, Uttar Pradesh, India',
      period: '2018 - 2022',
      description: 'Graduated with honors in Computer Science Engineering, specializing in AI and Machine Learning. Active participant in coding competitions and technical events.',
      achievements: [
        'Graduated with First Class Honors (8.5/10 CGPA)',
        'Winner of 3 inter-college coding competitions',
        'Published 2 research papers on ML applications',
        'Led the college coding club for 2 years'
      ],
      technologies: ['C++', 'Java', 'Python', 'Data Structures', 'Algorithms', 'DBMS'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const skills = [
    { name: 'Machine Learning', level: 95 },
    { name: 'Full Stack Development', level: 90 },
    { name: 'Python', level: 95 },
    { name: 'React/Next.js', level: 88 },
    { name: 'Node.js', level: 85 },
    { name: 'Cloud Technologies', level: 80 },
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
              My Experience
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A journey through my professional career, education, and the skills 
            I've developed along the way.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <motion.div
              ref={ref}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500" />

              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="relative flex items-start"
                  >
                    {/* Timeline Dot */}
                    <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${exp.color} rounded-full flex items-center justify-center shadow-lg z-10`}>
                      {exp.type === 'work' ? (
                        <FaBriefcase className="w-6 h-6 text-white" />
                      ) : (
                        <FaGraduationCap className="w-6 h-6 text-white" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="ml-8 flex-1">
                      <Card className="p-6">
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                            {exp.title}
                          </h3>
                          <span className={`px-3 py-1 bg-gradient-to-r ${exp.color} text-white text-sm font-medium rounded-full`}>
                            {exp.type === 'work' ? 'Work' : 'Education'}
                          </span>
                        </div>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <FaBriefcase className="w-4 h-4 mr-2" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <FaMapMarkerAlt className="w-4 h-4 mr-2" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <FaCalendarAlt className="w-4 h-4 mr-2" />
                            <span>{exp.period}</span>
                          </div>
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                            <FaTrophy className="w-4 h-4 mr-2 text-yellow-500" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start text-gray-600 dark:text-gray-300">
                                <FaStar className="w-3 h-3 mr-2 mt-1 text-yellow-500 flex-shrink-0" />
                                <span className="text-sm">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="font-semibold text-gray-800 dark:text-white mb-3">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </Card>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Skills Overview */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
                  Core Skills
                </h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-800 dark:text-white">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                          className="h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
                  Quick Stats
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Experience</span>
                    <span className="font-bold text-primary-500">3+ Years</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Projects Completed</span>
                    <span className="font-bold text-secondary-500">50+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Technologies</span>
                    <span className="font-bold text-purple-500">15+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Client Satisfaction</span>
                    <span className="font-bold text-green-500">100%</span>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Current Status */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Card className="p-6 bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 border-green-200 dark:border-green-800">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-3" />
                  <h3 className="text-lg font-bold text-green-700 dark:text-green-400">
                    Currently Available
                  </h3>
                </div>
                <p className="text-green-600 dark:text-green-300 text-sm mb-4">
                  Open to new opportunities and exciting projects. Let's build something amazing together!
                </p>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-4 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors text-sm"
                >
                  Get In Touch
                </motion.a>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
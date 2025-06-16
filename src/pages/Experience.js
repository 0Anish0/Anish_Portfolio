import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import Card from '../components/ui/Card';
import { 
  FaBriefcase, 
  FaGraduationCap, 
  FaAward, 
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaExternalLinkAlt
} from 'react-icons/fa';

const Experience = () => {
  const { elementRef, hasIntersected } = useIntersectionObserver();

  const experiences = [
    {
      type: 'work',
      title: 'Senior ML Engineer',
      company: 'TechCorp Solutions',
      location: 'Remote',
      period: '2023 - Present',
      description: 'Leading machine learning initiatives and developing AI-powered solutions for enterprise clients. Built scalable ML pipelines and deployed models serving millions of users.',
      achievements: [
        'Improved model accuracy by 25% through advanced feature engineering',
        'Reduced inference time by 40% using model optimization techniques',
        'Led a team of 5 ML engineers on multiple projects'
      ],
      technologies: ['TensorFlow', 'PyTorch', 'AWS', 'Kubernetes', 'Python']
    },
    {
      type: 'work',
      title: 'Full-Stack Developer',
      company: 'StartupXYZ',
      location: 'San Francisco, CA',
      period: '2022 - 2023',
      description: 'Developed and maintained web applications using modern technologies. Collaborated with cross-functional teams to deliver high-quality products.',
      achievements: [
        'Built responsive web applications serving 10k+ users',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Mentored junior developers and conducted code reviews'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Docker', 'AWS']
    },
    {
      type: 'work',
      title: 'Software Developer Intern',
      company: 'InnovateLab',
      location: 'New York, NY',
      period: '2021 - 2022',
      description: 'Worked on various projects involving web development and data analysis. Gained hands-on experience with modern development practices.',
      achievements: [
        'Developed internal tools that improved team productivity by 30%',
        'Created data visualization dashboards for business insights',
        'Participated in agile development processes'
      ],
      technologies: ['JavaScript', 'Python', 'React', 'PostgreSQL']
    }
  ];

  const education = [
    {
      degree: 'Master of Science in Computer Science',
      school: 'Stanford University',
      location: 'Stanford, CA',
      period: '2020 - 2022',
      gpa: '3.8/4.0',
      focus: 'Machine Learning & Artificial Intelligence',
      achievements: [
        'Graduate Research Assistant in AI Lab',
        'Published 2 papers in top-tier conferences',
        'Dean\'s List for academic excellence'
      ]
    },
    {
      degree: 'Bachelor of Technology in Computer Science',
      school: 'Indian Institute of Technology',
      location: 'Delhi, India',
      period: '2016 - 2020',
      gpa: '8.5/10.0',
      focus: 'Software Engineering & Data Structures',
      achievements: [
        'Graduated Magna Cum Laude',
        'President of Computer Science Society',
        'Winner of multiple hackathons'
      ]
    }
  ];

  const certifications = [
    {
      title: 'AWS Certified Solutions Architect - Professional',
      issuer: 'Amazon Web Services',
      date: '2023',
      credentialId: 'AWS-PSA-12345',
      link: '#'
    },
    {
      title: 'TensorFlow Developer Certificate',
      issuer: 'Google',
      date: '2023',
      credentialId: 'TF-DEV-67890',
      link: '#'
    },
    {
      title: 'Certified Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      date: '2022',
      credentialId: 'CKA-54321',
      link: '#'
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
              Experience
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey, education, and achievements in the world of 
            technology and innovation.
          </p>
        </motion.div>

        {/* Work Experience */}
        <motion.div
          ref={elementRef}
          initial={{ opacity: 0, y: 50 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center mb-12">
            <FaBriefcase className="w-8 h-8 text-primary-500 mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500 hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={hasIntersected ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full border-4 border-white dark:border-dark-900 hidden md:block" />

                  <div className="md:ml-20">
                    <Card className="p-8 hover:shadow-xl transition-shadow duration-300">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                            {exp.title}
                          </h3>
                          <div className="flex items-center text-primary-500 font-semibold mb-2">
                            <FaBriefcase className="w-4 h-4 mr-2" />
                            {exp.company}
                          </div>
                          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-2">
                            <FaMapMarkerAlt className="w-4 h-4 mr-2" />
                            {exp.location}
                          </div>
                        </div>
                        <div className="flex items-center text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-dark-700 px-4 py-2 rounded-full">
                          <FaCalendarAlt className="w-4 h-4 mr-2" />
                          {exp.period}
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-800 dark:text-white mb-3">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start text-gray-600 dark:text-gray-300">
                              <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="flex items-center mb-12">
            <FaGraduationCap className="w-8 h-8 text-primary-500 mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="p-8 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                        {edu.degree}
                      </h3>
                      <div className="text-primary-500 font-semibold mb-1">
                        {edu.school}
                      </div>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-2">
                        <FaMapMarkerAlt className="w-4 h-4 mr-2" />
                        {edu.location}
                      </div>
                    </div>
                    <div className="text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-dark-700 px-3 py-1 rounded-full text-sm">
                      {edu.period}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600 dark:text-gray-300">GPA:</span>
                      <span className="font-semibold text-primary-500">{edu.gpa}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-600 dark:text-gray-300">Focus:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{edu.focus}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-3">
                      Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start text-gray-600 dark:text-gray-300">
                          <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex items-center mb-12">
            <FaAward className="w-8 h-8 text-primary-500 mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 text-center h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaAward className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                    {cert.title}
                  </h3>
                  
                  <p className="text-primary-500 font-medium mb-2">
                    {cert.issuer}
                  </p>
                  
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                    Issued: {cert.date}
                  </p>
                  
                  <p className="text-xs text-gray-400 dark:text-gray-500 mb-4">
                    ID: {cert.credentialId}
                  </p>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open(cert.link, '_blank')}
                    className="flex items-center justify-center space-x-2 w-full px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors"
                  >
                    <FaExternalLinkAlt className="w-3 h-3" />
                    <span>Verify</span>
                  </motion.button>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
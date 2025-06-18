import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaHeart,
  FaRocket,
} from 'react-icons/fa';
import { IconType } from 'react-icons';

interface SocialLink {
  icon: IconType;
  href: string;
  label: string;
}

interface QuickLink {
  name: string;
  path: string;
}

const Footer: React.FC = () => {
  const socialLinks: SocialLink[] = [
    { icon: FaGithub, href: 'https://github.com/0Anish0', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/anish-kumar-pandey-57390b190/', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com/Factlogical_Ani', label: 'Twitter' },
    { icon: FaInstagram, href: 'https://www.instagram.com/factlogical_anish/', label: 'Instagram' },
    { icon: FaYoutube, href: 'https://www.youtube.com/@Factlogical_Anish/videos', label: 'YouTube' },
  ];

  const quickLinks: QuickLink[] = [
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ];

  const services: string[] = [
    'Machine Learning Solutions',
    'Full-Stack Development',
    'AI Consulting',
    'Data Analysis',
    'Web Applications',
    'Mobile Development',
  ];

  return (
    <footer className="bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-neural-network opacity-5"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-500/20 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            {...({} as any)}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
            {...({} as any)}
          >
            <div className="flex items-center space-x-3 mb-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center"
                {...({} as any)}
              >
                <FaRocket className="w-5 h-5 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                ML Wizard
              </h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming ideas into intelligent solutions through cutting-edge machine learning 
              and full-stack development expertise.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <FaMapMarkerAlt className="w-4 h-4 text-primary-400" />
                <span>Meerut, NCR, India</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <FaEnvelope className="w-4 h-4 text-primary-400" />
                <a href="mailto:anishpandey4576@gmail.com" className="hover:text-primary-400 transition-colors">
                  anishpandey4576@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <FaPhone className="w-4 h-4 text-primary-400" />
                <a href="tel:+919852208695" className="hover:text-primary-400 transition-colors">
                  +91 9852208695
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            {...({} as any)}
          >
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <motion.span
                      className="w-1 h-1 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.5 }}
                      {...({} as any)}
                    />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            {...({} as any)}
          >
            <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-gray-400 flex items-center space-x-2">
                  <div className="w-1 h-1 bg-secondary-400 rounded-full" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            {...({} as any)}
          >
            <h4 className="text-lg font-semibold mb-6 text-white">Connect With Me</h4>
            
            {/* Social Icons */}
            <div className="flex flex-wrap gap-3 mb-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:from-primary-500 hover:to-secondary-500 transition-all duration-300 backdrop-blur-sm border border-white/10"
                  {...({} as HTMLMotionProps<"a">)}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-lg p-4 border border-white/10 backdrop-blur-sm">
              <h5 className="text-sm font-semibold mb-2 text-white">Stay Updated</h5>
              <p className="text-xs text-gray-400 mb-3">Get notified about new projects and insights</p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-md text-white text-sm font-medium hover:from-primary-600 hover:to-secondary-600 transition-all duration-200"
                  {...({} as HTMLMotionProps<"button">)}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-white/10"
          {...({} as any)}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© 2024 ML Wizard. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                {...({} as any)}
              >
                <FaHeart className="w-4 h-4 text-red-500" />
              </motion.div>
              <span>and lots of ☕</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
              <span>All rights reserved.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 
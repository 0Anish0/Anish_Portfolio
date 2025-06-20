import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaSun, FaMoon, FaRobot } from 'react-icons/fa';
import { useTheme } from '../../contexts/ThemeContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import logo from '../../assets/logo.png';

const Navbar = ({ onChatToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { scrollY, scrollDirection } = useScrollAnimation();
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ];

  const isScrolled = scrollY > 50;
  const isHidden = scrollDirection === 'down' && scrollY > 200;

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isHidden ? -100 : 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-dark-900/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.img
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              src={logo}
              alt="Logo"
              className="w-10 h-10"
            />
            <motion.span
              className="text-xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              ML Wizard
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-primary-500'
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary-500'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Chat Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onChatToggle}
              className="p-2 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-colors duration-200"
            >
              <FaRobot className="w-5 h-5" />
            </motion.button>

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-600 transition-colors duration-200"
            >
              {isDark ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300"
            >
              {isOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-dark-700"
          >
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-primary-500 bg-primary-50 dark:bg-primary-900/20'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary-500 hover:bg-gray-50 dark:hover:bg-dark-800'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
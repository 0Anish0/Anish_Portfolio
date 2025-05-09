import "./styles/NavbarStyle.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change (optional, for better UX)
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const navLinks = [
    { path: '/', label: 'Home', section: 'home' },
    { path: '/about', label: 'About', section: 'about' },
    { path: '/project', label: 'Projects', section: 'projects' },
    { path: '/contact', label: 'Contact', section: 'contact' },
  ];

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <Link to="/" className="logo">
          <span className="text-gradient">AP</span>
        </Link>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${activeSection === link.section ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
              <span className="nav-link-underline"></span>
            </Link>
          ))}
        </div>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={() => {
              const currentTheme = document.documentElement.getAttribute('data-theme');
              document.documentElement.setAttribute(
                'data-theme',
                currentTheme === 'dark' ? 'light' : 'dark'
              );
            }}
            aria-label="Toggle dark mode"
          >
            <span className="theme-icon">🌙</span>
          </button>

          <button
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Open menu"
          >
            <FaBars style={{ display: isMenuOpen ? 'none' : 'block' }} />
            <FaTimes style={{ display: isMenuOpen ? 'block' : 'none' }} />
          </button>
        </div>
      </div>
      {/* Optional: Backdrop overlay for mobile menu */}
      {isMenuOpen && <div className="nav-backdrop" onClick={() => setIsMenuOpen(false)}></div>}
    </motion.nav>
  );
};

export default Navbar;

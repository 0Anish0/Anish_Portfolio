import "./styles/footerStyles.css";
import {
  FaPhone,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaMapMarkerAlt,
  FaEnvelope,
  FaTwitter,
  FaFacebook,
  FaCode,
  FaRocket,
  FaLightbulb
} from "react-icons/fa";
import React from "react";
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { 
      icon: <FaGithub />, 
      url: "https://github.com/0Anish0", 
      label: "GitHub",
      color: "#333",
      hoverColor: "#4f46e5"
    },
    { 
      icon: <FaLinkedin />, 
      url: "https://www.linkedin.com/in/anish-kumar-pandey-57390b190/", 
      label: "LinkedIn",
      color: "#0077b5",
      hoverColor: "#0077b5"
    },
    { 
      icon: <FaTwitter />, 
      url: "https://twitter.com/Factlogical_Ani", 
      label: "Twitter",
      color: "#1da1f2",
      hoverColor: "#1da1f2"
    },
    { 
      icon: <FaInstagram />, 
      url: "https://www.instagram.com/factlogical_anish/", 
      label: "Instagram",
      color: "#e4405f",
      hoverColor: "#e4405f"
    },
    { 
      icon: <FaYoutube />, 
      url: "https://www.youtube.com/@Factlogical_Anish/videos", 
      label: "YouTube",
      color: "#ff0000",
      hoverColor: "#ff0000"
    },
    { 
      icon: <FaFacebook />, 
      url: "https://www.facebook.com/anih.pandey.9/", 
      label: "Facebook",
      color: "#1877f2",
      hoverColor: "#1877f2"
    }
  ];

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "Noida, Uttar Pradesh, India",
      type: "text"
    },
    {
      icon: <FaPhone />,
      label: "Phone",
      value: "+91 98522 08695",
      type: "phone",
      href: "tel:+919852208695"
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "anishpandey4576@gmail.com",
      type: "email",
      href: "mailto:anishpandey4576@gmail.com"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const socialIconVariants = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  return (
    <footer className="footer" id="footer">
      <div className="footer-gradient"></div>
      <div className="footer-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      
      <motion.div 
        className="footer-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Main Content Grid */}
        <div className="footer-main-grid">
          {/* Brand Section */}
          <motion.div className="footer-section brand-section" variants={itemVariants}>
            <div className="brand-logo">
              <FaCode className="brand-icon" />
              <h3>Anish Pandey</h3>
            </div>
            <p className="brand-tagline">
              Passionate Full Stack Developer crafting digital experiences with modern technologies
            </p>
            <div className="expertise-tags">
              <span className="tag">
                <FaRocket /> Full Stack Development
              </span>
              <span className="tag">
                <FaLightbulb /> Problem Solving
              </span>
            </div>
          </motion.div>

          {/* Quick Contact */}
          <motion.div className="footer-section quick-contact" variants={itemVariants}>
            <h4>Let's Connect</h4>
            <div className="contact-quick-list">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  className="quick-contact-item"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="quick-contact-icon">
                    {info.icon}
                  </div>
                  <div className="quick-contact-info">
                    <span className="contact-label">{info.label}</span>
                    {info.href ? (
                      <a href={info.href} className="contact-value">
                        {info.value}
                      </a>
                    ) : (
                      <span className="contact-value">{info.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div className="footer-section social-section" variants={itemVariants}>
            <h4>Follow Me</h4>
            <div className="social-links-grid">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-modern"
                  variants={socialIconVariants}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5
                  }}
                  whileTap={{ scale: 0.9 }}
                  style={{ '--link-color': link.color }}
                  aria-label={`Follow me on ${link.label}`}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer Bottom */}
      <motion.div 
        className="footer-bottom"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="footer-divider"></div>
        <div className="footer-copyright">
          <div className="copyright-left">
            <p>© {new Date().getFullYear()} <span className="brand-highlight">Anish Kumar Pandey</span>. All rights reserved.</p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;

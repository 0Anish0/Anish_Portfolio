import "./styles/footerStyles.css";
import {
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import React from "react";
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { 
      icon: <FaGithub />, 
      url: "https://github.com/0Anish0", 
      label: "GitHub",
      color: "#333"
    },
    { 
      icon: <FaLinkedin />, 
      url: "https://www.linkedin.com/in/anish-kumar-pandey-57390b190/", 
      label: "LinkedIn",
      color: "#0077b5"
    },
    { 
      icon: <FaTwitter />, 
      url: "https://twitter.com/Factlogical_Ani", 
      label: "Twitter",
      color: "#1da1f2"
    },
    { 
      icon: <FaInstagram />, 
      url: "https://www.instagram.com/factlogical_anish/", 
      label: "Instagram",
      color: "#e4405f"
    },
    { 
      icon: <FaYoutube />, 
      url: "https://www.youtube.com/@Factlogical_Anish/videos", 
      label: "YouTube",
      color: "#ff0000"
    },
    { 
      icon: <FaFacebook />, 
      url: "https://www.facebook.com/anih.pandey.9/", 
      label: "Facebook",
      color: "#1877f2"
    }
  ];

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      primary: "Noida, Uttar Pradesh (NCR)",
      secondary: "India",
      type: "text"
    },
    {
      icon: <FaPhone />,
      primary: "+91 9852208695",
      type: "phone",
      href: "tel:+919852208695"
    },
    {
      icon: <FaEnvelope />,
      primary: "anishpandey4576@gmail.com",
      type: "email",
      href: "mailto:anishpandey4576@gmail.com"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <footer className="footer">
      <div className="footer-gradient"></div>
      <motion.div 
        className="footer-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="footer-section contact-section" variants={itemVariants}>
          <h3>Contact Information</h3>
          <div className="contact-grid">
            {contactInfo.map((info, index) => (
              <motion.div 
                key={index}
                className="contact-item"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="contact-icon">
                  {info.icon}
                </div>
                <div className="contact-details">
                  {info.type === "text" ? (
                    <>
                      <p>{info.primary}</p>
                      <p>{info.secondary}</p>
                    </>
                  ) : (
                    <a href={info.href}>{info.primary}</a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className="footer-section social-section" variants={itemVariants}>
          <h3>Connect With Me</h3>
          <div className="social-grid">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: link.color,
                  color: '#ffffff'
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {link.icon}
                <span className="social-label">{link.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="footer-bottom"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="footer-line"></div>
        <div className="copyright">
          <p>© {new Date().getFullYear()} Anish Pandey. All rights reserved.</p>
          <p>Crafted with passion and modern technology</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;

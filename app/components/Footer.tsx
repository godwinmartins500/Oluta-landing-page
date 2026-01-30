// app/components/Footer.tsx
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Send } from 'lucide-react';
import { motion, Variants } from 'framer-motion'; // Added motion and Variants
import './Footer.css';

const Footer: React.FC = () => {
  // 1. Container variants to stagger the footer sections
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  // 2. Item variants for each section
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // 3. Hover variants for social links
  const socialHover: Variants = {
    hover: { 
      y: -5, 
      scale: 1.1,
      transition: { type: "spring", stiffness: 400, damping: 10 } 
    }
  };

  return (
    <footer className="footer">
      <motion.div 
        className="footer-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="footer-content">
          {/* Logo and Contact Section */}
          <motion.div className="footer-section" variants={itemVariants}>
            <div className="footer-logo">
              <img src="./OLUTA STANBIC 3.png" alt="Oluta" className="logo-image" />
            </div>
            <div className="footer-contact">
              <h3 className="contact-title">Reach us via</h3>
              <div className="contact-items">
                <motion.a 
                  href="mailto:Support@oluta.com" 
                  className="contact-item"
                  whileHover={{ x: 5, color: "#0052cc" }}
                >
                  <Mail size={16} />
                  <span>info@temlio.com</span>
                </motion.a>
                <motion.a 
                  href="tel:+2348000000000" 
                  className="contact-item"
                  whileHover={{ x: 5, color: "#0052cc" }}
                >
                  <Phone size={16} />
                  <span>+234 800 000 0000</span>
                </motion.a>
                <div className="contact-item">
                  <MapPin size={16} />
                  <span>6, Olatunde Sanni<br />Cresent, Mende<br />Maryland</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Copyright Section */}
          <motion.div className="footer-section footer-copyright" variants={itemVariants}>
            <p className="copyright-text">
              2025 Oluta. Oluta is a brand fully owned by Temlio Communications.
            </p>
            <p className="copyright-text">
              All logos and mockups used belong to Oluta. Their usage indicates association or claim by Temlio Communications.
            </p>
          </motion.div>

          {/* Social Media Section */}
          <motion.div className="footer-section footer-social" variants={itemVariants}>
            <motion.a 
              variants={socialHover}
              whileHover="hover"
              href="" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
            >
              <Facebook size={20} />
            </motion.a>
            <motion.a 
              variants={socialHover}
              whileHover="hover"
              href="" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
            >
              <Instagram size={20} />
            </motion.a>
            <motion.a 
              variants={socialHover}
              whileHover="hover"
              href="" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
            >
              <Send size={20} />
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="footer-bottom" 
          variants={itemVariants}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p>© 2026 OLUTA. ALL RIGHTS RESERVED. BANKING INFRASTRUCTURE FOR AFRICAN COMMERCE</p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
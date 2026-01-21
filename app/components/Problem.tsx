// app/components/Problem.tsx
import React from 'react';
import { motion, Variants } from 'framer-motion'; // Added Variants here
import './Problem.css';

const Problem: React.FC = () => {
  // 1. Container variant to stagger the entrance of children
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child appearing
        delayChildren: 0.1,
      },
    },
  };

  // 2. Standard fade-up variant for text and cards
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // 3. Hover animation for the info boxes
  const cardHover: Variants = {
    hover: {
      y: -8,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  return (
    <section className="problem-wrapper">
      <motion.div 
        className="problem-inner"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="problem-title">
          The Problem
        </motion.h2>
        
        <motion.p variants={itemVariants} className="problem-subtitle">
          Nigeria’s $50+ billion informal commerce market is trapped in chaos. 
          Merchants struggle with inventory management, missed orders, and no access to capital. 
          Banks have millions of dormant SME customers but lack the infrastructure to serve them profitably.
        </motion.p>

        <div className="problem-grid">
          {/* Left Image */}
          <motion.div variants={itemVariants} className="problem-image-left">
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              src="/Frame 1984077890.png" 
              alt="Merchant working" 
            />
          </motion.div>

          {/* Central Content */}
          <div className="problem-content">
            <motion.div 
              variants={itemVariants} 
              whileHover="hover"
              className="problem-box merchant-box"
            >
              <motion.h3 variants={cardHover} className="problem-section-title">
                For Merchants
              </motion.h3>
              <ul className="problem-list">
                <li>No visibility into inventory—constant stockouts and overstock</li>
                <li>Missed orders buried in WhatsApp and chat messages</li>
                <li>Payment chaos—no tracking of who owes what</li>
                <li>No access to working capital without collateral</li>
              </ul>
            </motion.div>

            <motion.div 
              variants={itemVariants} 
              whileHover="hover"
              className="problem-box bank-box"
            >
              <motion.h3 variants={cardHover} className="problem-section-title">
                For Banks
              </motion.h3>
              <ul className="problem-list">
                <li>Millions of SME accounts generating minimal revenue</li>
                <li>Can't assess credit risk for informal businesses</li>
                <li>Building infrastructure takes 2–3 years and millions</li>
                <li>Fintech competitors are stealing market share</li>
              </ul>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div variants={itemVariants} className="problem-image-right">
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              src="/Frame 1984077892.png" 
              alt="Bank building" 
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Problem;
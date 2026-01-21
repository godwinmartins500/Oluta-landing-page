// app/components/Opportunity.tsx
import React from 'react';
import { motion, Variants } from 'framer-motion';
import './Opportunity.css';

const Opportunity: React.FC = () => {
  // 1. Container variants to orchestrate children entrance
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each stat card
        delayChildren: 0.1,
      },
    },
  };

  // 2. Individual item variants (Header & Cards)
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // 3. Special variant for the Map (slight scale up)
  const mapVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, x: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut", delay: 0.4 }
    }
  };

  return (
    <section className="opportunity-section">
      <motion.div 
        className="opportunity-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="opportunity-content">
          {/* Left Section - Header & Stats Grid */}
          <div className="left-section">
            <motion.div className="opportunity-header" variants={itemVariants}>
              <h1 className="opportunity-title">
                <span className="title-market">Market</span>{' '}
                <span className="title-impact">Opportunity & Impact</span>
              </h1>
              <p className="opportunity-subtitle">
                Nigeria's embedded finance market is exploding. The window is open, but it won't stay open forever.
              </p>
            </motion.div>

            <motion.div className="stats-grid" variants={containerVariants}>
              {/* Market Opportunity */}
              <motion.div 
                className="stat-card" 
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <p className="stat-label">Market Opportunity</p>
                <h2 className="stat-value">50B+</h2>
                <p className="stat-description">Informal commerce in Nigeria</p>
              </motion.div>

              {/* Deployment Speed */}
              <motion.div 
                className="stat-card" 
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <p className="stat-label">Deployment Speed</p>
                <h2 className="stat-value">90 Days</h2>
                <p className="stat-description">Informal commerce in Nigeria</p>
              </motion.div>

              {/* Revenue Growth */}
              <motion.div 
                className="stat-card" 
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <p className="stat-label">Revenue Growth</p>
                <h2 className="stat-value">25-40%</h2>
                <p className="stat-description">Merchant revenue increase</p>
              </motion.div>

              {/* Loan Repayment */}
              <motion.div 
                className="stat-card" 
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <p className="stat-label">Loan Repayment</p>
                <h2 className="stat-value">85%+</h2>
                <p className="stat-description">Repayment rate on working capital loans</p>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Section - World Map */}
          <motion.div 
            className="map-container"
            variants={mapVariants}
          >
            <motion.div 
              className="world-map"
              animate={{ 
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              {/* World map image will be set via CSS background */}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Opportunity;
// app/components/Transform.tsx
'use client';

import React from 'react';
import { ArrowUpRight, Play } from 'lucide-react';
import { motion, Variants } from 'framer-motion'; // Added Variants
import './Transform.css';

const Transform: React.FC<{ openModal: () => void }> = ({ openModal }) => {
  // 1. Container variant to stagger the title, subtitle, and buttons
  const containerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom "out-expo" ease for a premium feel
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  // 2. Item variants for text and buttons
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="transform-wrapper">
      <motion.section 
        className="transform-hero"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <div className="transform-container">
          <motion.h1 variants={itemVariants} className="transform-title">
            Ready to Transform African Commerce?
          </motion.h1>
          
          <motion.p variants={itemVariants} className="transform-subtitle">
            Join the banks and merchants building the future of commerce and finance in Africa. 
            The window is open. Let's move fast.
          </motion.p>
          
          <motion.div variants={itemVariants} className="transform-cta">
            <motion.button 
              className="btn btn-primary" 
              onClick={openModal}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.98 }}
            >
              Request a Demo
              <Play className="btn-icon" size={18} fill="currentColor" />
            </motion.button>

            <motion.button 
              className="btn btn-secondary"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.98 }}
            >
              Learn more
              <ArrowUpRight className="btn-icon" size={20} />
            </motion.button>
          </motion.div>
        </div>

        {/* Optional: Animated background glow effect */}
        <motion.div 
          className="transform-bg-glow"
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          style={{
            position: 'absolute',
            top: '-50%',
            left: '-50%',
            width: '200%',
            height: '200%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 60%)',
            pointerEvents: 'none',
            zIndex: 0
          }}
        />
      </motion.section>
    </div>
  );
};

export default Transform;
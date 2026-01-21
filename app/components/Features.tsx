// app/components/Features.tsx
'use client';

import { useState } from 'react';
import { Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion'; // Added Variants
import './Features.css';

const Features = () => {
  const features = [
    {
      title: "White-Label Bank Platform",
      description: "Fully customizable merchant banking app that banks white-label as their own product. Deploy in 90 days instead of 2-3 years.",
      tagline: "Distribution lock-in through brand equity"
    },
    {
      title: "AI-Powered Order Capture",
      description: "Automatically converts WhatsApp and chat messages into draft orders. Merchants report 25-40% revenue increases in the first month.",
      tagline: "Never miss an order again"
    },
    {
      title: "Real-Time Inventory Management",
      description: "Automated stock tracking with turnover reports. Merchants make data-driven stocking decisions and improve profit margins by 10-20%.",
      tagline: "Inventory as collateral for lending"
    },
    {
      title: "Inventory-Backed Credit",
      description: "AI-powered credit scoring based on real-time inventory. Merchants qualify for loans in 30 days with 85% approval rates.",
      tagline: "Commerce-backed lending"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  // 1. Container variants for staggering the grid cards
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  // 2. Individual card variants
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      className="features-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="features-header">
        <motion.h1 variants={cardVariants} className="features-title">
          Core <span className="features-title-highlight">Features</span>
        </motion.h1>
        
        <div className="subtitle-and-nav">
          <motion.div variants={cardVariants} className="subtitle-wrapper">
            <p className="features-subtitle">
              Oluta delivers ten core features grouped into three layers: Bank Infrastructure, Merchant Operating System,
              and Consumer Marketplace.
            </p>
          </motion.div>
          
          <motion.div variants={cardVariants} className="direction-nav">
            <button className="direction-nav-button" onClick={prevSlide}>
              <ChevronLeft size={20} />
            </button>
            <button className="direction-nav-button" onClick={nextSlide}>
              <ChevronRight size={20} />
            </button>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="features-grid"
        variants={containerVariants}
      >
        {features.map((feature, index) => (
          <motion.div 
            key={index} 
            className="feature-card"
            variants={cardVariants}
            whileHover={{ 
              y: -8, 
              backgroundColor: "#fcfcfc",
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)" 
            }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div 
              className="feature-icon"
              initial={{ rotate: -10 }}
              whileHover={{ rotate: 0, scale: 1.1 }}
            >
              <Zap size={24} />
            </motion.div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
            <p className="feature-tagline">{feature.tagline}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Features;
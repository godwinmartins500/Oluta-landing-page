// app/components/Path.tsx
'use client';

import { ArrowRight, CheckCircle, Building2, ShoppingCart, Package, ArrowUpRight, Play } from 'lucide-react';
import { motion, Variants } from 'framer-motion'; // Added Variants for TS
import './Path.css';

const Path: React.FC<{ openModal: () => void }> = ({ openModal }) => {
  const steps = [
    {
      title: "Bank Infrastructure",
      description: "Banks white-label Oluta's merchant platform and deploy it to their SME customer base.",
      benefits: [
        "Branded mobile app",
        "Instant deployment",
        "Revenue share model"
      ],
      icon: Building2
    },
    {
      title: "Merchant Operating System",
      description: "Merchants use Oluta to manage inventory, capture orders, and access working capital.",
      benefits: [
        "Order automation",
        "Inventory tracking",
        "Instant loans"
      ],
      icon: Package
    },
    {
      title: "Consumer Marketplace",
      description: "Consumers discover verified merchants and shop with confidence through the bank's marketplace.",
      benefits: [
        "Trusted Merchants",
        "Easy Browsing",
        "Delivery Tracking"
      ],
      icon: ShoppingCart
    }
  ];

  // 1. Container variants to manage staggering of the cards
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  // 2. Individual item variants for the header, cards, and footer
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] } 
    }
  };

  return (
    <motion.div 
      className="path-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.div className="path-header" variants={itemVariants}>
        <h1 className="path-title">How It Works</h1>
        <p className="path-subtitle">
          A simple three-layer architecture that powers commerce, lending, and payments across Africa.
        </p>
      </motion.div>

      <motion.div className="path-grid" variants={containerVariants}>
        {steps.map((step, index) => {
          const IconComponent = step.icon;
          return (
            <motion.div 
              key={index} 
              className="path-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                backgroundColor: "#ffffff",
                boxShadow: "0 20px 40px rgba(0,0,0,0.04)" 
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="path-icon">
                <IconComponent size={24} className="icon" />
              </div>
              <h3 className="path-card-title">{step.title}</h3>
              <p className="path-description">{step.description}</p>
              
              <ul className="path-benefits">
                {step.benefits.map((benefit, benefitIndex) => (
                  <motion.li 
                    key={benefitIndex} 
                    className="path-benefit"
                    initial={{ opacity: 0, x: -5 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (benefitIndex * 0.1) }}
                  >
                    <CheckCircle size={14} className="checkmark-icon" /> {benefit}
                  </motion.li>
                ))}
              </ul>

              <motion.a 
                href="#" 
                className="path-learn-more"
                whileHover={{ x: 5 }}
              >
                Learn More <ArrowRight size={14} className="arrow-icon" />
              </motion.a>
            </motion.div>
          )
        })}
      </motion.div>

      <motion.div className="path-actions" variants={itemVariants}>
        <motion.button 
          className="path-button-primary"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Partner with us <Play size={16} className="button-arrow" />
        </motion.button>
        
        <motion.button 
          className="path-button-secondary" 
          onClick={openModal}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Request a Demo <ArrowUpRight size={16} className="button-arrow" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Path;
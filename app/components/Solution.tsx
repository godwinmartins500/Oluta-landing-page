// app/components/Solution.tsx
import React from 'react';
import { Play, ArrowUpRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import './Solution.css';

const Solution: React.FC<{ openModal: () => void }> = ({ openModal }) => {
  // 1. Define types for the variants to prevent TypeScript errors
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

  const textVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="solution-wrapper">
      <motion.div 
        className="solution-inner"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="solution-content">
          <motion.h2 variants={textVariants} className="solution-title">
            The Oluta <span className="solution-highlight">Solution</span>
          </motion.h2>
          
          <motion.p variants={textVariants} className="solution-description">
            Oluta is a turnkey, white-label merchant banking platform that banks deploy in 90 days—not 2-3 years. We solve both problems simultaneously.
          </motion.p>
          
          <motion.div variants={textVariants} className="solution-buttons">
            <motion.a 
              href="#" 
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Partner with us <Play size={14} fill="white" />
            </motion.a>

            {/* Preserving your inline styles exactly as requested */}
            <motion.a 
              href="#" 
              className="btn-secondary" 
              onClick={(e) => { e.preventDefault(); openModal(); }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                backgroundColor: '#0052cc',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '8px',
                fontSize: '0.875rem',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'transform 0.2s',
                cursor: 'pointer'
              }}
            >
              Request a Demo <ArrowUpRight size={16} />
            </motion.a>
          </motion.div>
        </div>

        <div className="solution-visuals">
          <motion.div 
            className="solution-card merchant-card"
            variants={cardVariants}
            whileHover={{ y: -10 }}
          >
            <img src="/Frame 1984077896.png" alt="Merchant handling goods" />
          </motion.div>

          <motion.div 
            className="solution-card bank-card"
            variants={cardVariants}
            whileHover={{ y: -10 }}
          >
            <img src="/Frame 1984077897.png" alt="Bank building" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Solution;
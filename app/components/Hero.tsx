import React, { useState } from 'react';
import { ChevronDown, Play, ArrowUpRight, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero: React.FC<{ openModal: () => void }> = ({ openModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="hero-wrapper">
      <div className="hero-inner">
        {/* Navigation Bar */}
        <nav className="hero-nav">
          <div className="nav-logo">
            <img 
              src="/OLUTA LOGO@3x 1.png" 
              alt="Oluta Logo" 
              style={{ height: '23px', width: 'auto' }}
            />
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="nav-links desktop-nav">
            <a href="#">Home</a>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              Featured <ChevronDown size={16} />
            </a>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              How it works <ChevronDown size={16} />
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} color="#000000" /> : <Menu size={24} color="#000000" />}
          </div>
          
          {/* CTA Button - visible only on desktop */}
          <button className="nav-cta desktop-cta" onClick={openModal}>
            Request a demo <Play size={14} fill="white" />
          </button>
        </nav>

        {/* Mobile Sidebar Menu */}
        <div className={`mobile-sidebar ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-links">
            <a href="#" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#" onClick={() => setIsMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              Featured <ChevronDown size={16} />
            </a>
            <a href="#" onClick={() => setIsMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              How it works <ChevronDown size={16} />
            </a>
            <button 
              className="mobile-nav-cta" 
              onClick={() => {
                openModal();
                setIsMenuOpen(false);
              }}
            >
              Request a demo <Play size={14} fill="white" />
            </button>
          </div>
        </div>

        {/* Body Container */}
        <div className="hero-container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="hero-badge">
              <img src="/OLUTA LOGO@3x 2.png" alt="Badge" style={{ width: '18px', height: '18px' }} /> Banking Infrastructure for Africa
            </div>
            
            <h1 className="hero-title">
              Unlock <span className="text-blue">Commerce</span>. <br />
              Enable <span className="text-blue">Growth</span>.
            </h1>
            
            <p className="hero-description">
              Oluta is the embedded commerce and financial infrastructure 
              that transforms African banks into merchant powerhouses, 
              enabling lending, payments, and commerce at scale.
            </p>
            
            <div className="hero-buttons">
              <a href="#" className="btn-primary">
                Partner with us <Play size={14} fill="white" />
              </a>
              <button 
                className="btn-secondary" 
                onClick={openModal}
                style={{
                  backgroundColor: '#0052cc',
                  color: 'white',
                  border: 'none',
                  padding: '12px 22px',
                  borderRadius: '8px',
                  fontSize: '0.85rem',
                  fontWeight: '600'
                }}
              >
                Request a Demo <ArrowUpRight size={16} />
              </button>
            </div>
          </motion.div>

          <motion.div 
            className="hero-visual-wrapper"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="hero-circle-mask"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
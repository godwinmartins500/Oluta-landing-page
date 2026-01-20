import React from 'react';
import { ChevronDown, Play, ArrowUpRight } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
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
          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              Featured <ChevronDown size={16} />
            </a>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              How it works <ChevronDown size={16} />
            </a>
          </div>
          <button className="nav-cta">
            Request a demo <Play size={14} fill="white" />
          </button>
        </nav>

        {/* Body Container */}
        <div className="hero-container">
          <div className="hero-content">
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
              <a href="#" className="btn-secondary">
                Request a Demo <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <div className="hero-visual-wrapper">
            <div className="hero-circle-mask"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
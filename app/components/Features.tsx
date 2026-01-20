'use client';

import { useState } from 'react';
import { Zap, ChevronLeft, ChevronRight } from 'lucide-react';
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

  // Add carousel state and handlers
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <div className="features-container">
      <div className="features-header">
        <h1 className="features-title">
          Core <span className="features-title-highlight">Features</span>
        </h1>
        <div className="subtitle-and-nav">
          <div className="subtitle-wrapper">
            <p className="features-subtitle">
              Oluta delivers ten core features grouped into three layers: Bank Infrastructure, Merchant Operating System,
              and Consumer Marketplace.
            </p>
          </div>
          <div className="direction-nav">
            <button className="direction-nav-button" onClick={prevSlide}>
              <ChevronLeft size={20} />
            </button>
            <button className="direction-nav-button" onClick={nextSlide}>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">
              <Zap size={24} />
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
            <p className="feature-tagline">{feature.tagline}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
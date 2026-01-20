'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle, Building2, ShoppingCart, Package, ArrowUpRight, Play } from 'lucide-react';
import './Path.css';

const Path = () => {
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

  return (
    <div className="path-container">
      <div className="path-header">
        <h1 className="path-title">How It Works</h1>
        <p className="path-subtitle">
          A simple three-layer architecture that powers commerce, lending, and payments across Africa.
        </p>
      </div>

      <div className="path-grid">
        {steps.map((step, index) => {
          const IconComponent = step.icon;
          return (
            <div key={index} className="path-card">
              <div className="path-icon">
                <IconComponent size={24} className="icon" />
              </div>
              <h3 className="path-card-title">{step.title}</h3>
              <p className="path-description">{step.description}</p>
              <ul className="path-benefits">
                {step.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="path-benefit">
                    <CheckCircle size={14} className="checkmark-icon" /> {benefit}
                  </li>
                ))}
              </ul>
              <a href="#" className="path-learn-more">
                Learn More <ArrowRight size={14} className="arrow-icon" />
              </a>
            </div>
          )
        })}
      </div>

      <div className="path-actions">
        <button className="path-button-primary">
          Partner with us <Play size={16} className="button-arrow" />
        </button>
        <button className="path-button-secondary">
          Request a Demo <ArrowUpRight size={16} className="button-arrow" />
        </button>
      </div>
    </div>
  );
};

export default Path;
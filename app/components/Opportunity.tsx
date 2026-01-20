import React from 'react';
import './Opportunity.css';

const Opportunity: React.FC = () => {
  return (
    <section className="opportunity-section">
      <div className="opportunity-container">
        <div className="opportunity-content">
          {/* Left Section - Header & Stats Grid */}
          <div className="left-section">
            <div className="opportunity-header">
              <h1 className="opportunity-title">
                <span className="title-market">Market</span>{' '}
                <span className="title-impact">Opportunity & Impact</span>
              </h1>
              <p className="opportunity-subtitle">
                Nigeria's embedded finance market is exploding. The window is open, but it won't stay open forever.
              </p>
            </div>

            <div className="stats-grid">
              {/* Market Opportunity */}
              <div className="stat-card">
                <p className="stat-label">Market Opportunity</p>
                <h2 className="stat-value">50B+</h2>
                <p className="stat-description">Informal commerce in Nigeria</p>
              </div>

              {/* Deployment Speed */}
              <div className="stat-card">
                <p className="stat-label">Deployment Speed</p>
                <h2 className="stat-value">90 Days</h2>
                <p className="stat-description">Informal commerce in Nigeria</p>
              </div>

              {/* Revenue Growth */}
              <div className="stat-card">
                <p className="stat-label">Revenue Growth</p>
                <h2 className="stat-value">25-40%</h2>
                <p className="stat-description">Merchant revenue increase</p>
              </div>

              {/* Loan Repayment */}
              <div className="stat-card">
                <p className="stat-label">Loan Repayment</p>
                <h2 className="stat-value">85%+</h2>
                <p className="stat-description">Repayment rate on working capital loans</p>
              </div>
            </div>
          </div>

          {/* Right Section - World Map */}
          <div className="map-container">
            <div className="world-map">
              {/* World map image will be set via CSS background */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opportunity;
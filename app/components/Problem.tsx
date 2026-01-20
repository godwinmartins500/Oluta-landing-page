// app/components/Problem.tsx
import React from 'react';
import './Problem.css';

const Problem: React.FC = () => {
  return (
    <section className="problem-wrapper">
      <div className="problem-inner">
        <h2 className="problem-title">The Problem</h2>
        <p className="problem-subtitle">
          Nigeria’s $50+ billion informal commerce market is trapped in chaos. 
          Merchants struggle with inventory management, missed orders, and no access to capital. 
          Banks have millions of dormant SME customers but lack the infrastructure to serve them profitably.
        </p>

        <div className="problem-grid">
          {/* Left Image */}
          <div className="problem-image-left">
            <img src="/Frame 1984077890.png" alt="Merchant working in workshop" />
          </div>

          {/* Central Content */}
          <div className="problem-content">
            <div className="problem-box merchant-box">
              <h3 className="problem-section-title">For Merchants</h3>
              <ul className="problem-list">
                <li>No visibility into inventory—constant stockouts and overstock</li>
                <li>Missed orders buried in WhatsApp and chat messages</li>
                <li>Payment chaos—no tracking of who owes what</li>
                <li>No access to working capital without collateral</li>
              </ul>
            </div>

            <div className="problem-box bank-box">
              <h3 className="problem-section-title">For Banks</h3>
              <ul className="problem-list">
                <li>Millions of SME accounts generating minimal revenue</li>
                <li>Can't assess credit risk for informal businesses</li>
                <li>Building infrastructure takes 2–3 years and millions</li>
                <li>Fintech competitors are stealing market share</li>
              </ul>
            </div>
          </div>

          {/* Right Image */}
          <div className="problem-image-right">
            <img src="/Frame 1984077892.png" alt="Bank building in city" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
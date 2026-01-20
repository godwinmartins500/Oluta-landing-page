// app/components/Solution.tsx
import React from 'react';
import { Play, ArrowUpRight } from 'lucide-react';
import './Solution.css';

const Solution: React.FC = () => {
  return (
    <section className="solution-wrapper">
      <div className="solution-inner">
        <div className="solution-content">
          <h2 className="solution-title">
            The Oluta <span className="solution-highlight">Solution</span>
          </h2>
          <p className="solution-description">
            Oluta is a turnkey, white-label merchant banking platform that banks deploy in 90 days—not 2-3 years. We solve both problems simultaneously.
          </p>
          <div className="solution-buttons">
            <a href="#" className="btn-primary">
              Partner with us <Play size={14} fill="white" />
            </a>
            <a href="#" className="btn-secondary">
              Request a Demo <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="solution-visuals">
          <div className="solution-card merchant-card">
            <img src="/Frame 1984077896.png" alt="Merchant handling goods" />
            {/* <div className="card-content">
              <h3 className="card-title">For Merchants</h3>
              <p className="card-text">
                Free commerce tools and instant access to working capital through their trusted bank relationship.
              </p>
            </div> */}
          </div>

          <div className="solution-card bank-card">
            <img src="/Frame 1984077897.png" alt="Bank building" />
            {/* <div className="card-content">
              <h3 className="card-title">For Banks</h3>
              <p className="card-text">
                Fully customizable merchant banking app that banks white-label as their own product. Deploy in 90 days instead of 2-3 years.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
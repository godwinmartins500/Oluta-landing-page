import React from 'react';
import {  ArrowUpRight, Play } from 'lucide-react';
import './Transform.css';

const Transform = () => {
  return (
    <div className="transform-wrapper">
      <section className="transform-hero">
        <div className="transform-container">
          <h1 className="transform-title">
            Ready to Transform African Commerce?
          </h1>
          <p className="transform-subtitle">
            Join the banks and merchants building the future of commerce and finance in Africa. The window is open. Let's move fast.
          </p>
          <div className="transform-cta">
            <button className="btn btn-primary">
              Request a Demo
              <Play className="btn-icon" size={20} />
            </button>
            <button className="btn btn-secondary">
              Learn more
              <ArrowUpRight className="btn-icon" size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transform;
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Send } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo and Contact Section */}
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/OLUTA LOGO@3x 1.png" alt="Oluta" className="logo-image" />
            </div>
            <div className="footer-contact">
              <h3 className="contact-title">Reach us via</h3>
              <div className="contact-items">
                <a href="mailto:Support@oluta.com" className="contact-item">
                  <Mail size={16} />
                  <span>Support@oluta.com</span>
                </a>
                <a href="tel:+2348000000000" className="contact-item">
                  <Phone size={16} />
                  <span>234 8000000000</span>
                </a>
                <div className="contact-item">
                  <MapPin size={16} />
                  <span>6, Olatunde Sanni<br />Cresent, Mende<br />Maryland</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="footer-section footer-copyright">
            <p className="copyright-text">
              2025 Oluta. Oluta is a brand fully owned by Temlio Communications.
            </p>
            <p className="copyright-text">
              All logos and mockups used belong to Oluta. Their usage indicates association or claim by Temlio Communications.
            </p>
          </div>

          {/* Social Media Section */}
          <div className="footer-section footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <Instagram size={20} />
            </a>
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="social-link">
              <Send size={20} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© 2026 OLUTA. ALL RIGHTS RESERVED. BANKING INFRASTRUCTURE FOR AFRICAN COMMERCE</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
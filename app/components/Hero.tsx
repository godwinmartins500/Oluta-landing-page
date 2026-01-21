import "./Hero.css";
import { Menu, X, ArrowUpRight, Play } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  /* INLINE BUTTON STYLES */
  const primaryBtn: React.CSSProperties = {
    background: "#1d5bd8",
    color: "#ffffff",
    padding: "0.9rem 1.6rem",
    border: "none",
    borderRadius: "8px",
    fontWeight: 600,
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    cursor: "pointer",
    whiteSpace: "nowrap",
  };

  const secondaryBtn: React.CSSProperties = {
    background: "#ffffff",
    color: "#1d5bd8",
    padding: "0.9rem 1.6rem",
    border: "1.5px solid #1d5bd8",
    borderRadius: "8px",
    fontWeight: 600,
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    cursor: "pointer",
    whiteSpace: "nowrap",
  };

  const navBtn: React.CSSProperties = {
    background: "#1d5bd8",
    color: "#ffffff",
    padding: "0.6rem 1.4rem",
    border: "none",
    borderRadius: "8px",
    fontWeight: 600,
    display: "inline-flex",
    alignItems: "center",
    gap: "0.4rem",
    cursor: "pointer",
    whiteSpace: "nowrap",
  };

  return (
    <header className="hero-wrapper">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-logo">
          <img src="/OLUTA LOGO@3x 1.png" alt="Oluta logo" />
        </div>

        <ul className="nav-links">
          <li>Home</li>
          <li>
            Featured <span className="arrow">▾</span>
          </li>
          <li>
            How it works <span className="arrow">▾</span>
          </li>
        </ul>

        <div className="nav-actions">
          {/* NAV CTA */}
          <button className="nav-cta" style={navBtn}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "#ffffff" }}>
              <Play size={16} color="#ffffff" />
              Request a demo
            </span>
          </button>

          <button className="menu-toggle" onClick={() => setMenuOpen(true)}>
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}

      {/* SIDEBAR */}
      <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          <X size={22} />
        </button>

        <ul className="sidebar-links">
          <li>Home</li>
          <li>Featured</li>
          <li>How it works</li>
        </ul>

        <button className="sidebar-cta">
          <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "#ffffff" }}>
            <Play size={16} color="#ffffff" />
            Request a demo
          </span>
        </button>
      </aside>

      {/* HERO */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-eyebrow">Banking Infrastructure for Africa</span>

            <h1 className="hero-title">
              Unlock <span>Commerce.</span>
              <br />
              Enable <span>Growth.</span>
            </h1>

            <p className="hero-description">
              Oluta is the embedded commerce and financial infrastructure that
              transforms African banks into merchant powerhouses.
            </p>

            {/* HERO BUTTONS */}
            <div className="hero-buttons">
              {/* PRIMARY */}
              <button style={primaryBtn}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "#ffffff" }}>
                  Partner with us
                  <ArrowUpRight size={16} color="#ffffff" />
                </span>
              </button>

              {/* SECONDARY */}
              <button style={secondaryBtn}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "#1d5bd8" }}>
                  <Play size={16} color="#1d5bd8" />
                  Request a Demo
                </span>
              </button>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <div className="hero-bg-shape" />
            <img src="/Group 1000008489.png" alt="African commerce" className="hero-image" />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Hero;

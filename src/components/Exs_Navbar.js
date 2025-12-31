import React, { useState } from 'react';
import '../App.css';

const Exs_Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="Exs_navbar">
      <div className="container">
        <div className="Exs_nav-content">
          {/* Logo */}
          <div className="Exs_logo">
            <span className="Exs_logo-text">EXS</span>
            <span className="Exs_logo-dot">.</span>
          </div>

          {/* Desktop Menu */}
          <div className="Exs_nav-menu-desktop">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="Exs_nav-link"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="Exs_mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className={`Exs_hamburger ${isOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          {/* CTA Button */}
          <a href="#contact" className="btn btn-primary Exs_nav-cta">
            Get Started
          </a>
        </div>

        {/* Mobile Menu */}
        <div className={`Exs_mobile-menu ${isOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="Exs_mobile-link"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        .Exs_navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          z-index: 1000;
          padding: 20px 0;
          box-shadow: 0 1px 10px rgba(0, 0, 0, 0.05);
        }

        .Exs_nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .Exs_logo {
          display: flex;
          align-items: center;
          font-size: 28px;
          font-weight: 800;
          color: #1f2937;
        }

        .Exs_logo-dot {
          color: #4f46e5;
        }

        .Exs_nav-menu-desktop {
          display: flex;
          gap: 40px;
        }

        @media (max-width: 1024px) {
          .Exs_nav-menu-desktop {
            display: none;
          }
        }

        .Exs_nav-link {
          color: #4b5563;
          text-decoration: none;
          font-weight: 500;
          font-size: 16px;
          transition: color 0.3s;
          position: relative;
        }

        .Exs_nav-link:hover {
          color: #4f46e5;
        }

        .Exs_nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: #4f46e5;
          transition: width 0.3s;
        }

        .Exs_nav-link:hover::after {
          width: 100%;
        }

        .Exs_mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          z-index: 1001;
        }

        @media (max-width: 1024px) {
          .Exs_mobile-menu-btn {
            display: block;
          }

          .Exs_nav-cta {
            display: none;
          }
        }

        .Exs_hamburger {
          width: 30px;
          height: 20px;
          position: relative;
        }

        .Exs_hamburger span {
          position: absolute;
          width: 100%;
          height: 2px;
          background: #1f2937;
          transition: all 0.3s;
          border-radius: 2px;
        }

        .Exs_hamburger span:nth-child(1) {
          top: 0;
        }

        .Exs_hamburger span:nth-child(2) {
          top: 9px;
        }

        .Exs_hamburger span:nth-child(3) {
          top: 18px;
        }

        .Exs_hamburger.open span:nth-child(1) {
          transform: rotate(45deg);
          top: 9px;
        }

        .Exs_hamburger.open span:nth-child(2) {
          opacity: 0;
        }

        .Exs_hamburger.open span:nth-child(3) {
          transform: rotate(-45deg);
          top: 9px;
        }

        .Exs_mobile-menu {
          display: none;
          flex-direction: column;
          gap: 20px;
          padding: 30px 0;
          background: white;
          border-top: 1px solid #e5e7eb;
          margin-top: 20px;
        }

        .Exs_mobile-menu.open {
          display: flex;
        }

        .Exs_mobile-link {
          color: #4b5563;
          text-decoration: none;
          font-size: 18px;
          font-weight: 500;
          padding: 10px 0;
          transition: color 0.3s;
          border-bottom: 1px solid #f3f4f6;
        }

        .Exs_mobile-link:hover {
          color: #4f46e5;
        }

        .Exs_mobile-link:last-child {
          border-bottom: none;
        }

        .Exs_nav-cta {
          padding: 12px 28px;
          font-size: 15px;
        }
      `}</style>
    </nav>
  );
};

export default Exs_Navbar;

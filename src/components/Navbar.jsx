import React from 'react';
import { EXS_CONFIG } from '../utils/Exs_constants';

const Exs_Navbar = () => {
  const navItems = ['Home', 'Services', 'Projects', 'About', 'Contact'];

  return (
    <nav className="Exs_navbar">
      <div className="Exs_nav-logo">
        <span className="Exs_logo-text">EXS</span>
        <span className="Exs_logo-dot">.</span>
      </div>
      
      <ul className="Exs_nav-menu">
        {navItems.map((item) => (
          <li key={item} className="Exs_nav-item">
            <a href={`#${item.toLowerCase()}`} className="Exs_nav-link">
              {item}
            </a>
          </li>
        ))}
      </ul>
      
      <a href="#contact" className="Exs_cta-button">
        Get Started
      </a>
    </nav>
  );
};

export default Exs_Navbar;

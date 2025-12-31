import React from 'react';

const Exs_Hero = () => {
  return (
    <section className="Exs_hero">
      <div className="Exs_hero-content">
        <h1 className="Exs_hero-title">
          Welcome to <span className="Exs_highlight">EXS</span> Digital
        </h1>
        <p className="Exs_hero-subtitle">
          We craft exceptional digital experiences that drive growth and innovation
        </p>
        <div className="Exs_hero-buttons">
          <a href="#projects" className="Exs_btn-primary">
            View Our Work
          </a>
          <a href="#contact" className="Exs_btn-secondary">
            Contact Us
          </a>
        </div>
      </div>
      <div className="Exs_hero-visual">
        {/* Add your hero image/illustration here */}
      </div>
    </section>
  );
};

export default Exs_Hero;

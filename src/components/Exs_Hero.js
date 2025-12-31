import React from 'react';
import '../App.css';

const Exs_Hero = () => {
  return (
    <section id="home" className="Exs_hero">
      <div className="container">
        <div className="Exs_hero-content">
          <div className="Exs_hero-text fade-in-up">
            <h1 className="Exs_hero-title">
              Transform Your Digital
              <span className="Exs_hero-highlight"> Presence</span>
            </h1>
            <p className="Exs_hero-subtitle">
              We build exceptional digital experiences that drive growth, 
              engage users, and deliver measurable results for businesses worldwide.
            </p>
            <div className="Exs_hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View Our Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get Free Consultation
              </a>
            </div>
          </div>
          
          <div className="Exs_hero-stats">
            <div className="Exs_stat-item">
              <div className="Exs_stat-number">150+</div>
              <div className="Exs_stat-label">Projects Completed</div>
            </div>
            <div className="Exs_stat-item">
              <div className="Exs_stat-number">50+</div>
              <div className="Exs_stat-label">Happy Clients</div>
            </div>
            <div className="Exs_stat-item">
              <div className="Exs_stat-number">5+</div>
              <div className="Exs_stat-label">Years Experience</div>
            </div>
            <div className="Exs_stat-item">
              <div className="Exs_stat-number">24/7</div>
              <div className="Exs_stat-label">Support</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .Exs_hero {
          padding-top: 140px;
          padding-bottom: 100px;
          background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .Exs_hero::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -30%;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(79, 70, 229, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          z-index: 0;
        }

        .Exs_hero-content {
          position: relative;
          z-index: 1;
          max-width: 900px;
        }

        .Exs_hero-title {
          font-size: 64px;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 24px;
          color: #111827;
        }

        @media (max-width: 768px) {
          .Exs_hero-title {
            font-size: 48px;
          }
        }

        @media (max-width: 480px) {
          .Exs_hero-title {
            font-size: 36px;
          }
        }

        .Exs_hero-highlight {
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .Exs_hero-subtitle {
          font-size: 20px;
          line-height: 1.6;
          color: #6b7280;
          margin-bottom: 40px;
          max-width: 700px;
        }

        @media (max-width: 768px) {
          .Exs_hero-subtitle {
            font-size: 18px;
          }
        }

        .Exs_hero-buttons {
          display: flex;
          gap: 20px;
          margin-bottom: 60px;
        }

        @media (max-width: 640px) {
          .Exs_hero-buttons {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .Exs_hero-buttons .btn {
            width: 100%;
            text-align: center;
          }
        }

        .Exs_hero-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 30px;
          padding-top: 60px;
          border-top: 1px solid #e5e7eb;
        }

        .Exs_stat-item {
          text-align: center;
        }

        .Exs_stat-number {
          font-size: 48px;
          font-weight: 800;
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
          margin-bottom: 8px;
        }

        @media (max-width: 768px) {
          .Exs_stat-number {
            font-size: 36px;
          }
        }

        .Exs_stat-label {
          font-size: 16px;
          color: #6b7280;
          font-weight: 500;
        }
      `}</style>
    </section>
  );
};

export default Exs_Hero;

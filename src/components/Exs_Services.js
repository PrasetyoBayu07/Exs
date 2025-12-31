import React from 'react';
import '../App.css';

const Exs_Services = () => {
  const services = [
    {
      id: 1,
      icon: '💻',
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.',
      features: ['Responsive Design', 'Performance Optimized', 'SEO Friendly', 'Scalable Architecture']
    },
    {
      id: 2,
      icon: '📱',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.',
      features: ['iOS & Android', 'Offline Support', 'Push Notifications', 'App Store Deployment']
    },
    {
      id: 3,
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces that enhance user experience and drive engagement.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    },
    {
      id: 4,
      icon: '⚡',
      title: 'Performance Optimization',
      description: 'Speed up your existing website or application with our performance optimization services.',
      features: ['Core Web Vitals', 'Lazy Loading', 'Image Optimization', 'Caching Strategies']
    },
    {
      id: 5,
      icon: '🔒',
      title: 'Security Audits',
      description: 'Comprehensive security assessments and implementations to protect your digital assets.',
      features: ['Penetration Testing', 'Code Review', 'Security Headers', 'SSL/TLS Setup']
    },
    {
      id: 6,
      icon: '📈',
      title: 'Digital Marketing',
      description: 'Data-driven digital marketing strategies to grow your online presence and generate leads.',
      features: ['SEO', 'Social Media', 'Content Marketing', 'Analytics']
    }
  ];

  return (
    <section id="services" className="Exs_services">
      <div className="container">
        <div className="Exs_section-header">
          <h2>Our <span className="Exs_highlight">Services</span></h2>
          <p className="Exs_section-subtitle">
            We offer comprehensive digital solutions to help your business thrive in the digital age.
          </p>
        </div>

        <div className="Exs_services-grid">
          {services.map((service) => (
            <div key={service.id} className="Exs_service-card fade-in-up">
              <div className="Exs_service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="Exs_service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <a href="#contact" className="Exs_service-cta">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .Exs_services {
          background: #f9fafb;
          padding: 100px 0;
        }

        .Exs_section-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 60px;
        }

        .Exs_section-subtitle {
          font-size: 18px;
          color: #6b7280;
          max-width: 600px;
          margin: 0 auto;
        }

        .Exs_highlight {
          color: #4f46e5;
        }

        .Exs_services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }

        @media (max-width: 768px) {
          .Exs_services-grid {
            grid-template-columns: 1fr;
          }
        }

        .Exs_service-card {
          background: white;
          border-radius: 16px;
          padding: 40px 30px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .Exs_service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .Exs_service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
        }

        .Exs_service-icon {
          font-size: 48px;
          margin-bottom: 20px;
        }

        .Exs_service-card h3 {
          font-size: 24px;
          margin-bottom: 15px;
          color: #111827;
        }

        .Exs_service-card p {
          font-size: 16px;
          color: #6b7280;
          margin-bottom: 20px;
          line-height: 1.6;
        }

        .Exs_service-features {
          list-style: none;
          margin: 20px 0;
          padding: 0;
        }

        .Exs_service-features li {
          position: relative;
          padding-left: 24px;
          margin-bottom: 8px;
          color: #4b5563;
          font-size: 14px;
        }

        .Exs_service-features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #10b981;
          font-weight: bold;
        }

        .Exs_service-cta {
          display: inline-block;
          color: #4f46e5;
          text-decoration: none;
          font-weight: 600;
          font-size: 15px;
          margin-top: 10px;
          transition: color 0.3s;
        }

        .Exs_service-cta:hover {
          color: #7c3aed;
        }
      `}</style>
    </section>
  );
};

export default Exs_Services;

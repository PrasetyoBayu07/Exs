import React from 'react';
import '../App.css';

const Exs_Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { name: 'Web Development', href: '#services' },
      { name: 'Mobile Apps', href: '#services' },
      { name: 'UI/UX Design', href: '#services' },
      { name: 'Digital Marketing', href: '#services' }
    ],
    Company: [
      { name: 'About Us', href: '#about' },
      { name: 'Projects', href: '#projects' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' }
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' }
    ]
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      href: 'https://github.com/PrasetyoBayu07'
    },
    {
      name: 'Twitter',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      href: '#'
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      href: '#'
    },
    {
      name: 'Instagram',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      href: '#'
    }
  ];

  return (
    <footer className="Exs_footer">
      <div className="container">
        <div className="Exs_footer-content">
          <div className="Exs_footer-brand">
            <div className="Exs_footer-logo">
              <span className="Exs_logo-text">EXS</span>
              <span className="Exs_logo-dot">.</span>
            </div>
            <p className="Exs_footer-tagline">
              Creating exceptional digital experiences since 2020.
            </p>
            <div className="Exs_footer-social">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="Exs_social-link"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="Exs_footer-links">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="Exs_footer-column">
                <h4 className="Exs_footer-heading">{category}</h4>
                <ul className="Exs_footer-list">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="Exs_footer-link">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="Exs_footer-bottom">
          <div className="Exs_copyright">
            &copy; {currentYear} EXS Digital. All rights reserved.
          </div>
          <div className="Exs_footer-credits">
            Made with ❤️ by{' '}
            <a 
              href="https://github.com/PrasetyoBayu07" 
              target="_blank" 
              rel="noopener noreferrer"
              className="Exs_credit-link"
            >
              PrasetyoBayu07
            </a>
            {' '}• Hosted on{' '}
            <a 
              href="https://vercel.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="Exs_credit-link"
            >
              Vercel
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .Exs_footer {
          background: #111827;
          color: white;
          padding: 80px 0 40px;
        }

        .Exs_footer-content {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 60px;
          margin-bottom: 60px;
        }

        @media (max-width: 768px) {
          .Exs_footer-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        .Exs_footer-brand {
          max-width: 300px;
        }

        .Exs_footer-logo {
          display: flex;
          align-items: center;
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 20px;
        }

        .Exs_logo-dot {
          color: #4f46e5;
        }

        .Exs_footer-tagline {
          font-size: 16px;
          color: #9ca3af;
          margin-bottom: 30px;
          line-height: 1.6;
        }

        .Exs_footer-social {
          display: flex;
          gap: 20px;
        }

        .Exs_social-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: white;
          transition: all 0.3s ease;
        }

        .Exs_social-link:hover {
          background: #4f46e5;
          transform: translateY(-3px);
        }

        .Exs_footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        @media (max-width: 768px) {
          .Exs_footer-links {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .Exs_footer-links {
            grid-template-columns: 1fr;
          }
        }

        .Exs_footer-heading {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 20px;
          color: white;
        }

        .Exs_footer-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .Exs_footer-list li {
          margin-bottom: 12px;
        }

        .Exs_footer-link {
          color: #9ca3af;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.3s;
        }

        .Exs_footer-link:hover {
          color: white;
        }

        .Exs_footer-bottom {
          padding-top: 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        @media (max-width: 640px) {
          .Exs_footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }

        .Exs_copyright {
          font-size: 14px;
          color: #9ca3af;
        }

        .Exs_footer-credits {
          font-size: 14px;
          color: #9ca3af;
        }

        .Exs_credit-link {
          color: #4f46e5;
          text-decoration: none;
          font-weight: 500;
        }

        .Exs_credit-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </footer>
  );
};

export default Exs_Footer;

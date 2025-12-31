import React from 'react';
import '../App.css';

const Exs_Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-featured e-commerce solution with cart, payments, and admin dashboard.',
      category: 'Web Application',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: 'https://github.com/PrasetyoBayu07',
      imageColor: '#4f46e5'
    },
    {
      id: 2,
      title: 'Health & Fitness App',
      description: 'Mobile app for workout tracking, nutrition planning, and progress monitoring.',
      category: 'Mobile App',
      technologies: ['React Native', 'Firebase', 'Redux'],
      liveUrl: '#',
      githubUrl: 'https://github.com/PrasetyoBayu07',
      imageColor: '#10b981'
    },
    {
      id: 3,
      title: 'Real Estate Dashboard',
      description: 'Dashboard for property management with analytics and reporting features.',
      category: 'Web Application',
      technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase'],
      liveUrl: '#',
      githubUrl: 'https://github.com/PrasetyoBayu07',
      imageColor: '#f59e0b'
    },
    {
      id: 4,
      title: 'Travel Booking System',
      description: 'Comprehensive platform for booking flights, hotels, and activities.',
      category: 'Web Application',
      technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Redis'],
      liveUrl: '#',
      githubUrl: 'https://github.com/PrasetyoBayu07',
      imageColor: '#8b5cf6'
    },
    {
      id: 5,
      title: 'Finance Tracker',
      description: 'Personal finance management app with budgeting and investment tracking.',
      category: 'Mobile App',
      technologies: ['Flutter', 'SQLite', 'GraphQL'],
      liveUrl: '#',
      githubUrl: 'https://github.com/PrasetyoBayu07',
      imageColor: '#3b82f6'
    },
    {
      id: 6,
      title: 'Educational Platform',
      description: 'Online learning platform with video courses, quizzes, and certificates.',
      category: 'Web Application',
      technologies: ['React', 'Django', 'PostgreSQL', 'AWS'],
      liveUrl: '#',
      githubUrl: 'https://github.com/PrasetyoBayu07',
      imageColor: '#ec4899'
    }
  ];

  return (
    <section id="projects" className="Exs_projects">
      <div className="container">
        <div className="Exs_section-header">
          <h2>Featured <span className="Exs_highlight">Projects</span></h2>
          <p className="Exs_section-subtitle">
            Take a look at some of our recent work that showcases our expertise and creativity.
          </p>
        </div>

        <div className="Exs_projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="Exs_project-card fade-in-up">
              <div 
                className="Exs_project-image"
                style={{ backgroundColor: project.imageColor }}
              >
                <div className="Exs_project-category">{project.category}</div>
              </div>
              
              <div className="Exs_project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="Exs_project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="Exs_tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="Exs_project-links">
                  <a 
                    href={project.liveUrl} 
                    className="Exs_project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl} 
                    className="Exs_project-link Exs_github-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="Exs_projects-cta text-center mt-4">
          <a 
            href="https://github.com/PrasetyoBayu07" 
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>

      <style jsx>{`
        .Exs_projects {
          padding: 100px 0;
        }

        .Exs_projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }

        @media (max-width: 768px) {
          .Exs_projects-grid {
            grid-template-columns: 1fr;
          }
        }

        .Exs_project-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .Exs_project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .Exs_project-image {
          height: 200px;
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 48px;
          font-weight: 800;
        }

        .Exs_project-category {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.9);
          color: #1f2937;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }

        .Exs_project-content {
          padding: 30px;
        }

        .Exs_project-content h3 {
          font-size: 22px;
          margin-bottom: 12px;
          color: #111827;
        }

        .Exs_project-content p {
          font-size: 15px;
          color: #6b7280;
          margin-bottom: 20px;
          line-height: 1.6;
        }

        .Exs_project-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }

        .Exs_tech-tag {
          background: #f3f4f6;
          color: #4b5563;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
        }

        .Exs_project-links {
          display: flex;
          gap: 20px;
        }

        .Exs_project-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #4f46e5;
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
          transition: color 0.3s;
        }

        .Exs_project-link:hover {
          color: #7c3aed;
        }

        .Exs_github-link {
          color: #6b7280;
        }

        .Exs_github-link:hover {
          color: #1f2937;
        }

        .Exs_projects-cta {
          margin-top: 60px;
        }
      `}</style>
    </section>
  );
};

export default Exs_Projects;

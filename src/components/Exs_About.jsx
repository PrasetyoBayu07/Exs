import React from 'react';
import '../App.css';

const Exs_About = () => {
  const teamMembers = [
    {
      name: 'Bayu Prasetyo',
      role: 'Founder & Lead Developer',
      bio: 'Full-stack developer with 5+ years experience in building scalable web applications.',
      expertise: ['React', 'Node.js', 'AWS', 'DevOps']
    },
    {
      name: 'Sarah Chen',
      role: 'UI/UX Designer',
      bio: 'Creative designer passionate about creating intuitive and beautiful user experiences.',
      expertise: ['Figma', 'Adobe Creative', 'Prototyping', 'Design Systems']
    },
    {
      name: 'Alex Johnson',
      role: 'Mobile Developer',
      bio: 'Specialized in cross-platform mobile development using React Native and Flutter.',
      expertise: ['React Native', 'Flutter', 'iOS', 'Android']
    }
  ];

  return (
    <section id="about" className="Exs_about">
      <div className="container">
        <div className="Exs_section-header">
          <h2>About <span className="Exs_highlight">EXS</span></h2>
          <p className="Exs_section-subtitle">
            We are a passionate team of developers, designers, and digital strategists 
            dedicated to creating exceptional digital experiences.
          </p>
        </div>

        <div className="Exs_about-content">
          <div className="Exs_about-text fade-in-up">
            <h3>Our Story</h3>
            <p>
              Founded in 2020, EXS Digital started with a simple mission: to help businesses 
              thrive in the digital world through innovative technology solutions. What began 
              as a small team of passionate developers has grown into a full-service digital 
              agency serving clients worldwide.
            </p>
            
            <h3>Our Approach</h3>
            <p>
              We believe in a collaborative approach where we work closely with our clients 
              to understand their unique needs and goals. Our process combines technical 
              expertise with creative thinking to deliver solutions that not only look great 
              but also perform exceptionally well.
            </p>

            <div className="Exs_values">
              <h3>Our Values</h3>
              <div className="Exs_values-grid">
                <div className="Exs_value-item">
                  <div className="Exs_value-icon">💡</div>
                  <h4>Innovation</h4>
                  <p>Always exploring new technologies and approaches</p>
                </div>
                <div className="Exs_value-item">
                  <div className="Exs_value-icon">🤝</div>
                  <h4>Collaboration</h4>
                  <p>Working together to achieve the best results</p>
                </div>
                <div className="Exs_value-item">
                  <div className="Exs_value-icon">🎯</div>
                  <h4>Excellence</h4>
                  <p>Striving for perfection in everything we do</p>
                </div>
              </div>
            </div>
          </div>

          <div className="Exs_about-team fade-in-up">
            <h3>Meet Our Team</h3>
            <div className="Exs_team-grid">
              {teamMembers.map((member, index) => (
                <div key={index} className="Exs_team-member">
                  <div className="Exs_member-avatar">
                    <div className="Exs_avatar-placeholder">
                      {member.name.charAt(0)}
                    </div>
                  </div>
                  <div className="Exs_member-info">
                    <h4>{member.name}</h4>
                    <p className="Exs_member-role">{member.role}</p>
                    <p className="Exs_member-bio">{member.bio}</p>
                    <div className="Exs_member-expertise">
                      {member.expertise.map((skill, i) => (
                        <span key={i} className="Exs_skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .Exs_about {
          background: #f9fafb;
          padding: 100px 0;
        }

        .Exs_about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          margin-top: 60px;
        }

        @media (max-width: 1024px) {
          .Exs_about-content {
            grid-template-columns: 1fr;
          }
        }

        .Exs_about-text h3 {
          font-size: 28px;
          margin-bottom: 20px;
          color: #111827;
        }

        .Exs_about-text p {
          margin-bottom: 30px;
          font-size: 16px;
          line-height: 1.8;
        }

        .Exs_values {
          margin-top: 40px;
        }

        .Exs_values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
          margin-top: 20px;
        }

        .Exs_value-item {
          text-align: center;
          padding: 30px 20px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }

        .Exs_value-icon {
          font-size: 40px;
          margin-bottom: 15px;
        }

        .Exs_value-item h4 {
          font-size: 18px;
          margin-bottom: 10px;
          color: #111827;
        }

        .Exs_value-item p {
          font-size: 14px;
          color: #6b7280;
          margin: 0;
        }

        .Exs_about-team h3 {
          font-size: 28px;
          margin-bottom: 30px;
          color: #111827;
        }

        .Exs_team-grid {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .Exs_team-member {
          display: flex;
          gap: 20px;
          align-items: flex-start;
          background: white;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease;
        }

        .Exs_team-member:hover {
          transform: translateY(-5px);
        }

        .Exs_member-avatar {
          flex-shrink: 0;
        }

        .Exs_avatar-placeholder {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 32px;
          font-weight: 600;
        }

        .Exs_member-info {
          flex: 1;
        }

        .Exs_member-info h4 {
          font-size: 20px;
          margin-bottom: 5px;
          color: #111827;
        }

        .Exs_member-role {
          color: #4f46e5;
          font-weight: 600;
          font-size: 14px;
          margin-bottom: 10px;
        }

        .Exs_member-bio {
          font-size: 14px;
          line-height: 1.6;
          color: #6b7280;
          margin-bottom: 15px;
        }

        .Exs_member-expertise {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .Exs_skill-tag {
          background: #f3f4f6;
          color: #4b5563;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
        }
      `}</style>
    </section>
  );
};

export default Exs_About;

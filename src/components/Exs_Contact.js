import React, { useState } from 'react';
import '../App.css';

const Exs_Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitStatus({
        type: 'success',
        message: 'Thank you! We\'ll get back to you within 24 hours.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        budget: '',
        message: ''
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: '✉️',
      title: 'Email',
      value: 'hello@exs-digital.com',
      link: 'mailto:hello@exs-digital.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+62 812-3456-7890',
      link: 'tel:+6281234567890'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Jakarta, Indonesia',
      link: 'https://maps.google.com'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/company/exs',
      link: 'https://linkedin.com'
    }
  ];

  const budgetOptions = [
    'Less than $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    'More than $50,000'
  ];

  return (
    <section id="contact" className="Exs_contact">
      <div className="container">
        <div className="Exs_section-header">
          <h2>Get In <span className="Exs_highlight">Touch</span></h2>
          <p className="Exs_section-subtitle">
            Ready to start your project? Contact us today for a free consultation.
          </p>
        </div>

        <div className="Exs_contact-content">
          <div className="Exs_contact-info fade-in-up">
            <h3>Contact Information</h3>
            <p className="Exs_contact-description">
              Have a project in mind? Let's discuss how we can help bring your ideas to life.
            </p>

            <div className="Exs_contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="Exs_contact-item">
                  <div className="Exs_contact-icon">{info.icon}</div>
                  <div className="Exs_contact-text">
                    <h4>{info.title}</h4>
                    <a 
                      href={info.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="Exs_contact-link"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="Exs_business-hours">
              <h4>Business Hours</h4>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          <div className="Exs_contact-form fade-in-up">
            <form onSubmit={handleSubmit}>
              {submitStatus && (
                <div className={`Exs_form-status ${submitStatus.type}`}>
                  {submitStatus.message}
                </div>
              )}

              <div className="Exs_form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="Exs_form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>

              <div className="Exs_form-group">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                />
              </div>

              <div className="Exs_form-group">
                <label htmlFor="budget">Project Budget</label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="">Select budget range</option>
                  {budgetOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="Exs_form-group">
                <label htmlFor="message">Project Details *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button 
                type="submit" 
                className="btn btn-primary Exs_submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="Exs_spinner"></span>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .Exs_contact {
          padding: 100px 0;
        }

        .Exs_contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          margin-top: 60px;
        }

        @media (max-width: 1024px) {
          .Exs_contact-content {
            grid-template-columns: 1fr;
          }
        }

        .Exs_contact-info h3 {
          font-size: 28px;
          margin-bottom: 20px;
          color: #111827;
        }

        .Exs_contact-description {
          font-size: 16px;
          color: #6b7280;
          margin-bottom: 40px;
          line-height: 1.6;
        }

        .Exs_contact-details {
          display: flex;
          flex-direction: column;
          gap: 30px;
          margin-bottom: 40px;
        }

        .Exs_contact-item {
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }

        .Exs_contact-icon {
          font-size: 24px;
          width: 50px;
          height: 50px;
          background: #f3f4f6;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .Exs_contact-text h4 {
          font-size: 16px;
          margin-bottom: 5px;
          color: #6b7280;
          font-weight: 500;
        }

        .Exs_contact-link {
          font-size: 18px;
          color: #111827;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s;
        }

        .Exs_contact-link:hover {
          color: #4f46e5;
        }

        .Exs_business-hours h4 {
          font-size: 18px;
          margin-bottom: 15px;
          color: #111827;
        }

        .Exs_business-hours p {
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 8px;
        }

        .Exs_contact-form {
          background: white;
          padding: 40px;
          border-radius: 16px;
          box-shadow: 0 4px 40px rgba(0, 0, 0, 0.08);
        }

        .Exs_form-status {
          padding: 15px 20px;
          border-radius: 8px;
          margin-bottom: 20px;
          font-weight: 500;
        }

        .Exs_form-status.success {
          background: #d1fae5;
          color: #065f46;
          border: 1px solid #a7f3d0;
        }

        .Exs_form-group {
          margin-bottom: 25px;
        }

        .Exs_form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          color: #374151;
          font-size: 14px;
        }

        .Exs_form-group input,
        .Exs_form-group select,
        .Exs_form-group textarea {
          width: 100%;
          padding: 14px 16px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          font-size: 16px;
          font-family: 'Inter', sans-serif;
          transition: all 0.3s;
          background: white;
        }

        .Exs_form-group input:focus,
        .Exs_form-group select:focus,
        .Exs_form-group textarea:focus {
          outline: none;
          border-color: #4f46e5;
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
        }

        .Exs_form-group input::placeholder,
        .Exs_form-group textarea::placeholder {
          color: #9ca3af;
        }

        .Exs_submit-btn {
          width: 100%;
          padding: 16px;
          font-size: 16px;
          position: relative;
        }

        .Exs_spinner {
          display: inline-block;
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 1s linear infinite;
          margin-right: 10px;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .Exs_submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
      `}</style>
    </section>
  );
};

export default Exs_Contact;

import React from 'react';
import './Contact.css';
import BodyContent from '../../BodyContent';

function Contact() {
  return (
    <BodyContent>
    <div className="contact-content">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-description">
        For inquiries or more information, please reach out to us:
      </p>
      <div className="contact-grid">
        {/* Email Section */}
        <div className="contact-item">
          <i className="icon email-icon"></i>
          <h3>Email</h3>
          <p>Our friendly team is here to help.</p>
          <a href="mailto:contactrefmedia@gmail.com">contactrefmedia@gmail.com</a>
        </div>

        {/* Phone Section */}
        <div className="contact-item">
          <i className="icon phone-icon"></i>
          <h3>Phone</h3>
          <p>Mon–Fri from 8am to 5pm.</p>
          <a href="tel:+94771343725">+94 77 13 43 725</a>
        </div>

        {/* Address Section */}
        <div className="contact-item">
          <i className="icon address-icon"></i>
          <h3>Address</h3>
          <p>Come say hello at our faculty.</p>
          <address>
            Engineering Faculty, University of Ruhuna,<br />
            Hapugala, Galle, Sri Lanka
          </address>
        </div>
      </div>

      <p className="contact-social-text">
        Follow us on social media to stay updated with the latest news and events!
      </p>

      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="social-icon facebook-icon"></i> Facebook
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <i className="social-icon youtube-icon"></i> YouTube
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="social-icon linkedin-icon"></i> LinkedIn
        </a>
      </div>
    </div>
    </BodyContent>
  );
}

export default Contact;

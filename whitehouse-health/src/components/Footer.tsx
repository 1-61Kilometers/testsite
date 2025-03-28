import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-container">
          <div className="footer-col">
            <h3>Follow Us</h3>
            <p>At White House Health Systems, we pride ourselves on being a trusted provider of mental health services. Our team is comprised of highly skilled professionals who are passionate about helping individuals achieve optimal mental well-being. To learn more about us and to access valuable resources, you can follow us on our social media pages.</p>
            <div className="social-icons">
              <a href="#" className="social-icon">f</a>
              <a href="#" className="social-icon">t</a>
              <a href="#" className="social-icon">in</a>
              <a href="#" className="social-icon">yt</a>
            </div>
          </div>
          <div className="footer-col">
            <h3>Quick Menu</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/referral">Referral Page</Link></li>
              <li><Link to="/locations">Location Page</Link></li>
              <li><Link to="/employee-resources">Employee Resources</Link></li>
              <li><Link to="/client-resources">Client Resources</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Contact</h3>
            <ul className="footer-contact">
              <li><i>📞</i> 757-262-7615</li>
              <li><i>📍</i> 2 Eaton St. Suite 506 Hampton, VA 23669</li>
            </ul>
            <div className="map">
              <iframe src="https://maps.google.com/maps?q=2%20Eaton%20St.%20Suite%20506%20Hampton%2C%20VA%2023669&t=m&z=11&output=embed&iwloc=near" width="100%" height="200" style={{ border: 0 }} allowFullScreen={true} loading="lazy" title="Google Maps"></iframe>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} White House Health Systems. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
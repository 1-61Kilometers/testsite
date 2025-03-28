import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  return (
    <header>
      <div className="container header-container">
        <div className="logo">
          <Link to="/">
            <img src="/WHHS_Logo.png" alt="White House Health Systems Logo" style={{ transform: 'scale(1.5)' }} />
          </Link>
        </div>
        <nav className={isMobileMenuOpen ? 'open' : ''}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li>
              <Link to="#">Services</Link>
              <ul className="dropdown-menu">
                <li className="service-category">Behavioral and Mental Health Services
                  <ul className="dropdown-submenu">
                    <li><Link to="/services/mobile-crisis-response">Mobile Crisis Response</Link></li>
                    <li><Link to="/services/community-stabilization">Community Stabilization</Link></li>
                    <li><Link to="/services/residential-crisis-stabilization-unit">Residential Crisis Stabilization Unit</Link></li>
                    <li><Link to="/services/intensive-in-home">Intensive In-Home</Link></li>
                    <li><Link to="/services/mental-health-skill-building">Mental Health Skill Building</Link></li>
                    <li><Link to="/services/substance-abuse-intensive-outpatient-treatment">Substance Abuse Intensive Outpatient Treat (SA IOPT)</Link></li>
                    <li><Link to="/services/assertive-community-treatment">Assertive Community Treatment</Link></li>
                    <li><Link to="/services/medication-management">Medication Management</Link></li>
                  </ul>
                </li>
                <li className="service-category">Outpatient Therapy Services
                  <ul className="dropdown-submenu">
                    <li><Link to="/services/parent-support-groups">Parent Support Groups</Link></li>
                    <li><Link to="/services/anger-management">Anger Management</Link></li>
                    <li><Link to="/services/icounsel">iCounsel</Link></li>
                  </ul>
                </li>
                <li className="service-category">Home Health Services
                  <ul className="dropdown-submenu">
                    <li><Link to="/services/absolute-home-health-care">Absolute Home Health Care</Link></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
        <div className="header-buttons">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfsU_cbfvQ0QthpZJvlZQSFiMF1p3xariS7ChgmDwlrQfnkug/viewform" className="btn" target="_blank" rel="noopener noreferrer">Submit Referral</a>
          <Link to="/schedule" className="btn">Schedule Now</Link>
        </div>
        <div 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
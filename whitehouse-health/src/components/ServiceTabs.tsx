import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ServiceTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('behavioral');

  const showServiceCategory = (category: string) => {
    setActiveTab(category);
  };

  return (
    <div className="service-tabs-container">
      <div className="service-tabs">
        <div 
          className={`service-tab ${activeTab === 'behavioral' ? 'active' : ''}`} 
          onClick={() => showServiceCategory('behavioral')}
        >
          Behavioral & Mental Health
        </div>
        <div 
          className={`service-tab ${activeTab === 'outpatient' ? 'active' : ''}`} 
          onClick={() => showServiceCategory('outpatient')}
        >
          Outpatient Therapy
        </div>
        <div 
          className={`service-tab ${activeTab === 'homehealth' ? 'active' : ''}`} 
          onClick={() => showServiceCategory('homehealth')}
        >
          Home Health
        </div>
      </div>
      
      {/* Behavioral & Mental Health Services */}
      <div id="behavioral" className={`service-content ${activeTab === 'behavioral' ? 'active' : ''}`}>
        <div className="services-grid">
          <Link to="/services/intensive-in-home">
            <div className="service-card">
              <h3>Intensive In-Home</h3>
            </div>
          </Link>
          <Link to="/services/mental-health-skill-building">
            <div className="service-card">
              <h3>Mental Health Skill Building</h3>
            </div>
          </Link>
          <Link to="/services/community-stabilization">
            <div className="service-card">
              <h3>Community Stabilization</h3>
            </div>
          </Link>
          <Link to="/services/mobile-crisis-response">
            <div className="service-card">
              <h3>Mobile Crisis Response</h3>
            </div>
          </Link>
          <Link to="/services/medication-management">
            <div className="service-card">
              <h3>Medication Management</h3>
            </div>
          </Link>
          <Link to="/services/parent-support-groups">
            <div className="service-card">
              <h3>Parent Support Groups</h3>
            </div>
          </Link>
        </div>
      </div>
      
      {/* Outpatient Therapy Services */}
      <div id="outpatient" className={`service-content ${activeTab === 'outpatient' ? 'active' : ''}`}>
        <div className="services-grid">
          <Link to="/services/outpatient-therapy">
            <div className="service-card">
              <h3>Outpatient Therapy</h3>
            </div>
          </Link>
        </div>
      </div>
      
      {/* Home Health Services */}
      <div id="homehealth" className={`service-content ${activeTab === 'homehealth' ? 'active' : ''}`}>
        <div className="services-grid">
          <Link to="/services/absolute-home-health-care">
            <div className="service-card">
              <h3>Absolute Home Health Care</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceTabs;
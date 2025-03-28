import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { app, analytics } from './firebase';
import { logEvent } from 'firebase/analytics';

// Import styles
import './styles/global.css';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';

// Import pages
import Home from './pages/Home';
import IntensiveInHome from './pages/services/IntensiveInHome';
import OutpatientTherapy from './pages/services/OutpatientTherapy';
import MentalHealthSkillBuilding from './pages/services/MentalHealthSkillBuilding';
import CommunityStabilization from './pages/services/CommunityStabilization';
import MobileCrisisResponse from './pages/services/MobileCrisisResponse';

// Placeholder for future service pages
const ServicePlaceholder: React.FC<{ serviceName: string }> = ({ serviceName }) => (
  <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
    <h1>{serviceName} Service</h1>
    <p>This service page is under construction. Please check back soon.</p>
  </div>
);

function App() {
  useEffect(() => {
    // Log page view if analytics is available
    if (analytics) {
      try {
        logEvent(analytics, 'page_view');
      } catch (error) {
        // Silent fail in development environment
      }
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Service Routes */}
            <Route path="/services/intensive-in-home" element={<IntensiveInHome />} />
            <Route path="/services/outpatient-therapy" element={<OutpatientTherapy />} />
            <Route path="/services/mental-health-skill-building" element={<MentalHealthSkillBuilding />} />
            <Route path="/services/community-stabilization" element={<CommunityStabilization />} />
            <Route path="/services/mobile-crisis-response" element={<MobileCrisisResponse />} />
            
            {/* Placeholder Routes */}
            <Route path="/services/medication-management" element={<ServicePlaceholder serviceName="Medication Management" />} />
            <Route path="/services/parent-support-groups" element={<ServicePlaceholder serviceName="Parent Support Groups" />} />
            <Route path="/services/absolute-home-health-care" element={<ServicePlaceholder serviceName="Absolute Home Health Care" />} />
            
            {/* Placeholder for other main pages */}
            <Route path="/about" element={<ServicePlaceholder serviceName="About Us" />} />
            <Route path="/careers" element={<ServicePlaceholder serviceName="Careers" />} />
            <Route path="/contact" element={<ServicePlaceholder serviceName="Contact Us" />} />
            <Route path="/schedule" element={<ServicePlaceholder serviceName="Schedule Appointment" />} />
            
            {/* 404 Route */}
            <Route path="*" element={
              <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
                <h1>Page Not Found</h1>
                <p>The page you are looking for does not exist.</p>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
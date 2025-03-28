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
import About from './pages/About';
import IntensiveInHome from './pages/services/IntensiveInHome';
import OutpatientTherapy from './pages/services/OutpatientTherapy';
import MentalHealthSkillBuilding from './pages/services/MentalHealthSkillBuilding';
import CommunityStabilization from './pages/services/CommunityStabilization';
import MobileCrisisResponse from './pages/services/MobileCrisisResponse';
import ResidentialCrisisStabilizationUnit from './pages/services/ResidentialCrisisStabilizationUnit';
import SubstanceAbuseIntensiveOutpatientTreatment from './pages/services/SubstanceAbuseIntensiveOutpatientTreatment';
import AssertiveCommunityTreatment from './pages/services/AssertiveCommunityTreatment';
import AngerManagement from './pages/services/AngerManagement';
import ICounsel from './pages/services/ICounsel';
import MedicationManagement from './pages/services/MedicationManagement';
import ParentSupportGroups from './pages/services/ParentSupportGroups';
import AbsoluteHomeHealthCare from './pages/services/AbsoluteHomeHealthCare';

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
            <Route path="/about" element={<About />} />
            
            {/* Service Routes */}
            <Route path="/services/intensive-in-home" element={<IntensiveInHome />} />
            <Route path="/services/outpatient-therapy" element={<OutpatientTherapy />} />
            <Route path="/services/mental-health-skill-building" element={<MentalHealthSkillBuilding />} />
            <Route path="/services/community-stabilization" element={<CommunityStabilization />} />
            <Route path="/services/mobile-crisis-response" element={<MobileCrisisResponse />} />
            <Route path="/services/residential-crisis-stabilization-unit" element={<ResidentialCrisisStabilizationUnit />} />
            <Route path="/services/substance-abuse-intensive-outpatient-treatment" element={<SubstanceAbuseIntensiveOutpatientTreatment />} />
            <Route path="/services/assertive-community-treatment" element={<AssertiveCommunityTreatment />} />
            <Route path="/services/anger-management" element={<AngerManagement />} />
            <Route path="/services/icounsel" element={<ICounsel />} />
            <Route path="/services/medication-management" element={<MedicationManagement />} />
            <Route path="/services/parent-support-groups" element={<ParentSupportGroups />} />
            <Route path="/services/absolute-home-health-care" element={<AbsoluteHomeHealthCare />} />
            
            {/* Placeholder for other main pages */}
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
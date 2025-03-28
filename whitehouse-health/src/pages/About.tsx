import React from 'react';

const About: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content-wrapper">
            <div className="hero-text">
              <h1>About Us</h1>
              <p>Learn more about White House Health Systems and our mission</p>
            </div>
            <div className="hero-image">
              <img src={`${process.env.PUBLIC_URL}/background.webp`} alt="White House Health Systems" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="about">
        <div className="container">
          <h2>Our Mission</h2>
          <div className="about-content">
            <p>At White House Health Systems, our mission is to provide comprehensive, compassionate, and accessible mental health services to individuals and families in our community. We are committed to promoting mental wellness, reducing stigma, and empowering our clients to achieve their full potential.</p>
          </div>
        </div>
      </section>
      
      {/* Vision Section */}
      <section className="info-section">
        <div className="container">
          <div className="info-container">
            <div className="info-text" style={{ color: 'white' }}>
              <h2>Our Vision</h2>
              <p>We envision a community where mental health is prioritized, stigma is eliminated, and everyone has access to high-quality mental health care. We strive to be a leader in the field of mental health services, setting the standard for excellence, innovation, and compassionate care.</p>
            </div>
            <div className="info-image">
              <img src={`${process.env.PUBLIC_URL}/images/vision.png`} alt="Our Vision" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="info-section alternate">
        <div className="container">
          <div className="info-container">
            <div className="info-image">
              <img src={`${process.env.PUBLIC_URL}/images/values.png`} alt="Our Values" />
            </div>
            <div className="info-text">
              <h2>Our Core Values</h2>
              <p>At White House Health Systems, our work is guided by a set of core values that inform everything we do. We believe in treating every individual with dignity and respect, providing evidence-based and person-centered care, promoting collaboration and teamwork, maintaining the highest standards of integrity and professionalism, and fostering innovation and continuous improvement in our services.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* History Section */}
      <section className="about">
        <div className="container">
          <h2>Our History</h2>
          <div className="about-content">
            <p>White House Health Systems was founded with a vision to transform mental health care delivery in our community. Since our inception, we have been dedicated to providing exceptional mental health services that address the unique needs of each individual. Our journey has been marked by a commitment to excellence, innovation, and a deep understanding of the complex factors that influence mental health and well-being.</p>
            
            <p>As we've grown, we've expanded our services to meet the evolving needs of our community, always maintaining our focus on providing compassionate, evidence-based care. Today, we are proud to offer a comprehensive range of mental health services, from crisis intervention to ongoing support, all delivered by a team of highly skilled and dedicated professionals.</p>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="why-choose-us">
        <div className="container">
          <h2>Our Team</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">👨‍⚕️</div>
              <h3>Licensed Clinicians</h3>
              <p>Our team of licensed mental health clinicians brings a wealth of expertise and specialized training to their work. With backgrounds in clinical psychology, social work, counseling, and psychiatry, they are equipped to address a wide range of mental health concerns.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👩‍⚕️</div>
              <h3>Mental Health Specialists</h3>
              <p>Our mental health specialists provide essential support services, working directly with clients to build skills, provide crisis intervention, and facilitate access to community resources. Their dedication and compassion make a significant difference in the lives of those we serve.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Support Staff</h3>
              <p>Behind the scenes, our administrative and support staff ensure that operations run smoothly, allowing our clinical team to focus on providing the best possible care. From reception to billing, they are committed to creating a welcoming and efficient environment.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Community Involvement Section */}
      <section className="cta">
        <div className="container">
          <h2>Community Involvement</h2>
          <p>At White House Health Systems, we believe in the importance of being active participants in our community. We regularly engage in community outreach efforts, educational events, and partnerships with local organizations to promote mental health awareness and reduce stigma.</p>
          <p>From hosting workshops on stress management to providing training for community members on recognizing and responding to mental health crises, we are committed to making a positive impact beyond the walls of our facilities.</p>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="about">
        <div className="container">
          <h2>Connect With Us</h2>
          <div className="about-content">
            <p>We welcome the opportunity to connect with you and provide more information about our services. Whether you're seeking mental health support for yourself or a loved one, or you're interested in learning more about our organization, we're here to help.</p>
            <p>For more information, please contact us at 757-262-7615 or visit our main office at 2 Eaton St. Suite 506 Hampton, VA 23669.</p>
            <div className="cta-buttons" style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
              <a href="/contact" className="btn">Contact Us</a>
              <a href="/services" className="btn">Our Services</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
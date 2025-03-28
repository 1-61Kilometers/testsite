import React from 'react';
import Accordion from '../components/Accordion';
import ServiceTabs from '../components/ServiceTabs';

const Home: React.FC = () => {
  const faqItems = [
    {
      title: 'How do I know if White House Health Systems is the right fit for me?',
      content: 'Choosing a mental health provider is an important decision, and we understand the importance of finding the right fit. We encourage you to explore our website, read about our services and team members, and reach out to us with any questions or concerns you may have. Additionally, scheduling a consultation or initial appointment can provide you with an opportunity to discuss your needs and goals with one of our clinicians and determine if our approach aligns with your preferences and expectations.'
    },
    {
      title: 'What types of mental health conditions do you treat?',
      content: 'We provide comprehensive mental health services to address a wide range of conditions, including but not limited to anxiety disorders, depression, bipolar disorder, trauma-related disorders including PTSD, schizophrenia and schizoaffective disorder, ADHD, OCD, ODD, and adjustment disorders. Our experienced clinicians are skilled in conducting thorough assessments and developing individualized treatment plans tailored to your unique needs and specific circumstances.'
    },
    {
      title: 'How long does services typically last?',
      content: 'The duration of therapy varies depending on several factors, including the nature and severity of the presenting concerns, your goals and progress in therapy. Some individuals may benefit from short-term, solution-focused therapy to address specific issues, while others may require longer-term support for more complex or chronic conditions. Our therapists work collaboratively with you to establish treatment goals and regularly evaluate progress to ensure that therapy remains effective and beneficial.'
    },
    {
      title: 'Is therapy confidential?',
      content: 'Yes, confidentiality is a fundamental aspect of our therapeutic process. We adhere to strict ethical and legal guidelines to protect the privacy and confidentiality of your information. Information shared during therapy sessions is kept confidential unless mandated by law or if there is a risk of harm to you or others. Our clinicians prioritize creating a safe and trusting environment where you feel comfortable in expressing yourself openly without fear of judgment or breach of confidentiality.'
    },
    {
      title: 'Can I involve my family members or loved ones in therapy?',
      content: 'Yes, we encourage family involvement and support in the therapeutic process, particularly for individuals receiving treatment for family-related issues or seeking to improve family dynamics. With your consent, our therapists can involve family members or loved ones in therapy sessions to enhance communication, resolve conflicts, and strengthen relationships. Family therapy can be a valuable tool in addressing shared concerns and promoting healing and growth within the family unit.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content-wrapper">
            <div className="hero-text">
              <h1>WHITE HOUSE HEALTH SYSTEMS</h1>
              <p>Raising The Standard For Excellence In Mental Health Care</p>
            </div>
            <div className="hero-image">
              <img src="/background.webp" alt="White House Health Systems" />
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="about">
        <div className="container">
          <h2>About Us</h2>
          <div className="about-content">
            <p>At White House Health Systems, we pride ourselves on being a trusted provider of comprehensive, compassionate, and caring mental health services. Headquartered in Hampton, VA, our team is comprised of highly skilled professionals who are passionate about helping individuals achieve optimal mental health and well-being. With a focus on personalized care and evidence-based practices, we strive to empower our clients to overcome challenges and lead productive, fulfilling lives. Whether you're dealing with anxiety, depression, trauma, or other mental health challenges, you can count on us to deliver compassionate support, care, and effective treatment. Choose White House Health Systems for proven effective treatment options and lasting solutions.</p>
          </div>
        </div>
      </section>
      
      {/* Info Section */}
      <section className="info-section">
        <div className="container">
          <div className="info-container">
            <div className="info-text">
              <p>Let us be your premier destination for mental health services. At White House Health Systems, we understand the importance of prioritizing mental health and well-being in today's fast-paced world. Our dedicated team of professionals is committed to providing comprehensive compassionate care tailored to meet the unique needs of individuals and families. Whether you're seeking therapy, counseling, or psychiatric services, you can trust us to provide top-quality care in a supportive and nurturing environment. Take the first step towards a healthier mind and brighter future with White House Health Systems.</p>
            </div>
            <div className="info-image">
              <img src="/images/patty.png" alt="Mental Health Care" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2>Our Services</h2>
          <ServiceTabs />
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <h2>Why Choose White House Health Systems?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📋</div>
              <h3>Comprehensive Care</h3>
              <p>At White House Health Systems, we offer a wide range of comprehensive healthcare services to meet all your needs under one roof. From mobile crisis intervention, comprehensive initial assessments, diagnostics, stabilization, short-term, and long-term comprehensive compassionate care, our experienced team is dedicated to keeping you mentally healthy and happy.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👤</div>
              <h3>Person Centered Approach</h3>
              <p>We believe in putting our clients at the center of everything we do. Our mental healthcare professionals take the time to listen to your concerns, answer your questions, and tailor personalized mental health treatment plans to address your unique needs and preferences.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Experienced Team</h3>
              <p>Our team consists of highly skilled and licensed clinicians, professional counselors, therapists, qualified mental health professionals and dedicated support staff who are committed to providing exceptional care with expertise and empathy. With years of experience and advanced training, you can trust that you're in good hands at White House Health Systems.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏢</div>
              <h3>State of the Art Facilities</h3>
              <p>Our modern facilities are equipped with the latest technology and equipment to ensure that you receive the highest standard of care. From our modern offices, adequate space for in-house, individual and group counseling sessions, to a myriad of treatment options, we have everything needed to deliver effective mental healthcare solutions.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📍</div>
              <h3>Convenient Location</h3>
              <p>White House Health Systems headquarters is conveniently located in Hampton, VA, and is easily accessible from all parts of the city, state, and country. Whether you're coming in for a routine appointment or seeking urgent attention or crisis intervention, our central location makes it easy for you to access the care we provide when you need it.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3>Commitment to Excellence</h3>
              <p>At White House Health Systems, we are committed to excellence in everything we do. We strive to exceed your expectations and deliver superior mental healthcare services that prioritize your well-being and satisfaction. Your mental health and well-being is our top priority, and we go above and beyond to ensure that you receive the best possible compassionate care.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="process">
        <div className="container">
          <h2>Our Process</h2>
          <div className="process-content">
            <h3>Initial Consultation</h3>
            <p>Your journey with us begins with an initial consultation/assessment where you will meet with one of our clinicians. During this visit, we'll take the time to understand your mental health history, concerns, and goals.</p>
            
            <h3>Individual Service Plan</h3>
            <p>Based on the information gathered during your consultation, our team will develop a individualized service plan tailored to your specific needs and preferences. We believe in a collaborative approach, and your input is valued every step of the way.</p>
            
            <h3>Treatment and Follow-Up</h3>
            <p>Once a mental health diagnosis is determined, we'll proceed with the recommended service plan, which may include medication, therapy, lifestyle modifications, or other interventions. Throughout your treatment journey, we'll provide ongoing support and monitoring to ensure optimal outcomes.</p>
            
            <h3>Coordination of Care</h3>
            <p>At White House Health Systems, we understand the importance of coordination among all healthcare providers. If your treatment requires input from a medical doctor, specialists or other healthcare professionals, we'll facilitate seamless communication and collaboration to ensure continuity of care.</p>
            
            <h3>Follow-Up and Monitoring</h3>
            <p>Your journey with us doesn't end after treatment. We'll schedule follow-up appointments to monitor your progress, address any concerns, and make adjustments to your service plan as needed. Your mental health and satisfaction are our top priorities, and we're committed to supporting you every step of the way.</p>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <Accordion items={faqItems} />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Seek White House Health Systems For Assistance</h2>
          <p>At White House Health Systems, we are dedicated to providing comprehensive and compassionate mental health care. Our team of experienced professionals is committed to promoting mental wellness and assisting individuals in overcoming challenges. Whether you're seeking therapy, counseling, or psychiatric care, we prioritize your well-being and strive to create a supportive environment where you can thrive.</p>
          <p>For more information about our services or to schedule an appointment, please contact us at 757-262-2040 or visit our main office at 2 Eaton St. Suite 506 Hampton, VA 23669. We look forward to partnering with you on your journey to mental health and well-being.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
import React from 'react';
import ServicePage from '../../components/ServicePage';

const ResidentialCrisisStabilizationUnit: React.FC = () => {
  const infoSections = [
    {
      title: 'Comprehensive Care in a Supportive Environment',
      content: 'Our Residential Crisis Stabilization Unit provides short-term, intensive, facility-based psychiatric stabilization services for individuals experiencing an acute mental health crisis. The program provides a safe, structured environment with 24-hour supervision and monitoring by a multidisciplinary team of mental health professionals. Our goal is to stabilize the crisis, prevent hospitalization when possible, and develop a comprehensive plan for ongoing care and support.',
      image: 'https://via.placeholder.com/500x400',
      imageAlt: 'Residential Crisis Stabilization Unit'
    },
    {
      title: 'Specialized Services for Crisis Stabilization',
      content: 'At our Residential Crisis Stabilization Unit, we offer a range of specialized services designed to address the immediate needs of individuals in crisis. These services include psychiatric assessment and medication management, individual and group therapy, skills training, and coordination with community resources. Our team works collaboratively with each person to develop a personalized care plan that addresses their unique needs and builds on their strengths.',
      image: 'https://via.placeholder.com/500x400',
      imageAlt: 'Crisis Stabilization Services',
      isAlternate: true
    },
    {
      title: 'Transition Planning and Continuity of Care',
      content: 'Effective transition planning is a key component of our Residential Crisis Stabilization program. From the moment of admission, our team begins planning for a successful transition back to the community. We work closely with each individual, their support system, and community providers to ensure continuity of care and access to appropriate resources. Our goal is to provide a seamless transition that supports ongoing stability and recovery.',
      image: 'https://via.placeholder.com/500x400',
      imageAlt: 'Transition Planning'
    }
  ];

  const faqItems = [
    {
      title: 'What is a Residential Crisis Stabilization Unit?',
      content: 'A Residential Crisis Stabilization Unit is a short-term, intensive, facility-based program designed to provide rapid stabilization for individuals experiencing an acute mental health crisis. It offers a less restrictive alternative to psychiatric hospitalization, providing 24-hour supervision, psychiatric assessment, medication management, and therapeutic interventions in a safe, supportive environment.'
    },
    {
      title: 'How long does the typical stay last?',
      content: 'The length of stay in our Residential Crisis Stabilization Unit typically ranges from 3 to 7 days, depending on the individual\'s needs and response to treatment. Our goal is to provide the least restrictive level of care for the shortest duration necessary to stabilize the crisis and develop an appropriate discharge plan.'
    },
    {
      title: 'What types of crises do you address?',
      content: 'Our Residential Crisis Stabilization Unit is equipped to address a wide range of mental health crises, including acute psychiatric symptoms, suicidal thoughts or behaviors, severe anxiety or panic attacks, acute psychosis, and significant emotional distress that impairs functioning. We provide comprehensive assessment and tailored interventions to address each person\'s specific situation.'
    },
    {
      title: 'Is insurance accepted for crisis stabilization services?',
      content: 'Yes, we accept most major insurance plans, including Medicare, Medicaid, and private insurance. Our administrative team works diligently to verify benefits and obtain necessary authorizations. We understand that navigating insurance during a crisis can be overwhelming, so we handle much of this process for our clients.'
    },
    {
      title: 'What happens after discharge from the Residential Crisis Stabilization Unit?',
      content: 'Prior to discharge, our team works closely with each individual to develop a comprehensive aftercare plan. This typically includes referrals to appropriate levels of ongoing care, such as outpatient therapy, medication management, or community support services. We also provide education about crisis prevention, coping strategies, and community resources to support continued stability and recovery.'
    }
  ];

  return (
    <ServicePage
      title="Residential Crisis Stabilization Unit"
      subtitle="Short-term, intensive stabilization for acute mental health crises"
      heroImage="https://via.placeholder.com/600x400"
      aboutTitle="Immediate Support in a Safe Environment"
      aboutContent="Our Residential Crisis Stabilization Unit at White House Health Systems provides immediate, intensive support for individuals experiencing acute mental health crises. In a safe, structured, and therapeutic environment, our multidisciplinary team offers comprehensive assessment, stabilization, and treatment planning. We are committed to providing compassionate care that addresses immediate concerns while laying the foundation for ongoing recovery and well-being."
      infoSections={infoSections}
      faqItems={faqItems}
      ctaTitle="Access Residential Crisis Stabilization Services"
      ctaContent={[
        "At White House Health Systems, we understand that mental health crises require immediate, expert response. Our Residential Crisis Stabilization Unit is available 24/7 to provide the support and care needed during these challenging times.",
        "For more information about our Residential Crisis Stabilization Unit or to inquire about admission, please contact us at 757-262-7615 or visit our main office at 2 Eaton St. Suite 506 Hampton, VA 23669. In case of emergency, please call 911 or go to your nearest emergency room."
      ]}
    />
  );
};

export default ResidentialCrisisStabilizationUnit;
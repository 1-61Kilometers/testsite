import React from 'react';
import ServicePage from '../../components/ServicePage';

const MobileCrisisResponse: React.FC = () => {
  const infoSections = [
    {
      title: 'Understanding Mobile Crisis Response Services',
      content: 'Our Mobile Crisis Response team is dedicated to providing immediate support and stabilization to those who may be experiencing mental health crises or emotional distress. Whether it\'s a sudden escalation in symptoms, a threatening situation, or a call for help from concerned family members, our trained professionals are equipped to respond swiftly. We understand the importance of addressing crises promptly to prevent further escalation and ensure the safety and well-being of those involved. With our Mobile Crisis Response services, you can trust that help is just a phone call away, 24/7.',
      image: 'https://via.placeholder.com/500x400',
      imageAlt: 'Crisis Response Team'
    },
    {
      title: 'The Importance of Timely Intervention in Crisis Situations',
      content: 'In times of crisis, every moment counts. At White House Health Systems, we emphasize the critical importance of timely intervention in crisis situations. Whether it\'s a mental health emergency, a behavioral crisis, or a situation posing imminent risk or danger, our Mobile Crisis Response unit is committed to delivering rapid assistance. We understand that swift action can make a significant difference in stabilizing the situation and providing the necessary support to someone in distress. By ensuring quick response times and efficient coordination, we aim to minimize the impact of crises and facilitate a pathway to recovery for those in need.',
      image: 'https://via.placeholder.com/500x400',
      imageAlt: 'Crisis Intervention',
      isAlternate: true
    },
    {
      title: 'Empowering Communities Through Mobile Crisis Response Initiatives',
      content: 'At White House Health Systems, we recognize that crisis response is not just about individual interventions but also about building resilient communities. Our Mobile Crisis Response initiatives are designed to empower communities by offering timely support and intervention services. By increasing awareness, reducing stigma, and providing access to resources, we aim to create a supportive environment where individuals feel comfortable seeking help when they need it most. Through community outreach, education, and engagement, we strive to foster a culture of compassion, understanding, and support for mental health and well-being.',
      image: 'https://via.placeholder.com/500x400',
      imageAlt: 'Community Support'
    }
  ];

  const faqItems = [
    {
      title: 'What constitutes a mental health crisis?',
      content: 'A mental health crisis refers to any situation where an individual is experiencing severe distress or difficulty coping, potentially posing a risk to themselves or others. This could include suicidal thoughts or behaviors, severe anxiety or panic attacks, psychotic episodes, or severe emotional distress following a traumatic event. If you or someone you know is experiencing any of these symptoms, our Mobile Crisis Response team can provide immediate assistance and support.'
    },
    {
      title: 'How quickly can I expect a response when I call the crisis line?',
      content: 'Our Mobile Crisis Response team prioritizes rapid response to all crisis calls. Upon receiving a call to our 24/7 crisis line, a trained crisis counselor will immediately assess the situation and determine the appropriate level of response. In many cases, our mobile team can be dispatched to your location within 30-60 minutes, depending on factors such as current call volume and your geographic location. Rest assured, we are committed to providing the fastest response possible to ensure your safety and well-being.'
    },
    {
      title: 'Is there a cost for Mobile Crisis Response services?',
      content: 'Our Mobile Crisis Response services are available to all individuals in our service area, regardless of their ability to pay. While insurance may cover some or all of the cost, we will never delay or deny services based on insurance status or financial concerns. Our primary focus is on providing immediate support and stabilization during a crisis, and we can discuss payment options and potential financial assistance after the immediate crisis has been addressed.'
    },
    {
      title: 'What happens after a crisis intervention?',
      content: 'Following a crisis intervention, our team will work with you to develop a comprehensive safety plan and connect you with appropriate follow-up services. This may include referrals to outpatient therapy, medication management, or other community resources. Our goal is to ensure continuity of care and provide the ongoing support needed for recovery and stability. We may also schedule a follow-up call or visit to check on your progress and address any additional needs that may arise.'
    },
    {
      title: 'Can I call the Mobile Crisis Response team on behalf of someone else?',
      content: 'Yes, you can absolutely call our crisis line if you are concerned about a family member, friend, or acquaintance who may be experiencing a mental health crisis. Our trained counselors can help assess the situation, provide guidance on how to support the person in crisis, and dispatch a mobile team if necessary. When calling on behalf of someone else, it\'s helpful to provide as much information as possible about the person\'s current state, any history of mental health concerns, and any potential safety risks.'
    }
  ];

  return (
    <ServicePage
      title="Mobile Crisis Response"
      subtitle="Immediate support when and where you need it most"
      heroImage="https://via.placeholder.com/600x400"
      aboutTitle="Your Partner in Crisis Intervention and Stabilization"
      aboutContent="White House Health Systems understands the critical importance of timely and effective crisis intervention. Our mobile crisis response team is dedicated to providing compassionate and professional assistance to you and your family facing mental health crises. With our rapid response and expert care, we aim to support and guide you through challenging times, promoting stability and well-being in our community. When a crisis strikes, you can count on White House Health Systems to be there for you."
      infoSections={infoSections}
      faqItems={faqItems}
      ctaTitle="Access Mobile Crisis Response Services 24/7"
      ctaContent={[
        "At White House Health Systems, we understand that mental health crises can occur at any time and in any place. Our Mobile Crisis Response team is available 24/7 to provide immediate support, intervention, and stabilization during times of crisis.",
        "For mobile crisis response services, please call our 24/7 crisis line at 757-759-6059. For more information about our Mobile Crisis Response program, contact us at 757-262-7615 or visit our main office at 2 Eaton St. Suite 506 Hampton, VA 23669. We look forward to partnering with you on your journey to mental health and well-being."
      ]}
    />
  );
};

export default MobileCrisisResponse;
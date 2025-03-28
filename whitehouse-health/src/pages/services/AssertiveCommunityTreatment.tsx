import React from 'react';
import ServicePage from '../../components/ServicePage';

const AssertiveCommunityTreatment: React.FC = () => {
  const infoSections = [
    {
      title: 'Comprehensive Team-Based Care',
      content: 'Assertive Community Treatment (ACT) is a comprehensive, team-based approach to mental health care. Our multidisciplinary team includes psychiatrists, nurses, social workers, substance abuse specialists, vocational specialists, and peer support specialists who work collaboratively to provide integrated services. This team approach ensures that all aspects of a person\'s needs are addressed, from medication management and therapy to practical support with housing, employment, and daily living skills.',
      image: 'https://via.placeholder.com/500x400',
      imageAlt: 'ACT Team Meeting'
    },
    {
      title: 'Services Delivered in the Community',
      content: 'Unlike traditional office-based mental health services, our ACT program delivers services directly in the community—where our clients live, work, and socialize. This approach eliminates barriers to accessing care and allows our team to observe and address challenges in real-life settings. Whether providing support at home, accompanying clients to appointments, or helping navigate community resources, our team meets clients where they are, both literally and figuratively.',
      image: 'https://via.placeholder.com/500x400',
      imageAlt: 'Community-Based Services',
      isAlternate: true
    },
    {
      title: 'Continuous Support and Crisis Intervention',
      content: 'Our ACT program offers continuous support, including 24/7 crisis response. This high level of availability means that clients can access support when they need it most, reducing hospitalizations and emergency room visits. Our team works proactively to identify potential issues before they escalate and provides timely intervention during crises. This consistent, responsive approach helps clients maintain stability and make progress toward their recovery goals.',
      image: 'https://via.placeholder.com/500x400',
      imageAlt: 'Crisis Intervention Support'
    }
  ];

  const faqItems = [
    {
      title: 'What is Assertive Community Treatment (ACT)?',
      content: 'Assertive Community Treatment is an evidence-based, recovery-oriented mental health service delivery model. It provides comprehensive, locally-based treatment to people with serious and persistent mental illnesses. Unlike traditional approaches, ACT services are delivered by a multidisciplinary team in the community rather than in an office or hospital. The ACT team provides these services 24 hours a day, 7 days a week, 365 days a year.'
    },
    {
      title: 'Who is eligible for Assertive Community Treatment?',
      content: 'ACT is specifically designed for individuals with serious mental illnesses that significantly impair their functioning in the community. Eligible individuals typically have diagnoses such as schizophrenia, schizoaffective disorder, bipolar disorder, or major depressive disorder with psychotic features. They may have co-occurring substance use disorders and often have histories of psychiatric hospitalizations, homelessness, involvement with the criminal justice system, or difficulty engaging with traditional services.'
    },
    {
      title: 'How often will I meet with the ACT team?',
      content: 'The frequency of contact with the ACT team varies based on individual needs and can change over time. Initially, contacts may be quite frequent—sometimes daily. As stability increases, the frequency may decrease, but the team maintains regular contact to provide support and monitor well-being. The ACT model is designed to provide the level of support needed when it is needed, adjusting intensity based on current circumstances.'
    },
    {
      title: 'What specific services does the ACT team provide?',
      content: 'The ACT team provides a comprehensive range of services, including psychiatric services and medication management; individual supportive therapy; mobile crisis intervention; substance abuse treatment; housing support; employment and rehabilitative services; family support and education; assistance with activities of daily living; and social skills training. All services are tailored to the individual\'s specific needs and recovery goals.'
    },
    {
      title: 'How is ACT different from other mental health services?',
      content: 'ACT differs from traditional mental health services in several key ways: it uses a team approach rather than individual case managers; services are provided directly in the community rather than in an office; the staff-to-client ratio is low (typically 1:10) allowing for intensive support; the team is available 24/7 for crisis response; and services are comprehensive, addressing all aspects of a person\'s life rather than just their mental health symptoms. This integrated, assertive approach has been shown to reduce hospitalizations and homelessness while improving quality of life for individuals with serious mental illness.'
    }
  ];

  return (
    <ServicePage
      title="Assertive Community Treatment"
      subtitle="Comprehensive mental health support delivered where you live, work, and thrive"
      heroImage="https://via.placeholder.com/600x400"
      aboutTitle="Recovery-Oriented Care in the Community"
      aboutContent="At White House Health Systems, our Assertive Community Treatment (ACT) program provides intensive, highly coordinated mental health services for individuals with serious mental illness. Delivered by a multidisciplinary team directly in the community, ACT services are available 24/7 to provide the support needed to live successfully in the community. Our person-centered approach focuses on recovery, emphasizing strengths, choice, and partnership in the treatment process. We are committed to helping each individual achieve their goals for mental health, physical health, housing, employment, and social connections."
      infoSections={infoSections}
      faqItems={faqItems}
      ctaTitle="Learn More About Our ACT Program"
      ctaContent={[
        "At White House Health Systems, we believe that everyone deserves the opportunity to live a meaningful and fulfilling life in the community. Our Assertive Community Treatment program provides the comprehensive support needed to make this possible for individuals with serious mental illness.",
        "For more information about our ACT program, including eligibility criteria and referral process, please contact us at 757-262-7615 or visit our main office at 2 Eaton St. Suite 506 Hampton, VA 23669. We look forward to partnering with you on your recovery journey."
      ]}
    />
  );
};

export default AssertiveCommunityTreatment;
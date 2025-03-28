import React from 'react';
import ServicePage from '../../components/ServicePage';

const SubstanceAbuseIntensiveOutpatientTreatment: React.FC = () => {
  const infoSections = [
    {
      title: 'Comprehensive Substance Abuse Treatment',
      content: 'Our Substance Abuse Intensive Outpatient Treatment (SA IOPT) program provides structured, evidence-based interventions for individuals struggling with substance use disorders. This comprehensive program combines individual therapy, group counseling, family education, and relapse prevention strategies to address the complex needs of clients seeking recovery. Our approach is holistic, addressing the physical, psychological, social, and spiritual aspects of addiction and recovery.',
      image: 'https://via.placeholder.com/500x400',
      imageAlt: 'Substance Abuse Treatment'
    },
    {
      title: 'Flexible Schedule for Real-Life Recovery',
      content: 'We understand that recovery must be integrated into daily life. Our intensive outpatient program offers flexible scheduling options, including day and evening sessions, allowing clients to maintain work, school, and family commitments while receiving the treatment they need. This approach supports recovery in the context of real-life situations, helping clients develop and practice coping strategies in their natural environment.',
      image: 'https://via.placeholder.com/500x400',
      imageAlt: 'Flexible Treatment Schedule',
      isAlternate: true
    },
    {
      title: 'Personalized Care and Ongoing Support',
      content: 'Each client in our SA IOPT program receives a personalized treatment plan based on a comprehensive assessment of their unique needs, challenges, and strengths. Our team of addiction specialists, counselors, and support staff work collaboratively to provide coordinated care throughout the recovery journey. As clients progress, we offer step-down services and connections to community resources to support long-term recovery and well-being.',
      image: 'https://via.placeholder.com/500x400',
      imageAlt: 'Personalized Recovery Support'
    }
  ];

  const faqItems = [
    {
      title: 'What is Substance Abuse Intensive Outpatient Treatment (SA IOPT)?',
      content: 'Substance Abuse Intensive Outpatient Treatment is a structured program that provides comprehensive services for individuals with substance use disorders while allowing them to continue living at home and maintaining their daily responsibilities. SA IOPT typically involves 9-12 hours of treatment per week, including individual therapy, group counseling, psychoeducational groups, family education, and relapse prevention planning.'
    },
    {
      title: 'How long does the SA IOPT program last?',
      content: 'The duration of our SA IOPT program typically ranges from 8 to 12 weeks, depending on individual needs and progress. However, treatment length can be adjusted based on clinical assessment, client response to treatment, and specific circumstances. Our goal is to provide the right level of care for the right amount of time to support successful recovery.'
    },
    {
      title: 'What types of substance use disorders do you treat?',
      content: 'Our program addresses a wide range of substance use disorders, including those related to alcohol, opioids, stimulants, cannabis, prescription medications, and polysubstance use. We utilize evidence-based approaches that can be tailored to address the specific challenges associated with different substances while focusing on the common principles of effective recovery.'
    },
    {
      title: 'Do you offer medication-assisted treatment as part of the program?',
      content: 'Yes, medication-assisted treatment (MAT) may be incorporated into our SA IOPT program when clinically appropriate. We take a comprehensive approach to MAT, combining FDA-approved medications with counseling and behavioral therapies to provide a "whole-patient" approach. Our medical providers work closely with the treatment team to ensure coordinated care.'
    },
    {
      title: 'How do you involve family in the treatment process?',
      content: 'We recognize that substance use disorders affect the entire family system, and family involvement can significantly enhance the recovery process. Our program includes family education sessions, family therapy when appropriate, and guidance for family members on how to support their loved one\'s recovery. We also provide information about family support groups and resources in the community.'
    }
  ];

  return (
    <ServicePage
      title="Substance Abuse Intensive Outpatient Treatment"
      subtitle="Comprehensive recovery support that fits your life"
      heroImage="https://via.placeholder.com/600x400"
      aboutTitle="Effective Treatment for Substance Use Disorders"
      aboutContent="At White House Health Systems, our Substance Abuse Intensive Outpatient Treatment (SA IOPT) program offers a structured yet flexible approach to addiction recovery. We provide comprehensive, evidence-based treatment that addresses the physical, psychological, social, and spiritual aspects of substance use disorders. Our program is designed to help individuals develop the skills, insights, and support networks needed for sustainable recovery while maintaining their daily responsibilities and connections to family, work, and community."
      infoSections={infoSections}
      faqItems={faqItems}
      ctaTitle="Begin Your Recovery Journey Today"
      ctaContent={[
        "At White House Health Systems, we understand that seeking help for substance use challenges takes courage. Our compassionate team is ready to support you with respect, understanding, and expertise as you take steps toward recovery.",
        "For more information about our Substance Abuse Intensive Outpatient Treatment program or to schedule an assessment, please contact us at 757-262-7615 or visit our main office at 2 Eaton St. Suite 506 Hampton, VA 23669. We look forward to supporting you on your journey to wellness."
      ]}
    />
  );
};

export default SubstanceAbuseIntensiveOutpatientTreatment;
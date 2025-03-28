import React from 'react';
import ServicePage from '../../components/ServicePage';

const OutpatientTherapy: React.FC = () => {
  const infoSections = [
    {
      title: 'Personalized Approaches to Mental Health and Wellness',
      content: 'At White House Health Systems, we recognize that each individual\'s journey is unique, which is why our outpatient therapy services are designed with personalization at their core. Our licensed therapists begin with a comprehensive assessment to understand your specific concerns, history, strengths, and goals. From there, we collaboratively develop a treatment plan tailored to your needs, drawing from various evidence-based therapeutic approaches such as Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), Acceptance and Commitment Therapy (ACT), mindfulness-based interventions, and more. This personalized approach ensures that you receive the most effective strategies and support for your particular situation, promoting meaningful progress and lasting change.',
      image: 'https://via.placeholder.com/500x400',
      imageAlt: 'Personalized therapy approach'
    },
    {
      title: 'Flexible Therapy Options for Modern Life',
      content: 'We understand that integrating therapy into your busy life can be challenging, which is why we offer flexible scheduling options to accommodate your needs. Our outpatient services include individual therapy, couple\'s counseling, family therapy, and group therapy, all available in both traditional in-person sessions and secure telehealth formats. With evening and weekend appointments available, we strive to make mental health care accessible regardless of your work schedule or other commitments. Our telehealth services provide the same quality care as in-person sessions while eliminating travel time and offering the comfort of participating from your own space. This flexibility ensures that you can prioritize your mental health without sacrificing other important aspects of your life.',
      image: 'https://via.placeholder.com/500x400',
      imageAlt: 'Flexible therapy options',
      isAlternate: true
    },
    {
      title: 'Comprehensive Support for a Wide Range of Concerns',
      content: 'Our outpatient therapy services address a diverse spectrum of mental health concerns and life challenges. Whether you\'re struggling with anxiety, depression, trauma, grief, relationship difficulties, life transitions, stress management, self-esteem issues, or other concerns, our experienced therapists provide compassionate, evidence-based care to help you navigate these challenges and develop healthier ways of coping. We also specialize in addressing the unique mental health needs of various populations, including children, adolescents, adults, older adults, couples, and families. By offering comprehensive support across the lifespan and for various concerns, we ensure that you receive appropriate, effective care regardless of your specific situation or stage of life.',
      image: 'https://via.placeholder.com/500x400',
      imageAlt: 'Comprehensive therapy support'
    }
  ];

  const faqItems = [
    {
      title: 'How do I know if therapy is right for me?',
      content: 'Therapy can benefit anyone who is experiencing emotional distress, facing challenging life circumstances, seeking personal growth, or wanting to improve their relationships. If you find yourself struggling with persistent negative feelings, difficulty managing stress, problematic patterns of behavior, or if your mental health is affecting your daily functioning, therapy may be helpful. You don\'t need to be in crisis to benefit from therapy - many people engage in therapy as a proactive approach to maintaining their mental wellness or navigating life transitions. Our initial consultation can help determine if our services align with your needs and goals.'
    },
    {
      title: 'What can I expect during my first therapy session?',
      content: 'Your first session, often called an intake or assessment, focuses on gathering information about your current concerns, relevant history, and treatment goals. Your therapist will explain the therapy process, discuss confidentiality and practice policies, and answer any questions you may have. This initial session helps establish rapport and allows your therapist to begin understanding your unique situation. Together, you\'ll discuss treatment options and develop a preliminary plan for addressing your concerns. The first session is also an opportunity for you to assess whether you feel comfortable with the therapist and their approach. Remember that building a therapeutic relationship takes time, and it\'s normal for the first session to feel different from subsequent sessions.'
    },
    {
      title: 'How long does therapy typically last?',
      content: 'The duration of therapy varies depending on several factors, including the nature and severity of the presenting concerns, the client\'s goals, and their progress in therapy. Some individuals may benefit from short-term, solution-focused therapy to address specific issues, while others may require longer-term support for more complex or chronic conditions. Our therapists work collaboratively with clients to establish treatment goals and regularly evaluate progress to ensure that therapy remains effective and beneficial. We aim to provide the appropriate level of care for your specific situation, whether that means a few sessions or ongoing support.'
    },
    {
      title: 'Is therapy confidential?',
      content: 'Yes, confidentiality is a fundamental aspect of our therapeutic process. We adhere to strict ethical and legal guidelines to protect the privacy and confidentiality of our clients\' information. Information shared during therapy sessions is kept confidential unless mandated by law or if there is a risk of harm to the client or others. Our clinicians prioritize creating a safe and trusting environment where clients feel comfortable expressing themselves openly without fear of judgment or breach of confidentiality. During your first session, your therapist will review the limits of confidentiality in detail and address any questions or concerns you may have.'
    },
    {
      title: 'How do I know if my insurance covers therapy?',
      content: 'Insurance coverage for mental health services varies depending on your specific plan. We recommend contacting your insurance provider directly to inquire about your mental health benefits, including coverage for outpatient therapy services, any requirements for pre-authorization, co-payments or coinsurance amounts, and whether you need a referral from a primary care physician. Our administrative team can assist you in understanding your benefits and navigating the insurance process. We accept many major insurance plans and also offer self-pay options and sliding scale fees for those without insurance coverage. We believe financial considerations should not be a barrier to receiving quality mental health care and will work with you to explore all available options.'
    }
  ];

  return (
    <ServicePage
      title="Outpatient Therapy"
      subtitle="Compassionate care that fits your schedule and needs"
      heroImage="https://via.placeholder.com/600x400"
      aboutTitle="Your Journey to Wellness Begins Here"
      aboutContent="At White House Health Systems, our outpatient therapy services provide a flexible and effective approach to mental health care. We offer a range of therapeutic modalities tailored to meet your unique needs and goals. Our licensed therapists create a safe, supportive environment where you can address challenges, develop coping strategies, and work toward positive change. Whether you're dealing with anxiety, depression, relationship issues, trauma, or other concerns, our outpatient therapy services can help you navigate life's difficulties and enhance your overall well-being. Begin your journey to wellness with White House Health Systems today."
      infoSections={infoSections}
      faqItems={faqItems}
      ctaTitle="Begin Your Healing Journey Today"
      ctaContent={[
        "At White House Health Systems, we are dedicated to providing compassionate, evidence-based outpatient therapy services to support your mental health and well-being. Our experienced team is ready to help you navigate life's challenges and develop the skills needed for lasting positive change.",
        "For more information about our Outpatient Therapy services or to schedule an initial consultation, please contact us at 757-262-7615 or visit our main office at 2 Eaton St. Suite 506 Hampton, VA 23669. We look forward to partnering with you on your journey to wellness."
      ]}
    />
  );
};

export default OutpatientTherapy;
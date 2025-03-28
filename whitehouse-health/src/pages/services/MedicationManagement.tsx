import React from 'react';
import ServicePage from '../../components/ServicePage';

const MedicationManagement: React.FC = () => {
  const infoSections = [
    {
      title: 'Comprehensive Psychiatric Evaluation',
      content: 'Our medication management services begin with a thorough psychiatric evaluation conducted by our experienced psychiatric providers. This comprehensive assessment examines your medical history, current symptoms, previous treatments, and personal goals to develop a complete understanding of your unique needs. We take the time to listen to your concerns and experiences, establishing a foundation for effective treatment planning that addresses both your immediate symptoms and long-term wellness goals.',
      image: 'https://via.placeholder.com/500x400',
      imageAlt: 'Psychiatric Evaluation'
    },
    {
      title: 'Personalized Medication Plans',
      content: 'We recognize that medication is not a one-size-fits-all solution. Our providers carefully design individualized medication plans based on your specific diagnosis, symptoms, health status, and treatment preferences. Throughout the process, we provide clear, thorough education about medication options, including potential benefits and side effects, empowering you to make informed decisions about your care. Your medication plan is continuously monitored and adjusted as needed to optimize effectiveness while minimizing side effects.',
      image: 'https://via.placeholder.com/500x400',
      imageAlt: 'Medication Consultation',
      isAlternate: true
    },
    {
      title: 'Collaborative Care Approach',
      content: 'Effective mental health treatment often involves a combination of medication and therapeutic approaches. Our medication management team works closely with therapists, primary care providers, and other healthcare professionals involved in your care to ensure a coordinated, comprehensive treatment approach. This integrated model ensures all aspects of your mental health and well-being are addressed through ongoing communication and collaboration among your care team members.',
      image: 'https://via.placeholder.com/500x400',
      imageAlt: 'Collaborative Care Team'
    }
  ];

  const faqItems = [
    {
      title: 'What conditions do you treat with medication management?',
      content: 'Our medication management services address a wide range of mental health conditions, including depression, anxiety disorders, bipolar disorder, attention-deficit/hyperactivity disorder (ADHD), post-traumatic stress disorder (PTSD), obsessive-compulsive disorder (OCD), schizophrenia, and other psychiatric conditions. Our providers are experienced in treating both common and complex mental health concerns, utilizing evidence-based medication approaches tailored to each individual\'s specific diagnosis and symptoms.'
    },
    {
      title: 'How often will I need to see my medication provider?',
      content: 'The frequency of medication management appointments depends on your specific situation, including your diagnosis, medication regimen, symptom stability, and treatment response. Initially, you may need more frequent visits (every 2-4 weeks) as your medication is being adjusted. Once your symptoms are stable and your medication regimen is established, visits typically transition to every 1-3 months for monitoring. Your provider will recommend a follow-up schedule based on your individual needs and adjust it as your treatment progresses.'
    },
    {
      title: 'Can I receive medication management services without therapy?',
      content: 'Yes, you can receive medication management services without participating in therapy, depending on your specific needs and preferences. However, research shows that combining medication with therapy often provides the most effective treatment for many mental health conditions. In some cases, your provider might recommend therapy as a complement to medication for optimal results. We respect your preferences and will work with you to determine the approach that best suits your situation and goals.'
    },
    {
      title: 'What should I do if I experience side effects from my medication?',
      content: 'If you experience concerning side effects from your medication, it\'s important to contact your provider as soon as possible rather than stopping your medication abruptly, which can sometimes cause discontinuation symptoms. Our providers are accessible to address medication concerns and can help determine whether the side effects are temporary or require an adjustment to your medication plan. During your appointment, your provider will discuss potential side effects and provide guidance on what symptoms warrant immediate attention.'
    },
    {
      title: 'Will I need to take medication indefinitely?',
      content: 'The duration of medication treatment varies widely depending on your diagnosis, symptom history, and individual response to treatment. Some conditions may require longer-term medication, while others might be effectively treated with a limited course of medication combined with therapy and lifestyle changes. Your provider will discuss treatment duration expectations based on your specific situation and current treatment guidelines. Throughout your care, your medication plan will be regularly reviewed and adjusted based on your progress and changing needs.'
    }
  ];

  return (
    <ServicePage
      title="Medication Management"
      subtitle="Expert psychiatric care and personalized medication treatment"
      heroImage="https://via.placeholder.com/600x400"
      aboutTitle="Comprehensive Psychiatric Services"
      aboutContent="Our Medication Management program at White House Health Systems provides expert psychiatric care for individuals seeking effective medication treatment for mental health conditions. Our team of psychiatric providers, including psychiatrists and psychiatric nurse practitioners, offers comprehensive evaluation, diagnosis, and ongoing medication management using evidence-based approaches. We focus on creating personalized treatment plans that not only address symptoms but also support your overall well-being and quality of life. Our goal is to help you achieve optimal mental health through carefully monitored medication therapy combined with supportive care."
      infoSections={infoSections}
      faqItems={faqItems}
      ctaTitle="Take the First Step Toward Mental Wellness"
      ctaContent={[
        "If you're struggling with mental health symptoms that may benefit from medication treatment, our expert team is here to help. We provide compassionate, comprehensive care tailored to your unique needs and goals.",
        "For more information about our medication management services or to schedule an evaluation, please contact us at 757-262-7615 or visit our main office at 2 Eaton St. Suite 506 Hampton, VA 23669. Most insurance plans are accepted, including Medicare and Medicaid."
      ]}
    />
  );
};

export default MedicationManagement;
import React from 'react';
import ServicePage from '../../components/ServicePage';

const ICounsel: React.FC = () => {
  const infoSections = [
    {
      title: 'Person-Centered Counseling Approach',
      content: 'At iCounsel, we believe that effective therapy begins with a strong therapeutic relationship built on trust, respect, and collaboration. Our counselors take the time to understand your unique experiences, challenges, and goals, adapting evidence-based approaches to meet your specific needs. Whether you\'re seeking support for anxiety, depression, relationship issues, or life transitions, we work together to develop a personalized treatment plan that respects your values, preferences, and strengths.',
      image: 'https://via.placeholder.com/500x400',
      imageAlt: 'Person-Centered Counseling'
    },
    {
      title: 'Flexible Counseling Options',
      content: 'We understand that life is busy, which is why iCounsel offers flexible scheduling options, including evening and weekend appointments. In addition to traditional in-person sessions, we provide secure telehealth services, allowing you to connect with your counselor from the comfort of your own space. This flexibility ensures that you can access support when and where you need it, making mental health care more accessible and integrated into your life.',
      image: 'https://via.placeholder.com/500x400',
      imageAlt: 'Flexible Counseling Options',
      isAlternate: true
    },
    {
      title: 'Comprehensive Mental Health Support',
      content: 'iCounsel provides comprehensive mental health services to address a wide range of concerns. Our counselors are trained in various therapeutic modalities, including Cognitive-Behavioral Therapy, Mindfulness-Based approaches, Solution-Focused Therapy, and Trauma-Informed Care. We offer individual counseling for adults, adolescents, and children, as well as couples counseling, family therapy, and specialized services such as grief counseling, LGBTQ+ affirming therapy, and support for life transitions.',
      image: 'https://via.placeholder.com/500x400',
      imageAlt: 'Comprehensive Mental Health Support'
    }
  ];

  const faqItems = [
    {
      title: 'How do I know if iCounsel is right for me?',
      content: 'iCounsel is designed to support individuals, couples, and families experiencing a wide range of mental health concerns and life challenges. Our services may be beneficial if you\'re struggling with anxiety, depression, stress, relationship difficulties, grief, trauma, life transitions, or simply seeking personal growth. During an initial consultation, we can discuss your specific needs and determine whether our services are a good fit or if another type of support might be more appropriate.'
    },
    {
      title: 'What can I expect during my first counseling session?',
      content: 'Your first session, often called an intake appointment, focuses on gathering information about your current concerns, relevant history, and goals for counseling. Your counselor will explain the counseling process, discuss confidentiality and practice policies, and answer any questions you may have. This initial session helps establish rapport and allows your counselor to begin understanding your unique situation. Together, you\'ll start developing a plan for addressing your concerns. Keep in mind that building a therapeutic relationship takes time, and it\'s normal for the first session to feel different from subsequent sessions.'
    },
    {
      title: 'How long does counseling typically last?',
      content: 'The duration of counseling varies depending on your specific concerns, goals, and progress. Some people benefit from short-term, solution-focused therapy addressing specific issues, which might involve 6-12 sessions. Others find value in longer-term support for complex or chronic concerns. Your counselor will discuss recommendations for treatment duration based on your needs, and together you\'ll regularly evaluate progress and adjust the plan as needed. Remember that counseling is not a lifetime commitment—our goal is to help you develop the skills and insights needed to navigate challenges effectively on your own.'
    },
    {
      title: 'Is what I share in counseling confidential?',
      content: 'Confidentiality is a cornerstone of effective counseling. Information shared during sessions is kept confidential within the bounds of legal and ethical guidelines. There are specific limitations to confidentiality that your counselor will discuss with you during your first session, including situations involving danger to self or others, abuse or neglect of vulnerable populations, and certain legal proceedings. These exceptions are designed to ensure safety and comply with legal requirements. Outside of these specific circumstances, your personal information and the content of your sessions remain private and protected.'
    },
    {
      title: 'Does iCounsel accept insurance?',
      content: 'Yes, iCounsel accepts many major insurance plans, including Medicare, Medicaid, and various private insurance providers. Our administrative team can verify your benefits prior to your first appointment and explain any applicable co-payments, coinsurance, or deductibles. If you don\'t have insurance coverage or prefer not to use insurance, we also offer reasonable self-pay rates and can discuss payment options. We\'re committed to making mental health care accessible and will work with you to address financial considerations.'
    }
  ];

  return (
    <ServicePage
      title="iCounsel Outpatient Therapy"
      subtitle="Professional counseling tailored to your unique needs"
      heroImage="https://via.placeholder.com/600x400"
      aboutTitle="Personalized Mental Health Support"
      aboutContent="iCounsel at White House Health Systems provides compassionate, professional counseling services for individuals, couples, and families navigating a wide range of mental health concerns and life challenges. Our experienced counselors combine evidence-based approaches with genuine care to create a supportive environment where healing and growth can occur. Whether you're struggling with anxiety, depression, relationship difficulties, trauma, or life transitions, iCounsel offers the guidance and tools needed to enhance your well-being and move toward a more fulfilling life."
      infoSections={infoSections}
      faqItems={faqItems}
      ctaTitle="Begin Your Journey to Well-Being"
      ctaContent={[
        "At iCounsel, we believe that seeking support is a sign of strength, not weakness. Our dedicated team is ready to partner with you on your journey toward improved mental health and well-being.",
        "For more information about our services or to schedule an initial consultation, please contact us at 757-262-7615 or visit our main office at 2 Eaton St. Suite 506 Hampton, VA 23669. We look forward to supporting you on your path to healing and growth."
      ]}
    />
  );
};

export default ICounsel;
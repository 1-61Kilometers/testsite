import React from 'react';
import ServicePage from '../../components/ServicePage';

const IntensiveInHome: React.FC = () => {
  const infoSections = [
    {
      title: 'Comprehensive In-Home Mental Health Care',
      content: 'At White House Health Systems, we take pride in offering comprehensive mental health care and support right in the comfort of your own home. Our team of highly skilled mental health professionals is dedicated to providing personalized services that cater to your specific needs. Whether you require routine medication management, therapy, or other mental health care and services, we are here to ensure that you receive the highest quality of care possible. With a focus on individualized service plans and compassionate support, we strive to empower you to achieve optimal mental health and well-being from the convenience of your home.',
      image: 'https://via.placeholder.com/500x400',
      imageAlt: 'In-Home Mental Health Care'
    },
    {
      title: 'Benefits of Receiving Care in Your Home Environment',
      content: 'Receiving mental health services in your home offers numerous advantages. It eliminates transportation barriers, provides care in a comfortable and familiar setting, and allows our team to observe and address challenges within your natural environment. Home-based care can reduce the stigma associated with seeking mental health support and allows for more personalized and flexible scheduling. Additionally, involving family members and caregivers in the treatment process is often easier when services are provided at home, leading to more comprehensive and effective support systems. Our intensive in-home approach ensures that you receive the highest quality care while maintaining your comfort and privacy.',
      image: 'https://via.placeholder.com/500x400',
      imageAlt: 'Family Therapy at Home',
      isAlternate: true
    },
    {
      title: 'Personalized Care Plans for Every Individual',
      content: 'Our intensive in-home services are designed to provide comprehensive mental health support tailored to your specific situation. Our team of qualified professionals works collaboratively with you to develop a personalized care plan that addresses your unique needs and goals. Using evidence-based approaches, we aim to empower you to develop the skills and strategies necessary for managing mental health challenges effectively. Our holistic approach considers all aspects of your well-being, ensuring that you receive the support you need to thrive. From initial assessment to ongoing care, we are committed to providing the highest quality services in the comfort and privacy of your home.',
      image: 'https://via.placeholder.com/500x400',
      imageAlt: 'Personalized Care Planning'
    }
  ];

  const faqItems = [
    {
      title: 'Who is eligible for intensive in-home services?',
      content: 'Our intensive in-home services are available to individuals of all ages who are experiencing mental health challenges and would benefit from receiving care in their home environment. We serve clients with a wide range of mental health conditions, including but not limited to anxiety disorders, depression, bipolar disorder, trauma-related disorders, and adjustment difficulties. To determine if our intensive in-home services are right for you, we conduct a comprehensive assessment to evaluate your needs and develop a personalized care plan. Many insurance plans cover these services, and we can help you understand your coverage options.'
    },
    {
      title: 'How often will a mental health professional visit my home?',
      content: 'The frequency of home visits depends on your individual needs and the care plan developed with your treatment team. Typically, intensive in-home services involve multiple visits per week, especially during the initial phase of treatment. As you progress and your needs change, the frequency may adjust accordingly. Our goal is to provide the right level of support at the right time, ensuring that you receive comprehensive care while gradually building independence and resilience. Your care plan will be regularly reviewed and updated to reflect your changing needs and progress toward goals.'
    },
    {
      title: 'What types of professionals will be part of my in-home care team?',
      content: 'Our intensive in-home care teams typically include a combination of mental health professionals tailored to meet your specific needs. This may include licensed therapists, counselors, social workers, psychiatric nurses, psychiatrists for medication management, and behavioral health technicians. Each team member brings specialized expertise and works collaboratively to provide comprehensive care. A primary clinician will coordinate your care and serve as your main point of contact, ensuring seamless communication and consistent support throughout your treatment journey. All our professionals are extensively trained, licensed in their respective fields, and experienced in providing home-based mental health services.'
    },
    {
      title: 'How long do intensive in-home services typically last?',
      content: 'The duration of intensive in-home services varies depending on individual needs, treatment goals, and progress. Initially, services may be more intensive and frequent, typically lasting 3-6 months. However, this timeframe can be shorter or longer based on your specific situation and response to treatment. Throughout the process, your care team will regularly assess your progress and adjust the treatment plan accordingly. Our goal is to help you develop the skills and supports needed to maintain your mental health with less intensive services over time. We work collaboratively with you to plan for a successful transition when you\'re ready to move to a lower level of care.'
    },
    {
      title: 'How do you ensure privacy and confidentiality during home visits?',
      content: 'Protecting your privacy and confidentiality is a top priority at White House Health Systems. All our mental health professionals adhere to strict ethical standards and legal requirements regarding confidentiality. Before beginning services, we\'ll discuss privacy considerations and work with you to identify a private space in your home for sessions. Our staff receives regular training on confidentiality practices and follows secure protocols for documentation and communication. Information shared during sessions is kept confidential within your treatment team, with exceptions only in cases required by law, such as when there is risk of harm to yourself or others. We\'re committed to creating a safe, trusting environment where you feel comfortable engaging in treatment.'
    }
  ];

  return (
    <ServicePage
      title="Intensive In-Home"
      subtitle="Comprehensive mental health care in the comfort of your home"
      heroImage="https://via.placeholder.com/600x400"
      aboutTitle="In-Home Health Solutions That Prioritize Your Needs"
      aboutContent="At White House Health Systems, your premier provider of intensive in-home services, we understand the importance of personalized care in the comfort of your own home. Our dedicated team of professionals is committed to delivering comprehensive compassionate care and support tailored to meet your unique needs. Whether you require assistance with therapy, medication management, mental health services, or daily living skills, we are here to help. With a focus on excellence and person-centered care, White House Health Systems is your trusted partner in achieving optimal mental health and well-being."
      infoSections={infoSections}
      faqItems={faqItems}
      ctaTitle="Get Started with Intensive In-Home Services"
      ctaContent={[
        "At White House Health Systems, we are dedicated to providing comprehensive and compassionate mental health care. Our Intensive In-Home services bring expert care directly to you, allowing for personalized treatment in the comfort of your own home. Whether you're seeking support for yourself or a loved one, our team is ready to help.",
        "For more information about our Intensive In-Home services or to schedule an appointment, please contact us at 757-262-7615 or visit our main office at 2 Eaton St. Suite 506 Hampton, VA 23669. We look forward to partnering with you on your journey to mental health and well-being."
      ]}
    />
  );
};

export default IntensiveInHome;
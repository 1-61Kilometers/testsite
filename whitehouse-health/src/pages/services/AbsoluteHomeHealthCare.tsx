import React from 'react';
import ServicePage from '../../components/ServicePage';

const AbsoluteHomeHealthCare: React.FC = () => {
  const infoSections = [
    {
      title: 'Skilled Nursing Services',
      content: 'Our Skilled Nursing services provide professional medical care in the comfort of your home. Our registered nurses and licensed practical nurses are specially trained to deliver a comprehensive range of medical services, including wound care, medication management, IV therapy, disease education, vital signs monitoring, and post-surgical care. Each care plan is developed in coordination with your physician and tailored to your specific medical needs. Our nurses not only provide direct care but also educate patients and families about managing health conditions, medications, and treatment protocols for improved long-term outcomes.',
      image: 'https://via.placeholder.com/500x400',
      imageAlt: 'Skilled Nursing Care'
    },
    {
      title: 'Therapeutic Services',
      content: 'Absolute Home Health Care offers comprehensive therapeutic services including physical therapy, occupational therapy, and speech therapy delivered in your home environment. Our licensed therapists help patients recover function, build strength, improve balance, enhance daily living skills, and develop communication abilities after illness, injury, or surgery. Unlike facility-based therapy, our home-based approach allows therapists to create personalized treatment plans that address real-life challenges in your actual living environment, incorporating your home setup, daily routines, and specific needs for more practical and effective outcomes.',
      image: 'https://via.placeholder.com/500x400',
      imageAlt: 'Home-Based Physical Therapy',
      isAlternate: true
    },
    {
      title: 'Personal Care and Support Services',
      content: 'Our compassionate home health aides and personal care assistants provide essential support with activities of daily living, helping clients maintain independence, comfort, and dignity at home. These services include assistance with bathing, dressing, grooming, meal preparation, light housekeeping, medication reminders, and companionship. Care plans are individually tailored to each client\'s needs and preferences, with careful matching of caregivers to ensure compatibility in personality, skills, and scheduling requirements. Whether you need a few hours of support weekly or around-the-clock care, our flexible scheduling accommodates your changing needs.',
      image: 'https://via.placeholder.com/500x400',
      imageAlt: 'Personal Care Services'
    }
  ];

  const faqItems = [
    {
      title: 'How do I know if I qualify for home health care services?',
      content: 'To qualify for Medicare-covered home health services, you generally need to be under the care of a physician who certifies that you need skilled care (nursing or therapy) and are homebound, meaning leaving home requires considerable effort. For private-pay services, there are no specific medical requirements. During our initial assessment, we\'ll evaluate your needs, review your insurance coverage, and determine which services would be most beneficial for your situation. We can also help facilitate communication with your physician to obtain necessary orders if you qualify for skilled care under insurance.'
    },
    {
      title: 'Will my insurance cover home health care services?',
      content: 'Many insurance plans, including Medicare, Medicaid, and private insurance, cover home health services when they\'re deemed medically necessary and ordered by a physician. Medicare typically covers skilled nursing, therapy services, and limited home health aide services for homebound patients needing intermittent skilled care. Coverage varies widely among private insurance plans. Our administrative team will verify your benefits prior to starting services and explain what is covered under your plan. For services not covered by insurance, we offer competitive private-pay rates and can work with long-term care insurance providers.'
    },
    {
      title: 'How soon can services begin after making contact with Absolute Home Health Care?',
      content: 'For most new referrals, we can initiate an assessment within 24-48 hours. How quickly regular services can begin depends on several factors, including the urgency of your needs, physician orders, insurance authorization requirements, and staff availability. For hospital discharges and urgent situations, we prioritize rapid response to ensure smooth care transitions. Our intake team works efficiently to complete necessary documentation and coordinated with healthcare providers to minimize delays. We\'ll keep you informed throughout the process and provide a clear timeline for when you can expect services to begin.'
    },
    {
      title: 'How are your home health care providers screened and trained?',
      content: 'All of our staff undergo a rigorous screening process that includes comprehensive background checks, verification of credentials and licensure, reference checks, drug screening, and thorough interviews. Our clinical professionals (nurses and therapists) must demonstrate current licensure, relevant experience, and specialized skills for home-based care. Our team receives ongoing training in their specific disciplines as well as in areas such as infection control, safety procedures, fall prevention, dementia care, cultural sensitivity, and emergency response. We maintain strict quality standards and regularly evaluate staff performance to ensure excellence in care delivery.'
    },
    {
      title: 'Can we request a specific caregiver or change caregivers if needed?',
      content: 'Yes, we understand that the relationship between a client and caregiver is crucial for successful care. We welcome your input on caregiver preferences and will do our best to accommodate specific requests based on staff availability. If you develop a preference for certain caregivers after services begin, we\'ll prioritize consistency in scheduling them for your care. If for any reason you aren\'t comfortable with an assigned caregiver, you can request a change at any time. We\'re committed to finding the right match for each client and believe that your comfort and satisfaction are essential components of effective home health care.'
    }
  ];

  return (
    <ServicePage
      title="Absolute Home Health Care"
      subtitle="Professional healthcare services delivered in the comfort of your home"
      heroImage="https://via.placeholder.com/600x400"
      aboutTitle="Comprehensive Home-Based Healthcare"
      aboutContent="Absolute Home Health Care at White House Health Systems delivers high-quality, compassionate healthcare services in the familiar and comfortable environment of your home. Our comprehensive approach combines skilled medical care, therapeutic services, and personal assistance to help individuals of all ages recover from illness or injury, manage chronic conditions, and maintain independence. Our team of experienced healthcare professionals works collaboratively with patients, families, and physicians to create personalized care plans that address each individual's unique health needs and goals. With a focus on both clinical excellence and genuine compassion, we're committed to enhancing the quality of life for our clients while providing peace of mind for their loved ones."
      infoSections={infoSections}
      faqItems={faqItems}
      ctaTitle="Experience the Comfort and Convenience of Home-Based Care"
      ctaContent={[
        "When you or a loved one needs healthcare support, the familiar surroundings of home often provide the best environment for healing and comfort. Our dedicated team is ready to bring professional, compassionate care directly to you.",
        "For more information about our home health services or to schedule an initial assessment, please contact us at 757-262-7615 or visit our main office at 2 Eaton St. Suite 506 Hampton, VA 23669. We accept Medicare, Medicaid, and most major insurance plans."
      ]}
    />
  );
};

export default AbsoluteHomeHealthCare;
import React from 'react';
import ServicePage from '../../components/ServicePage';

const ParentSupportGroups: React.FC = () => {
  const infoSections = [
    {
      title: 'Expert-Facilitated Support Groups',
      content: 'Our Parent Support Groups are led by experienced mental health professionals and family specialists who understand the unique challenges of raising children with various needs. These skilled facilitators create a structured yet comfortable environment where parents can share experiences, gain insights, and learn effective strategies. Our facilitators bring both professional expertise and compassionate understanding to each session, ensuring discussions remain productive, supportive, and focused on practical solutions that families can implement at home.',
      image: 'https://via.placeholder.com/500x400',
      imageAlt: 'Support Group Session'
    },
    {
      title: 'Specialized Groups for Specific Needs',
      content: 'We offer a variety of specialized support groups designed to address specific parenting challenges and child needs. These include groups for parents of children with ADHD, autism spectrum disorders, anxiety, depression, behavioral challenges, and developmental disabilities. We also provide groups focused on particular parenting situations, such as single parenting, co-parenting after separation, parenting adolescents, and supporting children through trauma or loss. This specialized approach ensures parents receive guidance relevant to their family\'s unique circumstances.',
      image: 'https://via.placeholder.com/500x400',
      imageAlt: 'Specialized Support Group',
      isAlternate: true
    },
    {
      title: 'Educational Resources and Skill Building',
      content: 'Beyond emotional support, our groups incorporate evidence-based educational components that enhance parenting knowledge and skills. Sessions frequently include presentations on child development, effective discipline strategies, communication techniques, self-care practices, and approaches for managing specific behavioral or emotional challenges. Parents receive handouts, recommended readings, and access to online resources that supplement group discussions and provide ongoing support between meetings. These practical tools empower parents to implement positive changes in their family dynamics.',
      image: 'https://via.placeholder.com/500x400',
      imageAlt: 'Parenting Education Resources'
    }
  ];

  const faqItems = [
    {
      title: 'How are the support groups structured and how often do they meet?',
      content: 'Our parent support groups typically meet weekly or bi-weekly for 90-minute sessions, with most groups running in 8-12 week cycles. Each session follows a semi-structured format that balances educational content with open discussion and peer support. The initial portion often includes check-ins and updates from participants, followed by a focused topic or skill presentation. The remainder of the session provides time for questions, discussion, problem-solving, and sharing of experiences related to the topic. Some specialized groups may follow different schedules based on their specific focus and participant needs.'
    },
    {
      title: 'Do I need to commit to attending every session?',
      content: 'While consistent attendance maximizes the benefits of the support group experience, we understand that parents have busy lives and occasional absences may be unavoidable. We encourage participants to attend as many sessions as possible to build relationships with other group members and to benefit from the full range of topics covered. Some of our more structured groups with sequential content may require a minimum attendance commitment, while drop-in groups offer more flexibility. Your group facilitator can provide specific attendance expectations for your chosen group.'
    },
    {
      title: 'Are childcare services available during support group meetings?',
      content: 'For select groups, we do offer limited on-site childcare services provided by qualified staff during meeting times. This service requires pre-registration and may have an additional nominal fee, though we strive to keep this service affordable. For groups without childcare provisions, we can provide referrals to local childcare options or work with families to identify meeting times that accommodate their childcare needs. Please inquire about childcare availability when registering for your specific group of interest.'
    },
    {
      title: 'Can I join a group that has already started?',
      content: 'This depends on the type of group. Some of our support groups are designed as "closed groups," meaning all members start together and continue through a structured curriculum, making mid-cycle entries difficult. However, many of our groups are "open" or "rolling" groups that welcome new members at various points. Additionally, we regularly start new groups throughout the year. During your initial consultation, we can discuss which current or upcoming groups would be the best fit for your situation and when you can begin participating.'
    },
    {
      title: 'Is there a cost for participating in parent support groups?',
      content: 'We offer a range of payment options for our support groups to ensure accessibility. Some groups are grant-funded and available at no cost to participants, while others have a nominal fee that may be covered by insurance or offered on a sliding scale based on financial need. For groups that do have associated costs, we accept many insurance plans, including Medicaid, and offer financial assistance programs. Our goal is to ensure that financial constraints do not prevent any parent from accessing the support they need.'
    }
  ];

  return (
    <ServicePage
      title="Parent Support Groups"
      subtitle="Finding strength, solutions, and community in shared experiences"
      heroImage="https://via.placeholder.com/600x400"
      aboutTitle="Empowering Parents Through Connection"
      aboutContent="Parent Support Groups at White House Health Systems create a safe, welcoming space where parents facing similar challenges can connect, share experiences, and gain valuable insights and strategies. Our groups combine the powerful elements of peer support with professional guidance, offering both emotional validation and practical parenting tools. We understand that raising children – particularly those with behavioral, emotional, or developmental challenges – can sometimes feel isolating and overwhelming. Our support groups break this isolation, helping parents discover they are not alone in their struggles while building a toolkit of effective approaches to enhance family functioning and well-being."
      infoSections={infoSections}
      faqItems={faqItems}
      ctaTitle="Connect with Other Parents on Similar Journeys"
      ctaContent={[
        "Parenting doesn't come with a manual, but you don't have to figure it all out alone. Our Parent Support Groups provide the understanding, guidance, and community that can make a significant difference for you and your family.",
        "To learn more about our current groups or to register for an upcoming session, please contact our Family Services Coordinator at 757-262-7615 or visit our main office at 2 Eaton St. Suite 506 Hampton, VA 23669. An initial consultation will help us match you with the most appropriate group for your family's specific needs."
      ]}
    />
  );
};

export default ParentSupportGroups;
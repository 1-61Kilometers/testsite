import React from 'react';
import ServicePage from '../../components/ServicePage';

const AngerManagement: React.FC = () => {
  const infoSections = [
    {
      title: 'Understanding Anger and Its Triggers',
      content: 'Our Anger Management program begins with developing a clear understanding of anger as a natural emotion and identifying personal triggers. Through structured assessment and reflective exercises, participants gain insight into their unique anger patterns, including physical sensations, thoughts, and behaviors that signal escalating anger. This awareness is the essential first step in learning to manage anger effectively and transform reactive responses into thoughtful choices.',
      image: 'https://via.placeholder.com/500x400',
      imageAlt: 'Understanding Anger Triggers'
    },
    {
      title: 'Developing Effective Coping Strategies',
      content: 'The core of our program focuses on building a toolkit of effective strategies for managing anger in the moment. Participants learn evidence-based techniques such as deep breathing, progressive muscle relaxation, cognitive restructuring, and time-out procedures. Through practice in sessions and real-world application, these strategies become accessible tools for de-escalating anger before it leads to harmful words or actions. Our approach emphasizes that managing anger is a skill that improves with consistent practice.',
      image: 'https://via.placeholder.com/500x400',
      imageAlt: 'Anger Management Strategies',
      isAlternate: true
    },
    {
      title: 'Improving Communication and Relationship Skills',
      content: 'Anger often affects our relationships, which is why our program emphasizes developing healthy communication skills. Participants learn how to express their needs and feelings assertively rather than aggressively, practice active listening, and develop conflict resolution strategies. These skills help transform potentially volatile situations into opportunities for understanding and connection. By improving communication, participants can address underlying issues effectively and maintain healthier relationships.',
      image: 'https://via.placeholder.com/500x400',
      imageAlt: 'Healthy Communication Skills'
    }
  ];

  const faqItems = [
    {
      title: 'How do I know if I need anger management services?',
      content: 'You might benefit from anger management services if you experience any of the following: frequent intense anger that seems disproportionate to the situation; anger that leads to verbal or physical aggression; anger that interferes with your relationships, work, or other areas of life; feeling that your anger is out of control; or receiving feedback from others about your anger. Many people seek anger management not because they have serious anger problems, but because they want to improve their emotional regulation skills and communication in challenging situations.'
    },
    {
      title: 'What format does the anger management program follow?',
      content: 'Our anger management program is available in both group and individual formats. The group program typically runs for 8-12 weekly sessions of 90 minutes each, providing both structured learning and peer support. Individual sessions offer a more personalized approach and can be scheduled according to your needs and progress. Some participants begin with individual sessions and later transition to a group, while others may participate exclusively in one format or the other, depending on their preferences and needs.'
    },
    {
      title: 'Will I have to talk about personal issues in the anger management group?',
      content: 'Group participants are encouraged to share their experiences with anger and practice new skills, but you always maintain control over what personal information you choose to disclose. Our facilitators create a safe, respectful environment where sharing is invited but never forced. Many participants find that hearing others\' experiences and receiving supportive feedback from the group is a valuable part of the learning process, but your comfort level is always respected.'
    },
    {
      title: 'How effective is anger management training?',
      content: 'Research consistently shows that structured anger management programs are effective in reducing anger intensity, frequency of angry episodes, and aggressive behavior. Participants typically report improvements in their relationships, work performance, and overall well-being. The effectiveness of the program depends significantly on your commitment to attending sessions, practicing skills between sessions, and applying what you learn in real-life situations. Most participants see gradual improvement over the course of the program, with continued progress as they integrate these skills into their daily lives.'
    },
    {
      title: 'Can anger management help with other emotional issues?',
      content: 'Yes, many of the skills taught in anger management are applicable to managing other emotions and improving overall emotional regulation. Participants often report benefits such as reduced anxiety, improved stress management, enhanced communication skills, and greater self-awareness. While anger management is not a substitute for comprehensive mental health treatment when needed, it can be a valuable component of overall emotional wellness and can complement other therapeutic approaches you may be using.'
    }
  ];

  return (
    <ServicePage
      title="Anger Management"
      subtitle="Transforming reactive anger into responsive communication"
      heroImage="https://via.placeholder.com/600x400"
      aboutTitle="Effective Strategies for Managing Anger"
      aboutContent="At White House Health Systems, our Anger Management program offers evidence-based strategies for understanding and managing anger effectively. We recognize anger as a natural emotion that, when expressed appropriately, can motivate positive change. However, when anger is frequent, intense, or expressed in harmful ways, it can damage relationships, impair work performance, and affect physical and mental health. Our program provides practical tools and skills to help you recognize anger triggers, implement effective coping strategies, and develop healthier ways of communicating and resolving conflicts."
      infoSections={infoSections}
      faqItems={faqItems}
      ctaTitle="Take Control of Your Anger Today"
      ctaContent={[
        "At White House Health Systems, we believe that everyone can learn to manage anger more effectively and transform challenging interactions into opportunities for growth and connection. Our Anger Management program provides the tools, support, and practice needed to make lasting changes.",
        "For more information about our Anger Management program or to schedule an initial consultation, please contact us at 757-262-7615 or visit our main office at 2 Eaton St. Suite 506 Hampton, VA 23669. We look forward to supporting you as you develop these important life skills."
      ]}
    />
  );
};

export default AngerManagement;
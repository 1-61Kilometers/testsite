import React from 'react';
import Accordion from './Accordion';

interface InfoSection {
  title: string;
  content: string;
  image: string;
  imageAlt: string;
  isAlternate?: boolean;
}

interface FAQItem {
  title: string;
  content: string;
}

interface ServicePageProps {
  title: string;
  subtitle: string;
  heroImage: string;
  aboutTitle: string;
  aboutContent: string;
  infoSections: InfoSection[];
  faqItems: FAQItem[];
  ctaTitle: string;
  ctaContent: string[];
}

const ServicePage: React.FC<ServicePageProps> = ({
  title,
  subtitle,
  heroImage,
  aboutTitle,
  aboutContent,
  infoSections,
  faqItems,
  ctaTitle,
  ctaContent
}) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content-wrapper">
            <div className="hero-text">
              <h1>{title}</h1>
              <p>{subtitle}</p>
            </div>
            <div className="hero-image">
              <img src={heroImage} alt={title} />
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="about">
        <div className="container">
          <h2>{aboutTitle}</h2>
          <div className="about-content">
            <p>{aboutContent}</p>
          </div>
        </div>
      </section>
      
      {/* Info Sections */}
      {infoSections.map((section, index) => (
        <section className={`info-section ${section.isAlternate ? 'alternate' : ''}`} key={index}>
          <div className="container">
            <div className="info-container">
              {section.isAlternate ? (
                <>
                  <div className="info-image">
                    <img src={section.image} alt={section.imageAlt} />
                  </div>
                  <div className="info-text">
                    <h2>{section.title}</h2>
                    <p>{section.content}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="info-text">
                    <h2>{section.title}</h2>
                    <p>{section.content}</p>
                  </div>
                  <div className="info-image">
                    <img src={section.image} alt={section.imageAlt} />
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      ))}
      
      {/* FAQ Section */}
      <section className="faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <Accordion items={faqItems} />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>{ctaTitle}</h2>
          {ctaContent.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
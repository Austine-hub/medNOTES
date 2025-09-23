import React, { useEffect, useCallback } from 'react';
import styles from './AboutUs.module.css';

interface Service {
  icon: string;
  title: string;
  description: string;
}

const AboutUs: React.FC = () => {
  const handleScrollReveal = useCallback(() => {
    const elements = document.querySelectorAll(`.${styles.reveal}`);
    elements.forEach((el) => {
      const { top } = el.getBoundingClientRect();
      if (top < window.innerHeight - 100) {
        el.classList.add(styles.visible);
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScrollReveal, { passive: true });
    handleScrollReveal(); // Initial check
    return () => window.removeEventListener('scroll', handleScrollReveal);
  }, [handleScrollReveal]);

  const services: Service[] = [
    {
      icon: '👥',
      title: 'Customer Service',
      description: 'Personal care, attentive personnel, and professionalism in a trusting and continuing relationship.'
    },
    {
      icon: '🗣️',
      title: 'Multilingual Service',
      description: 'Multi-lingual staff can assist you in over 8 languages, ensuring all customers get the most out of our services.'
    },
    {
      icon: '👨‍⚕️',
      title: 'Professional Specialists',
      description: 'Full-time nutritionist offering private consultations, plus experts in medical supplies and cosmeceuticals.'
    },
    {
      icon: '🔒',
      title: 'Private Consulting',
      description: 'Private counseling room where patients can be advised in complete confidence by our experts.'
    },
    {
      icon: '🌍',
      title: 'World-wide Shipping',
      description: 'Free shipping on orders over $50 in Continental US and free delivery in Manhattan.'
    },
    {
      icon: '🌐',
      title: 'International Products',
      description: 'Extensive variety of personal care products from international research and travel.'
    }
  ];

  return (
    <div className={styles.container}>
      {/* Services Section Only */}
      <section className={styles.servicesSection} role="region" aria-label="Our Services">
        <h2 className={styles.servicesTitle}>Get Involved</h2>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <article key={index} className={`${styles.serviceCard} ${styles.reveal}`}>
              <div className={styles.serviceIcon} aria-hidden="true">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;


import React, { useEffect } from 'react';
import styles from './AboutUs.module.css';

const AboutUs: React.FC = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll(`.${styles.reveal}`);
    const onScroll = () => {
      revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add(styles.visible);
        }
      });
    };
    window.addEventListener('scroll', onScroll);
    onScroll(); // run on load
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Our Story</h1>
      </div>

      <div className={styles.timeline}>
        <div className={`${styles.timelineItem} ${styles.reveal}`}>
          <div className={styles.year}>1977</div>
          <div className={styles.content}>
            <div className={styles.textContent}>
              <p>
                Since 1977 New London Pharmacy has been owned by the husband and
                wife team of John and Abby Fazio, both of whom are licensed
                pharmacists.
              </p>
              <p>
                Between their combined Greek and Italian heritage, New London
                Pharmacy offers what your typical CVS or Walgreens doesn&apos;t
                (and may never)—a very high level of personalization and
                attention.
              </p>
            </div>
            <div className={styles.imageWrapper}>
              <div className={styles.polaroidImage}>
                <img
                  src="/api/placeholder/200/150"
                  alt="John and Abby Fazio 1977"
                />
              </div>
            </div>
          </div>
          <div className={styles.timelineDot}></div>
        </div>

        <div className={`${styles.timelineItem} ${styles.reveal}`}>
          <div className={styles.year}>2003</div>
          <div className={styles.content}>
            <div className={styles.imageWrapper}>
              <div className={styles.polaroidImage}>
                <img
                  src="/api/placeholder/200/150"
                  alt="Pharmacy interior 2003"
                />
              </div>
            </div>
            <div className={styles.textContent}>
              <p>
                Recently, the store was renovated to reflect a more modern and
                holistic approach to health care.
              </p>
              <p>
                New London Pharmacy was renovated to reflect a modern 21st
                century pharmacy, expanded its focus in organic skincare and
                holistic products.
              </p>
            </div>
          </div>
          <div className={styles.timelineDot}></div>
        </div>

        <div className={`${styles.timelineItem} ${styles.reveal}`}>
          <div className={styles.year}>2013</div>
          <div className={styles.content}>
            <div className={styles.textContent}>
              <p>
                New London Pharmacy expanded to the second floor, at 8th avenue
                location, and expanded its compounding department, founding New
                London Specialty Pharmacy.
              </p>
            </div>
            <div className={styles.imageWrapper}>
              <div className={styles.polaroidImage}>
                <img
                  src="/api/placeholder/200/150"
                  alt="Pharmacy expansion 2013"
                />
              </div>
            </div>
          </div>
          <div className={styles.timelineDot}></div>
        </div>

        <div className={`${styles.timelineItem} ${styles.reveal}`}>
          <div className={styles.year}>2022</div>
          <div className={styles.content}>
            <div className={styles.imageWrapper}>
              <div className={styles.polaroidImage}>
                <img
                  src="/api/placeholder/200/150"
                  alt="New London Pharmacy 2022"
                />
              </div>
            </div>
            <div className={styles.textContent}>
              <p>
                The overall mission at New London Pharmacy is to provide maximum
                health-care benefits through traditional medical services,
                homeopathy, and natural remedies or a combination of all three.
              </p>
              <p>
                The balance of body and mind is essential to optimum healthcare.
              </p>
              <p>
                We provide these services in a comfortable, informative, relaxed
                and friendly environment.
              </p>
            </div>
          </div>
          <div className={styles.timelineDot}></div>
        </div>
      </div>

      <div className={styles.servicesSection}>
        <h2 className={styles.servicesTitle}>Our Services</h2>
        <div className={styles.servicesGrid}>
          <div className={`${styles.serviceCard} ${styles.reveal}`}>
            <div className={styles.serviceIcon}>👥</div>
            <h3>Customer service</h3>
            <p>
              Our goal is to incorporate personal care, attentive personnel, and
              professionalism in a trusting and continuing relationship.
            </p>
          </div>
          <div className={`${styles.serviceCard} ${styles.reveal}`}>
            <div className={styles.serviceIcon}>🗣️</div>
            <h3>Multilingual service</h3>
            <p>
              Our multi-lingual staff can assist you in over 8 languages, making
              sure that all of our customers are able to get the most out of
              your products and services.
            </p>
          </div>
          <div className={`${styles.serviceCard} ${styles.reveal}`}>
            <div className={styles.serviceIcon}>👨‍⚕️</div>
            <h3>Professional specialists</h3>
            <p>
              Our professional staff includes a full-time nutritionist, who
              offers private consultations. We also have experts in medical
              supplies and cosmeceuticals.
            </p>
          </div>
          <div className={`${styles.serviceCard} ${styles.reveal}`}>
            <div className={styles.serviceIcon}>🔒</div>
            <h3>Private consulting</h3>
            <p>
              We have a private counseling room where patients can be advised in
              complete confidence by our experts.
            </p>
          </div>
          <div className={`${styles.serviceCard} ${styles.reveal}`}>
            <div className={styles.serviceIcon}>🌍</div>
            <h3>World-wide shipping</h3>
            <p>
              We offer world-wide shipping. Free shipping on all orders over
              $50.00 in the Continental United States and free delivery in
              Manhattan.
            </p>
          </div>
          <div className={`${styles.serviceCard} ${styles.reveal}`}>
            <div className={styles.serviceIcon}>🌐</div>
            <h3>International products</h3>
            <p>
              Extensive international research and travel has afforded all who
              visit us an extensive variety of personal care products that are
              sure to please the most discriminating consumer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;


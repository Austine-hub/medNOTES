import React from 'react';
import styles from './JoinUs.module.css';

const GetInvolvedWithUs: React.FC = () => {
  return (
    <section className={styles.getInvolvedSection}
    id="Join-Us">        
      <div className={styles.container}>
        <h2 className={styles.title}>Get Involved With Us</h2>
        
        <div className={styles.cardsContainer}>
          {/* Suppliers Card */}
          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <img 
                src="/api/placeholder/300/200" 
                alt="Construction worker in safety gear"
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Suppliers</h3>
              <p className={styles.cardDescription}>
                Get more information about all the key processes along our supplier journey.
              </p>
              <button className={styles.exploreButton}>
                Explore More
                <span className={styles.arrow}>→</span>
              </button>
            </div>
          </div>

          {/* Help Center Card */}
          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <img 
                src="/api/placeholder/300/200" 
                alt="Customer service representative with headset"
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Help Center</h3>
              <p className={styles.cardDescription}>
                Get all the support and guidance you need as you navigate through our products and services
              </p>
              <button className={styles.exploreButton}>
                Explore More
                <span className={styles.arrow}>→</span>
              </button>
            </div>
          </div>

          {/* Careers Card */}
          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <img 
                src="/api/placeholder/300/200" 
                alt="Professional colleagues working together"
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Careers</h3>
              <p className={styles.cardDescription}>
                Find out all you need to know about the work opportunities, life and culture at Britam
              </p>
              <button className={styles.exploreButton}>
                Explore More
                <span className={styles.arrow}>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedWithUs;
import React from 'react';
import styles from './JoinUs.module.css';

const JoinUs: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Header Navigation */}
      <header className={styles.header}>
        <nav className={styles.nav}>
          <a href="#" className={styles.navLink}>INSURE</a>
          <a href="#" className={styles.navLink}>SAVE AND INVEST</a>
          <a href="#" className={styles.navLink}>PENSION</a>
          <a href="#" className={styles.navLink}>TRUSTS</a>
          <a href="#" className={styles.navLink}>HELP</a>
        </nav>
        <div className={styles.headerRight}>
          <div className={styles.portalLinks}>
            <a href="#" className={styles.portalLink}>Customer Portal</a>
            <a href="#" className={styles.portalLink}>Brand Shop</a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>Get Involved With Us</h1>
          
          <div className={styles.cardsContainer}>
            {/* Suppliers Card */}
            <div className={styles.card}>
              <div className={styles.imageContainer}>
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&crop=face" 
                  alt="Construction worker with hard hat"
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Suppliers</h3>
                <p className={styles.cardDescription}>
                  Get more information about all the key processes along our supplier journey.
                </p>
                <a href="#" className={styles.exploreLink}>
                  Explore More <span className={styles.arrow}>→</span>
                </a>
              </div>
            </div>

            {/* Help Center Card */}
            <div className={styles.card}>
              <div className={styles.imageContainer}>
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=250&fit=crop&crop=face" 
                  alt="Customer service representative with headset"
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Help Center</h3>
                <p className={styles.cardDescription}>
                  Get all the support and guidance you need as you navigate through our products and services
                </p>
                <a href="#" className={styles.exploreLink}>
                  Explore More <span className={styles.arrow}>→</span>
                </a>
              </div>
            </div>

            {/* Careers Card */}
            <div className={styles.card}>
              <div className={styles.imageContainer}>
                <img 
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=250&fit=crop&crop=faces" 
                  alt="Professional colleagues working together"
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Careers</h3>
                <p className={styles.cardDescription}>
                  Find out all you need to know about the work opportunities, life and culture at Britam
                </p>
                <a href="#" className={styles.exploreLink}>
                  Explore More <span className={styles.arrow}>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Chat Widget */}
      <div className={styles.chatWidget}>
        <div className={styles.chatAvatar}>
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face" 
            alt="Customer service"
            className={styles.avatarImage}
          />
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
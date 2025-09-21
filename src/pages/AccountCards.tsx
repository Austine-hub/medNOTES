import React from 'react';
import styles from './AccountCards.module.css';

interface AccountCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

const AccountCard: React.FC<AccountCardProps> = ({ title, description, imageUrl, imageAlt }) => (
  <div className={styles.card}>
    <div className={styles.imageContainer}>
      <img src={imageUrl} alt={imageAlt} className={styles.cardImage} />
    </div>
    <div className={styles.cardContent}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <button className={styles.findOutMoreBtn}>
        Find out more
        <span className={styles.arrow}>▶</span>
      </button>
    </div>
  </div>
);

const AccountCards: React.FC = () => {
  const accountData = [
    {
      title: "Current Account",
      description: "This is a convenient and flexible medium for a range of transactions. With this account you are free to make deposits, receive money, make payments, make withdrawals and set up standing orders....",
      imageUrl: "/api/placeholder/300/200",
      imageAlt: "Couple reviewing documents together"
    },
    {
      title: "Equity Ordinary Account",
      description: "Equity Ordinary Account is your perfect medium for personal deposits, daily business transactions and remittances....",
      imageUrl: "/api/placeholder/300/200",
      imageAlt: "Man using mobile phone"
    },
    {
      title: "School Fees Collection Account",
      description: "We have partnered with various higher learning institutions across the country to ease the process of paying tuition, and thus allow you to access your education more easily....",
      imageUrl: "/api/placeholder/300/200",
      imageAlt: "Student in classroom"
    },
    {
      title: "Investments A/C",
      description: "The CDSC Account is an electronic account that holds your shares and manages the process of transferring shares that are traded in the NSE (Nairobi Securities Exchange)....",
      imageUrl: "/api/placeholder/300/200",
      imageAlt: "Couple with laptop and documents"
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.cardsGrid}>
        {accountData.map((account, index) => (
          <AccountCard
            key={index}
            title={account.title}
            description={account.description}
            imageUrl={account.imageUrl}
            imageAlt={account.imageAlt}
          />
        ))}
      </div>
    </div>
  );
};

export default AccountCards;
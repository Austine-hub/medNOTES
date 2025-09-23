// src/components/AccountCards.tsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ Import Link
import styles from "./AccountCards.module.css";

// ✅ Import local images (ensures correct bundling + cache-busting in production)
import orthoImg from "../assets/med-images/Appley-ortho.jpg";
import surgeryImg from "../assets/med-images/SRB-surgery.jpg";
import medicineImg from "../assets/med-images/harrison-imed.png";
import obgynImg from "../assets/med-images/ten-teachers.jpg";
import paedsImg from "../assets/med-images/paeds-protocal.png";

interface AccountCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  linkUrl?: string; // ✅ Optional link property
}

const AccountCard: React.FC<AccountCardProps> = ({
  title,
  description,
  imageUrl,
  imageAlt,
  linkUrl, // ✅ Receive link
}) => (
  <motion.article
    className={styles.card}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    <div className={styles.imageContainer}>
      <img src={imageUrl} alt={imageAlt} className={styles.cardImage} />
    </div>
    <div className={styles.cardContent}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      {linkUrl ? (
        <Link to={linkUrl} className={styles.findOutMoreBtn}>
          Find out more <span className={styles.arrow}>▶</span>
        </Link>
      ) : (
        <span className={styles.findOutMoreBtnDisabled}>
          Find out more <span className={styles.arrow}>▶</span>
        </span>
      )}
    </div>
  </motion.article>
);

const AccountCards: React.FC = () => {
  // ✅ Use imported images here (no hardcoded paths)
  const accountData: AccountCardProps[] = [
    {
      title: "Orthopaedics",
      description:
        "A complete beginner guide to undergraduate orthopaedics. Read, memorize, practice and master the essentials.",
      imageUrl: orthoImg,
      imageAlt: "Appleys Orthopaedics",
      linkUrl: "/specialties/Orthopaedics", // ✅ React Router link
    },
    {
      title: "General Surgery",
      description:
        "Perfect for you — practice daily questions and mindmaps, and become an expert surgeon-in-training.",
      imageUrl: surgeryImg,
      imageAlt: "SRB Surgery",
      linkUrl: "/specialties/Surgery",
    },
    {
      title: "Medicine",
      description:
        "Comprehensive principles and guides for medical students — from basics to advanced topics.",
      imageUrl: medicineImg,
      imageAlt: "Harrison Manual of Medicine",
      linkUrl: "/specialties/Medicine",
    },
    {
      title: "OBGYN",
      description:
        "A complete undergraduate guide to Obstetrics and Gynaecology practice — step by step.",
      imageUrl: obgynImg,
      imageAlt: "Obstetrics by Ten Teachers",
      linkUrl: "/specialties/OBGYN",
    },
    {
      title: "Paediatrics",
      description:
        "An undergraduate approach to Paediatrics and Child Health — learn it, apply it, master it.",
      imageUrl: paedsImg,
      imageAlt: "Kenya Paediatrics Protocol",
      linkUrl: "/specialties/Paediatrics",
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.cardsGrid}>
        {accountData.map((account, index) => (
          <AccountCard key={index} {...account} />
        ))}
      </div>
    </section>
  );
};

export default AccountCards;


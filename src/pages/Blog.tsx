import React from "react";
import { Link } from "react-router-dom"; // ✅ Remove if you don't use React Router
import styles from "./Blog.module.css";

const Blog: React.FC = () => {
  // ✅ Centralized card data
  const cards = [
    {
      title: "USMLE QUESTIONS",
      description: "Get new and up-to-date UWorld and NBE questions.",
      img: "/../../src/assets/usmle.png",
      alt: "usmle",
      link: "/usmle-osces",
    },
    {
      title: "Physical Exam",
      description:
        "Get all the support and guidance you need as you navigate through comprehensive patient care.",
      img: "/../../src/assets/PE.png",
      alt: "Physsical Exam",
      link: "/physical-exam",
    },
    {
      title: "OSCES",
      description: "Find out all you need to know about OSCES exams.",
      img: "/../../src/assets/OSCES.png",
      alt: "Professional colleagues working together",
      link: "/osces",
    },

        {
      title: "MCQs",
      description: "Practice with our huge mcq banks.",
      img: "/../../src/assets/MCQs.png",
      alt: "MCQs",
      link: "/osces",
    },
  ];

  return (
    <section className={styles.getInvolvedSection} id="blog">
      <div className={styles.container}>
        <h2 className={styles.title}>Get Involved With Us</h2>

        <div className={styles.cardsContainer}>
          {cards.map((card, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageContainer}>
                <img src={card.img} alt={card.alt} className={styles.cardImage} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>

                {/* ✅ Use <Link> for internal routes, <a> for external */}
                {card.link.startsWith("http") ? (
                  <a
                    href={card.link}
                    className={styles.exploreButton}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Explore More <span className={styles.arrow}>→</span>
                  </a>
                ) : (
                  <Link to={card.link} className={styles.exploreButton}>
                    Explore More <span className={styles.arrow}>→</span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

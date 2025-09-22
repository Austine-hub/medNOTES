// src/pages/HomePage.tsx
import React from "react";
import { motion } from "framer-motion";
import styles from "./HomePage.module.css";

// ✅ Import images
import physiologyImg from "../assets/med-images/physiology.png";
import dermatologyImg from "../assets/med-images/dermatology.png";
import medicineImg from "../assets/med-images/harrison-imed.png";
import surgeryImg from "../assets/med-images/SRB-surgery.jpg";
import pharmacologyImg from "../assets/med-images/pharmacology.png";
import differentialsImg from "../assets/med-images/differential diagnosis.png";
import radiologyImg from "../assets/med-images/radiology.png";
import dentistryImg from "../assets/med-images/dentistry.png";
import toxicologyImg from "../assets/med-images/forensics.png";
import anaesthesiaImg from "../assets/med-images/anaesthesia.png";
import opthalmologyImg from "../assets/med-images/ophthalmology.png";

interface CategoryData {
  id: string;
  title: string;
  image: string;
  alt: string;
}

interface CategoryCardProps {
  category: CategoryData;
  onClick?: (categoryId: string) => void;
  index: number;
}

const CategoryCard: React.FC<CategoryCardProps> = React.memo(({ category, onClick, index }) => {
  const handleClick = () => onClick?.(category.id);

  return (
    <motion.div
      className={styles.categoryCard}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label={`Browse ${category.title.toLowerCase()} diagrams`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <div className={styles.imageContainer}>
        <img
          src={category.image}
          alt={category.alt}
          className={styles.categoryImage}
          loading="lazy"
        />
      </div>
      <h3 className={styles.categoryTitle}>{category.title}</h3>
    </motion.div>
  );
});

CategoryCard.displayName = "CategoryCard";

const HomePage: React.FC = () => {
  const categories: CategoryData[] = React.useMemo(
    () => [
      { id: "physiology", title: "PHYSIOLOGY", image: physiologyImg, alt: "Physiology diagram" },
      { id: "dermatology", title: "DERMATOLOGY", image: dermatologyImg, alt: "Dermatology diagrams" },
      { id: "medicine", title: "MEDICINE", image: medicineImg, alt: "General medicine" },
      { id: "surgery", title: "SURGERY", image: surgeryImg, alt: "Surgical procedures" },
      { id: "pharmacology", title: "PHARMACOLOGY", image: pharmacologyImg, alt: "Pharmacology drugs" },
      { id: "differentials", title: "DIFFERENTIALS", image: differentialsImg, alt: "Differential diagnosis" },
      { id: "radiology", title: "RADIOLOGY", image: radiologyImg, alt: "Radiology diagrams" },
      { id: "dentistry", title: "DENTISTRY", image: dentistryImg, alt: "Dentistry diagrams" },
      { id: "toxicology", title: "TOXICOLOGY", image: toxicologyImg, alt: "Forensic medicine & toxicology" },
      { id: "anaesthesia", title: "ANAESTHESIA", image: anaesthesiaImg, alt: "Anaesthesia techniques" },
      { id: "opthalmology", title: "OPHTHALMOLOGY", image: opthalmologyImg, alt: "Basic Ophthalmology" },
    ],
    []
  );

  const handleCategoryClick = React.useCallback((categoryId: string) => {
    console.log(`Navigating to ${categoryId} category`);
    // Example: navigate(`/diagrams/${categoryId}`);
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <motion.h1
          className={styles.headerTitle}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Browse Our Diagrams
        </motion.h1>
      </header>

      <main className={styles.main}>
        <motion.div
          className={styles.grid}
          role="grid"
          initial="hidden"
          animate="visible"
        >
          {categories.map((category, index) => (
            <CategoryCard
              key={category.id}
              category={category}
              onClick={handleCategoryClick}
              index={index}
            />
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default HomePage;


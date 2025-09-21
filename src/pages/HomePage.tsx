import React from 'react';
import styles from './HomePage.module.css';

interface ProductItem {
  id: number;
  image: string;
  title: string;
  price?: string;
  originalPrice?: string;
  rating?: number;
  reviews?: number;
}

const HomePage: React.FC = () => {
  const productSections = [
    {
      title: "Deals and Promotions",
      subtitle: "Shop Fashion for Kids",
      items: [
        { id: 1, image: "/api/placeholder/200/200", title: "Kids Fashion Item 1" },
        { id: 2, image: "/api/placeholder/200/200", title: "Kids Fashion Item 2" },
        { id: 3, image: "/api/placeholder/200/200", title: "Kids Fashion Item 3" },
        { id: 4, image: "/api/placeholder/200/200", title: "Kids Fashion Item 4" },
      ]
    },
    {
      title: "Shop for your Home Essentials",
      items: [
        { id: 5, image: "/api/placeholder/200/200", title: "Home Essential 1" },
        { id: 6, image: "/api/placeholder/200/200", title: "Home Essential 2" },
        { id: 7, image: "/api/placeholder/200/200", title: "Home Essential 3" },
        { id: 8, image: "/api/placeholder/200/200", title: "Home Essential 4" },
      ]
    },
    // ... keep your other sections here ...
  ];

  const renderProductGrid = (items: ProductItem[]) => (
    <div className={styles.productGrid}>
      {items.map((item) => (
        <div key={item.id} className={styles.productItem}>
          <div className={styles.productImageContainer}>
            <img src={item.image} alt={item.title} className={styles.productImage} />
          </div>
          <div className={styles.productInfo}>
            <h4 className={styles.productTitle}>{item.title}</h4>
            {item.price && (
              <div className={styles.priceContainer}>
                <span className={styles.price}>{item.price}</span>
                {item.originalPrice && (
                  <span className={styles.originalPrice}>{item.originalPrice}</span>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className={styles.homepage}>
      {/* Main Content (only product sections, no global header/hero/footer) */}
      <main className={styles.mainContent}>
        <div className={styles.productSections}>
          {productSections.map((section, index) => (
            <div key={index} className={styles.productSection}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>{section.title}</h2>
                {section.subtitle && (
                  <p className={styles.sectionSubtitle}>{section.subtitle}</p>
                )}
                <a href="#" className={styles.seeMore}>See more</a>
              </div>
              {renderProductGrid(section.items)}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;


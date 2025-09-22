// src/pages/NotFound.tsx
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>404</h1>
      <p className={styles.subheading}>Page Not Found</p>
      <p className={styles.description}>
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>
      <a href="/" className={styles.homeLink}>
        Go Back Home
      </a>
    </div>
  );
};

export default NotFound;

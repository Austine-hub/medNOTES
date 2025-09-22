import React from 'react';
import styles from './HomePage.module.css';

// Icon props interface for better type safety
interface IconProps {
  className?: string;
  'aria-label'?: string;
}

// SVG Icons as React components with proper accessibility
const PhysiologyIcon: React.FC<IconProps> = ({ className, 'aria-label': ariaLabel }) => (
  <svg 
    width="48" 
    height="48" 
    viewBox="0 0 48 48" 
    fill="none"
    className={className}
    role="img"
    aria-label={ariaLabel || "Physiology diagram"}
  >
    <path 
      d="M12 8L20 16L28 8L36 16V40H12V8Z" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path 
      d="M20 16V24M28 16V24" 
      stroke="currentColor" 
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const InterpretationIcon: React.FC<IconProps> = ({ className, 'aria-label': ariaLabel }) => (
  <svg 
    width="48" 
    height="48" 
    viewBox="0 0 48 48" 
    fill="none"
    className={className}
    role="img"
    aria-label={ariaLabel || "Interpretation diagram"}
  >
    <ellipse 
      cx="24" 
      cy="32" 
      rx="12" 
      ry="8" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      fill="none"
      strokeLinecap="round"
    />
    <circle 
      cx="24" 
      cy="16" 
      r="6" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      fill="none"
    />
    <circle cx="20" cy="12" r="1.5" fill="currentColor"/>
    <circle cx="24" cy="10" r="1.5" fill="currentColor"/>
    <circle cx="28" cy="12" r="1.5" fill="currentColor"/>
    <path 
      d="M24 22V26" 
      stroke="currentColor" 
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const MedicineIcon: React.FC<IconProps> = ({ className, 'aria-label': ariaLabel }) => (
  <svg 
    width="48" 
    height="48" 
    viewBox="0 0 48 48" 
    fill="none"
    className={className}
    role="img"
    aria-label={ariaLabel || "Medicine diagram"}
  >
    <path 
      d="M8 20C8 16 12 12 16 12H32C36 12 40 16 40 20V28C40 32 36 36 32 36H16C12 36 8 32 8 28V20Z" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path 
      d="M16 20V28M32 20V28" 
      stroke="currentColor" 
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="20" cy="24" r="2" fill="currentColor"/>
    <circle cx="28" cy="24" r="2" fill="currentColor"/>
  </svg>
);

const SurgeryIcon: React.FC<IconProps> = ({ className, 'aria-label': ariaLabel }) => (
  <svg 
    width="48" 
    height="48" 
    viewBox="0 0 48 48" 
    fill="none"
    className={className}
    role="img"
    aria-label={ariaLabel || "Surgery diagram"}
  >
    <path 
      d="M8 36L24 20L32 28L40 20L36 16L28 24L20 16L12 24L8 36Z" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path 
      d="M12 12L16 8L20 12L16 16L12 12Z" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PharmacologyIcon: React.FC<IconProps> = ({ className, 'aria-label': ariaLabel }) => (
  <svg 
    width="48" 
    height="48" 
    viewBox="0 0 48 48" 
    fill="none"
    className={className}
    role="img"
    aria-label={ariaLabel || "Pharmacology diagram"}
  >
    <rect 
      x="16" 
      y="12" 
      width="16" 
      height="24" 
      rx="2" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path 
      d="M20 8V12M28 8V12" 
      stroke="currentColor" 
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <rect x="18" y="16" width="4" height="8" fill="currentColor" rx="1"/>
    <rect x="26" y="16" width="4" height="8" fill="currentColor" rx="1"/>
    <rect x="22" y="20" width="4" height="4" fill="currentColor" rx="1"/>
    <path 
      d="M24 28V32" 
      stroke="currentColor" 
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const DifferentialsIcon: React.FC<IconProps> = ({ className, 'aria-label': ariaLabel }) => (
  <svg 
    width="48" 
    height="48" 
    viewBox="0 0 48 48" 
    fill="none"
    className={className}
    role="img"
    aria-label={ariaLabel || "Differentials diagram"}
  >
    <circle 
      cx="24" 
      cy="24" 
      r="12" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      fill="none"
    />
    <path 
      d="M16 16L20 20M28 20L32 16M16 32L20 28M28 28L32 32" 
      stroke="currentColor" 
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="24" cy="24" r="3" fill="currentColor"/>
  </svg>
);

// Category data type
interface CategoryData {
  id: string;
  icon: React.ComponentType<IconProps>;
  title: string;
  ariaLabel: string;
}

// Category card component props
interface CategoryCardProps {
  category: CategoryData;
  onClick?: (categoryId: string) => void;
}

// Memoized category card component for performance
const CategoryCard: React.FC<CategoryCardProps> = React.memo(({ category, onClick }) => {
  const { id, icon: Icon, title, ariaLabel } = category;
  
  const handleClick = () => {
    onClick?.(id);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <div 
      className={styles.categoryCard}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Browse ${title.toLowerCase()} diagrams`}
    >
      <div className={styles.iconContainer}>
        <Icon className={styles.icon} aria-label={ariaLabel} />
      </div>
      <h3 className={styles.categoryTitle}>{title}</h3>
    </div>
  );
});

CategoryCard.displayName = 'CategoryCard';

// Main HomePage component
const HomePage: React.FC = () => {
  // Static category data - moved outside component to prevent recreation
  const categories: CategoryData[] = React.useMemo(() => [
    { 
      id: 'physiology', 
      icon: PhysiologyIcon, 
      title: 'PHYSIOLOGY',
      ariaLabel: 'Human body physiology diagrams'
    },
    { 
      id: 'interpretation', 
      icon: InterpretationIcon, 
      title: 'INTERPRETATION',
      ariaLabel: 'Medical test interpretation diagrams'
    },
    { 
      id: 'medicine', 
      icon: MedicineIcon, 
      title: 'MEDICINE',
      ariaLabel: 'General medicine diagrams'
    },
    { 
      id: 'surgery', 
      icon: SurgeryIcon, 
      title: 'SURGERY',
      ariaLabel: 'Surgical procedure diagrams'
    },
    { 
      id: 'pharmacology', 
      icon: PharmacologyIcon, 
      title: 'PHARMACOLOGY',
      ariaLabel: 'Drug and medication diagrams'
    },
    { 
      id: 'differentials', 
      icon: DifferentialsIcon, 
      title: 'DIFFERENTIALS',
      ariaLabel: 'Differential diagnosis diagrams'
    },
  ], []);

  const handleCategoryClick = React.useCallback((categoryId: string) => {
    // Replace with actual navigation logic
    console.log(`Navigating to ${categoryId} category`);
    
    // Example: router.push(`/diagrams/${categoryId}`);
    // Example: navigate(`/diagrams/${categoryId}`);
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>
          Browse our diagrams
        </h1>
      </header>
      
      <main className={styles.main}>
        <div className={styles.grid} role="grid">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onClick={handleCategoryClick}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
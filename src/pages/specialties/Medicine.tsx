// src/pages/Orthopaedics.tsx
import React, { useState, useMemo } from "react";
import styles from "./Orthopaedics.module.css";
import { Search, Download, X } from "lucide-react";
import { pharmaDiagrams, Diagram } from "../../data/pharmaDiagrams";

interface PharmacologyProps {
  diagrams?: Diagram[];
}

const ITEMS_PER_PAGE = 9;

const Medicine: React.FC<PharmacologyProps> = ({ diagrams = pharmaDiagrams }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [modalDiagram, setModalDiagram] = useState<Diagram | null>(null);

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return diagrams;
    return diagrams.filter((d) => d.title.toLowerCase().includes(q));
  }, [searchQuery, diagrams]);

  const pageCount = Math.ceil(filtered.length / ITEMS_PER_PAGE) || 1;

  const pageItems = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const onPageChange = (page: number) => {
    if (page < 1 || page > pageCount) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Open modal
  const handlePreview = (diagram: Diagram) => {
    setModalDiagram(diagram);
  };

  // Close modal
  const closeModal = () => setModalDiagram(null);

  // Handle download
  const handleDownload = (link: string) => {
    const a = document.createElement("a");
    a.href = link;
    a.download = link.split("/").pop() || "diagram.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className={styles.pharmacologyWrap}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <a href="/">Home</a>
        <span className={styles.chevron}>›</span>
        <span>Medicine</span>
      </div>

      {/* Title + intro */}
      <h1 className={styles.title}>Pharmacology</h1>
      <p className={styles.lead}>
        Browse our catalogue of free medical pharmacology diagrams. Click a card
        to preview and download the high-resolution diagrams.
      </p>

      {/* Search box */}
      <div className={styles.searchContainer}>
        <label htmlFor="pharma-search" className={styles.hiddenLabel}>
          Search pharmacology diagrams
        </label>
        <input
          id="pharma-search"
          type="search"
          placeholder="Search pharmacology..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1);
          }}
          className={styles.searchInput}
        />
      </div>

      {/* Grid of cards */}
      {pageItems.length > 0 ? (
        <div className={styles.grid}>
          {pageItems.map((item) => (
            <div key={item.id} className={styles.card} tabIndex={0}>
              <div className={styles.cardImageWrapper}>
                <img
                  src={item.image}
                  alt={`Diagram: ${item.title}`}
                  className={styles.cardImage}
                />
                {/* Overlay */}
                <div className={styles.overlay}>
                  <button
                    type="button"
                    className={styles.iconBtn}
                    aria-label={`Preview ${item.title}`}
                    onClick={() => handlePreview(item)}
                  >
                    <Search size={20} />
                  </button>
                  <button
                    type="button"
                    className={styles.iconBtn}
                    aria-label={`Download ${item.title}`}
                    onClick={() => handleDownload(item.link)}
                  >
                    <Download size={20} />
                  </button>
                </div>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.category}>Pharmacology</div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className={styles.noResults}>
          No pharmacology diagrams found. Try a different search term.
        </p>
      )}

      {/* Pagination */}
      {pageCount > 1 && (
        <div className={styles.pagination}>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={styles.pageButton}
          >
            Prev
          </button>
          <div className={styles.pageNumbers}>
            {Array.from({ length: pageCount }, (_, i) => (
              <button
                key={i}
                onClick={() => onPageChange(i + 1)}
                className={`${styles.pageNumber} ${
                  currentPage === i + 1 ? styles.current : ""
                }`}
                aria-current={currentPage === i + 1 ? "page" : undefined}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === pageCount}
            className={styles.pageButton}
          >
            Next
          </button>
        </div>
      )}

      {/* Modal */}
      {modalDiagram && (
        <div className={styles.modalBackdrop} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.modalClose} onClick={closeModal}>
              <X size={24} />
            </button>
            <img
              src={modalDiagram.image}
              alt={modalDiagram.title}
              className={styles.modalImage}
            />
            <h2 className={styles.modalTitle}>{modalDiagram.title}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Medicine;
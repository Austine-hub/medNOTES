// src/data/pharmaDiagrams.ts
export interface Diagram {
  id: number;
  title: string;
  image: string;
  link: string;
}

// ✅ Titles in desired order (will match automatically with images)
const diagramTitles = [
  "Mechanism of Diabetic Drugs",
  "Antiepileptic Drugs 1",
  "NSAIDs",
  "Drugs for TB",
  "Antiepileptic Drugs 2",
  "Antiepileptic Drugs 3",
  "Drugs for Parkinson's",
  "Hypertensive Drugs 1",
  "Hypertensive Drugs 2",
  "Drugs for Alzheimer",
];

// ✅ Use Vite's glob to automatically import all PNGs
const images = import.meta.glob("../assets/photos/*.png", { eager: true, import: "default" }) as Record<string, string>;

// ✅ Sort images alphabetically by filename
const sortedImageFiles = Object.entries(images)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([_, img]) => img);

// ✅ Create base diagrams array, matching images to titles
const baseDiagrams: Omit<Diagram, "id">[] = sortedImageFiles.map((img, idx) => ({
  title: diagramTitles[idx] ?? `Diagram ${idx + 1}`, // fallback title if missing
  image: img,
  link: "#", // placeholder for PDF
}));

// ✅ Final array with auto-generated IDs
export const pharmaDiagrams: Diagram[] = baseDiagrams.map((diagram, index) => ({
  id: index + 1,
  ...diagram,
}));

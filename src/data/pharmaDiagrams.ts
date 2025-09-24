// src/data/pharmaDiagrams.ts
export interface Diagram {
  id: number;
  title: string;
  image: string;
  link: string;
}

// ✅ Define titles in the order you want
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
const images = import.meta.glob("../assets/photos/*.png", { eager: true, import: "default" });

// ✅ Match images to titles manually (order-sensitive)
const imageFiles = [
  images["../assets/photos/diabetic-drugs.png"],
  images["../assets/photos/antiepileptic-drugs-1.png"],
  images["../assets/photos/nsaids.png"],
  images["../assets/photos/drugs-for-tb.png"],
  images["../assets/photos/antiepileptic-drugs-2.png"],
  images["../assets/photos/antiepileptic-drugs-3.png"],
  images["../assets/photos/drugs-for-parkinsons.png"],
  images["../assets/photos/hypertensive-drugs-1.png"],
  images["../assets/photos/hypertensive-drugs-2.png"],
  images["../assets/photos/drugs-for-alzheimer.png"],
];

// ✅ Base list without IDs
const baseDiagrams: Omit<Diagram, "id">[] = diagramTitles.map((title, index) => ({
  title,
  image: imageFiles[index],
  link: "#", // placeholder for PDF
}));

// ✅ Final array with auto-generated IDs
export const pharmaDiagrams: Diagram[] = baseDiagrams.map((diagram, index) => ({
  id: index + 1,
  ...diagram,
}));

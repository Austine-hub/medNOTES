// src/data/pharmaDiagrams.ts
import diabeticDrugs from "../assets/photos/diabetic-drugs.png";
import antiepileptic1 from "../assets/photos/antiepileptic-drugs-1.png";
import antiepileptic2 from "../assets/photos/antiepileptic-drugs-2.png";
import antiepileptic3 from "../assets/photos/antiepileptic-drugs-3.png";
import nsaids from "../assets/photos/nsaids.png";
import drugsTb from "../assets/photos/drugs-for-tb.png";
import drugsParkinsons from "../assets/photos/drugs-for-parkinsons.png";
import hypertensive1 from "../assets/photos/hypertensive-drugs-1.png";
import hypertensive2 from "../assets/photos/hypertensive-drugs-2.png";
import alzheimer from "../assets/photos/drugs-for-alzheimer.png";

export interface Diagram {
  id: number;
  title: string;
  image: string;
  link: string;
}

// ✅ Base list without IDs
const baseDiagrams: Omit<Diagram, "id">[] = [
  {
    title: "Mechanism of Diabetic Drugs",
    image: diabeticDrugs,
    link: "/downloads/diabetic-drugs.pdf",
  },
  {
    title: "Antiepileptic Drugs 1",
    image: antiepileptic1,
    link: "/downloads/antiepileptic-drugs-1.pdf",
  },
  {
    title: "NSAIDs",
    image: nsaids,
    link: "/downloads/nsaids.pdf",
  },
  {
    title: "Drugs for TB",
    image: drugsTb,
    link: "/downloads/drugs-for-tb.pdf",
  },
  {
    title: "Antiepileptic Drugs 2",
    image: antiepileptic2,
    link: "/downloads/antiepileptic-drugs-2.pdf",
  },
  {
    title: "Antiepileptic Drugs 3",
    image: antiepileptic3,
    link: "/downloads/antiepileptic-drugs-3.pdf",
  },
  {
    title: "Drugs for Parkinson's",
    image: drugsParkinsons,
    link: "/downloads/drugs-for-parkinsons.pdf",
  },
  {
    title: "Hypertensive Drugs 1",
    image: hypertensive1,
    link: "/downloads/hypertensive-drugs-1.pdf",
  },
  {
    title: "Hypertensive Drugs 2",
    image: hypertensive2,
    link: "/downloads/hypertensive-drugs-2.pdf",
  },
  {
    title: "Drugs for Alzheimer",
    image: alzheimer,
    link: "/downloads/drugs-for-alzheimer.pdf",
  },
];

// ✅ Final array with auto-generated IDs
export const pharmaDiagrams: Diagram[] = baseDiagrams.map((diagram, index) => ({
  id: index + 1,
  ...diagram,
}));
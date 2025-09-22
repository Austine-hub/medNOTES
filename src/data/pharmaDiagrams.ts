// src/data/pharmaDiagrams.ts
import DiabeticDrugs from "../assets/photos/Diabetic-drugs.png";
import Antiepileptic1 from "../assets/photos/Antiepileptic-drugs-1.png";
import Antiepileptic2 from "../assets/photos/Antiepileptic-drugs-2.png";
import Antiepileptic3 from "../assets/photos/Antiepileptic-drugs-3.png";
import NSAIDS from "../assets/photos/NSAIDS.png";
import DrugsTB from "../assets/photos/Drugs-for-TB.png";
import DrugsParkinsons from "../assets/photos/Drugs-for-Parkinsons.png";
import Hypertensive1 from "../assets/photos/Hypertensive-drugs-1.png";
import Hypertensive2 from "../assets/photos/Hypertensive-drugs-2.png";
import Hypertensive3 from "../assets/photos/Drugs-for-Alzheimer.png";

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
    image: DiabeticDrugs,
    link: "/downloads/Diabetic-drugs.pdf",
  },
  {
    title: "Antiepileptic Drugs 1",
    image: Antiepileptic1,
    link: "/downloads/Antiepileptic-drugs-1.pdf",
  },
  {
    title: "NSAIDs",
    image: NSAIDS,
    link: "/downloads/NSAIDS.pdf",
  },
  {
    title: "Drugs for TB",
    image: DrugsTB,
    link: "/downloads/Drugs-for-TB.pdf",
  },
  {
    title: "Antiepileptic Drugs 2",
    image: Antiepileptic2,
    link: "/downloads/Antiepileptic-drugs-2.pdf",
  },
  {
    title: "Antiepileptic Drugs 3",
    image: Antiepileptic3,
    link: "/downloads/Antiepileptic-drugs-3.pdf",
  },
  {
    title: "Drugs for Parkinson's",
    image: DrugsParkinsons,
    link: "/downloads/Drugs-for-Parkinsons.pdf",
  },
  {
    title: "Hypertensive Drugs 1",
    image: Hypertensive1,
    link: "/downloads/Hypertensive-drugs-1.pdf",
  },
  {
    title: "Hypertensive Drugs 2",
    image: Hypertensive2,
    link: "/downloads/Hypertensive-drugs-2.pdf",
  },
  {
    title: "Hypertensive Drugs 3",
    image: Hypertensive3,
    link: "/downloads/Hypertensive-drugs-3.pdf",
  },
];

// ✅ Final array with auto-generated IDs
export const pharmaDiagrams: Diagram[] = baseDiagrams.map((diagram, index) => ({
  id: index + 1,
  ...diagram,
}));

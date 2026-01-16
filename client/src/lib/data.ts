import { Github, Twitter, Linkedin, Mail, MapPin, GraduationCap, Building2, Globe } from "lucide-react";

export interface Publication {
  title: string;
  authors: string[];
  conference: string;
  year: number;
  pdfUrl?: string;
  codeUrl?: string;
  award?: string;
}

export interface Profile {
  name: string;
  chineseName: string;
  title: string;
  university: string;
  email: string;
  googleScholar: string;
  github: string;
  location: string;
  bio: string;
  avatar: string;
}

export const profile: Profile = {
  name: "Lei Sang",
  chineseName: "桑磊",
  title: "Associate Professor",
  university: "Shandong University",
  email: "sang@sdu.edu.cn",
  googleScholar: "https://scholar.google.com/citations?user=k1z4nF8AAAAJ&hl=en",
  github: "https://github.com/leisangcs",
  location: "Jinan, China",
  bio: "I am currently an Associate Professor at the School of Software, Shandong University. I received my Ph.D. degree from Shandong University in 2022, under the supervision of Prof. Xuemeng Song and Prof. Liqiang Nie. My research interests include Data Mining, Information Retrieval, and Recommender Systems.",
  avatar: "/images/avatar.jpg"
};

export const publications: Publication[] = [
  {
    title: "Explainable Session-based Recommendation with Dual-Process Decision Modeling",
    authors: ["Lei Sang", "Xuemeng Song", "Liqiang Nie", "et al."],
    conference: "ACM TOIS",
    year: 2025
  },
  {
    title: "Knowledge-Enhanced Hierarchical Graph Transformer for Session-based Recommendation",
    authors: ["Lei Sang", "Xuemeng Song", "Liqiang Nie", "et al."],
    conference: "AAAI",
    year: 2024
  },
  {
    title: "Personalized Item Compatibility Modeling via Complementary Policy Learning",
    authors: ["Lei Sang", "Xuemeng Song", "Liqiang Nie", "et al."],
    conference: "ACM MM",
    year: 2023
  }
];

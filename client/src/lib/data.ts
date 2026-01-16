import { Github, Twitter, Linkedin, Mail, MapPin, GraduationCap, Building2, Globe } from "lucide-react";

export interface Publication {
  id?: string; // 兼容 Home.tsx 的 key={pub.id}
  title: string;
  authors: string[];
  venue: string; // Home.tsx 用的是 venue 而不是 conference
  year: number;
  citations?: number; // Home.tsx 用到了 citations
  tags?: string[]; // Home.tsx 用到了 tags
  pdfUrl?: string;
  codeUrl?: string;
}

export interface Profile {
  name: string;
  chineseName: string;
  title: string;
  affiliation: string; // Home.tsx 用的是 affiliation 而不是 university
  email: string;
  social?: { // Home.tsx 用的是 social.googleScholar
    googleScholar?: string;
    github?: string;
  };
  location: string;
  bio: string;
  avatar: string;
  researchInterests: string[]; // 必须加上这个！
}

export const profile: Profile = {
  name: "Lei Sang",
  chineseName: "桑磊",
  title: "Associate Professor",
  affiliation: "Shandong University", // 对应 Home.tsx
  email: "sang@sdu.edu.cn",
  social: {
    googleScholar: "https://scholar.google.com/citations?user=k1z4nF8AAAAJ&hl=en",
    github: "https://github.com/leisangcs",
  },
  location: "Jinan, China",
  bio: "I am currently an Associate Professor at the School of Software, Shandong University. I received my Ph.D. degree from Shandong University in 2022, under the supervision of Prof. Xuemeng Song and Prof. Liqiang Nie. My research interests include Data Mining, Information Retrieval, and Recommender Systems.",
  avatar: "/images/avatar.jpg",
  researchInterests: [ // 补上这个字段
    "Data Mining",
    "Information Retrieval",
    "Recommender Systems",
    "Multimedia Computing"
  ]
};

export const publications: Publication[] = [
  {
    id: "1",
    title: "Explainable Session-based Recommendation with Dual-Process Decision Modeling",
    authors: ["Lei Sang", "Xuemeng Song", "Liqiang Nie", "et al."],
    venue: "ACM TOIS",
    year: 2025,
    tags: ["CCF-A"]
  },
  {
    id: "2",
    title: "Knowledge-Enhanced Hierarchical Graph Transformer for Session-based Recommendation",
    authors: ["Lei Sang", "Xuemeng Song", "Liqiang Nie", "et al."],
    venue: "AAAI",
    year: 2024,
    tags: ["CCF-A"]
  },
  {
    id: "3",
    title: "Personalized Item Compatibility Modeling via Complementary Policy Learning",
    authors: ["Lei Sang", "Xuemeng Song", "Liqiang Nie", "et al."],
    venue: "ACM MM",
    year: 2023,
    tags: ["CCF-A"]
  }
];

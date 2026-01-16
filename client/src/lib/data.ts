import { Github, Twitter, Linkedin, Mail, MapPin, GraduationCap, Building2, Globe } from "lucide-react";

export interface Publication {
  id?: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  citations?: number;
  tags?: string[];
  pdfUrl?: string;
  codeUrl?: string;
}

export interface Profile {
  name: string;
  chineseName: string;
  title: string;
  affiliation: string;
  email: string;
  social?: {
    googleScholar?: string;
    github?: string;
  };
  location: string;
  bio: string;
  avatar: string;
  researchInterests: string[];
}

export const profile: Profile = {
  name: "Lei Sang",
  chineseName: "桑磊",
  title: "Associate Professor",
  affiliation: "School of Computer Science and Technology, Anhui University",
  email: "sanglei@ahu.edu.cn",
  social: {
    googleScholar: "https://scholar.google.com/citations?user=k1z4nF8AAAAJ&hl=en",
    github: "https://github.com/leisangcs",
  },
  location: "Hefei, China",
  bio: "Lei Sang is currently an Associate Professor at the School of Computer Science and Technology, Anhui University. He received his Ph.D. degree from the University of Technology Sydney in 2021. His research focuses on Data Mining and Machine Learning, with a particular emphasis on Recommender Systems and Graph Learning. He has published over 20 papers in top-tier international journals and conferences, including TKDE, TOIS, SIGIR, KDD, AAAI, and ACM MM. He serves as a reviewer for several prestigious journals and conferences. Currently, he presides over the National Natural Science Foundation of China (NSFC ) and the Anhui Provincial Natural Science Foundation.\n\n桑磊，安徽大学计算机科学与技术学院副教授。2021年博士毕业于悉尼科技大学。主要研究方向包括数据挖掘、推荐系统和图学习。在 TKDE, TOIS, SIGIR, KDD, AAAI, ACM MM 等顶级国际期刊和会议上发表论文20余篇。主持国家自然科学基金青年项目和安徽省自然科学基金项目。",
  avatar: "/images/avatar_placeholder.jpg",
  researchInterests: [
    "Data Mining",
    "Recommender Systems",
    "Graph Neural Networks"
  ]
};

export const publications: Publication[] = [
  {
    id: "1",
    title: "Intent-guided Heterogeneous Graph Contrastive Learning for Recommendation",
    authors: ["Lei Sang", "Yu Wang", "Yi Zhang", "Yiwen Zhang", "Xindong Wu"],
    venue: "IEEE Transactions on Knowledge and Data Engineering (TKDE)",
    year: 2025,
    citations: 27,
    tags: ["CCF A"]
  },
  {
    id: "2",
    title: "Simple Yet Effective Heterogeneous Graph Contrastive Learning for Recommendation",
    authors: ["Lei Sang", "Haiyan Zhang", "Yu Wang", "Yiwen Zhang"],
    venue: "IEEE Transactions on Consumer Electronics",
    year: 2025
  },
  {
    id: "3",
    title: "AdaGIN: Adaptive Graph Interaction Network for Click-Through Rate Prediction",
    authors: ["Lei Sang", "Honghao Li", "Yiwen Zhang", "Yi Zhang", "Yun Yang"],
    venue: "ACM Transactions on Information Systems (TOIS)",
    year: 2025,
    citations: 16,
    tags: ["CCF A"]
  }
];

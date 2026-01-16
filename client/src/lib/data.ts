export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  citations?: number;
  link?: string;
  tags?: string[];
}

export interface Profile {
  name: string;
  chineseName: string;
  title: string;
  affiliation: string;
  email: string;
  researchInterests: string[];
  bio: string;
  education: {
    degree: string;
    school: string;
    year: string;
  }[];
  social?: {
    googleScholar?: string;
    github?: string;
    linkedin?: string;
  };
}

export const profile: Profile = {
  name: "Lei Sang",
  chineseName: "桑磊",
  title: "Associate Professor",
  affiliation: "School of Computer Science and Technology, Anhui University",
  email: "sanglei@ahu.edu.cn",
  researchInterests: [
    "Data Mining",
    "Recommender Systems",
    "Graph Neural Networks"
  ],
  bio: "Lei Sang received his Ph.D. degree from the University of Technology Sydney in 2021. He is currently an Associate Professor at the School of Computer Science and Technology, Anhui University. His research interests include data mining, recommender systems, and graph data analysis. He has published multiple papers in top-tier international journals and conferences. He presides over one National Natural Science Foundation of China project and one Anhui Provincial Natural Science Foundation project.",
  education: [
    {
      degree: "Ph.D. in Computer Science",
      school: "University of Technology Sydney",
      year: "2021"
    },
    {
      degree: "Master/Bachelor",
      school: "Anhui University",
      year: "Previous"
    }
  ],
  social: {
    googleScholar: "https://scholar.google.com/citations?user=WkbOdHQAAAAJ&hl=en"
  }
};

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  citations?: number;
  link?: string;
  tags?: string[];
}

export interface Profile {
  name: string;
  chineseName: string;
  title: string;
  affiliation: string;
  email: string;
  researchInterests: string[];
  bio: string;
  education: {
    degree: string;
    school: string;
    year: string;
  }[];
  social?: {
    googleScholar?: string;
    github?: string;
    linkedin?: string;
  };
}

export const profile: Profile = {
  name: "Lei Sang",
  chineseName: "桑磊",
  title: "Associate Professor",
  affiliation: "School of Computer Science and Technology, Anhui University",
  email: "sanglei@ahu.edu.cn",
  researchInterests: [
    "Recommender Systems (Trustworthy, Denoising, Debiasing)",
    "Graph Learning (Graph Neural Networks, Contrastive Learning)",
    "Data Mining (CTR Prediction, User Intent Modeling)"
  ],
  bio: "Lei Sang is currently an Associate Professor at the School of Computer Science and Technology, Anhui University. He received his Ph.D. degree from the University of Technology Sydney in 2021. His research focuses on **Data Mining** and **Machine Learning**, with a particular emphasis on **Recommender Systems** and **Graph Learning**. He has published over 20 papers in top-tier international journals and conferences, including **TKDE, TOIS, SIGIR, KDD, AAAI, and ACM MM**. He serves as a reviewer for several prestigious journals and conferences. Currently, he presides over the National Natural Science Foundation of China (NSFC) and the Anhui Provincial Natural Science Foundation.",
  education: [
    {
      degree: "Ph.D. in Computer Science",
      school: "University of Technology Sydney",
      year: "2021"
    },
    {
      degree: "Master/Bachelor",
      school: "Anhui University",
      year: "Previous"
    }
  ],
  social: {
    googleScholar: "https://scholar.google.com/citations?user=WkbOdHQAAAAJ&hl=en"
  }
};

export const publications: Publication[] = [
  {
    id: "li-fcn-2026",
    title: "FCN: Fusing Exponential and Linear Cross Network for Click-Through Rate Prediction",
    authors: ["Honghao Li", "Yiwen Zhang", "Yi Zhang", "Hanwei Li", "Lei Sang", "Jieming Zhu"],
    venue: "Proceedings of the ACM SIGKDD International Conference on Knowledge Discovery and Data Mining (KDD)",
    year: 2026,
    tags: ["CTR Prediction", "KDD"],
  },

  {
    id: "jiang-cafu-2026",
    title: "CAFU: Constrained Alignment and Filtered Uniformity for Denoising Recommendation",
    authors: ["Xinzhe Jiang", "Lei Sang", "Yi Zhang", "Kaibin Wang", "Yiwen Zhang"],
    venue: "Proceedings of the AAAI Conference on Artificial Intelligence (AAAI)",
    year: 2026,
    tags: ["Recommendation", "AAAI"],
  },
  {
    id: "fang-revisiting-2026",
    title: "Revisiting Contrastive Learning in Collaborative Filtering via Parallel Graph Filters",
    authors: ["Kai Fang", "Yu Zhang", "Kaibin Wang", "Lei Sang", "Yiwen Zhang"],
    venue: "Proceedings of the AAAI Conference on Artificial Intelligence (AAAI)",
    year: 2026,
    tags: ["Recommendation", "Graph Learning", "AAAI"],
  },

  {
    id: "zhou-unsupervised-2026",
    title: "Unsupervised heterogeneous group streaming feature selection",
    authors: ["Peng Zhou", "Qianzhen Chen", "Lei Sang", "Shu Zhao", "Xindong Wu"],
    venue: "Pattern Recognition",
    year: 2026,
  },
  {
    id: "sang-heterogeneous-2026",
    title: "Heterogeneous Adaptive Preference Learning for Recommendation",
    authors: ["Lei Sang", "Weichen Fei", "Yi Zhang", "Yuee Huang", "Yiwen Zhang"],
    venue: "ACM Transactions on Recommender Systems",
    year: 2026,
    tags: ["Recommendation"],
  },
  {
    id: "sang-masked-2025",
    title: "Masked Heterogeneous Graph Attention Network for robust recommendation",
    authors: ["Lei Sang", "Xingwang Li", "Yu Wang", "Yi Zhang", "Shun Lian", "Yiwen Zhang"],
    venue: "Applied Soft Computing",
    year: 2025,
    tags: ["Security/Robustness", "Recommendation", "Graph Learning"],
  },
  {
    id: "sang-towards-2025",
    title: "Towards similar alignment and unique uniformity in collaborative filtering",
    authors: ["Lei Sang", "Yu Zhang", "Yi Zhang", "Honghao Li", "Yiwen Zhang"],
    venue: "Expert Systems with Applications",
    year: 2025,
    tags: ["Recommendation"],
  },
  {
    id: "sang-bi-directional-2025",
    title: "Bi-Directional Transfer Graph Contrastive Learning for Social Recommendation",
    authors: ["Lei Sang", "Mingyuan Liu", "Yi Zhang", "Yuee Huang", "Yiwen Zhang"],
    venue: "IEEE Transactions on Big Data",
    year: 2025,
    tags: ["Recommendation", "Graph Learning"],
  },
  {
    id: "wang-generative-contrastive-2025",
    title: "Generative-Contrastive Heterogeneous Graph Neural Network",
    authors: ["Yu Wang", "Lei Sang", "Yi Zhang", "Yiwen Zhang", "Xindong Wu"],
    venue: "IEEE Transactions on Big Data",
    year: 2025,
    tags: ["Graph Learning"],
  },
  {
    id: "jiang-revisiting-2025",
    title: "Revisiting Alignment and Uniformity for Recommendation via Discrimination and Reliable Assessment",
    authors: ["Xinzhe Jiang", "Lei Sang", "Shun Lian", "Yi Zhang", "Yiwen Zhang"],
    venue: "IEEE Transactions on Consumer Electronics",
    year: 2025,
    tags: ["Recommendation"],
  },
  {
    id: "sang-simple-2025",
    title: "Simple Yet Effective Heterogeneous Graph Contrastive Learning for Recommendation",
    authors: ["Lei Sang", "Haiyan Zhang", "Yu Wang", "Yiwen Zhang"],
    venue: "IEEE Transactions on Consumer Electronics",
    year: 2025,
    tags: ["Recommendation", "Graph Learning"],
  },
  {
    id: "chen-dual-domain-2025",
    title: "Dual-Domain Collaborative Denoising for Social Recommendation",
    authors: ["Wenjie Chen", "Yi Zhang", "Honghao Li", "Lei Sang", "Yiwen Zhang"],
    venue: "IEEE Transactions on Computational Social Systems",
    year: 2025,
    tags: ["Recommendation"],
  },
  {
    id: "sang-intent-guided-2025",
    title: "Intent-Guided Heterogeneous Graph Contrastive Learning for Recommendation",
    authors: ["Lei Sang", "Yu Wang", "Yi Zhang", "Yiwen Zhang", "Xindong Wu"],
    venue: "IEEE Transactions on Knowledge and Data Engineering",
    year: 2025,
    tags: ["Recommendation", "Graph Learning", "TKDE"],
  },
  {
    id: "sang-adagin:-2025",
    title: "AdaGIN: Adaptive Graph Interaction Network for Click-Through Rate Prediction",
    authors: ["Lei Sang", "Honghao Li", "Yiwen Zhang", "Yi Zhang", "Yun Yang"],
    venue: "ACM Transactions on Information Systems",
    year: 2025,
    tags: ["Graph Learning", "TOIS", "CTR Prediction"],
  },
  {
    id: "li-cetn:-2025",
    title: "CETN: Contrast-enhanced Through Network for Click-Through Rate Prediction",
    authors: ["Honghao Li", "Lei Sang", "Yi Zhang", "Xuyun Zhang", "Yiwen Zhang"],
    venue: "ACM Transactions on Information Systems",
    year: 2025,
    tags: ["TOIS", "CTR Prediction"],
  },
  {
    id: "zhang-simplify-2025",
    title: "Simplify to the Limit! Embedding-Less Graph Collaborative Filtering for Recommender Systems",
    authors: ["Yi Zhang", "Yiwen Zhang", "Lei Sang", "Victor S. Sheng"],
    venue: "ACM Transactions on Information Systems",
    year: 2025,
    tags: ["Recommendation", "Graph Learning", "TOIS"],
  },
  {
    id: "sang-denoising-2025",
    title: "Denoising Heterogeneous Graph Pre-training Framework for Recommendation",
    authors: ["Lei Sang", "Yu Wang", "Yiwen Zhang", "Xindong Wu"],
    venue: "ACM Transactions on Information Systems",
    year: 2025,
    tags: ["Recommendation", "Graph Learning", "TOIS"],
  },
  {
    id: "sang-bottlenecked-2025",
    title: "Bottlenecked Heterogeneous Graph Contrastive Learning for Robust Recommendation",
    authors: ["Lei Sang", "Maohao Huang", "Yu Wang", "Yiwen Zhang", "Xindong Wu"],
    venue: "ACM Transactions on Information Systems",
    year: 2025,
    tags: ["Security/Robustness", "Recommendation", "Graph Learning", "TOIS"],
  },
  {
    id: "li-revisiting-2025",
    title: "Revisiting Feature Interactions from the Perspective of Quadratic Neural Networks for Click-through Rate Prediction",
    authors: ["Honghao Li", "Yiwen Zhang", "Yi Zhang", "Lei Sang", "Jieming Zhu"],
    venue: "Proceedings of the ACM SIGKDD International Conference on Knowledge Discovery and Data Mining (KDD) (2)",
    year: 2025,
    tags: ["KDD", "CTR Prediction"],
  },
  {
    id: "wang-intent-2025",
    title: "Intent Representation Learning with Large Language Model for Recommendation",
    authors: ["Yu Wang", "Lei Sang", "Yi Zhang", "Yiwen Zhang"],
    venue: "Proceedings of the International ACM SIGIR Conference on Research and Development in Information Retrieval (SIGIR)",
    year: 2025,
    tags: ["Recommendation", "NLP", "SIGIR"],
  },
  {
    id: "zhang-unveiling-2025",
    title: "Unveiling Contrastive Learning's Capability of Neighborhood Aggregation for Collaborative Filtering",
    authors: ["Yu Zhang", "Yiwen Zhang", "Yi Zhang", "Lei Sang", "Yun Yang"],
    venue: "Proceedings of the International ACM SIGIR Conference on Research and Development in Information Retrieval (SIGIR)",
    year: 2025,
    tags: ["Recommendation", "SIGIR"],
  },
  {
    id: "wang-intent-2025",
    title: "Intent Alignment between Interaction and Language Spaces for Recommendation",
    authors: ["Yu Wang", "Lei Sang", "Yi Zhang", "Yiwen Zhang"],
    venue: "arXiv preprint",
    year: 2025,
    tags: ["Recommendation"],
  },
  {
    id: "zhang-unveiling-2025",
    title: "Unveiling Contrastive Learning's Capability of Neighborhood Aggregation for Collaborative Filtering",
    authors: ["Yu Zhang", "Yiwen Zhang", "Yi Zhang", "Lei Sang", "Yun Yang"],
    venue: "arXiv preprint",
    year: 2025,
    tags: ["Recommendation"],
  },
  {
    id: "li-quadratic-2025",
    title: "Quadratic Interest Network for Multimodal Click-Through Rate Prediction",
    authors: ["Honghao Li", "Hanwei Li", "Jing Zhang", "Yi Zhang", "Ziniu Yu", "Lei Sang", "Yiwen Zhang"],
    venue: "arXiv preprint",
    year: 2025,
    tags: ["CTR Prediction"],
  },
  {
    id: "li-revisiting-2025",
    title: "Revisiting Feature Interactions from the Perspective of Quadratic Neural Networks for Click-through Rate Prediction",
    authors: ["Honghao Li", "Yiwen Zhang", "Yi Zhang", "Lei Sang", "Jieming Zhu"],
    venue: "arXiv preprint",
    year: 2025,
    tags: ["CTR Prediction"],
  },
  {
    id: "mu-robustness-2025",
    title: "Robustness of Prompting: Enhancing Robustness of Large Language Models Against Prompting Attacks",
    authors: ["Lin Mu", "Guowei Chu", "Li Ni", "Lei Sang", "Zhize Wu", "Peiquan Jin", "Yiwen Zhang"],
    venue: "arXiv preprint",
    year: 2025,
    tags: ["Security/Robustness", "NLP"],
  },
  {
    id: "sang-multi-view-2024",
    title: "Multi-view denoising contrastive learning for bundle recommendation",
    authors: ["Lei Sang", "Yang Hu", "Yi Zhang", "Yiwen Zhang"],
    venue: "Applied Intelligence",
    year: 2024,
    tags: ["Recommendation"],
  },
  {
    id: "wang-privacy-preserving-2024",
    title: "A privacy-preserving framework with multi-modal data for cross-domain recommendation",
    authors: ["Li Wang", "Lei Sang", "Quangui Zhang", "Qiang Wu", "Min Xu"],
    venue: "Knowledge-Based Systems",
    year: 2024,
    tags: ["Recommendation"],
  },
  {
    id: "li-simcen:-2024",
    title: "SimCEN: Simple Contrast-enhanced Network for CTR Prediction",
    authors: ["Honghao Li", "Lei Sang", "Yi Zhang", "Yiwen Zhang"],
    venue: "Proceedings of the ACM International Conference on Multimedia (ACM MM)",
    year: 2024,
    tags: ["CTR Prediction"],
  },
  {
    id: "zhang-exploring-2024",
    title: "Exploring the Individuality and Collectivity of Intents behind Interactions for Graph Collaborative Filtering",
    authors: ["Yi Zhang", "Lei Sang", "Yiwen Zhang"],
    venue: "Proceedings of the International ACM SIGIR Conference on Research and Development in Information Retrieval (SIGIR)",
    year: 2024,
    tags: ["Recommendation", "Graph Learning", "SIGIR"],
  },
  {
    id: "wang-privacy-preserving-2024",
    title: "A Privacy-Preserving Framework with Multi-Modal Data for Cross-Domain Recommendation",
    authors: ["Li Wang", "Lei Sang", "Quangui Zhang", "Qiang Wu", "Min Xu"],
    venue: "arXiv preprint",
    year: 2024,
    tags: ["Recommendation"],
  },
  {
    id: "wang-generative-contrastive-2024",
    title: "Generative-Contrastive Heterogeneous Graph Neural Network",
    authors: ["Yu Wang", "Lei Sang", "Yi Zhang", "Yiwen Zhang"],
    venue: "arXiv preprint",
    year: 2024,
    tags: ["Graph Learning"],
  },
  {
    id: "li-tf4ctr:-2024",
    title: "TF4CTR: Twin Focus Framework for CTR Prediction via Adaptive Sample Differentiation",
    authors: ["Honghao Li", "Yiwen Zhang", "Yi Zhang", "Lei Sang", "Yun Yang"],
    venue: "arXiv preprint",
    year: 2024,
    tags: ["CTR Prediction"],
  },
  {
    id: "chen-dual-domain-2024",
    title: "Dual-domain Collaborative Denoising for Social Recommendation",
    authors: ["Wenjie Chen", "Yi Zhang", "Honghao Li", "Lei Sang", "Yiwen Zhang"],
    venue: "arXiv preprint",
    year: 2024,
    tags: ["Recommendation"],
  },
  {
    id: "zhang-exploring-2024",
    title: "Exploring the Individuality and Collectivity of Intents behind Interactions for Graph Collaborative Filtering",
    authors: ["Yi Zhang", "Lei Sang", "Yiwen Zhang"],
    venue: "arXiv preprint",
    year: 2024,
    tags: ["Recommendation", "Graph Learning"],
  },
  {
    id: "li-dcnv3:-2024",
    title: "DCNv3: Towards Next Generation Deep Cross Network for CTR Prediction",
    authors: ["Honghao Li", "Yiwen Zhang", "Yi Zhang", "Hanwei Li", "Lei Sang"],
    venue: "arXiv preprint",
    year: 2024,
    tags: ["CTR Prediction"],
  },
  {
    id: "sang-intent-guided-2024",
    title: "Intent-guided Heterogeneous Graph Contrastive Learning for Recommendation",
    authors: ["Lei Sang", "Yu Wang", "Yi Zhang", "Yiwen Zhang", "Xindong Wu"],
    venue: "arXiv preprint",
    year: 2024,
    tags: ["Recommendation", "Graph Learning"],
  },
  {
    id: "zhang-high-order-2024",
    title: "High-Order Fusion Graph Contrastive Learning for Recommendation",
    authors: ["Yu Zhang", "Lei Sang", "Yi Zhang", "Yiwen Zhang"],
    venue: "arXiv preprint",
    year: 2024,
    tags: ["Recommendation", "Graph Learning"],
  },
  {
    id: "wang-federated-2024",
    title: "Federated Prototype-based Contrastive Learning for Privacy-Preserving Cross-domain Recommendation",
    authors: ["Li Wang", "Quangui Zhang", "Lei Sang", "Qiang Wu", "Min Xu"],
    venue: "arXiv preprint",
    year: 2024,
    tags: ["Recommendation"],
  },
  {
    id: "sang-feature-2024",
    title: "Feature Interaction Fusion Self-Distillation Network For CTR Prediction",
    authors: ["Lei Sang", "Qiuze Ru", "Honghao Li", "Yiwen Zhang", "Qian Cao", "Xindong Wu"],
    venue: "arXiv preprint",
    year: 2024,
    tags: ["CTR Prediction"],
  },
  {
    id: "li-ensemble-2024",
    title: "Ensemble Learning via Knowledge Transfer for CTR Prediction",
    authors: ["Honghao Li", "Yiwen Zhang", "Yi Zhang", "Lei Sang"],
    venue: "arXiv preprint",
    year: 2024,
    tags: ["CTR Prediction"],
  },
  {
    id: "sang-adversarial-2023",
    title: "Adversarial Heterogeneous Graph Neural Network for Robust Recommendation",
    authors: ["Lei Sang", "Min Xu", "Shengsheng Qian", "Xindong Wu"],
    venue: "IEEE Transactions on Computational Social Systems",
    year: 2023,
    tags: ["Security/Robustness", "Recommendation", "Graph Learning"],
  },
  {
    id: "sang-knowledge-2021",
    title: "Knowledge graph enhanced neural collaborative recommendation",
    authors: ["Lei Sang", "Min Xu", "Shengsheng Qian", "Xindong Wu"],
    venue: "Expert Systems with Applications",
    year: 2021,
    tags: ["Recommendation", "Graph Learning"],
  },
  {
    id: "sang-knowledge-2021",
    title: "Knowledge Graph enhanced Neural Collaborative Filtering with Residual Recurrent Network",
    authors: ["Lei Sang", "Min Xu", "Shengsheng Qian", "Xindong Wu"],
    venue: "Neurocomputing",
    year: 2021,
    tags: ["Recommendation", "Graph Learning"],
  },
  {
    id: "wu-noise-2021",
    title: "Noise Augmented Double-Stream Graph Convolutional Networks for Image Captioning",
    authors: ["Lingxiang Wu", "Min Xu", "Lei Sang", "Ting Yao", "Tao Mei"],
    venue: "IEEE Transactions on Circuits and Systems for Video Technology",
    year: 2021,
    tags: ["Graph Learning"],
  },
  {
    id: "sang-context-dependent-2021",
    title: "Context-Dependent Propagating-Based Video Recommendation in Multimodal Heterogeneous Information Networks",
    authors: ["Lei Sang", "Min Xu", "Shengsheng Qian", "Matt Martin", "Peter Li", "Xindong Wu"],
    venue: "IEEE Transactions on Multimedia",
    year: 2021,
    tags: ["Recommendation", "NLP"],
  },
  {
    id: "sang-multi-modal-2019",
    title: "Multi-modal multi-view Bayesian semantic embedding for community question answering",
    authors: ["Lei Sang", "Min Xu", "Shengsheng Qian", "Xindong Wu"],
    venue: "Neurocomputing",
    year: 2019,
  },
  {
    id: "sang-aaane:-2019",
    title: "AAANE: Attention-Based Adversarial Autoencoder for Multi-scale Network Embedding",
    authors: ["Lei Sang", "Min Xu", "Shengsheng Qian", "Xindong Wu"],
    venue: "PAKDD 2019",
    year: 2019,
  },
  {
    id: "sang-wefest:-2016",
    title: "WEFEST: Word Embedding Feature Extension for Short Text Classification",
    authors: ["Lei Sang", "Fei Xie", "Xiaojian Liu", "Xindong Wu"],
    venue: "ICDM Workshops",
    year: 2016,
    tags: ["NLP"],
  },


];


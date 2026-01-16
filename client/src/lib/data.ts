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
  bio: "Lei Sang is currently an Associate Professor at the School of Computer Science and Technology, Anhui University. He received his Dual-Ph.D. degree from the University of Technology Sydney and Hefei University of Technology in 2021. His research focuses on Data Mining and Machine Learning, with a particular emphasis on Recommender Systems and Graph Learning. He has published over 20 papers in top-tier international journals and conferences, including TKDE, TOIS, SIGIR, KDD, AAAI, and ACM MM. He serves as a reviewer for several prestigious journals and conferences. Currently, he presides over the National Natural Science Foundation of China (NSFC) and the Anhui Provincial Natural Science Foundation. 桑磊，安徽大学计算机科学与技术学院副教授。2021年博士毕业于悉尼科技大学和合肥工业大学，获得双博士学位。主要研究方向包括数据挖掘、推荐系统和图学习。在 TKDE, TOIS, SIGIR, KDD, AAAI, ACM MM 等顶级国际期刊和会议上发表论文20余篇。主持国家自然科学基金青年项目和安徽省自然科学基金项目。",
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
  // 2026
  {
    id: "2026-1",
    title: "FCN: Fusing Exponential and Linear Cross Network for Click-Through Rate Prediction",
    authors: ["Honghao Li", "Yiwen Zhang", "Yi Zhang", "Hanwei Li", "Lei Sang", "Jieming Zhu"],
    venue: "Proceedings of the ACM SIGKDD International Conference on Knowledge Discovery and Data Mining (KDD)",
    year: 2026,
    tags: ["CTR Prediction", "KDD"]
  },
  {
    id: "2026-2",
    title: "CAFU: Constrained Alignment and Filtered Uniformity for Denoising Recommendation",
    authors: ["Xinzhe Jiang", "Lei Sang", "Yi Zhang", "Kaibin Wang", "Yiwen Zhang"],
    venue: "Proceedings of the AAAI Conference on Artificial Intelligence (AAAI)",
    year: 2026,
    tags: ["Recommendation", "AAAI"]
  },
  {
    id: "2026-3",
    title: "Revisiting Contrastive Learning in Collaborative Filtering via Parallel Graph Filters",
    authors: ["Kai Fang", "Yu Zhang", "Kaibin Wang", "Lei Sang", "Yiwen Zhang"],
    venue: "Proceedings of the AAAI Conference on Artificial Intelligence (AAAI)",
    year: 2026,
    tags: ["Recommendation", "Graph Learning", "AAAI"]
  },
  {
    id: "2026-4",
    title: "Unsupervised heterogeneous group streaming feature selection",
    authors: ["Peng Zhou", "Qianzhen Chen", "Lei Sang*", "Shu Zhao", "Xindong Wu"],
    venue: "Pattern Recognition",
    year: 2026
  },
  {
    id: "2026-5",
    title: "Heterogeneous Adaptive Preference Learning for Recommendation",
    authors: ["Lei Sang", "Weichen Fei", "Yi Zhang", "Yuee Huang", "Yiwen Zhang"],
    venue: "ACM Transactions on Recommender Systems",
    year: 2026,
    tags: ["Recommendation"]
  },

  // 2025
  {
    id: "2025-1",
    title: "Masked Heterogeneous Graph Attention Network for robust recommendation",
    authors: ["Lei Sang", "Xingwang Li", "Yu Wang", "Yi Zhang", "Shun Lian", "Yiwen Zhang"],
    venue: "Applied Soft Computing",
    year: 2025,
    tags: ["Security/Robustness", "Recommendation", "Graph Learning"]
  },
  {
    id: "2025-2",
    title: "Towards similar alignment and unique uniformity in collaborative filtering",
    authors: ["Yi Zhang", "Yi Zhang", "Yi Zhang", "Lei Sang", "Yun Yang"],
    venue: "Information Processing & Management",
    year: 2025,
    tags: ["Recommendation", "Graph Learning"]
  },
  {
    id: "2025-3",
    title: "Intent-guided Heterogeneous Graph Contrastive Learning for Recommendation",
    authors: ["Lei Sang", "Yu Wang", "Yi Zhang", "Yiwen Zhang", "Xindong Wu"],
    venue: "IEEE Transactions on Knowledge and Data Engineering (TKDE)",
    year: 2025,
    citations: 27,
    tags: ["CCF A"]
  },
  {
    id: "2025-4",
    title: "Simple Yet Effective Heterogeneous Graph Contrastive Learning for Recommendation",
    authors: ["Lei Sang", "Haiyan Zhang", "Yu Wang", "Yiwen Zhang"],
    venue: "IEEE Transactions on Consumer Electronics",
    year: 2025
  },
  {
    id: "2025-5",
    title: "AdaGIN: Adaptive Graph Interaction Network for Click-Through Rate Prediction",
    authors: ["Lei Sang", "Honghao Li", "Yiwen Zhang", "Yi Zhang", "Yun Yang"],
    venue: "ACM Transactions on Information Systems (TOIS)",
    year: 2025,
    citations: 16,
    tags: ["CCF A"]
  },
  {
    id: "2025-6",
    title: "Denoising Heterogeneous Graph Pre-training Framework for Recommendation",
    authors: ["Lei Sang", "Yu Wang", "Yi Zhang", "Xindong Wu"],
    venue: "ACM Transactions on Information Systems (TOIS)",
    year: 2025,
    citations: 15,
    tags: ["CCF A"]
  },
  {
    id: "2025-7",
    title: "Unveiling Contrastive Learning's Capability of Neighborhood Aggregation for Collaborative Filtering",
    authors: ["Yi Zhang", "Yi Zhang", "Yi Zhang", "Lei Sang", "Yun Yang"],
    venue: "SIGIR 2025",
    year: 2025,
    citations: 10,
    tags: ["CCF A"]
  },
  {
    id: "2025-8",
    title: "Simplify to the Limit! Embedding-less Graph Collaborative Filtering for Recommender Systems",
    authors: ["Yi Zhang", "Yi Zhang", "Lei Sang", "Victor S. Sheng"],
    venue: "ACM Transactions on Information Systems (TOIS)",
    year: 2025,
    citations: 10,
    tags: ["CCF A"]
  },
  {
    id: "2025-9",
    title: "Intent representation learning with large language model for recommendation",
    authors: ["Yu Wang", "Lei Sang", "Yi Zhang", "Yi Zhang"],
    venue: "SIGIR 2025",
    year: 2025,
    citations: 8,
    tags: ["CCF A"]
  },

  // 2024
  {
    id: "2024-1",
    title: "Exploring the individuality and collectivity of intents behind interactions for graph collaborative filtering",
    authors: ["Yi Zhang", "Lei Sang", "Yi Zhang"],
    venue: "SIGIR 2024",
    year: 2024,
    citations: 40,
    tags: ["CCF A"]
  },
  {
    id: "2024-2",
    title: "Bi-directional transfer graph contrastive learning for social recommendation",
    authors: ["Lei Sang", "Mingyuan Liu", "Yi Zhang", "Yuee Huang", "Yiwen Zhang"],
    venue: "IEEE Transactions on Big Data",
    year: 2024
  },
  {
    id: "2024-3",
    title: "Heterogeneous Adaptive Preference Learning for Recommendation",
    authors: ["Lei Sang", "Weichen Fei", "Yi Zhang", "Yuee Huang", "Yiwen Zhang"],
    venue: "ACM Transactions on Recommender Systems",
    year: 2024
  },
  {
    id: "2024-4",
    title: "Dcnv3: Towards next generation deep cross network for ctr prediction",
    authors: ["Honghao Li", "Yi Zhang", "Yi Zhang", "Honghao Li", "Lei Sang"],
    venue: "arXiv preprint arXiv:2407.13349",
    year: 2024,
    citations: 25
  },
  {
    id: "2024-5",
    title: "A privacy-preserving framework with multi-modal data for cross-domain recommendation",
    authors: ["L Wang", "Lei Sang", "Q Zhang", "Q Wu", "Min Xu"],
    venue: "Knowledge-Based Systems",
    year: 2024,
    citations: 18
  },
  {
    id: "2024-6",
    title: "SimCEN: Simple Contrast-enhanced Network for CTR Prediction",
    authors: ["Honghao Li", "Lei Sang", "Yi Zhang", "Yi Zhang"],
    venue: "ACM Multimedia 2024",
    year: 2024,
    citations: 11,
    tags: ["CCF A"]
  },
  {
    id: "2024-7",
    title: "Graph structure learning for robust recommendation",
    authors: ["Lei Sang", "H Yuan", "Y Huang", "Yi Zhang"],
    venue: "Tsinghua Science and Technology",
    year: 2024,
    citations: 10
  },

  // 2023
  {
    id: "2023-1",
    title: "Adversarial Heterogeneous Graph Neural Network for Robust Recommendation",
    authors: ["Lei Sang", "Min Xu", "Shengsheng Qian", "Xindong Wu"],
    venue: "IEEE Transactions on Computational Social Systems",
    year: 2023,
    citations: 27
  },
  {
    id: "2023-2",
    title: "CETN: contrast-enhanced through network for CTR prediction",
    authors: ["Honghao Li", "Lei Sang", "Yi Zhang", "X Zhang", "Yi Zhang"],
    venue: "arXiv preprint arXiv:2312.09715",
    year: 2023,
    citations: 10
  },

  // 2021
  {
    id: "2021-1",
    title: "Knowledge graph enhanced neural collaborative recommendation",
    authors: ["Lei Sang", "Min Xu", "Shengsheng Qian", "Xindong Wu"],
    venue: "Expert Systems with Applications",
    year: 2021,
    citations: 94
  },
  {
    id: "2021-2",
    title: "Knowledge graph enhanced neural collaborative filtering with residual recurrent network",
    authors: ["Lei Sang", "Min Xu", "Shengsheng Qian", "Xindong Wu"],
    venue: "Neurocomputing",
    year: 2021,
    citations: 29
  },
  {
    id: "2021-3",
    title: "Context-Dependent Propagating-Based Video Recommendation in Multimodal Heterogeneous Information Networks",
    authors: ["Lei Sang", "Min Xu", "Shengsheng Qian", "Matt Martin", "Peter Li", "Xindong Wu"],
    venue: "IEEE Transactions on Multimedia",
    year: 2021,
    citations: 60
  },

  // 2020
  {
    id: "2020-1",
    title: "Noise augmented double-stream graph convolutional networks for image captioning",
    authors: ["L Wu", "Min Xu", "Lei Sang", "T Yao", "T Mei"],
    venue: "IEEE Transactions on Circuits and Systems for Video Technology",
    year: 2020,
    citations: 66
  },

  // 2019
  {
    id: "2019-1",
    title: "Multi-modal multi-view Bayesian semantic embedding for community question answering",
    authors: ["Lei Sang", "Min Xu", "Shengsheng Qian", "Xindong Wu"],
    venue: "Neurocomputing",
    year: 2019,
    citations: 25
  },
  {
    id: "2019-2",
    title: "AAANE: Attention-based adversarial autoencoder for multi-scale network embedding",
    authors: ["Lei Sang", "Min Xu", "Shengsheng Qian", "Xindong Wu"],
    venue: "PAKDD 2019",
    year: 2019,
    citations: 14
  },

  // 2016
  {
    id: "2016-1",
    title: "WEFEST: word embedding feature extension for short text classification",
    authors: ["Lei Sang", "F Xie", "X Liu", "Xindong Wu"],
    venue: "ICDMW 2016",
    year: 2016,
    citations: 11
  }
];

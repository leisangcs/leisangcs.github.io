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
  email: "sanglei # ahu.edu.cn",
  social: {
    googleScholar: "https://scholar.google.com/citations?user=WkbOdHQAAAAJ&hl=en",
    github: "https://github.com/leisangcs",
  },
  location: "Hefei, China",
  bio: "Lei Sang is currently an Associate Professor at the School of Computer Science and Technology, Anhui University. He received his Dual-Ph.D. degree from the University of Technology Sydney and Hefei University of Technology in 2021. His research focuses on Data Mining and Machine Learning, with a particular emphasis on Recommender Systems and Graph Learning. He has published over 20 papers in top-tier international journals and conferences, including TKDE, TOIS, SIGIR, KDD, AAAI, and ACM MM. He serves as a reviewer for several prestigious journals and conferences. Currently, he presides over the National Natural Science Foundation of China (NSFC ) and the Anhui Provincial Natural Science Foundation.\n\n桑磊，安徽大学计算机科学与技术学院副教授。2021年博士毕业于悉尼科技大学和合肥工业大学，获得双博士学位。主要研究方向包括数据挖掘、推荐系统和图学习。在 TKDE, TOIS, SIGIR, KDD, AAAI, ACM MM 等顶级国际期刊和会议上发表论文20余篇。主持国家自然科学基金青年项目和安徽省自然科学基金项目。",
  avatar: "/images/photo.jpeg",
  researchInterests: [
    "Data Mining",
    "Recommender Systems",
    "Graph Neural Networks"
  ]
};

export const publications: Publication[] = [
  {
    id: "sang-ibnet-2026",
    title: "Optimizing Feature Interaction via Information Bottleneck for CTR Prediction",
    authors: ["Lei Sang", "Hanwei Li", "Honghao Li", "Yiwen Zhang", "Xindong Wu"],
    venue: "IEEE Transactions on Computational Social Systems",
    year: 2026,
    tags: ["CTR Prediction"],
    pdfUrl: "/papers/Optimizing_Feature_Interaction_via_Information_Bottleneck_for_CTR_Prediction.pdf",
  },

  {
    id: "li-fcn-2026",
    title: "FCN: Fusing Exponential and Linear Cross Network for Click-Through Rate Prediction",
    authors: ["Honghao Li", "Yiwen Zhang", "Yi Zhang", "Hanwei Li", "Lei Sang", "Jieming Zhu"],
    venue: "ACM SIGKDD International Conference on Knowledge Discovery and Data Mining (KDD)",
    year: 2026,
    tags: ["CTR Prediction", "KDD"],
    pdfUrl: "https://arxiv.org/pdf/2407.13349.pdf",
  },

  {
    id: "jiang-cafu-2026",
    title: "CAFU: Constrained Alignment and Filtered Uniformity for Denoising Recommendation",
    authors: ["Xinzhe Jiang", "Lei Sang", "Yi Zhang", "Kaibin Wang", "Yiwen Zhang"],
    venue: "AAAI Conference on Artificial Intelligence (AAAI)",
    year: 2026,
    tags: ["Recommendation", "AAAI"],
  },
  {
    id: "fang-revisiting-2026",
    title: "Revisiting Contrastive Learning in Collaborative Filtering via Parallel Graph Filters",
    authors: ["Kai Fang", "Yu Zhang", "Kaibin Wang", "Lei Sang", "Yiwen Zhang"],
    venue: "AAAI Conference on Artificial Intelligence (AAAI)",
    year: 2026,
    tags: ["Recommendation", "Graph Learning", "AAAI"],
  },

  {
    id: "zhou-unsupervised-2026",
    title: "Unsupervised heterogeneous group streaming feature selection",
    authors: ["Peng Zhou", "Qianzhen Chen", "Lei Sang*", "Shu Zhao", "Xindong Wu"],
    venue: "Pattern Recognition",
    year: 2026,
  
    pdfUrl: "https://www.sciencedirect.com/science/article/abs/pii/S0031320325009410",
  },
  {
    id: "sang-heterogeneous-2026",
    title: "Heterogeneous Adaptive Preference Learning for Recommendation",
    authors: ["Lei Sang", "Weichen Fei", "Yi Zhang", "Yuee Huang", "Yiwen Zhang"],
    venue: "ACM Transactions on Recommender Systems",
    year: 2026,
    tags: ["Recommendation"],
  
    pdfUrl: "https://dl.acm.org/doi/10.1145/3656480",
  },
  {
    id: "sang-intent-guided-2025",
    title: "Intent-Guided Heterogeneous Graph Contrastive Learning for Recommendation",
    authors: ["Lei Sang", "Yu Wang", "Yi Zhang", "Yiwen Zhang", "Xindong Wu"],
    venue: "IEEE Transactions on Knowledge and Data Engineering",
    year: 2025,
    tags: ["Recommendation", "Graph Learning", "TKDE"],
  
    pdfUrl: "https://ieeexplore.ieee.org/document/10857594/",
  },
  {
    id: "sang-adagin:-2025",
    title: "AdaGIN: Adaptive Graph Interaction Network for Click-Through Rate Prediction",
    authors: ["Lei Sang", "Honghao Li", "Yiwen Zhang", "Yi Zhang", "Yun Yang"],
    venue: "ACM Transactions on Information Systems",
    year: 2025,
    tags: ["Graph Learning", "TOIS", "CTR Prediction"],
  
    pdfUrl: "https://dl.acm.org/doi/10.1145/3681785",
  },
   {
    id: "li-revisiting-2025",
    title: "Revisiting Feature Interactions from the Perspective of Quadratic Neural Networks for Click-through Rate Prediction",
    authors: ["Honghao Li", "Yiwen Zhang", "Yi Zhang", "Lei Sang", "Jieming Zhu"],
    venue: "Proceedings of the ACM SIGKDD International Conference on Knowledge Discovery and Data Mining (KDD)",
    year: 2025,
    tags: ["KDD", "CTR Prediction"],
  
    pdfUrl: "https://dl.acm.org/doi/10.1145/3711896.3737106",
  },
  {
    id: "wang-intent-2025",
    title: "Intent Representation Learning with Large Language Model for Recommendation",
    authors: ["Yu Wang", "Lei Sang*", "Yi Zhang", "Yiwen Zhang"],
    venue: "Proceedings of the International ACM SIGIR Conference on Research and Development in Information Retrieval (SIGIR)",
    year: 2025,
    tags: ["Recommendation", "NLP", "SIGIR"],
  
    pdfUrl: "https://dl.acm.org/doi/10.1145/3726302.3730011",
  },
  {
    id: "zhang-unveiling-2025",
    title: "Unveiling Contrastive Learning's Capability of Neighborhood Aggregation for Collaborative Filtering",
    authors: ["Yu Zhang", "Yiwen Zhang", "Yi Zhang", "Lei Sang", "Yun Yang"],
    venue: "Proceedings of the International ACM SIGIR Conference on Research and Development in Information Retrieval (SIGIR)",
    year: 2025,
    tags: ["Recommendation", "SIGIR"],
  
    pdfUrl: "https://dl.acm.org/doi/10.1145/3726302.3730111",
  },
  {
    id: "li-cetn:-2025",
    title: "CETN: Contrast-enhanced Through Network for Click-Through Rate Prediction",
    authors: ["Honghao Li", "Lei Sang", "Yi Zhang", "Xuyun Zhang", "Yiwen Zhang"],
    venue: "ACM Transactions on Information Systems",
    year: 2025,
    tags: ["TOIS", "CTR Prediction"],
    pdfUrl: "https://arxiv.org/pdf/2312.09715.pdf",
  },
  {
    id: "zhang-simplify-2025",
    title: "Simplify to the Limit! Embedding-Less Graph Collaborative Filtering for Recommender Systems",
    authors: ["Yi Zhang", "Yiwen Zhang", "Lei Sang", "Victor S. Sheng"],
    venue: "ACM Transactions on Information Systems",
    year: 2025,
    tags: ["Recommendation", "Graph Learning", "TOIS"],
  
    pdfUrl: "https://dl.acm.org/doi/10.1145/3701230",
  },
  {
    id: "sang-denoising-2025",
    title: "Denoising Heterogeneous Graph Pre-training Framework for Recommendation",
    authors: ["Lei Sang", "Yu Wang", "Yiwen Zhang", "Xindong Wu"],
    venue: "ACM Transactions on Information Systems",
    year: 2025,
    tags: ["Recommendation", "Graph Learning", "TOIS"],
  
    pdfUrl: "https://dl.acm.org/doi/10.1145/3706632",
  },
  {
    id: "sang-bottlenecked-2025",
    title: "Bottlenecked Heterogeneous Graph Contrastive Learning for Robust Recommendation",
    authors: ["Lei Sang", "Maohao Huang", "Yu Wang", "Yiwen Zhang", "Xindong Wu"],
    venue: "ACM Transactions on Information Systems",
    year: 2025,
    tags: ["Security/Robustness", "Recommendation", "Graph Learning", "TOIS"],
  
    pdfUrl: "https://dl.acm.org/doi/10.1145/3750725",
  },
  {
    id: "sang-masked-2025",
    title: "Masked Heterogeneous Graph Attention Network for robust recommendation",
    authors: ["Lei Sang", "Xingwang Li", "Yu Wang", "Yi Zhang", "Shun Lian", "Yiwen Zhang"],
    venue: "Applied Soft Computing",
    year: 2025,
    tags: ["Security/Robustness", "Recommendation", "Graph Learning"],
  
    pdfUrl: "https://www.sciencedirect.com/science/article/pii/S156849462500907X",
  },
  {
    id: "sang-towards-2025",
    title: "Towards similar alignment and unique uniformity in collaborative filtering",
    authors: ["Lei Sang", "Yu Zhang", "Yi Zhang", "Honghao Li", "Yiwen Zhang"],
    venue: "Expert Systems with Applications",
    year: 2025,
    tags: ["Recommendation"],
  
    pdfUrl: "https://www.sciencedirect.com/science/article/pii/S0957417424022139",
  },
  {
    id: "sang-bi-directional-2025",
    title: "Bi-Directional Transfer Graph Contrastive Learning for Social Recommendation",
    authors: ["Lei Sang", "Mingyuan Liu", "Yi Zhang", "Yuee Huang", "Yiwen Zhang"],
    venue: "IEEE Transactions on Big Data",
    year: 2025,
    tags: ["Recommendation", "Graph Learning"],
  
    pdfUrl: "https://ieeexplore.ieee.org/document/10496254/",
  },
  {
    id: "wang-generative-contrastive-2025",
    title: "Generative-Contrastive Heterogeneous Graph Neural Network",
    authors: ["Yu Wang", "Lei Sang*", "Yi Zhang", "Yiwen Zhang*", "Xindong Wu"],
    venue: "IEEE Transactions on Big Data",
    year: 2025,
    tags: ["Graph Learning"],
  
    pdfUrl: "https://ieeexplore.ieee.org/document/11003807/",
  },
  {
    id: "jiang-revisiting-2025",
    title: "Revisiting Alignment and Uniformity for Recommendation via Discrimination and Reliable Assessment",
    authors: ["Xinzhe Jiang", "Lei Sang", "Shun Lian", "Yi Zhang", "Yiwen Zhang"],
    venue: "IEEE Transactions on Consumer Electronics",
    year: 2025,
    tags: ["Recommendation"],
  
    pdfUrl: "https://ieeexplore.ieee.org/document/10833758/",
  },
  {
    id: "sang-simple-2025",
    title: "Simple Yet Effective Heterogeneous Graph Contrastive Learning for Recommendation",
    authors: ["Lei Sang", "Haiyan Zhang", "Yu Wang", "Yiwen Zhang"],
    venue: "IEEE Transactions on Consumer Electronics",
    year: 2025,
    tags: ["Recommendation", "Graph Learning"],
  
    pdfUrl: "https://ieeexplore.ieee.org/document/11005410/",
  },
  {
    id: "chen-dual-domain-2025",
    title: "Dual-Domain Collaborative Denoising for Social Recommendation",
    authors: ["Wenjie Chen", "Yi Zhang", "Honghao Li", "Lei Sang", "Yiwen Zhang"],
    venue: "IEEE Transactions on Computational Social Systems",
    year: 2025,
    tags: ["Recommendation"],
  
    pdfUrl: "https://ieeexplore.ieee.org/document/10856264/",
  },
  
  {
    id: "li-quadratic-2025",
    title: "Quadratic Interest Network for Multimodal Click-Through Rate Prediction",
    authors: ["Honghao Li", "Hanwei Li", "Jing Zhang", "Yi Zhang", "Ziniu Yu", "Lei Sang", "Yiwen Zhang"],
    venue: "arXiv preprint",
    year: 2025,
    tags: ["CTR Prediction"],
    pdfUrl: "https://arxiv.org/pdf/2504.17699.pdf",
  },
  {
    id: "mu-robustness-2025",
    title: "Robustness of Prompting: Enhancing Robustness of Large Language Models Against Prompting Attacks",
    authors: ["Lin Mu", "Guowei Chu", "Li Ni", "Lei Sang", "Zhize Wu", "Peiquan Jin", "Yiwen Zhang"],
    venue: "arXiv preprint",
    year: 2025,
    tags: ["Security/Robustness", "NLP"],
    pdfUrl: "https://arxiv.org/pdf/2506.03627.pdf",
  },
  {
    id: "sang-multi-view-2024",
    title: "Multi-view denoising contrastive learning for bundle recommendation",
    authors: ["Lei Sang", "Yang Hu", "Yi Zhang", "Yiwen Zhang"],
    venue: "Applied Intelligence",
    year: 2024,
    tags: ["Recommendation"],
  
    pdfUrl: "https://link.springer.com/article/10.1007/s10489-024-05825-z",
  },
  {
    id: "wang-privacy-preserving-2024",
    title: "A privacy-preserving framework with multi-modal data for cross-domain recommendation",
    authors: ["Li Wang", "Lei Sang", "Quangui Zhang", "Qiang Wu", "Min Xu"],
    venue: "Knowledge-Based Systems",
    year: 2024,
    tags: ["Recommendation"],
  
    pdfUrl: "https://www.sciencedirect.com/science/article/pii/S0950705124011638",
  },
  {
    id: "li-simcen:-2024",
    title: "SimCEN: Simple Contrast-enhanced Network for CTR Prediction",
    authors: ["Honghao Li", "Lei Sang", "Yi Zhang", "Yiwen Zhang"],
    venue: "Proceedings of the ACM International Conference on Multimedia (ACM MM)",
    year: 2024,
    tags: ["CTR Prediction"],
  
    pdfUrl: "https://dl.acm.org/doi/10.1145/3664647.3681203",
  },
  {
    id: "zhang-exploring-2024",
    title: "Exploring the Individuality and Collectivity of Intents behind Interactions for Graph Collaborative Filtering",
    authors: ["Yi Zhang", "Lei Sang", "Yiwen Zhang"],
    venue: "Proceedings of the International ACM SIGIR Conference on Research and Development in Information Retrieval (SIGIR)",
    year: 2024,
    tags: ["Recommendation", "Graph Learning", "SIGIR"],
  
    pdfUrl: "https://dl.acm.org/doi/10.1145/3626772.3657738",
  },
  {
    id: "wang-federated-2024",
    title: "Federated Prototype-based Contrastive Learning for Privacy-Preserving Cross-domain Recommendation",
    authors: ["Li Wang", "Quangui Zhang", "Lei Sang", "Qiang Wu", "Min Xu"],
    venue: "arXiv preprint",
    year: 2024,
    tags: ["Recommendation"],
    pdfUrl: "https://arxiv.org/pdf/2409.03294.pdf",
  },
  {
    id: "li-ensemble-2024",
    title: "Ensemble Learning via Knowledge Transfer for CTR Prediction",
    authors: ["Honghao Li", "Yiwen Zhang", "Yi Zhang", "Lei Sang"],
    venue: "arXiv preprint",
    year: 2024,
    tags: ["CTR Prediction"],
    pdfUrl: "https://arxiv.org/pdf/2411.16122.pdf",
  },
  {
    id: "sang-adversarial-2023",
    title: "Adversarial Heterogeneous Graph Neural Network for Robust Recommendation",
    authors: ["Lei Sang", "Min Xu", "Shengsheng Qian", "Xindong Wu"],
    venue: "IEEE Transactions on Computational Social Systems",
    year: 2023,
    tags: ["Security/Robustness", "Recommendation", "Graph Learning"],
  
    pdfUrl: "https://ieeexplore.ieee.org/document/10124876/",
  },
  {
    id: "sang-knowledge-2021",
    title: "Knowledge graph enhanced neural collaborative recommendation",
    authors: ["Lei Sang", "Min Xu", "Shengsheng Qian", "Xindong Wu"],
    venue: "Expert Systems with Applications",
    year: 2021,
    tags: ["Recommendation", "Graph Learning"],
  
    pdfUrl: "https://www.sciencedirect.com/science/article/pii/S0957417420307685",
  },
  {
    id: "sang-knowledge-2021",
    title: "Knowledge Graph enhanced Neural Collaborative Filtering with Residual Recurrent Network",
    authors: ["Lei Sang", "Min Xu", "Shengsheng Qian", "Xindong Wu"],
    venue: "Neurocomputing",
    year: 2021,
    tags: ["Recommendation", "Graph Learning"],
  
    pdfUrl: "https://www.sciencedirect.com/science/article/pii/S0925231221004276",
  },
  {
    id: "wu-noise-2021",
    title: "Noise Augmented Double-Stream Graph Convolutional Networks for Image Captioning",
    authors: ["Lingxiang Wu", "Min Xu", "Lei Sang", "Ting Yao", "Tao Mei"],
    venue: "IEEE Transactions on Circuits and Systems for Video Technology",
    year: 2021,
    tags: ["Graph Learning"],
  
    pdfUrl: "https://ieeexplore.ieee.org/document/9252928/",
  },
  {
    id: "sang-context-dependent-2021",
    title: "Context-Dependent Propagating-Based Video Recommendation in Multimodal Heterogeneous Information Networks",
    authors: ["Lei Sang", "Min Xu", "Shengsheng Qian", "Matt Martin", "Peter Li", "Xindong Wu"],
    venue: "IEEE Transactions on Multimedia",
    year: 2021,
    tags: ["Recommendation", "NLP"],
  
    pdfUrl: "https://ieeexplore.ieee.org/document/9136871/",
  },
  {
    id: "sang-multi-modal-2019",
    title: "Multi-modal multi-view Bayesian semantic embedding for community question answering",
    authors: ["Lei Sang", "Min Xu", "Shengsheng Qian", "Xindong Wu"],
    venue: "Neurocomputing",
    year: 2019,
  
    pdfUrl: "https://www.sciencedirect.com/science/article/pii/S0925231218315297",
  },
  {
    id: "sang-aaane:-2019",
    title: "AAANE: Attention-Based Adversarial Autoencoder for Multi-scale Network Embedding",
    authors: ["Lei Sang", "Min Xu", "Shengsheng Qian", "Xindong Wu"],
    venue: "PAKDD 2019",
    year: 2019,

  
    pdfUrl: "https://link.springer.com/chapter/10.1007/978-3-030-16142-2_1",
  },

  {
    id: "sang-wefest:-2016",
    title: "WEFEST: Word Embedding Feature Extension for Short Text Classification",
    authors: ["Lei Sang", "Fei Xie", "Xiaojian Liu", "Xindong Wu"],
    venue: "ICDM Workshops",
    year: 2016,
    tags: ["NLP"],
  
    pdfUrl: "https://ieeexplore.ieee.org/document/7836732/",
  },


];


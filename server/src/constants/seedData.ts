import { IFeature, IProgram, IFAQItem, ITestimonial, IStatistic } from '../types';

export const SEED_FEATURES: IFeature[] = [
  {
    id: 'upskill-scale',
    icon: 'Users',
    title: 'Upskill at Scale',
    description: 'Simultaneously train hundreds or thousands of global employees with tailored learning pathways aligned directly to your company tech roadmap.',
    category: 'admin',
    badge: 'Enterprise Growth',
    linkText: 'Explore Scale Pathways'
  },
  {
    id: 'measurable-impact',
    icon: 'TrendingUp',
    title: 'Measurable ROI & Analytics',
    description: 'Track real-time skill acquisition, course completion metrics, code submission quality, and operational performance improvements via executive dashboards.',
    category: 'leadership',
    badge: 'Executive Suite',
    linkText: 'View Analytics Spec'
  },
  {
    id: 'fast-implementation',
    icon: 'Zap',
    title: 'Rapid 2-Week Launch',
    description: 'Seamless SSO integration, automated LMS syncing, and dedicated customer success managers ensure your programs go live in days, not months.',
    category: 'admin',
    badge: 'Quick Setup',
    linkText: 'Implementation Guide'
  },
  {
    id: 'industry-relevant',
    icon: 'Target',
    title: 'Curriculum by Industry Leaders',
    description: 'Continuously updated course modules authored by tech directors from Google, AWS, Microsoft, and top tier product organizations.',
    category: 'employee',
    badge: 'Top Tier Quality',
    linkText: 'See Instructor Pool'
  },
  {
    id: 'certification-included',
    icon: 'Award',
    title: 'Recognized Enterprise Credentials',
    description: 'Verifiable digital certificates and badges backed by industry standards that validate employee mastery and boost organizational capability.',
    category: 'employee',
    badge: 'Certified',
    linkText: 'Certification Specs'
  },
  {
    id: 'dedicated-support',
    icon: 'HeartHandshake',
    title: '24/7 Dedicated Concierge Support',
    description: 'Assigned Enterprise Account Director, live cohort TA coverage, and instant response SLA for technical and administrative queries.',
    category: 'admin',
    badge: 'White Glove SLA',
    linkText: 'Support Commitments'
  }
];

export const SEED_PROGRAMS: IProgram[] = [
  {
    id: 'ai-ml-leadership',
    title: 'Enterprise Executive AI & Generative AI Transformation',
    category: 'data-ai',
    categoryLabel: 'Data & AI',
    duration: '8 Weeks (Flexible)',
    level: 'Executive',
    description: 'Empower executive leadership and engineering directors to integrate Generative AI, LLMs, and agentic workflows into core business products safely and strategically.',
    enrolledCount: 12400,
    rating: 4.9,
    skillsCovered: ['GenAI Architecture', 'Agentic Systems', 'AI Ethics & Risk', 'Prompt Engineering', 'ROI Tracking'],
    modulesCount: 12,
    highlights: ['Executive Strategy Playbooks', 'Hands-on Agentic Frameworks', '1-on-1 Mentorship'],
    iconName: 'BrainCircuit',
    featured: true
  },
  {
    id: 'data-science-analytics',
    title: 'Advanced Applied Data Science & Predictive Analytics',
    category: 'data-ai',
    categoryLabel: 'Data & AI',
    duration: '12 Weeks',
    level: 'Intermediate',
    description: 'Transform analysts and developers into proficient data scientists equipped with Python, Machine Learning models, MLOps, and big data processing.',
    enrolledCount: 28500,
    rating: 4.8,
    skillsCovered: ['Python & Pandas', 'Scikit-Learn', 'MLOps Pipelines', 'Neural Networks', 'Feature Engineering'],
    modulesCount: 16,
    highlights: ['Live Industry Capstones', 'MLOps Pipeline Deployment', 'Custom Data Sandbox'],
    iconName: 'BarChart3',
    featured: true
  },
  {
    id: 'cloud-devops-architect',
    title: 'Multi-Cloud Architecture & DevSecOps Mastery',
    category: 'cloud-devops',
    categoryLabel: 'Cloud & DevOps',
    duration: '10 Weeks',
    level: 'Advanced',
    description: 'Build enterprise resilience with Kubernetes, Terraform, AWS/GCP Multi-cloud strategies, CI/CD automation, and zero-trust security postures.',
    enrolledCount: 18200,
    rating: 4.9,
    skillsCovered: ['Kubernetes', 'Terraform', 'CI/CD Pipelines', 'AWS & GCP Architectures', 'Zero-Trust Security'],
    modulesCount: 14,
    highlights: ['Multi-Cloud Sandboxes', 'Chaos Engineering Labs', 'Enterprise AWS/GCP Certifications'],
    iconName: 'CloudServer',
    featured: true
  },
  {
    id: 'fullstack-modern-tech',
    title: 'Full Stack Engineering & Microservices Scaling',
    category: 'product-tech',
    categoryLabel: 'Product & Tech',
    duration: '14 Weeks',
    level: 'Intermediate',
    description: 'Modernize legacy tech stacks with React 19, TypeScript, Node.js microservices, GraphQL, distributed caching, and high-concurrency systems.',
    enrolledCount: 32000,
    rating: 4.9,
    skillsCovered: ['React & Next.js', 'Node.js Microservices', 'TypeScript', 'Event-Driven Systems', 'PostgreSQL'],
    modulesCount: 18,
    highlights: ['Microservice Refactoring Project', 'Real-Time WebSockets', 'Performance Auditing'],
    iconName: 'Code2',
    featured: false
  },
  {
    id: 'product-management-ai',
    title: 'Strategic Product Management & AI Innovation',
    category: 'product-tech',
    categoryLabel: 'Product & Tech',
    duration: '8 Weeks',
    level: 'Intermediate',
    description: 'Master product strategy, user discovery, product-led growth (PLG), data telemetry, and building AI-native features that drive ARR.',
    enrolledCount: 14600,
    rating: 4.8,
    skillsCovered: ['Product Roadmap Design', 'Product-Led Growth', 'AI Feature Scoping', 'User Retention Analysis'],
    modulesCount: 10,
    highlights: ['Product Spec Teardowns', 'A/B Testing Frameworks', 'CPO Masterclasses'],
    iconName: 'Compass',
    featured: false
  },
  {
    id: 'cybersecurity-defense',
    title: 'Enterprise Cybersecurity & Threat Intelligence',
    category: 'cybersecurity',
    categoryLabel: 'Cybersecurity',
    duration: '10 Weeks',
    level: 'Advanced',
    description: 'Protect enterprise infrastructure with proactive threat hunting, incident response, SIEM, penetration testing, and compliance frameworks.',
    enrolledCount: 11800,
    rating: 4.9,
    skillsCovered: ['Threat Hunting', 'SIEM & SOC Ops', 'Penetration Testing', 'SOC2 / ISO 27001', 'Cloud Defenses'],
    modulesCount: 14,
    highlights: ['Red Team vs Blue Team Simulations', 'Real Incident Post-Mortems', 'Compliance Audit Templates'],
    iconName: 'ShieldCheck',
    featured: false
  }
];

export const SEED_STATISTICS: IStatistic[] = [
  {
    id: 'students',
    value: 500,
    suffix: 'K+',
    label: 'Professionals Upskilled',
    description: 'Across global Fortune 500 and high-growth enterprises.',
    changeBadge: '+45% YoY Growth'
  },
  {
    id: 'completion',
    value: 98,
    suffix: '%',
    label: 'Course Completion Rate',
    description: 'Industry leading completion standard vs 15% MOOC average.',
    changeBadge: '#1 In Industry'
  },
  {
    id: 'clients',
    value: 500,
    suffix: '+',
    label: 'Enterprise Clients',
    description: 'Leading organizations trust Accredian for workforce development.',
    changeBadge: 'Global Reach'
  },
  {
    id: 'programs',
    value: 150,
    suffix: '+',
    label: 'Learning Programs',
    description: 'Covering Data, AI, Cloud, Product, Leadership & Security.',
    changeBadge: 'Curated Content'
  }
];

export const SEED_TESTIMONIALS: ITestimonial[] = [
  {
    id: 't1',
    quote: "Accredian transformed our L&D strategy completely. We saw a 40% improvement in engineering retention and successfully transitioned 200+ developers into GenAI-capable engineers in just one quarter.",
    author: "Sarah Johnson",
    role: "VP Learning & Development",
    company: "TechCorp Global",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80",
    rating: 5,
    metricHighlight: "40% Higher Retention",
    companyLogoText: "TechCorp",
    category: "Enterprise"
  },
  {
    id: 't2',
    quote: "The ROI was undeniable within 3 months. Our cloud incident resolution times plummeted by 60% after our DevSecOps teams completed Accredian's Multi-Cloud Mastery cohort.",
    author: "Rajesh Kumar",
    role: "Chief Technology Officer",
    company: "Innovation Labs",
    avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=250&q=80",
    rating: 5,
    metricHighlight: "60% Faster MTTR",
    companyLogoText: "InnovationLabs",
    category: "Growth"
  },
  {
    id: 't3',
    quote: "Our employees loved the flexibility, hands-on lab sandboxes, and expert mentorship. It's rare to find an enterprise platform that balances rigorous depth with high engagement.",
    author: "Emma Williams",
    role: "Head of Talent & People",
    company: "Global Solutions Inc.",
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=250&q=80",
    rating: 5,
    metricHighlight: "98% Satisfaction Score",
    companyLogoText: "GlobalSolutions",
    category: "Global"
  }
];

export const SEED_FAQS: IFAQItem[] = [
  {
    id: 'faq-1',
    question: "What programs does Accredian offer for enterprise teams?",
    answer: "Accredian offers over 150+ enterprise learning programs covering Executive AI & GenAI Strategy, Data Science & Machine Learning, Multi-Cloud Architecture, Full Stack Microservices, Product Management, and DevSecOps. All programs can be fully customized to align with your organization's specific technical stack and business objectives.",
    category: "Programs"
  },
  {
    id: 'faq-2',
    question: "How long does enterprise setup and LMS integration take?",
    answer: "Most enterprise clients go live within 2 to 4 weeks. Our dedicated technical team handles SSO integration (SAML, Okta, Azure AD), custom domain setup, employee roster importing, and automated progress report syncing with your existing LMS or HRIS.",
    category: "Onboarding"
  },
  {
    id: 'faq-3',
    question: "How is pricing structured for enterprise clients?",
    answer: "Pricing is structured based on active learner headcount, selected program tracks, and customization requirements. We offer annual enterprise licenses, cohort-based pricing, or pay-per-seat models. Book a demo with our team to receive a tailored custom quote and ROI estimate.",
    category: "Pricing & ROI"
  },
  {
    id: 'faq-4',
    question: "Do employees receive verifiable industry certifications upon completion?",
    answer: "Yes! Upon successful completion of capstones and assessments, learners receive accredited digital credentials and verifiable digital badges that can be shared on LinkedIn and internal talent management platforms.",
    category: "Certifications"
  },
  {
    id: 'faq-5',
    question: "Can we track individual and team skill progression in real-time?",
    answer: "Absolutely. L&D administrators and team managers receive access to the Accredian Executive Dashboard, providing real-time metrics on engagement, assessment scores, code lab submissions, and skill competency heatmaps.",
    category: "Enterprise Support"
  },
  {
    id: 'faq-6',
    question: "What level of support is included with enterprise tiers?",
    answer: "All enterprise accounts receive a dedicated Account Director, 24/7 technical support SLAs, live cohort teaching assistant coverage, and quarterly business review (QBR) strategy sessions.",
    category: "Enterprise Support"
  }
];

/**
 * Cypherox Enterprise Landing Page - Main JavaScript
 * This file contains all structured data, rendering logic, and interactive behavior.
 * 
 * STRUCTURE:
 * 1. Data Definitions
 * 2. Render Functions
 * 3. Interaction Handlers
 * 4. Initialization
 */

// ==========================================
// PART 1: DATA ARRAYS
// ==========================================

const navigationData = [
  {
    label: 'AI Agent',
    href: '#'
  },
  {
    label: 'Services',
    href: '#',
    type: 'mega',
    megaMenu: {
      columns: [
        {
          heading: 'Generative AI Solutions',
          links: [
            { label: 'AI Chatbot Development', href: '#' },
            { label: 'Virtual Assistant Services', href: '#' },
            { label: 'AI Language Translator', href: '#' },
            { label: 'AI Content Generator', href: '#' },
            { label: 'Virtual Research Assistant', href: '#' }
          ]
        },
        {
          heading: 'AI & ML Development',
          links: [
            { label: 'Predictive Maintenance', href: '#' },
            { label: 'Fraud Detection', href: '#' },
            { label: 'AutoML', href: '#' }
          ]
        },
        {
          heading: 'Consulting Services',
          links: [
            { label: 'IT Consulting', href: '#' },
            { label: 'Startup IT Consulting', href: '#' },
            { label: 'AI Strategy Consulting', href: '#' }
          ]
        },
        {
          heading: 'UI/UX Design Services',
          links: [
            { label: 'Responsive Web Design', href: '#' },
            { label: 'Mobile App Design', href: '#' }
          ]
        }
      ]
    }
  },
  {
    label: 'Automation',
    href: '#',
    type: 'dropdown',
    graphicNum: '85%',
    graphicText: 'FASTER<br>PROCESSES',
    ctaTitle: 'Streamline Your Operations',
    ctaDesc: 'Schedule a discovery session to identify automation opportunities and reduce manual overhead.',
    megaMenu: {
      columns: [
        {
          heading: '',
          links: [
            { label: 'Business Process Automation (RPA)', href: '#' },
            { label: 'Workflow Automation', href: '#' },
            { label: 'Marketing & CRM Automation', href: '#' }
          ]
        }
      ]
    }
  },
  {
    label: 'Technology',
    href: '#',
    type: 'dropdown',
    graphicNum: '50+',
    graphicText: 'TECH<br>EXPERTS',
    ctaTitle: 'Build Scalable Software',
    ctaDesc: 'Let\'s discuss your tech stack and engineer a robust architecture for your next big product.',
    megaMenu: {
      columns: [
        {
          heading: '',
          links: [
            { label: 'Web Development', href: '#' },
            { label: 'App Development', href: '#' },
            { label: 'E-Commerce', href: '#' },
            { label: 'CMS (WordPress, Drupal)', href: '#' }
          ]
        }
      ]
    }
  },
  {
    label: 'Hire Developers',
    href: '#',
    type: 'mega',
    megaMenu: {
      columns: [
        {
          heading: 'Mobile App Developers',
          links: [
            { label: 'Hire iOS Developers', href: '#' },
            { label: 'Hire Android Developers', href: '#' },
            { label: 'Hire Swift Developers', href: '#' },
            { label: 'Hire Kotlin Developers', href: '#' },
            { label: 'Hire Flutter Developers', href: '#' },
            { label: 'Hire React Native Developers', href: '#' }
          ]
        },
        {
          heading: 'Front-End Web Developers',
          links: [
            { label: 'Hire AngularJS Developers', href: '#' },
            { label: 'Hire ReactJS Developers', href: '#' },
            { label: 'Hire VueJS Developers', href: '#' }
          ]
        },
        {
          heading: 'Back-End Web Developers',
          links: [
            { label: 'Hire NodeJS Developers', href: '#' },
            { label: 'Hire Laravel Developers', href: '#' },
            { label: 'Hire Python Developers', href: '#' },
            { label: 'Hire PHP Developers', href: '#' }
          ]
        },
        {
          heading: 'E-Commerce Developers',
          links: [
            { label: 'Hire WordPress Developers', href: '#' },
            { label: 'Hire Shopify Developers', href: '#' },
            { label: 'Hire Magento Developers', href: '#' },
            { label: 'Hire BigCommerce Developers', href: '#' },
            { label: 'Hire WooCommerce Developers', href: '#' },
            { label: 'Hire Chatbot Developers', href: '#' },
            { label: 'Hire Graphic Designers', href: '#' },
            { label: 'Hire UI/UX Designers', href: '#' },
            { label: 'Hire Digital Marketers', href: '#' }
          ]
        },
        {
          heading: 'Trending Developers',
          links: [
            { label: 'Hire DevOps Developers', href: '#' },
            { label: 'Hire AWS Developers', href: '#' },
            { label: 'Hire AI Developers', href: '#' },
            { label: 'Hire ML Developers', href: '#' },
            { label: 'Hire Blockchain Developers', href: '#' },
            { label: 'Hire AR Developers', href: '#' },
            { label: 'Hire VR Developers', href: '#' },
            { label: 'Hire Data Analytics Experts', href: '#' },
            { label: 'Hire Full Stack Developers', href: '#' }
          ]
        }
      ]
    }
  },
  {
    label: 'Industries',
    href: '#',
    type: 'dropdown',
    graphicNum: '12+',
    graphicText: 'SECTORS<br>SERVED',
    ctaTitle: 'Tailored Industry Solutions',
    ctaDesc: 'Get bespoke technology strategies that comply with your specific industry regulations and needs.',
    megaMenu: {
      columns: [
        {
          heading: '',
          links: [
            { label: 'Finance & Banking', href: '#' },
            { label: 'Healthcare', href: '#' },
            { label: 'Retail & Ecommerce', href: '#' },
            { label: 'Manufacturing', href: '#' },
            { label: 'Real Estate', href: '#' },
            { label: 'Logistics & Transportation', href: '#' }
          ]
        }
      ]
    }
  },
  {
    label: 'Company',
    href: '#',
    type: 'dropdown',
    graphicNum: '100%',
    graphicText: 'CLIENT<br>FOCUS',
    ctaTitle: 'Partner with Cypherox',
    ctaDesc: 'Reach out to our leadership team and discover how we can drive your digital transformation.',
    megaMenu: {
      columns: [
        {
          heading: '',
          links: [
            { label: 'About Us', href: '#' },
            { label: 'Contact Us', href: '#' },
            { label: 'Case Studies', href: '#' },
            { label: 'Blog', href: '#' }
          ]
        }
      ]
    }
  }
];





const disciplinesData = [
  {
    id: 'ai-development',
    tabName: 'AI Development',
    title: 'AI & Generative AI Development',
    description: 'From proof-of-concept to production-grade AI, we build LLM applications, RAG systems, and ML platforms that are governed, explainable, and safe for regulated Australian industries.',
    features: [
      'Custom LLM & RAG applications with enterprise guardrails',
      'AI agents & workflow automation',
      'Predictive ML models & MLOps pipelines',
      'Responsible-AI, data residency & PII controls'
    ],
    ctaText: 'TALK TO AI CONSULTANT',
    ctaLink: '#',
    techTags: ['OpenAI', 'Anthropic Claude', 'LangChain', 'Bedrock', 'Vertex AI', 'PyTorch', 'Pinecone', 'Hugging Face'],
    outcomes: [
      { highlight: '6 wks', text: 'From idea to a working AI pilot in production' },
      { highlight: '40%', text: 'Reduction in manual, repetitive back-office work' }
    ]
  },
  {
    id: 'data-engineering',
    tabName: 'Data Engineering & Analytics',
    title: 'Modern Data Platforms & Analytics',
    description: 'We engineer robust data pipelines, scalable data lakes, and real-time analytics platforms that turn your fragmented data into a unified, actionable asset for strategic decision-making.',
    features: [
      'Data lakehouse & warehouse architecture',
      'Real-time streaming pipelines & ETL/ELT',
      'Advanced business intelligence & dashboards',
      'Data governance & quality management'
    ],
    ctaText: 'TALK TO DATA CONSULTANT',
    ctaLink: '#',
    techTags: ['Snowflake', 'Databricks', 'AWS Redshift', 'dbt', 'Airflow', 'Power BI', 'Tableau', 'Kafka'],
    outcomes: [
      { highlight: '10x', text: 'Faster query performance and reporting times' },
      { highlight: '360°', text: 'Unified view of customer and operational data' }
    ]
  },
  {
    id: 'cloud-devops',
    tabName: 'Cloud & DevOps Engineering',
    title: 'Cloud Infrastructure & DevOps Automation',
    description: 'We modernize legacy infrastructure with secure, scalable cloud architectures and implement mature DevOps practices to accelerate deployment velocity and ensure high availability.',
    features: [
      'Cloud migration & modernization (AWS/Azure/GCP)',
      'Infrastructure as Code (IaC) & automation',
      'CI/CD pipeline implementation',
      'Cloud security, compliance & FinOps'
    ],
    ctaText: 'TALK TO CLOUD EXPERT',
    ctaLink: '#',
    techTags: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Terraform', 'Docker', 'Jenkins', 'GitLab CI'],
    outcomes: [
      { highlight: '99.99%', text: 'Uptime reliability for mission-critical apps' },
      { highlight: '3x', text: 'Faster release cycles through automation' }
    ]
  },
  {
    id: 'product-engineering',
    tabName: 'Product Engineering',
    title: 'End-to-End Digital Product Engineering',
    description: 'We turn ambitious ideas into scalable, user-centric digital products. From UX/UI design to robust full-stack development, we deliver resilient software that drives market growth.',
    features: [
      'Custom enterprise web & mobile applications',
      'SaaS platform architecture & development',
      'API design & microservices integration',
      'Agile product management & UI/UX design'
    ],
    ctaText: 'TALK TO PRODUCT EXPERT',
    ctaLink: '#',
    techTags: ['React', 'Node.js', 'Python', 'Java', '.NET Core', 'PostgreSQL', 'MongoDB', 'GraphQL'],
    outcomes: [
      { highlight: '2x', text: 'Faster time-to-market with Agile delivery' },
      { highlight: '100%', text: 'Ownership of IP and custom source code' }
    ]
  }
];

const industriesData = [
  {
    id: 'ind-healthcare',
    tabName: 'Healthcare',
    highlightText: '61% more accurate forecasts and 47% lower staffing spend for a US hospital chain',
    image: 'https://picsum.photos/seed/healthcare/800/600',
    challenges: [
      'EHR and workforce data sat in separate systems, no unified forecasting record.',
      'Planning ran on historical averages, missing seasonal surges and facility differences.',
      'Thousands of forecast series outgrew existing reporting tools.',
      'PHI in forecasts raised compliance risk, needing access controls and masking.'
    ],
    outcomes: [
      '+61% forecast accuracy over historical averages.',
      '47% lower staffing spend on overtime and agency cover.',
      'Daily forecasts across all facilities, replacing monthly manual averaging.',
      'Beds & supplies matched to real demand, with patient-data compliance maintained everywhere.'
    ],
    techStacks: [
      { name: 'Databricks', icon: '🔶' },
      { name: 'Snowflake', icon: '❄️' },
      { name: 'Fivetran', icon: '⚡' },
      { name: 'dbt', icon: '❌' },
      { name: 'Python', icon: '🐍' },
      { name: 'Power BI', icon: '📊' }
    ]
  },
  {
    id: 'ind-finance',
    tabName: 'Finance',
    highlightText: 'Fraud detection latency reduced by 95% and $12M saved annually for a global bank',
    image: 'https://picsum.photos/seed/finance/800/600',
    challenges: [
      'Legacy batch processing delayed fraud identification by up to 24 hours.',
      'High false-positive rates caused customer friction and blocked legitimate transactions.',
      'Data silos prevented a unified view of customer transaction history.',
      'Strict financial regulations required highly auditable machine learning models.'
    ],
    outcomes: [
      'Sub-50ms latency for real-time fraud scoring.',
      '95% reduction in time-to-detect fraudulent transactions.',
      '$12M annual savings from prevented fraud losses.',
      'Fully explainable AI models compliant with global banking regulations.'
    ],
    techStacks: [
      { name: 'AWS', icon: '☁️' },
      { name: 'Kafka', icon: '📨' },
      { name: 'Databricks', icon: '🔶' },
      { name: 'PyTorch', icon: '🔥' },
      { name: 'MongoDB', icon: '🍃' }
    ]
  },
  {
    id: 'ind-manufacturing',
    tabName: 'Manufacturing',
    highlightText: '30% increase in production yield and zero unplanned downtime for a Tier-1 supplier',
    image: 'https://picsum.photos/seed/manufacturing/800/600',
    challenges: [
      'Frequent unplanned machine breakdowns halted entire production lines.',
      'Quality assurance was manual, leading to high defect rates and scrap material.',
      'Supply chain data was disconnected from factory floor IoT sensors.',
      'Legacy ERP systems could not process real-time streaming data.'
    ],
    outcomes: [
      'Zero unplanned downtime achieved through predictive maintenance models.',
      '30% increase in overall production yield.',
      'Automated visual inspection reduced defect escapes by 99%.',
      'Real-time dashboard unifying ERP, supply chain, and IoT data.'
    ],
    techStacks: [
      { name: 'Azure IoT', icon: '☁️' },
      { name: 'Databricks', icon: '🔶' },
      { name: 'TensorFlow', icon: '🧠' },
      { name: 'React', icon: '⚛️' },
      { name: 'Power BI', icon: '📊' }
    ]
  },
  {
    id: 'ind-entertainment',
    tabName: 'Entertainment',
    highlightText: '400% increase in user engagement via AI-driven content personalization',
    image: 'https://picsum.photos/seed/entertainment/800/600',
    challenges: [
      'Generic content recommendations led to high subscriber churn rates.',
      'Inability to process terabytes of daily streaming logs in real-time.',
      'Content discovery was entirely manual and frustrating for end-users.',
      'Video transcoding infrastructure was costly and difficult to scale.'
    ],
    outcomes: [
      '400% increase in daily active user engagement.',
      'Personalized, real-time content recommendations for 10M+ users.',
      '50% reduction in cloud infrastructure costs via serverless transcoding.',
      'Churn rate reduced to industry-leading lows.'
    ],
    techStacks: [
      { name: 'AWS', icon: '☁️' },
      { name: 'Snowflake', icon: '❄️' },
      { name: 'Redis', icon: '⚡' },
      { name: 'Node.js', icon: '🟢' },
      { name: 'React Native', icon: '📱' }
    ]
  },
  {
    id: 'ind-retail',
    tabName: 'Retail',
    highlightText: '25% boost in omnichannel revenue through intelligent inventory routing',
    image: 'https://picsum.photos/seed/retail/800/600',
    challenges: [
      'Disconnected inventory systems led to stockouts online and overstock in stores.',
      'No unified view of the customer journey across digital and physical touchpoints.',
      'Manual pricing strategies failed to respond to market fluctuations.',
      'Slow website performance impacted conversion rates during peak sales.'
    ],
    outcomes: [
      '25% increase in total revenue via optimized omnichannel fulfillment.',
      'Dynamic AI pricing engine responding to real-time market signals.',
      'Unified Customer 360 platform combining POS and e-commerce data.',
      'Sub-second page loads even during Black Friday traffic spikes.'
    ],
    techStacks: [
      { name: 'GCP', icon: '☁️' },
      { name: 'BigQuery', icon: '🔍' },
      { name: 'dbt', icon: '❌' },
      { name: 'Next.js', icon: '▲' },
      { name: 'Tailwind', icon: '🌊' }
    ]
  },
  {
    id: 'ind-education',
    tabName: 'Education',
    highlightText: 'Personalized learning paths improved student retention by 35%',
    image: 'https://picsum.photos/seed/education/800/600',
    challenges: [
      'One-size-fits-all curriculum failed to engage diverse learning styles.',
      'Administrators lacked visibility into at-risk student metrics.',
      'Legacy LMS systems were clunky and not mobile-friendly.',
      'Data privacy regulations (FERPA) made data integration difficult.'
    ],
    outcomes: [
      '35% improvement in student retention and graduation rates.',
      'AI-driven learning paths adapting to individual student progress.',
      'Modern, accessible mobile platform for students and faculty.',
      'Fully compliant, secure data lake for institutional analytics.'
    ],
    techStacks: [
      { name: 'AWS', icon: '☁️' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'Python', icon: '🐍' },
      { name: 'React', icon: '⚛️' },
      { name: 'Snowflake', icon: '❄️' }
    ]
  },
  {
    id: 'ind-realestate',
    tabName: 'Real Estate',
    highlightText: '40% faster property closing cycles through AI-automated document processing',
    image: 'https://picsum.photos/seed/realestate/800/600',
    challenges: [
      'Manual document review caused significant delays in property closings.',
      'Disparate listing platforms led to inconsistent data for prospective buyers.',
      'Valuation models relied on outdated, static neighborhood data.',
      'High volume of customer inquiries overwhelmed the support team.'
    ],
    outcomes: [
      '40% reduction in average property closing time.',
      'Automated NLP pipeline extracting key terms from 10,000+ contracts daily.',
      'Dynamic AI valuation model incorporating real-time market trends.',
      'Intelligent virtual assistant handling 80% of routine buyer inquiries.'
    ],
    techStacks: [
      { name: 'AWS', icon: '☁️' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'TensorFlow', icon: '🧠' },
      { name: 'React', icon: '⚛️' },
      { name: 'Docker', icon: '🐳' }
    ]
  }
];

const capabilitiesData = [
  {
    id: 'ai-automation',
    label: 'AI & Automation',
    title: 'Intelligent Automation & AI',
    description: 'Leverage cutting-edge AI technologies to automate processes and generate insights.',
    features: ['AI Agents', 'ML Models', 'NLP', 'Computer Vision', 'GenAI', 'Intelligent Automation'],
    techs: ['OpenAI', 'PyTorch', 'TensorFlow', 'Claude', 'Gemini', 'LangChain'],
    metrics: [{ number: '85', suffix: '%', label: 'Process Automation' }, { number: '3', suffix: 'x', label: 'Faster Insights' }, { number: '60', suffix: '%', label: 'Cost Reduction' }],
    gradientFrom: '#f26e65',
    gradientTo: '#d94f47'
  },
  {
    id: 'data-analytics',
    label: 'Data & Analytics',
    title: 'Data Engineering & Business Intelligence',
    description: 'Transform your raw data into actionable insights with modern data stacks.',
    features: ['Data Engineering', 'Warehousing', 'BI & Viz', 'Predictive Analytics', 'Data Migration', 'Governance'],
    techs: ['Snowflake', 'Databricks', 'Power BI', 'Tableau', 'BigQuery', 'Spark'],
    metrics: [{ number: '10', suffix: 'x', label: 'Faster Queries' }, { number: '99.9', suffix: '%', label: 'Data Accuracy' }, { number: '40', suffix: '%', label: 'Better Forecasting' }],
    gradientFrom: '#1a1a1a',
    gradientTo: '#333333'
  },
  {
    id: 'cloud-devops',
    label: 'Cloud & DevOps',
    title: 'Cloud Infrastructure & DevOps',
    description: 'Build resilient, scalable, and secure cloud infrastructures.',
    features: ['Cloud Migration', 'Architecture', 'CI/CD', 'Containers', 'IaC', 'Security'],
    techs: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform'],
    metrics: [{ number: '99.99', suffix: '%', label: 'Uptime' }, { number: '5', suffix: 'x', label: 'Faster Deploy' }, { number: '50', suffix: '%', label: 'Cost Savings' }],
    gradientFrom: '#333333',
    gradientTo: '#f26e65'
  },
  {
    id: 'product-engineering',
    label: 'Product Engineering',
    title: 'Scalable Product Engineering',
    description: 'End-to-end product development from ideation to scalable deployment.',
    features: ['Product Strategy', 'UX/UI', 'Full-Stack', 'MVP', 'API Architecture', 'Performance'],
    techs: ['React', 'Node.js', 'Next.js', 'TypeScript', 'PostgreSQL', 'Redis'],
    metrics: [{ number: '2', suffix: 'x', label: 'Time-to-Market' }, { number: '95', suffix: '%', label: 'User Satisfaction' }, { number: '40', suffix: '%', label: 'Higher Engagement' }],
    gradientFrom: '#f26e65',
    gradientTo: '#1a1a1a'
  }
];

const whyChooseData = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    title: 'Expert Talent',
    description: 'Industry-leading engineers and strategists.'
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    title: 'Faster Delivery',
    description: 'Agile methodologies for rapid time-to-market.'
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
    title: 'End-to-End',
    description: 'Comprehensive solutions from strategy to deployment.'
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3z"/><path d="3 4h8S3 4 3 4z"/></svg>`,
    title: 'Long-Term Partnership',
    description: 'Committed to your ongoing success and growth.'
  }
];

const techStackData = [
  { category: 'AI', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>', items: ['OpenAI', 'Claude', 'Gemini', 'Llama', 'PyTorch', 'TensorFlow'] },
  { category: 'Frontend', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>', items: ['React', 'Angular', 'Vue', 'Next.js', 'TypeScript'] },
  { category: 'Backend', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>', items: ['Node.js', 'Python', 'Java', 'PHP', '.NET'] },
  { category: 'Cloud', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>', items: ['AWS', 'Azure', 'Google Cloud'] },
  { category: 'Data', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>', items: ['Snowflake', 'Databricks', 'BigQuery', 'Power BI', 'Tableau'] }
];

const caseStudiesData = [
  {
    industry: 'Healthcare',
    tab: 'Healthcare',
    title: 'AI-Powered Clinical Decision Support Platform',
    challenge: 'A leading healthcare provider needed to analyze millions of patient records to improve diagnostic accuracy.',
    solution: 'Built an AI/ML platform integrating with EHR systems, using NLP for medical records and predictive models for risk assessment.',
    metrics: [
      { number: '+61', suffix: '%', label: 'Forecast Accuracy' },
      { number: '47', suffix: '%', label: 'Lower Cost' },
      { number: '40', suffix: '%', label: 'Faster Processing' }
    ]
  },
  {
    industry: 'Finance',
    tab: 'Finance',
    title: 'Real-Time Fraud Detection System',
    challenge: 'A multinational bank was facing increasing losses due to sophisticated transaction fraud that traditional rule-based systems missed.',
    solution: 'Engineered a machine learning pipeline processing 10k+ TPS, with deep neural networks identifying anomalous patterns in real-time.',
    metrics: [
      { number: '99.9', suffix: '%', label: 'Uptime' },
      { number: '85', suffix: '%', label: 'Fraud Prevention' },
      { number: '60', suffix: 'ms', label: 'Latency' }
    ]
  },
  {
    industry: 'Retail',
    tab: 'Retail',
    title: 'Omnichannel Personalization Engine',
    challenge: 'A global retailer struggled with generic customer experiences causing high bounce rates and abandoned carts.',
    solution: 'Developed a unified customer data platform (CDP) with recommendation algorithms analyzing cross-channel browsing and purchase history.',
    metrics: [
      { number: '+34', suffix: '%', label: 'Conversion Rate' },
      { number: '2.5', suffix: 'x', label: 'Customer LTV' },
      { number: '15', suffix: '%', label: 'AOV Increase' }
    ]
  },
  {
    industry: 'Manufacturing',
    tab: 'Manufacturing',
    title: 'Predictive Maintenance IoT Ecosystem',
    challenge: 'Unexpected equipment downtime was causing millions in lost production and reactive repair costs.',
    solution: 'Deployed edge computing sensors and a cloud-based digital twin platform, utilizing time-series forecasting for maintenance scheduling.',
    metrics: [
      { number: '72', suffix: '%', label: 'Less Downtime' },
      { number: '30', suffix: '%', label: 'Cost Reduction' },
      { number: '100', suffix: '%', label: 'Asset Visibility' }
    ]
  },
  {
    industry: 'Education',
    tab: 'Education',
    title: 'Adaptive Learning Management System',
    challenge: 'A prominent university needed to provide personalized learning paths for diverse student cohorts remotely.',
    solution: 'Built a scalable, microservices-based LMS with generative AI tutors and adaptive quizzes that adjust difficulty based on performance.',
    metrics: [
      { number: '+40', suffix: '%', label: 'Engagement' },
      { number: '95', suffix: '%', label: 'Completion Rate' },
      { number: '24/7', suffix: '', label: 'AI Support' }
    ]
  },
  {
    industry: 'Technology',
    tab: 'Technology',
    title: 'Scalable Cloud Infrastructure Migration',
    challenge: 'A fast-growing SaaS company was constrained by legacy monolithic architecture, causing scalability and release bottlenecks.',
    solution: 'Architected and executed a seamless migration to a cloud-native, containerized architecture managed by Kubernetes and CI/CD pipelines.',
    metrics: [
      { number: '10', suffix: 'x', label: 'Deploy Speed' },
      { number: '99.99', suffix: '%', label: 'Availability' },
      { number: '50', suffix: '%', label: 'Infra Savings' }
    ]
  }
];

const testimonialsData = [
  { quote: "The team delivered an AI-powered analytics platform that transformed how we understand customer behavior. Exceptional technical depth.", name: 'Sarah Mitchell', role: 'CTO', company: 'Meridian FinTech', initials: 'SM' },
  { quote: "Their cloud migration expertise saved us months. Infrastructure costs dropped 40% while performance improved dramatically.", name: 'James Chen', role: 'VP Engineering', company: 'Atlas Logistics', initials: 'JC' },
  { quote: "From concept to launch in 12 weeks. They built exactly what we envisioned — and improved on it.", name: 'Emma Rodriguez', role: 'Founder', company: 'Pulse HealthTech', initials: 'ER' },
  { quote: "Outstanding data engineering. Real-time analytics processing millions of events daily with zero downtime.", name: 'Michael Torres', role: 'Head of Data', company: 'Vertex Retail', initials: 'MT' },
  { quote: "AI agents automation reduced manual processing by 85%. ROI visible within the first quarter.", name: 'Priya Sharma', role: 'COO', company: 'Shield Insurance', initials: 'PS' }
];

const recognitionData = [
  { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>', title: 'Industry Leader', description: 'Recognized by top tech analysts' },
  { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>', title: 'Client Satisfaction Excellence', description: '99% client retention rate' },
  { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>', title: 'Fastest Growing', description: 'Top 100 fastest growing tech firms' },
  { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>', title: 'Global Impact Award', description: 'Driving positive change globally' }
];

const awardsData = [
  { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>', title: 'Cloud Excellence Partner', issuer: 'AWS' },
  { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"></path><path d="M10 22h4"></path><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path></svg>', title: 'AI Innovation Award', issuer: 'Technology Council' },
  { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>', title: 'Best Workplace in Tech', issuer: 'Employer Awards' },
  { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>', title: 'ISO 27001 Certified', issuer: 'Information Security' },
  { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>', title: 'CMMI Level 3', issuer: 'Process Maturity' },
  { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>', title: 'Top Technology Company', issuer: 'Industry Review' }
];

const locationsData = [
  { flag: '<img src="https://flagcdn.com/w80/gb.png" width="50" height="50" alt="UK Flag" loading="lazy" style="border-radius: 50%; object-fit: cover; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">', country: 'United Kingdom', city: 'London', address: '123 Tech Hub, London EC2A 4NE', phone: '+44 20 1234 5678' },
  { flag: '<img src="https://flagcdn.com/w80/us.png" width="50" height="50" alt="US Flag" loading="lazy" style="border-radius: 50%; object-fit: cover; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">', country: 'United States', city: 'New York', address: '456 Innovation Ave, New York, NY 10001', phone: '+1 212 555 0100' },
  { flag: '<img src="https://flagcdn.com/w80/in.png" width="50" height="50" alt="India Flag" loading="lazy" style="border-radius: 50%; object-fit: cover; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">', country: 'India', city: 'Ahmedabad', address: '789 Digital Park, Ahmedabad 380015', phone: '+91 79 1234 5678' },
  { flag: '<img src="https://flagcdn.com/w80/de.png" width="50" height="50" alt="Germany Flag" loading="lazy" style="border-radius: 50%; object-fit: cover; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">', country: 'Europe', city: 'Berlin', address: '101 Tech Quarter, Berlin 10115', phone: '+49 30 1234 5678' }
];

const clientLogos = [
  { name: 'Meridian' }, { name: 'Atlas' }, { name: 'Pulse' }, { name: 'Vertex' },
  { name: 'Shield' }, { name: 'Apex' }, { name: 'Nova' }, { name: 'Prism' },
  { name: 'Orbit' }, { name: 'Zenith' }, { name: 'Forge' }, { name: 'Nexus' }
];

const footerData = {
  columns: [
    { heading: 'Services', links: [{ label: 'AI & Automation', href: '#' }, { label: 'Software Dev', href: '#' }, { label: 'Data & Analytics', href: '#' }, { label: 'Cloud & DevOps', href: '#' }, { label: 'Product Engineering', href: '#' }] },
    { heading: 'Industries', links: [{ label: 'Healthcare', href: '#' }, { label: 'Finance', href: '#' }, { label: 'Retail', href: '#' }, { label: 'Manufacturing', href: '#' }, { label: 'Education', href: '#' }] },
    { heading: 'Company', links: [{ label: 'About Us', href: '#' }, { label: 'Careers', href: '#' }, { label: 'News', href: '#' }, { label: 'Contact', href: '#' }] },
    { heading: 'Resources', links: [{ label: 'Blog', href: '#' }, { label: 'Case Studies', href: '#' }, { label: 'Whitepapers', href: '#' }, { label: 'Webinars', href: '#' }] }
  ]
};

// ==========================================
// PART 2: RENDER FUNCTIONS
// ==========================================

function renderMegaMenus() {
  const navContainer = document.querySelector('.header__nav');
  if (!navContainer) return;
  
  let html = '';
  navigationData.forEach(item => {
    let panelHtml = '';
    
    if (item.type === 'dropdown') {
      let linksHtml = '';
      if (item.megaMenu && item.megaMenu.columns) {
        item.megaMenu.columns.forEach(col => {
          col.links.forEach(link => {
            linksHtml += `<a href="${link.href}" class="featured-dropdown__link">${link.label}</a>`;
          });
        });
      }
      panelHtml = `
        <div class="mega-menu featured-dropdown">
          <div class="featured-dropdown__inner container">
            <div class="featured-dropdown__top">
              <div class="featured-dropdown__content">
                <h3 class="featured-dropdown__title">${item.label}</h3>
                <div class="featured-dropdown__grid">
                  ${linksHtml}
                </div>
              </div>
              <div class="featured-dropdown__graphic">
                <div class="featured-dropdown__graphic-number">${item.graphicNum || '250+'}</div>
                <div class="featured-dropdown__graphic-text">${item.graphicText || 'ENTERPRISE<br>PROJECTS'}</div>
              </div>
            </div>
            <div class="featured-dropdown__bottom">
              <div class="featured-dropdown__bottom-text">
                <h4>${item.ctaTitle || 'Accelerate Your Digital Transformation'}</h4>
                <p>${item.ctaDesc || 'Schedule a free discovery session to explore your needs and find tailored solutions with no obligation.'}</p>
              </div>
              <a href="#consultation" class="btn btn--dark">SCHEDULE A CALL</a>
            </div>
          </div>
        </div>
      `;
    } else if (item.type === 'mega') {
      const cols = item.megaMenu ? item.megaMenu.columns : [];
      
      if (item.label === 'About') {
        // About: simple columns + image side-by-side (no tabs)
        let colsHtml = '';
        cols.forEach(col => {
          let links = col.links.map(l => `<a href="${l.href}" class="mega-menu__link">${l.label}</a>`).join('');
          colsHtml += `<div class="mega-menu__col"><div class="mega-menu__heading">${col.heading}</div><div class="mega-menu__list">${links}</div></div>`;
        });
        panelHtml = `
          <div class="mega-menu">
            <div class="mega-menu__inner">
              <div class="mega-menu__about-layout">
                <div class="mega-menu__about-cols">${colsHtml}</div>
                <div class="mega-menu__about-image">
                  <div class="mega-menu__about-image-inner">
                    <span class="mega-menu__about-image-text">Enterprise Technology Partner</span>
                  </div>
                </div>
              </div>
              <div class="mega-menu__bottom"><span>High-quality, cost-effective technology solutions</span> <a href="#consultation" class="btn btn--primary">Schedule a Call</a></div>
            </div>
          </div>
        `;
      } else if (cols.length >= 2) {
        // Tabbed mega menu (Services, Solutions, Industries, Technologies)
        let tabsHtml = '';
        let panelsHtml = '';
        cols.forEach((col, idx) => {
          const activeClass = idx === 0 ? ' active' : '';
          const displayStyle = idx === 0 ? 'display:block' : 'display:none';
          tabsHtml += `<li class="mega-tab__item${activeClass}" data-tab-idx="${idx}" role="button" tabindex="0">
            <span>${col.heading}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 6 15 12 9 18"/></svg>
          </li>`;
          let links = col.links.map(l => `<a href="${l.href}" class="mega-menu__link">${l.label}</a>`).join('');
          panelsHtml += `<div class="mega-tab__panel${activeClass}" data-tab-panel="${idx}" style="${displayStyle}">
            <p class="mega-tab__panel-title">${col.heading}</p>
            <div class="mega-tab__panel-links">${links}</div>
          </div>`;
        });
        
        let ctaHtml = item.megaMenu.cta 
          ? `<div class="mega-menu__bottom"><span>Need help choosing the right solution?</span> <a href="#consultation" class="btn btn--primary">Schedule a Call</a></div>` 
          : '';
        
        panelHtml = `
          <div class="mega-menu mega-menu--tabbed">
            <div class="mega-menu__inner">
              <div class="mega-tab">
                <ul class="mega-tab__sidebar">${tabsHtml}</ul>
                <div class="mega-tab__content">${panelsHtml}</div>
              </div>
              ${ctaHtml}
            </div>
          </div>
        `;
      } else {
        // Single column mega (Industries with 1 column)
        let links = cols[0].links.map(l => `<a href="${l.href}" class="mega-menu__link">${l.label}</a>`).join('');
        panelHtml = `
          <div class="mega-menu">
            <div class="mega-menu__inner">
              <div class="mega-menu__heading">${cols[0].heading}</div>
              <div class="mega-menu__single-grid">${links}</div>
            </div>
          </div>
        `;
      }
    }
    
    const chevronSvg = (item.type === 'mega' || item.type === 'dropdown') 
      ? `<svg class="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 4px; transition: transform 0.3s;"><polyline points="6 9 12 15 18 9"></polyline></svg>` 
      : '';
      
    html += `
      <div class="nav-item">
        <a href="${item.href}" class="nav-item__link">${item.label}${chevronSvg}</a>
        ${panelHtml}
      </div>
    `;
  });
  
  navContainer.innerHTML = html;
}

function renderMobileDrawer() {
  const drawer = document.createElement('div');
  drawer.className = 'mobile-drawer';
  
  let itemsHtml = '';
  navigationData.forEach((item, index) => {
    if (item.type === 'mega' || item.type === 'dropdown') {
      let subLinks = '';
      item.megaMenu.columns.forEach(col => {
        subLinks += `<div class="mobile-drawer__subheading">${col.heading}</div>`;
        col.links.forEach(link => {
          subLinks += `<a href="${link.href}" class="mobile-drawer__link">${link.label}</a>`;
        });
      });
      itemsHtml += `
        <div class="mobile-drawer__item">
          <div class="mobile-drawer__item-header" data-index="${index}">
            ${item.label}
            <svg class="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </div>
          <div class="mobile-drawer__subnav" id="subnav-${index}">
            <div style="padding-bottom: 16px;">${subLinks}</div>
          </div>
        </div>
      `;
    } else {
      itemsHtml += `
        <div class="mobile-drawer__item">
          <a href="${item.href}" class="mobile-drawer__item-header" style="display: block; text-decoration: none; color: inherit;">${item.label}</a>
        </div>
      `;
    }
  });

  drawer.innerHTML = `
    <div class="mobile-drawer__header">
      <div class="header__logo">
        <img src="images/cypherox-logo.png" alt="Cypherox Logo" style="height: 20px; width: auto;">
      </div>
      <button class="mobile-drawer__close" aria-label="Close menu" style="background: none; border: none; cursor: pointer;">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
    </div>
    <div class="mobile-drawer__body">
      ${itemsHtml}
    </div>
    <div class="mobile-drawer__footer" style="display: flex; flex-direction: column; gap: 12px;">
      <a href="#consultation" class="btn btn--outline" style="width: 100%; text-align: center; justify-content: center;">Let's Talk</a>
      <a href="#consultation" class="btn btn--dark" style="width: 100%; text-align: center; justify-content: center;">Book A 15 Min Call</a>
    </div>
  `;
  
  const overlay = document.createElement('div');
  overlay.className = 'mobile-drawer__overlay';
  overlay.style.display = 'none';
  
  document.body.appendChild(overlay);
  document.body.appendChild(drawer);
}

function renderServices() {
  const container = document.getElementById('services-container');
  if (!container) return;
  
  let html = '<div class="bellows-container fade-up">';
  
  disciplinesData.forEach((disc, index) => {
    let featuresHtml = disc.features.map(f => `
      <li>
        <svg class="discipline-check" viewBox="0 0 24 24" fill="var(--primary)" stroke="none">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
        <span>${f}</span>
      </li>`).join('');
      
    let tagsHtml = disc.techTags.map(t => `<span class="discipline-tag">${t}</span>`).join('');
    
    let outcomesHtml = disc.outcomes.map(o => `
      <div class="discipline-outcome">
        <div class="discipline-outcome__highlight">${o.highlight}</div>
        <div class="discipline-outcome__text">${o.text}</div>
      </div>
    `).join('');

    html += `
      <div class="bellows-item${index === 0 ? ' active' : ''}" tabindex="0">
        <div class="bellows-item__header">
          <h3 class="bellows-item__title-vertical">${disc.tabName}</h3>
        </div>
        <div class="bellows-item__content">
          <div class="bellows-item__inner bellows-content-grid">
            <div class="bellows-col-left">
              <h3 class="discipline-panel__title">${disc.title}</h3>
              <p class="discipline-panel__desc">${disc.description}</p>
              
              <div class="discipline-panel__tech-section">
                <h4 class="discipline-panel__subtitle">Tech & Platforms</h4>
                <div class="discipline-panel__tags">${tagsHtml}</div>
              </div>
              
              <div style="margin-top: 16px;">
                <a href="${disc.ctaLink}" class="btn btn--primary">${disc.ctaText}</a>
              </div>
            </div>
            
            <div class="bellows-col-right">
              <ul class="discipline-panel__features">${featuresHtml}</ul>
              
              <div class="discipline-panel__outcomes-section">
                <h4 class="discipline-panel__subtitle">Typical Outcomes</h4>
                <div class="discipline-panel__outcomes">${outcomesHtml}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  });
  
  html += '</div>';
  container.innerHTML = html;
}

function renderIndustries() {
  const container = document.getElementById('industries-container');
  if (!container) return;
  
  let html = `
    <div class="sticky-scroll-container">
      <div class="sticky-scroll-sidebar">
        <h2 class="section-title fade-up">Real Results<br>Across Industries.</h2>
        <p class="section-subtitle fade-up" style="margin-top: 16px;">We don't just build software. We build specialized solutions tailored to the unique regulatory, operational, and customer demands of your sector.</p>
      </div>
      <div class="sticky-scroll-content">
  `;
  
  industriesData.forEach((ind, index) => {
    let challengesHtml = ind.challenges.map(c => `
      <li>
        <svg class="industry-check" viewBox="0 0 24 24" fill="var(--primary)" stroke="none">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
        <span>${c}</span>
      </li>`).join('');
      
    let outcomesHtml = ind.outcomes.map(o => `
      <li>
        <svg class="industry-check" viewBox="0 0 24 24" fill="var(--primary)" stroke="none">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
        <span>${o}</span>
      </li>`).join('');
      
    let techHtml = ind.techStacks.map(t => `
      <span class="industry-tech-tag">
        <span class="tech-icon">${t.icon}</span> ${t.name}
      </span>
    `).join('');

    html += `
      <div class="sticky-industry-card fade-up">
        <div class="sticky-industry-card__image-wrapper">
          <img src="${ind.image}" alt="${ind.tabName} Case Study" loading="lazy">
          <div class="sticky-industry-card__badge">${ind.tabName}</div>
        </div>
        <div class="sticky-industry-card__body">
          <div class="industry-panel__topbar">
            ${ind.highlightText}
          </div>
          <div class="industry-panel__grid">
            <div class="industry-panel__col">
              <h4 class="industry-panel__subtitle">Key Challenges Solved</h4>
              <ul class="industry-panel__list">${challengesHtml}</ul>
            </div>
            <div class="industry-panel__col">
              <h4 class="industry-panel__subtitle">Business Outcomes</h4>
              <ul class="industry-panel__list">${outcomesHtml}</ul>
            </div>
          </div>
          <div class="industry-panel__tech-section">
            <h4 class="industry-panel__subtitle">Key Technologies</h4>
            <div class="industry-panel__tech-tags">${techHtml}</div>
          </div>
        </div>
      </div>
    `;
  });
  
  html += `
      </div>
    </div>
  `;
  container.innerHTML = html;
}

function renderCapabilityTabs() {
  const container = document.getElementById('capabilities-container');
  if (!container) return;
  
  let navHtml = '<div class="capabilities__tabs-nav fade-up">';
  let panelsHtml = '';
  
  capabilitiesData.forEach((cap, index) => {
    const isActive = index === 0 ? 'active' : '';
    navHtml += `<button class="tab-btn ${isActive}" data-target="${cap.id}">${cap.label}</button>`;
    
    let featuresHtml = cap.features.map(f => `
      <div class="tab-panel__feature">
        <svg class="tab-panel__feature-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        ${f}
      </div>
    `).join('');
    
    let techsHtml = cap.techs.map(t => `<span class="tab-panel__tech">${t}</span>`).join('');
    let metricsHtml = cap.metrics.map(m => `
      <div class="tab-panel__metric">
        <div class="tab-panel__metric-number">${m.number}${m.suffix}</div>
        <div class="tab-panel__metric-label">${m.label}</div>
      </div>
    `).join('');
    
    panelsHtml += `
      <div class="tab-panel ${isActive}" id="panel-${cap.id}">
        <div class="tab-panel__content">
          <h3 class="tab-panel__title">${cap.title}</h3>
          <p class="tab-panel__desc">${cap.description}</p>
          <div class="tab-panel__features">${featuresHtml}</div>
          <div class="tab-panel__techs">${techsHtml}</div>
          <div class="tab-panel__metrics">${metricsHtml}</div>
        </div>
        <div class="tab-panel__visual" style="background: linear-gradient(135deg, ${cap.gradientFrom}, ${cap.gradientTo});"></div>
      </div>
    `;
  });
  navHtml += '</div>';
  
  container.innerHTML = navHtml + panelsHtml;
}

function renderWhyChoose() {
  const container = document.getElementById('why-container');
  if (!container) return;
  
  let html = '<div class="timeline-container">';
  whyChooseData.forEach((item, index) => {
    const num = (index + 1).toString().padStart(2, '0');
    html += `
      <div class="timeline-item fade-up">
        <div class="timeline-item__number">${num}</div>
        <div class="timeline-item__content">
          <div class="timeline-item__icon">${item.icon}</div>
          <h3 class="timeline-item__title">${item.title}</h3>
          <p class="timeline-item__desc">${item.description}</p>
        </div>
      </div>
    `;
  });
  html += '</div>';
  container.innerHTML = html;
}

function renderTechStack() {
  const container = document.getElementById('tech-stack-container');
  if (!container) return;
  
  let html = '<div class="tech-categories">';
  techStackData.forEach(tech => {
    let badgesHtml = tech.items.map(item => `<div class="tech-badge">${item}</div>`).join('');
    html += `
      <div class="tech-category fade-up">
        <h3 class="tech-category__title"><span>${tech.icon}</span> ${tech.category}</h3>
        <div class="tech-badges">${badgesHtml}</div>
      </div>
    `;
  });
  html += '</div>';
  container.innerHTML = html;
}

function renderCaseStudy() {
  const container = document.getElementById('case-studies-container');
  if (!container) return;
  
  let tabsHtml = '<div class="case-tabs-nav fade-up">';
  caseStudiesData.forEach((item, i) => {
    tabsHtml += `<button class="case-tab-btn ${i === 0 ? 'active' : ''}" data-index="${i}">${item.tab}</button>`;
  });
  tabsHtml += '</div>';
  
  let cardsHtml = '<div class="case-cards-wrapper">';
  caseStudiesData.forEach((f, i) => {
    let metricsHtml = f.metrics.map(m => `
      <div class="case-metric">
        <div class="case-metric__number">${m.number}${m.suffix}</div>
        <div class="case-metric__label">${m.label}</div>
      </div>
    `).join('');
    
    let displayStyle = i === 0 ? '' : 'display: none;';
    
    cardsHtml += `
      <div class="case-card fade-up case-card-panel" data-index="${i}" style="${displayStyle}">
        <div class="case-card__content">
          <div class="case-card__tag">${f.industry}</div>
          <h3 class="case-card__title">${f.title}</h3>
          <div class="case-card__text"><span class="case-card__label">Challenge:</span> ${f.challenge}</div>
          <div class="case-card__text"><span class="case-card__label">Solution:</span> ${f.solution}</div>
          <div class="case-card__metrics">${metricsHtml}</div>
        </div>
        <div class="case-card__visual" style="background: linear-gradient(135deg, #f26e65, #d94f47);"></div>
      </div>
    `;
  });
  cardsHtml += '</div>';
  
  container.innerHTML = tabsHtml + cardsHtml;
}

function renderTestimonials() {
  const container = document.getElementById('testimonials-container');
  if (!container) return;
  
  let trackHtml = '<div class="testimonial-carousel fade-up"><div class="testimonial-track" id="testimonial-track">';
  
  // Clone the first 3 items and append them to the end for seamless infinite loop across 3 visible columns
  const renderData = [...testimonialsData, ...testimonialsData.slice(0, 3)];
  
  renderData.forEach(t => {
    trackHtml += `
      <div class="testimonial-card">
        <div class="testimonial-card__stars">★★★★★</div>
        <div class="testimonial-card__quote">"${t.quote}"</div>
        <div class="testimonial-card__author">
          <div class="testimonial-card__avatar">${t.initials}</div>
          <div>
            <div class="testimonial-card__name">${t.name}</div>
            <div class="testimonial-card__role">${t.role}, ${t.company}</div>
          </div>
        </div>
      </div>
    `;
  });
  trackHtml += '</div></div>';
  
  let controlsHtml = `
    <div class="carousel-controls fade-up">
      <button class="carousel-btn carousel-btn--prev" aria-label="Previous">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>
      <div class="carousel-dots" id="carousel-dots">
        ${testimonialsData.map((_, i) => `<div class="carousel-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></div>`).join('')}
      </div>
      <button class="carousel-btn carousel-btn--next" aria-label="Next">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </button>
    </div>
  `;
  
  container.innerHTML = trackHtml + controlsHtml;
}

function renderLogoMarquee() {
  const container = document.getElementById('logo-container');
  if (!container) return;
  
  // Duplicate for infinite scroll
  const allLogos = [...clientLogos, ...clientLogos];
  let itemsHtml = allLogos.map(logo => `<div class="logo-marquee__item" style="font-weight:700; font-size:24px;">${logo.name}</div>`).join('');
  
  container.innerHTML = `
    <div class="logo-marquee">
      <div class="logo-marquee__track">
        ${itemsHtml}
      </div>
    </div>
  `;
}

function renderRecognition() {
  const container = document.getElementById('recognition-container');
  if (!container) return;
  
  let html = '<div class="editorial-list">';
  recognitionData.forEach(item => {
    html += `
      <div class="editorial-list__row fade-up">
        <h4 class="editorial-list__title">${item.title}</h4>
        <p class="editorial-list__desc">${item.description}</p>
        <div class="editorial-list__icon">${item.icon}</div>
      </div>
    `;
  });
  html += '</div>';
  container.innerHTML = html;
}

function renderAwards() {
  const container = document.getElementById('certifications-container');
  if (!container) return;
  
  const marqueeItems = [...awardsData, ...awardsData, ...awardsData];
  
  let html = '<div class="awards-marquee"><div class="awards-marquee__track">';
  marqueeItems.forEach(award => {
    html += `
      <div class="award-marquee-item">
        <div class="award-marquee-item__icon">${award.icon}</div>
        <div class="award-marquee-item__content">
          <div class="award-marquee-item__title">${award.title}</div>
          <div class="award-marquee-item__issuer">${award.issuer}</div>
        </div>
      </div>
    `;
  });
  html += '</div></div>';
  container.innerHTML = html;
}

function renderLocations() {
  const container = document.getElementById('locations-container');
  if (!container) return;
  
  let html = '<div class="locations-grid">';
  locationsData.forEach(loc => {
    html += `
      <div class="location-card fade-up">
        <div class="location-card__flag">${loc.flag}</div>
        <h3 class="location-card__country">${loc.country}</h3>
        <div class="location-card__city">${loc.city}</div>
        <p class="location-card__address">${loc.address}</p>
        <a href="tel:${loc.phone.replace(/\s+/g, '')}" class="location-card__link">${loc.phone}</a>
      </div>
    `;
  });
  html += '</div>';
  container.innerHTML = html;
}

function renderFooter() {
  const container = document.getElementById('footer-container');
  if (!container) return;
  
  let colsHtml = footerData.columns.map(col => `
    <div class="footer__col">
      <h4 class="footer__heading">${col.heading}</h4>
      <ul class="footer__list">
        ${col.links.map(link => `<li><a href="${link.href}" class="footer__link">${link.label}</a></li>`).join('')}
      </ul>
    </div>
  `).join('');
  
  container.innerHTML = `
    <div class="footer__grid">
      <div class="footer__brand">
        <div class="footer__brand-logo">
          <img src="images/cypherox-logo.png" alt="Cypherox Logo" style="height: 20px; width: auto; filter: invert(1) brightness(2);">
        </div>
        <p class="footer__brand-desc">Enterprise technology solutions that drive digital transformation and accelerate growth.</p>
        <div class="footer__social">
          <a href="#" class="footer__social-link" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="#" class="footer__social-link" aria-label="Twitter">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
          </a>
          <a href="#" class="footer__social-link" aria-label="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
        </div>
      </div>
      ${colsHtml}
    </div>
    <div class="footer__bottom">
      <div class="footer__copyright">&copy; ${new Date().getFullYear()} Cypherox. All rights reserved.</div>
      <div class="footer__legal">
        <a href="#" class="footer__legal-link">Privacy Policy</a>
        <a href="#" class="footer__legal-link">Terms of Service</a>
        <a href="#" class="footer__legal-link">Cookie Policy</a>
      </div>
    </div>
  `;
}

// ==========================================
// PART 3: INTERACTION HANDLERS
// ==========================================

function initStickyHeader() {
  const header = document.querySelector('.header');
  if (!header) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

function initMegaMenus() {
  const navItems = document.querySelectorAll('.nav-item');
  
  navItems.forEach(item => {
    let timeout;
    
    item.addEventListener('mouseenter', () => {
      clearTimeout(timeout);
      navItems.forEach(ni => ni.classList.remove('active'));
      item.classList.add('active');
    });
    
    item.addEventListener('mouseleave', () => {
      timeout = setTimeout(() => {
        item.classList.remove('active');
      }, 200);
    });
  });
  
  // Tab switching for tabbed mega menus
  document.querySelectorAll('.mega-tab__sidebar').forEach(sidebar => {
    const tabItems = sidebar.querySelectorAll('.mega-tab__item');
    const contentArea = sidebar.closest('.mega-tab').querySelector('.mega-tab__content');
    const panels = contentArea.querySelectorAll('.mega-tab__panel');
    
    tabItems.forEach(tab => {
      tab.addEventListener('mouseenter', () => {
        const idx = tab.getAttribute('data-tab-idx');
        tabItems.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        panels.forEach(p => {
          p.classList.remove('active');
          p.style.display = 'none';
        });
        const target = contentArea.querySelector(`[data-tab-panel="${idx}"]`);
        if (target) {
          target.classList.add('active');
          target.style.display = 'block';
        }
      });
      
      // Keyboard support
      tab.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          tab.dispatchEvent(new Event('mouseenter'));
        }
      });
    });
  });
  
  // Close mega menus when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-item')) {
      navItems.forEach(ni => ni.classList.remove('active'));
    }
  });
}

function initMobileDrawer() {
  const toggle = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const overlay = document.querySelector('.mobile-drawer__overlay');
  const closeBtn = document.querySelector('.mobile-drawer__close');
  
  if (!toggle || !drawer || !overlay) return;
  
  const openDrawer = () => {
    drawer.classList.add('open');
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  };
  
  const closeDrawer = () => {
    drawer.classList.remove('open');
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  };
  
  toggle.addEventListener('click', openDrawer);
  closeBtn?.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);
  
  // Accordion for drawer subnavs
  const headers = document.querySelectorAll('.mobile-drawer__item-header');
  headers.forEach(header => {
    header.addEventListener('click', (e) => {
      const idx = header.getAttribute('data-index');
      if (idx === null) return;
      e.preventDefault();
      
      const subnav = document.getElementById(`subnav-${idx}`);
      if (subnav) {
        const isOpen = header.classList.contains('expanded');
        
        // Close all first
        headers.forEach(h => h.classList.remove('expanded'));
        document.querySelectorAll('.mobile-drawer__subnav').forEach(s => s.classList.remove('open'));
        
        if (!isOpen) {
          header.classList.add('expanded');
          subnav.classList.add('open');
          subnav.style.maxHeight = subnav.scrollHeight + 'px';
        } else {
          subnav.style.maxHeight = '0';
        }
      }
    });
  });
}

function initScrollAnimations() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const elements = document.querySelectorAll('.fade-up');
  
  if (prefersReducedMotion) {
    elements.forEach(el => el.classList.add('visible'));
    return;
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  elements.forEach(el => observer.observe(el));
}

function initStatsCounter() {
  const section = document.getElementById('stats');
  const counters = document.querySelectorAll('.stat-card__number');
  if (!section || counters.length === 0) return;
  
  let started = false;
  
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !started) {
      started = true;
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target') || '0', 10);
        const duration = 2000;
        let start = null;
        
        const step = (timestamp) => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          counter.innerText = Math.floor(progress * target).toString();
          if (progress < 1) {
            window.requestAnimationFrame(step);
          } else {
            counter.innerText = target.toString();
          }
        };
        window.requestAnimationFrame(step);
      });
      observer.disconnect();
    }
  }, { threshold: 0.5 });
  
  observer.observe(section);
}

function initCapabilityTabs() {
  const btns = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.tab-panel');
  
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      
      btn.classList.add('active');
      const targetId = btn.getAttribute('data-target');
      document.getElementById(`panel-${targetId}`)?.classList.add('active');
    });
  });
}

function initBellows() {
  const headers = document.querySelectorAll('.bellows-item__header');
  headers.forEach(header => {
    header.addEventListener('click', () => {
      // Toggle active class on mobile
      if (window.innerWidth <= 768) {
        const item = header.parentElement;
        const isActive = item.classList.contains('active');
        
        // Remove active from all items
        document.querySelectorAll('.bellows-item').forEach(b => b.classList.remove('active'));
        
        // Toggle the clicked one
        if (!isActive) {
          item.classList.add('active');
        }
      }
    });
  });
}

function initCaseStudyTabs() {
  const container = document.getElementById('case-studies-container');
  if (!container) return;
  container.addEventListener('click', (e) => {
    if (e.target.classList.contains('case-tab-btn')) {
      const btns = container.querySelectorAll('.case-tab-btn');
      const panels = container.querySelectorAll('.case-card-panel');
      btns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const idx = e.target.getAttribute('data-index');
      panels.forEach(p => {
        if (p.getAttribute('data-index') === idx) {
          p.style.display = '';
        } else {
          p.style.display = 'none';
        }
      });
    }
  });
}

function initTestimonialCarousel() {
  const track = document.getElementById('testimonial-track');
  const dots = document.querySelectorAll('.carousel-dot');
  const prevBtn = document.querySelector('.carousel-btn--prev');
  const nextBtn = document.querySelector('.carousel-btn--next');
  
  if (!track || !dots.length) return;
  
  let currentIndex = 0;
  let realCount = testimonialsData.length;
  let isAnimating = false;
  let autoAdvance;
  
  const updateCarousel = (animate = true) => {
    const cardWidth = track.children[0].offsetWidth;
    const computedStyle = window.getComputedStyle(track.children[0]);
    const marginRight = parseInt(computedStyle.marginRight, 10) || 0;
    const offset = currentIndex * (cardWidth + marginRight);
    
    track.style.transition = animate ? 'transform 0.5s ease' : 'none';
    track.style.transform = `translateX(-${offset}px)`;
    
    const activeDot = currentIndex % realCount;
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === activeDot);
    });
  };
  
  track.addEventListener('transitionend', () => {
    isAnimating = false;
    if (currentIndex >= realCount) {
      currentIndex = 0;
      updateCarousel(false);
    }
  });
  
  const nextSlide = () => {
    if (isAnimating) return;
    isAnimating = true;
    currentIndex++;
    updateCarousel(true);
  };
  
  const prevSlide = () => {
    if (isAnimating) return;
    if (currentIndex <= 0) {
      currentIndex = realCount;
      updateCarousel(false);
      // Force reflow to ensure the transition skip applies
      void track.offsetWidth;
    }
    isAnimating = true;
    currentIndex--;
    updateCarousel(true);
  };
  
  nextBtn?.addEventListener('click', () => {
    nextSlide();
    startAuto();
  });
  prevBtn?.addEventListener('click', () => {
    prevSlide();
    startAuto();
  });
  
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      if (isAnimating) return;
      currentIndex = i;
      updateCarousel(true);
      startAuto();
    });
  });
  
  const startAuto = () => {
    clearInterval(autoAdvance);
    autoAdvance = setInterval(nextSlide, 5000);
  };
  startAuto();
  
  const carouselContainer = document.querySelector('.testimonial-carousel');
  carouselContainer?.addEventListener('mouseenter', () => clearInterval(autoAdvance));
  carouselContainer?.addEventListener('mouseleave', startAuto);
  
  window.addEventListener('resize', () => updateCarousel(false));
}

function initContactForm() {
  const form = document.getElementById('consultation-form');
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;
    
    // Basic validation logic
    const inputs = form.querySelectorAll('.form-input');
    inputs.forEach(input => {
      if (input.hasAttribute('required') && !input.value.trim()) {
        isValid = false;
        input.classList.add('error');
        const errorText = input.parentElement.querySelector('.form-error-text');
        if (errorText) errorText.classList.add('visible');
      } else {
        input.classList.remove('error');
        const errorText = input.parentElement.querySelector('.form-error-text');
        if (errorText) errorText.classList.remove('visible');
      }
      
      if (input.type === 'email' && input.value.trim()) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value)) {
          isValid = false;
          input.classList.add('error');
          const errorText = input.parentElement.querySelector('.form-error-text');
          if (errorText) {
            errorText.textContent = 'Please enter a valid email';
            errorText.classList.add('visible');
          }
        }
      }
    });
    
    if (isValid) {
      form.style.display = 'none';
      const successMsg = document.getElementById('form-success');
      if (successMsg) successMsg.classList.add('visible');
    }
  });
  
  // Real-time validation
  const inputs = form.querySelectorAll('.form-input');
  inputs.forEach(input => {
    input.addEventListener('blur', () => {
      if (input.hasAttribute('required') && input.value.trim()) {
        input.classList.remove('error');
        input.classList.add('success');
        const errorText = input.parentElement.querySelector('.form-error-text');
        if (errorText) errorText.classList.remove('visible');
      }
    });
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ==========================================
// PART 4: INITIALIZATION
// ==========================================

document.addEventListener('includesLoaded', () => {
  // Render dynamic content
  renderMegaMenus();
  renderMobileDrawer();
  renderServices();
  renderIndustries();

  renderWhyChoose();
  renderTechStack();

  renderTestimonials();

  renderRecognition();
  renderAwards();
  renderLocations();
  renderFooter();

  // Initialize interactive behaviors
  initStickyHeader();
  initMegaMenus();
  initMobileDrawer();
  initScrollAnimations();
  initStatsCounter();
  initCapabilityTabs();
  initBellows();
  initCaseStudyTabs();
  initTestimonialCarousel();
  initContactForm();
  initSmoothScroll();
});

/**
 * Cypherox Enterprise Landing Page - Main JavaScript
 * This file contains all structured data, rendering logic and interactive behavior.
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
    href: '/ai-agent'
  },
  {
    label: 'Services',
    href: 'javascript:;',
    type: 'dropdown',
    ctaTitle: 'Build Enterprise AI & Custom Software',
    ctaDesc: 'Schedule a discovery session with our engineering team to explore custom solutions tailored to your business.',
    megaMenu: {
      columns: [
        {
          heading: 'Generative AI Solutions',
          links: [
            { label: 'AI Chatbot Development', href: '/ai-chatbot-development' },
            { label: 'Virtual Assistant Services', href: '/virtual-assistant' },
            { label: 'AI Language Translator', href: '/ai-language-translator' },
            { label: 'AI Content Generator', href: '/ai-content-generator' },
            { label: 'Virtual Research Assistant', href: '/virtual-research-assistant' }
          ]
        },
        {
          heading: 'AI & ML Development',
          links: [
            { label: 'Predictive Maintenance', href: '/predictive-maintenance' },
            { label: 'Fraud Detection', href: '/fraud-detection' },
            { label: 'AutoML', href: '/auto-ml-development' }
          ]
        },
        {
          heading: 'Consulting Services',
          links: [
            { label: 'IT Consulting', href: '/it-consulting' },
            { label: 'Startup IT Consulting', href: '/startup-it-consulting' },
            { label: 'AI Strategy Consulting', href: '/ai-strategy-consulting' }
          ]
        },
        {
          heading: 'UI/UX Design Services',
          links: [
            { label: 'Responsive Web Design', href: '/responsive-web-design' },
            { label: 'Mobile App Design', href: '/mobile-app-design' }
          ]
        }
      ]
    }
  },
  {
    label: 'Automation',
    href: 'javascript:;',
    type: 'dropdown',
    graphicImg: '/images/automation.webp',
    graphicNum: '85%',
    graphicText: 'FASTER<br>PROCESSES',
    ctaTitle: 'Streamline Your Operations',
    ctaDesc: 'Schedule a discovery session to identify automation opportunities and reduce manual overhead.',
    megaMenu: {
      columns: [
        {
          heading: '',
          links: [
            { label: 'Business Process Automation (RPA)', href: '/business-process-automation' },
            { label: 'Workflow Automation', href: '/workflow-automation' },
            { label: 'Marketing & CRM Automation', href: '/marketing-crm-automation' }
          ]
        }
      ]
    }
  },
  {
    label: 'Technology',
    href: 'javascript:;',
    type: 'dropdown',
    graphicImg: '/images/technology.webp',
    graphicNum: '50+',
    graphicText: 'TECH<br>EXPERTS',
    ctaTitle: 'Build Scalable Software',
    ctaDesc: 'Let\'s discuss your tech stack and engineer a robust architecture for your next big product.',
    megaMenu: {
      columns: [
        {
          heading: '',
          links: [
            { label: 'Web Development', href: '/web-development' },
            { label: 'App Development', href: '/app-development' },
            { label: 'E-Commerce', href: '/ecommerce-development' },
            { label: 'CMS (WordPress, Drupal)', href: '/cms-development' }
          ]
        }
      ]
    }
  },
  {
    label: 'Hire Developers',
    href: '/hire-developers',
    type: 'dropdown',
    ctaTitle: 'Hire Vetted Dedicated Developers',
    ctaDesc: 'Scale your engineering team with pre-vetted senior developers ready to onboard in 48 hours.',
    megaMenu: {
      columns: [
        {
          heading: 'Mobile App Developers',
          links: [
            { label: 'Hire iOS Developers', href: '/hire-developers/ios-developers' },
            { label: 'Hire Android Developers', href: '/hire-developers/android-developers' },
            { label: 'Hire Swift Developers', href: '/hire-developers/swift-developers' },
            { label: 'Hire Kotlin Developers', href: '/hire-developers/kotlin-developers' },
            { label: 'Hire Flutter Developers', href: '/hire-developers/flutter-developers' },
            { label: 'Hire React Native Developers', href: '/hire-developers/react-native-developers' }
          ]
        },
        {
          heading: 'Front-End Web Developers',
          links: [
            { label: 'Hire AngularJS Developers', href: '/hire-developers/angularjs-developers' },
            { label: 'Hire ReactJS Developers', href: '/hire-developers/reactjs-developers' },
            { label: 'Hire VueJS Developers', href: '/hire-developers/vuejs-developers' },
            { label: 'Hire Graphic Designers', href: '/hire-developers/graphic-designers' },
            { label: 'Hire UI/UX Designers', href: '/hire-developers/ui-ux-designers' }
          ]
        },
        {
          heading: 'Back-End Web Developers',
          links: [
            { label: 'Hire NodeJS Developers', href: '/hire-developers/nodejs-developers' },
            { label: 'Hire Laravel Developers', href: '/hire-developers/laravel-developers' },
            { label: 'Hire Python Developers', href: '/hire-developers/python-developers' },
            { label: 'Hire PHP Developers', href: '/hire-developers/php-developers' }
          ]
        },
        {
          heading: 'E-Commerce Developers',
          links: [
            { label: 'Hire WordPress Developers', href: '/hire-developers/wordpress-developers' },
            { label: 'Hire Shopify Developers', href: '/hire-developers/shopify-developers' },
            { label: 'Hire Magento Developers', href: '/hire-developers/magento-developers' },
            { label: 'Hire BigCommerce Developers', href: '/hire-developers/bigcommerce-developers' },
            { label: 'Hire WooCommerce Developers', href: '/hire-developers/woocommerce-developers' },
            { label: 'Hire Digital Marketers', href: '/hire-developers/digital-marketers' }
          ]
        },
        {
          heading: 'Trending Developers',
          links: [
            { label: 'Hire DevOps Developers', href: '/hire-developers/devops-developers' },
            { label: 'Hire AWS Developers', href: '/hire-developers/aws-developers' },
            { label: 'Hire AI Developers', href: '/hire-developers/ai-developers' },
            { label: 'Hire ML Developers', href: '/hire-developers/ml-developers' },
            { label: 'Hire Blockchain Developers', href: '/hire-developers/blockchain-developers' },
            { label: 'Hire AR Developers', href: '/hire-developers/ar-developers' },
            { label: 'Hire VR Developers', href: '/hire-developers/vr-developers' },
            { label: 'Hire Data Analytics Experts', href: '/hire-developers/data-analytics-experts' },
            { label: 'Hire Full Stack Developers', href: '/hire-developers/full-stack-developers' },
            { label: 'Hire Chatbot Developers', href: '/hire-developers/chatbot-developers' }
          ]
        }
      ]
    }
  },
  {
    label: 'Industries',
    href: 'javascript:;',
    type: 'dropdown',
    graphicImg: '/images/industries.webp',
    graphicNum: '12+',
    graphicText: 'SECTORS<br>SERVED',
    ctaTitle: 'Tailored Industry Solutions',
    ctaDesc: 'Get bespoke technology strategies that comply with your specific industry regulations and needs.',
    megaMenu: {
      columns: [
        {
          heading: '',
          links: [
            { label: 'Finance & Banking', href: '/finance-banking' },
            { label: 'Healthcare', href: '/healthcare' },
            { label: 'Retail & Ecommerce', href: '/retail-ecommerce' },
            { label: 'Manufacturing', href: '/manufacturing' },
            { label: 'Real Estate', href: '/real-estate' },
            { label: 'Logistics & Transportation', href: '/logistics-transportation' }
          ]
        }
      ]
    }
  },
  {
    label: 'Company',
    href: 'javascript:;',
    type: 'dropdown',
    graphicImg: '/images/company.webp',
    graphicNum: '100%',
    graphicText: 'CLIENT<br>FOCUS',
    ctaTitle: 'Partner with Cypherox',
    ctaDesc: 'Reach out to our leadership team and discover how we can drive your digital transformation.',
    megaMenu: {
      columns: [
        {
          heading: '',
          links: [
            { label: 'About Us', href: '/about-us' },
            { label: 'Contact Us', href: '/contact-us' },
            { label: 'Case Studies', href: '/case-studies' },
            { label: 'Blog', href: '/blogs' }
          ]
        }
      ]
    }
  }
];





const disciplinesData = [
  {
    id: 'ai-development',
    tabName: 'AI and Machine Learning Engineering',
    title: 'AI and Machine Learning Engineering',
    description: 'We build AI systems around your data, workflows and business rules, with the evaluation, integration and controls needed for reliable production use.',
    features: [
      'AI agent design and orchestration',
      'Large language model development and fine-tuning',
      'Generative AI applications',
      'Computer vision and NLP',
      'ML model evaluation and monitoring'
    ],
    ctaText: 'Learn About AI Development',
    ctaLink: '#',
    techTags: ['Python', 'PyTorch', 'LangChain', 'OpenAI', 'Hugging Face', 'AWS SageMaker'],
    outcomes: []
  },
  {
    id: 'software-engineering',
    tabName: 'Software Engineering',
    title: 'Software Engineering',
    description: 'Web, mobile, APIs and backend systems built for scale, maintained for the long term and designed to fit the platform you already run.',
    features: [
      'Custom web and mobile applications',
      'API design and development',
      'Backend architecture and microservices',
      'CMS and ecommerce platforms',
      'Legacy system modernization'
    ],
    ctaText: 'Learn About Software Engineering',
    ctaLink: '#',
    techTags: ['React', 'Node.js', 'Python', 'Flutter', 'Laravel', 'PostgreSQL'],
    outcomes: []
  },
  {
    id: 'data-engineering',
    tabName: 'Data and Cloud Engineering',
    title: 'Data and Cloud Engineering',
    description: 'Infrastructure, pipelines and governance underneath your applications. Reliable data. Secure, observable and cost-controlled cloud.',
    features: [
      'Cloud architecture and migration',
      'Data pipeline design and integration',
      'Business intelligence and analytics',
      'DevOps automation and CI/CD',
      'Cloud security and compliance'
    ],
    ctaText: 'Learn About Cloud and Data',
    ctaLink: '#',
    techTags: ['AWS', 'Azure', 'GCP', 'Terraform', 'Docker', 'Kubernetes'],
    outcomes: []
  },
  {
    id: 'consulting',
    tabName: 'Product and Technology Consulting',
    title: 'Product and Technology Consulting',
    description: 'The architecture, scope and approach decisions made before a line of code is written often determine whether a project delivers or stalls.',
    features: [
      'Technical architecture review',
      'AI readiness assessment',
      'Product roadmap and scoping',
      'Technology selection and vendor evaluation',
      'Digital strategy and planning'
    ],
    ctaText: 'Speak to a Consultant',
    ctaLink: '#',
    techTags: ['System design', 'API strategy', 'Cloud planning', 'AI feasibility', 'Data architecture', 'Security review'],
    outcomes: []
  }
];

const industriesData = [
  {
    id: 'ind-healthcare',
    tabName: 'Healthcare',
    highlightText: 'AI Document Processing System',
    subTitleText: 'Automated clinical document intake and decreased manual review time across high-volume workflows.',
    image: 'https://picsum.photos/seed/healthcare/800/600',
    challenges: [
      'Processing thousands of documents per week consumed clinical staff time.',
      'Manual data entry introduced transcription errors and delays.',
    ],
    outcomes: [
      'Built a document classification and extraction pipeline using NLP',
      'Integrated with the existing patient records system through secure APIs',
    ],
    techStacks: [
      { name: 'Python' },
      { name: 'NLP' },
      { name: 'FastAPI' },
      { name: 'AWS' },
      { name: 'PostgreSQL' },
      { name: 'Docker' }
    ]
  },
  {
    id: 'ind-finance',
    tabName: 'Fintech',
    highlightText: 'Real-Time Fraud Monitoring Platform',
    subTitleText: 'Deployed a transaction monitoring system that flags anomalies in real time and routes alerts to review teams.',
    image: 'https://picsum.photos/seed/finance/800/600',
    challenges: [
      'Legacy rules engine missed complex fraud patterns.',
      'Alert volumes overwhelmed the compliance team with false positives.',
    ],
    outcomes: [
      'Designed and trained a custom ML model on historical transaction data',
      'Built an alert dashboard with adjustable risk thresholds and case management',
    ],
    techStacks: [
      { name: 'Python' },
      { name: 'TensorFlow' },
      { name: 'Kafka' },
      { name: 'PostgreSQL' },
      { name: 'React' },
      { name: 'AWS' }
    ]
  },
  {
    id: 'ind-manufacturing',
    tabName: 'Logistics',
    highlightText: 'Route Optimization and Dispatch System',
    subTitleText: 'Replaced manual dispatch with an automated routing system that reduced planning time and improved delivery accuracy',
    image: 'https://picsum.photos/seed/manufacturing/800/600',
    challenges: [
      'Dispatchers planned routes manually each morning across hundreds of stops.',
      'Late deliveries and inefficient routes increased operational costs.',
    ],
    outcomes: [
      'Built a route optimization engine with real-time traffic integration',
      'Connected the system to existing warehouse and driver mobile applications',
    ],
    techStacks: [
      { name: 'Python' },
      { name: 'React Native' },
      { name: 'Node.js' },
      { name: 'Google Maps' },
      { name: 'API' },
      { name: 'PostgreSQL' },
      { name: 'AWS' }
    ]
  },
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
    description: 'Build resilient, scalable and secure cloud infrastructures.',
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

// ==========================================================================
// PROCESS / "HOW WE WORK" ICONS (64x64, stroke-width="1.6", hairline elegant)
// ==========================================================================

const processIcons = {
  // 1. AI & LLM Systems
  ai: [
    // 01: Discovery and Scoping
    `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <ellipse cx="25" cy="17" rx="14" ry="5"/>
      <path d="M11 17v9c0 2.76 6.27 5 14 5c2.4 0 4.65-.22 6.6-.62"/>
      <path d="M11 26v9c0 2.76 6.27 5 14 5c2.1 0 4.1-.17 5.9-.48"/>
      <path d="M11 35v9c0 2.76 6.27 5 14 5c2.2 0 4.3-.19 6.2-.52"/>
      <circle cx="17" cy="22" r="1.2" fill="currentColor"/>
      <circle cx="17" cy="31" r="1.2" fill="currentColor"/>
      <circle cx="17" cy="40" r="1.2" fill="currentColor"/>
      <circle cx="42" cy="40" r="10.5" fill="var(--bg-light, #F5F3EF)"/>
      <circle cx="42" cy="40" r="10.5"/>
      <line x1="49.5" y1="47.5" x2="55.5" y2="53.5"/>
      <line x1="42" y1="33.5" x2="42" y2="37"/>
      <line x1="42" y1="43" x2="42" y2="46.5"/>
      <line x1="35.5" y1="40" x2="39" y2="40"/>
      <line x1="45" y1="40" x2="48.5" y2="40"/>
      <circle cx="42" cy="40" r="1.5" fill="currentColor"/>
    </svg>`,
    // 02: Design and Architecture
    `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <path d="M32 8L49 13.5v16.5c0 12-17 23.5-17 23.5S15 42 15 30V13.5L32 8z"/>
      <rect x="25" y="17" width="14" height="8" rx="2"/>
      <line x1="28" y1="21" x2="36" y2="21"/>
      <line x1="32" y1="25" x2="32" y2="30"/>
      <polygon points="32 30 38 36 32 42 26 36"/>
      <circle cx="32" cy="36" r="1.5" fill="currentColor"/>
      <polyline points="26 36 21 36 21 42"/>
      <circle cx="21" cy="43.5" r="1.5" fill="currentColor"/>
      <polyline points="38 36 43 36 43 42"/>
      <circle cx="43" cy="43.5" r="1.5" fill="currentColor"/>
      <line x1="32" y1="42" x2="32" y2="47"/>
      <circle cx="32" cy="48" r="1" fill="currentColor"/>
    </svg>`,
    // 03: Development and Testing
    `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <rect x="8" y="11" width="48" height="38" rx="4"/>
      <line x1="8" y1="21" x2="56" y2="21"/>
      <circle cx="15" cy="16" r="1.5" fill="currentColor"/>
      <circle cx="21" cy="16" r="1.5" fill="currentColor"/>
      <circle cx="27" cy="16" r="1.5" fill="currentColor"/>
      <polyline points="16 29 20 33 16 37"/>
      <line x1="24" y1="33" x2="35" y2="33"/>
      <line x1="16" y1="41" x2="28" y2="41"/>
      <circle cx="45" cy="45" r="11" fill="var(--bg-light, #F5F3EF)"/>
      <circle cx="45" cy="45" r="11"/>
      <polyline points="40 45 43.5 48.5 50 42"/>
    </svg>`,
    // 04: Deployment and Monitoring
    `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <path d="M32 9c-5 8-8 16-8 28h16c0-12-3-20-8-28z"/>
      <circle cx="32" cy="24" r="3.5"/>
      <path d="M24 29l-7 8c-.6.8 0 1.8 1 1.8h6"/>
      <path d="M40 29l7 8c.6.8 0 1.8-1 1.8h-6"/>
      <path d="M28 37v3h8v-3"/>
      <path d="M29 40c0 5 3 9 3 9s3-4 3-9"/>
      <path d="M13 19a16 16 0 0 0 0 18"/>
      <path d="M8 14a23 23 0 0 0 0 28"/>
      <path d="M51 19a16 16 0 0 1 0 18"/>
      <path d="M56 14a23 23 0 0 1 0 28"/>
      <circle cx="32" cy="5" r="1.5" fill="currentColor"/>
    </svg>`
  ],

  // 2. Machine Learning, AutoML & Predictive Analytics
  ml: [
    // 01: Data Ingestion & Scoping
    `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <ellipse cx="25" cy="18" rx="14" ry="5"/>
      <path d="M11 18v16c0 2.76 6.27 5 14 5c2.5 0 4.8-.24 6.8-.66"/>
      <line x1="20" y1="27" x2="30" y2="27"/>
      <circle cx="16" cy="27" r="1.2" fill="currentColor"/>
      <circle cx="43" cy="41" r="11" fill="var(--bg-light, #F5F3EF)"/>
      <circle cx="43" cy="41" r="11"/>
      <line x1="50.5" y1="48.5" x2="57" y2="55"/>
      <polyline points="37 43 41 37 45 40 49 35"/>
      <circle cx="49" cy="35" r="1.2" fill="currentColor"/>
    </svg>`,
    // 02: Pipeline & Model Architecture
    `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="16" cy="20" r="4"/>
      <circle cx="16" cy="44" r="4"/>
      <circle cx="32" cy="32" r="5"/>
      <circle cx="48" cy="20" r="4"/>
      <circle cx="48" cy="44" r="4"/>
      <line x1="20" y1="21.5" x2="27.5" y2="29.5"/>
      <line x1="20" y1="42.5" x2="27.5" y2="34.5"/>
      <line x1="36.5" y1="29.5" x2="44" y2="21.5"/>
      <line x1="36.5" y1="34.5" x2="44" y2="42.5"/>
      <circle cx="32" cy="32" r="1.5" fill="currentColor"/>
      <path d="M26 12h12M26 52h12"/>
    </svg>`,
    // 03: Training & Validation Testing
    `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <rect x="9" y="12" width="46" height="38" rx="4"/>
      <line x1="9" y1="22" x2="55" y2="22"/>
      <circle cx="16" cy="17" r="1.5" fill="currentColor"/>
      <circle cx="22" cy="17" r="1.5" fill="currentColor"/>
      <path d="M16 42c6-1 10-14 18-14s8 6 12 6"/>
      <circle cx="45" cy="45" r="11" fill="var(--bg-light, #F5F3EF)"/>
      <circle cx="45" cy="45" r="11"/>
      <polyline points="40 45 43.5 48.5 50 42"/>
    </svg>`,
    // 04: Production Deployment & Monitoring
    `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <rect x="14" y="10" width="36" height="18" rx="3"/>
      <line x1="14" y1="19" x2="50" y2="19"/>
      <circle cx="20" cy="15" r="1.5" fill="currentColor"/>
      <circle cx="44" cy="15" r="1.5" fill="currentColor"/>
      <line x1="32" y1="28" x2="32" y2="34"/>
      <path d="M10 47h11l4-8 7 17 6-11 5 2h11"/>
      <circle cx="32" cy="34" r="1.5" fill="currentColor"/>
    </svg>`
  ],

  // 3. Web & CMS Development
  web: [
    // 01: Discovery & Requirements
    `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <rect x="10" y="12" width="44" height="36" rx="4"/>
      <line x1="10" y1="21" x2="54" y2="21"/>
      <circle cx="16" cy="16.5" r="1.5" fill="currentColor"/>
      <circle cx="21" cy="16.5" r="1.5" fill="currentColor"/>
      <circle cx="43" cy="41" r="11" fill="var(--bg-light, #F5F3EF)"/>
      <circle cx="43" cy="41" r="11"/>
      <line x1="50.5" y1="48.5" x2="57" y2="55"/>
      <line x1="43" y1="35" x2="43" y2="47"/>
      <line x1="37" y1="41" x2="49" y2="41"/>
    </svg>`,
    // 02: Responsive Architecture & UI Design
    `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <rect x="8" y="14" width="36" height="26" rx="3"/>
      <line x1="8" y1="20" x2="44" y2="20"/>
      <line x1="18" y1="40" x2="34" y2="40"/>
      <line x1="26" y1="40" x2="26" y2="46"/>
      <line x1="20" y1="46" x2="32" y2="46"/>
      <rect x="38" y="24" width="18" height="28" rx="3" fill="var(--bg-light, #F5F3EF)"/>
      <rect x="38" y="24" width="18" height="28" rx="3"/>
      <line x1="38" y1="29" x2="56" y2="29"/>
      <circle cx="47" cy="48" r="1" fill="currentColor"/>
    </svg>`,
    // 03: Development & Testing
    `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <rect x="8" y="11" width="48" height="38" rx="4"/>
      <line x1="8" y1="21" x2="56" y2="21"/>
      <polyline points="16 32 22 27 22 37"/>
      <polyline points="32 32 26 27 26 37"/>
      <line x1="21" y1="38" x2="27" y2="26"/>
      <circle cx="45" cy="45" r="11" fill="var(--bg-light, #F5F3EF)"/>
      <circle cx="45" cy="45" r="11"/>
      <polyline points="40 45 43.5 48.5 50 42"/>
    </svg>`,
    // 04: Launch & Performance Support
    `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="32" cy="32" r="22"/>
      <path d="M32 18v14l9 9"/>
      <path d="M16 32a16 16 0 0 1 32 0"/>
      <line x1="32" y1="10" x2="32" y2="14"/>
      <circle cx="32" cy="32" r="3" fill="currentColor"/>
      <path d="M12 48l4-4M52 48l-4-4"/>
    </svg>`
  ],

  // 4. Mobile & App Engineering
  mobile: [
    // 01: Discovery & Research
    `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <rect x="14" y="10" width="26" height="44" rx="4"/>
      <line x1="23" y1="15" x2="31" y2="15"/>
      <circle cx="27" cy="48" r="1.5" fill="currentColor"/>
      <circle cx="43" cy="39" r="11" fill="var(--bg-light, #F5F3EF)"/>
      <circle cx="43" cy="39" r="11"/>
      <line x1="50.5" y1="46.5" x2="57" y2="53"/>
      <line x1="43" y1="33" x2="43" y2="45"/>
      <line x1="37" y1="39" x2="49" y2="39"/>
    </svg>`,
    // 02: Flow & Wireframing Design
    `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <rect x="10" y="14" width="18" height="32" rx="3"/>
      <circle cx="19" cy="41" r="1"/>
      <rect x="36" y="14" width="18" height="32" rx="3"/>
      <circle cx="45" cy="41" r="1"/>
      <path d="M28 26h8"/>
      <polyline points="33 23 36 26 33 29"/>
      <line x1="14" y1="20" x2="24" y2="20"/>
      <line x1="40" y1="20" x2="50" y2="20"/>
    </svg>`,
    // 03: Development & Testing
    `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <rect x="14" y="10" width="28" height="44" rx="4"/>
      <line x1="24" y1="15" x2="32" y2="15"/>
      <polyline points="22 28 26 32 22 36"/>
      <line x1="28" y1="36" x2="34" y2="36"/>
      <circle cx="45" cy="45" r="11" fill="var(--bg-light, #F5F3EF)"/>
      <circle cx="45" cy="45" r="11"/>
      <polyline points="40 45 43.5 48.5 50 42"/>
    </svg>`,
    // 04: Launch & App Store Support
    `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <rect x="18" y="12" width="28" height="44" rx="4"/>
      <circle cx="32" cy="50" r="1.5" fill="currentColor"/>
      <path d="M32 20c-3 5-4 10-4 17h8c0-7-1-12-4-17z"/>
      <circle cx="32" cy="27" r="1.5"/>
      <path d="M12 28a16 16 0 0 1 0-8M52 28a16 16 0 0 0 0-8"/>
      <circle cx="32" cy="8" r="1.5" fill="currentColor"/>
    </svg>`
  ],

  // 5. Automation & Business Process
  automation: [
    // 01: Process Mapping & Discovery
    `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <rect x="12" y="10" width="28" height="38" rx="3"/>
      <line x1="18" y1="18" x2="32" y2="18"/>
      <line x1="18" y1="24" x2="32" y2="24"/>
      <line x1="18" y1="30" x2="26" y2="30"/>
      <circle cx="43" cy="41" r="11" fill="var(--bg-light, #F5F3EF)"/>
      <circle cx="43" cy="41" r="11"/>
      <line x1="50.5" y1="48.5" x2="57" y2="55"/>
      <polyline points="38 41 42 45 48 37"/>
    </svg>`,
    // 02: Logic & Routing Architecture
    `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="16" cy="32" r="5"/>
      <polygon points="32 24 40 32 32 40 24 32"/>
      <circle cx="48" cy="18" r="4"/>
      <circle cx="48" cy="46" r="4"/>
      <line x1="21" y1="32" x2="24" y2="32"/>
      <line x1="38" y1="28" x2="44.5" y2="20.5"/>
      <line x1="38" y1="36" x2="44.5" y2="43.5"/>
      <circle cx="32" cy="32" r="1.5" fill="currentColor"/>
    </svg>`,
    // 03: Development & Integration Testing
    `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <rect x="8" y="11" width="48" height="38" rx="4"/>
      <line x1="8" y1="21" x2="56" y2="21"/>
      <circle cx="15" cy="16" r="1.5" fill="currentColor"/>
      <circle cx="21" cy="16" r="1.5" fill="currentColor"/>
      <line x1="16" y1="30" x2="32" y2="30"/>
      <line x1="16" y1="37" x2="28" y2="37"/>
      <circle cx="45" cy="45" r="11" fill="var(--bg-light, #F5F3EF)"/>
      <circle cx="45" cy="45" r="11"/>
      <polyline points="40 45 43.5 48.5 50 42"/>
    </svg>`,
    // 04: Deployment & SLA Monitoring
    `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="32" cy="32" r="21"/>
      <path d="M16 32h7l4-9 6 18 5-9h10"/>
      <circle cx="32" cy="32" r="2.5"/>
      <circle cx="32" cy="11" r="1.5" fill="currentColor"/>
    </svg>`
  ],

  // 6. Consulting & Advisory
  consulting: [
    // 01: Context & Assessment
    `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <rect x="12" y="10" width="28" height="38" rx="3"/>
      <line x1="18" y1="18" x2="32" y2="18"/>
      <line x1="18" y1="24" x2="32" y2="24"/>
      <circle cx="43" cy="41" r="11" fill="var(--bg-light, #F5F3EF)"/>
      <circle cx="43" cy="41" r="11"/>
      <line x1="50.5" y1="48.5" x2="57" y2="55"/>
      <line x1="43" y1="35" x2="43" y2="47"/>
      <line x1="37" y1="41" x2="49" y2="41"/>
    </svg>`,
    // 02: Options & Strategy Roadmapping
    `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="16" cy="44" r="4"/>
      <circle cx="32" cy="24" r="4"/>
      <circle cx="48" cy="16" r="4"/>
      <line x1="19.5" y1="40.5" x2="28.5" y2="27.5"/>
      <line x1="35.5" y1="22" x2="44.5" y2="18"/>
      <line x1="10" y1="52" x2="54" y2="52"/>
      <circle cx="32" cy="24" r="1.5" fill="currentColor"/>
    </svg>`,
    // 03: Recommendation & Roadmap Planning
    `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="32 10 52 20 52 44 32 54 12 44 12 20"/>
      <line x1="32" y1="10" x2="32" y2="54"/>
      <polyline points="23 30 32 35 41 30"/>
      <circle cx="32" cy="35" r="2" fill="currentColor"/>
    </svg>`,
    // 04: Implementation Support & Delivery
    `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="32" cy="32" r="22"/>
      <path d="M22 36l7-7 6 6 8-10"/>
      <polyline points="37 25 43 25 43 31"/>
      <line x1="18" y1="46" x2="46" y2="46"/>
    </svg>`
  ],

  // 7. Industry Solutions (Finance, Healthcare, Manufacturing, Real Estate, Logistics, Retail)
  industry: [
    // 01: Architecture & Compliance Scoping
    `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <path d="M32 8L49 14v16c0 12-17 22-17 22S15 42 15 30V14L32 8z"/>
      <line x1="24" y1="28" x2="40" y2="28"/>
      <line x1="32" y1="20" x2="32" y2="36"/>
      <circle cx="32" cy="28" r="2" fill="currentColor"/>
    </svg>`,
    // 02: Secure Platform Build & Integration
    `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <rect x="10" y="16" width="44" height="32" rx="4"/>
      <path d="M22 16v-6a10 10 0 0 1 20 0v6"/>
      <circle cx="32" cy="32" r="3"/>
      <line x1="32" y1="35" x2="32" y2="40"/>
    </svg>`,
    // 03: Testing, Audit & Certification
    `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <rect x="14" y="10" width="36" height="44" rx="4"/>
      <line x1="22" y1="18" x2="42" y2="18"/>
      <polyline points="22 28 26 32 34 24"/>
      <polyline points="22 40 26 44 34 36"/>
      <circle cx="45" cy="45" r="10" fill="var(--bg-light, #F5F3EF)"/>
      <circle cx="45" cy="45" r="10"/>
      <polyline points="41 45 44 48 49 43"/>
    </svg>`,
    // 04: Production Deployment & Continuous Operations
    `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="32" cy="32" r="22"/>
      <path d="M12 32h10l4-9 6 18 5-9h15"/>
      <circle cx="32" cy="32" r="2"/>
      <circle cx="32" cy="10" r="1.5" fill="currentColor"/>
    </svg>`
  ]
};

const whyChooseData = [
  {
    icon: processIcons.ai[0],
    title: 'Discovery and Scoping',
    description: 'We review your data sources, existing systems and requirements before any design work begins.'
  },
  {
    icon: processIcons.ai[1],
    title: 'Design and Architecture',
    description: 'We define the technical architecture, workflow logic and security boundaries the solution will operate within.'
  },
  {
    icon: processIcons.ai[2],
    title: 'Development and Testing',
    description: 'The solution is built, connected to required systems and tested against real scenarios before release.'
  },
  {
    icon: processIcons.ai[3],
    title: 'Deployment and Monitoring',
    description: 'Once live, we track performance metrics, quality and operational health to guide ongoing adjustments.'
  }
];

const aiAgentWhyChoose = [
  {
    icon: processIcons.ai[0],
    title: 'Discovery and Scoping',
    description: 'We review your data sources, existing systems and the tasks the agent needs to complete before any design work begins.'
  },
  {
    icon: processIcons.ai[1],
    title: 'Design and Architecture',
    description: 'We define the agent workflow, tool integrations, decision logic and security boundaries the agent will operate within.'
  },
  {
    icon: processIcons.ai[2],
    title: 'Development and Testing',
    description: 'The agent is built, connected to required systems and tested against real task scenarios before release.'
  },
  {
    icon: processIcons.ai[3],
    title: 'Deployment and Monitoring',
    description: 'Once live, we track task completion, execution accuracy and failure patterns to guide ongoing adjustments.'
  }
];

const whyChooseDataByPage = {
  // AI Agents & Chatbots
  'ai-agent.html': aiAgentWhyChoose,
  'ai-agent': aiAgentWhyChoose,
  'ai-agent-development.html': aiAgentWhyChoose,
  'ai-agent-development': aiAgentWhyChoose,

  'ai-chatbot-development.html': [
    {
      icon: processIcons.ai[0],
      title: 'Discovery and Scoping',
      description: 'We review your data sources, existing systems and the questions the chatbot needs to answer before any design work begins.'
    },
    {
      icon: processIcons.ai[1],
      title: 'Design and Architecture',
      description: 'We define the conversation flow, data retrieval approach, escalation logic and access controls the chatbot will operate within.'
    },
    {
      icon: processIcons.ai[2],
      title: 'Development and Testing',
      description: 'The chatbot is built, connected to required systems and tested against real conversation scenarios before release.'
    },
    {
      icon: processIcons.ai[3],
      title: 'Deployment and Monitoring',
      description: 'Once live, we track conversation quality, escalation rates and failure patterns to guide ongoing adjustments.'
    }
  ],
  'ai-chatbot-development': whyChooseData,

  'ai-content-generator.html': [
    {
      icon: processIcons.ai[0],
      title: 'Discovery and Scoping',
      description: 'We review your content types, brand guidelines and existing source material before any design work begins.'
    },
    {
      icon: processIcons.ai[1],
      title: 'Design and Architecture',
      description: 'We define the generation approach, review workflow and integration points the system will operate within.'
    },
    {
      icon: processIcons.ai[2],
      title: 'Development and Testing',
      description: 'The system is built, connected to required content sources and tested against real content requests before release.'
    },
    {
      icon: processIcons.ai[3],
      title: 'Deployment and Monitoring',
      description: 'Once live, we track output quality and review outcomes to guide ongoing adjustments.'
    }
  ],
  'ai-content-generator': whyChooseData,

  'ai-language-translator.html': [
    {
      icon: processIcons.ai[0],
      title: 'Discovery and Scoping',
      description: 'We review your content types, target languages and accuracy requirements before any design work begins.'
    },
    {
      icon: processIcons.ai[1],
      title: 'Design and Architecture',
      description: 'We define the translation approach, terminology handling and integration points the system will operate within.'
    },
    {
      icon: processIcons.ai[2],
      title: 'Development and Testing',
      description: 'The system is built, connected to required content sources and tested against real documents and language pairs.'
    },
    {
      icon: processIcons.ai[3],
      title: 'Deployment and Monitoring',
      description: 'Once live, we track translation accuracy and review flagged content to guide ongoing adjustments.'
    }
  ],
  'ai-language-translator': whyChooseData,

  'ai-virtual-assistant.html': [
    {
      icon: processIcons.ai[0],
      title: 'Discovery and Scoping',
      description: 'We review the tasks the assistant needs to handle, the systems it must connect to and where human oversight is required.'
    },
    {
      icon: processIcons.ai[1],
      title: 'Design and Architecture',
      description: 'We define the conversation flow, task logic, permission boundaries and escalation rules the assistant will operate within.'
    },
    {
      icon: processIcons.ai[2],
      title: 'Development and Testing',
      description: 'The assistant is built, connected to required systems and tested against realistic task scenarios before release.'
    },
    {
      icon: processIcons.ai[3],
      title: 'Deployment and Monitoring',
      description: 'Once live, we track task completion, escalation rates and failure patterns to guide ongoing adjustments.'
    }
  ],
  'ai-virtual-assistant': whyChooseData,
  'virtual-assistant.html': [
    {
      icon: processIcons.ai[0],
      title: 'Discovery and Scoping',
      description: 'We review the tasks the assistant needs to handle, the systems it must connect to and where human oversight is required.'
    },
    {
      icon: processIcons.ai[1],
      title: 'Design and Architecture',
      description: 'We define the conversation flow, task logic, permission boundaries and escalation rules the assistant will operate within.'
    },
    {
      icon: processIcons.ai[2],
      title: 'Development and Testing',
      description: 'The assistant is built, connected to required systems and tested against realistic task scenarios before release.'
    },
    {
      icon: processIcons.ai[3],
      title: 'Deployment and Monitoring',
      description: 'Once live, we track task completion, escalation rates and failure patterns to guide ongoing adjustments.'
    }
  ],
  'virtual-assistant': whyChooseData,

  'virtual-research-assistant.html': [
    {
      icon: processIcons.ai[0],
      title: 'Discovery and Scoping',
      description: 'We review your sources, research workflow and the output format your team currently relies on.'
    },
    {
      icon: processIcons.ai[1],
      title: 'Design and Architecture',
      description: 'We define the retrieval approach, synthesis logic and access boundaries the assistant will operate within.'
    },
    {
      icon: processIcons.ai[2],
      title: 'Development and Testing',
      description: 'The assistant is built, connected to required sources and tested against real research requests before release.'
    },
    {
      icon: processIcons.ai[3],
      title: 'Deployment and Monitoring',
      description: 'Once live, we track output accuracy and usage patterns to guide ongoing adjustments.'
    }
  ],
  'virtual-research-assistant': whyChooseData,

  // Machine Learning & Analytics
  'predictive-maintenance.html': [
    {
      icon: processIcons.ml[0],
      title: 'Discovery and Scoping',
      description: 'We review your equipment, existing sensor data and current maintenance process before any design work begins.'
    },
    {
      icon: processIcons.ml[1],
      title: 'Design and Architecture',
      description: 'We define the data pipeline, prediction models and alerting logic the solution will operate within.'
    },
    {
      icon: processIcons.ml[2],
      title: 'Development and Testing',
      description: 'The solution is built, connected to sensor and historical data and validated against real failure patterns.'
    },
    {
      icon: processIcons.ml[3],
      title: 'Deployment and Monitoring',
      description: 'Once live, we track prediction accuracy and alert quality to guide ongoing model adjustments.'
    }
  ],
  'predictive-maintenance': whyChooseData,
  'predictive-maintenance-services.html': [
    {
      icon: processIcons.ml[0],
      title: 'Discovery and Scoping',
      description: 'We review your equipment, existing sensor data and current maintenance process before any design work begins.'
    },
    {
      icon: processIcons.ml[1],
      title: 'Design and Architecture',
      description: 'We define the data pipeline, prediction models and alerting logic the solution will operate within.'
    },
    {
      icon: processIcons.ml[2],
      title: 'Development and Testing',
      description: 'The solution is built, connected to sensor and historical data and validated against real failure patterns.'
    },
    {
      icon: processIcons.ml[3],
      title: 'Deployment and Monitoring',
      description: 'Once live, we track prediction accuracy and alert quality to guide ongoing model adjustments.'
    }
  ],

  'fraud-detection.html': [
    {
      icon: processIcons.ml[0],
      title: 'Discovery and Scoping',
      description: 'We review your transaction data, current fraud losses and existing detection approach before starting any design work.'
    },
    {
      icon: processIcons.ml[1],
      title: 'Design and Architecture',
      description: 'We define the scoring models, data pipeline and review workflow the system will operate within.'
    },
    {
      icon: processIcons.ml[2],
      title: 'Development and Testing',
      description: 'We build the system, connect it to transaction and identity data and validate it against known fraud cases.'
    },
    {
      icon: processIcons.ml[3],
      title: 'Deployment and Monitoring',
      description: 'Once live, we track detection accuracy and false positive rates to guide ongoing model adjustments.'
    }
  ],
  'fraud-detection': whyChooseData,
  'fraud-detection-services.html': [
    {
      icon: processIcons.ml[0],
      title: 'Discovery and Scoping',
      description: 'We review your transaction data, current fraud losses and existing detection approach before starting any design work.'
    },
    {
      icon: processIcons.ml[1],
      title: 'Design and Architecture',
      description: 'We define the scoring models, data pipeline and review workflow the system will operate within.'
    },
    {
      icon: processIcons.ml[2],
      title: 'Development and Testing',
      description: 'We build the system, connect it to transaction and identity data and validate it against known fraud cases.'
    },
    {
      icon: processIcons.ml[3],
      title: 'Deployment and Monitoring',
      description: 'Once live, we track detection accuracy and false positive rates to guide ongoing model adjustments.'
    }
  ],

  'auto-ml-development.html': [
    {
      icon: processIcons.ml[0],
      title: 'Discovery and Scoping',
      description: 'We review your data, current model development process and the use cases you need supported.'
    },
    {
      icon: processIcons.ml[1],
      title: 'Pipeline Design',
      description: 'We define the preprocessing, algorithm selection and tuning approach the AutoML pipeline will use.'
    },
    {
      icon: processIcons.ml[2],
      title: 'Development and Validation',
      description: 'We build and test the pipeline, validating models against held-out data before release.'
    },
    {
      icon: processIcons.ml[3],
      title: 'Deployment and Monitoring',
      description: 'Once live, we track model performance and retraining needs to guide ongoing adjustments.'
    }
  ],
  'auto-ml-development': whyChooseData,
  'automl-development-services.html': [
    {
      icon: processIcons.ml[0],
      title: 'Discovery and Scoping',
      description: 'We review your data, current model development process and the use cases you need supported.'
    },
    {
      icon: processIcons.ml[1],
      title: 'Pipeline Design',
      description: 'We define the preprocessing, algorithm selection and tuning approach the AutoML pipeline will use.'
    },
    {
      icon: processIcons.ml[2],
      title: 'Development and Validation',
      description: 'We build and test the pipeline, validating models against held-out data before release.'
    },
    {
      icon: processIcons.ml[3],
      title: 'Deployment and Monitoring',
      description: 'Once live, we track model performance and retraining needs to guide ongoing adjustments.'
    }
  ],

  // IT & AI Consulting
  'it-consulting.html': [
    {
      icon: processIcons.consulting[0],
      title: 'Discovery and Assessment',
      description: 'We review your current systems, infrastructure and pain points in detail before forming any recommendation.'
    },
    {
      icon: processIcons.consulting[1],
      title: 'Analysis and Strategy',
      description: 'We identify gaps, risks and opportunities, then define a sequenced roadmap based on impact and feasibility.'
    },
    {
      icon: processIcons.consulting[2],
      title: 'Recommendation and Planning',
      description: 'We present findings and a practical plan, with priorities agreed directly with your team.'
    },
    {
      icon: processIcons.consulting[3],
      title: 'Implementation Support',
      description: 'Where needed, we support execution of the roadmap alongside your internal team or through dedicated delivery.'
    }
  ],
  'it-consulting': whyChooseData,
  'it-consulting-services.html': [
    {
      icon: processIcons.consulting[0],
      title: 'Discovery and Assessment',
      description: 'We review your current systems, infrastructure and pain points in detail before forming any recommendation.'
    },
    {
      icon: processIcons.consulting[1],
      title: 'Analysis and Strategy',
      description: 'We identify gaps, risks and opportunities, then define a sequenced roadmap based on impact and feasibility.'
    },
    {
      icon: processIcons.consulting[2],
      title: 'Recommendation and Planning',
      description: 'We present findings and a practical plan, with priorities agreed directly with your team.'
    },
    {
      icon: processIcons.consulting[3],
      title: 'Implementation Support',
      description: 'Where needed, we support execution of the roadmap alongside your internal team or through dedicated delivery.'
    }
  ],

  'startup-it-consulting.html': [
    {
      icon: processIcons.consulting[0],
      title: 'Discovery and Context',
      description: 'We review your product, current systems and stage-specific priorities before forming any recommendation.'
    },
    {
      icon: processIcons.consulting[1],
      title: 'Assessment and Options',
      description: 'We identify the decisions that matter most now and present practical, stage-appropriate options.'
    },
    {
      icon: processIcons.consulting[2],
      title: 'Recommendation and Roadmap',
      description: 'We agree on a prioritized plan that fits your budget, team size and growth timeline.'
    },
    {
      icon: processIcons.consulting[3],
      title: 'Ongoing or Implementation Support',
      description: 'Where needed, we support execution directly or provide continued advisory as the business grows.'
    }
  ],
  'startup-it-consulting': whyChooseData,
  'startup-it-consulting-services.html': [
    {
      icon: processIcons.consulting[0],
      title: 'Discovery and Context',
      description: 'We review your product, current systems and stage-specific priorities before forming any recommendation.'
    },
    {
      icon: processIcons.consulting[1],
      title: 'Assessment and Options',
      description: 'We identify the decisions that matter most now and present practical, stage-appropriate options.'
    },
    {
      icon: processIcons.consulting[2],
      title: 'Recommendation and Roadmap',
      description: 'We agree on a prioritized plan that fits your budget, team size and growth timeline.'
    },
    {
      icon: processIcons.consulting[3],
      title: 'Ongoing or Implementation Support',
      description: 'Where needed, we support execution directly or provide continued advisory as the business grows.'
    }
  ],

  'ai-strategy-consulting.html': [
    {
      icon: processIcons.consulting[0],
      title: 'Discovery and Assessment',
      description: 'We review your business priorities, current data and systems before identifying potential AI use cases.'
    },
    {
      icon: processIcons.consulting[1],
      title: 'Opportunity Analysis',
      description: 'We assess feasibility, value and readiness for each identified use case.'
    },
    {
      icon: processIcons.consulting[2],
      title: 'Strategy and Roadmapping',
      description: 'We define a sequenced roadmap prioritized by impact and feasibility.'
    },
    {
      icon: processIcons.consulting[3],
      title: 'Implementation Support',
      description: 'Where needed, we support execution of the roadmap alongside your internal team or through dedicated delivery.'
    }
  ],
  'ai-strategy-consulting': whyChooseData,
  'ai-strategy-consulting-services.html': [
    {
      icon: processIcons.consulting[0],
      title: 'Discovery and Assessment',
      description: 'We review your business priorities, current data and systems before identifying potential AI use cases.'
    },
    {
      icon: processIcons.consulting[1],
      title: 'Opportunity Analysis',
      description: 'We assess feasibility, value and readiness for each identified use case.'
    },
    {
      icon: processIcons.consulting[2],
      title: 'Strategy and Roadmapping',
      description: 'We define a sequenced roadmap prioritized by impact and feasibility.'
    },
    {
      icon: processIcons.consulting[3],
      title: 'Implementation Support',
      description: 'Where needed, we support execution of the roadmap alongside your internal team or through dedicated delivery.'
    }
  ],

  // Web & Responsive Design
  'responsive-web-design.html': [
    {
      icon: processIcons.web[0],
      title: 'Discovery and Content Review',
      description: 'We review your current site, content structure and the devices your visitors actually use.'
    },
    {
      icon: processIcons.web[1],
      title: 'Responsive Design',
      description: 'We design layouts that adapt cleanly across mobile, tablet and desktop.'
    },
    {
      icon: processIcons.web[2],
      title: 'Development and Testing',
      description: 'The site is built and tested across real devices and browsers before launch.'
    },
    {
      icon: processIcons.web[3],
      title: 'Launch and Support',
      description: 'Once live, we monitor performance and usability and adjust layouts as needed.'
    }
  ],
  'responsive-web-design': whyChooseData,
  'responsive-web-design-services.html': [
    {
      icon: processIcons.web[0],
      title: 'Discovery and Content Review',
      description: 'We review your current site, content structure and the devices your visitors actually use.'
    },
    {
      icon: processIcons.web[1],
      title: 'Responsive Design',
      description: 'We design layouts that adapt cleanly across mobile, tablet and desktop.'
    },
    {
      icon: processIcons.web[2],
      title: 'Development and Testing',
      description: 'The site is built and tested across real devices and browsers before launch.'
    },
    {
      icon: processIcons.web[3],
      title: 'Launch and Support',
      description: 'Once live, we monitor performance and usability and adjust layouts as needed.'
    }
  ],

  'web-development.html': [
    {
      icon: processIcons.web[0],
      title: 'Discovery and Requirements',
      description: 'We review your current site, required functionality and the systems it needs to connect to.'
    },
    {
      icon: processIcons.web[1],
      title: 'Design and Architecture',
      description: 'We define the technical architecture, integrations and build structure.'
    },
    {
      icon: processIcons.web[2],
      title: 'Development and Testing',
      description: 'The site or application is built and tested against real usage scenarios before launch.'
    },
    {
      icon: processIcons.web[3],
      title: 'Launch and Ongoing Support',
      description: 'Once live, we monitor performance and provide ongoing development support as needs evolve.'
    }
  ],
  'web-development': whyChooseData,
  'web-development-company-services.html': [
    {
      icon: processIcons.web[0],
      title: 'Discovery and Requirements',
      description: 'We review your current site, required functionality and the systems it needs to connect to.'
    },
    {
      icon: processIcons.web[1],
      title: 'Design and Architecture',
      description: 'We define the technical architecture, integrations and build structure.'
    },
    {
      icon: processIcons.web[2],
      title: 'Development and Testing',
      description: 'The site or application is built and tested against real usage scenarios before launch.'
    },
    {
      icon: processIcons.web[3],
      title: 'Launch and Ongoing Support',
      description: 'Once live, we monitor performance and provide ongoing development support as needs evolve.'
    }
  ],

  // CMS & Ecommerce
  'cms-development.html': [
    {
      icon: processIcons.web[0],
      title: 'Discovery and Platform Assessment',
      description: 'We review your current CMS, content structure and editorial workflow before recommending an approach.'
    },
    {
      icon: processIcons.web[1],
      title: 'Design and Theme Development',
      description: 'We build custom themes and structure suited to your content and design requirements.'
    },
    {
      icon: processIcons.web[2],
      title: 'Development and Testing',
      description: 'We configure, customize and test the CMS against real content and editing workflows before launch.'
    },
    {
      icon: processIcons.web[3],
      title: 'Launch and Ongoing Maintenance',
      description: 'Once live, we maintain core, plugin and security updates on an ongoing basis.'
    }
  ],
  'cms-development': whyChooseData,
  'cms-development-services.html': [
    {
      icon: processIcons.web[0],
      title: 'Discovery and Platform Assessment',
      description: 'We review your current CMS, content structure and editorial workflow before recommending an approach.'
    },
    {
      icon: processIcons.web[1],
      title: 'Design and Theme Development',
      description: 'We build custom themes and structure suited to your content and design requirements.'
    },
    {
      icon: processIcons.web[2],
      title: 'Development and Testing',
      description: 'We configure, customize and test the CMS against real content and editing workflows before launch.'
    },
    {
      icon: processIcons.web[3],
      title: 'Launch and Ongoing Maintenance',
      description: 'Once live, we maintain core, plugin and security updates on an ongoing basis.'
    }
  ],

  'ecommerce-development.html': [
    {
      icon: processIcons.web[0],
      title: 'Discovery and Requirements',
      description: 'We review your current store, catalog structure and required integrations before design begins.'
    },
    {
      icon: processIcons.web[1],
      title: 'Design and Architecture',
      description: 'We define the platform approach, integrations and checkout logic the build will follow.'
    },
    {
      icon: processIcons.web[2],
      title: 'Development and Testing',
      description: 'The store is built and tested against real order and traffic scenarios before launch.'
    },
    {
      icon: processIcons.web[3],
      title: 'Launch and Ongoing Support',
      description: 'Once live, we monitor performance and provide ongoing development support as the catalog grows.'
    }
  ],
  'ecommerce-development': whyChooseData,
  'ecommerce-website-development-services.html': [
    {
      icon: processIcons.web[0],
      title: 'Discovery and Requirements',
      description: 'We review your current store, catalog structure and required integrations before design begins.'
    },
    {
      icon: processIcons.web[1],
      title: 'Design and Architecture',
      description: 'We define the platform approach, integrations and checkout logic the build will follow.'
    },
    {
      icon: processIcons.web[2],
      title: 'Development and Testing',
      description: 'The store is built and tested against real order and traffic scenarios before launch.'
    },
    {
      icon: processIcons.web[3],
      title: 'Launch and Ongoing Support',
      description: 'Once live, we monitor performance and provide ongoing development support as the catalog grows.'
    }
  ],

  // Mobile App Design & Development
  'mobile-app-design.html': [
    {
      icon: processIcons.mobile[0],
      title: 'Discovery and Research',
      description: 'We review your users, goals and any existing usability issues before design work begins.'
    },
    {
      icon: processIcons.mobile[1],
      title: 'Wireframing and Flow Design',
      description: 'We map user flows and screen structure to establish how the app should work.'
    },
    {
      icon: processIcons.mobile[2],
      title: 'Visual Design and Prototyping',
      description: 'We design the visual interface and build interactive prototypes for testing.'
    },
    {
      icon: processIcons.mobile[3],
      title: 'Handoff and Development Support',
      description: 'We prepare design files and support development to keep the built app aligned with the design.'
    }
  ],
  'mobile-app-design': whyChooseData,
  'mobile-app-design-services.html': [
    {
      icon: processIcons.mobile[0],
      title: 'Discovery and Research',
      description: 'We review your users, goals and any existing usability issues before design work begins.'
    },
    {
      icon: processIcons.mobile[1],
      title: 'Wireframing and Flow Design',
      description: 'We map user flows and screen structure to establish how the app should work.'
    },
    {
      icon: processIcons.mobile[2],
      title: 'Visual Design and Prototyping',
      description: 'We design the visual interface and build interactive prototypes for testing.'
    },
    {
      icon: processIcons.mobile[3],
      title: 'Handoff and Development Support',
      description: 'We prepare design files and support development to keep the built app aligned with the design.'
    }
  ],

  'app-development.html': [
    {
      icon: processIcons.mobile[0],
      title: 'Discovery and Requirements',
      description: 'We review your app idea, required platforms and the systems it needs to connect to.'
    },
    {
      icon: processIcons.mobile[1],
      title: 'Design and Architecture',
      description: 'We define the technical architecture, integrations and structure the build will follow.'
    },
    {
      icon: processIcons.mobile[2],
      title: 'Development and Testing',
      description: 'We build and test the app across devices and real usage scenarios before launch.'
    },
    {
      icon: processIcons.mobile[3],
      title: 'Launch and Ongoing Support',
      description: 'Once live, we monitor performance and provide ongoing development support as requirements evolve.'
    }
  ],
  'app-development': whyChooseData,
  'app-development-company-services.html': [
    {
      icon: processIcons.mobile[0],
      title: 'Discovery and Requirements',
      description: 'We review your app idea, required platforms and the systems it needs to connect to.'
    },
    {
      icon: processIcons.mobile[1],
      title: 'Design and Architecture',
      description: 'We define the technical architecture, integrations and structure the build will follow.'
    },
    {
      icon: processIcons.mobile[2],
      title: 'Development and Testing',
      description: 'We build and test the app across devices and real usage scenarios before launch.'
    },
    {
      icon: processIcons.mobile[3],
      title: 'Launch and Ongoing Support',
      description: 'Once live, we monitor performance and provide ongoing development support as requirements evolve.'
    }
  ],

  // Automation
  'business-process-automation.html': [
    {
      icon: processIcons.automation[0],
      title: 'Process Discovery and Mapping',
      description: 'We review the current process, systems involved and where manual effort is concentrated.'
    },
    {
      icon: processIcons.automation[1],
      title: 'Automation Design',
      description: 'We define the automation logic, exception handling and required system connections.'
    },
    {
      icon: processIcons.automation[2],
      title: 'Development and Testing',
      description: 'We build and test the automation against real process scenarios before release.'
    },
    {
      icon: processIcons.automation[3],
      title: 'Deployment and Monitoring',
      description: 'Once live, we track automation performance and exception rates to guide adjustments.'
    }
  ],
  'business-process-automation': whyChooseData,
  'business-process-automation-services.html': [
    {
      icon: processIcons.automation[0],
      title: 'Process Discovery and Mapping',
      description: 'We review the current process, systems involved and where manual effort is concentrated.'
    },
    {
      icon: processIcons.automation[1],
      title: 'Automation Design',
      description: 'We define the automation logic, exception handling and required system connections.'
    },
    {
      icon: processIcons.automation[2],
      title: 'Development and Testing',
      description: 'We build and test the automation against real process scenarios before release.'
    },
    {
      icon: processIcons.automation[3],
      title: 'Deployment and Monitoring',
      description: 'Once live, we track automation performance and exception rates to guide adjustments.'
    }
  ],

  'workflow-automation.html': [
    {
      icon: processIcons.automation[0],
      title: 'Workflow Discovery and Mapping',
      description: 'We review the current workflow, tools involved and where manual coordination is concentrated.'
    },
    {
      icon: processIcons.automation[1],
      title: 'Automation Design',
      description: 'We define the triggers, routing logic and exception handling the workflow will use.'
    },
    {
      icon: processIcons.automation[2],
      title: 'Development and Testing',
      description: 'The automation is built and tested against real workflow scenarios before release.'
    },
    {
      icon: processIcons.automation[3],
      title: 'Deployment and Monitoring',
      description: 'Once live, we track workflow performance and exception rates to guide adjustments.'
    }
  ],
  'workflow-automation': whyChooseData,
  'workflow-automation-services.html': [
    {
      icon: processIcons.automation[0],
      title: 'Workflow Discovery and Mapping',
      description: 'We review the current workflow, tools involved and where manual coordination is concentrated.'
    },
    {
      icon: processIcons.automation[1],
      title: 'Automation Design',
      description: 'We define the triggers, routing logic and exception handling the workflow will use.'
    },
    {
      icon: processIcons.automation[2],
      title: 'Development and Testing',
      description: 'The automation is built and tested against real workflow scenarios before release.'
    },
    {
      icon: processIcons.automation[3],
      title: 'Deployment and Monitoring',
      description: 'Once live, we track workflow performance and exception rates to guide adjustments.'
    }
  ],

  'marketing-crm-automation.html': [
    {
      icon: processIcons.automation[0],
      title: 'Discovery and Mapping',
      description: 'We review your current CRM, marketing tools and where manual coordination is concentrated.'
    },
    {
      icon: processIcons.automation[1],
      title: 'Automation Design',
      description: 'We define the triggers, routing logic and data sync requirements the system will use.'
    },
    {
      icon: processIcons.automation[2],
      title: 'Development and Testing',
      description: 'The automation is built and tested against real lead and campaign scenarios before release.'
    },
    {
      icon: processIcons.automation[3],
      title: 'Deployment and Monitoring',
      description: 'Once live, we track automation performance and data accuracy to guide adjustments.'
    }
  ],
  'marketing-crm-automation': whyChooseData,
  'marketing-and-crm-automation-services.html': [
    {
      icon: processIcons.automation[0],
      title: 'Discovery and Mapping',
      description: 'We review your current CRM, marketing tools and where manual coordination is concentrated.'
    },
    {
      icon: processIcons.automation[1],
      title: 'Automation Design',
      description: 'We define the triggers, routing logic and data sync requirements the system will use.'
    },
    {
      icon: processIcons.automation[2],
      title: 'Development and Testing',
      description: 'The automation is built and tested against real lead and campaign scenarios before release.'
    },
    {
      icon: processIcons.automation[3],
      title: 'Deployment and Monitoring',
      description: 'Once live, we track automation performance and data accuracy to guide adjustments.'
    }
  ],

  // Industry Solutions
  'retail-ecommerce.html': [
    {
      icon: processIcons.industry[0],
      title: 'Architecture and Checkout Design',
      description: 'Design headless commerce architecture, payment flows and checkout optimization so customers convert quickly and payment compliance is built in.'
    },
    {
      icon: processIcons.industry[1],
      title: 'Build and Platform Integration',
      description: 'Develop custom storefronts, product search and personalization. Integrate with payment gateways, ERP, CRM and inventory systems.'
    },
    {
      icon: processIcons.industry[2],
      title: 'Load Testing and Conversion Optimization',
      description: 'Test checkout performance under peak traffic. Optimize conversion through customer feedback and analytics to keep checkout abandonment low.'
    },
    {
      icon: processIcons.industry[3],
      title: 'Launch and Continuous Optimization',
      description: 'Deploy with redundancy and real-time monitoring. Measure conversion metrics and system performance to identify improvements immediately.'
    }
  ],
  'retail-ecommerce': whyChooseData,

  'finance-banking.html': [
    {
      icon: processIcons.industry[0],
      title: 'Regulatory Architecture Design',
      description: 'Map FCA, PRA and relevant frameworks to system architecture so compliance is engineered with audit trails, data retention and API security.'
    },
    {
      icon: processIcons.industry[1],
      title: 'Secure Build and Integration',
      description: 'Develop with PCI-DSS, encryption and API-security standards embedded. Integrate with banking networks and regulatory reporting systems.'
    },
    {
      icon: processIcons.industry[2],
      title: 'Compliance Testing and Audit',
      description: 'Test regulatory workflows, consent flows and reporting accuracy. Prepare audit-ready documentation to satisfy third-party examination.'
    },
    {
      icon: processIcons.industry[3],
      title: 'Production Deployment and Monitoring',
      description: 'Deploy with active-active redundancy, automated failover and real-time monitoring with versioned APIs for zero live disruption.'
    }
  ],
  'finance-banking': whyChooseData,
  'finance-and-banking.html': [
    {
      icon: processIcons.industry[0],
      title: 'Regulatory Architecture Design',
      description: 'Map FCA, PRA and relevant frameworks to system architecture so compliance is engineered with audit trails, data retention and API security.'
    },
    {
      icon: processIcons.industry[1],
      title: 'Secure Build and Integration',
      description: 'Develop with PCI-DSS, encryption and API-security standards embedded. Integrate with banking networks and regulatory reporting systems.'
    },
    {
      icon: processIcons.industry[2],
      title: 'Compliance Testing and Audit',
      description: 'Test regulatory workflows, consent flows and reporting accuracy. Prepare audit-ready documentation to satisfy third-party examination.'
    },
    {
      icon: processIcons.industry[3],
      title: 'Production Deployment and Monitoring',
      description: 'Deploy with active-active redundancy, automated failover and real-time monitoring with versioned APIs for zero live disruption.'
    }
  ],

  'healthcare.html': [
    {
      icon: processIcons.industry[0],
      title: 'Clinical Safety and DSPT Architecture',
      description: 'Map DCB0129/DCB0160 clinical safety requirements and NHS DSPT frameworks to system design so safety cases are evidence-based.'
    },
    {
      icon: processIcons.industry[1],
      title: 'Secure Build and NHS Integration',
      description: 'Develop with GDPR and NHS data-security standards embedded. Integrate with NHS Login, HL7/FHIR and clinical platforms.'
    },
    {
      icon: processIcons.industry[2],
      title: 'Clinical Testing and Safety Review',
      description: 'Test clinical workflows with end users, validate clinical decision logic and prepare evidence for DSPT and CQC assessments.'
    },
    {
      icon: processIcons.industry[3],
      title: 'Production Deployment and Clinical Support',
      description: 'Deploy with redundancy, automated failover and on-call clinical support. Monitor clinical workflows and outcomes continuously.'
    }
  ],
  'healthcare': whyChooseData,

  'manufacturing.html': [
    {
      icon: processIcons.industry[0],
      title: 'Production Workflow and Data Architecture',
      description: 'Map production processes, machine data requirements and business integrations so data flows accurately to business systems.'
    },
    {
      icon: processIcons.industry[1],
      title: 'Machine Integration and Data Collection',
      description: 'Connect legacy and modern machines using standard protocols, ensuring secure transmission and dependable data quality.'
    },
    {
      icon: processIcons.industry[2],
      title: 'MES and Analytics Build',
      description: 'Develop production dashboards, OEE tracking, predictive models and quality workflows so operators see the factory floor in real time.'
    },
    {
      icon: processIcons.industry[3],
      title: 'SAP Integration and Continuous Improvement',
      description: 'Integrate with SAP and business systems so production data flows bidirectionally. Monitor operational metrics to compound efficiency.'
    }
  ],
  'manufacturing': whyChooseData,

  'real-estate.html': [
    {
      icon: processIcons.industry[0],
      title: 'Property Data and Workflow Architecture',
      description: 'Map property portfolios, lease structures and business workflows so data flows accurately across asset operations.'
    },
    {
      icon: processIcons.industry[1],
      title: 'Platform Build and Integrations',
      description: 'Develop property platforms, tenant portals and management dashboards. Integrate with accounting and CRM systems.'
    },
    {
      icon: processIcons.industry[2],
      title: 'Launch and Adoption',
      description: 'Deploy with training and support so property teams adopt the platform quickly. Monitor operational metrics and tenant engagement.'
    },
    {
      icon: processIcons.industry[3],
      title: 'Continuous Optimization and Scaling',
      description: 'Add new properties and features as the business grows, measuring operational improvements to increase efficiency.'
    }
  ],
  'real-estate': whyChooseData,

  'logistics-transportation.html': [
    {
      icon: processIcons.industry[0],
      title: 'Operations Workflow and Data Architecture',
      description: 'Map logistics workflows, vehicle and shipment data requirements and warehouse integration needs for real-time operations.'
    },
    {
      icon: processIcons.industry[1],
      title: 'Platform Build and Integrations',
      description: 'Develop logistics platforms with real-time tracking, route optimization and warehouse coordination.'
    },
    {
      icon: processIcons.industry[2],
      title: 'Launch and Driver Training',
      description: 'Deploy with logistics-team training so drivers and warehouse staff adopt the platform quickly and track real-time operations.'
    },
    {
      icon: processIcons.industry[3],
      title: 'Continuous Optimization and Scaling',
      description: 'Expand to new routes and delivery partners as the business grows, measuring operational metrics to optimize logistics.'
    }
  ],
  'logistics-transportation': whyChooseData,

  'hire-ios-developers.html': [
    {
      icon: processIcons.mobile[0],
      title: 'Discovery & Requirement Analysis',
      description: 'We analyze your app vision, target audience, technical architecture and skill requirements to select the best developers.'
    },
    {
      icon: processIcons.mobile[1],
      title: 'Profile Selection & Fast Interview',
      description: 'Review pre-vetted senior iOS engineer profiles within 24 hours, conduct 1-on-1 technical interviews and choose your developer.'
    },
    {
      icon: processIcons.mobile[2],
      title: 'Seamless 48-Hour Onboarding',
      description: 'Your chosen developer integrates directly into your Slack, Jira, GitHub and CI/CD pipelines under your management.'
    },
    {
      icon: processIcons.mobile[3],
      title: '15-Day Risk-Free Trial & Delivery',
      description: 'Start with a 15-day risk-free trial. If not completely satisfied, pay nothing or switch developers with zero hassle.'
    }
  ],
  'hire-ios-developers': whyChooseData
};

function getWhyChooseData() {
  const rawPage = window.location.pathname.split('/').pop() || 'index.html';
  const cleanPage = rawPage.replace(/\.html$/, '');
  const withHtml = cleanPage + '.html';
  return whyChooseDataByPage[withHtml] ||
    (whyChooseDataByPage[cleanPage] && whyChooseDataByPage[cleanPage] !== whyChooseData ? whyChooseDataByPage[cleanPage] : null) ||
    whyChooseDataByPage[rawPage] ||
    whyChooseData;
}

const techIcons = {
  frontend: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"></rect><line x1="2" y1="8" x2="22" y2="8"></line><circle cx="5" cy="5.5" r="0.75" fill="var(--primary)"></circle><circle cx="8" cy="5.5" r="0.75" fill="var(--primary)"></circle><path d="m9 12-2 2 2 2"></path><path d="m15 12 2 2-2 2"></path></svg>',
  backend: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"></rect><rect x="2" y="14" width="20" height="8" rx="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line><line x1="10" y1="6" x2="14" y2="6"></line><line x1="10" y1="18" x2="14" y2="18"></line></svg>',
  mobile: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="3"></rect><line x1="10" y1="5" x2="14" y2="5"></line><circle cx="12" cy="18" r="1" fill="var(--primary)"></circle></svg>',
  android: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="2"></rect><circle cx="9" cy="8" r="1" fill="var(--primary)"></circle><circle cx="15" cy="8" r="1" fill="var(--primary)"></circle><line x1="8" y1="14" x2="16" y2="14"></line></svg>',
  cloud: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path><polyline points="13 11 12 10 11 11"></polyline><line x1="12" y1="10" x2="12" y2="16"></line></svg>',
  dataAi: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="10" cy="5" rx="7" ry="2.5"></ellipse><path d="M3 5v11c0 1.38 3.13 2.5 7 2.5 1.25 0 2.42-.12 3.4-.33"></path><path d="M3 10.5c0 1.38 3.13 2.5 7 2.5 1.05 0 2.05-.08 2.94-.23"></path><path d="m19 12-1 3-3 1 3 1 1 3 1-3 3-1-3-1z"></path></svg>',
  data: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>',
  ai: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><circle cx="12" cy="12" r="2"></circle></svg>',
  languages: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
  api: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>',
  architecture: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>',
  security: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>',
  lock: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>',
  fraud: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><circle cx="12" cy="11" r="3"></circle><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>',
  design: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19 7-7 3 3-7 7-3-3z"></path><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="m2 2 7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>',
  wireframe: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>',
  components: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>',
  search: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
  styling: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="var(--primary)"></circle><circle cx="17.5" cy="10.5" r=".5" fill="var(--primary)"></circle><circle cx="8.5" cy="7.5" r=".5" fill="var(--primary)"></circle><circle cx="6.5" cy="12.5" r=".5" fill="var(--primary)"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg>',
  payments: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line><line x1="6" y1="15" x2="10" y2="15"></line></svg>',
  ecommerce: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>',
  cms: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>',
  automation: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>',
  testing: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>',
  speed: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
  analytics: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line><line x1="2" y1="20" x2="22" y2="20"></line></svg>',
  valuation: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline><line x1="2" y1="21" x2="22" y2="21"></line></svg>',
  delivery: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 3-2 3s1.74-.5 3-2"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4.5c1.62-1.63 5-1.5 5-1.5"></path><path d="M12 15v5s3.03-.55 4.5-2c1.63-1.62 1.5-5 1.5-5"></path></svg>',
  containers: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="14" width="7" height="7" rx="1"></rect><rect x="3" y="14" width="7" height="7" rx="1"></rect></svg>',
  terminal: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>',
  monitoring: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"></rect><path d="M6 10h2l2-3 3 6 2-3h3"></path></svg>',
  property: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"></path><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"></path><path d="M9 9h1"></path><path d="M9 13h1"></path><path d="M9 17h1"></path><path d="M14 9h1"></path><path d="M14 13h1"></path><path d="M14 17h1"></path></svg>',
  fleet: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13" rx="1"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>',
  route: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
  warehouse: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>',
  globe: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z"></path></svg>',
  healthcare: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>',
  telemedicine: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>',
  clinicalWorkflow: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><path d="m9 14 2 2 4-4"></path></svg>',
  manufacturing: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M17 18h1"></path><path d="M12 18h1"></path><path d="M7 18h1"></path></svg>',
  chip: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>',
  blockchain: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="6" height="6" rx="1"></rect><rect x="16" y="7" width="6" height="6" rx="1"></rect><rect x="9" y="15" width="6" height="6" rx="1"></rect><path d="M8 10h8"></path><path d="M5 13v2a2 2 0 0 0 2 2h2"></path><path d="M19 13v2a2 2 0 0 1-2 2h-2"></path></svg>',
  spatial: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-3l-2-2h-2l-2 2H6a3 3 0 0 1-3-3Z"></path><circle cx="8" cy="12" r="2"></circle><circle cx="16" cy="12" r="2"></circle></svg>',
  arTarget: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"></path><circle cx="12" cy="12" r="3"></circle></svg>',
  cube3d: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>',
  gamepad: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="12" x2="10" y2="12"></line><line x1="8" y1="10" x2="8" y2="14"></line><line x1="15" y1="13" x2="15.01" y2="13"></line><line x1="18" y1="11" x2="18.01" y2="11"></line><rect x="2" y="6" width="20" height="12" rx="6"></rect></svg>',
  hand: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"></path><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"></path><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"></path><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"></path></svg>',
  vision: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>',
  video: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>',
  folder: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>',
  crm: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
  speech: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="22"></line></svg>',
  sustainability: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>',
  document: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>',
  default: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>'
};

const techStackData = [
  { category: 'Frontend', icon: techIcons.frontend, items: ['React', 'Angular', 'Vue.js', 'TypeScript'] },
  { category: 'Backend', icon: techIcons.backend, items: ['Node.js', 'Python', 'PHP', 'Laravel', 'Java'] },
  { category: 'Mobile', icon: techIcons.mobile, items: ['Swift', 'Kotlin', 'Flutter', 'React Native'] },
  { category: 'Cloud and DevOps', icon: techIcons.cloud, items: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD'] },
  { category: 'Data and AI', icon: techIcons.dataAi, items: ['Machine Learning', 'NLP', 'SQL', 'Data Pipelines'] }
];

const techStackDataByPage = {
  'ai-content-generator.html': [
    { ...techStackData[0], category: 'Languages', items: ['Python', 'TypeScript', 'Node.js'] },
    { ...techStackData[1], category: 'LLM Providers', items: ['OpenAI', 'Anthropic Claude'] },
    { ...techStackData[2], category: 'Data and Retrieval', items: ['Vector Databases', 'Embeddings'] },
    { ...techStackData[3], category: 'Cloud and Infrastructure', items: ['AWS', 'Azure'] },
    { ...techStackData[4], category: 'Integration', items: ['REST APIs', 'Webhooks'] }
  ],
  'ai-chatbot-development.html': [
    { ...techStackData[0], category: 'Languages', items: ['Python', 'TypeScript', 'Node.js'] },
    { ...techStackData[1], category: 'LLM Providers', items: ['OpenAI', 'Anthropic Claude'] },
    { ...techStackData[2], category: 'Retrieval and Data', items: ['Vector Databases', 'Embeddings'] },
    { ...techStackData[3], category: 'Cloud and Infrastructure', items: ['AWS', 'Azure'] },
    { ...techStackData[4], category: 'Integration', items: ['REST APIs', 'Webhooks'] }
  ],
  'ai-language-translator.html': [
    { ...techStackData[0], category: 'Languages', items: ['Python', 'TypeScript', 'Node.js'] },
    { ...techStackData[1], category: 'AI and ML', items: ['Neural Machine Translation', 'LLM Providers'] },
    { ...techStackData[2], category: 'Speech Processing', items: ['Speech to Text', 'Text to Speech'] },
    { ...techStackData[3], category: 'Cloud and Infrastructure', items: ['AWS', 'Azure'] },
    { ...techStackData[4], category: 'Integration', items: ['REST APIs', 'Webhooks'] }
  ],
  'virtual-assistant.html': [
    { ...techStackData[0], category: 'Languages', items: ['Python', 'TypeScript', 'Node.js'] },
    { ...techStackData[1], category: 'LLM Providers', items: ['OpenAI', 'Anthropic Claude'] },
    { ...techStackData[2], category: 'Retrieval and Data', items: ['Vector Databases', 'Embeddings'] },
    { ...techStackData[3], category: 'Cloud and Infrastructure', items: ['AWS', 'Azure'] },
    { ...techStackData[4], category: 'Integration', items: ['REST APIs', 'Webhooks'] }
  ],
  'predictive-maintenance-services.html': [
    { ...techStackData[0], category: 'Languages', items: ['Python', 'SQL'] },
    { ...techStackData[1], category: 'Machine Learning', items: ['Time Series Models', 'Anomaly Detection'] },
    { ...techStackData[2], category: 'IoT and Data', items: ['Sensor Integration', 'Data Pipelines'] },
    { ...techStackData[3], category: 'Cloud and Infrastructure', items: ['AWS', 'Azure'] },
    { ...techStackData[4], category: 'Integration', items: ['REST APIs', 'CMMS Integration'] }
  ],
  'fraud-detection-services.html': [
    { ...techStackData[0], category: 'Languages', items: ['Python', 'SQL'] },
    { ...techStackData[1], category: 'Machine Learning', items: ['Anomaly Detection', 'Classification Models'] },
    { ...techStackData[2], category: 'Data and Streaming', items: ['Real-Time Data Pipelines', 'Event Streaming'] },
    { ...techStackData[3], category: 'Cloud and Infrastructure', items: ['AWS', 'Azure'] },
    { ...techStackData[4], category: 'Integration', items: ['REST APIs', 'Payment Gateway Integration'] }
  ],
  'automl-development-services.html': [
    { ...techStackData[0], category: 'Languages', items: ['Python', 'SQL'] },
    { ...techStackData[1], category: 'Machine Learning', items: ['AutoML Frameworks', 'Hyperparameter Optimization'] },
    { ...techStackData[2], category: 'Data and Pipelines', items: ['Data Preprocessing', 'Feature Engineering'] },
    { ...techStackData[3], category: 'Cloud and Infrastructure', items: ['AWS', 'Azure'] },
    { ...techStackData[4], category: 'Integration', items: ['REST APIs', 'MLOps Tooling'] }
  ],
  'it-consulting-services.html': [
    { ...techStackData[0], category: 'Cloud Platforms', items: ['AWS', 'Azure'] },
    { ...techStackData[1], category: 'Architecture', items: ['Microservices', 'System Integration'] },
    { ...techStackData[2], category: 'Data', items: ['Data Migration', 'Data Architecture'] },
    { ...techStackData[3], category: 'Security', items: ['Access Control', 'Infrastructure Security'] },
    { ...techStackData[4], category: 'Delivery', items: ['DevOps', 'Agile Delivery'] }
  ],
  'startup-it-consulting-services.html': [
    { ...techStackData[0], category: 'Cloud Platforms', items: ['AWS', 'Azure'] },
    { ...techStackData[1], category: 'Framework', items: ['Node.js', 'React'] },
    { ...techStackData[2], category: 'Data', items: ['Databases', 'Data Architecture'] },
    { ...techStackData[3], category: 'Architecture', items: ['API Design', 'Microservices'] },
    { ...techStackData[4], category: 'Delivery', items: ['Agile Delivery', 'DevOps'] }
  ],
  'ai-strategy-consulting-services.html': [
    { ...techStackData[0], category: 'AI and ML', items: ['LLM Providers', 'Machine Learning Frameworks'] },
    { ...techStackData[1], category: 'Cloud Platforms', items: ['AWS', 'Azure'] },
    { ...techStackData[2], category: 'Data', items: ['Data Architecture', 'Data Pipelines'] },
    { ...techStackData[3], category: 'Governance', items: ['Evaluation Frameworks', 'Monitoring'] },
    { ...techStackData[4], category: 'Delivery', items: ['Agile Delivery', 'DevOps'] }
  ],
  'responsive-web-design-services.html': [
    { ...techStackData[0], category: 'Languages', items: ['HTML', 'CSS', 'JavaScript'] },
    { ...techStackData[1], category: 'Frameworks', items: ['React', 'Next.js'] },
    { ...techStackData[2], category: 'Performance', items: ['Image Optimization', 'Lazy Loading'] },
    { ...techStackData[3], category: 'CMS Integration', items: ['WordPress', 'Headless CMS'] },
    { ...techStackData[4], category: 'Testing', items: ['Cross-browser Testing', 'Device Testing'] }
  ],
  'mobile-app-design-services.html': [
    { ...techStackData[0], category: 'Design Tools', items: ['Figma', 'Adobe XD'] },
    { ...techStackData[1], category: 'Prototyping', items: ['Interactive Prototypes', 'User Testing'] },
    { ...techStackData[2], category: 'Design Systems', items: ['Component Libraries', 'Style Guides'] },
    { ...techStackData[3], category: 'Platforms', items: ['iOS Guidelines', 'Android Guidelines'] },
    { ...techStackData[4], category: 'Handoff', items: ['Design Specs', 'Developer Handoff'] }
  ],
  'business-process-automation-services.html': [
    { ...techStackData[0], category: 'RPA Tools', items: ['UiPath', 'Power Automate'] },
    { ...techStackData[1], category: 'Languages', items: ['Python', 'JavaScript'] },
    { ...techStackData[2], category: 'Integration', items: ['REST APIs', 'Webhooks'] },
    { ...techStackData[3], category: 'Document Processing', items: ['OCR', 'Data Extraction'] },
    { ...techStackData[4], category: 'Cloud and Infrastructure', items: ['AWS', 'Azure'] }
  ],
  'workflow-automation-services.html': [
    { ...techStackData[0], category: 'Automation Tools', items: ['Power Automate', 'Zapier'] },
    { ...techStackData[1], category: 'Languages', items: ['Python', 'JavaScript'] },
    { ...techStackData[2], category: 'Integration', items: ['REST APIs', 'Webhooks'] },
    { ...techStackData[3], category: 'AI and Decisioning', items: ['LLM Providers', 'Rules Engines'] },
    { ...techStackData[4], category: 'Cloud and Infrastructure', items: ['AWS', 'Azure'] }
  ],
  'marketing-and-crm-automation-services.html': [
    { ...techStackData[0], category: 'CRM Platforms', items: ['HubSpot', 'Salesforce'] },
    { ...techStackData[1], category: 'Marketing Automation', items: ['Email Automation', 'Campaign Tools'] },
    { ...techStackData[2], category: 'Languages', items: ['Python', 'JavaScript'] },
    { ...techStackData[3], category: 'Integration', items: ['REST APIs', 'Webhooks'] },
    { ...techStackData[4], category: 'Cloud and Infrastructure', items: ['AWS', 'Azure'] }
  ],
  'web-development-company-services.html': [
    { ...techStackData[0], category: 'Languages', items: ['JavaScript', 'TypeScript', 'PHP'] },
    { ...techStackData[1], category: 'Frontend Frameworks', items: ['React', 'Next.js'] },
    { ...techStackData[2], category: 'Backend Frameworks', items: ['Node.js', 'Laravel'] },
    { ...techStackData[3], category: 'CMS', items: ['WordPress', 'Headless CMS'] },
    { ...techStackData[4], category: 'Cloud and Infrastructure', items: ['AWS', 'Azure'] }
  ],
  'app-development-company-services.html': [
    { ...techStackData[0], category: 'Mobile', items: ['Swift', 'Kotlin', 'React Native'] },
    { ...techStackData[1], category: 'Backend Languages', items: ['Node.js', 'Python'] },
    { ...techStackData[2], category: 'Databases', items: ['PostgreSQL', 'MongoDB'] },
    { ...techStackData[3], category: 'Cloud and Infrastructure', items: ['AWS', 'Azure'] },
    { ...techStackData[4], category: 'Integration', items: ['REST APIs', 'Push Notifications'] }
  ],
  'ecommerce-website-development-services.html': [
    { ...techStackData[0], category: 'Platforms', items: ['Shopify', 'Headless Commerce'] },
    { ...techStackData[1], category: 'Languages', items: ['JavaScript', 'TypeScript', 'PHP'] },
    { ...techStackData[2], category: 'Frontend Frameworks', items: ['React', 'Next.js'] },
    { ...techStackData[3], category: 'Payments', items: ['Stripe', 'PayPal Integration'] },
    { ...techStackData[4], category: 'Cloud and Infrastructure', items: ['AWS', 'Azure'] }
  ],
  'cms-development-services.html': [
    { ...techStackData[0], category: 'CMS Platforms', items: ['WordPress', 'Drupal'] },
    { ...techStackData[1], category: 'Languages', items: ['PHP', 'JavaScript'] },
    { ...techStackData[2], category: 'Custom Development', items: ['Custom Themes', 'Custom Plugins'] },
    { ...techStackData[3], category: 'Hosting and Infrastructure', items: ['AWS', 'Managed Hosting'] },
    { ...techStackData[4], category: 'Integration', items: ['REST APIs', 'Third-Party Integrations'] }
  ],



  'hire-ios-developers.html': [
    { category: 'Languages', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>', items: ['Swift', 'SwiftUI', 'Objective-C', 'C++'] },
    { category: 'Frameworks & UI', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>', items: ['UIKit', 'Combine', 'RxSwift', 'Cocoa Touch', 'ARKit'] },
    { category: 'Architecture & Patterns', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>', items: ['MVVM', 'VIPER', 'Clean Swift', 'The Composable Architecture (TCA)'] },
    { category: 'Storage & Cloud', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>', items: ['CoreData', 'Realm', 'SQLite', 'CloudKit', 'Firebase'] },
    { category: 'Networking & APIs', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>', items: ['RESTful APIs', 'GraphQL', 'URLSession', 'Alamofire', 'WebSockets'] },
  ],

  'hire-developers.html': [
    { category: 'Frontend', icon: techIcons.frontend, items: ['React', 'Angular', 'Vue.js', 'TypeScript', 'Next.js'] },
    { category: 'Backend', icon: techIcons.backend, items: ['Node.js', 'Python', 'PHP', 'Laravel', 'Java', '.NET'] },
    { category: 'Mobile', icon: techIcons.mobile, items: ['Swift', 'Kotlin', 'Flutter', 'React Native'] },
    { category: 'Cloud and DevOps', icon: techIcons.cloud, items: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD'] },
    { category: 'Data and Architecture', icon: techIcons.data, items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Microservices'] }
  ],

  'mobile-app-developers.html': [
    { category: 'iOS', icon: techIcons.mobile, items: ['Swift', 'SwiftUI', 'UIKit'] },
    { category: 'Android', icon: techIcons.mobile, items: ['Kotlin', 'Java', 'Jetpack Compose'] },
    { category: 'Cross Platform', icon: techIcons.frontend, items: ['Flutter', 'React Native', 'Dart'] },
    { category: 'Backend and APIs', icon: techIcons.backend, items: ['Node.js', 'REST APIs', 'Firebase'] },
    { category: 'Cloud and Infrastructure', icon: techIcons.cloud, items: ['AWS', 'Azure', 'CI/CD'] }
  ],

  'ios-developers.html': [
    { category: 'Languages', icon: techIcons.mobile, items: ['Swift', 'Objective-C'] },
    { category: 'UI Frameworks', icon: techIcons.mobile, items: ['SwiftUI', 'UIKit'] },
    { category: 'Data and Storage', icon: techIcons.frontend, items: ['Core Data', 'iOS SDK'] },
    { category: 'Backend and APIs', icon: techIcons.backend, items: ['REST APIs', 'Firebase'] },
    { category: 'Cloud and Infrastructure', icon: techIcons.cloud, items: ['AWS', 'CI/CD'] }
  ],

  'android-developers.html': [
    { category: 'Languages', icon: techIcons.mobile, items: ['Kotlin', 'Java'] },
    { category: 'UI Frameworks', icon: techIcons.mobile, items: ['Jetpack Compose', 'Android SDK'] },
    { category: 'Data and Storage', icon: techIcons.frontend, items: ['Room', 'Firebase'] },
    { category: 'Backend and APIs', icon: techIcons.backend, items: ['REST APIs', 'Firebase'] },
    { category: 'Cloud and Infrastructure', icon: techIcons.cloud, items: ['AWS', 'CI/CD'] }
  ],

  'swift-developers.html': [
    { category: 'Languages', icon: techIcons.mobile, items: ['Swift', 'Objective-C'] },
    { category: 'UI Frameworks', icon: techIcons.mobile, items: ['SwiftUI', 'UIKit'] },
    { category: 'Data and Storage', icon: techIcons.frontend, items: ['Core Data', 'iOS SDK'] },
    { category: 'Backend and APIs', icon: techIcons.backend, items: ['REST APIs', 'Firebase'] },
    { category: 'Cloud and Infrastructure', icon: techIcons.cloud, items: ['AWS', 'CI/CD'] }
  ],

  'flutter-developers.html': [
    { category: 'Languages', icon: techIcons.mobile, items: ['Dart'] },
    { category: 'Frameworks', icon: techIcons.mobile, items: ['Flutter', 'Flutter SDK'] },
    { category: 'State Management', icon: techIcons.frontend, items: ['Provider', 'Riverpod'] },
    { category: 'Backend and APIs', icon: techIcons.backend, items: ['REST APIs', 'Firebase'] },
    { category: 'Cloud and Infrastructure', icon: techIcons.cloud, items: ['AWS', 'CI/CD'] }
  ],

  'react-native-developers.html': [
    { category: 'Languages', icon: techIcons.mobile, items: ['JavaScript', 'TypeScript'] },
    { category: 'Frameworks', icon: techIcons.mobile, items: ['React Native', 'React'] },
    { category: 'Native Modules', icon: techIcons.frontend, items: ['Native Modules', 'Expo'] },
    { category: 'Backend and APIs', icon: techIcons.backend, items: ['REST APIs', 'Firebase'] },
    { category: 'Cloud and Infrastructure', icon: techIcons.cloud, items: ['AWS', 'CI/CD'] }
  ],

  'kotlin-developers.html': [
    { category: 'Languages', icon: techIcons.mobile, items: ['Kotlin', 'Java'] },
    { category: 'UI Frameworks', icon: techIcons.mobile, items: ['Jetpack Compose', 'Android SDK'] },
    { category: 'Concurrency', icon: techIcons.frontend, items: ['Coroutines', 'Flow'] },
    { category: 'Backend and APIs', icon: techIcons.backend, items: ['REST APIs', 'Firebase'] },
    { category: 'Cloud and Infrastructure', icon: techIcons.cloud, items: ['AWS', 'CI/CD'] }
  ],

  'front-end-web-developers.html': [
    { category: 'Languages', icon: techIcons.mobile, items: ['JavaScript', 'TypeScript'] },
    { category: 'Frameworks', icon: techIcons.mobile, items: ['React', 'Angular', 'Vue.js'] },
    { category: 'Styling', icon: techIcons.frontend, items: ['CSS3', 'Tailwind CSS'] },
    { category: 'Performance', icon: techIcons.backend, items: ['Lazy Loading', 'Code Splitting'] },
    { category: 'Testing', icon: techIcons.cloud, items: ['Jest', 'Cypress'] }
  ],

  'angularjs-developers.html': [
    { category: 'Languages', icon: techIcons.mobile, items: ['JavaScript', 'TypeScript'] },
    { category: 'Frameworks', icon: techIcons.mobile, items: ['Angular', 'AngularJS'] },
    { category: 'Reactive Programming', icon: techIcons.frontend, items: ['RxJS', 'NgRx'] },
    { category: 'Backend and APIs', icon: techIcons.backend, items: ['REST APIs', 'GraphQL'] },
    { category: 'Cloud and Infrastructure', icon: techIcons.cloud, items: ['AWS', 'CI/CD'] }
  ],

  'reactjs-developers.html': [
    { category: 'Languages', icon: techIcons.mobile, items: ['JavaScript', 'TypeScript'] },
    { category: 'Frameworks', icon: techIcons.mobile, items: ['React', 'Next.js'] },
    { category: 'State Management', icon: techIcons.frontend, items: ['Redux', 'React Query'] },
    { category: 'Backend and APIs', icon: techIcons.backend, items: ['REST APIs', 'GraphQL'] },
    { category: 'Cloud and Infrastructure', icon: techIcons.cloud, items: ['AWS', 'CI/CD'] }
  ],

  'vuejs-developers.html': [
    { category: 'Languages', icon: techIcons.mobile, items: ['JavaScript', 'TypeScript'] },
    { category: 'Frameworks', icon: techIcons.mobile, items: ['Vue 3', 'Nuxt.js'] },
    { category: 'State Management', icon: techIcons.frontend, items: ['Pinia', 'Vue Router'] },
    { category: 'Backend and APIs', icon: techIcons.backend, items: ['REST APIs', 'GraphQL'] },
    { category: 'Cloud and Infrastructure', icon: techIcons.cloud, items: ['AWS', 'CI/CD'] }
  ],

  'back-end-web-developers.html': [
    { category: 'Languages', icon: techIcons.mobile, items: ['Node.js', 'Python', 'PHP'] },
    { category: 'Frameworks', icon: techIcons.mobile, items: ['Express', 'Django', 'Laravel'] },
    { category: 'Databases', icon: techIcons.frontend, items: ['PostgreSQL', 'MongoDB', 'MySQL'] },
    { category: 'APIs', icon: techIcons.backend, items: ['REST APIs', 'GraphQL'] },
    { category: 'Cloud and Infrastructure', icon: techIcons.cloud, items: ['AWS', 'Docker', 'CI/CD'] }
  ],

  'nodejs-developers.html': [
    { category: 'Languages', icon: techIcons.mobile, items: ['JavaScript', 'TypeScript'] },
    { category: 'Frameworks', icon: techIcons.mobile, items: ['Express', 'NestJS'] },
    { category: 'Databases', icon: techIcons.frontend, items: ['MongoDB', 'PostgreSQL'] },
    { category: 'APIs', icon: techIcons.backend, items: ['REST APIs', 'GraphQL'] },
    { category: 'Cloud and Infrastructure', icon: techIcons.cloud, items: ['AWS', 'Docker', 'CI/CD'] }
  ],

  'laravel-developers.html': [
    { category: 'Languages', icon: techIcons.mobile, items: ['PHP'] },
    { category: 'Frameworks', icon: techIcons.mobile, items: ['Laravel', 'Symfony'] },
    { category: 'Databases', icon: techIcons.frontend, items: ['MySQL', 'PostgreSQL'] },
    { category: 'APIs', icon: techIcons.backend, items: ['REST APIs', 'GraphQL'] },
    { category: 'Cloud and Infrastructure', icon: techIcons.cloud, items: ['AWS', 'Docker', 'CI/CD'] }
  ],

  'python-developers.html': [
    { category: 'Languages', icon: techIcons.mobile, items: ['Python'] },
    { category: 'Frameworks', icon: techIcons.mobile, items: ['Django', 'FastAPI', 'Flask'] },
    { category: 'Databases', icon: techIcons.frontend, items: ['PostgreSQL', 'MongoDB'] },
    { category: 'APIs', icon: techIcons.backend, items: ['REST APIs', 'GraphQL'] },
    { category: 'Cloud and Infrastructure', icon: techIcons.cloud, items: ['AWS', 'Docker', 'CI/CD'] }
  ],

  'php-developers.html': [
    { category: 'Languages', icon: techIcons.mobile, items: ['PHP'] },
    { category: 'Frameworks', icon: techIcons.mobile, items: ['Laravel', 'Symfony', 'CodeIgniter'] },
    { category: 'Databases', icon: techIcons.frontend, items: ['MySQL', 'PostgreSQL'] },
    { category: 'APIs', icon: techIcons.backend, items: ['REST APIs', 'GraphQL'] },
    { category: 'Cloud and Infrastructure', icon: techIcons.cloud, items: ['AWS', 'Docker', 'CI/CD'] }
  ],

  'ecommerce-developers.html': [
    { category: 'Platforms', icon: techIcons.mobile, items: ['Shopify', 'Magento', 'WooCommerce'] },
    { category: 'Languages', icon: techIcons.mobile, items: ['PHP', 'JavaScript', 'TypeScript'] },
    { category: 'Frameworks', icon: techIcons.frontend, items: ['Laravel', 'Next.js'] },
    { category: 'Payments', icon: techIcons.backend, items: ['Stripe', 'PayPal Integration'] },
    { category: 'Cloud and Infrastructure', icon: techIcons.cloud, items: ['AWS', 'CI/CD'] }
  ],

  'wordpress-developers.html': [
    { category: 'Languages', icon: techIcons.mobile, items: ['PHP', 'JavaScript'] },
    { category: 'CMS', icon: techIcons.mobile, items: ['WordPress', 'Gutenberg'] },
    { category: 'Ecommerce', icon: techIcons.frontend, items: ['WooCommerce'] },
    { category: 'Databases', icon: techIcons.backend, items: ['MySQL'] },
    { category: 'Cloud and Infrastructure', icon: techIcons.cloud, items: ['AWS', 'Managed Hosting'] }
  ],

  'shopify-developers.html': [
    { category: 'Platforms', icon: techIcons.mobile, items: ['Shopify', 'Shopify Plus'] },
    { category: 'Templating', icon: techIcons.mobile, items: ['Liquid'] },
    { category: 'APIs', icon: techIcons.frontend, items: ['Storefront API', 'Admin API'] },
    { category: 'Languages', icon: techIcons.backend, items: ['JavaScript', 'TypeScript'] },
    { category: 'Cloud and Infrastructure', icon: techIcons.cloud, items: ['AWS', 'CI/CD'] }
  ],

  'magento-developers.html': [
    { category: 'Platforms', icon: techIcons.mobile, items: ['Magento 2', 'Adobe Commerce'] },
    { category: 'Languages', icon: techIcons.mobile, items: ['PHP'] },
    { category: 'APIs', icon: techIcons.frontend, items: ['REST APIs', 'GraphQL'] },
    { category: 'Databases', icon: techIcons.backend, items: ['MySQL', 'Elasticsearch'] },
    { category: 'Cloud and Infrastructure', icon: techIcons.cloud, items: ['AWS', 'Adobe Commerce Cloud'] }
  ],

  'bigcommerce-developers.html': [
    { category: 'Platforms', icon: techIcons.mobile, items: ['BigCommerce'] },
    { category: 'Templating', icon: techIcons.mobile, items: ['Stencil', 'Handlebars'] },
    { category: 'APIs', icon: techIcons.frontend, items: ['BigCommerce API', 'Storefront API'] },
    { category: 'Languages', icon: techIcons.backend, items: ['JavaScript', 'TypeScript'] },
    { category: 'Cloud and Infrastructure', icon: techIcons.cloud, items: ['AWS', 'CI/CD'] }
  ],

  'woocommerce-developers.html': [
    { category: 'Platforms', icon: techIcons.mobile, items: ['WooCommerce', 'WordPress'] },
    { category: 'Languages', icon: techIcons.mobile, items: ['PHP', 'JavaScript'] },
    { category: 'Databases', icon: techIcons.frontend, items: ['MySQL'] },
    { category: 'Payments', icon: techIcons.backend, items: ['Stripe', 'PayPal Integration'] },
    { category: 'Cloud and Infrastructure', icon: techIcons.cloud, items: ['AWS', 'Managed Hosting'] }
  ],

  'chatbot-developers.html': [
    { category: 'LLM Providers', icon: techIcons.mobile, items: ['OpenAI', 'Anthropic', 'Claude'] },
    { category: 'Retrieval', icon: techIcons.mobile, items: ['RAG', 'Vector Databases'] },
    { category: 'NLP', icon: techIcons.frontend, items: ['Intent Handling', 'Entity Recognition'] },
    { category: 'Languages', icon: techIcons.backend, items: ['Python', 'TypeScript'] },
    { category: 'Cloud and Infrastructure', icon: techIcons.cloud, items: ['AWS', 'Azure'] }
  ],

  'graphic-designers.html': [
    { category: 'Design Tools', icon: techIcons.mobile, items: ['Adobe Photoshop', 'Adobe Illustrator'] },
    { category: 'Layout', icon: techIcons.mobile, items: ['Adobe InDesign'] },
    { category: 'Prototyping', icon: techIcons.frontend, items: ['Figma'] },
    { category: 'Motion and Video', icon: techIcons.backend, items: ['After Effects'] },
    { category: 'File Handling', icon: techIcons.cloud, items: ['Print-Ready Formats', 'Asset Libraries'] }
  ],

  'ui-ux-designers.html': [
    { category: 'Design Tools', icon: techIcons.mobile, items: ['Figma', 'Sketch'] },
    { category: 'Prototyping', icon: techIcons.mobile, items: ['Adobe XD', 'Interactive Prototypes'] },
    { category: 'Design Systems', icon: techIcons.frontend, items: ['Component Libraries', 'Style Guides'] },
    { category: 'Research', icon: techIcons.backend, items: ['User Testing', 'Wireframing'] },
    { category: 'Handoff', icon: techIcons.cloud, items: ['Design Specs', 'Developer Handoff'] }
  ],

  'virtual-research-assistant.html': [
    { category: 'Languages', icon: techIcons.mobile, items: ['Python', 'TypeScript', 'Node.js'] },
    { category: 'LLM Providers', icon: techIcons.mobile, items: ['OpenAI', 'Anthropic Claude'] },
    { category: 'Retrieval and Data', icon: techIcons.frontend, items: ['Vector Databases', 'Embeddings'] },
    { category: 'Cloud and Infrastructure', icon: techIcons.backend, items: ['AWS', 'Azure'] },
    { category: 'Integration', icon: techIcons.cloud, items: ['REST APIs', 'Webhooks'] }
  ],

  'digital-marketers.html': [
    { category: 'Advertising', icon: techIcons.mobile, items: ['Google Ads', 'Meta Ads'] },
    { category: 'SEO', icon: techIcons.mobile, items: ['Semrush', 'Ahrefs'] },
    { category: 'Analytics', icon: techIcons.frontend, items: ['Google Search Console', 'Google Analytics'] },
    { category: 'Automation', icon: techIcons.backend, items: ['Email Marketing Platforms'] },
    { category: 'Reporting', icon: techIcons.cloud, items: ['Data Studio', 'Dashboards'] }
  ],

  'devops-developers.html': [
    { category: 'Container Orchestration', icon: techIcons.mobile, items: ['Docker', 'Kubernetes'] },
    { category: 'Infrastructure as Code', icon: techIcons.mobile, items: ['Terraform', 'Ansible'] },
    { category: 'CI/CD Platforms', icon: techIcons.frontend, items: ['GitHub Actions', 'GitLab CI', 'Jenkins'] },
    { category: 'Cloud Providers', icon: techIcons.backend, items: ['AWS', 'Google Cloud', 'Microsoft Azure'] },
    { category: 'Monitoring and Logging', icon: techIcons.cloud, items: ['Prometheus', 'ELK Stack', 'Datadog'] }
  ],

  'aws-developers.html': [
    { category: 'Compute Services', icon: techIcons.mobile, items: ['EC2', 'Lambda', 'ECS', 'EKS'] },
    { category: 'Database and Storage', icon: techIcons.mobile, items: ['RDS', 'DynamoDB', 'S3'] },
    { category: 'Networking and Security', icon: techIcons.frontend, items: ['VPC', 'CloudFront', 'IAM'] },
    { category: 'Infrastructure as Code', icon: techIcons.backend, items: ['CloudFormation', 'Terraform'] },
    { category: 'Monitoring and Logging', icon: techIcons.cloud, items: ['CloudWatch', 'X-Ray'] }
  ],

  'ai-developers.html': [
    { category: 'Large Language Models', icon: techIcons.mobile, items: ['OpenAI', 'Anthropic Claude', 'Google Gemini'] },
    { category: 'AI Frameworks', icon: techIcons.mobile, items: ['LangChain', 'LlamaIndex', 'Hugging Face'] },
    { category: 'Retrieval and Embeddings', icon: techIcons.frontend, items: ['Vector databases', 'RAG pipelines'] },
    { category: 'Computer Vision', icon: techIcons.backend, items: ['TensorFlow', 'PyTorch', 'OpenCV'] },
    { category: 'Deployment and Monitoring', icon: techIcons.cloud, items: ['FastAPI', 'Docker', 'MLflow'] }
  ],

  'ml-developers.html': [
    { category: 'Model Training', icon: techIcons.mobile, items: ['Python', 'scikit-learn', 'PyTorch', 'TensorFlow'] },
    { category: 'Data Processing', icon: techIcons.mobile, items: ['Pandas', 'NumPy', 'Spark'] },
    { category: 'Feature Engineering', icon: techIcons.frontend, items: ['Feature stores', 'SQL'] },
    { category: 'Model Deployment', icon: techIcons.backend, items: ['Flask', 'FastAPI', 'Docker'] },
    { category: 'Monitoring', icon: techIcons.cloud, items: ['MLflow', 'Prometheus', 'custom dashboards'] }
  ],

  'blockchain-developers.html': [
    { category: 'Blockchains', icon: techIcons.mobile, items: ['Ethereum', 'Solana', 'Polygon'] },
    { category: 'Smart Contract Languages', icon: techIcons.mobile, items: ['Solidity', 'Rust', 'Move'] },
    { category: 'Development Tools', icon: techIcons.frontend, items: ['Hardhat', 'Foundry', 'Anchor'] },
    { category: 'Security and Testing', icon: techIcons.backend, items: ['OpenZeppelin', 'static analysis tools'] },
    { category: 'Monitoring and Operations', icon: techIcons.cloud, items: ['Etherscan', 'block explorers', 'on-chain analytics'] }
  ],

  'ar-developers.html': [
    { category: 'AR Frameworks', icon: techIcons.mobile, items: ['ARKit', 'ARCore', 'Unity'] },
    { category: '3D Modeling and Assets', icon: techIcons.mobile, items: ['Blender', 'Maya', 'asset libraries'] },
    { category: 'Mobile Platforms', icon: techIcons.frontend, items: ['iOS', 'Android', 'cross-platform'] },
    { category: 'Graphics and Rendering', icon: techIcons.backend, items: ['Metal', 'OpenGL', 'shader programming'] },
    { category: 'Spatial Computing', icon: techIcons.cloud, items: ['LiDAR', 'spatial mapping', 'scene understanding'] }
  ],

  'vr-developers.html': [
    { category: 'Game Engines', icon: techIcons.mobile, items: ['Unity', 'Unreal Engine'] },
    { category: 'VR Platforms', icon: techIcons.mobile, items: ['Meta Quest', 'SteamVR', 'PlayStation VR'] },
    { category: '3D Modelling and Animation', icon: techIcons.frontend, items: ['Blender', 'Maya', 'character animation'] },
    { category: 'Spatial Interaction', icon: techIcons.backend, items: ['Hand tracking', 'motion controllers', 'physics'] },
    { category: 'Cross Platform Standards', icon: techIcons.cloud, items: ['OpenXR', 'WebXR'] }
  ],

  'data-analytics-experts.html': [
    { category: 'Query Languages', icon: techIcons.mobile, items: ['SQL', 'Python', 'R'] },
    { category: 'Data Warehouses', icon: techIcons.mobile, items: ['Snowflake', 'BigQuery', 'Databricks'] },
    { category: 'BI and Visualisation', icon: techIcons.frontend, items: ['Power BI', 'Tableau', 'Looker'] },
    { category: 'Data Processing', icon: techIcons.backend, items: ['Pandas', 'Spark', 'DBT'] },
    { category: 'Analytics Infrastructure', icon: techIcons.cloud, items: ['Data pipelines', 'ETL', 'automation'] }
  ],

  'full-stack-developers.html': [
    { category: 'Frontend Frameworks', icon: techIcons.mobile, items: ['React', 'Angular', 'Vue.js'] },
    { category: 'Backend Frameworks', icon: techIcons.mobile, items: ['Node.js', 'Express', 'Nest.js'] },
    { category: 'Database Systems', icon: techIcons.frontend, items: ['PostgreSQL', 'MongoDB', 'Redis'] },
    { category: 'Deployment and Infrastructure', icon: techIcons.backend, items: ['Docker', 'Kubernetes', 'AWS'] },
    { category: 'Development Tools', icon: techIcons.cloud, items: ['Git', 'CI/CD pipelines', 'testing frameworks'] }
  ],

  'retail-ecommerce.html': [
    { category: 'Storefront and Commerce Frameworks', icon: techIcons.mobile, items: ['Shopify', 'Magento', 'WooCommerce', 'BigCommerce', 'custom headless frameworks', 'PWA and mobile commerce'] },
    { category: 'Payment and Checkout', icon: techIcons.mobile, items: ['Payment gateways (Stripe, Adyen, Square)', 'SCA integration', 'multi-currency processing', 'fraud protection'] },
    { category: 'Product and Inventory Management', icon: techIcons.frontend, items: ['Product information management', 'inventory synchronization', 'real-time stock visibility', 'demand forecasting'] },
    { category: 'Customer Data and Personalization', icon: techIcons.backend, items: ['Customer data platforms', 'recommendation engines', 'AI personalization', 'dynamic pricing', 'customer analytics'] },
    { category: 'Integrations and Backend Systems', icon: techIcons.cloud, items: ['ERP integration (SAP, NetSuite)', 'CRM systems (Salesforce)', 'accounting and business intelligence tools'] }
  ],

  'finance-and-banking.html': [
    { category: 'APIs and Integration', icon: techIcons.mobile, items: ['REST and GraphQL APIs', 'banking network integrations (Open Banking / PSD2)', 'payment gateways (Stripe, Adyen, Currencycloud)'] },
    { category: 'Payment and Transaction Processing', icon: techIcons.mobile, items: ['Payment processing', 'transaction settlement', 'real-time gross settlement (RTGS)', 'SEPA instant payments'] },
    { category: 'Fraud Detection and Financial Crime', icon: techIcons.frontend, items: ['ML-driven transaction monitoring', 'behavior scoring', 'anomaly detection', 'sanctions screening'] },
    { category: 'Data and Reporting', icon: techIcons.backend, items: ['Data warehouses (Snowflake, BigQuery)', 'business intelligence tools (Tableau, Looker)', 'regulatory reporting automation'] },
    { category: 'Security and Compliance', icon: techIcons.cloud, items: ['Encryption (TLS, AES)', 'PCI-DSS compliance', 'audit logging', 'secure API design', 'identity and access management'] }
  ],

  'healthcare.html': [
    { category: 'Clinical Integration and Data Exchange', icon: techIcons.mobile, items: ['HL7/FHIR APIs', 'NHS Login', 'clinical system connectors', 'secure data exchange', 'electronic health record integration'] },
    { category: 'Patient Engagement and Telemedicine', icon: techIcons.mobile, items: ['Patient portals', 'video consultation platforms', 'appointment scheduling', 'wearable integration', 'remote monitoring systems'] },
    { category: 'Clinical Workflow and Decision Support', icon: techIcons.frontend, items: ['Workflow automation', 'clinical documentation assistance', 'decision support algorithms', 'care pathway management'] },
    { category: 'Data and Analytics', icon: techIcons.backend, items: ['Healthcare data warehouses', 'clinical analytics dashboards', 'outcome measurement', 'population health tools'] },
    { category: 'Security and Compliance', icon: techIcons.cloud, items: ['Encryption', 'GDPR compliance', 'access controls', 'audit logging', 'incident reporting', 'NHS data-security standards'] }
  ],

  'manufacturing.html': [
    { category: 'Machine and IoT Integration', icon: techIcons.mobile, items: ['MQTT and OPC UA protocols', 'edge computing', 'industrial gateways', 'secure machine connectivity', 'sensor data aggregation'] },
    { category: 'Manufacturing Execution Systems', icon: techIcons.mobile, items: ['Production scheduling', 'work-order management', 'real-time production tracking', 'quality management', 'batch traceability'] },
    { category: 'Predictive Analytics and AI', icon: techIcons.frontend, items: ['Machine-learning models for predictive maintenance', 'anomaly detection', 'quality prediction', 'and process optimization'] },
    { category: 'Data and Dashboards', icon: techIcons.backend, items: ['Time-series databases', 'real-time analytics', 'OEE dashboards', 'production visualization', 'business intelligence'] },
    { category: 'Integration and Business Systems', icon: techIcons.cloud, items: ['SAP integration', 'ERP connectors', 'EDI for supply chain', 'secure API design', 'data synchronization'] }
  ],

  'real-estate.html': [
    { category: 'Property and Lease Management', icon: techIcons.mobile, items: ['Property information systems', 'lease management', 'tenant databases', 'occupancy tracking', 'financial reconciliation'] },
    { category: 'Valuation and Investment Analytics', icon: techIcons.mobile, items: ['Automated valuation models', 'investment analysis tools', 'cash-flow modeling', 'portfolio analytics'] },
    { category: 'Tenant and Customer Experience', icon: techIcons.frontend, items: ['Tenant portals', 'maintenance request systems', 'payment processing', 'communication platforms'] },
    { category: 'ESG and Sustainability', icon: techIcons.backend, items: ['Energy monitoring', 'emissions tracking', 'sustainability reporting', 'environmental compliance'] },
    { category: 'Integrations and Data Systems', icon: techIcons.cloud, items: ['Accounting system integration (SAP, NetSuite)', 'market data feeds', 'transaction management'] }
  ],

  'logistics-transportation.html': [
    { category: 'Fleet and Vehicle Tracking', icon: techIcons.mobile, items: ['GPS tracking', 'telematics', 'driver monitoring', 'fuel management', 'vehicle maintenance'] },
    { category: 'Route Optimization and Planning', icon: techIcons.mobile, items: ['AI route planning', 'real-time rerouting', 'traffic integration', 'delivery-window management'] },
    { category: 'Warehouse and Inventory', icon: techIcons.frontend, items: ['Warehouse execution systems', 'inventory management', 'automated picking and packing', 'real-time stock tracking'] },
    { category: 'Supply Chain and Customs', icon: techIcons.backend, items: ['Shipment tracking', 'customs documentation', 'multi-modal visibility', 'exception management'] },
    { category: 'Integrations and Data Systems', icon: techIcons.cloud, items: ['ERP integration (SAP, NetSuite)', 'CRM connectors', 'customer notification', 'telematics data aggregation'] }
  ],

  'ai-agent-development.html': [
    { category: 'Languages', icon: techIcons.mobile, items: ['Python', 'TypeScript', 'Node.js'] },
    { category: 'LLM Providers', icon: techIcons.mobile, items: ['OpenAI', 'Anthropic Claude'] },
    { category: 'Orchestration', icon: techIcons.frontend, items: ['Agent Frameworks', 'Tool Calling'] },
    { category: 'Cloud and Infrastructure', icon: techIcons.backend, items: ['AWS', 'Azure'] },
    { category: 'Integration', icon: techIcons.cloud, items: ['REST APIs', 'Webhooks'] }
  ],
};

function getTechStackData() {
  let pageName = window.location.pathname.split('/').pop() || 'index.html';
  pageName = pageName.split('?')[0].split('#')[0];
  if (!pageName) pageName = 'index.html';

  if (techStackDataByPage[pageName]) return techStackDataByPage[pageName];
  if (!pageName.includes('.') && techStackDataByPage[pageName + '.html']) return techStackDataByPage[pageName + '.html'];
  const baseName = pageName.replace(/\.html$/, '');
  if (techStackDataByPage[baseName]) return techStackDataByPage[baseName];

  return techStackData;
}

const caseStudiesData = [
  {
    category: 'healthcare',
    tab: 'Healthcare',
    industry: 'Healthcare & MedTech',
    title: 'Healthcare Project: AI Document Processing System',
    description: 'Automated clinical document intake and decreased manual review time across high-volume workflows.',
    challenge: 'Processing thousands of documents per week consumed clinical staff time. Manual data entry introduced transcription errors and delays.',
    solution: 'Built a document classification and extraction pipeline using NLP. Integrated with the existing patient records system through secure APIs.',
    metrics: [
      { number: '90', suffix: '%', label: 'Review Time Drop' },
      { number: '10x', suffix: '', label: 'Intake Velocity' },
      { number: '99.8', suffix: '%', label: 'Accuracy' }
    ],
    tech: ['Python', 'NLP', 'FastAPI', 'AWS', 'PostgreSQL', 'Docker'],
    image: '/images/ai-document-processing-system.webp'
  },
  {
    category: 'fintech',
    tab: 'FinTech',
    industry: 'FinTech & Banking',
    title: 'Fintech Project: Real-Time Fraud Monitoring Platform',
    description: 'Deployed a transaction monitoring system that flags anomalies in real time and routes alerts to review teams.',
    challenge: 'Legacy rules engine missed complex fraud patterns. Alert volumes overwhelmed the compliance team with false positives.',
    solution: 'Designed and trained a custom ML model on historical transaction data. Built an alert dashboard with adjustable risk thresholds and case management.',
    metrics: [
      { number: '85', suffix: '%', label: 'False Positives Drop' },
      { number: '24ms', suffix: '', label: 'Latency' },
      { number: '£1.8M', suffix: '', label: 'Loss Averted' }
    ],
    tech: ['Python', 'TensorFlow', 'Kafka', 'PostgreSQL', 'React', 'AWS'],
    image: '/images/real-time-fraud-monitoring-platform.webp'
  },
  {
    category: 'logistics',
    tab: 'Logistics',
    industry: 'Logistics & Transportation',
    title: 'Logistics Project: Route Optimization and Dispatch System',
    description: 'Replaced manual dispatch with an automated routing system that reduced planning time and improved delivery accuracy.',
    challenge: 'Dispatchers planned routes manually each morning across hundreds of stops. Late deliveries and inefficient routes increased operational costs.',
    solution: 'Built a route optimization engine with real-time traffic integration. Connected the system to existing warehouse and driver mobile applications.',
    metrics: [
      { number: '35', suffix: '%', label: 'Fuel Savings' },
      { number: '99.5', suffix: '%', label: 'On-Time Delivery' },
      { number: '4x', suffix: '', label: 'Faster Planning' }
    ],
    tech: ['Python', 'React Native', 'Node.js', 'Google Maps API', 'PostgreSQL', 'AWS'],
    image: '/images/route-optimization-and-dispatch-system.webp'
  }
];

const testimonialsData = [
  {
    quote: "Hi, my name is Gabrielle, and I'd like to share my experience working with Cypherox Technologies on one of the mobile apps and websites I built with them. The team members at Cypherox Technologies were attentive, diligent, communicative and very, very bright. I had an amazing experience working with them and I highly recommend.",
    name: "Gabrielle",
    clientImg: "/images/gabrielle.png"
  },
  {
    quote: "I'm Britney and I'm the head of conversion optimization for Acadia, a digital marketing agency. I've had the pleasure of working with the Cypherox team for over two, going on three years now. They're fast, hardworking and really diligent developers. They're really reliable, skilled developers and have been a great partner and a pleasure to work with.",
    name: "Britney",
    clientImg: "/images/britney.png"
  },
  {
    quote: "Hey I'm Brian and I recently worked with Cypherox Technologies who developed an e-commerce platform. For me, working with Cypherox Technologies was truly an excellent experience. I recently collaborated with them to design and develop the custom e-commerce platform from the Groundhog and their expertise was evident from day one.",
    name: "Brian",
    clientImg: "/images/brian.png"
  },
  {
    quote: "Hi, I'm Becke. I've had the pleasure of working with Cypherox Technologies on a recent web development project. It was a custom, heavy CRM and the experience was seamless from start to finish. The product was delivered on time and he went the extra mile to ensure everything was done so that we understood the process. It was just, it was brilliant. It was really, really good service. So yeah, absolutely brilliant; I'd recommend it. Thank you so much. Thank you.",
    name: "Becke",
    clientImg: "/images/becke.png"
  },
  {
    quote: "I would highly recommend working with Cypherox Technologies if you need a custom CRM platform. They always exceed their clients' expectations at every stage of the project. Their team designs and builds fully customized ecommerce platforms from the ground up, approaching every project with remarkable skill and dedication.",
    name: "Lauren",
    clientImg: "/images/lauren.png"
  }
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
    { heading: 'Services', links: [{ label: 'AI Agent Development', href: '/ai-agent' }, { label: 'AI Chatbot Development', href: '/ai-chatbot-development' }, { label: 'AutoML Development', href: '/auto-ml-development' }, { label: 'Hire Dedicated Developers', href: '/hire-developers' }] },
    { heading: 'Industries', links: [{ label: 'Finance & Banking', href: '/finance-banking' }, { label: 'Healthcare', href: '/healthcare' }, { label: 'Retail & Ecommerce', href: '/retail-ecommerce' }, { label: 'Manufacturing', href: '/manufacturing' }, { label: 'Real Estate', href: '/real-estate' }] },
    { heading: 'Company', links: [{ label: 'About Us', href: '/about-us' }, { label: 'Contact Us', href: '/contact-us' }, { label: 'Case Studies', href: '/case-studies' }, { label: 'Blog', href: '/blogs' }] },
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

    if (item.type === 'dropdown' || item.type === 'mega') {
      const cols = (item.megaMenu && item.megaMenu.columns) ? item.megaMenu.columns : [];

      if (cols.length >= 2) {
        // Multi-category tabbed menu (Services, Hire Developers) - inner layout preserved as tabbed
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

        const graphicHtml = item.graphicImg ? `
          <div class="featured-dropdown__graphic">
            <img src="${item.graphicImg}" alt="${item.label}" class="featured-dropdown__graphic-img">
          </div>
        ` : '';

        panelHtml = `
          <div class="mega-menu featured-dropdown${item.graphicImg ? '' : ' featured-dropdown--no-image'}">
            <div class="featured-dropdown__inner container">
              <div class="featured-dropdown__top">
                <div class="featured-dropdown__content featured-dropdown__content--tabbed">
                  <div class="mega-tab">
                    <ul class="mega-tab__sidebar">${tabsHtml}</ul>
                    <div class="mega-tab__content">${panelsHtml}</div>
                  </div>
                </div>
                ${graphicHtml}
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
      } else {
        // Standard dropdown with grid (Automation, Technology, Industries, Company)
        let linksHtml = '';
        cols.forEach(col => {
          col.links.forEach(link => {
            linksHtml += `<a href="${link.href}" class="featured-dropdown__link">${link.label}</a>`;
          });
        });

        const graphicHtml = item.graphicImg ? `
          <div class="featured-dropdown__graphic">
            <img src="${item.graphicImg}" alt="${item.label}" class="featured-dropdown__graphic-img">
          </div>
        ` : '';

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
                ${graphicHtml}
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
      <a href="/index.html" class="header__logo">
        <img src="/images/cypherox-logo.png" alt="Cypherox Logo" style="height: 20px; width: auto;">
      </a>
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
          <div class="bellows-item__title-vertical">${disc.tabName}</div>
        </div>
        <div class="bellows-item__content">
          <div class="bellows-item__inner bellows-content-grid">
            <div class="bellows-col-left">
              <h3 class="discipline-panel__title">${disc.title}</h3>
              <p class="discipline-panel__desc">${disc.description}</p>
              
              <div class="discipline-panel__tech-section">
                <h4 class="discipline-panel__subtitle">Technology indicators:</h4>
                <div class="discipline-panel__tags">${tagsHtml}</div>
              </div>
              
              <div style="margin-top: 16px;">
                <a href="${disc.ctaLink}" class="btn btn--primary">${disc.ctaText}</a>
              </div>
            </div>
            
            <div class="bellows-col-right">
              <h4 class="discipline-panel__subtitle">Capabilities:</h4>
              <ul class="discipline-panel__features">${featuresHtml}</ul>
              
              <div class="discipline-panel__outcomes-section">
                
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
        <span class="eyebrow">Proven Delivery</span>
        <h2 class="section-title fade-up">Real Results<br>Across Industries.</h2>
        <p class="section-subtitle fade-up" style="margin-top: 16px;">These are production systems, not demos. Each project went from requirements through architecture, development, testing and deployment into an environment where real users and real data depend on it daily.</p>
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
         ${t.name}
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
            <p>${ind.subTitleText}</p>
          </div>
          <div class="industry-panel__grid">
            <div class="industry-panel__col">
              <h4 class="industry-panel__subtitle">Challenge</h4>
              <ul class="industry-panel__list">${challengesHtml}</ul>
            </div>
            <div class="industry-panel__col">
              <h4 class="industry-panel__subtitle">Solution</h4>
              <ul class="industry-panel__list">${outcomesHtml}</ul>
            </div>
          </div>
          <div class="industry-panel__tech-section">
            <h4 class="industry-panel__subtitle">Technology</h4>
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
  getWhyChooseData().forEach((item, index) => {
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

function getCategoryIcon(tech, index, usedIcons = new Set()) {
  const name = ((tech && tech.category) || '').toLowerCase();
  let candidate = null;

  // Specific content-based mapping
  if (name.includes('data and ai') || (name.includes('data') && name.includes('ai'))) candidate = techIcons.dataAi;
  else if (name.includes('valuation') || name.includes('investment') || name.includes('financial reconciliation')) candidate = techIcons.valuation;
  else if (name.includes('property') || name.includes('lease') || (name.includes('real estate') && !name.includes('tenant'))) candidate = techIcons.property;
  else if (name.includes('tenant') || name.includes('customer') || name.includes('crm') || name.includes('client')) candidate = techIcons.crm;
  else if (name.includes('fraud') || name.includes('crime')) candidate = techIcons.fraud;
  else if (name.includes('compliance') || name.includes('governance')) candidate = techIcons.lock;
  else if (name.includes('speech') || name.includes('voice')) candidate = techIcons.speech;
  else if (name.includes('esg') || name.includes('sustainab') || name.includes('energy')) candidate = techIcons.sustainability;
  else if (name.includes('telemedicine') || name.includes('patient')) candidate = techIcons.telemedicine;
  else if (name.includes('workflow') && (name.includes('clinic') || name.includes('care') || name.includes('decision'))) candidate = techIcons.clinicalWorkflow;
  else if (name.includes('health') || name.includes('clinic')) candidate = techIcons.healthcare;
  else if (name.includes('route') || name.includes('dispatch') || name.includes('rerouting')) candidate = techIcons.route;
  else if (name.includes('fleet') || name.includes('vehicle') || name.includes('telematics')) candidate = techIcons.fleet;
  else if (name.includes('customs') || name.includes('supply chain') || name.includes('multi-modal')) candidate = techIcons.globe;
  else if (name.includes('warehouse') || name.includes('inventory') || name.includes('stock')) candidate = techIcons.warehouse;
  else if (name.includes('machine and iot') || name.includes('iot') || name.includes('sensor')) candidate = techIcons.chip;
  else if (name.includes('mes') || name.includes('manufacturing')) candidate = techIcons.manufacturing;
  else if (name.includes('blockchain') || name.includes('smart contract') || name.includes('solidity')) candidate = techIcons.blockchain;
  else if (name.includes('game engine')) candidate = techIcons.gamepad;
  else if (name.includes('ar framework') || name.includes('arkit') || name.includes('arcore')) candidate = techIcons.arTarget;
  else if (name.includes('3d model') || name.includes('3d asset') || name.includes('animation') || name.includes('blender')) candidate = techIcons.cube3d;
  else if (name.includes('spatial interaction') || name.includes('hand track')) candidate = techIcons.hand;
  else if (name.includes('cross platform standard') || name.includes('standards')) candidate = techIcons.globe;
  else if (name.includes('vr') || name.includes('spatial')) candidate = techIcons.spatial;
  else if (name.includes('vision') || name.includes('opencv')) candidate = techIcons.vision;
  else if (name.includes('research') || name.includes('user testing')) candidate = techIcons.search;
  else if (name.includes('motion') || name.includes('video') || name.includes('effects')) candidate = techIcons.video;
  else if (name.includes('file') || name.includes('format') || name.includes('asset librar')) candidate = techIcons.folder;
  else if (name.includes('design system') || name.includes('component')) candidate = techIcons.components;
  else if (name.includes('prototyp') || name.includes('wireframe') || name.includes('layout')) candidate = techIcons.wireframe;
  else if (name.includes('design tool') || name.includes('design spec')) candidate = techIcons.design;
  else if (name.includes('styling') || name.includes('css')) candidate = techIcons.styling;
  else if (name.includes('performance') || name.includes('optimization') || name.includes('speed')) candidate = techIcons.speed;
  else if (name.includes('container') || name.includes('docker') || name.includes('kubernetes')) candidate = techIcons.containers;
  else if (name.includes('infrastructure as code') || name.includes('terminal')) candidate = techIcons.terminal;
  else if (name.includes('monitoring') || name.includes('logging') || name.includes('telemetry')) candidate = techIcons.monitoring;
  else if (name.includes('ci/cd') || name.includes('ci / cd') || name.includes('delivery') || name.includes('deployment')) candidate = techIcons.delivery;
  else if (name.includes('payment') || name.includes('checkout') || name.includes('transaction')) candidate = techIcons.payments;
  else if (name.includes('storefront') || name.includes('commerce') || name.includes('ecommerce') || name.includes('shopify') || name.includes('magento') || name.includes('woocommerce') || name.includes('bigcommerce')) candidate = techIcons.ecommerce;
  else if (name.includes('cms')) candidate = techIcons.cms;
  else if (name.includes('document')) candidate = techIcons.document;
  else if (name.includes('test') || name.includes('qa')) candidate = techIcons.testing;
  else if (name.includes('rpa') || name.includes('automat')) candidate = techIcons.automation;
  else if (name.includes('secur')) candidate = techIcons.security;
  else if (name.includes('arch') || name.includes('pattern') || name.includes('orchestrat')) candidate = techIcons.architecture;
  else if (name.includes('api') || name.includes('integrat') || name.includes('network') || name.includes('webhook')) candidate = techIcons.api;
  else if (name.includes('analytic') || name.includes('report') || name.includes('bi') || name.includes('dashboard')) candidate = techIcons.analytics;
  else if (name.includes('cloud') || name.includes('infra') || name.includes('host') || name.includes('compute')) candidate = techIcons.cloud;
  else if (name.includes('llm') || name.includes('ai') || name.includes('ml') || name.includes('model') || name.includes('nlp')) candidate = techIcons.ai;
  else if (name.includes('data') || name.includes('datab') || name.includes('storage') || name.includes('retriev') || name.includes('sql')) candidate = techIcons.data;
  else if (name.includes('android')) candidate = techIcons.android;
  else if (name.includes('mobile') || name.includes('ios') || name.includes('swift') || name.includes('kotlin') || name.includes('flutter')) candidate = techIcons.mobile;
  else if (name.includes('front') || name.includes('ui') || name.includes('web') || name.includes('cross') || name.includes('templating')) candidate = techIcons.frontend;
  else if (name.includes('back') || name.includes('server')) candidate = techIcons.backend;
  else if (name.includes('language')) candidate = techIcons.languages;

  if (!candidate) {
    if (tech && tech.icon) candidate = tech.icon;
    else if (techStackData[index] && techStackData[index].icon) candidate = techStackData[index].icon;
    else candidate = techIcons.default;
  }

  // De-duplication safeguard: ensure every column in a single section gets a unique icon
  if (usedIcons && usedIcons.has(candidate)) {
    const alternates = [
      techIcons.architecture,
      techIcons.terminal,
      techIcons.speed,
      techIcons.wireframe,
      techIcons.components,
      techIcons.globe,
      techIcons.monitoring,
      techIcons.lock
    ];
    for (const alt of alternates) {
      if (!usedIcons.has(alt)) {
        candidate = alt;
        break;
      }
    }
  }

  return candidate;
}

function renderTechStack() {
  const container = document.getElementById('tech-stack-container');
  if (!container) return;

  const techList = getTechStackData();
  const usedIcons = new Set();

  let html = '<div class="tech-categories">';
  techList.forEach((tech, index) => {
    let badgesHtml = tech.items.map(item => `<div class="tech-badge">${item}</div>`).join('');
    const icon = getCategoryIcon(tech, index, usedIcons);
    usedIcons.add(icon);
    html += `
      <div class="tech-category fade-up">
        <h3 class="tech-category__title"><span>${icon}</span> ${tech.category}</h3>
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
        <div class="case-card__visual">
          <img src="${f.image || '/images/ai-document-processing-system.webp'}" alt="${f.title}" class="case-card__img">
        </div>
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
          <div class="testimonial-card__avatar">
            <img src="${t.clientImg}" alt="${t.name}" style="display: ${t.clientImg ? 'block' : 'none'};">
          </div>
          <div>
            <div class="testimonial-card__name">${t.name}</div>
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

  const pageName = window.location.pathname.split('/').pop() || 'index.html';
  const footerBrandDescriptions = {
    'predictive-maintenance-services.html': 'Cypherox is a production AI engineering firm that designs, builds and maintains AI systems, applications and integrations for businesses moving from pilots to dependable, working software.',
    'fraud-detection-services.html': 'Cypherox is a production AI engineering firm that designs, builds and maintains AI systems, applications and integrations for businesses moving from pilots to dependable, working software.',
    'automl-development-services.html': 'Cypherox is a production AI engineering firm that designs, builds and maintains AI systems, applications and integrations for businesses moving from pilots to dependable, working software.',
    'it-consulting-services.html': 'Cypherox is a production AI engineering firm that designs, builds and maintains AI systems, applications and integrations for businesses moving from pilots to dependable, working software.',
    'startup-it-consulting-services.html': 'Cypherox is a production AI engineering firm that designs, builds and maintains AI systems, applications and integrations for businesses moving from pilots to dependable, working software.',
    'ai-strategy-consulting-services.html': 'Cypherox is a production AI engineering firm that designs, builds and maintains AI systems, applications and integrations for businesses moving from pilots to dependable, working software.',
    'responsive-web-design-services.html': 'Cypherox is a production AI engineering firm that designs, builds and maintains AI systems, applications and integrations for businesses moving from pilots to dependable, working software.',
    'mobile-app-design-services.html': 'Cypherox is a production AI engineering firm that designs, builds and maintains AI systems, applications and integrations for businesses moving from pilots to dependable, working software.',
    'business-process-automation-services.html': 'Cypherox is a production AI engineering firm that designs, builds and maintains AI systems, applications and integrations for businesses moving from pilots to dependable, working software.',
    'workflow-automation-services.html': 'Cypherox is a production AI engineering firm that designs, builds and maintains AI systems, applications and integrations for businesses moving from pilots to dependable, working software.',
    'marketing-and-crm-automation-services.html': 'Cypherox is a production AI engineering firm that designs, builds and maintains AI systems, applications and integrations for businesses moving from pilots to dependable, working software.',
    'web-development-company-services.html': 'Cypherox is a production AI engineering firm that designs, builds and maintains AI systems, applications and integrations for businesses moving from pilots to dependable, working software.',
    'app-development-company-services.html': 'Cypherox is a production AI engineering firm that designs, builds and maintains AI systems, applications and integrations for businesses moving from pilots to dependable, working software.',
    'ecommerce-website-development-services.html': 'Cypherox is a production AI engineering firm that designs, builds and maintains AI systems, applications and integrations for businesses moving from pilots to dependable, working software.',
    'cms-development-services.html': 'Cypherox is a production AI engineering firm that designs, builds and maintains AI systems, applications and integrations for businesses moving from pilots to dependable, working software.',
  };
  const brandDescription = footerBrandDescriptions[pageName] || 'Cypherox Technologies builds and operates AI and software systems for businesses across the US, UK and Europe. Established in 2015.';

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
          <img src="/images/cypherox-logo.png" alt="Cypherox Logo" style="height: 20px; width: auto; filter: invert(1) brightness(2);">
        </div>
        <p class="footer__brand-desc">${brandDescription}</p>
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
        <a href="/privacy-policy" class="footer__legal-link">Privacy Policy</a>
        <a href="/terms-and-conditions" class="footer__legal-link">Terms &amp; Conditions</a>
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
  if (form.dataset.formInit === 'true') return;
  form.dataset.formInit = 'true';

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

  // Reset handler if present
  const resetBtn = document.getElementById('btn-submit-another');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      form.reset();
      form.style.display = 'block';
      const successMsg = document.getElementById('form-success');
      if (successMsg) successMsg.classList.remove('visible');
    });
  }
}

function initSmoothScroll() {
  document.addEventListener('click', function (e) {
    const devBtn = e.target.closest('.dev-card__btn');
    if (devBtn) {
      const target = document.querySelector('#consultation') || document.querySelector('#form');
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        const firstInput = target.querySelector('input:not([type="hidden"]), select, textarea');
        if (firstInput) {
          setTimeout(() => firstInput.focus({ preventScroll: true }), 650);
        }
        return;
      }
    }

    const anchor = e.target.closest('a[href^="#"]');
    if (anchor) {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;

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
    }
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


// FAQ Accordion Logic
document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all FAQs
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        otherItem.querySelector('.faq-answer').style.maxHeight = null;
      });

      // Toggle current FAQ
      if (!isActive) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
});


// Vertical Tabs Logic
document.addEventListener('DOMContentLoaded', () => {
  const tabBtns = document.querySelectorAll('.vertical-tab-btn');
  const tabPanes = document.querySelectorAll('.vertical-tab-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active from all
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      // Add active to clicked
      btn.classList.add('active');
      const targetId = btn.getAttribute('data-tab');
      document.getElementById(targetId).classList.add('active');
    });
  });
});

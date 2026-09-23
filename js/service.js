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
            { label: 'About Us', href: '/about-us.html' },
            { label: 'Contact Us', href: '/contact-us.html' },
            { label: 'Case Studies', href: '/case-studies/index.html' },
            { label: 'Blog', href: '/blogs/index.html' }
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
    description: 'We build AI systems around your data, workflows, and business rules, with the evaluation, integration, and controls needed for reliable production use.',
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
    description: 'Web, mobile, APIs, and backend systems built for scale, maintained for the long term, and designed to fit the platform you already run.',
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
    description: 'Infrastructure, pipelines, and governance underneath your applications. Reliable data. Secure, observable, and cost-controlled cloud.',
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
    description: 'The architecture, scope, and approach decisions made before a line of code is written often determine whether a project delivers or stalls.',
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
    title: 'Discovery and Scoping',
    description: 'We review your data sources, existing systems and the questions the chatbot needs to answer before any design work begins.'
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    title: 'Design and Architecture',
    description: 'We define the conversation flow, data retrieval approach, escalation logic and access controls the chatbot will operate within.'
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
    title: 'Development and Testing',
    description: 'The chatbot is built, connected to required systems and tested against real conversation scenarios before release.'
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3z"/><path d="3 4h8S3 4 3 4z"/></svg>`,
    title: 'Deployment and Monitoring',
    description: 'Once live, we track conversation quality, escalation rates and failure patterns to guide ongoing adjustments.'
  }
];

const whyChooseDataByPage = {
  'ai-chatbot-development.html': whyChooseData,
  'ai-content-generator.html': [
    {
      icon: whyChooseData[0].icon,
      title: 'Discovery and Scoping',
      description: 'We review your content types, brand guidelines and existing source material before any design work begins.'
    },
    {
      icon: whyChooseData[1].icon,
      title: 'Design and Architecture',
      description: 'We define the generation approach, review workflow and integration points the system will operate within.'
    },
    {
      icon: whyChooseData[2].icon,
      title: 'Development and Testing',
      description: 'The system is built, connected to required content sources and tested against real content requests before release.'
    },
    {
      icon: whyChooseData[3].icon,
      title: 'Deployment and Monitoring',
      description: 'Once live, we track output quality and review outcomes to guide ongoing adjustments.'
    }
  ],
  'ai-language-translator.html': [
    {
      icon: whyChooseData[0].icon,
      title: 'Discovery and Scoping',
      description: 'We review your content types, target languages and accuracy requirements before any design work begins.'
    },
    {
      icon: whyChooseData[1].icon,
      title: 'Design and Architecture',
      description: 'We define the translation approach, terminology handling and integration points the system will operate within.'
    },
    {
      icon: whyChooseData[2].icon,
      title: 'Development and Testing',
      description: 'The system is built, connected to required content sources and tested against real documents and language pairs.'
    },
    {
      icon: whyChooseData[3].icon,
      title: 'Deployment and Monitoring',
      description: 'Once live, we track translation accuracy and review flagged content to guide ongoing adjustments.'
    }
  ],
  'ai-virtual-assistant.html': [
    {
      icon: whyChooseData[0].icon,
      title: 'Discovery and Scoping',
      description: 'We review the tasks the assistant needs to handle, the systems it must connect to and where human oversight is required.'
    },
    {
      icon: whyChooseData[1].icon,
      title: 'Design and Architecture',
      description: 'We define the conversation flow, task logic, permission boundaries and escalation rules the assistant will operate within.'
    },
    {
      icon: whyChooseData[2].icon,
      title: 'Development and Testing',
      description: 'The assistant is built, connected to required systems and tested against realistic task scenarios before release.'
    },
    {
      icon: whyChooseData[3].icon,
      title: 'Deployment and Monitoring',
      description: 'Once live, we track task completion, escalation rates and failure patterns to guide ongoing adjustments.'
    }
  ],

  'predictive-maintenance-services.html': [
    {
      icon: whyChooseData[0].icon,
      title: 'Discovery and Scoping',
      description: 'We review your equipment, existing sensor data and current maintenance process before any design work begins.'
    },
    {
      icon: whyChooseData[1].icon,
      title: 'Design and Architecture',
      description: 'We define the data pipeline, prediction models and alerting logic the solution will operate within.'
    },
    {
      icon: whyChooseData[2].icon,
      title: 'Development and Testing',
      description: 'The solution is built, connected to sensor and historical data, and validated against real failure patterns.'
    },
    {
      icon: whyChooseData[3].icon,
      title: 'Deployment and Monitoring',
      description: 'Once live, we track prediction accuracy and alert quality to guide ongoing model adjustments.'
    }
  ],

  'fraud-detection-services.html': [
    {
      icon: whyChooseData[0].icon,
      title: 'Discovery and Scoping',
      description: 'We review your transaction data, current fraud losses, and existing detection approach before starting any design work.'
    },
    {
      icon: whyChooseData[1].icon,
      title: 'Design and Architecture',
      description: 'We define the scoring models, data pipeline, and review workflow the system will operate within.'
    },
    {
      icon: whyChooseData[2].icon,
      title: 'Development and Testing',
      description: 'We build the system, connect it to transaction and identity data, and validate it against known fraud cases.'
    },
    {
      icon: whyChooseData[3].icon,
      title: 'Deployment and Monitoring',
      description: 'Once live, we track detection accuracy and false positive rates to guide ongoing model adjustments.'
    }
  ],

  'automl-development-services.html': [
    {
      icon: whyChooseData[0].icon,
      title: 'Discovery and Scoping',
      description: 'We review your data, current model development process, and the use cases you need supported.'
    },
    {
      icon: whyChooseData[1].icon,
      title: 'Pipeline Design',
      description: 'We define the preprocessing, algorithm selection, and tuning approach the AutoML pipeline will use.'
    },
    {
      icon: whyChooseData[2].icon,
      title: 'Development and Validation',
      description: 'We build and test the pipeline, validating models against held-out data before release.'
    },
    {
      icon: whyChooseData[3].icon,
      title: 'Deployment and Monitoring',
      description: 'Once live, we track model performance and retraining needs to guide ongoing adjustments.'
    }
  ],

  'it-consulting-services.html': [
    {
      icon: whyChooseData[0].icon,
      title: 'Discovery and Assessment',
      description: 'We review your current systems, infrastructure, and pain points in detail before forming any recommendation.'
    },
    {
      icon: whyChooseData[1].icon,
      title: 'Analysis and Strategy',
      description: 'We identify gaps, risks and opportunities, then define a sequenced roadmap based on impact and feasibility.'
    },
    {
      icon: whyChooseData[2].icon,
      title: 'Recommendation and Planning',
      description: 'We present findings and a practical plan, with priorities agreed directly with your team.'
    },
    {
      icon: whyChooseData[3].icon,
      title: 'Implementation Support',
      description: 'Where needed, we support execution of the roadmap alongside your internal team or through dedicated delivery.'
    }
  ],

  'startup-it-consulting-services.html': [
    {
      icon: whyChooseData[0].icon,
      title: 'Discovery and Context',
      description: 'We review your product, current systems, and stage-specific priorities before forming any recommendation.'
    },
    {
      icon: whyChooseData[1].icon,
      title: 'Assessment and Options',
      description: 'We identify the decisions that matter most now and present practical, stage-appropriate options.'
    },
    {
      icon: whyChooseData[2].icon,
      title: 'Recommendation and Roadmap',
      description: 'We agree on a prioritized plan that fits your budget, team size, and growth timeline.'
    },
    {
      icon: whyChooseData[3].icon,
      title: 'Ongoing or Implementation Support',
      description: 'Where needed, we support execution directly or provide continued advisory as the business grows.'
    }
  ],

  'ai-strategy-consulting-services.html': [
    {
      icon: whyChooseData[0].icon,
      title: 'Discovery and Assessment',
      description: 'We review your business priorities, current data and systems before identifying potential AI use cases.'
    },
    {
      icon: whyChooseData[1].icon,
      title: 'Opportunity Analysis',
      description: 'We assess feasibility, value, and readiness for each identified use case.'
    },
    {
      icon: whyChooseData[2].icon,
      title: 'Strategy and Roadmapping',
      description: 'We define a sequenced roadmap prioritized by impact and feasibility.'
    },
    {
      icon: whyChooseData[3].icon,
      title: 'Implementation Support',
      description: 'Where needed, we support execution of the roadmap alongside your internal team or through dedicated delivery.'
    }
  ],

  'responsive-web-design-services.html': [
    {
      icon: whyChooseData[0].icon,
      title: 'Discovery and Content Review',
      description: 'We review your current site, content structure, and the devices your visitors actually use.'
    },
    {
      icon: whyChooseData[1].icon,
      title: 'Responsive Design',
      description: 'We design layouts that adapt cleanly across mobile, tablet, and desktop.'
    },
    {
      icon: whyChooseData[2].icon,
      title: 'Development and Testing',
      description: 'The site is built and tested across real devices and browsers before launch.'
    },
    {
      icon: whyChooseData[3].icon,
      title: 'Launch and Support',
      description: 'Once live, we monitor performance and usability and adjust layouts as needed.'
    }
  ],

  'mobile-app-design-services.html': [
    {
      icon: whyChooseData[0].icon,
      title: 'Discovery and Research',
      description: 'We review your users, goals, and any existing usability issues before design work begins.'
    },
    {
      icon: whyChooseData[1].icon,
      title: 'Wireframing and Flow Design',
      description: 'We map user flows and screen structure to establish how the app should work.'
    },
    {
      icon: whyChooseData[2].icon,
      title: 'Visual Design and Prototyping',
      description: 'We design the visual interface and build interactive prototypes for testing.'
    },
    {
      icon: whyChooseData[3].icon,
      title: 'Handoff and Development Support',
      description: 'We prepare design files and support development to keep the built app aligned with the design.'
    }
  ],

  'business-process-automation-services.html': [
    {
      icon: whyChooseData[0].icon,
      title: 'Process Discovery and Mapping',
      description: 'We review the current process, systems involved, and where manual effort is concentrated.'
    },
    {
      icon: whyChooseData[1].icon,
      title: 'Automation Design',
      description: 'We define the automation logic, exception handling, and required system connections.'
    },
    {
      icon: whyChooseData[2].icon,
      title: 'Development and Testing',
      description: 'We build and test the automation against real process scenarios before release.'
    },
    {
      icon: whyChooseData[3].icon,
      title: 'Deployment and Monitoring',
      description: 'Once live, we track automation performance and exception rates to guide adjustments.'
    }
  ],

  'workflow-automation-services.html': [
    {
      icon: whyChooseData[0].icon,
      title: 'Workflow Discovery and Mapping',
      description: 'We review the current workflow, tools involved, and where manual coordination is concentrated.'
    },
    {
      icon: whyChooseData[1].icon,
      title: 'Automation Design',
      description: 'We define the triggers, routing logic, and exception handling the workflow will use.'
    },
    {
      icon: whyChooseData[2].icon,
      title: 'Development and Testing',
      description: 'The automation is built and tested against real workflow scenarios before release.'
    },
    {
      icon: whyChooseData[3].icon,
      title: 'Deployment and Monitoring',
      description: 'Once live, we track workflow performance and exception rates to guide adjustments.'
    }
  ],
  'marketing-and-crm-automation-services.html': [
    {
      icon: whyChooseData[0].icon,
      title: 'Discovery and Mapping',
      description: 'We review your current CRM, marketing tools and where manual coordination is concentrated.'
    },
    {
      icon: whyChooseData[1].icon,
      title: 'Automation Design',
      description: 'We define the triggers, routing logic and data sync requirements the system will use.'
    },
    {
      icon: whyChooseData[2].icon,
      title: 'Development and Testing',
      description: 'The automation is built and tested against real lead and campaign scenarios before release.'
    },
    {
      icon: whyChooseData[3].icon,
      title: 'Deployment and Monitoring',
      description: 'Once live, we track automation performance and data accuracy to guide adjustments.'
    }
  ],
  'web-development-company-services.html': [
    {
      icon: whyChooseData[0].icon,
      title: 'Discovery and Requirements',
      description: 'We review your current site, required functionality, and the systems it needs to connect to.'
    },
    {
      icon: whyChooseData[1].icon,
      title: 'Design and Architecture',
      description: 'We define the technical architecture, integrations, and build structure.'
    },
    {
      icon: whyChooseData[2].icon,
      title: 'Development and Testing',
      description: 'The site or application is built and tested against real usage scenarios before launch.'
    },
    {
      icon: whyChooseData[3].icon,
      title: 'Launch and Ongoing Support',
      description: 'Once live, we monitor performance and provide ongoing development support as needs evolve.'
    }
  ],
  'app-development-company-services.html': [
    {
      icon: whyChooseData[0].icon,
      title: 'Discovery and Requirements',
      description: 'We review your app idea, required platforms, and the systems it needs to connect to.'
    },
    {
      icon: whyChooseData[1].icon,
      title: 'Design and Architecture',
      description: 'We define the technical architecture, integrations, and structure the build will follow.'
    },
    {
      icon: whyChooseData[2].icon,
      title: 'Development and Testing',
      description: 'We build and test the app across devices and real usage scenarios before launch.'
    },
    {
      icon: whyChooseData[3].icon,
      title: 'Launch and Ongoing Support',
      description: 'Once live, we monitor performance and provide ongoing development support as requirements evolve.'
    }
  ],
  'ecommerce-website-development-services.html': [
    {
      icon: whyChooseData[0].icon,
      title: 'Discovery and Requirements',
      description: 'We review your current store, catalog structure, and required integrations before design begins.'
    },
    {
      icon: whyChooseData[1].icon,
      title: 'Design and Architecture',
      description: 'We define the platform approach, integrations, and checkout logic the build will follow.'
    },
    {
      icon: whyChooseData[2].icon,
      title: 'Development and Testing',
      description: 'The store is built and tested against real order and traffic scenarios before launch.'
    },
    {
      icon: whyChooseData[3].icon,
      title: 'Launch and Ongoing Support',
      description: 'Once live, we monitor performance and provide ongoing development support as the catalog grows.'
    }
  ],
  'cms-development-services.html': [
    {
      icon: whyChooseData[0].icon,
      title: 'Discovery and Platform Assessment',
      description: 'We review your current CMS, content structure, and editorial workflow before recommending an approach.'
    },
    {
      icon: whyChooseData[1].icon,
      title: 'Design and Theme Development',
      description: 'We build custom themes and structure suited to your content and design requirements.'
    },
    {
      icon: whyChooseData[2].icon,
      title: 'Development and Testing',
      description: 'We configure, customize, and test the CMS against real content and editing workflows before launch.'
    },
    {
      icon: whyChooseData[3].icon,
      title: 'Launch and Ongoing Maintenance',
      description: 'Once live, we maintain core, plugin, and security updates on an ongoing basis.'
    }
  ],

  'virtual-research-assistant.html': [
    {
      icon: whyChooseData[0].icon,
      title: 'Discovery and Scoping',
      description: 'We review your sources, research workflow and the output format your team currently relies on.'
    },
    {
      icon: whyChooseData[1].icon,
      title: 'Design and Architecture',
      description: 'We define the retrieval approach, synthesis logic and access boundaries the assistant will operate within.'
    },
    {
      icon: whyChooseData[2].icon,
      title: 'Development and Testing',
      description: 'The assistant is built, connected to required sources and tested against real research requests before release.'
    },
    {
      icon: whyChooseData[3].icon,
      title: 'Deployment and Monitoring',
      description: 'Once live, we track output accuracy and usage patterns to guide ongoing adjustments.'
    }
  ],


  'hire-ios-developers.html': [
    {
      icon: whyChooseData[0].icon,
      title: 'Discovery & Requirement Analysis',
      description: 'We analyze your app vision, target audience, technical architecture, and skill requirements to select the best developers.'
    },
    {
      icon: whyChooseData[1].icon,
      title: 'Profile Selection & Fast Interview',
      description: 'Review pre-vetted senior iOS engineer profiles within 24 hours, conduct 1-on-1 technical interviews, and choose your developer.'
    },
    {
      icon: whyChooseData[2].icon,
      title: 'Seamless 48-Hour Onboarding',
      description: 'Your chosen developer integrates directly into your Slack, Jira, GitHub, and CI/CD pipelines under your management.'
    },
    {
      icon: whyChooseData[3].icon,
      title: '15-Day Risk-Free Trial & Delivery',
      description: 'Start with a 15-day risk-free trial. If not completely satisfied, pay nothing or switch developers with zero hassle.'
    }
  ],
};

function getWhyChooseData() {
  const pageName = window.location.pathname.split('/').pop() || 'index.html';
  return whyChooseDataByPage[pageName] || whyChooseData;
}

const techStackData = [
  { category: 'Frontend', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>', items: ['React', 'Angular', 'Vue.js', 'TypeScript'] },

  { category: 'Backend', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>', items: ['Node.js', 'Python', 'PHP', 'Laravel', 'Java'] },

  { category: 'Mobile', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>', items: ['Swift', 'Kotlin', 'Flutter', 'React Native'] },

  { category: 'Cloud and DevOps', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>', items: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD'] },

  { category: 'Data and AI', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>', items: ['Machine Learning', 'NLP', 'SQL', 'Data Pipelines'] }
];

const techIcons = {
  frontend: techStackData[0].icon,
  backend: techStackData[1].icon,
  mobile: techStackData[2].icon,
  cloud: techStackData[3].icon,
  data: techStackData[4].icon,
  architecture: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>',
  api: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z"></path></svg>',
  default: techStackData[0].icon
};

const techStackDataByPage = {
  'ai-chatbot-development.html': techStackData,
  'ai-content-generator.html': [
    { ...techStackData[0], category: 'Languages', items: ['Python', 'TypeScript', 'Node.js'] },
    { ...techStackData[1], category: 'LLM Providers', items: ['OpenAI', 'Anthropic Claude'] },
    { ...techStackData[2], category: 'Data and Retrieval', items: ['Vector Databases', 'Embeddings'] },
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
  'ai-virtual-assistant.html': [
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
    { category: 'Frameworks', icon: techIcons.mobile, items: ['React', 'Angular','Vue.js'] },
    { category: 'Styling', icon: techIcons.frontend, items: ['CSS3', 'Tailwind CSS'] },
    { category: 'Performance', icon: techIcons.backend, items: ['Lazy Loading', 'Code Splitting'] },
    { category: 'Testing', icon: techIcons.cloud, items: ['Jest', 'Cypress'] }
  ],

  'angularjs-developers.html': [
    { category: 'Languages', icon: techIcons.mobile, items: ['JavaScript', 'TypeScript'] },
    { category: 'Frameworks', icon: techIcons.mobile, items: ['Angular','AngularJS'] },
    { category: 'Reactive Programming', icon: techIcons.frontend, items: ['RxJS', 'NgRx'] },
    { category: 'Backend and APIs', icon: techIcons.backend, items: ['REST APIs', 'GraphQL'] },
    { category: 'Cloud and Infrastructure', icon: techIcons.cloud, items: ['AWS', 'CI/CD'] }
  ],

  'reactjs-developers.html': [
    { category: 'Languages', icon: techIcons.mobile, items: ['JavaScript', 'TypeScript'] },
    { category: 'Frameworks', icon: techIcons.mobile, items: ['React','Next.js'] },
    { category: 'State Management', icon: techIcons.frontend, items: ['Redux', 'React Query'] },
    { category: 'Backend and APIs', icon: techIcons.backend, items: ['REST APIs', 'GraphQL'] },
    { category: 'Cloud and Infrastructure', icon: techIcons.cloud, items: ['AWS', 'CI/CD'] }
  ],

  'vuejs-developers.html': [
    { category: 'Languages', icon: techIcons.mobile, items: ['JavaScript', 'TypeScript'] },
    { category: 'Frameworks', icon: techIcons.mobile, items: ['Vue 3','Nuxt.js'] },
    { category: 'State Management', icon: techIcons.frontend, items: ['Pinia', 'Vue Router'] },
    { category: 'Backend and APIs', icon: techIcons.backend, items: ['REST APIs', 'GraphQL'] },
    { category: 'Cloud and Infrastructure', icon: techIcons.cloud, items: ['AWS', 'CI/CD'] }
  ],

  'back-end-web-developers.html': [
    { category: 'Languages', icon: techIcons.mobile, items: ['Node.js', 'Python', 'PHP'] },
    { category: 'Frameworks', icon: techIcons.mobile, items: ['Express','Django', 'Laravel'] },
    { category: 'Databases', icon: techIcons.frontend, items: ['PostgreSQL', 'MongoDB', 'MySQL'] },
    { category: 'APIs', icon: techIcons.backend, items: ['REST APIs', 'GraphQL'] },
    { category: 'Cloud and Infrastructure', icon: techIcons.cloud, items: ['AWS', 'Docker', 'CI/CD'] }
  ],

  'nodejs-developers.html': [
    { category: 'Languages', icon: techIcons.mobile, items: ['JavaScript', 'TypeScript'] },
    { category: 'Frameworks', icon: techIcons.mobile, items: ['Express','NestJS'] },
    { category: 'Databases', icon: techIcons.frontend, items: ['MongoDB', 'PostgreSQL'] },
    { category: 'APIs', icon: techIcons.backend, items: ['REST APIs', 'GraphQL'] },
    { category: 'Cloud and Infrastructure', icon: techIcons.cloud, items: ['AWS', 'Docker', 'CI/CD'] }
  ],

  'laravel-developers.html': [
    { category: 'Languages', icon: techIcons.mobile, items: ['PHP'] },
    { category: 'Frameworks', icon: techIcons.mobile, items: ['Laravel','Symfony'] },
    { category: 'Databases', icon: techIcons.frontend, items: ['MySQL', 'PostgreSQL'] },
    { category: 'APIs', icon: techIcons.backend, items: ['REST APIs', 'GraphQL'] },
    { category: 'Cloud and Infrastructure', icon: techIcons.cloud, items: ['AWS', 'Docker', 'CI/CD'] }
  ],

  'python-developers.html': [
    { category: 'Languages', icon: techIcons.mobile, items: ['Python'] },
    { category: 'Frameworks', icon: techIcons.mobile, items: ['Django','FastAPI','Flask'] },
    { category: 'Databases', icon: techIcons.frontend, items: ['PostgreSQL', 'MongoDB'] },
    { category: 'APIs', icon: techIcons.backend, items: ['REST APIs', 'GraphQL'] },
    { category: 'Cloud and Infrastructure', icon: techIcons.cloud, items: ['AWS', 'Docker', 'CI/CD'] }
  ],

  'php-developers.html': [
    { category: 'Languages', icon: techIcons.mobile, items: ['PHP'] },
    { category: 'Frameworks', icon: techIcons.mobile, items: ['Laravel','Symfony','CodeIgniter'] },
    { category: 'Databases', icon: techIcons.frontend, items: ['MySQL', 'PostgreSQL'] },
    { category: 'APIs', icon: techIcons.backend, items: ['REST APIs', 'GraphQL'] },
    { category: 'Cloud and Infrastructure', icon: techIcons.cloud, items: ['AWS', 'Docker', 'CI/CD'] }
  ],

  'ecommerce-developers.html': [
    { category: 'Platforms', icon: techIcons.mobile, items: ['Shopify','Magento','WooCommerce'] },
    { category: 'Languages', icon: techIcons.mobile, items: ['PHP','JavaScript','TypeScript'] },
    { category: 'Frameworks', icon: techIcons.frontend, items: ['Laravel', 'Next.js'] },
    { category: 'Payments', icon: techIcons.backend, items: ['Stripe', 'PayPal Integration'] },
    { category: 'Cloud and Infrastructure', icon: techIcons.cloud, items: ['AWS','CI/CD'] }
  ],

  'wordpress-developers.html': [
    { category: 'Languages', icon: techIcons.mobile, items: ['PHP','JavaScript'] },
    { category: 'CMS', icon: techIcons.mobile, items: ['WordPress','Gutenberg'] },
    { category: 'Ecommerce', icon: techIcons.frontend, items: ['WooCommerce'] },
    { category: 'Databases', icon: techIcons.backend, items: ['MySQL'] },
    { category: 'Cloud and Infrastructure', icon: techIcons.cloud, items: ['AWS','Managed Hosting'] }
  ],

  'shopify-developers.html': [
    { category: 'Platforms', icon: techIcons.mobile, items: ['Shopify','Shopify Plus'] },
    { category: 'Templating', icon: techIcons.mobile, items: ['Liquid'] },
    { category: 'APIs', icon: techIcons.frontend, items: ['Storefront API','Admin API'] },
    { category: 'Languages', icon: techIcons.backend, items: ['JavaScript','TypeScript'] },
    { category: 'Cloud and Infrastructure', icon: techIcons.cloud, items: ['AWS','CI/CD'] }
  ],

  'magento-developers.html': [
    { category: 'Platforms', icon: techIcons.mobile, items: ['Magento 2','Adobe Commerce'] },
    { category: 'Languages', icon: techIcons.mobile, items: ['PHP'] },
    { category: 'APIs', icon: techIcons.frontend, items: ['REST APIs','GraphQL'] },
    { category: 'Databases', icon: techIcons.backend, items: ['MySQL','Elasticsearch'] },
    { category: 'Cloud and Infrastructure', icon: techIcons.cloud, items: ['AWS','Adobe Commerce Cloud'] }
  ],

  'bigcommerce-developers.html': [
    { category: 'Platforms', icon: techIcons.mobile, items: ['BigCommerce'] },
    { category: 'Templating', icon: techIcons.mobile, items: ['Stencil','Handlebars'] },
    { category: 'APIs', icon: techIcons.frontend, items: ['BigCommerce API','Storefront API'] },
    { category: 'Languages', icon: techIcons.backend, items: ['JavaScript','TypeScript'] },
    { category: 'Cloud and Infrastructure', icon: techIcons.cloud, items: ['AWS','CI/CD'] }
  ],

  'woocommerce-developers.html': [
    { category: 'Platforms', icon: techIcons.mobile, items: ['WooCommerce','WordPress'] },
    { category: 'Languages', icon: techIcons.mobile, items: ['PHP','JavaScript'] },
    { category: 'Databases', icon: techIcons.frontend, items: ['MySQL'] },
    { category: 'Payments', icon: techIcons.backend, items: ['Stripe','PayPal Integration'] },
    { category: 'Cloud and Infrastructure', icon: techIcons.cloud, items: ['AWS','Managed Hosting'] }
  ],

  'chatbot-developers.html': [
    { category: 'LLM Providers', icon: techIcons.mobile, items: ['OpenAI','Anthropic','Claude'] },
    { category: 'Retrieval', icon: techIcons.mobile, items: ['RAG','Vector Databases'] },
    { category: 'NLP', icon: techIcons.frontend, items: ['Intent Handling','Entity Recognition'] },
    { category: 'Languages', icon: techIcons.backend, items: ['Python','TypeScript'] },
    { category: 'Cloud and Infrastructure', icon: techIcons.cloud, items: ['AWS','Azure'] }
  ],

  'graphic-designers.html': [
    { category: 'Design Tools', icon: techIcons.mobile, items: ['Adobe Photoshop','Adobe Illustrator'] },
    { category: 'Layout', icon: techIcons.mobile, items: ['Adobe InDesign'] },
    { category: 'Prototyping', icon: techIcons.frontend, items: ['Figma'] },
    { category: 'Motion and Video', icon: techIcons.backend, items: ['After Effects'] },
    { category: 'File Handling', icon: techIcons.cloud, items: ['Print-Ready Formats','Asset Libraries'] }
  ],

  'ui-ux-designers.html': [
    { category: 'Design Tools', icon: techIcons.mobile, items: ['Figma','Sketch'] },
    { category: 'Prototyping', icon: techIcons.mobile, items: ['Adobe XD','Interactive Prototypes'] },
    { category: 'Design Systems', icon: techIcons.frontend, items: ['Component Libraries','Style Guides'] },
    { category: 'Research', icon: techIcons.backend, items: ['User Testing','Wireframing'] },
    { category: 'Handoff', icon: techIcons.cloud, items: ['Design Specs','Developer Handoff'] }
  ],

  'virtual-research-assistant.html': [
    { category: 'Languages', icon: techIcons.mobile, items: ['Python','TypeScript','Node.js'] },
    { category: 'LLM Providers', icon: techIcons.mobile, items: ['OpenAI','Anthropic Claude'] },
    { category: 'Retrieval and Data', icon: techIcons.frontend, items: ['Vector Databases','Embeddings'] },
    { category: 'Cloud and Infrastructure', icon: techIcons.backend, items: ['AWS','Azure'] },
    { category: 'Integration', icon: techIcons.cloud, items: ['REST APIs','Webhooks'] }
  ],

  'digital-marketers.html': [
    { category: 'Advertising', icon: techIcons.mobile, items: ['Google Ads','Meta Ads'] },
    { category: 'SEO', icon: techIcons.mobile, items: ['Semrush','Ahrefs'] },
    { category: 'Analytics', icon: techIcons.frontend, items: ['Google Search Console','Google Analytics'] },
    { category: 'Automation', icon: techIcons.backend, items: ['Email Marketing Platforms'] },
    { category: 'Reporting', icon: techIcons.cloud, items: ['Data Studio','Dashboards'] }
  ],

  'devops-developers.html': [
    { category: 'Container Orchestration', icon: techIcons.mobile, items: ['Docker','Kubernetes'] },
    { category: 'Infrastructure as Code', icon: techIcons.mobile, items: ['Terraform','Ansible'] },
    { category: 'CI/CD Platforms', icon: techIcons.frontend, items: ['GitHub Actions','GitLab CI','Jenkins'] },
    { category: 'Cloud Providers', icon: techIcons.backend, items: ['AWS','Google Cloud','Microsoft Azure'] },
    { category: 'Monitoring and Logging', icon: techIcons.cloud, items: ['Prometheus','ELK Stack','Datadog'] }
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
    title: 'Healthcare Project: AI Document Processing System',
    description: 'Automated clinical document intake and decreased manual review time across high-volume workflows.',
    metrics: [
      { label: 'Challenge', value: 'Processing thousands of documents per week consumed clinical staff time. Manual data entry introduced transcription errors and delays.' },
      { label: 'Solution', value: 'Built a document classification and extraction pipeline using NLP. Integrated with the existing patient records system through secure APIs.' }
    ],
    tech: ['Python', 'NLP', 'FastAPI', 'AWS', 'PostgreSQL', 'Docker'],
    image: 'images/work-1.jpg'
  },
  {
    category: 'fintech',
    title: 'Fintech Project: Real-Time Fraud Monitoring Platform',
    description: 'Deployed a transaction monitoring system that flags anomalies in real time and routes alerts to review teams.',
    metrics: [
      { label: 'Challenge', value: 'Legacy rules engine missed complex fraud patterns. Alert volumes overwhelmed the compliance team with false positives.' },
      { label: 'Solution', value: 'Designed and trained a custom ML model on historical transaction data. Built an alert dashboard with adjustable risk thresholds and case management.' }
    ],
    tech: ['Python', 'TensorFlow', 'Kafka', 'PostgreSQL', 'React', 'AWS'],
    image: 'images/work-2.jpg'
  },
  {
    category: 'logistics',
    title: 'Logistics Project: Route Optimization and Dispatch System',
    description: 'Replaced manual dispatch with an automated routing system that reduced planning time and improved delivery accuracy.',
    metrics: [
      { label: 'Challenge', value: 'Dispatchers planned routes manually each morning across hundreds of stops. Late deliveries and inefficient routes increased operational costs.' },
      { label: 'Solution', value: 'Built a route optimization engine with real-time traffic integration. Connected the system to existing warehouse and driver mobile applications.' }
    ],
    tech: ['Python', 'React Native', 'Node.js', 'Google Maps API', 'PostgreSQL', 'AWS'],
    image: 'images/work-3.jpg'
  }
];

const testimonialsData = [
  {
    quote: "A stellar WordPress design experience. Their team combined creativity with functionality to deliver a stunning website that engages visitors and drives results. Highly professional and results-driven.",
    name: "Jeff"
  },
  {
    quote: "I'm Britney, and I'm the head of conversion optimization for Acadia, a digital marketing agency. I've had the pleasure of working with the Cypherox team for over two, going on three years now. They're fast, hardworking, and really diligent developers. They're really reliable, skilled developers and have been a great partner and a pleasure to work with.",
    name: "Britney"
  },
  {
    quote: "Hi, my name is Gabrielle, and I'd like to share my experience working with Cypherox Technologies on one of the mobile apps and websites that I worked together with them building. I had an amazing experience. The team members at Cypherox Technologies were attentive, diligent, communicative, and very, very bright. I had an amazing experience working with them, and I highly recommend them.",
    name: "Gabrielle"
  },
  {
    quote: "Hi, I'm Becke. I've had the pleasure of working with Cypherox Technologies on a recent web development project. It was a custom, heavy CRM, and the experience was seamless from start to finish. The product was delivered on time, and he went the extra mile to ensure everything was done so that we understood the process. It was just, it was brilliant. It was really, really good service. So yeah, absolutely brilliant; I'd recommend it. Thank you so much. Thank you.",
    name: "Becke"
  },
  {
    quote: "I would highly recommend working with Cypherox Technologies if you need a custom CRM platform. They always exceed their clients' expectations at every stage of the project. Their team designs and builds fully customized ecommerce platforms from the ground up, approaching every project with remarkable skill and dedication.",
    name: "Lauren"
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
    { heading: 'Services', links: [{ label: 'AI & Automation', href: '#' }, { label: 'Software Dev', href: '#' }, { label: 'Data & Analytics', href: '#' }, { label: 'Cloud & DevOps', href: '#' }, { label: 'Product Engineering', href: '#' }] },
    { heading: 'Industries', links: [{ label: 'Healthcare', href: '#' }, { label: 'Finance', href: '#' }, { label: 'Retail', href: '#' }, { label: 'Manufacturing', href: '#' }, { label: 'Education', href: '#' }] },
    { heading: 'Company', links: [{ label: 'About Us', href: '/about-us.html' }, { label: 'Careers', href: '#' }, { label: 'News', href: '#' }, { label: 'Contact', href: '/contact-us.html' }] },
    { heading: 'Resources', links: [{ label: 'Blog', href: '/blogs/index.html' }, { label: 'Case Studies', href: '/case-studies/index.html' }, { label: 'Whitepapers', href: '#' }, { label: 'Webinars', href: '#' }] }
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
        <p class="section-subtitle fade-up" style="margin-top: 16px;">These are production systems, not demos. Each project went from requirements through architecture, development, testing, and deployment into an environment where real users and real data depend on it daily.</p>
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

function getCategoryIcon(tech, index) {
  if (tech.icon) return tech.icon;
  const name = (tech.category || '').toLowerCase();
  if (name.includes('mobile') || name.includes('ios') || name.includes('android')) return techIcons.mobile;
  if (name.includes('front') || name.includes('ui') || name.includes('framework') || name.includes('cross')) return techIcons.frontend;
  if (name.includes('back') || name.includes('language')) return techIcons.backend;
  if (name.includes('cloud') || name.includes('devops') || name.includes('tool') || name.includes('infra')) return techIcons.cloud;
  if (name.includes('data') || name.includes('ai') || name.includes('ml') || name.includes('database') || name.includes('storage')) return techIcons.data;
  if (name.includes('api') || name.includes('network') || name.includes('integration')) return techIcons.api;
  if (name.includes('arch')) return techIcons.architecture;
  return (techStackData[index] && techStackData[index].icon) || techIcons.default;
}

function renderTechStack() {
  const container = document.getElementById('tech-stack-container');
  if (!container) return;

  let html = '<div class="tech-categories">';
  getTechStackData().forEach((tech, index) => {
    let badgesHtml = tech.items.map(item => `<div class="tech-badge">${item}</div>`).join('');
    const icon = getCategoryIcon(tech, index);
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
          <div class="testimonial-card__avatar"></div>
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
    'fraud-detection-services.html': 'Cypherox is a production AI engineering firm that designs, builds, and maintains AI systems, applications, and integrations for businesses moving from pilots to dependable, working software.',
    'automl-development-services.html': 'Cypherox is a production AI engineering firm that designs, builds, and maintains AI systems, applications, and integrations for businesses moving from pilots to dependable, working software.',
    'it-consulting-services.html': 'Cypherox is a production AI engineering firm that designs, builds, and maintains AI systems, applications, and integrations for businesses moving from pilots to dependable, working software.',
    'startup-it-consulting-services.html': 'Cypherox is a production AI engineering firm that designs, builds, and maintains AI systems, applications, and integrations for businesses moving from pilots to dependable, working software.',
    'ai-strategy-consulting-services.html': 'Cypherox is a production AI engineering firm that designs, builds, and maintains AI systems, applications, and integrations for businesses moving from pilots to dependable, working software.',
    'responsive-web-design-services.html': 'Cypherox is a production AI engineering firm that designs, builds, and maintains AI systems, applications, and integrations for businesses moving from pilots to dependable, working software.',
    'mobile-app-design-services.html': 'Cypherox is a production AI engineering firm that designs, builds, and maintains AI systems, applications, and integrations for businesses moving from pilots to dependable, working software.',
    'business-process-automation-services.html': 'Cypherox is a production AI engineering firm that designs, builds, and maintains AI systems, applications, and integrations for businesses moving from pilots to dependable, working software.',
    'workflow-automation-services.html': 'Cypherox is a production AI engineering firm that designs, builds, and maintains AI systems, applications, and integrations for businesses moving from pilots to dependable, working software.',
    'marketing-and-crm-automation-services.html': 'Cypherox is a production AI engineering firm that designs, builds and maintains AI systems, applications and integrations for businesses moving from pilots to dependable, working software.',
    'web-development-company-services.html': 'Cypherox is a production AI engineering firm that designs, builds, and maintains AI systems, applications, and integrations for businesses moving from pilots to dependable, working software.',
    'app-development-company-services.html': 'Cypherox is a production AI engineering firm that designs, builds, and maintains AI systems, applications, and integrations for businesses moving from pilots to dependable, working software.',
    'ecommerce-website-development-services.html': 'Cypherox is a production AI engineering firm that designs, builds, and maintains AI systems, applications, and integrations for businesses moving from pilots to dependable, working software.',
    'cms-development-services.html': 'Cypherox is a production AI engineering firm that designs, builds, and maintains AI systems, applications, and integrations for businesses moving from pilots to dependable, working software.',
  };
  const brandDescription = footerBrandDescriptions[pageName] || 'Cypherox Technologies builds and operates AI and software systems for businesses across the US, UK, and Europe. Established in 2015.';

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

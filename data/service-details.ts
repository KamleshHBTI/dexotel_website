import { Service } from '@/Components/Services/ServicesGrid';

// Define interfaces for service details
interface ProcessStep {
  title: string;
  description: string;
}
interface Tool {
  name: string;
  icon: string; // This could be a URL, an icon class, or a local asset reference
}

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceDetails {
  tools: Tool[];
  processSteps: ProcessStep[];
  benefits: string[];
  faqs: FAQ[];
}


// Service-specific details
export const serviceDetails: Record<string, ServiceDetails> = {
  'mobile-app-development': {
    tools: [
      { name: 'React Native', icon: 'react-native' },
      { name: 'Flutter', icon: 'flutter' },
      { name: 'Swift', icon: 'swift' },
      { name: 'Kotlin', icon: 'kotlin' },
      { name: 'Firebase', icon: 'firebase' },
      { name: 'AWS Amplify', icon: 'aws-amplify' },
      { name: 'App Center', icon: 'app-center' },
      { name: 'Ionic', icon: 'ionic' }
    ],
    processSteps: [
      {
        title: 'Requirements Analysis',
        description: 'Deep dive into your business needs, target audience, and app functionality requirements.'
      },
      {
        title: 'UI/UX Design',
        description: 'Create intuitive and engaging user interfaces with modern design principles.'
      },
      {
        title: 'Development & Testing',
        description: 'Agile development with continuous integration and comprehensive testing across devices.'
      },
      {
        title: 'Deployment & Maintenance',
        description: 'App store submission, launch support, and ongoing updates and maintenance.'
      }
    ],
    benefits: [
      'Cross-Platform Development',
      'Native Performance',
      'Scalable Architecture',
      'Offline Functionality',
      'Push Notifications',
      'Analytics Integration',
      'App Store Optimization'
    ],
    faqs: [
      {
        question: 'Which platforms do you develop for?',
        answer: 'We develop for both iOS and Android platforms, using either native development or cross-platform frameworks depending on your needs.'
      },
      {
        question: 'How long does it take to develop a mobile app?',
        answer: 'Development time varies from 3-6 months for basic apps to 6-12 months for complex applications, depending on features and requirements.'
      },
      {
        question: 'Do you provide app maintenance services?',
        answer: 'Yes, we offer comprehensive maintenance packages including bug fixes, updates, performance optimization, and new feature development.'
      }
    ]
  },
  'software-development': {
    tools: [
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Python', icon: 'python' },
      { name: 'Java', icon: 'java' },
      { name: 'React', icon: 'react' },
      { name: 'Angular', icon: 'angular' },
      { name: 'Vue.js', icon: 'vuejs' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'MongoDB', icon: 'mongodb' }
    ],
    processSteps: [
      {
        title: 'Requirements Engineering',
        description: 'Detailed analysis and documentation of software requirements and specifications.'
      },
      {
        title: 'Architecture Design',
        description: 'Creating scalable and maintainable software architecture using best practices.'
      },
      {
        title: 'Development & Testing',
        description: 'Iterative development with continuous testing and quality assurance.'
      },
      {
        title: 'Deployment & Support',
        description: 'Smooth deployment process with comprehensive documentation and support.'
      }
    ],
    benefits: [
      'Custom Solutions',
      'Scalable Architecture',
      'Security Best Practices',
      'Performance Optimization',
      'Documentation',
      'Code Quality',
      'Maintenance Support'
    ],
    faqs: [
      {
        question: 'What types of software do you develop?',
        answer: 'We develop various types of software including web applications, enterprise software, APIs, and microservices.'
      },
      {
        question: 'Do you follow any specific development methodology?',
        answer: 'We primarily use Agile methodology with Scrum or Kanban frameworks, adapting to client preferences.'
      },
      {
        question: 'How do you ensure software quality?',
        answer: 'We implement comprehensive testing strategies including unit testing, integration testing, and automated QA processes.'
      }
    ]
  },
  'digital-transformation': {
    tools: [
      { name: 'Cloud Platforms (AWS/Azure/GCP)', icon: 'cloud-platforms' },
      { name: 'AI/ML Tools', icon: 'ai-ml-tools' },
      { name: 'Data Analytics', icon: 'data-analytics' },
      { name: 'RPA Tools', icon: 'rpa-tools' },
      { name: 'Integration Platforms', icon: 'integration-platforms' },
      { name: 'Digital Experience Platforms', icon: 'digital-experience-platforms' },
      { name: 'IoT Platforms', icon: 'iot-platforms' },
      { name: 'Blockchain', icon: 'blockchain' }
    ],
    processSteps: [
      {
        title: 'Digital Assessment',
        description: 'Evaluate current digital maturity and identify transformation opportunities.'
      },
      {
        title: 'Strategy Development',
        description: 'Create comprehensive digital transformation roadmap aligned with business goals.'
      },
      {
        title: 'Implementation',
        description: 'Execute transformation initiatives across people, processes, and technology.'
      },
      {
        title: 'Change Management',
        description: 'Guide organization through transformation with proper change management.'
      }
    ],
    benefits: [
      'Improved Efficiency',
      'Enhanced Customer Experience',
      'Data-Driven Decision Making',
      'Innovation Capability',
      'Competitive Advantage',
      'Operational Excellence',
      'Digital Culture'
    ],
    faqs: [
      {
        question: 'What does digital transformation involve?',
        answer: 'Digital transformation involves modernizing technology, processes, and organizational culture to improve business operations and customer experience.'
      },
      {
        question: 'How long does digital transformation take?',
        answer: 'Digital transformation is an ongoing journey, typically with initial phases lasting 1-3 years depending on organization size and complexity.'
      },
      {
        question: 'How do you measure transformation success?',
        answer: 'We establish KPIs aligned with business objectives and regularly measure progress against these metrics.'
      }
    ]
  },
  'ideation-and-design': {
    tools: [
      { name: 'Figma', icon: 'figma' },
      { name: 'Adobe XD', icon: 'adobe-xd' },
      { name: 'Sketch', icon: 'sketch' },
      { name: 'InVision', icon: 'invision' },
      { name: 'Miro', icon: 'miro' },
      { name: 'UserTesting', icon: 'user-testing' },
      { name: 'Hotjar', icon: 'hotjar' },
      { name: 'ProtoPie', icon: 'proto-pie' }
    ],
    processSteps: [
      {
        title: 'Research & Discovery',
        description: 'Conduct user research and market analysis to inform design strategy.'
      },
      {
        title: 'Ideation & Concept',
        description: 'Generate innovative solutions through collaborative ideation sessions.'
      },
      {
        title: 'Design & Prototyping',
        description: 'Create detailed designs and interactive prototypes for validation.'
      },
      {
        title: 'Testing & Iteration',
        description: 'Validate designs through user testing and iterate based on feedback.'
      }
    ],
    benefits: [
      'User-Centered Design',
      'Innovation Focus',
      'Rapid Prototyping',
      'Validated Solutions',
      'Reduced Development Costs',
      'Improved User Experience',
      'Design System Creation'
    ],
    faqs: [
      {
        question: 'What is your design process?',
        answer: 'We follow a user-centered design process that includes research, ideation, prototyping, and validation phases.'
      },
      {
        question: 'How do you ensure designs are feasible?',
        answer: 'We work closely with development teams and consider technical constraints throughout the design process.'
      },
      {
        question: 'Do you create design systems?',
        answer: 'Yes, we create comprehensive design systems to ensure consistency and scalability across products.'
      }
    ]
  },
  'it-consulting': {
    tools: [
      { name: 'Project Management Tools', icon: 'project-management-tools' },
      { name: 'Business Analysis Tools', icon: 'business-analysis-tools' },
      { name: 'Enterprise Architecture Frameworks', icon: 'enterprise-architecture-frameworks' },
      { name: 'Risk Assessment Tools', icon: 'risk-assessment-tools' },
      { name: 'Process Modeling Tools', icon: 'process-modeling-tools' },
      { name: 'Performance Monitoring', icon: 'performance-monitoring' },
      { name: 'Security Assessment Tools', icon: 'security-assessment-tools' },
      { name: 'Cost Analysis Tools', icon: 'cost-analysis-tools' }
    ],
    processSteps: [
      {
        title: 'Assessment',
        description: 'Evaluate current IT infrastructure, processes, and capabilities.'
      },
      {
        title: 'Strategy Development',
        description: 'Create IT roadmap aligned with business objectives and industry best practices.'
      },
      {
        title: 'Solution Design',
        description: 'Design optimal solutions for identified challenges and opportunities.'
      },
      {
        title: 'Implementation Support',
        description: 'Guide and oversee implementation of recommended solutions.'
      }
    ],
    benefits: [
      'Expert Guidance',
      'Risk Mitigation',
      'Cost Optimization',
      'Technology Alignment',
      'Industry Best Practices',
      'Vendor Selection',
      'Change Management'
    ],
    faqs: [
      {
        question: 'What areas do you consult in?',
        answer: 'We provide consulting in IT strategy, enterprise architecture, digital transformation, security, and more.'
      },
      {
        question: 'How do you ensure knowledge transfer?',
        answer: 'We implement structured knowledge transfer processes and provide comprehensive documentation.'
      },
      {
        question: 'Do you help with vendor selection?',
        answer: 'Yes, we assist in vendor evaluation, selection, and management based on your specific needs.'
      }
    ]
  },
  'devops': {
    tools: [
      { name: 'Docker', icon: 'docker' },
      { name: 'Kubernetes', icon: 'kubernetes' },
      { name: 'Jenkins', icon: 'jenkins' },
      { name: 'GitLab CI/CD', icon: 'gitlab-ci-cd' },
      { name: 'Terraform', icon: 'terraform' },
      { name: 'Ansible', icon: 'ansible' },
      { name: 'Prometheus', icon: 'prometheus' },
      { name: 'ELK Stack', icon: 'elk-stack' }
    ],
    processSteps: [
      {
        title: 'Assessment & Planning',
        description: 'Evaluate current DevOps maturity and create implementation roadmap.'
      },
      {
        title: 'Infrastructure Setup',
        description: 'Implement infrastructure as code and containerization.'
      },
      {
        title: 'CI/CD Implementation',
        description: 'Set up automated build, test, and deployment pipelines.'
      },
      {
        title: 'Monitoring & Optimization',
        description: 'Implement monitoring, logging, and continuous optimization.'
      }
    ],
    benefits: [
      'Faster Deployment',
      'Improved Reliability',
      'Automated Processes',
      'Scalable Infrastructure',
      'Reduced Downtime',
      'Better Collaboration',
      'Cost Optimization'
    ],
    faqs: [
      {
        question: 'How do you implement DevOps?',
        answer: 'We follow a phased approach, starting with assessment and gradually implementing automation, CI/CD, and monitoring.'
      },
      {
        question: 'What tools do you use?',
        answer: 'We use industry-standard tools like Docker, Kubernetes, Jenkins, and various cloud-native solutions.'
      },
      {
        question: 'How do you ensure security in DevOps?',
        answer: 'We implement DevSecOps practices, integrating security throughout the development and deployment pipeline.'
      }
    ]
  },
  'cloud-managed-services': {
    tools: [
      { name: 'AWS', icon: 'aws' },
      { name: 'Azure', icon: 'azure' },
      { name: 'Google Cloud', icon: 'google-cloud' },
      { name: 'Terraform', icon: 'terraform' },
      { name: 'CloudWatch', icon: 'cloudwatch' },
      { name: 'Azure Monitor', icon: 'azure-monitor' },
      { name: 'Kubernetes', icon: 'kubernetes' },
      { name: 'Cloud Security Tools', icon: 'cloud-security-tools' }
    ],
    processSteps: [
      {
        title: 'Cloud Assessment',
        description: 'Evaluate current infrastructure and define cloud strategy.'
      },
      {
        title: 'Migration Planning',
        description: 'Develop detailed migration plan and architecture.'
      },
      {
        title: 'Implementation',
        description: 'Execute migration and setup cloud infrastructure.'
      },
      {
        title: 'Optimization & Management',
        description: 'Provide ongoing management, monitoring, and optimization.'
      }
    ],
    benefits: [
      'Cost Optimization',
      'Scalability',
      'High Availability',
      'Security Compliance',
      'Performance Monitoring',
      'Disaster Recovery',
      '24/7 Support',
      'Custom Solutions',
      'Scalable and Customizable Solutions',
      'Ongoing Support & Maintenance'
    ],
    faqs: [
      {
        question: 'Which cloud providers do you work with?',
        answer: 'We work with major cloud providers including AWS, Azure, and Google Cloud Platform.'
      },
      {
        question: 'How do you ensure cloud security?',
        answer: 'We implement comprehensive security measures including encryption, access controls, and compliance monitoring.'
      },
      {
        question: 'What is included in managed services?',
        answer: 'Our managed services include monitoring, maintenance, security, optimization, and 24/7 support.'
      }
    ]
  },
  'salesforce-services': {
  tools: [
    { name: 'Salesforce', icon: 'salesforce' },
    { name: 'Salesforce Sales Cloud', icon: 'salesforce-sales-cloud' },
    { name: 'Salesforce Service Cloud', icon: 'salesforce-service-cloud' },
    { name: 'Salesforce Marketing Cloud', icon: 'salesforce-marketing-cloud' },
    { name: 'Salesforce Pardot', icon: 'salesforce-pardot' },
    { name: 'Salesforce CPQ', icon: 'salesforce-cpq' },
    { name: 'Apex', icon: 'apex' },
    { name: 'Salesforce Lightning Web Components', icon: 'salesforce-lightning-web-components' },
    { name: 'Data Loader', icon: 'data-loader' },
    { name: 'MuleSoft', icon: 'mule-soft' }
  ],
  processSteps: [
    {
      title: "Requirement Analysis",
      description: "Understand your business processes and define CRM objectives."
    },
    {
      title: "Solution Design",
      "description": "Design tailored Salesforce solutions and integrations."
    },
    {
      title: "Implementation & Customization",
      description: "Configure, customize, and integrate Salesforce to fit your needs."
    },
    {
      title: "Training & Support",
      description: "Provide user training, documentation, and ongoing support."
    },
    {
      title: "Ongoing Support & Maintenance",
      description: "Provide ongoing support, user training, troubleshooting, and regular system health checks to ensure Salesforce continues to power your business efficiently."
    }
  ],
  benefits: [
    'Streamlined Sales Processes',
    'Automated Workflows',
    '360-Degree Customer View',
    'Enhanced Reporting & Analytics',
    'Improved Customer Engagement',
    'Scalable and Customizable Solutions',
    'Ongoing Support & Maintenance',
    'Custom Solutions',
  ],
  faqs: [
    {
      question: "Can you migrate data from our existing CRM to Salesforce?",
      answer: "Yes, we assist with seamless data migration from your current system to Salesforce, ensuring data accuracy and integrity."
    },
    {
      question: "Do you provide custom app development on Salesforce?",
      answer: "Absolutely. We offer custom app development using Apex and Lightning components to fully meet your business requirements."
    },
    {
      question: "What kind of support do you offer post-implementation?",
      answer: "We provide ongoing support, user training, troubleshooting, and regular system health checks to ensure Salesforce continues to power your business efficiently."
    }, 
    {
      question: "Can you help with Salesforce integration with other systems?",
      answer: "Yes, we offer integration services to connect Salesforce with other systems, including ERP, accounting, and external APIs."
    },
    {
      question: "Do you offer Salesforce training and documentation?",
      answer: "Yes, we provide comprehensive training and documentation to help your team effectively use Salesforce."
    },
    {
      question: "How do you ensure data security in Salesforce?",
      answer: "We implement robust security measures including encryption, access controls, and compliance monitoring to protect your data."
    },
    {
      question: "Can you help with Salesforce customization?",
      answer: "Yes, we offer customization services to tailor Salesforce to your specific business needs."
    },
    {
      question: "Do you offer Salesforce migration services?",
      answer: "Yes, we assist with seamless data migration from your current system to Salesforce, ensuring data accuracy and integrity."
    }
    
  ]
}
}; 
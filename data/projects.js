// All project data - both for cards and detailed pages
export const projects = [
    {
        id: 'api-sentinel',
        title: 'API Sentinel',
        subtitle: 'DevOps-Grade Monitoring & Deployment Platform',
        tagline: 'Enterprise Infrastructure Management Made Simple',
        shortDescription: 'Real-time API monitoring tool used in production at Neural Semiconductor Limited. Tracks endpoint availability, sends instant notifications on downtime/restore, and improved reliability with 40% fewer downtime incidents.',
        technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Vite', 'JWT'],
        githubUrl: 'https://github.com/jonayedahmed',
        demoUrl: '',
        featured: true,
        hasDetailPage: true,

        // Detailed page content
        overview: 'API Sentinel is an enterprise-ready monitoring and deployment management platform that provides real-time uptime tracking, automated health checks, and continuous deployment capabilities for distributed systems. Built as a cost-effective alternative to expensive SaaS solutions like Pingdom and UptimeRobot Pro, it combines comprehensive API monitoring with deployment pipeline management in a unified, self-hosted platform. Currently deployed in production environments, it has proven to reduce downtime incidents by 40% while maintaining 99.9% uptime monitoring accuracy.',

        metadata: {
            type: 'DevOps Monitoring & Deployment Platform',
            role: 'Full-Stack Developer & DevOps Engineer',
            status: 'Production (Active)',
            timeline: '6 months',
        },

        techStack: {
            frontend: [
                'React 18 - Modern hooks-based architecture',
                'Vite 5 - Lightning-fast build tooling with HMR',
                'React Router v6 - Client-side routing',
                'React Query - Server state management and caching',
                'Formik + Yup - Form handling and validation',
                'Axios - HTTP client with interceptors',
                'React Select - Advanced dropdown components',
                'Server-Sent Events (SSE) - Real-time live updates',
                'Context API - Global authentication state',
            ],
            backend: [
                'Node.js with Express 5 - High-performance API server',
                'MongoDB with Mongoose 8 - Time-series data storage',
                'JWT - Stateless authentication system',
                'Nodemailer - Email notification system',
                'Helmet.js - Security headers and CSP',
                'Express Rate Limiter - DDoS protection',
                'Custom Worker System - Background job processing',
                'SSE Implementation - Real-time data streaming',
            ],
            devops: [
                'Multi-Protocol Monitoring - HTTP/HTTPS, TCP, ICMP, DNS',
                'SSL Certificate Tracking - Expiration monitoring',
                'Agent-Based Deployment - Remote deployment architecture',
                'Job Queue System - Background task processing',
                'TTL Indexing - Automated data cleanup',
            ]
        },

        features: [
            {
                title: 'Multi-Protocol API Monitoring',
                description: 'Comprehensive monitoring across multiple network protocols with intelligent health tracking.',
                icon: '🔍',
                highlights: [
                    'HTTP/HTTPS endpoint monitoring with custom methods (GET, POST, PUT, DELETE)',
                    'TCP port availability and server reachability checks',
                    'ICMP ping tests for network connectivity verification',
                    'DNS resolution monitoring and validation',
                    'SSL certificate expiration tracking with configurable alert thresholds',
                    'Configurable check intervals per monitor (1min to 24hrs)',
                    'Group-based organization (projects, environments, teams)',
                ],
            },
            {
                title: 'Real-Time Health Dashboard',
                description: 'Live monitoring dashboard with instant updates and historical analytics.',
                icon: '📊',
                highlights: [
                    'Server-Sent Events (SSE) for real-time status updates without page refresh',
                    'Historical health logs with time-series data visualization',
                    'Performance metrics: success rates, response times, uptime percentages',
                    'Automated email alerts on downtime and recovery events',
                    'Response time tracking and performance trend analysis',
                    'Custom dashboard views per user/team',
                ],
            },
            {
                title: 'Deployment Management System',
                description: 'Complete CI/CD pipeline management with version control and live monitoring.',
                icon: '🚀',
                highlights: [
                    'Project-based deployment organization',
                    'Reusable pipeline templates and configurations',
                    'Agent-based architecture for distributed deployments',
                    'Remote deployment agent registration and management',
                    'Background job queue for deployment processing',
                    'Real-time deployment log streaming via SSE',
                    'Git integration for version tracking (commit SHA/messages)',
                    'Deployment history and audit trails',
                ],
            },
            {
                title: 'Enterprise Security',
                description: 'Production-grade security following OWASP best practices.',
                icon: '🔒',
                highlights: [
                    'Rate limiting: 100 req/15min globally, 5 req/15min on auth endpoints',
                    'JWT authentication with expiration validation',
                    'NoSQL injection prevention with input sanitization',
                    'Content Security Policy and HSTS headers',
                    'CORS configuration with origin whitelisting',
                    'Environment-based secret management (zero hardcoded credentials)',
                    'Password hashing with industry-standard algorithms',
                ],
            },
            {
                title: 'Alert & Notification System',
                description: 'Intelligent alerting system to keep teams informed of critical events.',
                icon: '🔔',
                highlights: [
                    'Email notifications on service downtime',
                    'Recovery notifications when services restore',
                    'Configurable alert thresholds per monitor',
                    'SSL certificate expiration warnings',
                    'Deployment completion/failure notifications',
                    'Per-user notification preferences',
                ],
            },
            {
                title: 'User Management',
                description: 'Flexible user system with quotas and audit logging.',
                icon: '👥',
                highlights: [
                    'Secure user registration and authentication',
                    'Avatar support and profile management',
                    'Per-user monitoring check quotas',
                    'Activity audit logs for compliance',
                    'Token-based stateless authentication',
                    'Team collaboration features',
                ],
            },
            {
                title: 'Developer Tools',
                description: 'Built-in tools for DevOps teams to manage infrastructure efficiently.',
                icon: '⚙️',
                highlights: [
                    'Integrated terminal for remote command execution',
                    'Configurable TTL for historical data retention',
                    'Custom check intervals and SSL alert thresholds',
                    'RESTful API for programmatic access',
                    'Comprehensive error handling and validation',
                    'Hot module replacement for rapid development',
                ],
            },
        ],

        architecture: {
            title: 'Architecture & Design Excellence',
            patterns: [
                {
                    name: 'Modular Backend Architecture',
                    description: 'Separation of concerns with dedicated handlers, routes, and services. Mongoose models serve as the data layer with repository pattern implementation.',
                },
                {
                    name: 'Real-Time Communication',
                    description: 'Server-Sent Events (SSE) implementation for efficient real-time updates without WebSocket overhead. Enables live dashboard updates and deployment log streaming.',
                },
                {
                    name: 'Background Processing',
                    description: 'Custom worker system for periodic health checks with configurable concurrency. Job queue system handles deployment tasks asynchronously.',
                },
                {
                    name: 'Time-Series Data Management',
                    description: 'MongoDB TTL indexes for automatic cleanup of historical data. Optimized queries for performance metrics and trend analysis.',
                },
                {
                    name: 'Security Middleware Pipeline',
                    description: 'Layered security approach with Helmet, rate limiting, sanitization, and authentication middleware. Environment-based configuration for different deployment stages.',
                },
            ],
        },

        challenges: [
            {
                title: 'Real-Time Updates Without WebSocket Complexity',
                problem: 'Need live dashboard updates for monitoring status changes without the overhead and complexity of WebSocket infrastructure.',
                solution: 'Implemented Server-Sent Events (SSE) for unidirectional server-to-client streaming. This provided real-time updates with simpler implementation, automatic reconnection, and lower resource usage compared to WebSockets.',
            },
            {
                title: 'Scalable Background Health Checks',
                problem: 'Execute thousands of health checks at different intervals without blocking the main application or overwhelming the server.',
                solution: 'Built a custom worker system with configurable concurrency and intelligent scheduling. Checks run in background processes with automatic failure retry and recovery mechanisms.',
            },
            {
                title: 'Historical Data Management',
                problem: 'Store time-series health check data efficiently while preventing database bloat from unlimited growth.',
                solution: 'Implemented MongoDB TTL (Time-To-Live) indexes that automatically delete old records. Configurable retention periods allow users to balance storage costs with historical visibility needs.',
            },
            {
                title: 'Distributed Deployment Architecture',
                problem: 'Enable deployments across multiple servers and environments while maintaining centralized control and visibility.',
                solution: 'Created an agent-based system where lightweight agents run on deployment targets, communicating with the central platform. This allows secure deployments across distributed infrastructure with real-time log streaming.',
            },
            {
                title: 'SSL Certificate Monitoring',
                problem: 'Track SSL certificate expiration dates across multiple domains to prevent unexpected outages.',
                solution: 'Integrated automated SSL certificate checking into the monitoring workflow with configurable warning thresholds (e.g., alert 30 days before expiration).',
            },
        ],

        impact: [
            '40% reduction in downtime incidents through proactive monitoring',
            '99.9% uptime monitoring accuracy in production environments',
            'Cost savings: Replaces $50-200/month SaaS monitoring tools',
            'Unified platform: Eliminates context switching between monitoring and deployment tools',
            'Faster incident response: Real-time alerts enable immediate action',
            'Full data ownership: Self-hosted solution ensures privacy and compliance',
            'Developer productivity: Integrated terminal and deployment tools reduce manual work',
            'Scalable architecture: Handles monitoring for microservices and distributed systems',
        ],

        statistics: {
            monitoring: 'Multi-protocol support (HTTP/S, TCP, ICMP, DNS)',
            realtime: 'SSE-based live updates with <100ms latency',
            security: '5 layers of security (rate limiting, JWT, sanitization, CSP, CORS)',
            deployment: 'Agent-based architecture for unlimited deployment targets',
            performance: 'Handles 1000+ concurrent health checks',
            dataManagement: 'Automated TTL-based cleanup prevents database bloat',
        },

        useCases: [
            {
                title: 'Startups',
                description: 'Monitor production APIs without expensive third-party monitoring tools',
            },
            {
                title: 'DevOps Teams',
                description: 'Unified dashboard for both monitoring and deployment management',
            },
            {
                title: 'Agencies',
                description: 'Monitor multiple client websites and APIs from one centralized platform',
            },
            {
                title: 'SaaS Companies',
                description: 'Track multi-tenant application health across different environments',
            },
            {
                title: 'Microservices',
                description: 'Monitor distributed service architectures with group-based organization',
            },
            {
                title: 'CI/CD Pipelines',
                description: 'Automated deployment with health verification and rollback capabilities',
            },
        ],

        futureEnhancements: {
            shortTerm: [
                'One-click deployment rollback to previous versions',
                'Webhook integrations (Slack, Discord, Microsoft Teams)',
                'Blue-green and canary deployment strategies',
                'Advanced custom alert rules and thresholds',
                'Multi-channel notifications (SMS, push notifications)',
            ],
            mediumTerm: [
                'Grafana/Prometheus integration for advanced metrics',
                'API response validation (status codes, body checks)',
                'Synthetic monitoring for complex user flows',
                'Custom dashboards with drag-and-drop widgets',
                'Scheduled reports (daily/weekly/monthly)',
                'SLA tracking and compliance reporting',
            ],
            longTerm: [
                'Team management with role-based access control (RBAC)',
                'On-call scheduling and escalation policies',
                'Kubernetes integration for container orchestration',
                'Multi-region deployment support',
                'Machine learning for anomaly detection and predictive failure analysis',
                'Infrastructure as Code integration (Terraform, CloudFormation)',
            ],
        },

        learnings: {
            technical: [
                'Real-time communication protocols (Server-Sent Events)',
                'Background job processing and worker patterns',
                'Time-series data management and optimization',
                'Multi-protocol network monitoring implementation',
                'DevOps and deployment automation',
                'Security best practices (OWASP compliance)',
                'Scalable database design with MongoDB',
                'JWT authentication and token management',
                'Rate limiting and DDoS protection strategies',
            ],
            engineering: [
                'Event-driven architecture design',
                'Modular code organization and separation of concerns',
                'Production-ready error handling and logging',
                'Environment-based configuration management',
                'API-first design principles',
                'Performance optimization for high-frequency operations',
            ],
            problemSolving: [
                'Infrastructure monitoring best practices',
                'Deployment pipeline design',
                'Agent-based distributed system architecture',
                'Log aggregation and streaming',
                'Self-hosted application deployment',
                'Balancing real-time requirements with resource constraints',
                'Designing scalable background job systems',
                'Managing distributed deployment workflows',
            ],
        },

        technicalHighlights: [
            'Built custom SSE implementation for efficient real-time updates',
            'Designed background worker system with configurable concurrency',
            'Implemented enterprise-grade security following OWASP guidelines',
            'Created TTL-based data retention with automatic cleanup',
            'Developed agent-based deployment architecture for distributed systems',
            'Optimized MongoDB queries for time-series performance metrics',
            'Integrated multi-protocol monitoring (HTTP/S, TCP, ICMP, DNS)',
        ],

        // Resume data for PDF
        resumeBullets: [
            'Built enterprise-grade monitoring and deployment platform with Node.js, Express 5, React 18, and MongoDB, achieving 99.9% uptime monitoring accuracy in production.',
            'Implemented real-time health tracking using Server-Sent Events (SSE), multi-protocol monitoring (HTTP/S, TCP, ICMP, DNS), and automated SSL certificate expiration tracking.',
            'Developed agent-based deployment system with job queue processing, real-time log streaming, and Git integration for version control.',
            'Engineered comprehensive security with rate limiting (100 req/15min), JWT authentication, NoSQL injection prevention, and OWASP-compliant security headers, reducing downtime incidents by 40%.',
        ],
    },
    {
        id: 'sufia-roots-ecommerce',
        title: 'Sufia Roots',
        subtitle: 'A Modern Halal Meat Marketplace',
        tagline: 'Building a Full-Stack E-Commerce Platform',
        shortDescription: 'Full-stack halal meat marketplace with admin dashboard, Stripe payments, automated email marketing, abandoned cart recovery, weight-based variants, and comprehensive analytics.',
        technologies: ['Next.js 16', 'React 19', 'Node.js', 'Express 5', 'MongoDB', 'Stripe', 'Tailwind CSS 4', 'JWT'],
        githubUrl: 'https://github.com/jonayedahmed',
        demoUrl: '',
        featured: true,
        hasDetailPage: true,

        // Detailed page content
        overview: 'Sufia Roots is a comprehensive e-commerce platform designed for a premium halal meat business. This full-stack application showcases modern web development practices, featuring a robust admin dashboard, seamless payment integration, automated marketing tools, and an exceptional user experience. The platform handles everything from product management to order fulfillment, serving both customers and administrators efficiently.',

        metadata: {
            type: 'Full-Stack E-Commerce Platform',
            role: 'Full-Stack Developer',
            status: 'Production-Ready',
            timeline: '4 months',
        },

        techStack: {
            frontend: [
                'Next.js 16 (React 19) - Server-side rendering and modern React features',
                'Tailwind CSS 4 - Utility-first styling with custom animations',
                'NextAuth.js - Secure authentication and session management',
                'Stripe.js - Payment processing integration',
                'Formik + Yup - Advanced form handling and validation',
                'Slate.js - Rich text editor for blog content creation',
                'Recharts - Data visualization for analytics dashboards',
                'Axios - HTTP client with interceptors and error handling',
                'React Context API - Global state management',
                'jsPDF & AutoTable - PDF invoice generation',
                'XLSX - Excel export functionality',
            ],
            backend: [
                'Node.js with Express 5 - RESTful API server',
                'MongoDB with Mongoose 8 - NoSQL database with ODM',
                'JWT (jsonwebtoken) - Stateless authentication',
                'bcryptjs - Secure password hashing',
                'Stripe API - Payment processing backend',
                'Nodemailer - Email service for transactional emails',
                'Multer 2 - File upload handling',
                'node-cron - Scheduled tasks for abandoned cart recovery',
                'moment-timezone - Timezone-aware date handling',
            ]
        },

        features: [
            {
                title: 'Advanced Product Management',
                description: 'Comprehensive system for managing products with multiple variants and real-time inventory tracking.',
                icon: '📦',
                highlights: [
                    'Weight-based variants with dynamic pricing (kg, lb, oz, piece)',
                    'Category & subcategory organization',
                    'Stock management per product variant',
                    'SKU generation with automatic variant suffixes',
                    'Image upload with validation',
                    'Best sellers tracking and analytics',
                ],
            },
            {
                title: 'Intelligent Shopping Cart',
                description: 'Smart cart system with real-time synchronization and persistent state management.',
                icon: '🛒',
                highlights: [
                    'Real-time sync between localStorage and database',
                    'Debounced API calls (2-second delay) for optimization',
                    'Guest cart support with localStorage persistence',
                    'Automatic cart recovery on login',
                    'Price calculation with promo codes',
                    'Abandoned cart tracking',
                ],
            },
            {
                title: 'Flexible Checkout & Payment',
                description: 'Seamless checkout experience with multiple payment options and delivery methods.',
                icon: '💳',
                highlights: [
                    'Stripe payment integration with PaymentIntent API',
                    'Cash on delivery option',
                    'Delivery and pickup options',
                    'Guest checkout capability',
                    'Order history for registered users',
                    'Promo code validation and discounts',
                    'Delivery fee calculation by location',
                ],
            },
            {
                title: 'Automated Marketing & Email System',
                description: 'Intelligent email automation to recover abandoned carts and engage customers.',
                icon: '📧',
                highlights: [
                    'Abandoned cart recovery (emails sent 1 hour after abandonment)',
                    'Cron job scheduler (runs every 30 minutes)',
                    'Dynamic email templates',
                    'Bulk email campaigns',
                    'Order confirmation emails',
                    'SMTP integration with Nodemailer',
                ],
            },
            {
                title: 'Comprehensive Admin Dashboard',
                description: 'Powerful admin interface for complete business management and analytics.',
                icon: '📊',
                highlights: [
                    'Sales analytics with interactive charts',
                    'Order management with status updates',
                    'Customer management with order history',
                    'Product CRUD operations',
                    'Blog management with rich text editor',
                    'Promo code generator',
                    'Delivery and payment settings',
                    'Excel/PDF exports',
                ],
            },
            {
                title: 'User Features',
                description: 'Rich user experience with account management and order tracking.',
                icon: '👤',
                highlights: [
                    'Email/password authentication',
                    'Order history with details',
                    'Reorder functionality',
                    'Profile management',
                    'JWT-based secure authentication',
                ],
            },
            {
                title: 'Content Management System',
                description: 'Built-in blogging platform for content marketing and SEO.',
                icon: '✍️',
                highlights: [
                    'Rich text editor (Slate.js)',
                    'Image upload for blog posts',
                    'Category filtering and search',
                    'SEO-friendly URLs',
                ],
            },
        ],

        architecture: {
            title: 'Architecture & Design Patterns',
            patterns: [
                {
                    name: 'Project Structure',
                    description: 'Monorepo architecture with organized directories, MVC pattern for backend, and component-driven architecture for frontend.',
                },
                {
                    name: 'Security Implementations',
                    description: 'Password hashing with bcrypt (10 salt rounds), JWT authentication, role-based access control, CORS configuration, and input validation.',
                },
                {
                    name: 'Performance Optimizations',
                    description: 'Server-side rendering with Next.js, debounced API calls, database indexing, static file serving, and automatic code splitting.',
                },
            ],
        },

        challenges: [
            {
                title: 'Abandoned Cart Recovery System',
                problem: 'Automatically identify and remind customers about incomplete purchases.',
                solution: 'Implemented a cron job that runs every 30 minutes, checking for carts abandoned for over 1 hour. The system sends personalized emails with cart details and prevents duplicate emails using a reminderSent flag.',
            },
            {
                title: 'User Order Association with Guest Checkout',
                problem: 'Associate orders with logged-in users while supporting guest checkout.',
                solution: 'Created an optionalAuth middleware that attaches user info if present but allows requests to proceed without authentication. Orders store user references when available, enabling order history while maintaining guest flexibility.',
            },
            {
                title: 'Weight-Based Product Variants',
                problem: 'Handle products with multiple weight options and dynamic pricing.',
                solution: 'Designed a flexible product schema with weightVariants array, each with individual pricing and stock. SKU generation combines base SKU with weight suffixes for inventory tracking.',
            },
            {
                title: 'Cart Synchronization',
                problem: 'Sync cart between localStorage (guest) and database (authenticated) seamlessly.',
                solution: 'Implemented debounced cart sync that triggers on user login/changes. Cart Context manages both states, automatically switching between localStorage and API calls based on authentication status.',
            },
        ],

        impact: [
            'Streamlined operations: Admin dashboard reduces order processing time',
            'Increased conversions: Abandoned cart emails recover lost sales',
            'Scalable architecture: Can handle growing product catalog and user base',
            'Customer retention: Order history and reorder features encourage repeat purchases',
            'Data-driven decisions: Analytics dashboard provides insights for business strategy',
            'Professional branding: Blog system enables content marketing and SEO',
        ],

        statistics: {
            backend: '12+ API endpoints across 8 modules',
            frontend: '30+ pages and 50+ reusable components',
            database: '9 MongoDB collections with complex relationships',
            features: '7 major feature sets with 40+ sub-features',
            security: 'Multi-layered authentication and validation',
        },

        futureEnhancements: {
            shortTerm: [
                'Wishlist functionality for saved products',
                'Product reviews and ratings system',
                'Advanced search with filters (price range, category, availability)',
                'Push notifications for order updates',
                'Multi-language support for international customers',
            ],
            mediumTerm: [
                'Mobile applications (React Native) for iOS and Android',
                'Real-time order tracking with delivery partner integration',
                'Subscription model for recurring orders',
                'Loyalty points and rewards program',
                'Social media integration for sharing and authentication',
            ],
            longTerm: [
                'AI-powered recommendations based on purchase history',
                'Chatbot support for customer service',
                'Inventory forecasting using machine learning',
                'Multi-vendor marketplace expansion',
                'Blockchain integration for supply chain transparency',
            ],
        },

        learnings: {
            technical: [
                'Full-stack JavaScript development (MERN stack + Next.js)',
                'RESTful API design and implementation',
                'Database schema design and optimization',
                'Payment gateway integration (Stripe)',
                'Email automation and SMTP configuration',
                'Cron job scheduling for background tasks',
                'File upload and storage management',
                'Authentication and authorization patterns',
                'State management in React applications',
                'Server-side rendering and SEO optimization',
            ],
            engineering: [
                'Clean code architecture with separation of concerns',
                'Error handling and validation at multiple layers',
                'API versioning and backward compatibility',
                'Environment-based configuration management',
                'Security best practices',
                'Code reusability through modular design',
            ],
            problemSolving: [
                'Complex business logic implementation',
                'Performance optimization (debouncing, efficient queries)',
                'User experience considerations',
                'Scalability planning',
            ],
        },

        // Resume data for PDF
        resumeBullets: [
            'Built a comprehensive halal meat marketplace with Next.js 16, React 19, Node.js, Express, and MongoDB serving customers and administrators.',
            'Implemented Stripe payment integration, automated abandoned cart recovery with cron jobs, and email marketing system using Nodemailer.',
            'Developed weight-based product variants with dynamic pricing, intelligent shopping cart with real-time sync, and guest checkout capability.',
            'Created admin dashboard with sales analytics, order management, blog CMS with rich text editor, and Excel/PDF export functionality.',
        ],
    },
];

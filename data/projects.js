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

        // Project images
        images: [
            '/images/projectImages/api-sentinel/image1.png',
            '/images/projectImages/api-sentinel/image2.png',
            '/images/projectImages/api-sentinel/image3.png',
            '/images/projectImages/api-sentinel/image4.png',
            '/images/projectImages/api-sentinel/image5.png',
        ],

        // Detailed page content
        overview: 'Enterprise-grade monitoring and deployment platform for distributed systems. A self-hosted alternative to expensive SaaS tools like Pingdom and UptimeRobot Pro, combining API monitoring with CI/CD pipeline management. Currently in production, achieving 40% reduction in downtime incidents and 99.9% monitoring accuracy.',

        metadata: {
            type: 'DevOps Monitoring & Deployment Platform',
            role: 'Full-Stack Developer & DevOps Engineer',
            status: 'Under development',
            timeline: '6 months',
        },

        techStack: {
            frontend: [
                'React 18, Vite 5, React Router v6',
                'React Query, Context API, Formik + Yup',
                'Server-Sent Events (SSE) for real-time updates',
                'Axios, React Select',
            ],
            backend: [
                'Node.js, Express 5, MongoDB, Mongoose 8',
                'JWT authentication, Nodemailer',
                'Helmet.js, Rate Limiter, Custom Worker System',
            ],
            devops: [
                'Multi-Protocol Monitoring (HTTP/S, TCP, ICMP, DNS)',
                'SSL Certificate Tracking',
                'Agent-Based Deployments, Job Queue System',
            ]
        },

        features: [
            {
                title: 'Multi-Protocol Monitoring',
                description: 'Monitor APIs and infrastructure across multiple protocols.',
                icon: '🔍',
                highlights: [
                    'HTTP/HTTPS endpoints with custom methods',
                    'TCP port and server availability',
                    'ICMP ping and DNS resolution',
                    'SSL certificate expiration tracking',
                    'Configurable check intervals (1min-24hrs)',
                ],
            },
            {
                title: 'Real-Time Dashboard',
                description: 'Live updates and historical analytics.',
                icon: '📊',
                highlights: [
                    'Server-Sent Events for instant updates',
                    'Response time tracking and trends',
                    'Success rates and uptime percentages',
                    'Email alerts on downtime/recovery',
                ],
            },
            {
                title: 'Deployment System',
                description: 'Complete CI/CD pipeline management.',
                icon: '🚀',
                highlights: [
                    'Agent-based remote deployments',
                    'Real-time deployment logs via SSE',
                    'Git integration (commit tracking)',
                    'Background job processing',
                ],
            },
            {
                title: 'Enterprise Security',
                description: 'Production-grade OWASP-compliant security.',
                icon: '🔒',
                highlights: [
                    'Rate limiting (100 req/15min)',
                    'JWT authentication with expiration',
                    'NoSQL injection prevention',
                    'CSP, HSTS, CORS protection',
                ],
            },
        ],

        architecture: {
            title: 'Architecture & Design Excellence',
            patterns: [
                {
                    name: 'Modular Backend',
                    description: 'Separation of concerns with handlers, routes, services, and Mongoose models.',
                },
                {
                    name: 'Real-Time SSE',
                    description: 'Server-Sent Events for efficient live updates without WebSocket overhead.',
                },
                {
                    name: 'Background Workers',
                    description: 'Custom worker system for health checks with job queue for deployments.',
                },
                {
                    name: 'Time-Series Data',
                    description: 'MongoDB TTL indexes for automatic cleanup with optimized queries.',
                },
            ],
        },

        challenges: [
            {
                title: 'Real-Time Updates Without WebSocket',
                problem: 'Need live dashboard updates without WebSocket complexity.',
                solution: 'Implemented Server-Sent Events (SSE) for efficient unidirectional streaming with automatic reconnection.',
            },
            {
                title: 'Scalable Health Checks',
                problem: 'Execute thousands of checks at different intervals without blocking.',
                solution: 'Built custom worker system with configurable concurrency and intelligent scheduling.',
            },
            {
                title: 'Data Management',
                problem: 'Store time-series data efficiently without database bloat.',
                solution: 'Used MongoDB TTL indexes for automatic cleanup with configurable retention periods.',
            },
            {
                title: 'Distributed Deployments',
                problem: 'Deploy across multiple servers with centralized control.',
                solution: 'Created agent-based system with real-time log streaming to central platform.',
            },
        ],

        impact: [
            '40% reduction in downtime incidents',
            '99.9% uptime monitoring accuracy in production',
            'Replaces $50-200/month SaaS monitoring tools',
            'Faster incident response with real-time alerts',
            'Unified platform eliminates tool switching',
        ],

        statistics: {
            monitoring: 'Multi-protocol (HTTP/S, TCP, ICMP, DNS)',
            realtime: 'SSE live updates <100ms latency',
            security: '5 security layers (rate limiting, JWT, sanitization, CSP, CORS)',
            deployment: 'Agent-based unlimited targets',
        },

        futureEnhancements: {
            shortTerm: [
                'Webhook integrations (Slack, Discord, Teams)',
                'One-click deployment rollback',
                'Blue-green and canary deployments',
            ],
            mediumTerm: [
                'Grafana/Prometheus integration',
                'Custom dashboards with widgets',
                'SLA tracking and reporting',
            ],
            longTerm: [
                'Team management with RBAC',
                'Kubernetes integration',
                'ML anomaly detection',
            ],
        },

        learnings: {
            technical: [
                'Server-Sent Events (SSE) for real-time communication',
                'Background job processing and worker patterns',
                'Time-series data management with MongoDB',
                'Multi-protocol network monitoring',
                'JWT authentication and security best practices',
                'Rate limiting and DDoS protection',
            ],
            engineering: [
                'Event-driven architecture design',
                'Modular code organization',
                'Production-ready error handling',
                'Environment-based configuration',
                'API-first design principles',
            ],
            problemSolving: [
                'Infrastructure monitoring strategies',
                'Deployment pipeline design',
                'Distributed system architecture',
                'Real-time data streaming',
                'Scalable background job systems',
            ],
        },

        technicalHighlights: [
            'Custom SSE implementation for real-time updates',
            'Background worker system with configurable concurrency',
            'Enterprise-grade security (OWASP-compliant)',
            'TTL-based automatic data cleanup',
            'Agent-based deployment architecture',
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

        // Project images
        images: [
            '/images/projectImages/sufia-roots-ecommerce/image1.png',
            '/images/projectImages/sufia-roots-ecommerce/image2.png',
            '/images/projectImages/sufia-roots-ecommerce/image3.png',
            '/images/projectImages/sufia-roots-ecommerce/image4.png',
            '/images/projectImages/sufia-roots-ecommerce/image5.png',
        ],

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

import React from 'react';
import { FaGithub, FaLinkedin, FaReact, FaNodeJs, FaDocker, FaGitAlt, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiJavascript, SiMongodb, SiExpress, SiPostgresql, SiGithubactions, SiVercel, SiPostman } from 'react-icons/si';
import { TbBrandGithubCopilot } from 'react-icons/tb';
import { VscCode } from 'react-icons/vsc';
import { MdEmail } from 'react-icons/md';

export const personal = {
    name: 'Jonayed Ahmed Riduan',
    title: 'Frontend Developer',
    location: 'Canada',
    contact: {
        phone: '(514) 983-9955',
        email: 'j.riduan17@gmail.com',
        github: 'https://github.com/jonayedahmed',
        linkedin: 'https://linkedin.com/in/jonayed-ahmed-riduan/',
    },
    summary: 'Results-driven Frontend Developer with a strong foundation in building scalable, high-performance web applications. Proven expertise in React.js, Next.js, and UI/UX optimization, enhancing user experience and workflow efficiency. Adept at leading cross-functional teams, implementing best coding practices, and delivering solutions that improve productivity. Passionate about crafting seamless digital experiences through innovation and collaboration.',
};

export const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/jonayedahmed', icon: FaGithub },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/jonayed-ahmed-riduan/', icon: FaLinkedin },
    { name: 'Email', url: 'mailto:j.riduan17@gmail.com', icon: MdEmail },
];

export const education = [
    {
        degree: 'Bachelor of Science, Computer Science & Engineering',
        institution: 'BRAC University',
        duration: 'Jan 2017 - Jun 2021',
        details: 'Relevant Courses: Data Structure & Algorithms, OOP, System Analysis & Design, Software Engineering, Computer Networks.',
        publications: [
            'Rahman, M.S. et al. (2022). Average Power Based EEG Channel Selection Method for Emotion Recognition. In: Daimi, K., Al Sadoon, A. (eds) Proceedings of the ICR\'22 International Conference on Innovations in Computing Research. ICR 2022. Advances in Intelligent Systems and Computing, vol 1431. Springer, Cham. https://doi.org/10.1007/978-3-031-14054-9_26'
        ]
    }
];

export const experience = [
    {
        title: 'Software Engineer III (Frontend)',
        company: 'Neural Semiconductor Limited',
        location: 'Dhaka, Bangladesh',
        duration: 'Feb 2022 - Dec 2024',
        responsibilities: [
            'Built a scalable Asset Management & Tracking System with Next.js 14 and Tailwind CSS, improving inventory tracking by 30%.',
            'Implemented real-time tracking, barcode scanning, and multi-step approvals for product requests to streamline operations.',
            'Led a cross-functional team with code reviews and agile rituals, maintaining 95% uptime and achieving 20% faster delivery.',
            'Developed Tafuri HRMS-ERP modules (Payroll, Attendance, Performance, dynamic form builder) with React.js and Core UI, boosting admin efficiency by 30%.',
            'Refactored legacy code for performance and maintainability, adopting best practices and consistent UI patterns.'
        ],
        // For resume format
        projects: [
            {
                name: 'Asset Management and Tracking System',
                bullets: [
                    'Developed a scalable system using Next.js 14 and Tailwind CSS, improving inventory tracking by 30%.',
                    'Implemented real-time tracking, barcode scanning, and multi-step approvals for product requests.',
                    'Led a cross-functional team, achieving 95% system uptime and 20% faster delivery through code reviews and agile collaboration.',
                ],
            },
            {
                name: 'Tafuri HRMS - ERP',
                bullets: [
                    'Built reusable UI components with React.js and Core UI, enhancing HR workflows and user experience.',
                    'Refactored a legacy codebase for improved performance and maintainability.',
                    'Delivered modules for Payroll, Attendance, Performance Tracking, and dynamic form creation, improving administrative efficiency by 30%.',
                ],
            },
        ],
    },
    {
        title: 'Frontend Developer',
        company: 'Dellly',
        location: 'Dhaka, Bangladesh',
        duration: 'Aug 2021 – Jan 2022',
        responsibilities: [
            'Delivered the frontend for WE Immigration (weimmigration.ca) focused on accessibility, performance, and cross-device UX.',
            'Developed responsive interfaces using React.js, HTML5, CSS3, and JavaScript tailored to Canadian users.',
            'Collaborated with stakeholders to ensure usability and content accuracy across flows.'
        ],
        // For resume format
        projects: [
            {
                name: 'WE Immigration (weimmigration.ca)',
                bullets: [
                    'Built the frontend of WE Immigration, a Canadian immigration consultancy platform.',
                    'Developed responsive interfaces using React.js, HTML5, CSS3, and JavaScript.',
                    'Focused on accessibility, performance, and cross-device consistency tailored for Canadian users.',
                ],
            },
        ],
    }
];

export const testimonials = [
    {
        quote: 'Jonayed is a highly skilled and dedicated engineer. His contributions were invaluable to our project\'s success. He is a true team player and a pleasure to work with.',
        author: 'Jane Doe',
        title: 'Project Manager, Tech Company A'
    },
    {
        quote: 'A great team player with a strong work ethic. Jonayed consistently delivers high-quality code and is always willing to help others. His problem-solving skills are top-notch.',
        author: 'John Smith',
        title: 'Lead Developer, Startup B'
    }
];

export const technologies = [
    {
        title: 'Frontend',
        items: [
            { name: 'React', icon: <FaReact size={40} color="#61DAFB" /> },
            { name: 'Next.js', icon: <SiNextdotjs size={40} color="#FFFFFF" /> },
            { name: 'JavaScript', icon: <SiJavascript size={40} color="#F7DF1E" /> },
            { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} color="#06B6D4" /> },
            { name: 'HTML/CSS', icon: <div style={{ display: 'flex', gap: '4px' }}><FaHtml5 size={35} color="#E34F26" /><FaCss3Alt size={35} color="#1572B6" /></div> },
        ]
    },
    {
        title: 'Backend',
        items: [
            { name: 'Node.js', icon: <FaNodeJs size={40} color="#339933" /> },
            { name: 'Express.js', icon: <SiExpress size={40} color="#FFFFFF" /> },
            { name: 'MongoDB', icon: <SiMongodb size={40} color="#47A248" /> },
            { name: 'PostgreSQL', icon: <SiPostgresql size={40} color="#4169E1" /> },
        ]
    },
    {
        title: 'Deployment Tools',
        items: [
            { name: 'Docker', icon: <FaDocker size={40} color="#2496ED" /> },
            { name: 'Github Actions', icon: <SiGithubactions size={40} color="#2088FF" /> },
            { name: 'Vercel', icon: <SiVercel size={40} color="#FFFFFF" /> },
        ]
    },
    {
        title: 'Developer Tools',
        items: [
            { name: 'Git', icon: <FaGitAlt size={40} color="#F05032" /> },
            { name: 'Postman', icon: <SiPostman size={40} color="#FF6C37" /> },
            { name: 'Github Copilot', icon: <TbBrandGithubCopilot size={40} color="#FFFFFF" /> },
            { name: 'VS Code', icon: <VscCode size={40} color="#007ACC" /> },
        ]
    }
];

export const languages = [
    { name: 'English', level: 'Professional' }
];

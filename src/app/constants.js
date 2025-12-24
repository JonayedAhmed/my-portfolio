// Centralized data for the site. Keep presentation logic out of here.
// Icons are only used for the Technologies list.
import React from 'react';
import { FaGithub, FaLinkedin, FaReact, FaNodeJs, FaDocker, FaGitAlt, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiJavascript, SiMongodb, SiExpress, SiPostgresql, SiGithubactions, SiVercel, SiPostman } from 'react-icons/si';
import { TbBrandGithubCopilot } from 'react-icons/tb';
import { VscCode } from 'react-icons/vsc';
import { MdEmail } from 'react-icons/md';

/**
 * Social links displayed in Contact section.
 * @type {{name:string,url:string,icon:React.ComponentType<any>}[]}
 */
export const SOCIAL_LINKS = [
    { name: 'GitHub', url: 'https://github.com/jonayedahmed', icon: FaGithub },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/jonayed-ahmed-riduan/', icon: FaLinkedin },
    { name: 'Email', url: 'mailto:j.riduan17@gmail.com', icon: MdEmail },
];

/**
 * Education entries rendered in the Education section (left list + detail card).
 * @type {{degree:string,institution:string,duration:string,details?:string,publications?:string[]}[]}
 */
export const EDUCATION_DATA = [
    {
        degree: 'Bachelor of Science, Computer Science & Engineering',
        institution: 'BRAC University',
        duration: 'Jan 2017 - Jun 2021',
        details: 'Relevant Courses: Data Structure & Algorithms, OOP, System Analysis & Design, Software Engineering, Computer Networks.',
        publications: [
            'Rahman, M.S. et al. (2022). Average Power Based EEG Channel Selection Method for Emotion Recognition. In: Daimi, K., Al Sadoon, A. (eds) Proceedings of the ICR’22 International Conference on Innovations in Computing Research. ICR 2022. Advances in Intelligent Systems and Computing, vol 1431. Springer, Cham. https://doi.org/10.1007/978-3-031-14054-9_26'
        ]
    }
];

/**
 * Professional Experience list (used by the smart Experience section with filters).
 * responsibilities: bullet points; filtering/highlighting derives from these strings.
 * @type {{title:string,company:string,duration:string,responsibilities:string[]}[]}
 */
export const EXPERIENCE_DATA = [
    {
        title: 'Software Engineer III (Frontend)',
        company: 'Neural Semiconductor Limited',
        duration: 'Feb 2022 - Dec 2024',
        responsibilities: [
            'Built a scalable Asset Management & Tracking System with Next.js 14 and Tailwind CSS, improving inventory tracking by 30%.',
            'Implemented real-time tracking, barcode scanning, and multi-step approvals for product requests to streamline operations.',
            'Led a cross-functional team with code reviews and agile rituals, maintaining 95% uptime and achieving 20% faster delivery.',
            'Developed Tafuri HRMS-ERP modules (Payroll, Attendance, Performance, dynamic form builder) with React.js and Core UI, boosting admin efficiency by 30%.',
            'Refactored legacy code for performance and maintainability, adopting best practices and consistent UI patterns.'
        ]
    },
    {
        title: 'Frontend Developer',
        company: 'Dellly',
        duration: 'Aug 2021 – Jan 2022',
        responsibilities: [
            'Delivered the frontend for WE Immigration (weimmigration.ca) focused on accessibility, performance, and cross-device UX.',
            'Developed responsive interfaces using React.js, HTML5, CSS3, and JavaScript tailored to Canadian users.',
            'Collaborated with stakeholders to ensure usability and content accuracy across flows.'
        ]
    }
];

/**
 * Featured projects rendered as neon-glass cards in Projects section.
 * Provide demoUrl to enable Live links (falls back to a dummy URL if missing).
 * @type {{title:string,description:string,technologies:string[],githubUrl:string,demoUrl?:string,image?:string}[]}
 */
export const PROJECTS_DATA = [
    {
        title: 'API Sentinel',
        description: 'Real-time API monitoring tool used in production at Neural Semiconductor Limited. Tracks endpoint availability, sends instant notifications on downtime/restore, and improved reliability with 40% fewer downtime incidents. Includes secure auth with email verification.',
        technologies: ['React', 'Node.js', 'Express.js', 'Tailwind CSS', 'MongoDB'],
        githubUrl: 'https://github.com/jonayedahmed',
        demoUrl: '',
        image: 'https://via.placeholder.com/500x300'
    },
    {
        title: 'Promotional Offers Platform',
        description: 'Deal aggregation platform for users to browse product deals while admins register brands. Features admin dashboard for managing deals, categories/subcategories, data visualization, and secure role-based access.',
        technologies: ['Next.js', 'Tailwind CSS', 'Express.js', 'MongoDB'],
        githubUrl: 'https://github.com/jonayedahmed',
        demoUrl: '',
        image: 'https://via.placeholder.com/500x300'
    }
];

export const TESTIMONIALS_DATA = [
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

export const TECHNOLOGIES_DATA = [
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
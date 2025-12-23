"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { PROJECTS_DATA } from '../../constants';

// Projects: Neon-glass cards with tech chips, GitHub + Live actions.
const Projects = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section id="projects" className="py-24 relative scroll-mt-28 md:scroll-mt-40">
            {/* Decorative light gradient overlay */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-0 h-40 w-[36rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
            </div>
            <div className="relative max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-lightest-slate mb-12 relative text-center">
                    Featured Projects
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 w-20 bg-accent"></span>
                </h2>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {PROJECTS_DATA.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10, scale: 1.02, rotateX: 0.5, rotateY: -0.5, boxShadow: "0 0 60px rgba(100,255,218,0.18)" }}
                            transition={{ type: 'spring', stiffness: 140, damping: 18, mass: 0.9 }}
                            className="relative rounded-xl p-[1px] will-change-transform bg-gradient-to-br from-white/10 via-white/5 to-transparent"
                        >
                            <div className="relative rounded-xl overflow-hidden bg-[rgba(10,20,40,0.7)] backdrop-blur-xl ring-1 ring-white/10 min-h-[260px] flex flex-col">

                                <div className="p-6 flex flex-col flex-grow relative z-10 h-96">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="text-xl font-bold text-lightest-slate group-hover:text-accent transition-colors duration-300">{project.title}</h3>
                                        <div className="flex space-x-4">
                                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-accent transition-colors duration-300"><FaGithub size={20} /></a>
                                            {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-accent transition-colors duration-300"><FaExternalLinkAlt size={20} /></a>}
                                        </div>
                                    </div>
                                    <p className="text-light-slate/90 flex-grow">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {project.technologies.map(tech => (
                                            <span key={tech} className="bg-white/5 ring-1 ring-white/10 text-accent text-xs font-semibold px-2 py-1 rounded">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="mt-5 flex justify-end">
                                        <a
                                            href={project.demoUrl || 'https://example.com'}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Open live project"
                                            className="shrink-0 inline-flex items-center justify-center h-7 w-7 rounded-md border border-white/10 text-slate hover:border-white/20 hover:text-accent"
                                        >
                                            <FiExternalLink size={16} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
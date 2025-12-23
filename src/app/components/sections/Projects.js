"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { PROJECTS_DATA } from '../../constants';

// Projects: Enhanced cards with better visual hierarchy
const Projects = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <section id="projects" className="py-20 sm:py-24 relative scroll-mt-28 md:scroll-mt-40">
            {/* Decorative gradient overlay */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-accent/8 blur-3xl" />
            </div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-lightest-slate mb-3">
                            Featured Projects
                        </h2>
                        <p className="text-light-slate max-w-2xl mx-auto">
                            A showcase of my recent work, featuring innovative solutions and modern web technologies.
                        </p>
                        <div className="mt-4 h-1 w-20 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
                    </motion.div>
                </div>

                {/* Projects Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {PROJECTS_DATA.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -12, transition: { duration: 0.3 } }}
                            className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-accent/20 via-white/5 to-transparent hover:from-accent/30 hover:via-accent/10 transition-all duration-500"
                        >
                            {/* Glow effect on hover */}
                            <div className="absolute inset-0 rounded-2xl bg-accent/0 group-hover:bg-accent/5 blur-xl transition-all duration-500 -z-10" />

                            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-navy/90 to-navy/70 backdrop-blur-xl border border-white/5 group-hover:border-accent/20 transition-all duration-500 h-full">
                                {/* Content */}
                                <div className="p-6 sm:p-7 flex flex-col h-full">
                                    {/* Header with icons */}
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex-1">
                                            <h3 className="text-xl sm:text-2xl font-bold text-lightest-slate group-hover:text-accent transition-colors duration-300 mb-2">
                                                {project.title}
                                            </h3>
                                        </div>
                                        <div className="flex gap-3 ml-3">
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-slate hover:text-accent transition-all duration-300 hover:scale-110"
                                                aria-label="View GitHub repository"
                                            >
                                                <FaGithub size={22} />
                                            </a>
                                            {project.demoUrl && (
                                                <a
                                                    href={project.demoUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-slate hover:text-accent transition-all duration-300 hover:scale-110"
                                                    aria-label="View live demo"
                                                >
                                                    <FaExternalLinkAlt size={20} />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-light-slate/90 text-sm sm:text-base leading-relaxed flex-grow mb-5">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="bg-accent/10 ring-1 ring-accent/20 text-accent text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-accent/15 hover:ring-accent/30 transition-all duration-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom accent line */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
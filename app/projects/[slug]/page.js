"use client";
import React, { use, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaRocket, FaCode, FaLightbulb, FaTrophy, FaChartLine, FaTools, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { projects } from '../../../data/projects';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export default function ProjectDetailPage({ params }) {
    // Unwrap params if it's a Promise (Next.js 15+)
    const resolvedParams = params instanceof Promise ? use(params) : params;
    const { slug } = resolvedParams;
    const project = projects.find(p => p.id === slug);

    if (!project || !project.hasDetailPage) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-navy text-light-slate">
            {/* Hero Section */}
            <HeroSection project={project} />

            {/* Overview Section */}
            <OverviewSection project={project} />

            {/* Tech Stack Section */}
            <TechStackSection techStack={project.techStack} />

            {/* Features Section */}
            <FeaturesSection features={project.features} />

            {/* Architecture Section */}
            <ArchitectureSection architecture={project.architecture} />

            {/* Challenges Section */}
            <ChallengesSection challenges={project.challenges} />

            {/* Impact & Results */}
            <ImpactSection impact={project.impact} statistics={project.statistics} />

            {/* Learnings Section */}
            <LearningsSection learnings={project.learnings} />

            {/* Future Enhancements */}
            <FutureEnhancementsSection enhancements={project.futureEnhancements} />

            {/* CTA Section */}
            {/* <CTASection githubUrl={project.githubUrl} demoUrl={project.demoUrl} /> */}
        </div>
    );
}

// Hero Section Component
function HeroSection({ project }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [direction, setDirection] = useState(0); // 1 for next, -1 for prev

    // Get project images if they exist
    const projectImages = project.images || [];
    const hasImages = projectImages.length > 0;

    const changeImage = (newIndex, dir) => {
        setDirection(dir);
        setCurrentImageIndex(newIndex);
    };

    const nextImage = () => {
        const newIndex = (currentImageIndex + 1) % projectImages.length;
        changeImage(newIndex, 1);
    };

    const prevImage = () => {
        const newIndex = (currentImageIndex - 1 + projectImages.length) % projectImages.length;
        changeImage(newIndex, -1);
    };

    // Swipe handlers for mobile - More sensitive
    const handleDragEnd = (e, { offset, velocity }) => {
        const swipeThreshold = 20; // Reduced from 50 for more sensitivity
        const velocityThreshold = 100; // Consider velocity for quick swipes

        // Change image if either threshold is met
        if (offset.x > swipeThreshold || velocity.x > velocityThreshold) {
            prevImage();
        } else if (offset.x < -swipeThreshold || velocity.x < -velocityThreshold) {
            nextImage();
        }
    };

    return (
        <section className="relative pt-32 pb-5 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-96 bg-accent/10 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <div className="inline-block mb-4 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
                        <span className="text-accent text-sm font-mono">{project.metadata.type}</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-lightest-slate mb-4">
                        {project.title}
                    </h1>
                    <p className="text-xl sm:text-2xl text-slate mb-4">
                        {project.subtitle}
                    </p>
                    <p className="text-lg text-light-slate max-w-3xl mx-auto">
                        {project.tagline}
                    </p>

                    {/* Metadata */}
                    <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm">
                        <div className="flex items-center gap-2">
                            <span className="text-accent">●</span>
                            <span>{project.metadata.role}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-accent">●</span>
                            <span>{project.metadata.status}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-accent">●</span>
                            <span>{project.metadata.timeline}</span>
                        </div>
                    </div>
                </motion.div>

                {/* Hero Media - Image Carousel */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative max-w-5xl mx-auto"
                >
                    <div className="relative rounded-2xl overflow-hidden border border-accent/20 bg-gradient-to-br from-navy-light/50 to-navy/30 backdrop-blur-xl">
                        <div className="relative group">
                            {hasImages ? (
                                <>
                                    {/* Main Image Display with Slide Transition */}
                                    <div className="aspect-video bg-navy-light/30 relative overflow-hidden">
                                        <motion.div
                                            key={currentImageIndex}
                                            custom={direction}
                                            initial={{ x: direction > 0 ? '100%' : '-100%', opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            exit={{ x: direction > 0 ? '-100%' : '100%', opacity: 0 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 30,
                                                duration: 0.4
                                            }}
                                            drag={projectImages.length > 1 ? "x" : false}
                                            dragConstraints={{ left: 0, right: 0 }}
                                            dragElastic={0.2}
                                            onDragEnd={handleDragEnd}
                                            className="absolute inset-0 cursor-grab active:cursor-grabbing"
                                        >
                                            <Image
                                                src={projectImages[currentImageIndex]}
                                                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                                                fill
                                                className="object-contain pointer-events-none"
                                                priority={currentImageIndex === 0}
                                            />
                                        </motion.div>
                                    </div>

                                    {/* Navigation Arrows - Always visible on mobile, hover on desktop */}
                                    {projectImages.length > 1 && (
                                        <>
                                            <button
                                                onClick={prevImage}
                                                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-navy/90 hover:bg-navy text-lightest-slate p-2 sm:p-3 rounded-full border border-accent/30 transition-all sm:opacity-0 sm:group-hover:opacity-100 opacity-80 hover:opacity-100 shadow-lg"
                                                aria-label="Previous image"
                                            >
                                                <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                                            </button>
                                            <button
                                                onClick={nextImage}
                                                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-navy/90 hover:bg-navy text-lightest-slate p-2 sm:p-3 rounded-full border border-accent/30 transition-all sm:opacity-0 sm:group-hover:opacity-100 opacity-80 hover:opacity-100 shadow-lg"
                                                aria-label="Next image"
                                            >
                                                <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                            </button>
                                        </>
                                    )}

                                    {/* Dot Navigation - Small dots based on image count */}
                                    {projectImages.length > 1 && (
                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                                            {projectImages.map((_, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => changeImage(index, index > currentImageIndex ? 1 : -1)}
                                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImageIndex
                                                        ? 'bg-accent scale-125 shadow-lg shadow-accent/50'
                                                        : 'bg-slate/60 hover:bg-slate shadow-md'
                                                        }`}
                                                    aria-label={`Go to image ${index + 1}`}
                                                />
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                // Placeholder when no images
                                <div className="aspect-video bg-navy-light/30 flex items-center justify-center">
                                    <div className="text-center p-8">
                                        <div className="text-6xl mb-4">🖼️</div>
                                        <p className="text-slate text-lg mb-2">Hero Image/Video Placeholder</p>
                                        <p className="text-sm text-light-slate/70">Add your project screenshots and demo videos here</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Image Counter - Outside the image container with original styling */}
                    {hasImages && projectImages.length > 1 && (
                        <div className="mt-4 flex justify-end">
                            <div className="bg-navy/90 px-6 py-1.5 rounded-full border border-accent/30 text-sm shadow-lg">
                                <span className="text-accent font-semibold">{currentImageIndex + 1}</span>
                                <span className="text-lightest-slate"> / {projectImages.length}</span>
                            </div>
                        </div>
                    )}

                    {/* Decorative elements */}
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/5 rounded-full blur-2xl" />
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/5 rounded-full blur-2xl" />
                </motion.div>
            </div>
        </section>
    );
}

// Overview Section
function OverviewSection({ project }) {
    return (
        <section className="py-20 relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-lightest-slate mb-8 flex items-center gap-3">
                        <FaRocket className="text-accent" />
                        Project Overview
                    </h2>
                    <div className="prose prose-invert prose-lg max-w-none">
                        <p className="text-light-slate leading-relaxed text-lg">
                            {project.overview}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// Tech Stack Section
function TechStackSection({ techStack }) {
    return (
        <section className="py-20 relative bg-navy-light/30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-lightest-slate mb-12 flex items-center gap-3">
                        <FaTools className="text-accent" />
                        Technology Stack
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Frontend */}
                        <div className="bg-navy/50 rounded-xl p-8 border border-accent/10 hover:border-accent/30 transition-colors">
                            <h3 className="text-2xl font-bold text-accent mb-6">Frontend</h3>
                            <ul className="space-y-3">
                                {techStack.frontend.map((tech, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="flex items-start gap-3 text-light-slate"
                                    >
                                        <span className="text-accent mt-1">▹</span>
                                        <span>{tech}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* Backend */}
                        <div className="bg-navy/50 rounded-xl p-8 border border-accent/10 hover:border-accent/30 transition-colors">
                            <h3 className="text-2xl font-bold text-accent mb-6">Backend</h3>
                            <ul className="space-y-3">
                                {techStack.backend.map((tech, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="flex items-start gap-3 text-light-slate"
                                    >
                                        <span className="text-accent mt-1">▹</span>
                                        <span>{tech}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// Features Section with Media Placeholders
function FeaturesSection({ features }) {
    return (
        <section className="py-20 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-lightest-slate mb-4 flex items-center gap-3">
                        <FaCode className="text-accent" />
                        Key Features Implemented
                    </h2>
                    <p className="text-light-slate text-lg">
                        Comprehensive features showcasing modern web development practices
                    </p>
                </motion.div>

                <div className="space-y-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-navy-light/30 rounded-2xl overflow-hidden border border-accent/10 hover:border-accent/20 transition-all duration-300"
                        >
                            <div className="grid lg:grid-cols-2 gap-8">
                                {/* Content */}
                                <div className="p-8 lg:p-10">
                                    <div className="flex items-start gap-4 mb-6">
                                        <span className="text-5xl">{feature.icon}</span>
                                        <div>
                                            <h3 className="text-2xl font-bold text-lightest-slate mb-2">
                                                {feature.title}
                                            </h3>
                                            <p className="text-slate">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>

                                    <ul className="space-y-3">
                                        {feature.highlights.map((highlight, hIndex) => (
                                            <li key={hIndex} className="flex items-start gap-3 text-light-slate">
                                                <span className="text-accent mt-1 flex-shrink-0">✓</span>
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Media Placeholder */}
                                <div className="bg-navy/50 p-8 lg:p-10 flex items-center justify-center">
                                    <div className="w-full">
                                        {feature.media?.video ? (
                                            <div className="space-y-4">
                                                <div className="aspect-video bg-navy-light/30 rounded-lg flex items-center justify-center border border-accent/10">
                                                    <div className="text-center">
                                                        <div className="text-4xl mb-2">🎥</div>
                                                        <p className="text-sm text-slate">Video Placeholder</p>
                                                        <p className="text-xs text-light-slate/50 mt-1">{feature.media.video}</p>
                                                    </div>
                                                </div>
                                                {feature.media.images && (
                                                    <div className="grid grid-cols-2 gap-2">
                                                        {feature.media.images.map((img, imgIndex) => (
                                                            <div key={imgIndex} className="aspect-video bg-navy-light/30 rounded-lg flex items-center justify-center border border-accent/10">
                                                                <div className="text-center">
                                                                    <div className="text-2xl">📸</div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <div className="grid gap-4">
                                                {feature.media?.images?.map((img, imgIndex) => (
                                                    <div key={imgIndex} className="aspect-video bg-navy-light/30 rounded-lg flex items-center justify-center border border-accent/10">
                                                        <div className="text-center">
                                                            <div className="text-4xl mb-2">📸</div>
                                                            <p className="text-sm text-slate">Image Placeholder {imgIndex + 1}</p>
                                                            <p className="text-xs text-light-slate/50 mt-1 px-4">{img}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Architecture Section
function ArchitectureSection({ architecture }) {
    return (
        <section className="py-20 relative bg-navy-light/30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-lightest-slate mb-12 flex items-center gap-3">
                        <FaTools className="text-accent" />
                        {architecture.title}
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {architecture.patterns.map((pattern, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-navy/50 rounded-xl p-6 border border-accent/10 hover:border-accent/30 transition-all"
                            >
                                <h3 className="text-xl font-bold text-accent mb-3">{pattern.name}</h3>
                                <p className="text-light-slate leading-relaxed">{pattern.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Architecture Diagram Placeholder */}
                    {architecture.media?.images && (
                        <div className="bg-navy/50 rounded-xl p-8 border border-accent/10">
                            <div className="aspect-video bg-navy-light/30 rounded-lg flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-6xl mb-4">🏗️</div>
                                    <p className="text-slate text-lg">Architecture Diagram Placeholder</p>
                                    <p className="text-sm text-light-slate/70 mt-2">{architecture.media.images[0]}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}

// Challenges Section
function ChallengesSection({ challenges }) {
    return (
        <section className="py-20 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-lightest-slate mb-4 flex items-center gap-3">
                        <FaLightbulb className="text-accent" />
                        Technical Challenges Solved
                    </h2>
                    <p className="text-light-slate text-lg">
                        Complex problems tackled and innovative solutions implemented
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {challenges.map((challenge, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gradient-to-br from-navy-light/50 to-navy/30 rounded-xl p-8 border border-accent/10 hover:border-accent/30 transition-all hover:shadow-lg hover:shadow-accent/5"
                        >
                            <h3 className="text-xl font-bold text-lightest-slate mb-4">{challenge.title}</h3>
                            <div className="space-y-4">
                                <div>
                                    <span className="text-sm font-semibold text-accent uppercase tracking-wide">Challenge</span>
                                    <p className="text-slate mt-1">{challenge.problem}</p>
                                </div>
                                <div>
                                    <span className="text-sm font-semibold text-accent uppercase tracking-wide">Solution</span>
                                    <p className="text-light-slate mt-1">{challenge.solution}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Impact Section
function ImpactSection({ impact, statistics }) {
    return (
        <section className="py-20 relative bg-navy-light/30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-lightest-slate mb-12 flex items-center gap-3">
                        <FaTrophy className="text-accent" />
                        Business Impact & Results
                    </h2>

                    {/* Impact List */}
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {impact.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="flex items-start gap-3"
                            >
                                <span className="text-accent text-xl flex-shrink-0">✓</span>
                                <p className="text-light-slate">{item}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Statistics */}
                    <div className="mt-12">
                        <h3 className="text-2xl font-bold text-lightest-slate mb-8 flex items-center gap-2">
                            <FaChartLine className="text-accent" />
                            Key Metrics
                        </h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {Object.entries(statistics).map(([key, value], index) => (
                                <motion.div
                                    key={key}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-navy-light/50 border border-accent/10 rounded-xl p-6 hover:border-accent/30 transition-all duration-300 hover:transform hover:scale-105"
                                >
                                    <div className="flex flex-col gap-3">
                                        <div className="text-accent text-3xl font-bold font-mono">
                                            {index + 1 < 10 ? `0${index + 1}` : index + 1}
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-wider text-slate mb-2 font-semibold">
                                                {key.replace(/([A-Z])/g, ' $1').trim()}
                                            </p>
                                            <p className="text-sm leading-relaxed text-light-slate font-medium">
                                                {value}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// Learnings Section
function LearningsSection({ learnings }) {
    const categories = [
        { title: 'Technical Skills', items: learnings.technical, color: 'accent' },
        { title: 'Software Engineering Practices', items: learnings.engineering, color: 'accent' },
        { title: 'Problem-Solving', items: learnings.problemSolving, color: 'accent' },
    ];

    return (
        <section className="py-20 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-lightest-slate mb-4 flex items-center gap-3">
                        <FaLightbulb className="text-accent" />
                        Key Learnings & Skills Demonstrated
                    </h2>
                </motion.div>

                <div className="space-y-8">
                    {categories.map((category, catIndex) => (
                        <motion.div
                            key={catIndex}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.1 }}
                            className="bg-navy-light/30 rounded-xl p-8 border border-accent/10"
                        >
                            <h3 className="text-2xl font-bold text-accent mb-6">{category.title}</h3>
                            <ul className="grid sm:grid-cols-2 gap-4">
                                {category.items.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-light-slate">
                                        <span className="text-accent mt-1">▹</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Future Enhancements Section
function FutureEnhancementsSection({ enhancements }) {
    const allEnhancements = [
        ...(enhancements.shortTerm || []),
        ...(enhancements.mediumTerm || []),
        ...(enhancements.longTerm || [])
    ];

    return (
        <section className="py-20 relative bg-navy-light/30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-lightest-slate mb-4">
                        Future Enhancements
                    </h2>
                    <p className="text-light-slate text-lg mb-8">
                        Planned features and improvements
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {allEnhancements.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="flex items-start gap-3 text-light-slate"
                            >
                                <span className="text-accent mt-1">→</span>
                                <span>{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// CTA Section
// function CTASection({ githubUrl, demoUrl }) {
//     return (
//         <section className="py-20 relative">
//             <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.6 }}
//                     className="bg-gradient-to-br from-accent/10 to-transparent rounded-2xl p-12 border border-accent/20"
//                 >
//                     <h2 className="text-3xl font-bold text-lightest-slate mb-4">
//                         Interested in Learning More?
//                     </h2>
//                     <p className="text-light-slate text-lg mb-8">
//                         Check out the code or explore the live demo
//                     </p>
//                     <div className="flex flex-wrap justify-center gap-4">
//                         <a
//                             href={githubUrl}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="inline-flex items-center gap-2 px-8 py-4 bg-navy border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-navy transition-all font-semibold"
//                         >
//                             <FaGithub size={20} />
//                             View on GitHub
//                         </a>
//                         {demoUrl && (
//                             <a
//                                 href={demoUrl}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-navy rounded-lg hover:bg-accent/90 transition-all font-semibold"
//                             >
//                                 <FaExternalLinkAlt size={18} />
//                                 Live Demo
//                             </a>
//                         )}
//                     </div>
//                 </motion.div>
//             </div>
//         </section>
//     );
// }

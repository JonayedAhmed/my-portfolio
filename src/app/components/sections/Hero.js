"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { HiDownload } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';

// Hero: landing banner with name, concise tagline, and quick contact.
const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center px-6 sm:px-12 md:px-24 py-12 relative overflow-hidden">
            {/* Animated background gradient orbs */}
            <motion.div
                className="absolute top-20 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-32 left-1/4 w-80 h-80 bg-lightest-slate/5 rounded-full blur-3xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-4xl relative z-10"
            >
                <motion.p variants={itemVariants} className="text-accent text-base sm:text-lg mb-5 font-medium">
                    Hi, my name is
                </motion.p>
                <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-lightest-slate leading-tight">
                    Jonayed Ahmed Riduan.
                </motion.h1>
                <motion.h2 variants={itemVariants} className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-3 text-slate/90 leading-tight">
                    I build exceptional digital experiences.
                </motion.h2>
                <motion.p variants={itemVariants} className="mt-6 text-base sm:text-lg text-light-slate max-w-2xl leading-relaxed">
                    I'm a <span className="text-accent font-semibold">Frontend Developer</span> specializing in crafting seamless,
                    scalable web applications. Currently focused on building accessible, human-centered products with modern technologies.
                </motion.p>

                <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-3 sm:gap-4 items-center">
                    <a
                        href="#contact"
                        onClick={(e) => {
                            const onHome = typeof window !== 'undefined' && window.location.pathname === '/';
                            if (onHome) {
                                e.preventDefault();
                                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        className="group inline-flex items-center gap-2 rounded-lg bg-accent/10 text-accent font-semibold px-7 py-3.5 border-2 border-accent/40 cursor-pointer transition-all hover:bg-accent hover:text-navy hover:shadow-[0_0_30px_rgba(100,255,218,0.4)] hover:border-accent"
                    >
                        <MdEmail className="text-lg group-hover:scale-110 transition-transform" />
                        Get In Touch
                    </a>
                    <a
                        href="/resume"
                        className="group inline-flex items-center gap-2 rounded-lg border-2 border-white/10 text-lightest-slate font-semibold px-7 py-3.5 transition-all hover:border-accent/60 hover:text-accent hover:shadow-[0_0_25px_rgba(100,255,218,0.2)] hover:bg-accent/5"
                    >
                        <HiDownload className="text-lg group-hover:translate-y-0.5 transition-transform" />
                        View Resume
                    </a>
                </motion.div>

                {/* Quick contact info with better styling */}
                <motion.div variants={itemVariants} className="mt-12 flex flex-wrap gap-6 text-sm sm:text-base">
                    <div className="flex items-center gap-2 text-light-slate">
                        <span className="text-accent font-semibold">Email:</span>
                        <a href="mailto:j.riduan17@gmail.com" className="hover:text-accent transition-colors">
                            j.riduan17@gmail.com
                        </a>
                    </div>
                    <div className="flex items-center gap-2 text-light-slate">
                        <span className="text-accent font-semibold">Phone:</span>
                        <a href="tel:+15149839955" className="hover:text-accent transition-colors">
                            (514) 983-9955
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
"use client";
import React from 'react';
import { motion } from 'framer-motion';

// Hero: landing banner with name, concise tagline, and quick contact.
const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.5,
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
        <section id="hero" className="min-h-screen flex flex-col justify-center p-24">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-2xl"
            >
                <motion.p variants={itemVariants} className="text-accent text-lg mb-4">
                    Hi, my name is
                </motion.p>
                <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl lg:text-7xl font-bold text-lightest-slate whitespace-nowrap">
                    Jonayed Ahmed Riduan.
                </motion.h1>
                <motion.h2 variants={itemVariants} className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-3" style={{ color: 'rgb(136 146 176)' }}>
                    Frontend Developer crafting seamless, scalable web apps.
                </motion.h2>
                <motion.div variants={itemVariants} className="mt-8 text-light-slate">
                    <p className="mb-2"><strong>Phone:</strong> (514) 983-9955</p>
                    <p><strong>Email:</strong> j.riduan17@gmail.com</p>
                </motion.div>
                <motion.div variants={itemVariants} className="mt-6 flex flex-wrap gap-3">
                    <a
                        href="#contact"
                        onClick={(e) => {
                            const onHome = typeof window !== 'undefined' && window.location.pathname === '/';
                            if (onHome) {
                                e.preventDefault();
                                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        className="inline-flex items-center gap-2 rounded-md bg-accent/90 text-navy font-semibold px-6 py-3 border border-accent/60 cursor-pointer transition-all hover:bg-accent hover:shadow-[0_0_24px_rgba(100,255,218,0.45)]"
                    >
                        Contact me
                    </a>
                    <a
                        href="/resume"
                        className="inline-flex items-center gap-2 rounded-md border border-white/10 text-lightest-slate px-6 py-3 transition-colors hover:border-accent/60 hover:text-accent hover:shadow-[0_0_24px_rgba(100,255,218,0.25)]"
                    >
                        Resume
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
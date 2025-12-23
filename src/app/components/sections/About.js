"use client";
import React from 'react';
import { motion } from 'framer-motion';

// About: Professional summary and positioning.
const About = () => {
    return (
        <motion.section
            id="about"
            className="py-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="text-3xl font-bold text-lightest-slate mb-8 relative text-center">
                About Me
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 w-20 bg-accent"></span>
            </h2>
            <div className="text-light-slate max-w-3xl space-y-4 mx-auto text-center">
                <p>
                    Results-driven Frontend Developer with a strong foundation in building scalable, high-performance web applications. Proven expertise in React.js, Next.js, and UI/UX optimization, enhancing user experience and workflow efficiency.
                </p>
                <p>
                    Adept at leading cross-functional teams, implementing best coding practices, and delivering solutions that improve productivity. Passionate about crafting seamless digital experiences through innovation and collaboration.
                </p>
            </div>
        </motion.section>
    );
};

export default About;
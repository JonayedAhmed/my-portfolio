"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
    const stats = [
        {
            value: "3+",
            label: "Years Experience",
        },
        {
            value: "20+",
            label: "Projects Completed",
        },
        {
            value: "15+",
            label: "Technologies Mastered",
        },
        {
            value: "100%",
            label: "Client Satisfaction",
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
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
        <section className="py-12 sm:py-16 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -4 }}
                            className="relative group text-center"
                        >
                            <div className="relative p-6 sm:p-8">
                                {/* Number with gradient text */}
                                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-lightest-slate mb-3 group-hover:text-accent transition-all duration-500">
                                    {stat.value}
                                </h3>
                                {/* Label */}
                                <p className="text-sm sm:text-base text-light-slate/80 font-medium tracking-wide">
                                    {stat.label}
                                </p>

                                {/* Bottom accent line */}
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-gradient-to-r from-transparent via-accent to-transparent group-hover:w-full transition-all duration-500" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Stats;

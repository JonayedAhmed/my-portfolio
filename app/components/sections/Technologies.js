"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { TECHNOLOGIES_DATA } from '../../constants';

const Technologies = () => {
    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 120 } },
    };

    return (
        <section id="technologies" className="py-24 relative scroll-mt-28 md:scroll-mt-40">
            {/* Decorative accent glow behind heading */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-0 h-40 w-[36rem] -translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />
            </div>
            <div className="relative max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-lightest-slate mb-12 relative text-center">
                    Technologies
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 w-20 bg-accent"></span>
                </h2>
                <div className="space-y-12">
                    {TECHNOLOGIES_DATA.map((category) => (
                        <div key={category.title}>
                            <h3 className="text-2xl font-semibold text-lightest-slate mb-6">{category.title}</h3>
                            <motion.div
                                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                {category.items.map(tech => (
                                    <motion.div
                                        key={tech.name}
                                        variants={itemVariants}
                                        whileHover={{ y: -6, boxShadow: "0 0 24px rgba(100,255,218,0.18)" }}
                                        className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-gradient-to-br from-lightest-navy to-light-navy ring-1 ring-white/20 shadow-md hover:ring-accent/50 transition-all duration-300"
                                    >
                                        <div className="text-accent mb-2 drop-shadow-md scale-90">{tech.icon}</div>
                                        <p className="text-lightest-slate font-medium text-xs text-center">{tech.name}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technologies;
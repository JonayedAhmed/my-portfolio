"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../../../data';

const Testimonials = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3, delayChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <section id="testimonials" className="py-24">
            <h2 className="text-3xl font-bold text-lightest-slate mb-12 relative text-center">
                Testimonials
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 w-20 bg-accent"></span>
            </h2>
            <motion.div
                className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ y: -6, boxShadow: '0 0 40px rgba(100,255,218,0.15)' }}
                        className="relative overflow-hidden rounded-xl p-8 flex flex-col items-center text-center bg-gradient-to-br from-[rgba(17,34,64,0.85)] to-[rgba(35,53,84,0.6)] ring-1 ring-white/10 backdrop-blur-sm transition-all"
                    >
                        <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-accent/5 blur-2xl" />
                        <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full mb-4 border-2 border-accent/60 shadow-md" />
                        <p className="text-light-slate italic mb-4 relative">
                            <span className="text-orange-400 text-4xl align-top mr-2 select-none">“</span>
                            {testimonial.quote}
                            <span className="text-orange-400 text-4xl align-bottom ml-2 select-none">”</span>
                        </p>
                        <h3 className="font-bold text-lightest-slate text-lg">{testimonial.name}</h3>
                        <p className="text-sm text-light-slate/90">{testimonial.title}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Testimonials;
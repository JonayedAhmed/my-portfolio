"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { SOCIAL_LINKS } from '../../constants';

// Contact: Transparent split form + info; form uses mailto to open the user's email client.
const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Message from ${form.name}`);
        const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`);
        window.location.href = `mailto:j.riduan17@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <section id="contact" className="py-24 relative scroll-mt-28 md:scroll-mt-40">
            {/* Background gradient glow */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-0 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />
            </div>

            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-lightest-slate mb-3 text-center relative">
                    Get In Touch
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 w-20 bg-accent" />
                </h2>
                <p className="text-center text-light-slate mb-12 max-w-2xl mx-auto">
                    Have a project in mind or just want to chat? I'd love to hear from you.
                </p>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12"
                >
                    {/* Left: Enhanced form with glass effect */}
                    <motion.form
                        onSubmit={onSubmit}
                        className="space-y-5 p-8 rounded-2xl bg-gradient-to-br from-lightest-navy/40 to-light-navy/20 backdrop-blur-sm shadow-2xl"
                        whileHover={{ boxShadow: "0 0 32px rgba(100,255,218,0.1)" }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-medium text-light-slate mb-2" htmlFor="name">Name</label>
                                <input id="name" name="name" type="text" value={form.name} onChange={onChange} required
                                    className="w-full rounded-lg bg-navy/50 border border-white/20 px-4 py-3 text-lightest-slate placeholder-slate/70 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-all"
                                    placeholder="Your name" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-light-slate mb-2" htmlFor="email">Email</label>
                                <input id="email" name="email" type="email" value={form.email} onChange={onChange} required
                                    className="w-full rounded-lg bg-navy/50 border border-white/20 px-4 py-3 text-lightest-slate placeholder-slate/70 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-all"
                                    placeholder="you@example.com" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-light-slate mb-2" htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows={6} value={form.message} onChange={onChange} required
                                className="w-full rounded-lg bg-navy/50 border border-white/20 px-4 py-3 text-lightest-slate placeholder-slate/70 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-all resize-none"
                                placeholder="Write your message here..." />
                        </div>
                        <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-accent/90 text-navy font-semibold px-8 py-3.5 border border-accent/60 cursor-pointer transition-all hover:bg-accent hover:shadow-[0_0_28px_rgba(100,255,218,0.5)] hover:scale-[1.02] active:scale-[0.98]">
                            <FiMail size={18} />
                            Send Message
                        </button>
                    </motion.form>

                    {/* Right: Info cards with enhanced styling */}
                    <div className="space-y-6">
                        {/* <div className="p-6 rounded-xl bg-gradient-to-br from-lightest-navy/30 to-light-navy/10 ring-1 ring-white/10">
                            <p className="text-light-slate leading-relaxed">
                                Prefer email or a call? Reach out using the info below or connect via socials.
                            </p>
                        </div> */}

                        <div className="space-y-4">
                            <motion.div
                                className="flex items-start gap-4 p-5 rounded-xl bg-gradient-to-br from-lightest-navy/30 to-light-navy/10 ring-1 ring-white/10 hover:ring-accent/30 transition-all"
                                whileHover={{ x: 4 }}
                            >
                                <div className="p-2.5 rounded-lg bg-accent/10 text-accent">
                                    <FiPhone size={20} />
                                </div>
                                <div>
                                    <p className="text-lightest-slate font-semibold mb-1">Phone</p>
                                    <p className="text-light-slate">(514) 983-9955</p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-start gap-4 p-5 rounded-xl bg-gradient-to-br from-lightest-navy/30 to-light-navy/10 ring-1 ring-white/10 hover:ring-accent/30 transition-all"
                                whileHover={{ x: 4 }}
                            >
                                <div className="p-2.5 rounded-lg bg-accent/10 text-accent">
                                    <FiMail size={20} />
                                </div>
                                <div>
                                    <p className="text-lightest-slate font-semibold mb-1">Email</p>
                                    <p className="text-light-slate">j.riduan17@gmail.com</p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-start gap-4 p-5 rounded-xl bg-gradient-to-br from-lightest-navy/30 to-light-navy/10 ring-1 ring-white/10 hover:ring-accent/30 transition-all"
                                whileHover={{ x: 4 }}
                            >
                                <div className="p-2.5 rounded-lg bg-accent/10 text-accent">
                                    <FiMapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-lightest-slate font-semibold mb-1">Location</p>
                                    <p className="text-light-slate">Canada</p>
                                </div>
                            </motion.div>
                        </div>

                        <div className="p-6 rounded-xl bg-gradient-to-br from-lightest-navy/30 to-light-navy/10 ring-1 ring-white/10">
                            <p className="text-light-slate font-medium mb-4">Find me on</p>
                            <div className="flex items-center gap-3">
                                {SOCIAL_LINKS.map(link => (
                                    <motion.a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-lg bg-navy/50 text-slate hover:text-accent hover:bg-accent/10 ring-1 ring-white/10 hover:ring-accent/40 transition-all"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <link.icon size={22} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;

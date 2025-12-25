"use client";
import React, { useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { education } from '../../../data';

// Education: Split list + neon-glass details; publications with title-first + external link and copy.
const Education = () => {
    const [active, setActive] = useState(0);

    const container = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
    };

    const card = {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    const copyCitation = async (text) => {
        try { await navigator.clipboard.writeText(text); } catch (e) { }
    };

    // Extract title from citation string (after year). Example input:
    // "Rahman, M.S. et al. (2022). Average Power Based EEG Channel Selection Method for Emotion Recognition. In: ..."
    const parsePublication = (str) => {
        try {
            const m = str.match(/\)\.\s*([^\.]+)\./); // capture first sentence after ") ."
            const title = m?.[1]?.trim();
            return { title, full: str };
        } catch {
            return { title: undefined, full: str };
        }
    };

    const SPRINGER_CITE_URL = 'https://link.springer.com/chapter/10.1007/978-3-031-14054-9_26#citeas';

    return (
        <section id="education" className="py-24 scroll-mt-28 md:scroll-mt-40">
            <h2 className="text-3xl sm:text-4xl font-bold text-lightest-slate mb-10 text-center relative">
                Education
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 w-20 bg-accent" />
            </h2>

            <div className="relative max-w-5xl mx-auto px-4">
                {/* ambient accents */}
                <div className="pointer-events-none absolute -top-8 -left-6 h-36 w-36 rounded-full bg-accent/10 blur-2xl" />
                <div className="pointer-events-none absolute -bottom-10 -right-6 h-40 w-40 rounded-full bg-lightest-navy/40 blur-2xl" />

                <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-1 md:grid-cols-12 gap-6 isolate">
                    {/* Left: degree list */}
                    <div className="md:col-span-4 relative z-10">
                        <ul className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible -mx-4 px-4 md:mx-0 md:px-0">
                            {education.map((edu, i) => (
                                <li key={i}>
                                    <button onClick={() => setActive(i)} className={`w-full whitespace-nowrap md:whitespace-normal rounded-lg border px-4 py-3 text-left transition backdrop-blur-sm ${active === i ? 'border-accent/60 bg-white/10 text-lightest-slate shadow-lg' : 'border-white/10 bg-white/[0.02] text-light-slate hover:border-white/20 hover:bg-white/[0.05]'}`}>
                                        <p className="text-xs text-slate">{edu.duration}</p>
                                        <p className="font-semibold truncate">{edu.institution}</p>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: details card */}
                    <div className="md:col-span-8 relative z-0">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active}
                                variants={card}
                                initial="hidden"
                                animate="visible"
                                exit={{ opacity: 0, y: -12 }}
                                className="relative rounded-xl p-[1px] bg-gradient-to-br from-orange-500/20 via-fuchsia-500/10 to-transparent shadow-lg"
                            >
                                {/* Glassmorphism card */}
                                <div className="relative rounded-xl overflow-hidden bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-6 shadow-2xl">

                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4 relative z-10">
                                        <div>
                                            <h3 className="text-xl font-bold text-lightest-slate">{education[active].degree}</h3>
                                            <p className="text-accent font-semibold">{education[active].institution}</p>
                                            <p className="text-sm text-slate mt-1">{education[active].duration}</p>
                                        </div>
                                        <span className="text-xs px-2.5 py-1 rounded-full border border-white/15 text-light-slate/90 bg-white/5">Academic</span>
                                    </div>

                                    {/* details intentionally omitted to keep the card concise */}

                                    {education[active].publications?.length ? (
                                        <div className="mt-4 pt-4 border-t border-white/10 relative z-10">
                                            <div className="flex items-center justify-between mb-2">
                                                <h4 className="text-lg font-bold text-lightest-slate">Publications</h4>
                                                <div className='flex gap-3'>
                                                    <a
                                                        href={SPRINGER_CITE_URL}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        aria-label="View citation on Springer"
                                                        className="shrink-0 inline-flex items-center justify-center h-7 w-7 rounded-md border border-white/10 text-slate hover:border-white/20 hover:text-accent"
                                                    >
                                                        <FiExternalLink size={16} />
                                                    </a>
                                                    <button
                                                        onClick={() => copyCitation(education[active].publications.join('\n'))}
                                                        className="text-xs px-2 py-1 rounded-md border border-white/10 text-slate hover:border-white/20 hover:bg-white/5 cursor-pointer"
                                                    >
                                                        Copy citations
                                                    </button>
                                                </div>
                                            </div>
                                            <ul className="space-y-3">
                                                {education[active].publications.map((pub, i) => {
                                                    const { title, full } = parsePublication(pub);
                                                    return (
                                                        <li key={i} className="text-sm text-slate">
                                                            <div className="flex items-start justify-between gap-3">
                                                                <div className="min-w-0">
                                                                    {title && (
                                                                        <p className="font-semibold text-slate truncate">{title}</p>
                                                                    )}
                                                                    <p className="text-light-slate mt-1 break-words">{full}</p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    ) : null}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;

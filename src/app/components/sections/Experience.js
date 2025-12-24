"use client";
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { EXPERIENCE_DATA } from '../../constants';

const KEYWORDS = [
    'react', 'next', 'node', 'mongodb', 'tailwind', 'express', 'stripe', 'typescript', 'framer'
];

// Experience: Smart split UI with filters, impact-only toggle, tag highlighting, and copy.
const Experience = () => {
    const [active, setActive] = useState(0);
    const [selectedTags, setSelectedTags] = useState([]); // array of strings
    const [impactOnly, setImpactOnly] = useState(false);
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start 80%', 'end 10%'] });
    const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 });

    const tagsFor = useMemo(() => (index) => {
        const resps = EXPERIENCE_DATA[index]?.responsibilities || [];
        const text = resps.join(' ').toLowerCase();
        const found = KEYWORDS.filter((k) => text.includes(k));
        // unique
        return Array.from(new Set(found));
    }, []);

    // Aggregate tag frequencies across all experiences
    const allTags = useMemo(() => {
        const counts = new Map();
        EXPERIENCE_DATA.forEach((_, idx) => {
            tagsFor(idx).forEach((t) => counts.set(t, (counts.get(t) || 0) + 1));
        });
        return Array.from(counts.entries())
            .sort((a, b) => b[1] - a[1])
            .map(([t]) => t);
    }, [tagsFor]);

    // Filter experiences by selected tags (ANY match)
    const filteredIndices = useMemo(() => {
        if (!selectedTags.length) return EXPERIENCE_DATA.map((_, i) => i);
        return EXPERIENCE_DATA.map((_, i) => i).filter((i) => {
            const tags = tagsFor(i);
            return selectedTags.some((t) => tags.includes(t));
        });
    }, [selectedTags, tagsFor]);

    // Ensure active stays within filtered set
    useEffect(() => {
        if (!filteredIndices.includes(active)) {
            setActive(filteredIndices[0] ?? 0);
        }
    }, [filteredIndices, active]);

    const toggleTag = (t) => {
        setSelectedTags((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));
    };

    const clearFilters = () => {
        setSelectedTags([]);
    };

    const hasImpactSignal = (text) => {
        return /\d|%|\b(x|times|increase|decrease|reduced|improved|faster|slower|more|less)\b/i.test(text);
    };

    const filterBullets = (bullets) => {
        let items = bullets;
        if (selectedTags.length) {
            const joined = selectedTags.join('|');
            const re = new RegExp(`(?:${joined})`, 'i');
            items = items.filter((b) => re.test(b));
        }
        if (impactOnly) {
            items = items.filter((b) => hasImpactSignal(b));
        }
        return items;
    };

    const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const highlight = (text) => {
        if (!selectedTags.length) return text;
        const pattern = new RegExp(`(${selectedTags.map(escapeRegExp).join('|')})`, 'gi');
        const parts = text.split(pattern);
        return parts.map((part, i) =>
            pattern.test(part) ? (
                <span key={i} className="text-accent">
                    {part}
                </span>
            ) : (
                <span key={i}>{part}</span>
            )
        );
    };

    const copySummary = async () => {
        const job = EXPERIENCE_DATA[active];
        const bullets = filterBullets(job.responsibilities);
        const text = `${job.title} @ ${job.company} (${job.duration})\n- ${bullets.join('\n- ')}`;
        try {
            await navigator.clipboard.writeText(text);
        } catch (e) {
            // ignore
        }
    };

    // Keyboard navigation on the section
    const handleKeyDown = (e) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            const idx = filteredIndices.indexOf(active);
            const next = filteredIndices[(idx + 1) % filteredIndices.length];
            if (typeof next === 'number') setActive(next);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            const idx = filteredIndices.indexOf(active);
            const prev = filteredIndices[(idx - 1 + filteredIndices.length) % filteredIndices.length];
            if (typeof prev === 'number') setActive(prev);
        } else if (e.key === 'Escape') {
            clearFilters();
        }
    };

    return (
        <section id="experience" ref={sectionRef} className="py-24">
            <div className="relative max-w-6xl mx-auto px-4">
                {/* Scroll progress bar */}
                <div className="absolute -top-2 left-0 right-0 h-0.5 bg-white/5 overflow-hidden rounded">
                    <motion.span style={{ scaleX: progress, transformOrigin: '0% 50%' }} className="block h-full w-full bg-accent" />
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold text-lightest-slate mb-10 text-center relative">
                    Professional Experience
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 w-20 bg-accent" />
                </h2>

                {/* Smart toolbar: skills filter + toggles */}
                <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-2 overflow-x-auto pb-1">
                        <span className="text-xs text-slate shrink-0">Filter by skills:</span>
                        {allTags.map((t) => (
                            <button
                                key={t}
                                onClick={() => toggleTag(t)}
                                className={`text-xs px-2.5 py-1 rounded-full border transition shrink-0 ${selectedTags.includes(t)
                                    ? 'border-accent text-accent bg-white/5'
                                    : 'border-white/10 text-light-slate hover:border-white/20'
                                    }`}
                            >
                                {t}
                            </button>
                        ))}
                        {!!selectedTags.length && (
                            <button onClick={clearFilters} className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-slate hover:border-white/20 shrink-0">
                                Clear
                            </button>
                        )}
                    </div>
                    <div className="flex items-center gap-2">
                        <button onClick={() => setImpactOnly((v) => !v)} className={`text-xs px-3 py-1.5 rounded-md border transition ${impactOnly ? 'border-accent text-accent bg-white/5' : 'border-white/10 text-light-slate hover:border-white/20'}`}>
                            Impact-only
                        </button>
                        <button onClick={copySummary} className="text-xs px-3 py-1.5 rounded-md border border-white/10 text-light-slate hover:border-white/20">
                            Copy summary
                        </button>
                    </div>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* ambient glows */}
                    <div className="pointer-events-none absolute -top-10 -left-8 h-40 w-40 rounded-full bg-accent/10 blur-2xl" />
                    <div className="pointer-events-none absolute -bottom-14 -right-8 h-44 w-44 rounded-full bg-lightest-navy/40 blur-2xl" />

                    {/* Left: roles list (vertical on md+, horizontal chips on mobile) */}
                    <div className="md:col-span-4 outline-none" onKeyDown={handleKeyDown} tabIndex={0}>
                        {/* mobile chips */}
                        <div className="md:hidden -mx-4 px-4 flex gap-3 overflow-x-auto pb-2">
                            {filteredIndices.map((i) => (
                                <button
                                    key={i}
                                    onClick={() => setActive(i)}
                                    className={`shrink-0 px-3 py-2 rounded-lg border text-sm transition ${active === i ? 'border-accent text-accent bg-white/5' : 'border-white/10 text-light-slate hover:border-white/20'
                                        }`}
                                >
                                    {EXPERIENCE_DATA[i].company}
                                </button>
                            ))}
                        </div>

                        {/* desktop list */}
                        <ul className="hidden md:flex flex-col gap-2">
                            {filteredIndices.map((i) => (
                                <li key={i}>
                                    <button
                                        onClick={() => setActive(i)}
                                        className={`w-full text-left rounded-lg border px-4 py-3 transition relative overflow-hidden backdrop-blur-sm ${active === i
                                            ? 'border-accent/60 bg-white/10 text-lightest-slate shadow-lg'
                                            : 'border-white/10 bg-white/[0.02] text-light-slate hover:border-white/20 hover:bg-white/[0.05]'
                                            }`}
                                    >
                                        <span className={`absolute left-0 top-0 h-full w-1 ${active === i ? 'bg-accent' : 'bg-transparent'}`} />
                                        <p className="text-sm text-slate">{EXPERIENCE_DATA[i].duration}</p>
                                        <p className="font-semibold text-lightest-slate">{EXPERIENCE_DATA[i].title} <span className="text-slate">@</span> <span className="text-accent">{EXPERIENCE_DATA[i].company}</span></p>
                                    </button>
                                </li>
                            ))}
                            {!filteredIndices.length && (
                                <li>
                                    <div className="text-slate text-sm">No roles match the selected skills.</div>
                                </li>
                            )}
                        </ul>
                    </div>

                    {/* Right: details panel */}
                    <div className="md:col-span-8">
                        <AnimatePresence mode="wait">
                            {filteredIndices.length ? (
                                <motion.div
                                    key={active}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -12 }}
                                    transition={{ duration: 0.35, ease: 'easeOut' }}
                                    className="relative rounded-xl p-[1px] bg-gradient-to-br from-fuchsia-500/20 via-purple-500/10 to-transparent shadow-lg"
                                >
                                    <div className="relative rounded-xl overflow-hidden bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-6 shadow-2xl">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-lightest-slate">
                                                    {EXPERIENCE_DATA[active].title} <span className="text-slate">@</span> <span className="text-accent">{EXPERIENCE_DATA[active].company}</span>
                                                </h3>
                                                <p className="text-sm text-slate mt-1">{EXPERIENCE_DATA[active].duration}</p>
                                            </div>
                                            {/* smart tags extracted from responsibilities */}
                                            <div className="flex flex-wrap gap-2">
                                                {tagsFor(active).map((t) => (
                                                    <button key={t} onClick={() => toggleTag(t)} className={`text-xs px-2 py-1 rounded-full border transition ${selectedTags.includes(t) ? 'border-accent text-accent bg-white/5' : 'border-white/10 text-light-slate hover:border-white/20'}`}>
                                                        {t}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <ul className="space-y-2 text-light-slate list-disc pl-5">
                                            {filterBullets(EXPERIENCE_DATA[active].responsibilities).map((r, i) => (
                                                <li key={i} className="marker:text-accent/80">{highlight(r)}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* hover glow overlay */}
                                    <div className="absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-300" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="rounded-xl border border-white/10 p-8 text-center text-slate"
                                >
                                    Nothing to show. Adjust filters to see matching roles.
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
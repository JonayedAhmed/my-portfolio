"use client";
import React from 'react';
import { resume } from '../resume/resumeData';

export default function ResumeShowcase() {
    return (
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left rail */}
            <aside className="lg:col-span-4 space-y-6">
                {/* Profile */}
                <div className="rounded-xl p-[1px] bg-gradient-to-br from-white/10 via-white/5 to-transparent">
                    <div className="rounded-xl bg-[rgba(17,34,64,0.65)] backdrop-blur-md ring-1 ring-white/10 p-5">
                        <h2 className="text-2xl font-bold text-lightest-slate">{resume.name}</h2>
                        <p className="text-slate">{resume.title}</p>
                        <p className="text-slate mt-1">{resume.location}</p>
                        <div className="mt-4 text-sm space-y-1">
                            <a className="block text-light-slate hover:text-accent transition" href={`tel:${resume.contact.phone.replace(/[^\d+]/g, '')}`}>{resume.contact.phone}</a>
                            <a className="block text-light-slate hover:text-accent transition" href={`mailto:${resume.contact.email}`}>{resume.contact.email}</a>
                            <a className="block text-light-slate hover:text-accent transition" href={resume.contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a className="block text-light-slate hover:text-accent transition" href={resume.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </div>
                    </div>
                </div>

                {/* Skills (grouped) */}
                <div className="rounded-xl p-[1px] bg-gradient-to-br from-white/10 via-white/5 to-transparent">
                    <div className="rounded-xl bg-[rgba(17,34,64,0.65)] backdrop-blur-md ring-1 ring-white/10 p-5">
                        <h3 className="text-lg font-semibold text-lightest-slate mb-3">Skills</h3>
                        <div className="space-y-3">
                            {resume.skills.map((group) => (
                                <div key={group.category}>
                                    <p className="text-xs uppercase tracking-wide text-slate mb-1">{group.category}</p>
                                    <ul className="flex flex-wrap gap-2">
                                        {group.items.map((it) => (
                                            <li key={it} className="text-xs px-2 py-1 rounded-md border border-white/10 text-light-slate">{it}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main column */}
            <main className="lg:col-span-8 space-y-6">
                {/* Summary */}
                <section className="rounded-xl p-[1px] bg-gradient-to-br from-white/10 via-white/5 to-transparent">
                    <div className="rounded-xl bg-[rgba(17,34,64,0.65)] backdrop-blur-md ring-1 ring-white/10 p-6">
                        <h3 className="text-xl font-bold text-lightest-slate mb-2">Professional Summary</h3>
                        <p className="text-light-slate leading-relaxed">{resume.summary}</p>
                    </div>
                </section>

                {/* Experience */}
                <section className="rounded-xl p-[1px] bg-gradient-to-br from-white/10 via-white/5 to-transparent">
                    <div className="rounded-xl bg-[rgba(17,34,64,0.65)] backdrop-blur-md ring-1 ring-white/10 p-6">
                        <h3 className="text-xl font-bold text-lightest-slate mb-4">Professional Experience</h3>
                        <div className="space-y-6">
                            {resume.experience.map((job, idx) => (
                                <div key={idx}>
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                                        <p className="font-semibold text-lightest-slate">
                                            {job.role} <span className="text-slate">@</span> <span className="text-accent">{job.company}</span>
                                        </p>
                                        <p className="text-sm text-slate">{job.duration}</p>
                                    </div>
                                    <p className="text-sm text-slate">{job.location}</p>
                                    <div className="mt-2 space-y-3">
                                        {job.projects.map((p, pi) => (
                                            <div key={pi}>
                                                <p className="text-lightest-slate font-medium">{p.name}</p>
                                                <ul className="list-disc pl-5 space-y-1 text-light-slate">
                                                    {p.bullets.map((b, bi) => (
                                                        <li className="marker:text-accent/80" key={bi}>{b}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Education */}
                <section className="rounded-xl p-[1px] bg-gradient-to-br from-white/10 via-white/5 to-transparent">
                    <div className="rounded-xl bg-[rgba(17,34,64,0.65)] backdrop-blur-md ring-1 ring-white/10 p-6">
                        <h3 className="text-xl font-bold text-lightest-slate mb-2">Education</h3>
                        <p className="font-semibold text-lightest-slate">{resume.education.degree}</p>
                        <p className="text-accent">{resume.education.institution}</p>
                        <p className="text-sm text-slate mb-2">{resume.education.duration}</p>
                        <p className="text-xs uppercase tracking-wide text-slate mb-1">Relevant Courses</p>
                        <ul className="flex flex-wrap gap-2">
                            {resume.education.courses.map((c) => (
                                <li key={c} className="text-xs px-2 py-1 rounded-md border border-white/10 text-light-slate">{c}</li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Personal Projects */}
                <section className="rounded-xl p-[1px] bg-gradient-to-br from-white/10 via-white/5 to-transparent">
                    <div className="rounded-xl bg-[rgba(17,34,64,0.65)] backdrop-blur-md ring-1 ring-white/10 p-6">
                        <h3 className="text-xl font-bold text-lightest-slate mb-4">Personal Projects</h3>
                        <div className="space-y-4">
                            {resume.personalProjects.map((proj) => (
                                <div key={proj.name}>
                                    <p className="text-lightest-slate font-medium">
                                        {proj.name}{proj.note ? <span className="text-slate text-sm"> — {proj.note}</span> : null}
                                    </p>
                                    <ul className="list-disc pl-5 space-y-1 text-light-slate">
                                        {proj.bullets.map((b, bi) => (
                                            <li key={bi} className="marker:text-accent/80">{b}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Languages */}
                <section className="rounded-xl p-[1px] bg-gradient-to-br from-white/10 via-white/5 to-transparent">
                    <div className="rounded-xl bg-[rgba(17,34,64,0.65)] backdrop-blur-md ring-1 ring-white/10 p-6">
                        <h3 className="text-xl font-bold text-lightest-slate mb-2">Languages</h3>
                        <ul className="flex flex-wrap gap-2">
                            {resume.languages.map((l) => (
                                <li key={l.name} className="text-xs px-2 py-1 rounded-md border border-white/10 text-light-slate">{l.name} — {l.level}</li>
                            ))}
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    );
}

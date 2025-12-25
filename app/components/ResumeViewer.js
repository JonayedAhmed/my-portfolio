"use client";
import React from 'react';

export default function ResumeViewer({ src }) {
    const embedSrc = `${src}#toolbar=0&navpanes=0&statusbar=0&view=FitH`;
    return (
        <div className="relative max-w-4xl mx-auto overflow-hidden">
            {/* ambient glows */}
            <div className="pointer-events-none absolute -top-16 left-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 right-0 h-72 w-72 rounded-full bg-lightest-navy/40 blur-3xl" />

            {/* device frame */}
            <div className="relative rounded-2xl p-[2px] bg-gradient-to-br from-white/20 via-white/10 to-transparent shadow-[0_10px_60px_rgba(16,24,40,0.5)]">
                <div className="relative rounded-2xl bg-[rgba(10,20,40,0.7)] backdrop-blur-xl ring-1 ring-white/10 overflow-hidden">
                    {/* top reflection */}
                    <div className="pointer-events-none absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-white/15 to-transparent" />
                    {/* inner border glow */}
                    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />

                    {/* PDF area with aspect ratio close to A4 (1:1.414) */}
                    <div className="relative w-full" style={{ aspectRatio: '1 / 1.29' }}>
                        <object data={embedSrc} type="application/pdf" className="absolute inset-0 w-full h-full">
                            <div className="flex h-full items-center justify-center p-6 text-center">
                                <p className="text-sm text-slate">
                                    Your browser cannot display the PDF inline.{' '}
                                    <a href={src} target="_blank" rel="noopener noreferrer" className="text-accent underline">
                                        Open the PDF in a new tab
                                    </a>
                                    .
                                </p>
                            </div>
                        </object>
                    </div>
                </div>
            </div>
        </div>
    );
}

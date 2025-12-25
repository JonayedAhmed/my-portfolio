export const metadata = { title: 'Resume | Jonayed Ahmed Riduan' };

import ResumeViewer from '../components/ResumeViewer';

const PDF_PATH = '/resume/Jonayed_Ahmed_Riduan_CV.pdf';

export default function ResumePage() {
    return (
        <section className="py-24 scroll-mt-28 md:scroll-mt-40 overflow-x-hidden">
            <div className="relative max-w-6xl mx-auto px-4">
                {/* Actions (no header) */}
                <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
                    <a href={PDF_PATH} download className="inline-flex items-center gap-2 rounded-md bg-accent/90 text-navy font-semibold px-6 py-3 border border-accent/60 cursor-pointer transition-all hover:bg-accent hover:shadow-[0_0_24px_rgba(100,255,218,0.45)]">
                        Download PDF
                    </a>
                    <a href={PDF_PATH} target="_blank" rel="noopener noreferrer" className="text-sm px-4 py-3 rounded-md border border-white/10 text-lightest-slate transition-colors hover:border-accent/60 hover:text-accent hover:shadow-[0_0_24px_rgba(100,255,218,0.25)]">
                        Open in new tab
                    </a>
                </div>

                <ResumeViewer src={PDF_PATH} />
            </div>
        </section>
    );
}

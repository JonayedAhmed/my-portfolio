import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Jonayed Ahmed Riduan | Software Engineer',
  description: 'Portfolio of Jonayed Ahmed Riduan, a passionate software engineer specializing in modern web technologies.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" style={{ backgroundColor: '#1a0f0a' }}>
      <body className={`${inter.className} text-slate font-sans min-h-screen`} style={{ backgroundColor: 'transparent' }}>
        {/* Dark warm gradient - deep orange to dark purple */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          {/* Dark base gradient - warm to cool */}
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#1a0f0a_0%,#1f1218_25%,#1a1428_50%,#14182a_75%,#0f1520_100%)]" />

          {/* Deep orange glow top-left */}
          <div className="absolute -top-32 -left-32 h-[50rem] w-[50rem] rounded-full bg-orange-900/25 blur-3xl" />

          {/* Warm burgundy/red accent */}
          <div className="absolute top-1/4 left-1/4 h-[45rem] w-[45rem] rounded-full bg-red-900/20 blur-3xl" />

          {/* Deep magenta center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[48rem] w-[48rem] rounded-full bg-fuchsia-900/22 blur-3xl" />

          {/* Dark purple center-right */}
          <div className="absolute top-1/3 -right-24 h-[46rem] w-[46rem] rounded-full bg-purple-900/24 blur-3xl" />

          {/* Deep violet bottom-left */}
          <div className="absolute -bottom-28 left-1/3 h-[44rem] w-[44rem] rounded-full bg-violet-900/20 blur-3xl" />

          {/* Dark indigo bottom-right */}
          <div className="absolute -bottom-32 -right-32 h-[50rem] w-[50rem] rounded-full bg-indigo-900/22 blur-3xl" />
        </div>
        {children}
      </body>
    </html>
  );
}

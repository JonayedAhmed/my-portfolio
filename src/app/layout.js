import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Jonayed Ahmed Riduan | Software Engineer',
  description: 'Portfolio of Jonayed Ahmed Riduan, a passionate software engineer specializing in modern web technologies.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-navy text-slate font-sans`}>
        {/* Rich navy blue background with subtle light effects */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          {/* Base navy gradient - darker and deeper */}
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#030d1f_0%,#050e2e_50%,#04101e_100%)]" />
          {/* Soft accent glow top-left */}
          <div className="absolute -top-24 -left-24 h-[36rem] w-[36rem] rounded-full bg-accent/10 blur-3xl" />
          {/* Subtle cool glow bottom-right */}
          <div className="absolute -bottom-28 -right-28 h-[28rem] w-[28rem] rounded-full bg-lightest-navy/20 blur-3xl" />
        </div>
        {children}
      </body>
    </html>
  );
}

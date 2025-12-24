import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Jonayed Ahmed Riduan | Software Engineer',
  description: 'Portfolio of Jonayed Ahmed Riduan, a passionate software engineer specializing in modern web technologies.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" style={{
      background: 'linear-gradient(135deg, #1a0f0a 0%, #1f1218 25%, #1a1428 50%, #14182a 75%, #0f1520 100%)',
      backgroundAttachment: 'fixed',
      minHeight: '100vh'
    }}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#1a1428" />
      </head>
      <body className={`${inter.className} text-slate font-sans`} style={{
        background: 'transparent',
        minHeight: '100vh'
      }}>
        {children}
      </body>
    </html>
  );
}

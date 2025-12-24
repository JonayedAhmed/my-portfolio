import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata() {
  return {
    metadataBase: new URL('https://jonayed.vercel.app'),
    title: 'Jonayed Ahmed Riduan | Software Engineer',
    description: 'Frontend Developer specializing in React.js, Next.js, and modern web technologies. Building scalable, high-performance web applications.',
    keywords: ['Software Engineer', 'Frontend Developer', 'React', 'Next.js', 'Web Developer', 'Jonayed Ahmed Riduan'],
    authors: [{ name: 'Jonayed Ahmed Riduan' }],
    openGraph: {
      title: 'Jonayed Ahmed Riduan | Software Engineer',
      // description: 'Frontend Developer specializing in React.js, Next.js, and modern web technologies. Building scalable, high-performance web applications.',
      url: 'https://jonayed.vercel.app',
      siteName: 'Jonayed Ahmed Riduan',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: 'https://jonayed.vercel.app/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Jonayed Ahmed Riduan - Software Engineer',
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Jonayed Ahmed Riduan | Software Engineer',
      description: 'Frontend Developer specializing in React.js, Next.js, and modern web technologies.',
      images: ['https://jonayed.vercel.app/og-image.jpg'],
    },
    icons: {
      icon: '/favicon.ico',
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#1a1428" />
      </head>
      <body className={`${inter.className} text-slate font-sans`}>
        {children}
      </body>
    </html>
  );
}

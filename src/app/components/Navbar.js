"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
];

// Navbar: Smooth-scroll on home; deep-links (/#section) from other routes (e.g., /resume).
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollTo = (e, href) => {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({
            behavior: 'smooth'
        });
    };

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-navy/85 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]'
                : 'bg-navy/40 backdrop-blur-sm border-b border-transparent'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <div className="text-2xl font-bold">
                        {pathname === '/' ? (
                            <a
                                href="#hero"
                                onClick={(e) => scrollTo(e, '#hero')}
                                className="text-accent hover:text-accent/80 transition-colors duration-300"
                            >
                                JAR
                            </a>
                        ) : (
                            <Link
                                href="/"
                                className="text-accent hover:text-accent/80 transition-colors duration-300"
                            >
                                JAR
                            </Link>
                        )}
                    </div>
                    <nav className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            pathname === '/' ? (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => scrollTo(e, link.href)}
                                    className="text-lightest-slate hover:text-accent transition-colors duration-300"
                                >
                                    {link.name}
                                </a>
                            ) : (
                                <Link
                                    key={link.name}
                                    href={`/${link.href}`}
                                    className="text-lightest-slate hover:text-accent transition-colors duration-300"
                                >
                                    {link.name}
                                </Link>
                            )
                        ))}
                        <Link
                            href="/resume"
                            className="text-accent hover:text-accent/80 transition-all duration-300 border-2 border-accent/30 rounded-lg px-4 py-2 hover:border-accent hover:bg-accent/10 hover:shadow-[0_0_20px_rgba(100,255,218,0.2)] font-semibold"
                        >
                            Resume
                        </Link>
                    </nav>
                </div>
            </div>
        </motion.header>
    );
};

export default Navbar;
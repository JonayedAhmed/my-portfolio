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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm ${isScrolled
                ? 'bg-[rgba(10,25,47,0.75)] backdrop-blur-md border-b border-white/10 shadow-lg'
                : 'bg-[rgba(10,25,47,0.35)] border-b border-transparent'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <div className="text-2xl font-bold text-accent">
                        {pathname === '/' ? (
                            <a href="#hero" onClick={(e) => scrollTo(e, '#hero')}>JAR</a>
                        ) : (
                            <Link href="/#hero">JAR</Link>
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
                        <Link href="/resume" className="text-lightest-slate hover:text-accent transition-colors duration-300 border border-white/10 rounded-md px-3 py-1.5 hover:border-accent/60">
                            Resume
                        </Link>
                    </nav>
                </div>
            </div>
        </motion.header>
    );
};

export default Navbar;
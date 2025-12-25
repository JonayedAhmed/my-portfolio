"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
    { name: 'About', href: 'about' },
    { name: 'Experience', href: 'experience' },
    { name: 'Education', href: 'education' },
    { name: 'Projects', href: 'projects' },
    { name: 'Technologies', href: 'technologies' },
    // { name: 'Testimonials', href: 'testimonials' },
    { name: 'Contact', href: 'contact' },
];

// Navbar: Smooth-scroll on home; navigates to home + scrolls from other routes.
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, sectionId) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);

        if (pathname === '/') {
            // On home page - smooth scroll
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            // On other pages - navigate to home with hash
            router.push(`/#${sectionId}`);
        }
    };

    const handleLogoClick = (e) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);

        if (pathname === '/') {
            const hero = document.getElementById('hero');
            if (hero) {
                hero.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            router.push('/');
        }
    };

    return (
        <>
            <motion.header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-navy/85 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]'
                    : 'bg-navy/40 backdrop-blur-sm border-b border-transparent'
                    }`}
            >
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center py-4">
                        <a
                            href="/"
                            onClick={handleLogoClick}
                            className="text-2xl font-bold text-accent hover:text-accent/80 transition-colors duration-300"
                        >
                            JAR
                        </a>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={`/#${link.href}`}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="text-lightest-slate hover:text-accent transition-colors duration-300"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="/resume"
                                className="text-accent hover:text-accent/80 transition-all duration-300 border-2 border-accent/30 rounded-lg px-4 py-2 hover:border-accent hover:bg-accent/10 hover:shadow-[0_0_20px_rgba(100,255,218,0.2)] font-semibold"
                            >
                                Resume
                            </a>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden text-accent hover:text-accent/80 transition-colors p-2"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu - Fixed position dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-[72px] left-0 right-0 z-50 md:hidden px-4"
                    >
                        <nav className="flex flex-col gap-4 py-6 px-4 bg-white/5 backdrop-blur-xl rounded-lg border border-white/10 shadow-2xl">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={`/#${link.href}`}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="text-lightest-slate hover:text-accent transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-white/5"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="/resume"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-accent hover:text-accent/80 transition-all duration-300 border-2 border-accent/30 rounded-lg px-4 py-3 text-center hover:border-accent hover:bg-accent/10 font-semibold mt-2"
                            >
                                Resume
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
import React from 'react';
import { socialLinks } from '../../data';

const Footer = () => {
    return (
        <footer className="w-full py-12 mt-20 border-t border-white/5">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Social Links - Mobile */}
                <div className="flex justify-center gap-6 md:hidden mb-8">
                    {socialLinks.map(link => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate hover:text-accent hover:scale-110 transition-all duration-300"
                            aria-label={link.name}
                        >
                            <link.icon size={24} />
                        </a>
                    ))}
                </div>

                {/* Footer Content */}
                <div className="text-center space-y-3">
                    <p className="text-light-slate text-sm sm:text-base">
                        Designed & Built by{' '}
                        <span className="text-accent font-semibold">Jonayed Ahmed Riduan</span>
                    </p>
                    <p className="text-slate text-xs sm:text-sm">
                        &copy; {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
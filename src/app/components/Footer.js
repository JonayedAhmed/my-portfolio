import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer = () => {
    return (
        <footer className="w-full py-8 text-center text-slate">
            <div className="flex justify-center space-x-6 md:hidden mb-4">
                {SOCIAL_LINKS.map(link => (
                    <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300">
                        <link.icon size={24} />
                    </a>
                ))}
            </div>
            <p>&copy; {new Date().getFullYear()} Jonayed Ahmed Riduan. All rights reserved.</p>
            <p className="text-sm">Designed & Built by Jonayed Ahmed Riduan</p>
        </footer>
    );
};

export default Footer;
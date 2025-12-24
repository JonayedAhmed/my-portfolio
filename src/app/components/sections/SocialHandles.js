"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../../constants';

const SocialHandles = () => {
    return (
        <motion.div
            className="hidden md:flex flex-col items-center fixed bottom-0 left-6 md:left-12 z-[999] isolate"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
        >
            <div className="flex flex-col items-center space-y-6">
                {SOCIAL_LINKS.map((link) => (
                    <motion.a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate hover:text-accent transform hover:-translate-y-1 transition-all duration-300"
                        whileHover={{ scale: 1.2 }}
                    >
                        <link.icon size={22} />
                    </motion.a>
                ))}
            </div>
            <div className="mt-6 w-[2px] h-24 bg-[rgba(136,146,176,0.9)] z-[10000] drop-shadow-md"></div>
        </motion.div>
    );
};

export default SocialHandles;
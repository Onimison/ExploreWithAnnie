'use client';

import { useState } from 'react';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import ContactModal from '@/components/ContactModal';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-4 py-4 md:px-12 lg:px-24 z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200/50 dark:border-neutral-800/50 transition-colors duration-300">
                <Link href="/" className="font-serif font-bold text-xl md:text-2xl tracking-tighter text-neutral-900 dark:text-white overflow-hidden text-ellipsis whitespace-nowrap max-w-[150px] md:max-w-none">Explore With Annie.</Link>
                <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-neutral-500 dark:text-neutral-400">
                    <Link href="/#about" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">About</Link>
                    <Link href="/#services" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Services</Link>
                    <Link href="/#impact" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Impact</Link>
                </div>
                <div className="flex items-center gap-3 md:gap-4 shrink-0">
                    <ThemeSwitcher />
                    <button onClick={() => setIsModalOpen(true)} className="hidden sm:flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity text-neutral-900 dark:text-white">
                        Collaborate <ArrowRight className="w-4 h-4" />
                    </button>
                    <button onClick={() => setIsModalOpen(true)} className="sm:hidden flex items-center gap-1 text-sm font-medium hover:opacity-70 transition-opacity text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-800 px-3 py-2 rounded-full">
                        Collaborate
                    </button>
                </div>
            </nav>
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}

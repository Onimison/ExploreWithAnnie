'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function BookPromo() {
    return (
        <section className="bg-[#F5F4F0] dark:bg-neutral-900 pb-32 pt-16 px-6 md:px-12 lg:px-24 w-full overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white dark:bg-neutral-950 rounded-[2.5rem] p-8 md:p-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-24 transition-colors duration-300 shadow-sm border border-neutral-200/50 dark:border-neutral-800/50">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex-1 flex flex-col items-start"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-8 transition-colors">
                            <BookOpen className="w-4 h-4" /> Bestselling Author
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold tracking-tight mb-6 text-neutral-900 dark:text-white transition-colors duration-300">
                            Two Worlds, <br /> Three Hearts.
                        </h2>

                        <p className="text-neutral-600 dark:text-neutral-400 text-lg md:text-xl leading-relaxed mb-10 max-w-xl transition-colors">
                            Beyond social media, I build immersive realities. My debut book is an exploration of love, boundaries, and what it means to bridge the gap between distinct worlds. Get your digital copy straight from Selar.
                        </p>

                        <a
                            href="https://selar.com/7i5333p4dh?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAQQPN1leHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAaeO7YqrHuWo_CVhKACEND1OICjDTA4igWY8tLmSJByQCNgUo9gJtAlodVTq3A_aem_AhHmakeG3RXsPv-_WrbuKg"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 px-8 py-4 rounded-full font-semibold transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300"
                        >
                            Buy on Selar <ArrowRight className="w-5 h-5" />
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full max-w-sm lg:max-w-[400px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shrink-0 border border-neutral-100 dark:border-neutral-800"
                    >
                        <Image
                            src="/two-worlds-three-hearts-selar.com-68b7360e72e7b.jpg"
                            alt="Two Worlds, Three Hearts Book Cover"
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 768px) 100vw, 500px"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

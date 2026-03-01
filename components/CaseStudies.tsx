'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { insights } from '@/lib/data';

export default function CaseStudies() {
    return (
        <section id="case-studies" className="bg-[#111111] text-white py-32 px-6 md:px-12 lg:px-24 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 border-b border-neutral-800 pb-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-serif tracking-tight uppercase max-w-lg leading-tight"
                    >
                        Insights & <br /> Case Studies
                    </motion.h2>

                    <motion.a
                        href="#"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-sm font-medium text-neutral-400 hover:text-white flex items-center gap-2 transition-colors"
                    >
                        View all insights <ArrowRight className="w-4 h-4" />
                    </motion.a>
                </div>

                <div className="flex flex-col">
                    {insights.map((item, index) => (
                        <motion.div
                            key={item.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link href={`/insights/${item.slug}`} className="group py-8 border-b border-neutral-800 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-neutral-900/50 px-4 -mx-4 transition-colors">
                                <div className="flex-1">
                                    <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-neutral-500 font-medium">
                                        <span className="text-neutral-300">{item.category}</span>
                                        <span>•</span>
                                        <span>{item.readTime}</span>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-serif tracking-wide group-hover:text-neutral-300 transition-colors">
                                        {item.title}
                                    </h3>
                                </div>

                                <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:border-white transition-all transform group-hover:-rotate-45 shrink-0">
                                    <ArrowRight className="w-5 h-5" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

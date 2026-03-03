'use client';

import { motion } from 'motion/react';
import { Instagram, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const topPosts = [
    {
        id: 1,
        image: '/post1.jpeg',
        excerpt: "Part 2 is finally out😂😂 I can't wait to see how it plays out😂😂💔💔",
        link: 'https://www.instagram.com/p/DUtJyf8DPOO/?igsh=aTM5MWJ2aTR4ZzZl'
    },
    {
        id: 2,
        image: '/post2.jpeg',
        excerpt: "I might be wrong, but colors say a lot more than we realize. Sometimes they reflect how we feel, who we are, or what we're craving in life. So which is yours?",
        link: 'https://www.instagram.com/p/DPi6p3UDDwz/?igsh=MXZ4bWtuaHBtNzJncg=='
    },
    {
        id: 3,
        image: '/post3.jpeg',
        excerpt: "I've grown to realize that love is not about what someone can buy for you, but how they make you feel when nothing is happening. The calm. The honesty. The effort. The way they show up even on ordinary days.",
        link: 'https://www.instagram.com/p/DS20M5UDNem/?igsh=NjIyaW9wd2dpc294'
    },
    {
        id: 4,
        image: '/highlights1.jpeg',
        excerpt: "Explore a curated collection of my viral posts and storytelling strategies that consistently capture attention and drive massive engagement.",
        link: 'https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTkyOTU0NzMwOTA1MDY1?story_media_id=3783883924221745348&igsh=MWMwY2luejU2eWk1eg=='
    }
];

export default function SocialProofEmbed() {
    return (
        <section id="social" className="bg-white dark:bg-neutral-950 py-32 px-6 md:px-12 lg:px-24 w-full overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center justify-center p-4 bg-neutral-100 dark:bg-neutral-900 rounded-full mb-6 transition-colors duration-300">
                            <Instagram className="w-8 h-8 text-neutral-900 dark:text-white" />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-4 dark:text-white transition-colors duration-300">
                            High-Impact <br /> Storytelling
                        </h2>
                        <p className="text-neutral-500 dark:text-neutral-400 max-w-lg text-lg mx-auto">
                            A glimpse into the writing that captured <strong className="font-bold underline decoration-neutral-200 dark:decoration-neutral-700 underline-offset-4 text-neutral-900 dark:text-white">1M+ weekly impressions</strong> and built a <strong className="font-bold underline decoration-neutral-200 dark:decoration-neutral-700 underline-offset-4 text-neutral-900 dark:text-white">154k+ strong community</strong>.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {topPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group flex flex-col bg-neutral-50 dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-lg border border-neutral-100 dark:border-neutral-800 transition-colors duration-300"
                        >
                            <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-200 dark:bg-neutral-800">
                                <Image
                                    src={post.image}
                                    alt={`Top performing post ${post.id}`}
                                    fill
                                    className="object-contain object-center group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                            </div>

                            <div className="flex flex-col flex-grow p-8">
                                <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed mb-6 italic line-clamp-4">
                                    "{post.excerpt}"
                                </p>

                                <div className="mt-auto pt-6 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
                                    <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Viral Post</span>
                                    <a href={post.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs font-medium text-neutral-900 dark:text-white hover:opacity-70 cursor-pointer transition-opacity z-10">
                                        Read via IG <ArrowRight className="w-3 h-3" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

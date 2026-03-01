import { insights } from '@/lib/data';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Clock, Share2, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function generateStaticParams() {
    return insights.map((post) => ({
        slug: post.slug,
    }));
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = insights.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 pt-32 pb-24 transition-colors duration-300">
            <article className="max-w-3xl mx-auto px-6 md:px-12">
                <Link href="/#case-studies" className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 mb-12 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </Link>

                <div className="mb-12">
                    <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-6">
                        <span className="text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-900 px-3 py-1 rounded-full">{post.category}</span>
                        <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime}</span>
                        <span>{post.date}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight leading-tight mb-8">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center justify-between border-y border-neutral-200 dark:border-neutral-800 py-6 gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-200 relative shrink-0">
                                <Image src="/Hannah_about_section.jpeg" alt={post.author} fill className="object-cover object-top" sizes="48px" />
                            </div>
                            <div>
                                <p className="font-semibold text-sm">{post.author}</p>
                                <p className="text-xs text-neutral-500 dark:text-neutral-400">Content Strategist & Storyteller</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 text-neutral-500">
                            <span className="text-sm font-medium hidden sm:block mr-2">Share:</span>
                            <button className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-full transition-colors" aria-label="Share on Twitter"><Twitter className="w-4 h-4" /></button>
                            <button className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-full transition-colors" aria-label="Share on LinkedIn"><Linkedin className="w-4 h-4" /></button>
                            <button className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-full transition-colors" aria-label="Share Link"><Share2 className="w-4 h-4" /></button>
                        </div>
                    </div>
                </div>

                <div className="w-full h-[40vh] md:h-[60vh] rounded-3xl overflow-hidden relative mb-16">
                    <Image src="/Hannah_hero_section.jpeg" alt="Article Cover" fill className="object-cover object-center" sizes="(max-width: 768px) 100vw, 800px" />
                    <div className="absolute inset-0 bg-black/10"></div>
                </div>

                <div className="max-w-none font-sans text-neutral-700 dark:text-neutral-300 leading-relaxed space-y-8 text-lg md:text-xl">
                    {post.content.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                    ))}
                </div>

                <div className="mt-24 pt-12 border-t border-neutral-200 dark:border-neutral-800 flex flex-col items-center text-center">
                    <h3 className="text-2xl font-serif mb-4">Want storytelling like this for your brand?</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 mb-8 max-w-md">Send a DM or email for ads, collabs, and brand content services.</p>
                    <a href="mailto:annasalami31@gmail.com" className="inline-flex items-center gap-3 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-8 py-4 rounded-full font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors">
                        Start Your Story <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </article>
        </main>
    );
}

'use client';

import { motion, AnimatePresence } from 'motion/react';
import { X, Send } from 'lucide-react';
import { useState } from 'react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setIsSuccess(true);
                setTimeout(() => {
                    setIsSuccess(false);
                    onClose();
                }, 3000);
            } else {
                alert('Oops! Something went wrong. Please email directly.');
            }
        } catch (error) {
            alert('Failed to send message. Please email directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-neutral-900/40 dark:bg-black/60 backdrop-blur-md"
                >
                    {/* Modal Overlay (click to close disabled) */}
                    <div className="absolute inset-0"></div>

                    {/* Modal Content - Glassmorphism */}
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full max-w-2xl bg-white/80 dark:bg-[#111111]/80 border border-neutral-200/50 dark:border-white/10 backdrop-blur-2xl rounded-3xl p-6 md:p-10 shadow-2xl overflow-y-auto max-h-[90vh] scrollbar-hide"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-neutral-800 dark:text-neutral-200 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="mb-8">
                            <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-neutral-900 dark:text-white mb-2">
                                Start Your Story.
                            </h2>
                            <p className="text-neutral-600 dark:text-neutral-400">
                                Let's build an immersive experience together. Tell me what you're looking for.
                            </p>
                        </div>

                        {isSuccess ? (
                            <motion.div
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                className="flex flex-col items-center justify-center py-16 text-center"
                            >
                                <div className="w-16 h-16 bg-green-500/20 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-6">
                                    <Send className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-serif text-neutral-900 dark:text-white mb-2">Inquiry Sent Successfully!</h3>
                                <p className="text-neutral-600 dark:text-neutral-400 max-w-sm">
                                    Hannah's team will review your project vision and get back to you shortly.
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6 flex flex-col">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                            Full Name / Representative
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            placeholder="Jane Doe"
                                            className="w-full bg-white/50 dark:bg-black/20 border border-neutral-200 dark:border-white/10 rounded-xl px-4 py-3 text-neutral-900 dark:text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-white/50 transition-all duration-300"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                            Company / Brand Name
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            placeholder="Acme Corp"
                                            className="w-full bg-white/50 dark:bg-black/20 border border-neutral-200 dark:border-white/10 rounded-xl px-4 py-3 text-neutral-900 dark:text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-white/50 transition-all duration-300"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            placeholder="jane@example.com"
                                            className="w-full bg-white/50 dark:bg-black/20 border border-neutral-200 dark:border-white/10 rounded-xl px-4 py-3 text-neutral-900 dark:text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-white/50 transition-all duration-300"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                            Service of Interest
                                        </label>
                                        <select
                                            name="service"
                                            required
                                            defaultValue=""
                                            className="w-full bg-neutral-50 dark:bg-[#151515] border border-neutral-200 dark:border-white/10 rounded-xl px-4 py-3 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-white/50 transition-all duration-300 appearance-none"
                                        >
                                            <option value="" disabled>Select a service</option>
                                            <option value="brand">Brand Storytelling Campaigns</option>
                                            <option value="instagram">Instagram Content Strategy</option>
                                            <option value="sponsored">Sponsored Collaborations</option>
                                            <option value="scriptwriting">Scriptwriting & Ghostwriting</option>
                                            <option value="other">Other (Please specify in vision)</option>
                                        </select>
                                    </div>
                                </div>



                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                        Project Vision
                                    </label>
                                    <textarea
                                        name="vision"
                                        required
                                        rows={4}
                                        placeholder="Tell me the story you want to bring to life..."
                                        className="w-full bg-white/50 dark:bg-black/20 border border-neutral-200 dark:border-white/10 rounded-xl px-4 py-3 text-neutral-900 dark:text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-white/50 transition-all duration-300 resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full flex items-center justify-center gap-2 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-8 py-4 rounded-xl font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-300 disabled:opacity-70 mt-4"
                                >
                                    {isSubmitting ? 'Sending details...' : 'Submit Inquiry'} <Send className="w-4 h-4" />
                                </button>

                                <p className="text-xs text-center text-neutral-500 mt-2">
                                    Alternatively, email me directly at <a href="mailto:annasalami31@gmail.com" className="underline hover:text-neutral-700 dark:hover:text-neutral-300">annasalami31@gmail.com</a>
                                </p>
                            </form>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

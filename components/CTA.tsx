'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 rounded-[3rem] p-12 md:p-24 relative overflow-hidden transition-colors duration-300"
      >
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_100%)]"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-light tracking-tighter mb-8">
            Let&apos;s Start <br />Your Story.
          </h2>

          <p className="text-xl text-neutral-400 dark:text-neutral-600 mb-12 max-w-xl mx-auto">
            Send a DM or email for ads, collabs, and brand content services. Let&apos;s build something beautiful and engaging together.
          </p>

          <a href="mailto:annasalami31@gmail.com" className="group relative inline-flex items-center justify-center gap-4 bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white px-8 py-4 rounded-full text-lg font-medium overflow-hidden transition-transform hover:scale-105 active:scale-95">
            <span className="relative z-10 flex items-center gap-2">
              annasalami31@gmail.com
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
          </a>
        </div>
      </motion.div>

      <footer className="mt-24 flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-neutral-500 dark:text-neutral-400">
        <div>© {new Date().getFullYear()} Hannah Oyiza Salami. All rights reserved.</div>
        <div className="flex items-center gap-6">
          <a href="https://instagram.com/explore.with.annie" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Instagram</a>
          <a href="https://x.com/explorewithann" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">X (Twitter)</a>
        </div>
      </footer>
    </section>
  );
}

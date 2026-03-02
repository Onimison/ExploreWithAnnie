'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { HandWrittenTitle } from '@/components/ui/hand-writing-text';
import { useState } from 'react';
import ContactModal from '@/components/ContactModal';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12 lg:mt-0">
        <div className="flex flex-col items-start z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex gap-12 mb-8"
          >
            <div>
              <div className="text-3xl font-light tracking-tight">154k+</div>
              <div className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Loyal Followers</div>
            </div>
            <div>
              <div className="text-3xl font-light tracking-tight">15M+</div>
              <div className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Dashboard Views</div>
            </div>
          </motion.div>

          {/* Hidden H1 for SEO, visual text below */}
          <h1 className="sr-only">Hannah Oyiza Salami (@explore.with.annie) - Brand Storyteller</h1>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 font-serif"
          >
            <h2 className="text-5xl lg:text-7xl font-light tracking-tight mb-2">
              Storytelling as a <br /><span className="italic">Business Asset.</span>
            </h2>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-4 text-lg md:text-xl text-neutral-600 dark:text-neutral-300 font-sans max-w-lg mb-8"
          >
            <span className="w-8 h-[1px] bg-neutral-400 dark:bg-neutral-500 shrink-0"></span>
            We craft stories that connect, inspire, and drive action for your brand.
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <HandWrittenTitle
              title={
                <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center gap-3 bg-transparent text-neutral-900 dark:text-white px-8 py-4 rounded-full font-medium hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors z-20 relative">
                  Start Your Story <ArrowRight className="w-4 h-4" />
                </button>
              }
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16"
          >
            <a href="#services" className="text-sm font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 flex items-center gap-2 transition-colors">
              Scroll down <ArrowRight className="w-4 h-4 rotate-90" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[60vh] lg:h-[80vh] w-full rounded-2xl overflow-hidden"
        >
          <Image
            src="/Hannah_hero_section.jpeg"
            alt="Hannah Oyiza Salami, Nigerian Storyteller and Content Writer"
            fill
            className="object-cover object-center transition-all duration-700"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-50/50 dark:from-neutral-950/80 to-transparent mix-blend-overlay"></div>
        </motion.div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}

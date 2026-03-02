'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function ValueProp() {
  return (
    <section id="impact" className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-light tracking-tight mb-4"
          >
            Power in<br />Numbers
          </motion.h2>
        </div>

        <div className="md:col-span-8 flex flex-col gap-12 items-start mt-4 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col md:flex-row gap-8 md:gap-16 w-full"
          >
            <div>
              <div className="text-4xl lg:text-5xl font-light tracking-tight text-neutral-900 dark:text-white mb-2">154k+</div>
              <div className="text-sm text-neutral-500 dark:text-neutral-400 uppercase tracking-widest font-medium">Loyal Followers</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-light tracking-tight text-neutral-900 dark:text-white mb-2">15M+</div>
              <div className="text-sm text-neutral-500 dark:text-neutral-400 uppercase tracking-widest font-medium">Dashboard Views</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-light tracking-tight text-neutral-900 dark:text-white mb-2">1M+</div>
              <div className="text-sm text-neutral-500 dark:text-neutral-400 uppercase tracking-widest font-medium">Weekly Impressions</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed text-lg max-w-2xl">
              100% Organic Growth. Reach isn&apos;t just a metric; it&apos;s a testament to resonance.
              My approach establishes genuine connection and absolute mastery of audience engagement,
              ensuring your brand message lands perfectly with the right demographic.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full mt-8"
          >
            <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-400 mb-6">Real Numbers. Real Impact.</h3>
            <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory pt-2 px-2 -mx-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} className="relative w-72 md:w-80 h-[30rem] shrink-0 snap-center rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-neutral-200/50 dark:border-neutral-800">
                  <Image
                    src={`/dashboard${num}.jpeg`}
                    alt={`Dashboard analytics screenshot ${num}`}
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 768px) 288px, 320px"
                  />
                </div>
              ))}
            </div>
            <p className="text-xs text-neutral-400 mt-2 italic flex justify-end">Swipe to view analytics &rarr;</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function Testimonials() {
  return (
    <section id="about" className="bg-[#F5F4F0] dark:bg-neutral-900 py-32 px-6 md:px-12 lg:px-24 w-full overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            <div className="mb-8 w-max">
              <span className="px-6 py-2 rounded-full border border-neutral-900 dark:border-neutral-100 text-sm font-medium">
                About Hannah
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter leading-[0.85] mb-8">
              Crafting <br /> Authentic narratives
            </h2>
            <div className="space-y-6 text-neutral-700 dark:text-neutral-300 text-lg md:text-xl leading-relaxed max-w-xl">
              <p>
                I craft stories that connect, inspire, and drive action. With a strong presence on Instagram, where I’ve grown a community of <strong className="font-bold underline decoration-neutral-300 dark:decoration-neutral-600 underline-offset-4 text-neutral-900 dark:text-white">154k+ followers</strong>, I create content that resonates deeply and sparks meaningful engagement.
              </p>
              <p>
                My storytelling spans relatable lifestyle moments, personal experiences, and thought-provoking narratives that my audience loves to follow and interact with. I help brands tell their stories in a way that feels authentic, memorable, and aligned with the values of a young, engaged audience.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[50vh] lg:h-[70vh] w-full rounded-2xl overflow-hidden"
          >
            <Image
              src="/Hannah_about_section.jpeg"
              alt="Hannah Oyiza Salami, Nigerian Storyteller and Content Writer"
              fill
              className="object-cover object-center transition-all duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

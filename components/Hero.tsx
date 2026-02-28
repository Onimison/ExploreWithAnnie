'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
      <nav className="absolute top-0 left-0 w-full flex items-center justify-between p-6 md:px-12 lg:px-24 z-10">
        <div className="font-serif font-bold text-xl tracking-tighter">Explore With Annie.</div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
          <a href="#about" className="hover:text-neutral-900 transition-colors">About</a>
          <a href="#services" className="hover:text-neutral-900 transition-colors">Services</a>
          <a href="#testimonials" className="hover:text-neutral-900 transition-colors">Testimonials</a>
        </div>
        <a href="#contact" className="flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity">
          Book A Call <ArrowRight className="w-4 h-4" />
        </a>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12 lg:mt-0">
        <div className="flex flex-col items-start z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex gap-12 mb-12"
          >
            <div>
              <div className="text-3xl font-light tracking-tight">+150k</div>
              <div className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Followers</div>
            </div>
            <div>
              <div className="text-3xl font-light tracking-tight">500+</div>
              <div className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Stories Told</div>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] lg:text-[8rem] leading-[0.85] font-light tracking-tighter mb-6"
          >
            Hello
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-4 text-lg md:text-xl text-neutral-600 font-serif italic"
          >
            <span className="w-8 h-[1px] bg-neutral-400"></span>
            I weave humour and love into bite-sized tales.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16"
          >
            <a href="#services" className="text-sm font-medium text-neutral-500 hover:text-neutral-900 flex items-center gap-2 transition-colors">
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
            src="https://picsum.photos/seed/writer/800/1200"
            alt="Creative Writer Portrait"
            fill
            className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-50/50 to-transparent mix-blend-overlay"></div>
        </motion.div>
      </div>
    </section>
  );
}

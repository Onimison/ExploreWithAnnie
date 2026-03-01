'use client';

import { motion } from 'motion/react';
import { ArrowUpRight, PenTool, Sparkles, TrendingUp, Megaphone } from 'lucide-react';

const services = [
  {
    title: 'Brand Storytelling Campaigns',
    description: 'Transform your brand message into compelling, emotional stories.',
    icon: <PenTool className="w-8 h-8 stroke-[1.5]" />
  },
  {
    title: 'Instagram Content Creation + Strategy',
    description: 'Captions, storytelling, and content strategies tailored to your brand’s voice.',
    icon: <TrendingUp className="w-8 h-8 stroke-[1.5]" />
  },
  {
    title: 'Sponsored Collaborations / Product Features',
    description: 'Authentic promotion through engaging storytelling that connects with our audiences.',
    icon: <Megaphone className="w-8 h-8 stroke-[1.5]" />
  },
  {
    title: 'Scriptwriting & Ghostwriting',
    description: 'Story development for film production and ghostwriting for brands and creators.',
    icon: <Sparkles className="w-8 h-8 stroke-[1.5]" />
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-[#111111] text-white py-32 px-6 md:px-12 lg:px-24 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-serif tracking-tight uppercase max-w-lg leading-tight"
          >
            Services<br />Suite
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-400 max-w-sm text-sm leading-relaxed"
          >
            Tailored solutions to elevate your brand presence, deeply engage younger demographics, and turn casual followers into loyal advocates.
          </motion.p>
        </div>

        <div className="relative mt-8 -mx-6 md:-mx-12 lg:-mx-24">
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 lg:w-32 bg-gradient-to-r from-[#111111] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 lg:w-32 bg-gradient-to-l from-[#111111] to-transparent z-10 pointer-events-none"></div>

          <div className="flex overflow-x-auto gap-6 md:gap-8 px-6 md:px-12 lg:px-24 pb-12 pt-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-10 md:p-12 w-[320px] md:w-[420px] shrink-0 snap-center border border-neutral-800 hover:border-neutral-700 transition-colors duration-500 cursor-pointer overflow-hidden bg-[#161616] hover:bg-[#1a1a1a] rounded-[2rem]"
              >
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500">
                  <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-white" />
                </div>

                <div className="mb-12 text-neutral-400 group-hover:text-white transition-colors duration-500 transform group-hover:scale-110 origin-left">
                  {service.icon}
                </div>

                <h3 className="text-xl md:text-2xl font-serif tracking-wide uppercase mb-4 text-white">
                  {service.title}
                </h3>

                <p className="text-neutral-400 text-sm leading-relaxed max-w-sm group-hover:text-neutral-300 transition-colors duration-500">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-2 text-neutral-600 text-sm items-center gap-3">
            <span className="w-16 h-[1px] bg-neutral-800"></span>
            <span className="italic">Swipe to explore</span>
            <span className="w-16 h-[1px] bg-neutral-800"></span>
          </div>
        </div>
      </div>
    </section>
  );
}

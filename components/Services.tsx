'use client';

import { motion } from 'motion/react';
import { ArrowUpRight, PenTool, Sparkles, TrendingUp, MessageSquare } from 'lucide-react';

const services = [
  {
    title: 'CREATIVE WRITING',
    description: 'Bite-sized, impactful stories designed for social media. I blend humour and romance into tweet-style fiction that goes viral.',
    icon: <PenTool className="w-8 h-8 stroke-[1.5]" />
  },
  {
    title: 'AI AUTOMATION',
    description: 'Streamlining the creative business. I help writers and creators implement AI tools to automate distribution and audience engagement.',
    icon: <Sparkles className="w-8 h-8 stroke-[1.5]" />
  },
  {
    title: 'AUDIENCE GROWTH',
    description: 'Strategies that turned a passion into 150k+ engaged followers. Learn how to build a community around your unique voice.',
    icon: <TrendingUp className="w-8 h-8 stroke-[1.5]" />
  },
  {
    title: 'CONSULTING',
    description: 'One-on-one sessions for storytellers looking to refine their craft, monetize their audience, and scale their digital presence.',
    icon: <MessageSquare className="w-8 h-8 stroke-[1.5]" />
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
            Areas of<br />My Expertise!
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-400 max-w-sm text-sm leading-relaxed"
          >
            Skills and specializations that drive results across storytelling, audience growth, and digital experiences.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-neutral-800">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-12 border-b border-r border-neutral-800 hover:bg-neutral-900/50 transition-colors duration-500 cursor-pointer overflow-hidden"
            >
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500">
                <ArrowUpRight className="w-5 h-5 text-neutral-500" />
              </div>
              
              <div className="mb-16 text-neutral-300 group-hover:text-white transition-colors duration-500 transform group-hover:scale-110 origin-left">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-serif tracking-wide uppercase mb-6">{service.title}</h3>
              
              <p className="text-neutral-400 text-sm leading-relaxed max-w-md group-hover:text-neutral-300 transition-colors duration-500">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

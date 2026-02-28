'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Her tweet-style stories are a masterclass in brevity. She captures the essence of a rom-com in 280 characters. Our engagement skyrocketed after implementing her storytelling framework.",
    author: "Sarah Jenkins",
    role: "Content Director at StoryBrand",
    avatar: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    quote: "The way she integrates AI automation into her creative workflow is mind-blowing. She showed us how to scale our content output by 3x without losing that human, humorous touch.",
    author: "Marcus Thorne",
    role: "Founder, Creator Economy",
    avatar: "https://picsum.photos/seed/marcus/100/100"
  },
  {
    quote: "I've never seen an audience so dedicated. Her advice on community building and authentic voice helped me grow my own following from zero to 50k in just six months.",
    author: "Elena Rodriguez",
    role: "Author & Digital Creator",
    avatar: "https://picsum.photos/seed/elena/100/100"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#F5F4F0] py-32 px-6 md:px-12 lg:px-24 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-24 gap-8">
          <div className="flex-1">
            <span className="px-6 py-2 rounded-full border border-neutral-900 text-sm font-medium hover:bg-neutral-900 hover:text-white transition-colors cursor-pointer">
              Testimonials
            </span>
          </div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter leading-[0.85]"
          >
            What Do My<br />Clients Say?
          </motion.h2>

          <div className="flex-1 flex justify-end items-center gap-4">
            <button className="w-12 h-12 rounded-full border border-neutral-900 flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:bg-neutral-800 transition-colors">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-neutral-300">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-neutral-300 last:border-b-0 md:last:border-r-0 flex flex-col justify-between group hover:bg-white/50 transition-colors duration-500"
            >
              <div>
                <div className="text-sm font-medium mb-12">5/5</div>
                <p className="text-lg leading-relaxed mb-12 text-neutral-800">
                  {testimonial.quote}
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                    sizes="48px"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="font-medium text-neutral-900">{testimonial.author}</div>
                  <div className="text-sm text-neutral-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

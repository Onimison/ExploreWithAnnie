'use client';

import { motion } from 'motion/react';

export default function ValueProp() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-light tracking-tight mb-4"
          >
            The Art of<br />Storytelling
          </motion.h2>
        </div>
        
        <div className="md:col-span-8 flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-medium mb-4">Humour & Love</h3>
            <p className="text-neutral-500 leading-relaxed text-lg max-w-2xl">
              I believe the best stories are the ones that make you laugh out loud and then immediately text someone you love. My tweet-style fiction captures the messy, beautiful reality of modern romance and everyday absurdities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-medium mb-4">AI-Empowered Creativity</h3>
            <p className="text-neutral-500 leading-relaxed text-lg max-w-2xl">
              Storytelling is an ancient art, but the tools are evolving. I integrate AI automation into my creative process and business strategy, allowing me to focus on what matters most: writing stories that resonate with 150k+ readers every day.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

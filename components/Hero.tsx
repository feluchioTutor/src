"use client";
import { motion } from "framer-motion";

const Hero = () => {
  const tgLink = "https://t.me/your_username";

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20">
      {/* Фоновая аура */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] bg-[radial-gradient(circle_at_center,_rgba(251,191,36,0.05)_0%,_transparent_70%)] -z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-6 max-w-[1200px]"
      >
        <p className="text-gold font-bold tracking-[0.4em] uppercase text-sm mb-10">
          Professional English Tutor
        </p>
        
        <h1 className="text-display text-[12vw] md:text-[150px] mb-12">
          Master <br />
          <span className="gold-text">English.</span>
        </h1>

        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-zinc-500 text-xl md:text-2xl font-light leading-relaxed">
            Индивидуальное обучение в Алматы и онлайн. <br />
            Для тех, кто готов инвестировать в свой масштаб.
          </p>
        </div>

        <a href={tgLink} target="_blank" className="premium-btn inline-block">
          Book a Lesson
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
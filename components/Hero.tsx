"use client";
import { motion } from "framer-motion";

const Hero = () => {
  const tgLink = "https://t.me/your_username"; // Замени на свой

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-5xl"
      >
        <p className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-8">
          English Language Tutor
        </p>
        
        {/* Твой заголовок */}
        <h1 className="text-display text-[10vw] md:text-[120px] mb-10">
          Смыслы и <br />
          <span className="gold-text italic text-[11vw] md:text-[140px]">Контент.</span>
        </h1>

        {/* Твой подзаголовок */}
        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-zinc-400 text-xl md:text-2xl font-light leading-snug">
            Уроки английского, которые вы полюбите. <br />
            Индивидуальный подход, фокус на результат <br />
            и современные методики обучения.
          </p>
        </div>

        <a href={tgLink} target="_blank" className="premium-btn inline-block">
          Записаться на урок
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
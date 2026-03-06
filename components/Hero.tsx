"use client";
import { motion } from "framer-motion";
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const tgLink = "https://t.me/@feluchio123"; // ЗАМЕНИ НА СВОЙ НИК

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full -z-10" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full text-center space-y-8"
      >
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase italic">
          Elevate Your <br />
          <span className="text-amber-500">English.</span>
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto font-light leading-relaxed">
          Индивидуальные уроки в Алматы и онлайн. Фокус на разговорную практику и ваши бизнес-цели.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <a href={tgLink} target="_blank" className="btn-primary flex items-center gap-2 group">
            Записаться в Telegram
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
"use client";
import { motion } from "framer-motion";
import { MessageCircle, Phone } from 'lucide-react';

const CTA = () => {
  const tgLink = "https://t.me/@feluchio123"; // ТВОЙ ТЕЛЕГРАМ
  const waLink = "https://wa.me/77479497689"; // ТВОЙ ВАТСАП (начни с 7)

  return (
    <section className="py-24 px-6 border-t border-white/5 bg-[#050505]">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto bg-amber-500 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
      >
        <h2 className="text-4xl md:text-7xl font-black text-black uppercase leading-[0.8] italic mb-8">
          Start Your <br /> Journey.
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a 
            href={tgLink}
            target="_blank"
            className="w-full md:w-auto flex items-center justify-center gap-3 bg-black text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl"
          >
            <MessageCircle size={24} />
            Telegram
          </a>
          
          <a 
            href={waLink}
            target="_blank"
            className="w-full md:w-auto flex items-center justify-center gap-3 bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl"
          >
            <Phone size={24} />
            WhatsApp
          </a>
        </div>
      </motion.div>

      <footer className="mt-20 text-center text-gray-700 text-[10px] uppercase tracking-[0.3em] font-medium">
        Kazakhstan, Almaty • Online Worldwide • {new Date().getFullYear()}
      </footer>
    </section>
  );
};

export default CTA;
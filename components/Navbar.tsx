"use client"; // Обязательно для анимаций
import { motion } from "framer-motion";

const Navbar = () => {
  const tgLink = "https://t.me/@feluchio123"; // ЗАМЕНИ НА СВОЙ НИК

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-xl font-bold tracking-tighter uppercase italic">
          English<span className="text-amber-500">.Direct</span>
        </div>
        
        <a 
          href={tgLink}
          target="_blank"
          className="border border-amber-500 text-amber-500 px-6 py-2 rounded-full text-sm font-semibold hover:bg-amber-500 hover:text-black transition-all"
        >
          Contact Me
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
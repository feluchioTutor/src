"use client";
import { motion } from "framer-motion";

const reviews = [
  {
    text: "Очень нравится подход к обучению. Нет этой школьной зубрежки, всё на живых примерах и интересе.",
    author: "Алина",
    label: "Студент"
  },
  {
    text: "За месяц занятий я начал говорить намного увереннее. Преподаватель очень круто объясняет сложные темы.",
    author: "Марк",
    label: "IT-специалист"
  },
  {
    text: "Формат онлайн оказался даже удобнее оффлайна. Экономия времени и отличный результат.",
    author: "Елена",
    label: "Предприниматель"
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-display text-5xl md:text-7xl text-right mb-20">
          Что говорят <br /> <span className="gold-text">ученики</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[40px] bg-zinc-900/50 border border-white/5 flex flex-col justify-between min-h-[300px]"
            >
              <p className="text-zinc-300 text-xl italic font-light leading-relaxed">
                «{rev.text}»
              </p>
              <div className="mt-8">
                <p className="text-gold font-black uppercase tracking-widest text-sm">{rev.author}</p>
                <p className="text-zinc-600 text-xs uppercase mt-1">{rev.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
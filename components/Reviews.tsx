import React from 'react';
import { Quote } from 'lucide-react';

const reviews = [
  {
    text: "За 3 месяца занятий я преодолела языковой барьер и начала свободно говорить на рабочие темы. Очень структурно!",
    author: "Айгерим",
    tag: "IT Specialist"
  },
  {
    text: "Преподаватель чувствует, где у тебя пробелы, и дает именно то, что нужно. Рекомендую всем, кто ценит время.",
    author: "Данияр",
    tag: "Manager"
  },
  {
    text: "Лучший формат для занятий онлайн. Всегда интересно, динамично и без воды.",
    author: "Мария",
    tag: "Student"
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-none">
            What <span className="text-amber-500">Students</span> Say
          </h2>
          <p className="text-gray-500 mt-4 text-lg">Реальные истории успеха моих учеников</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {reviews.map((item, index) => (
            <div 
              key={index} 
              className="break-inside-avoid gold-gradient-border p-8 bg-zinc-900/50 rounded-3xl relative"
            >
              <Quote className="absolute top-6 right-8 text-amber-500/20" size={40} />
              <p className="text-white/90 mb-6 italic leading-relaxed">
                "{item.text}"
              </p>
              <div className="flex flex-col">
                <span className="font-bold text-amber-500 uppercase tracking-widest text-sm">
                  {item.author}
                </span>
                <span className="text-gray-500 text-xs mt-1">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
import React from 'react';
import { Smartphone, Target, PenTool, Layout } from 'lucide-react';

const steps = [
  {
    icon: <Target className="text-amber-500" size={32} />,
    title: "Определение целей",
    desc: "Анализируем ваш текущий уровень и подбираем программу под конкретные задачи."
  },
  {
    icon: <Layout className="text-amber-500" size={32} />,
    title: "Индивидуальный план",
    desc: "Никаких скучных учебников. Только те материалы, которые интересны именно вам."
  },
  {
    icon: <Smartphone className="text-amber-500" size={32} />,
    title: "Онлайн-формат",
    desc: "Занимайтесь из любой точки мира через удобную платформу с интерактивными досками."
  },
  {
    icon: <PenTool className="text-amber-500" size={32} />,
    title: "Постоянный фидбек",
    desc: "Я всегда на связи в Telegram для проверки домашних заданий и быстрых ответов."
  }
];

const Steps = () => {
  return (
    <section id="lessons" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-4">
            Как мы будем <span className="text-amber-500 text-outline">работать</span>
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="gold-gradient-border p-8 bg-black/40 rounded-2xl flex flex-col items-start"
            >
              <div className="mb-6 p-3 bg-amber-500/10 rounded-xl">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
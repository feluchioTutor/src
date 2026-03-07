import { Target, Zap, Globe, MessageSquare } from 'lucide-react';

const steps = [
  { icon: <Target />, title: "Цель", desc: "Фокусируемся на ваших задачах: от переезда до карьеры." },
  { icon: <Zap />, title: "Драйв", desc: "Уроки, после которых хочется говорить, а не спать." },
  { icon: <Globe />, title: "Локация", desc: "Занимайтесь из Алматы или любой точки мира онлайн." },
  { icon: <MessageSquare />, title: "Связь", desc: "Личный куратор в Telegram 24/7 для ваших вопросов." }
];

const Steps = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black uppercase mb-16 tracking-tighter">
          Метод <span className="text-amber-500">обучения</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="premium-card p-10 group">
              <div className="text-amber-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase italic">{step.title}</h3>
              <p className="text-zinc-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
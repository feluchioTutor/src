import { Target, MessageCircle, Monitor, Calendar } from 'lucide-react';

const steps = [
  {
    icon: <Target className="w-8 h-8" />,
    title: "Индивидуально",
    desc: "Программа строится под ваши цели: от подготовки к интервью до свободного общения в путешествиях."
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "Поддержка 24/7",
    desc: "Я всегда на связи в Telegram. Проверка домашних заданий и ответы на вопросы в любое время."
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "Интерактив",
    desc: "Используем современные платформы и материалы, которые интересны именно вам, а не скучные учебники."
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Гибкий график",
    desc: "Занимайтесь в удобном темпе из любой точки мира. Мы подберем время, которое подходит именно вам."
  }
];

const Steps = () => {
  return (
    <section id="lessons" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-display text-5xl md:text-7xl mb-4">
            Как проходят <span className="gold-text">уроки</span>
          </h2>
          <div className="w-32 h-1 bg-gold" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {steps.map((step, i) => (
            <div key={i} className="group p-10 bg-zinc-900/30 border border-white/5 rounded-[40px] hover:border-gold/50 transition-all duration-500">
              <div className="text-gold mb-6 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h3 className="text-3xl font-black uppercase italic mb-4 tracking-tighter italic">
                {step.title}
              </h3>
              <p className="text-zinc-500 text-lg leading-relaxed">
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
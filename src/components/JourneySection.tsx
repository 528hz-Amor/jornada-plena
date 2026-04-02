import { useEffect } from "react";
import wellnessImage from "@/assets/wellness-still-life.jpg";
import { Sparkles, ArrowRight } from "lucide-react";

const pillars = [
  {
    emoji: "🧘‍♀️",
    title: "Corpo",
    description:
      "Reconexão com seu corpo como templo sagrado. Práticas de presença, respiração e cuidado físico consciente.",
    color: "bg-warm/40",
    shadow: "hover:shadow-[0_20px_40px_-15px_rgba(214,188,154,0.3)]",
  },
  {
    emoji: "🧠",
    title: "Mente",
    description:
      "Reprogramação de crenças limitantes, clareza mental e desenvolvimento de uma mentalidade de crescimento.",
    color: "bg-lilac/40",
    shadow: "hover:shadow-[0_20px_40px_-15px_rgba(204,188,214,0.3)]",
  },
  {
    emoji: "💗",
    title: "Emoção",
    description:
      "Inteligência emocional, acolhimento das emoções e desenvolvimento de equilíbrio e resiliência interior.",
    color: "bg-blush/40",
    shadow: "hover:shadow-[0_20px_40px_-15px_rgba(186,112,126,0.2)]",
  },
  {
    emoji: "✨",
    title: "Espírito",
    description:
      "Conexão com sua essência espiritual, propósito de vida e alinhamento com algo maior que você.",
    color: "bg-secondary/60",
    shadow: "hover:shadow-[0_20px_40px_-15px_rgba(150,150,150,0.15)]",
  },
];

const outcomes = [
  "Autoconhecimento profundo e duradouro",
  "Paz interior e equilíbrio emocional",
  "Clareza sobre seu propósito de vida",
  "Relacionamentos mais saudáveis e autênticos",
  "Confiança e amor próprio fortalecidos",
  "Uma vida vivida com inteireza e presença",
];

const JourneySection = () => {
  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>(".scroll-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elem = entry.target as HTMLElement;
            elem.classList.add("animate-fade-in-up");
            elem.style.opacity = "1";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    revealItems.forEach((item) => {
      item.style.opacity = "0";
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="jornada" className="py-24 md:py-32 bg-transparent relative">
      {/* Decorative text background with marquee animation */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full overflow-hidden select-none pointer-events-none z-0">
        <div className="flex whitespace-nowrap animate-marquee opacity-[0.03] md:opacity-[0.05] w-max">
          <span className="text-[20vw] font-display font-bold text-primary inline-block lining-nums">
            JORNADA 4C&nbsp;•&nbsp;JORNADA 4C&nbsp;•&nbsp;JORNADA 4C&nbsp;•&nbsp;JORNADA 4C&nbsp;•&nbsp;
          </span>
          <span className="text-[20vw] font-display font-bold text-primary inline-block lining-nums">
            JORNADA 4C&nbsp;•&nbsp;JORNADA 4C&nbsp;•&nbsp;JORNADA 4C&nbsp;•&nbsp;JORNADA 4C&nbsp;•&nbsp;
          </span>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="scroll-reveal text-sm font-body uppercase tracking-[0.4em] text-primary mb-4 font-bold">
            A Jornada de Transformação
          </p>
          <h2 className="scroll-reveal text-4xl md:text-5xl lg:text-6xl font-display font-light text-foreground mb-8">
            O Método <span className="italic font-semibold text-primary lining-nums">4C</span>
          </h2>
          <p className="scroll-reveal text-lg font-body text-muted-foreground leading-relaxed">
            Uma abordagem integrada que honra todas as dimensões do ser
            feminino, guiando você através de quatro pilares fundamentais.
          </p>
        </div>

        {/* 4 Pillars Grid with improved cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className={`${pillar.color} ${pillar.shadow} scroll-reveal group bg-white/40 backdrop-blur-sm rounded-[2rem] p-10 text-center border border-white/50 transition-all duration-700 hover:-translate-y-3 shadow-soft`}
            >
              <div className="w-20 h-20 bg-white/80 rounded-full flex items-center justify-center text-4xl mx-auto mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
                {pillar.emoji}
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                {pillar.title}
              </h3>
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Outcomes with better visual hierarchy */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 order-2 lg:order-1">
            <div className="space-y-4">
              <h3 className="scroll-reveal text-3xl md:text-4xl font-display font-light text-foreground flex items-center gap-3">
                <Sparkles className="text-primary w-6 h-6" />
                Resultados reais
              </h3>
              <p className="scroll-reveal text-lg font-body text-muted-foreground leading-relaxed">
                Ao final dessa jornada, você terá vivido uma transformação real e
                profunda. Não apenas no que você faz, mas em quem você é.
              </p>
            </div>

            <div className="grid gap-4">
              {outcomes.map((outcome, i) => (
                <div
                  key={i}
                  className="scroll-reveal group flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white shadow-soft hover:shadow-premium transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <p className="font-body text-base md:text-lg text-foreground/80 font-medium">{outcome}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="scroll-reveal relative order-1 lg:order-2">
            <div className="rounded-[3rem] overflow-hidden shadow-premium aspect-[4/5] relative z-10">
              <img
                src={wellnessImage}
                alt="Bem-estar e autocuidado feminino"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
            </div>
            {/* Decorative background shapes */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-warm/30 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-lilac/20 rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;

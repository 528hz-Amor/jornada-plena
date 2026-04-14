import { useEffect } from "react";
import wellnessImage from "@/assets/wellness-still-life.jpg";
import { Sparkles, ArrowRight } from "lucide-react";

const pillars = [
  {
    emoji: "🌿",
    title: "Corpo",
    phase: "Fase 1 — Reconectar",
    description: "Reconectar. Sair do automático para acessar o estado de Presença. Você começa voltando pra si: sair do piloto automático, perceber seu corpo no dia a dia, criar presença nas pequenas ações.",
    benefit: "você sente mais energia e começa a se escutar",
    color: "bg-accent/10 dark:bg-terracotta/20",
  },
  {
    emoji: "🌊",
    title: "Emoção",
    phase: "Fase 2 — Desaguar",
    description: "Desatar nós. Acolher emoções e se expressar com leveza e segurança. Aqui você para de travar ou reagir: entender suas emoções, acolher sem se afogar nelas, parar padrões que te sabotam.",
    benefit: "você ganha leveza emocional",
    color: "bg-accent/10 dark:bg-sage/20",
  },
  {
    emoji: "☀️",
    title: "Mente",
    phase: "Fase 3 — Clarear",
    description: "Clarear. Reduzir o ruído mental, reprogramar crenças e tomar decisões com segurança. Você começa a enxergar com clareza: identificar pensamentos que te limitam, tomar decisões com mais segurança, organizar sua vida de dentro pra fora.",
    benefit: "você para de se confundir e começa a se direcionar",
    color: "bg-accent/10 dark:bg-ochre/20",
  },
  {
    emoji: "🌳",
    title: "Espírito",
    phase: "Fase 4 — Enraizar",
    description: "Agora você sustenta. confiar mais em si mesma parar de recomeçar do zero construir consistência sem rigidez.",
    benefit: "sua vida começa a ter base",
    color: "bg-accent/10 dark:bg-clay/20",
  },
];

const outcomes = [
  "mais presença no dia a dia",
  "decisões mais claras",
  "emoções equilibradas",
  "confiança em si mesma",
  "rotina que te sustenta",
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
    <section id="jornada" className="py-24 md:py-32 bg-background relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="scroll-reveal text-sm font-sans uppercase tracking-[0.4em] text-accent mb-4 font-bold">
            O Caminho da Inteireza
          </p>
          <h2 className="scroll-reveal text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-8">
            O Método <span className="italic text-accent">4C</span>
          </h2>
          <p className="scroll-reveal text-lg font-body text-foreground/70 leading-relaxed mb-6">
            Uma abordagem integrativa que honra todas as dimensões do Ser. A jornada te guia na integração do corpo, mente, emoção e espírito à sua rotina real.
          </p>
          <p className="scroll-reveal text-xl font-display italic text-accent font-medium">
            Um caminho simples, profundo e possível que acontece dentro da sua rotina.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className={`${pillar.color} scroll-reveal group backdrop-blur-md rounded-[2.5rem] p-10 border border-border transition-all duration-700 hover:-translate-y-3 shadow-soft`}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-16 h-16 bg-white/20 dark:bg-white/10 rounded-full flex items-center justify-center text-3xl shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-500">
                  {pillar.emoji}
                </div>
                <div>
                  <p className="text-xs font-sans uppercase tracking-widest text-accent font-bold mb-1">{pillar.phase}</p>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-base text-foreground/70 leading-relaxed mb-4 whitespace-pre-line">
                    {pillar.description}
                  </p>
                  <p className="font-sans text-sm font-bold text-accent italic">
                    👉 {pillar.benefit}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Outcomes */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 order-2 lg:order-1">
            <div className="space-y-4">
              <h3 className="scroll-reveal text-2xl md:text-3xl font-display font-bold text-foreground flex items-center gap-3 leading-tight uppercase">
                <Sparkles className="text-accent w-6 h-6 shrink-0" />
                O QUE MUDA NA SUA VIDA
              </h3>
              <p className="scroll-reveal text-lg font-body text-foreground opacity-80 font-medium">
                Você não vai sair com mais tarefas. Vai sair diferente:
              </p>
            </div>

            <div className="grid gap-4">
              {outcomes.map((outcome, i) => (
                <div
                  key={i}
                  className="scroll-reveal group flex items-center gap-4 bg-card backdrop-blur-sm rounded-2xl px-6 py-4 border border-border shadow-soft hover:shadow-premium transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <p className="font-body text-base md:text-lg text-foreground/80 font-medium">{outcome}</p>
                </div>
              ))}
            </div>

            <div className="scroll-reveal pt-6 border-t border-border">
               <p className="text-xl font-display font-bold text-foreground italic">
                 "Sua vida não precisa ser perfeita. Mas pode ser leve, presente e verdadeiramente sua."
               </p>
            </div>
          </div>

          <div className="scroll-reveal relative order-1 lg:order-2">
            <div className="rounded-[3rem] overflow-hidden shadow-premium aspect-[4/5] relative z-10">
              <img
                src={wellnessImage}
                alt="Bem-estar e autocuidado Vida Lírica"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent" />
            </div>
            {/* Decorative background shapes */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/10 rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;

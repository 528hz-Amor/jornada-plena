import { useEffect } from "react";
import wellnessImage from "@/assets/wellness-still-life-optimized.jpg";
import { Sparkles, ArrowRight } from "lucide-react";

const pillars = [
  {
    emoji: "🌿",
    title: "Corpo",
    phase: "Fase 1 — Reconectar",
    description: "Voltar a perceber o corpo, a respiração e os sinais que costumam ser ignorados na correria. A presença começa nas pequenas ações do cotidiano.",
    benefit: "mais percepção das suas necessidades e limites",
    color: "bg-accent/10 dark:bg-terracotta/20",
  },
  {
    emoji: "🌊",
    title: "Emoção",
    phase: "Fase 2 — Desaguar",
    description: "Reconhecer emoções sem julgamento e encontrar formas mais seguras de expressá-las. O objetivo não é deixar de sentir, mas aprender a se relacionar melhor com o que sente.",
    benefit: "mais recursos para atravessar momentos emocionalmente difíceis",
    color: "bg-accent/10 dark:bg-sage/20",
  },
  {
    emoji: "☀️",
    title: "Mente",
    phase: "Fase 3 — Clarear",
    description: "Observar pensamentos, crenças e padrões que alimentam ansiedade ou confusão. Com mais consciência, você pode fazer escolhas coerentes com o que realmente importa.",
    benefit: "mais clareza para escolher e se posicionar",
    color: "bg-accent/10 dark:bg-ochre/20",
  },
  {
    emoji: "🌳",
    title: "Espírito",
    phase: "Fase 4 — Enraizar",
    description: "Cultivar sentido, conexão e confiança na própria caminhada. A espiritualidade é acolhida como experiência pessoal, sem imposições ou respostas prontas.",
    benefit: "mais conexão com seus valores, propósito e direção",
    color: "bg-accent/10 dark:bg-clay/20",
  },
];

const outcomes = [
  "Perceber seus limites antes de chegar à exaustão",
  "Compreender melhor suas emoções e necessidades",
  "Fazer escolhas com mais consciência e clareza",
  "Criar práticas de cuidado que cabem na sua rotina",
  "Fortalecer a confiança na própria caminhada",
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
            Uma abordagem que olha para você por inteiro. Corpo, emoções, mente e espiritualidade são acolhidos de forma integrada, respeitando sua história e suas crenças.
          </p>
          <p className="scroll-reveal text-xl font-display italic text-accent font-medium">
            Não se trata de fazer tudo de uma vez, mas de criar mudanças conscientes que possam ser vividas e sustentadas.
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
                O QUE VOCÊ PODE CULTIVAR
              </h3>
              <p className="scroll-reveal text-lg font-body text-foreground opacity-80 font-medium">
                O processo não acrescenta cobranças. Ele ajuda você a desenvolver novos recursos internos:
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
                 "Cuidar de si não é fugir da vida. É aprender a habitá-la com mais presença."
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

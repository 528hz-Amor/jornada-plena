import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
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
    <section id="contato" className="py-20 md:py-32 relative bg-background text-foreground overflow-hidden transition-colors duration-300 border-t border-border">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
         <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent rounded-full blur-3xl" />
         <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
        {/* SELO NO TOPO */}
        <div className="inline-flex items-center gap-2 mb-10 scroll-reveal px-5 py-2 rounded-full bg-accent/10 backdrop-blur-sm border border-accent/20 text-accent text-xs font-sans font-bold uppercase tracking-[0.3em] leading-none">
          <Sparkles className="w-4 h-4" />
          Seu primeiro passo pode ser simples
        </div>

        {/* TEXTO SUPERIOR */}
        <div className="scroll-reveal mb-4">
          <p className="text-lg md:text-xl font-display font-medium opacity-90 italic">
            Você não precisa ter todas as respostas para começar.
          </p>
        </div>

        <h2 className="scroll-reveal text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
          Pode começar encontrando um espaço <br className="hidden md:block" />
          <span className="italic text-accent">seguro para ser escutado.</span>
        </h2>

        <div className="scroll-reveal mb-12">
          <p className="text-lg md:text-xl font-body opacity-80 leading-relaxed max-w-2xl mx-auto">
            Ao preencher o formulário, você compartilha um pouco do seu momento e dá o primeiro passo para compreender se este acompanhamento faz sentido para você.
          </p>
        </div>

        <div className="scroll-reveal flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button
            size="lg"
            className="w-full sm:w-auto max-w-full h-auto min-h-[64px] py-4 px-6 sm:px-12 text-sm md:text-base rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-premium hover:shadow-gold hover:-translate-y-1 transition-all duration-500 font-sans uppercase font-bold tracking-[0.2em] group whitespace-normal flex-wrap"
            asChild
          >
            <a
              href="https://form.respondi.app/RhAy0nd6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-wrap items-center justify-center gap-3 text-center whitespace-normal break-words"
            >
              Quero preencher o formulário
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>

        <div className="scroll-reveal mb-16">
            <p className="text-2xl md:text-4xl font-display font-bold italic text-accent/80">
                "Quero começar a me escutar com mais cuidado"
            </p>
        </div>

        {/* GRID DE DIFERENCIAIS */}
        <div className="scroll-reveal pt-12 border-t border-border">
          <div className="grid md:grid-cols-3 gap-10 text-left">
            <div className="space-y-4">
              <h4 className="font-display text-xl font-bold text-accent">A partir de onde você está</h4>
              <p className="text-base font-body opacity-70 leading-relaxed">
                O cuidado é pensado para a sua realidade, respeitando seu tempo, seus limites e o momento que você está vivendo.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-display text-xl font-bold text-accent">Com presença e continuidade</h4>
              <p className="text-base font-body opacity-70 leading-relaxed">
                Ao longo de quatro meses, você recebe acompanhamento para compreender padrões e cultivar mudanças possíveis no cotidiano.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-display text-xl font-bold text-accent">Integração, não perfeição</h4>
              <p className="text-base font-body opacity-70 leading-relaxed">
                Corpo, mente, emoções e espiritualidade são acolhidos de forma integrada, sem exigir que você esteja bem o tempo todo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

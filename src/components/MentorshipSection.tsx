import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import mentorshipImage from "@/assets/mentorship-session-optimized.jpg";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Acolher seu momento",
    description:
      "O processo começa com uma escuta cuidadosa da sua história, da sua rotina e do que hoje pede atenção. Antes de buscar respostas, criamos espaço para compreender.",
    color: "bg-accent/10",
  },
  {
    number: "02",
    title: "Encontrar direção",
    description:
      "A partir do que emerge nos encontros, construímos caminhos e práticas personalizados, respeitando suas necessidades, seus valores e o seu ritmo.",
    color: "bg-accent/20",
  },
  {
    number: "03",
    title: "Integrar na vida real",
    description:
      "O cuidado ganha continuidade no cotidiano. Você aprende a reconhecer seus movimentos, acolher seus limites e sustentar mudanças possíveis sem rigidez.",
    color: "bg-accent/5",
  },
];

const includes = [
  "4 meses de acompanhamento individual",
  "Encontros ao vivo a cada 15 dias",
  "Suporte contínuo via Whatsapp",
  "Check-ins semanais",
  "Acesso a práticas do Método 4C",
  "Consulta de Clareza com Baralho Cigano",
  "Mapa de Alinhamento personalizado",
  "Tudo adaptado à sua rotina real",
];

const MentorshipSection = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

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

    const handleMouseMove = (e: MouseEvent) => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section id="mentoria" className="py-24 md:py-32 bg-background relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="scroll-reveal text-sm font-sans uppercase tracking-[0.4em] text-accent mb-4 font-bold">
            O Acompanhamento
          </p>
          <h2 className="scroll-reveal text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground mb-8 lining-nums flex flex-col items-center">
            VIDA LÍRICA
            <span className="italic text-3xl md:text-5xl lg:text-6xl -mt-2 md:-mt-4 text-accent">
              um espaço para você
            </span>
          </h2>
          <p className="scroll-reveal text-lg font-body text-muted-foreground leading-relaxed">
            Um processo individual e acolhedor para ajudar você a compreender suas emoções, recuperar clareza e cultivar uma relação mais consciente consigo.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {steps.map((step) => (
            <div
              key={step.number}
              className="scroll-reveal group relative bg-card backdrop-blur-sm rounded-3xl p-10 border border-border shadow-soft hover:shadow-premium transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`absolute -top-4 -right-4 w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center text-2xl font-display font-bold text-accent shadow-sm group-hover:scale-110 transition-transform duration-500 lining-nums`}>
                {step.number}
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4 pr-8">
                {step.title}
              </h3>
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-24 items-center">
          <div
            ref={imageRef}
            className="scroll-reveal relative group cursor-default w-full min-w-0 mx-auto"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="w-full max-w-full rounded-[3rem] overflow-hidden shadow-premium aspect-[4/3] lg:aspect-[16/9] relative z-10 mx-auto">
              <img
                src={mentorshipImage}
                alt="Sessão de mentoria Vida Lírica"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
            </div>

            {/* Interactive Reveal Overlay */}
            <motion.div
              className="absolute inset-0 rounded-[3rem] overflow-hidden pointer-events-none z-20 hidden lg:block"
              style={{
                clipPath: `circle(${isHovered ? '120px' : '0px'} at ${mousePos.x}px ${mousePos.y}px)`,
                transition: { type: "spring", damping: 25, stiffness: 120 }
              }}
            >
              <img
                src={mentorshipImage}
                alt="Revealed Mentorship"
                className="w-full h-full object-cover contrast-[1.1] brightness-[1.05]"
              />
            </motion.div>

            {/* Organic decorative shape behind image */}
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10 hidden lg:block" />
          </div>

          <div className="space-y-10">
            <div className="space-y-4">
              <h3 className="scroll-reveal text-3xl md:text-4xl font-display font-bold text-foreground flex items-center gap-3">
                <Sparkles className="text-accent w-6 h-6 shrink-0" />
                Como você será acompanhado
              </h3>
              <p className="scroll-reveal text-lg font-body text-muted-foreground">
                Presença, orientação e práticas integrativas adaptadas ao seu momento de vida.
              </p>
            </div>

            <div className="grid sm:grid-cols-1 gap-4">
              {includes.map((item, i) => (
                <div key={i} className="scroll-reveal flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                    <Check className="w-5 h-5 text-accent group-hover:text-accent-foreground" />
                  </div>
                  <p className="font-body text-base md:text-lg text-foreground/80 group-hover:text-foreground transition-colors pt-1">{item}</p>
                </div>
              ))}
            </div>

            <div className="scroll-reveal bg-card backdrop-blur-sm rounded-[2rem] p-8 border border-border shadow-soft">
              <p className="font-display text-xl text-accent font-bold mb-3 italic">
                ✨ Um cuidado que respeita sua realidade
              </p>
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Você não precisa se tornar outra pessoa para começar a se cuidar.</strong> O acompanhamento integra corpo, mente, emoções e espiritualidade com práticas simples, possíveis e conectadas à sua rotina.
              </p>
            </div>

            <div className="scroll-reveal pt-4">
              <Button
                size="lg"
                className="w-full sm:w-auto h-auto min-h-[64px] py-4 px-10 text-[10px] md:text-xs rounded-full bg-primary text-primary-foreground hover:bg-primary/95 shadow-premium hover:shadow-gold hover:-translate-y-1.5 transition-all duration-500 font-sans uppercase font-bold tracking-[0.3em] group whitespace-normal break-words"
                asChild
              >
                <a
                  href="https://form.respondi.app/RhAy0nd6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-wrap items-center justify-center gap-3 text-center whitespace-normal break-words"
                >
                  Quero conhecer o acompanhamento
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorshipSection;

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import mentorshipImage from "@/assets/mentorship-session.jpg";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Seu Ponto de Partida",
    description:
      "O primeiro passo da transformação é saber onde você Está. Aqui analisamos com profundidade sua Rotina, Hábitos, Desafios e Sonhos.",
    color: "bg-accent/10",
  },
  {
    number: "02",
    title: "Mapa de Alinhamento",
    description:
      "Construímos um plano personalizado, simples e prático para implementar no seu dia-a-dia práticas alinhadas à vida que você deseja.",
    color: "bg-accent/20",
  },
  {
    number: "03",
    title: "Ritual de Integração",
    description:
      "Aqui nós comemoramos e reconhecemos suas vitórias, enquanto você usufrui de uma vida plena, com prazer e propósito.",
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="mentoria" className="py-24 md:py-32 bg-background relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="scroll-reveal text-sm font-sans uppercase tracking-[0.4em] text-accent mb-4 font-bold">
            A Mentoria
          </p>
          <h2 className="scroll-reveal text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground mb-8 lining-nums flex flex-col items-center">
            VIDA LÍRICA
            <span className="italic text-3xl md:text-5xl lg:text-6xl -mt-2 md:-mt-4 text-accent">
              o acompanhamento
            </span>
          </h2>
          <p className="scroll-reveal text-lg font-body text-muted-foreground leading-relaxed">
            Um acompanhamento personalizado que integra Corpo, Mente, Emoções e Espírito em uma rotina simples e sustentável.
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
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          <div
            ref={imageRef}
            className="scroll-reveal relative group cursor-default"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="rounded-[3rem] overflow-hidden shadow-premium aspect-[4/3] relative z-10">
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
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
          </div>

          <div className="space-y-10">
            <div className="space-y-4">
              <h3 className="scroll-reveal text-3xl md:text-4xl font-display font-bold text-foreground flex items-center gap-3">
                <Sparkles className="text-accent w-6 h-6 shrink-0" />
                O que está incluído
              </h3>
              <p className="scroll-reveal text-lg font-body text-muted-foreground">
                Uma experiência imersiva projetada para o seu crescimento.
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
                ✨ O que nos diferencia
              </p>
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Aqui, o autocuidado cria raiz.</strong> Você não precisa ser perfeita. Nem rígida. Muito menos fugir da sua vida. Nosso método integra as 4 dimensões do Ser em uma rotina simples e prática, que sustenta sua versão inteira. Você aprende a viver o que já sabe.
              </p>
            </div>

            <div className="scroll-reveal pt-4">
              <Button
                size="lg"
                className="w-full sm:w-auto h-auto min-h-[64px] py-4 px-10 text-[10px] md:text-xs rounded-full bg-primary text-primary-foreground hover:bg-primary/95 shadow-premium hover:shadow-gold hover:-translate-y-1.5 transition-all duration-500 font-sans uppercase font-bold tracking-[0.3em] group"
                onClick={() => scrollToSection("contato")}
              >
                <span className="flex items-center justify-center gap-3">
                  Quero construir uma vida que me sustenta
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorshipSection;

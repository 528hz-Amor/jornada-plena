import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import mentorshipImage from "@/assets/mentorship-session.jpg";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Autoconhecimento Profundo",
    description:
      "Mergulhamos juntas na sua história, padrões e crenças para entender quem você realmente é.",
    color: "bg-blush/20",
  },
  {
    number: "02",
    title: "Reconexão Interior",
    description:
      "Através de práticas integradas, você reconecta corpo, mente, emoção e espírito.",
    color: "bg-lilac/20",
  },
  {
    number: "03",
    title: "Transformação & Ação",
    description:
      "Com clareza e propósito, você começa a viver de forma autêntica e alinhada com sua essência.",
    color: "bg-warm/20",
  },
];

const includes = [
  "Sessões individuais de mentoria profunda",
  "Encontros em grupo com mulheres em jornada",
  "Práticas de meditação e autocuidado",
  "Material exclusivo de apoio e reflexão",
  "Suporte contínuo via grupo privado",
  "Acesso a conteúdos e ferramentas do método",
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
    <section id="mentoria" className="py-24 md:py-32 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="scroll-reveal text-5xl md:text-7xl lg:text-8xl font-display font-light text-foreground mb-8 lining-nums flex flex-col items-center">
            4C
            <span className="italic font-semibold text-primary text-3xl md:text-5xl lg:text-6xl -mt-2 md:-mt-4">
              a mentoria
            </span>
          </h2>
          <p className="scroll-reveal text-lg font-body text-muted-foreground leading-relaxed">
            Um programa completo de mentoria que integra todas as dimensões do
            ser, guiando você em uma jornada de autodescoberta, cura e
            empoderamento.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {steps.map((step) => (
            <div
              key={step.number}
              className="scroll-reveal group relative bg-white/60 backdrop-blur-sm rounded-3xl p-10 border border-white shadow-soft hover:shadow-premium transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`absolute -top-4 -right-4 w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center text-2xl font-display font-bold text-primary shadow-sm group-hover:scale-110 transition-transform duration-500 lining-nums`}>
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            ref={imageRef}
            className="scroll-reveal relative group cursor-default"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="rounded-[3rem] overflow-hidden shadow-premium aspect-[4/3] relative z-10 grayscale-[0.2] contrast-[1.05]">
              <img
                src={mentorshipImage}
                alt="Sessão de mentoria feminina"
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
                className="w-full h-full object-cover contrast-[1.2] brightness-[1.1]"
              />
            </motion.div>

            {/* Organic decorative shape behind image */}
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-blush/30 rounded-full blur-3xl -z-10" />
          </div>

          <div className="space-y-10">
            <div className="space-y-4">
              <h3 className="scroll-reveal text-3xl md:text-4xl font-display font-light text-foreground flex items-center gap-3">
                <Sparkles className="text-primary w-6 h-6" />
                O que está incluído
              </h3>
              <p className="scroll-reveal text-lg font-body text-muted-foreground">
                Uma experiência imersiva desenhada para o seu crescimento.
              </p>
            </div>

            <div className="grid sm:grid-cols-1 gap-4">
              {includes.map((item, i) => (
                <div key={i} className="scroll-reveal flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-body text-base md:text-lg text-foreground/80 group-hover:text-foreground transition-colors">{item}</p>
                </div>
              ))}
            </div>

            <div className="scroll-reveal bg-gradient-to-br from-lilac/30 to-white/50 backdrop-blur-sm rounded-[2rem] p-8 border border-white shadow-soft">
              <p className="font-display text-xl text-foreground font-bold mb-3 italic">
                ✨ O que nos diferencia
              </p>
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                Nosso método integra todas as dimensões do ser — corpo, mente, emoção e espírito — em uma abordagem profunda e amorosa. Não é coaching, não é terapia. É uma jornada de inteireza.
              </p>
            </div>

            <div className="scroll-reveal pt-4">
              <Button
                variant="hero"
                size="lg"
                className="w-full sm:w-auto px-12 group"
                onClick={() => scrollToSection("contato")}
              >
                Quero Fazer Parte
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorshipSection;

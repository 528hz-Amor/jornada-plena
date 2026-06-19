import { useEffect, useRef, useState } from "react";
import mentorPortrait from "@/assets/mentor-portrait-optimized.jpg";
import mandala from "@/assets/mandala-decoration.png";
import { motion } from "framer-motion";

const AboutSection = () => {
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
      { threshold: 0.1 },
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
    <section
      id="sobre"
      className="py-24 md:py-32 bg-background relative overflow-hidden transition-colors duration-300"
    >
      {/* Decorative Mandalas */}
      <motion.img
        animate={{ rotate: -360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        src={mandala}
        className="absolute top-1/2 -left-32 w-[500px] h-[500px] sm:-left-20 sm:w-[380px] sm:h-[380px] md:w-[500px] md:h-[500px] opacity-[0.03] grayscale dark:invert pointer-events-none"
        alt=""
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">

          {/* Portrait with Circular Frame */}
          <div
            ref={imageRef}
            className="relative group order-2 lg:order-1 flex justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative w-full max-w-[450px] aspect-square">
               {/* Orbital Accent Rings */}
               <div className="absolute inset-0 border border-accent/20 rounded-full scale-110 animate-spin-slow" />
               <div className="absolute inset-2 border border-accent/10 rounded-full scale-105" />

               <div className="scroll-reveal relative z-10 rounded-full overflow-hidden shadow-2xl border-2 border-accent/20 aspect-square">
                 <img
                   src={mentorPortrait}
                   alt="Mentora Bia - Vida Lírica"
                   className="w-full h-full object-cover grayscale-[0.1] sepia-[0.1]"
                   loading="lazy"
                 />
                 <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
               </div>
            </div>

            {/* Decorative organic shapes */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-accent/10 -z-10 blur-3xl" />
          </div>

          {/* Bio Content */}
          <div
            className="space-y-8 order-1 lg:order-2"
          >
            <div className="space-y-4">
              <p className="scroll-reveal text-sm font-sans uppercase tracking-[0.4em] text-accent font-bold">
                QUEM ACOMPANHA VOCÊ
              </p>
              <h2 className="scroll-reveal text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
                Prazer, eu sou a <br />
                <span className="italic text-accent">Bia</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg font-body text-foreground/80 leading-relaxed">
              <p className="scroll-reveal">
                Minha própria busca por uma vida com mais <strong>Presença, Verdade e Simplicidade</strong> me levou de São Paulo, onde nasci e cresci, para uma vida mais próxima da natureza, no Sul de Minas Gerais.
              </p>
              <p className="scroll-reveal">
                Sou psicóloga formada pela PUC-SP, facilitadora de práticas corporais e de liberação emocional, cartomante e benzedeira. Reúno conhecimentos terapêuticos e integrativos para acolher cada pessoa em sua totalidade.
              </p>
              <p className="scroll-reveal">
                Acredito em um cuidado que respeita o seu tempo, a sua história e a sua realidade. Sem fórmulas prontas, cobranças excessivas ou a necessidade de parecer bem o tempo todo.
              </p>
              <p className="scroll-reveal font-medium text-accent">
                Meu propósito é oferecer um espaço seguro para você se escutar, compreender suas emoções e encontrar caminhos possíveis para viver com mais inteireza.
              </p>
            </div>

            {/* Premium Stats Grid */}
            <div className="grid grid-cols-2 gap-4 py-8 border-y border-border">
              <div className="scroll-reveal text-center">
                <p className="text-4xl md:text-5xl font-display font-bold text-accent">5 anos</p>
                <p className="text-[10px] md:text-xs font-sans uppercase tracking-widest opacity-60 mt-2">de experiência</p>
              </div>
              <div className="scroll-reveal text-center border-l border-border">
                <p className="text-4xl md:text-5xl font-display font-bold text-accent">100</p>
                <p className="text-[10px] md:text-xs font-sans uppercase tracking-widest opacity-60 mt-2">pessoas alcançadas</p>
              </div>
            </div>

            {/* Values - Circular/Organic approach */}
            <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
              {[
                "Acolhimento", "Integração", "Autenticidade", "Presença", "Simplicidade"
              ].map((value, i) => (
                <div key={i} className="scroll-reveal px-6 py-2 rounded-full border border-accent/20 bg-accent/5 text-accent text-sm font-sans font-bold uppercase tracking-widest">
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

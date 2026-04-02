import { useEffect, useRef, useState } from "react";
import mentorPortrait from "@/assets/mentor-portrait.jpg";
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
      className="py-24 md:py-32 bg-transparent relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">

          {/* Portrait with Organic Shape & Reveal Effect */}
          <div
            ref={imageRef}
            className="relative group order-1 lg:order-1 cursor-default"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="scroll-reveal relative z-10 rounded-organic-1 overflow-hidden shadow-premium aspect-[4/5] grayscale-[0.2] contrast-[1.05] transition-transform duration-700 group-hover:scale-[1.01]">
              <img
                src={mentorPortrait}
                alt="Mentora Vida Lírica"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
            </div>

            {/* Interactive Reveal Overlay */}
            <motion.div
              className="absolute inset-0 rounded-organic-1 overflow-hidden pointer-events-none z-20 hidden lg:block"
              style={{
                clipPath: `circle(${isHovered ? '120px' : '0px'} at ${mousePos.x}px ${mousePos.y}px)`,
                transition: { type: "spring", damping: 25, stiffness: 120 }
              }}
            >
              <img
                src={mentorPortrait}
                alt="Revealed Portrait"
                className="w-full h-full object-cover contrast-[1.2] brightness-[1.1]"
              />
            </motion.div>

            {/* Decorative organic shapes */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-blush/40 -z-10 blur-2xl animate-pulse" />
            <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-lilac/30 -z-10 blur-xl" />
          </div>

          {/* Bio Content */}
          <div
            className="space-y-8 order-2 lg:order-2"
          >
            <div className="space-y-4">
              <p className="scroll-reveal text-sm font-body uppercase tracking-[0.4em] text-primary font-bold">
                Conheça sua Mentora
              </p>
              <h2 className="scroll-reveal text-4xl md:text-5xl lg:text-6xl font-display font-light text-foreground leading-tight">
                Uma vida dedicada à <br />
                <span className="italic font-semibold text-primary">transformação feminina</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg font-body text-muted-foreground leading-relaxed">
              <p className="scroll-reveal text-balance">
                Com mais de 20 anos de experiência em desenvolvimento humano,
                formação internacional em comportamento, inteligência emocional e
                espiritualidade aplicada.
              </p>
              <p className="scroll-reveal font-medium text-foreground/80">
                Minha missão é guiar mulheres a desbloquearem seu potencial,
                fortalecerem sua identidade e viverem com propósito.
              </p>
            </div>

            {/* Premium Stats Grid */}
            <div className="grid grid-cols-3 gap-4 py-8 border-y border-primary/10">
              <div className="scroll-reveal text-center">
                <p className="text-4xl md:text-5xl font-display font-bold text-primary">20+</p>
                <p className="text-[10px] md:text-xs font-body uppercase tracking-widest text-muted-foreground mt-2">Anos de Experiência</p>
              </div>
              <div className="scroll-reveal text-center border-x border-primary/10">
                <p className="text-4xl md:text-5xl font-display font-bold text-primary">5k+</p>
                <p className="text-[10px] md:text-xs font-body uppercase tracking-widest text-muted-foreground mt-2">Vidas Impactadas</p>
              </div>
              <div className="scroll-reveal text-center">
                <p className="text-4xl md:text-5xl font-display font-bold text-primary">12</p>
                <p className="text-[10px] md:text-xs font-body uppercase tracking-widest text-muted-foreground mt-2">Países Alcançados</p>
              </div>
            </div>

            {/* Mission/Vision/Values com Glassmorphism */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {[
                { title: "Missão", desc: "Despertar mulheres para a vida em inteireza." },
                { title: "Visão", desc: "Um mundo de mulheres conectadas à essência." },
                { title: "Valores", desc: "Autenticidade e profundidade." }
              ].map((item, i) => (
                <div key={i} className="scroll-reveal bg-white/40 backdrop-blur-md rounded-2xl p-5 border border-white/50 shadow-soft hover:shadow-premium transition-all duration-300">
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-xs md:text-sm font-body text-muted-foreground leading-snug">{item.desc}</p>
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

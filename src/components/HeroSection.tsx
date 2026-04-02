import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-woman.jpg";
import portrait from "@/assets/mentor-portrait.jpg";
import { ChevronRight, Play } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
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
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 110;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen lg:min-h-[85vh] xl:min-h-screen flex items-center bg-transparent pt-20 pb-16 lg:pt-0 lg:pb-0 overflow-x-hidden"
    >
      {/* 1. LAYER: BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-5%] -left-[5%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[10%] -right-[5%] w-[30%] h-[30%] bg-gold/10 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto relative z-10 px-6 md:px-12 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* 2. LAYER: TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl lg:max-w-md xl:max-w-xl space-y-8 md:space-y-10 z-20 order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-soft border border-primary/10 text-primary text-[10px] md:text-xs font-body font-bold uppercase tracking-[0.2em]">
              <motion.span
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-2 h-2 rounded-full bg-primary"
              />
              Método Jornada 4C
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-light leading-[1.05] text-foreground tracking-tighter">
              Sinta-se <br />
              <span className="relative inline-block">
                <span className="italic font-semibold text-primary">inteira</span>
                <motion.svg
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute -bottom-1 left-0 w-full h-3 text-primary/20"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path d="M2 10C50 2 150 2 198 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </motion.svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl font-body font-light text-muted-foreground leading-relaxed max-w-md lg:max-w-sm xl:max-w-md">
              Uma jornada profunda de reconexão com seu corpo, mente, emoção e espírito. Descubra sua verdadeira essência e viva com propósito.
            </p>

            <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-body text-gold font-bold tracking-widest uppercase pb-4">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
                <span>Corpo</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
                <span>Mente</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
                <span>Emoção</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
                <span>Espírito</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Button
                variant="hero"
                size="lg"
                className="w-full sm:w-auto h-16 px-10 text-lg rounded-full shadow-premium hover:shadow-card-hover transition-all duration-500"
                onClick={() => scrollToSection("contato")}
              >
                Iniciar Jornada
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>

              <button
                onClick={() => scrollToSection("sobre")}
                className="flex items-center gap-3 text-foreground font-body font-bold hover:text-primary transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-white shadow-soft border border-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-4 h-4 fill-primary text-primary ml-1" />
                </div>
                Ver Manifesto
              </button>
            </div>
          </motion.div>

          {/* 3. LAYER: IMAGE */}
          <div className="relative z-10 order-1 lg:order-2 flex justify-center lg:justify-end lg:pr-10">
            <motion.div
              ref={imageRef}
              className="relative h-[350px] sm:h-[450px] lg:h-[450px] xl:h-[600px] w-full max-w-[550px] lg:max-w-[400px] xl:max-w-[550px]"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Main Image Container */}
              <div className="absolute inset-0 rounded-[2.5rem] lg:rounded-organic-1 overflow-hidden shadow-2xl grayscale-[0.2] contrast-[1.05]">
                <img
                  src={heroImage}
                  className="w-full h-full object-cover"
                  alt="Vida Lirica Hero"
                />
                <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
              </div>

              {/* Interactive Reveal Circle */}
              <motion.div
                className="absolute inset-0 rounded-[2.5rem] lg:rounded-organic-1 overflow-hidden pointer-events-none hidden lg:block"
                style={{
                  clipPath: `circle(${isHovered ? '120px' : '0px'} at ${mousePos.x}px ${mousePos.y}px)`,
                  transition: { type: "spring", damping: 25, stiffness: 120 }
                }}
              >
                <img
                  src={heroImage}
                  className="w-full h-full object-cover scale-[1.01] contrast-[1.15] brightness-[1.05]"
                  alt="Revealed Hero"
                />
              </motion.div>

              {/* Elementos Flutuantes */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 w-24 h-24 lg:w-28 lg:h-28 bg-white/60 backdrop-blur-md rounded-full border border-white shadow-premium flex items-center justify-center p-3 text-center text-[8px] lg:text-[9px] font-bold uppercase tracking-wider text-primary z-30"
              >
                Transformação Consciente
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 lg:-bottom-2 lg:left-0 px-4 py-3 lg:px-5 lg:py-3 bg-background/80 backdrop-blur-md rounded-2xl border border-primary/10 shadow-premium z-30"
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2].map((i) => (
                      <div key={i} className="w-6 h-6 lg:w-7 lg:h-7 rounded-full border-2 border-background overflow-hidden">
                        <img src={portrait} alt="User" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <span className="text-[10px] lg:text-[11px] font-body font-bold text-foreground">+500 Almas</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;

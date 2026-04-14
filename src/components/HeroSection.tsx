import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-woman.jpg";
import mandala from "@/assets/mandala-decoration.png";
import { ChevronRight, Play } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

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
      className="relative min-h-screen flex items-center bg-background pt-20 lg:pt-10 pb-16 overflow-hidden transition-colors duration-300"
    >
      {/* Mystical Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.img
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          src={mandala}
          className="absolute -top-24 -left-24 w-[600px] h-[600px] opacity-[0.03] grayscale dark:invert"
          alt=""
        />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(197,160,89,0.08),transparent)]" />
      </div>

      <div className="container mx-auto relative z-10 px-6 md:px-12 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-xl lg:max-w-md xl:max-w-xl space-y-8 md:space-y-10 z-20 order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 backdrop-blur-md border border-accent/20 text-accent text-[10px] md:text-xs font-sans font-bold uppercase tracking-[0.3em]">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Sua Essência é Sagrada
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-display font-bold leading-[1.05] text-foreground tracking-tight">
                Viva com <br />
                <span className="relative inline-block text-accent">
                  <span className="italic">Presença</span>
                  <motion.svg
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="absolute -bottom-2 left-0 w-full h-4 text-accent/30"
                    viewBox="0 0 200 12"
                    fill="none"
                  >
                    <path d="M2 10C50 2 150 2 198 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </motion.svg>
                </span>
                <br /><span>e Inteireza</span>
              </h1>
              <p className="text-xl md:text-2xl font-display italic text-accent opacity-80 font-medium">
                "Você não precisa aprender mais. <br className="hidden md:block" /> Precisa conseguir viver o que já sabe."
              </p>
            </div>

            <p className="text-lg md:text-xl font-body text-muted-foreground leading-relaxed max-w-md">
              Uma jornada de reconexão com sua natureza selvagem e cíclica. Enraíze sua rotina no que é essencial.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-8 pt-4">
              <Button
                size="lg"
                className="w-full sm:w-auto h-auto min-h-[64px] py-4 px-10 text-[10px] md:text-[11px] rounded-full bg-primary text-primary-foreground hover:bg-primary/95 shadow-premium hover:shadow-gold hover:-translate-y-1.5 transition-all duration-500 font-sans uppercase font-bold tracking-[0.3em] group"
                onClick={() => scrollToSection("contato")}
              >
                <span className="flex items-center justify-center gap-3">
                  Quero Aplicar para a Mentoria
                  <ChevronRight className="shrink-0 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>

              <button
                onClick={() => scrollToSection("sobre")}
                className="flex items-center gap-5 text-foreground/80 hover:text-accent transition-all duration-500 group"
              >
                <div className="relative flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-accent/5 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/10 group-hover:border-accent/40 group-hover:scale-110 transition-all duration-500">
                    <Play className="w-4 h-4 fill-accent text-accent ml-0.5" />
                  </div>
                  {/* Outer pulse ring */}
                  <div className="absolute inset-0 rounded-full border border-accent/20 animate-ping opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-1000" />
                </div>
                <div className="flex flex-col items-start">
                    <span className="font-sans font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">Conhecer</span>
                    <span className="font-sans font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs opacity-60">a Bia</span>
                </div>
              </button>
            </div>
          </motion.div>

          <div className="relative z-10 order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="relative h-[400px] sm:h-[500px] lg:h-[500px] xl:h-[650px] w-full max-w-[500px] lg:max-w-[450px] xl:max-w-[550px]"
            >
              <div className="absolute inset-0 border-[1px] border-accent/30 rounded-full scale-105 animate-spin-slow pointer-events-none" />
              <div className="absolute inset-4 border-[1px] border-accent/10 rounded-full scale-105 pointer-events-none" />

              <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl border-4 border-accent/10">
                <img
                  src={heroImage}
                  className="w-full h-full object-cover grayscale-[0.2] sepia-[0.1]"
                  alt="Vida Lírica Hero"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent text-accent-foreground backdrop-blur-md rounded-full border border-accent/20 shadow-2xl flex items-center justify-center p-4 text-center z-30"
              >
                <p className="text-[10px] font-bold uppercase tracking-widest">O cuidado cria raiz</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

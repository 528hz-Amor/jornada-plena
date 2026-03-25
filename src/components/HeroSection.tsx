import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-woman.jpg";

const HeroSection = () => {
  useEffect(() => {
    const revealItems =
      document.querySelectorAll<HTMLElement>(".scroll-reveal");
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Ajuste para o navbar fixo
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Mulher em paz interior"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/30" />
      </div>

      <div className="container mx-auto relative z-10 pt-24">
        <div className="max-w-2xl space-y-8 animate-fade-in-up">
          <p className="scroll-reveal text-sm font-body uppercase tracking-[0.3em] text-primary">
            🌟 Integração do Autocuidado na Vida Diária
          </p>

          <h1 className="scroll-reveal text-4xl md:text-6xl lg:text-7xl font-display font-light leading-tight text-foreground">
            Desperte a{" "}
            <span className="font-semibold italic text-primary">
              mulher inteira
            </span>{" "}
            que existe em você
          </h1>

          <p className="scroll-reveal text-lg md:text-xl font-body font-light text-foreground leading-relaxed max-w-xl">
            Uma jornada profunda de reconexão com seu corpo, mente, emoção e
            espírito. Descubra sua verdadeira essência e viva com propósito,
            leveza e autenticidade.
          </p>

          <p className="scroll-reveal text-base font-body text-gold font-medium tracking-wide">
            🏵️ Corpo • Mente • Emoção • Espírito
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button variant="hero" size="lg" className="text-base px-10 py-6">
              <button
                onClick={() => scrollToSection("contato")}
                className="w-full"
              >
                Iniciar Minha Jornada
              </button>
            </Button>
            <Button
              variant="warmOutline"
              size="lg"
              className="text-base px-10 py-6"
            >
              <button
                onClick={() => scrollToSection("sobre")}
                className="w-full"
              >
                Conheça o Método
              </button>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

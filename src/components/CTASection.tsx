import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import mandala from "@/assets/mandala-decoration.png";

const CTASection = () => {
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
      id="contato"
      className="py-24 bg-primary/5 relative overflow-hidden"
    >
      <img
        src={mandala}
        alt=""
        className="absolute -left-20 -bottom-20 w-60 h-60 opacity-10 animate-float"
        loading="lazy"
        width={800}
        height={800}
      />
      <img
        src={mandala}
        alt=""
        className="absolute -right-20 -top-20 w-48 h-48 opacity-5"
        loading="lazy"
        width={800}
        height={800}
      />

      <div className="container mx-auto text-center max-w-3xl relative z-10">
        <p className="scroll-reveal text-sm font-body uppercase tracking-[0.3em] text-primary mb-4">
          Sua Jornada Começa Agora
        </p>
        <h2 className="scroll-reveal text-3xl md:text-5xl font-display font-light text-foreground mb-6">
          Você merece viver em{" "}
          <span className="italic font-semibold text-primary">inteireza</span>
        </h2>
        <p className="scroll-reveal text-lg font-body text-muted-foreground leading-relaxed mb-4">
          Não espere mais para se encontrar. Dê o primeiro passo em direção à
          mulher que você sempre soube que poderia ser. Eu estarei aqui para
          caminhar ao seu lado.
        </p>
        <p className="scroll-reveal text-base font-body text-foreground font-medium mb-10">
          🏵️ Corpo • Mente • Emoção • Espírito
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="hero"
            size="lg"
            className="text-base px-12 py-7"
            asChild
          >
            <a
              href="https://wa.me/5511977235584?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20mentoria%20Jornada%204C."
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale Comigo no WhatsApp
            </a>
          </Button>
          <Button
            variant="warmOutline"
            size="lg"
            className="text-base px-12 py-7"
          >
            <button
              onClick={() => scrollToSection("mentoria")}
              className="w-full"
            >
              Saiba Mais Sobre a Mentoria
            </button>
          </Button>
        </div>

        <p className="text-sm font-body text-muted-foreground mt-8 italic">
          "A maior revolução que uma mulher pode fazer é escolher a si mesma."
        </p>
      </div>
    </section>
  );
};

export default CTASection;

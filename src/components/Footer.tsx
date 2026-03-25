import { useEffect } from "react";

const Footer = () => {
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
    <footer className="py-12 bg-foreground">
      <div className="container mx-auto text-center space-y-4">
        <button
          onClick={() => scrollToSection("inicio")}
          className="scroll-reveal font-display text-2xl font-semibold text-primary-foreground tracking-wide"
        >
          Vida <span className="text-primary">Lirica</span>
        </button>
        <p className="scroll-reveal text-sm font-body text-primary-foreground/60">
          🏵️ Corpo • Mente • Emoção • Espírito
        </p>
        <div className="scroll-reveal flex justify-center gap-6 text-sm font-body text-primary-foreground/50">
          <button
            onClick={() => scrollToSection("sobre")}
            className="hover:text-primary transition-colors"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection("mentoria")}
            className="hover:text-primary transition-colors"
          >
            Mentoria
          </button>
          <button
            onClick={() => scrollToSection("blog")}
            className="hover:text-primary transition-colors"
          >
            Blog
          </button>
          <button
            onClick={() => scrollToSection("contato")}
            className="hover:text-primary transition-colors"
          >
            Contato
          </button>
        </div>
        <p className="scroll-reveal text-xs font-body text-primary-foreground/40 pt-4">
          © {new Date().getFullYear()} Vida Lirica. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

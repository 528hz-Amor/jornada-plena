import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, FormInput, Sparkles } from "lucide-react";

const CTASection = () => {
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

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contato" className="py-24 md:py-32 relative bg-transparent">
      <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
        <div className="inline-flex items-center gap-2 mb-8 scroll-reveal px-5 py-2 rounded-full bg-white shadow-soft border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest leading-none">
          <Sparkles className="w-4 h-4" />
          Sua Jornada Começa Agora
        </div>

        <h2 className="scroll-reveal text-5xl md:text-7xl font-display font-light text-foreground mb-8 leading-tight">
          Você merece viver em <br />
          <span className="italic font-semibold text-primary">inteireza real</span>
        </h2>

        <p className="scroll-reveal text-xl md:text-2xl font-body text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
          Não espere mais para se encontrar. Dê o primeiro passo em direção à
          mulher que você sempre soube que poderia ser.
        </p>

        <div className="scroll-reveal flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button
            variant="hero"
            size="lg"
            className="w-full sm:w-auto h-20 px-12 text-xl rounded-full shadow-premium"
            asChild
          >
            <a
              href="https://chat.whatsapp.com/CqV5pSHXNQz8vaAE48fXqh?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" />
              Entrar no Grupo
            </a>
          </Button>

          <Button
            variant="warmOutline"
            size="lg"
            className="w-full sm:w-auto h-20 px-12 text-xl rounded-full border-2"
            asChild
          >
            <a
              href="https://form.respondi.app/RhAy0nd6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FormInput className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" />
              Preencher Formulário
            </a>
          </Button>
        </div>

        <div className="scroll-reveal pt-12 border-t border-primary/10">
          <p className="text-2xl md:text-3xl font-display text-primary italic leading-relaxed">
            "A maior revolução que uma mulher pode fazer é escolher a si mesma."
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

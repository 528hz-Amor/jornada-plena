import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import mentorshipImage from "@/assets/mentorship-session.jpg";
import { Check } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Autoconhecimento Profundo",
    description:
      "Mergulhamos juntas na sua história, padrões e crenças para entender quem você realmente é.",
  },
  {
    number: "02",
    title: "Reconexão Interior",
    description:
      "Através de práticas integradas, você reconecta corpo, mente, emoção e espírito.",
  },
  {
    number: "03",
    title: "Transformação & Ação",
    description:
      "Com clareza e propósito, você começa a viver de forma autêntica e alinhada com sua essência.",
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
      const offset = 80; // Altura do navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="mentoria" className="py-24 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="scroll-reveal text-sm font-body uppercase tracking-[0.3em] text-primary mb-4">
            A Mentoria
          </p>
          <h2 className="scroll-reveal text-3xl md:text-5xl font-display font-light text-foreground mb-6">
            4C:{" "}
            <span className="italic font-semibold text-primary">
              o programa
            </span>
          </h2>
          <p className="scroll-reveal text-base font-body text-muted-foreground leading-relaxed">
            Um programa completo de mentoria que integra todas as dimensões do
            ser, guiando você em uma jornada de autodescoberta, cura e
            empoderamento.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {steps.map((step) => (
            <div
              key={step.number}
              className="scroll-reveal relative bg-background rounded-2xl p-8 border border-border/50"
            >
              <span className="text-6xl font-display font-bold text-primary/10 absolute top-4 right-6">
                {step.number}
              </span>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3 relative">
                {step.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed relative">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Image + Includes */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="scroll-reveal rounded-2xl overflow-hidden shadow-xl opacity-0">
            <img
              src={mentorshipImage}
              alt="Sessão de mentoria com grupo de mulheres"
              className="w-full h-auto object-cover"
              loading="lazy"
              width={1200}
              height={800}
            />
          </div>

          <div className="space-y-6">
            <h3 className="scroll-reveal text-2xl md:text-3xl font-display text-foreground">
              O que está incluído
            </h3>
            <div className="space-y-4">
              {includes.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <p className="font-body text-foreground">{item}</p>
                </div>
              ))}
            </div>

            <div className="scroll-reveal bg-lilac/30 rounded-xl p-6 mt-6">
              <p className="font-display text-lg text-foreground font-medium mb-2">
                ✨ O que nos diferencia
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Nosso método é único porque integra todas as dimensões do ser —
                corpo, mente, emoção e espírito — em uma abordagem profunda,
                personalizada e amorosa. Não é coaching, não é terapia. É uma
                jornada de inteireza.
              </p>
            </div>

            <Button
              variant="hero"
              size="lg"
              className="text-base px-10 py-6 mt-4"
              onClick={() => scrollToSection("contato")}
            >
              Quero Fazer Parte
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorshipSection;

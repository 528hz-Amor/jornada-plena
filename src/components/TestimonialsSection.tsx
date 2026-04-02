import { Quote, Star } from "lucide-react";
import { useEffect } from "react";

const testimonials = [
  {
    name: "Ana Carolina S.",
    location: "São Paulo, SP",
    text: "Essa mentoria mudou minha vida. Eu estava completamente perdida, sem saber quem eu era de verdade. Hoje, me sinto inteira, presente e cheia de propósito. Sou eternamente grata.",
    rating: 5,
  },
  {
    name: "Mariana L.",
    location: "Belo Horizonte, MG",
    text: "Pela primeira vez, senti que alguém realmente me enxergou. O processo foi profundo, amoroso e transformador. Voltei a acreditar em mim e na minha capacidade de viver com leveza.",
    rating: 5,
  },
  {
    name: "Fernanda R.",
    location: "Curitiba, PR",
    text: "Eu não sabia que era possível sentir tanta paz e clareza. O método Vida Lirica me reconectou com partes de mim que eu tinha esquecido. Recomendo de coração.",
    rating: 5,
  },
  {
    name: "Juliana M.",
    location: "Rio de Janeiro, RJ",
    text: "Cheguei à mentoria cheia de ansiedade e sem direção. Saí com uma nova versão de mim — mais forte, mais leve, mais verdadeira. Foi a melhor decisão que já tomei.",
    rating: 5,
  },
  {
    name: "Patrícia A.",
    location: "Recife, PE",
    text: "O acolhimento e a profundidade dessa jornada são únicos. Não é só sobre autoconhecimento — é sobre renascer. Hoje vivo de um jeito que eu nem sabia que era possível.",
    rating: 5,
  },
  {
    name: "Camila D.",
    location: "Porto Alegre, RS",
    text: "Depois de anos buscando respostas fora, finalmente encontrei dentro de mim. A mentoria me deu as ferramentas e o apoio para essa reconexão. Sou outra mulher.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
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

    return () => observer.disconnect();
  }, []);

  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-transparent relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="scroll-reveal text-sm font-body uppercase tracking-[0.4em] text-primary mb-4 font-bold">
            Depoimentos
          </p>
          <h2 className="scroll-reveal text-4xl md:text-5xl lg:text-6xl font-display font-light text-foreground mb-8 leading-tight">
            Histórias reais de <br />
            <span className="italic font-semibold text-primary">transformação</span>
          </h2>
          <p className="scroll-reveal text-lg font-body text-muted-foreground leading-relaxed">
            Mulheres que decidiram escolher a si mesmas e viveram mudanças profundas em suas vidas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="scroll-reveal group bg-white/60 backdrop-blur-md rounded-[2.5rem] p-10 border border-white shadow-soft hover:shadow-premium transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              <div className="relative mb-8 flex-grow">
                <Quote className="w-12 h-12 text-primary/10 absolute -top-6 -left-6 -z-0" />
                <p className="font-body text-lg text-foreground/80 leading-relaxed italic relative z-10">
                  "{t.text}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-8 border-t border-primary/5">
                <div className="w-14 h-14 rounded-organic-2 bg-gradient-to-br from-blush to-primary/20 flex items-center justify-center shadow-sm">
                  <span className="text-xl font-display font-bold text-primary">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-body text-lg font-bold text-foreground">{t.name}</p>
                  <p className="font-body text-xs uppercase tracking-widest text-muted-foreground">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

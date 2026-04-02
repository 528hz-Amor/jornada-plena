import { Heart, Frown, Compass, Sparkles, Shield, Sun, CheckCircle2 } from "lucide-react";
import { useEffect } from "react";

const painPoints = [
  { icon: Compass, text: "Sente falta de propósito e direction na vida", color: "bg-blush/30" },
  { icon: Frown, text: "Lida com ansiedade e sobrecarga emocional", color: "bg-lilac/30" },
  { icon: Heart, text: "Está desconectada de si mesma e de suas emoções", color: "bg-warm/30" },
  { icon: Shield, text: "Enfrenta baixa autoestima e insegurança", color: "bg-blush/30" },
  { icon: Sparkles, text: "Busca mais clareza, leveza e autenticidade", color: "bg-lilac/30" },
  { icon: Sun, text: "Deseja viver com mais presença e plenitude", color: "bg-warm/30" },
];

const WhoIsForSection = () => {
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
    <section id="para-quem" className="py-24 md:py-32 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="scroll-reveal text-sm font-body uppercase tracking-[0.4em] text-primary mb-4 font-bold">
            Para Quem É
          </p>
          <h2 className="scroll-reveal text-4xl md:text-5xl lg:text-6xl font-display font-light text-foreground mb-8 leading-tight">
            Essa jornada foi feita para <br />
            <span className="italic font-semibold text-primary">você</span>
          </h2>
          <p className="scroll-reveal text-lg font-body text-muted-foreground leading-relaxed">
            Se você é uma mulher que sente que algo dentro de si precisa mudar, que existe uma
            versão mais autêntica e plena esperando para ser vivida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="scroll-reveal group bg-white/60 backdrop-blur-md rounded-[2.5rem] p-10 border border-white shadow-soft hover:shadow-premium transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-organic-1 ${point.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                <point.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="font-body text-xl text-foreground leading-relaxed font-medium">
                {point.text}
              </p>
            </div>
          ))}
        </div>

        {/* Banner de Expectativa Estilizado */}
        <div className="scroll-reveal mt-24 bg-gradient-to-br from-white/80 to-cream/50 backdrop-blur-md rounded-[3rem] p-10 md:p-20 shadow-premium max-w-5xl mx-auto relative overflow-hidden border border-white">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

          <div className="relative z-10 grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-3xl md:text-4xl font-display font-light text-foreground leading-tight">
                O que você pode <br />
                <span className="italic font-semibold text-primary">esperar:</span>
              </h3>
            </div>

            <div className="lg:col-span-3 grid sm:grid-cols-1 gap-6 text-left">
              {[
                "Clareza sobre quem você realmente é",
                "Equilíbrio emocional e paz interior",
                "Conexão profunda com sua essência",
                "Autoconfiança e amor próprio fortalecidos",
                "Propósito e direção claros para sua vida",
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <p className="font-body text-lg text-foreground/80">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsForSection;

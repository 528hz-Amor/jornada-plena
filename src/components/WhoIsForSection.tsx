import { Heart, Frown, Compass, Sparkles, Shield, Sun, CheckCircle2, XCircle, RotateCcw, ZapOff, Anchor } from "lucide-react";
import { useEffect } from "react";

const painPoints = [
  { icon: Frown, text: "Vive cansada, mesmo quando tenta desacelerar", color: "bg-accent/10" },
  { icon: Heart, text: "Convive com uma profunda desconexão e angústia", color: "bg-accent/20" },
  { icon: Shield, text: "Inicia mudanças, mas não consegue sustentar", color: "bg-accent/10" },
  { icon: Compass, text: "Sente que merece viver melhor, mas não sabe como fazer acontecer", color: "bg-accent/20" },
  { icon: Sparkles, text: "Se perdeu de si mesma no meio das demandas externas", color: "bg-accent/10" },
  { icon: Sun, text: "Busca mais clareza, leveza e direção", color: "bg-accent/20" },
];

const feelings = [
  { icon: RotateCcw, text: "Já tentou mudar, mas sempre volta pro mesmo lugar" },
  { icon: ZapOff, text: "Começa bem e perde consistência" },
  { icon: Frown, text: "Vive cansada, sobrecarregada ou emocionalmente instável" },
  { icon: Anchor, text: "Se sente desconectada de si mesma" },
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
    <section id="para-quem" className="py-24 md:py-32 bg-background relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="scroll-reveal text-sm font-sans uppercase tracking-[0.4em] text-accent mb-4 font-bold">
            Para Quem É
          </p>
          <h2 className="scroll-reveal text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-8 leading-tight">
            Essa jornada foi feita para <br />
            <span className="italic text-accent">você</span>
          </h2>
          <p className="scroll-reveal text-lg font-body text-muted-foreground leading-relaxed">
            Se você se sente sobrecarregada, estagnada, sem conseguir colocar em prática ou manter constância naquilo que você já sabe que precisa ser feito.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="scroll-reveal group bg-card backdrop-blur-md rounded-[2.5rem] p-10 border border-border shadow-soft hover:shadow-premium transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-full ${point.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                <point.icon className="w-7 h-7 text-accent" />
              </div>
              <p className="font-body text-xl text-foreground/90 leading-relaxed font-medium">
                {point.text}
              </p>
            </div>
          ))}
        </div>

        {/* Seção "Você sente que" */}
        <div className="scroll-reveal mb-24 max-w-5xl mx-auto">
          <div className="bg-card rounded-[3rem] p-10 md:p-16 border border-border backdrop-blur-sm">
            <h3 className="text-3xl font-display font-bold text-foreground mb-10 text-center">Você sente que:</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {feelings.map((feeling, i) => (
                <div key={i} className="flex items-center gap-4 bg-background/50 p-6 rounded-2xl border border-border">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <feeling.icon className="w-6 h-6 text-accent" />
                  </div>
                  <p className="font-body text-lg text-foreground/80 font-medium">{feeling.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-2xl font-display italic text-accent font-bold">👉 Você não está sozinha.</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-20">
           <p className="scroll-reveal text-2xl md:text-3xl font-display italic text-foreground opacity-70 font-medium">
              "Sua versão mais autêntica, presente e plena está esperando para ser vivida."
           </p>
        </div>

        {/* Seção "Para quem não é" */}
        <div className="scroll-reveal mb-24 max-w-4xl mx-auto bg-primary/5 rounded-[2.5rem] p-8 md:p-12 border border-border backdrop-blur-sm">
           <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="shrink-0">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <XCircle className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">Para quem NÃO é:</h3>
                <ul className="space-y-2 text-muted-foreground font-body text-lg">
                  <li>• Quem busca fórmula pronta ou resultados rápidos sem esforço</li>
                  <li>• Quem não está disposta a se olhar e se comprometer</li>
                </ul>
              </div>
           </div>
        </div>

        {/* Banner de Expectativa */}
        <div className="scroll-reveal bg-card backdrop-blur-lg rounded-[3rem] p-10 md:p-20 shadow-premium max-w-5xl mx-auto relative overflow-hidden border border-border">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

          <div className="relative z-10 grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight">
                O que você pode <br />
                <span className="italic text-accent">esperar:</span>
              </h3>
            </div>

            <div className="lg:col-span-3 grid sm:grid-cols-1 gap-6 text-left">
              {[
                "Viver com prazer e apreciar cada detalhe do seu dia",
                "Sustentar com constância uma rotina que materializa seus sonhos",
                "Expressar emoções com tranquilidade e segurança",
                "Tomar decisões assertivas sem culpa",
                "Autoconfiança para ser Inteira e multifacetada",
                "Clareza, direção e propósito para orientar o seu caminho",
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                    <CheckCircle2 className="w-5 h-5 text-accent group-hover:text-accent-foreground" />
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

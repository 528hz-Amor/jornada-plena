import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    id: "sinais-conexao-consigo",
    category: "Autoconhecimento",
    title: "5 sinais de que você perdeu a conexão consigo mesma",
    excerpt:
      "Muitas mulheres vivem no automático sem perceber que estão distantes de quem realmente são. Descubra os sinais e como voltar para si.",
    date: "15 Mar 2026",
  },
  {
    id: "sagrado-feminino-vida-moderna",
    category: "Espiritualidade",
    title: "O poder do sagrado feminino na vida moderna",
    excerpt:
      "Como resgatar a sabedoria ancestral feminina e integrá-la ao seu dia a dia, encontrando equilíbrio entre o moderno e o sagrado.",
    date: "08 Mar 2026",
  },
  {
    id: "rituais-matinais-energia",
    category: "Autocuidado",
    title: "Rituais matinais que transformam sua energia",
    excerpt:
      "Pequenas práticas diárias podem mudar completamente a forma como você se sente. Conheça rituais simples e poderosos para começar bem o dia.",
    date: "01 Mar 2026",
  },
  {
    id: "vulnerabilidade-como-forca",
    category: "Reflexão",
    title: "Vulnerabilidade como força: aprendendo a sentir",
    excerpt:
      "Ser vulnerável não é fraqueza. Descubra como abraçar suas emoções pode ser o caminho mais corajoso para uma vida plena.",
    date: "22 Fev 2026",
  },
];

const BlogSection = () => {
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

  return (
    <section id="blog" className="py-24 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="scroll-reveal text-sm font-body uppercase tracking-[0.3em] text-primary mb-4">
            Conteúdo & Reflexões
          </p>
          <h2 className="scroll-reveal text-3xl md:text-5xl font-display font-light text-foreground mb-6">
            Inspirações para sua{" "}
            <span className="italic font-semibold text-primary">jornada</span>
          </h2>
          <p className="scroll-reveal text-base font-body text-muted-foreground leading-relaxed">
            Artigos, reflexões e práticas para nutrir sua alma e iluminar seu
            caminho.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, index) => (
            <Link
              key={index}
              to={`/blog/${post.id}`}
              className="scroll-reveal group bg-background rounded-2xl overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 cursor-pointer block"
            >
              <div className="h-2 bg-primary/20 group-hover:bg-primary/40 transition-colors duration-500" />
              <div className="p-6 space-y-4">
                <span className="text-xs font-body uppercase tracking-wider text-primary font-medium">
                  {post.category}
                </span>
                <h3 className="text-lg font-display font-semibold text-foreground leading-snug group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs font-body text-muted-foreground">
                    {post.date}
                  </span>
                  <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowRight, Calendar, Tag, ArrowLeft } from "lucide-react";
import { posts } from "@/lib/blog-data";

const BlogSection = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isFullPage = location.pathname === "/blog";

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
  }, [location.pathname]);

  const handleBackToHome = () => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById("blog");
      if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  const displayPosts = isFullPage ? posts : posts.slice(0, 4);

  return (
    <section id="blog" className={`py-24 md:py-32 bg-transparent relative overflow-hidden ${isFullPage ? 'pt-40' : ''}`}>
      <div className="container mx-auto px-4 relative z-10">
        {isFullPage && (
          <button
            onClick={handleBackToHome}
            className="inline-flex items-center gap-2 text-primary font-body font-bold hover:gap-3 transition-all mb-12 group"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para sessão blog do início
          </button>
        )}

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <p className="scroll-reveal text-sm font-body uppercase tracking-[0.4em] text-primary mb-4 font-bold">
              Conteúdo & Reflexões
            </p>
            <h2 className="scroll-reveal text-4xl md:text-5xl lg:text-6xl font-display font-light text-foreground leading-tight">
              {isFullPage ? "Todos os nossos artigos" : "Inspirações para sua jornada interior"}
            </h2>
          </div>
          {!isFullPage && (
            <div className="scroll-reveal">
              <Link to="/blog" className="group flex items-center gap-2 text-primary font-body font-bold hover:gap-4 transition-all duration-300">
                Ver todos os artigos
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayPosts.map((post, index) => (
            <Link
              key={index}
              to={`/blog/${post.id}`}
              state={{ from: location.pathname }}
              className="scroll-reveal group flex flex-col h-full bg-white/60 backdrop-blur-md rounded-[2.5rem] overflow-hidden border border-white shadow-soft hover:shadow-premium transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden bg-primary/5">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-body font-bold uppercase tracking-wider text-primary shadow-sm">
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-muted-foreground text-[10px] font-bold uppercase tracking-widest mb-4">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </div>

                <h3 className="text-xl font-display font-bold text-foreground leading-tight mb-4 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-sm font-body text-muted-foreground leading-relaxed line-clamp-3 mb-6 flex-grow">
                  {post.excerpt}
                </p>

                <div className="pt-4 border-t border-primary/5 flex items-center text-primary text-[10px] font-bold uppercase tracking-widest gap-2 group-hover:gap-4 transition-all duration-300">
                  Ler artigo completo
                  <ArrowRight className="w-4 h-4" />
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

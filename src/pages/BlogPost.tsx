import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Tag, Share2, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { posts } from "@/lib/blog-data";
import { toast } from "sonner";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <div className="container mx-auto py-32 text-center flex-grow relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <h1 className="text-4xl font-display font-light text-foreground mb-6 relative z-10">
            Post não encontrado
          </h1>
          <Button variant="hero" onClick={() => navigate("/")} className="relative z-10">
            Voltar ao início
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const handleBack = () => {
    if (location.state?.from === "/blog") {
      navigate("/blog");
    } else {
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
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: post.title,
      text: post.excerpt,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast.success("Link copiado para a área de transferência!");
      }
    } catch (err) {
      console.error("Erro ao compartilhar:", err);
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Navbar />

      {/* Background Blobs para Profundidade */}
      <div className="absolute top-[10%] -right-[5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] -left-[5%] w-[30%] h-[40%] bg-lilac/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Article Header/Hero */}
      <header className="pt-32 pb-20 bg-secondary/10 relative z-10">
        <div className="container mx-auto max-w-4xl px-4">
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-primary font-body font-bold hover:gap-3 transition-all mb-12 group"
          >
            <ArrowLeft className="w-4 h-4" />
            {location.state?.from === "/blog" ? "Voltar para o blog" : "Voltar para sessão blog do início"}
          </button>

          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-4 text-xs font-body font-bold uppercase tracking-widest text-primary">
              <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white shadow-soft border border-white/50">
                <Tag className="w-3.5 h-3.5" />
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-muted-foreground bg-white/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5 text-muted-foreground bg-white/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime} de leitura
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-light text-foreground leading-[1.1]">
              {post.title}
            </h1>

            <div className="h-1.5 w-24 bg-primary/20 rounded-full" />
          </div>
        </div>
      </header>

      {/* Featured Image - Estilo Orgânico */}
      <div className="container mx-auto max-w-5xl px-4 -mt-16 mb-20 relative z-20">
        <div className="rounded-organic-1 overflow-hidden shadow-premium border-8 border-white group">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Article Content - Glassmorphism Card */}
      <article className="pb-32 relative z-10">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="bg-white/60 backdrop-blur-md rounded-[3rem] p-8 md:p-16 border border-white shadow-premium">
            <div
              className="prose prose-stone prose-lg md:prose-xl max-w-none
                font-body text-foreground/80
                [&_h2]:font-display [&_h2]:font-bold [&_h2]:text-primary [&_h2]:text-4xl [&_h2]:md:text-5xl [&_h2]:mt-20 [&_h2]:mb-8 [&_h2]:leading-tight
                [&_p]:leading-[1.8] [&_p]:mb-10 [&_p]:text-xl [&_p]:md:text-2xl
                [&_strong]:text-foreground [&_strong]:font-bold
                [&_blockquote]:border-l-primary [&_blockquote]:border-l-4 [&_blockquote]:bg-primary/5 [&_blockquote]:py-8 [&_blockquote]:px-12 [&_blockquote]:rounded-r-[2rem] [&_blockquote]:italic [&_blockquote]:text-2xl [&_blockquote]:md:text-3xl [&_blockquote]:font-display [&_blockquote]:text-primary/90 [&_blockquote]:my-16
                [&_ul]:list-disc [&_ul]:pl-8 [&_ol]:list-decimal [&_ol]:pl-8
                [&_li]:mb-4 [&_li]:text-xl [&_li]:md:text-2xl [&_li]:leading-relaxed
                "
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-24 pt-16 border-t border-primary/10 flex flex-col sm:flex-row items-center justify-between gap-10">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-organic-2 bg-gradient-to-br from-blush to-primary/20 flex items-center justify-center text-primary font-display font-bold text-2xl shadow-sm">
                  VL
                </div>
                <div>
                  <p className="font-display font-bold text-2xl text-foreground">Vida Lírica</p>
                  <p className="font-body text-primary uppercase tracking-widest text-xs font-bold">Mentoria Feminina</p>
                </div>
              </div>
              <Button
                variant="hero"
                className="rounded-full gap-2 px-8"
                onClick={handleShare}
              >
                <Share2 className="w-4 h-4" />
                Compartilhar Artigo
              </Button>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;

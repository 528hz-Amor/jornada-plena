import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-beige p-4">
      <div className="text-center max-w-md bg-white/60 backdrop-blur-md rounded-[3rem] p-12 shadow-premium border border-white">
        <h1 className="mb-4 text-6xl font-display font-bold text-primary">404</h1>
        <h2 className="mb-6 text-2xl font-display font-bold text-earth">Página Não Encontrada</h2>
        <p className="mb-8 text-earth/80 font-body leading-relaxed">
          Desculpe, a página que você está procurando não foi encontrada.
          Sua jornada de transformação continua na página inicial.
        </p>
        <Button asChild className="bg-moss hover:bg-moss/90 text-white font-sans font-bold uppercase tracking-widest rounded-full h-14 px-8">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft size={18} />
            Voltar ao Início
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;

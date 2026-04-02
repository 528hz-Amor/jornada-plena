import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Página Não Encontrada</h1>
        <p className="mb-4 text-lg text-muted-foreground">
          Error 404 - Esta página não existe
        </p>
        <p className="mb-6 text-muted-foreground">
          Desculpe, a página que você está procurando não foi encontrada.
          Retorne à página inicial para continuar sua jornada de transformação.
        </p>
        <a
          href="/jornada-plena/"
          className="text-primary underline hover:text-primary/90 font-semibold"
        >
          ← Voltar para a Página Inicial
        </a>
      </div>
    </div>
  );
};

export default NotFound;

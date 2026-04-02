import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Se a navegação incluir um ID de seção (ex: #blog), não forçamos o topo (0,0)
    // e deixamos o navegador ou nossa lógica de scroll cuidar disso.
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const offsetTop = element.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }, 100);
        return;
      }
    }

    // Em todas as outras trocas de página (como entrar em um card), vai para o topo absoluto.
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;

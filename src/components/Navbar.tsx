import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Para Quem", href: "#para-quem" },
  { label: "Mentoria", href: "#mentoria" },
  { label: "Jornada", href: "#jornada" },
  { label: "Blog", href: "#blog" },
  { label: "Depoimentos", href: "#depoimentos" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleNavClick = (href: string) => {
    const isAnchor = href.startsWith("#");
    if (!isAnchor) {
      navigate(href);
      setOpen(false);
      return;
    }

    const sectionId = href.substring(1);

    if (location.pathname === "/") {
      scrollToSection(sectionId);
    } else {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }
      }, 100);
    }
    setOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
        scrolled || location.pathname !== "/"
          ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-sm py-3 md:py-4"
          : "bg-transparent py-5 md:py-6",
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-6 md:px-10">
        <Link
          to="/"
          className="font-display text-lg md:text-xl font-bold text-foreground tracking-tighter flex items-center gap-2 group shrink-0"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-[10px] font-sans font-bold group-hover:rotate-12 transition-transform duration-500 shadow-premium">
            VL
          </div>
          <span className="group-hover:text-accent transition-colors inline-block whitespace-nowrap">
            Vida <span className="italic">Lírica</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-2 text-[11px] font-sans font-bold uppercase tracking-[0.15em] text-foreground/70 hover:text-accent transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
              </button>
            ))}
          </div>
          <div className="ml-4">
            <Button
              size="sm"
              className="px-6 h-9 text-[10px] uppercase tracking-widest bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-bold rounded-full shadow-lg"
              onClick={() => handleNavClick("#contato")}
            >
              Começar Agora
            </Button>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground hover:bg-primary/10 rounded-full transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="block py-3 px-4 text-lg font-display font-bold text-foreground hover:text-accent hover:bg-primary/5 rounded-xl transition-all text-left"
                >
                  {link.label}
                </button>
              ))}
              <Button
                size="lg"
                className="w-full mt-4 py-6 text-sm bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-bold uppercase tracking-widest rounded-full"
                onClick={() => handleNavClick("#contato")}
              >
                Iniciar Minha Jornada
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

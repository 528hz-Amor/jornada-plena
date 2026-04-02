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
      const offsetTop = element.offsetTop - 110;
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
          const offsetTop = element.offsetTop - 110;
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
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-4 md:px-8",
        scrolled || location.pathname !== "/"
          ? "py-2 md:py-3"
          : "py-2 md:py-6"
      )}
    >
      <div className={cn(
        "container mx-auto flex items-center justify-between transition-all duration-500 rounded-full px-4 md:px-6 py-2 md:py-2.5 border",
        scrolled || location.pathname !== "/"
          ? "bg-white/60 backdrop-blur-xl border-white/40 shadow-premium"
          : "bg-white/20 backdrop-blur-md border-white/20 shadow-soft"
      )}>
        <Link
          to="/"
          className="font-display text-xl md:text-2xl font-bold text-foreground tracking-tighter flex items-center gap-2 group shrink-0"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="w-8 h-8 md:w-9 md:h-9 rounded-organic-1 bg-primary flex items-center justify-center text-white text-[10px] font-body font-bold group-hover:rotate-12 transition-transform duration-500 shadow-premium">VL</div>
          <span className="group-hover:text-primary transition-colors inline-block whitespace-nowrap">Vida <span className="text-primary italic">Lirica</span></span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="px-4 py-2 text-xs font-body font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-all duration-300 relative group"
            >
              {link.label}
              <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
            </button>
          ))}
          <div className="ml-4">
            <Button
              variant="hero"
              size="sm"
              className="px-6 h-10 text-[10px] uppercase tracking-widest"
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

      {/* Mobile menu - Glassmorphism */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:hidden absolute top-full left-4 right-4 mt-2 bg-white/80 backdrop-blur-2xl rounded-[2.5rem] border border-white shadow-premium p-8 z-50"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="block py-4 px-6 text-xl font-display font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-2xl transition-all text-left"
                >
                  {link.label}
                </button>
              ))}
              <Button
                variant="hero"
                size="lg"
                className="w-full mt-6 py-8 text-base"
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

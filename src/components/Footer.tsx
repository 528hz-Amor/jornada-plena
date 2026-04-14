import { useEffect } from "react";
import { Instagram, Mail, MapPin } from "lucide-react";

const Footer = () => {
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

  const socialLinks = [
    { Icon: Instagram, href: "https://www.instagram.com/vida.lirica/", label: "Instagram" },
  ];

  return (
    <footer className="bg-background text-foreground pt-20 pb-10 overflow-hidden relative border-t border-border transition-colors duration-300">
      <div className="absolute top-0 left-0 w-full h-px bg-accent/20" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-16">
          {/* Brand Column */}
          <div className="space-y-6 scroll-reveal">
            <button
              onClick={() => scrollToSection("inicio")}
              className="font-display text-3xl font-bold tracking-tighter hover:text-accent transition-colors text-left"
            >
              Vida <span className="italic">Lírica</span>
            </button>
            <p className="font-body opacity-80 leading-relaxed text-sm">
              Um espaço dedicado ao florescimento feminino, integrando corpo, mente, emoção e espírito em uma jornada de inteireza.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href !== "#" ? "_blank" : undefined}
                  rel={href !== "#" ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 scroll-reveal lg:mx-auto" style={{ transitionDelay: '0.1s' }}>
            <h4 className="font-display text-xl font-bold">Navegação</h4>
            <ul className="space-y-4">
              {[
                { label: "Início", id: "inicio" },
                { label: "Sobre a Bia", id: "sobre" },
                { label: "Para Quem É", id: "para-quem" },
                { label: "A Mentoria", id: "mentoria" },
                { label: "O Método 4C", id: "jornada" },
                { label: "Depoimentos", id: "depoimentos" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="opacity-70 hover:opacity-100 text-sm font-sans font-bold uppercase tracking-widest transition-all flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/40 group-hover:bg-accent transition-colors" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 scroll-reveal lg:mx-auto" style={{ transitionDelay: '0.2s' }}>
            <h4 className="font-display text-xl font-bold">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <a
                  href="mailto:contato@vidalirica.com.br"
                  className="opacity-70 text-sm font-body group-hover:opacity-100 transition-colors cursor-pointer"
                >
                  contato@vidalirica.com.br
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="opacity-70 text-sm font-body">
                  São Paulo, SP - Atendimento Online e Presencial
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 scroll-reveal">
          <p className="text-xs font-body opacity-60 text-center md:text-left">
            © {new Date().getFullYear()} Vida Lírica. Todos os direitos reservados.
            <span className="block sm:inline sm:ml-2">Desenvolvido com amor para mulheres extraordinárias.</span>
          </p>
          <div className="flex gap-6 text-[10px] font-sans font-bold uppercase tracking-widest opacity-60">
            <a href="#" className="hover:opacity-100 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:opacity-100 transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

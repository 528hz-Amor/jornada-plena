import { useEffect } from "react";
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";

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
    { Icon: Facebook, href: "#", label: "Facebook" },
    { Icon: Linkedin, href: "#", label: "Linkedin" },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground pt-20 pb-10 overflow-hidden relative">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-16">
          {/* Brand Column */}
          <div className="space-y-6 scroll-reveal">
            <button
              onClick={() => scrollToSection("inicio")}
              className="font-display text-3xl font-bold tracking-tighter hover:text-primary transition-colors text-left"
            >
              Vida <span className="text-primary italic">Lirica</span>
            </button>
            <p className="font-body text-primary-foreground/60 leading-relaxed text-sm">
              Um espaço dedicado ao florescimento feminino, integrando corpo, mente, emoção e espírito em uma jornada de inteireza.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href !== "#" ? "_blank" : undefined}
                  rel={href !== "#" ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 rounded-full border border-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:-translate-y-1 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 scroll-reveal lg:mx-auto" style={{ transitionDelay: '0.1s' }}>
            <h4 className="font-display text-xl font-bold text-white">Navegação</h4>
            <ul className="space-y-4">
              {[
                { label: "Sobre a Mentoria", id: "sobre" },
                { label: "Para Quem É", id: "para-quem" },
                { label: "O Método 4C", id: "jornada" },
                { label: "Blog & Reflexões", id: "blog" },
                { label: "Depoimentos", id: "depoimentos" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-primary-foreground/60 hover:text-primary text-sm font-body transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 scroll-reveal lg:mx-auto" style={{ transitionDelay: '0.2s' }}>
            <h4 className="font-display text-xl font-bold text-white">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <a
                  href="https://wa.me/5511977235584?text=Olá! Vim através do site Vida Lírica e gostaria de conversar."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/60 text-sm font-body group-hover:text-primary transition-colors cursor-pointer"
                >
                  (11) 97723-5584
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <a
                  href="mailto:contato@vidalirica.com.br"
                  className="text-primary-foreground/60 text-sm font-body group-hover:text-primary transition-colors cursor-pointer"
                >
                  contato@vidalirica.com.br
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-primary-foreground/60 text-sm font-body">
                  São Paulo, SP - Atendimento Online e Presencial
                </span>
              </li>
            </ul>
          </div>


        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-6 scroll-reveal">
          <p className="text-xs font-body text-primary-foreground/40 text-center md:text-left">
            © {new Date().getFullYear()} Vida Lirica. Todos os direitos reservados.
            <span className="block sm:inline sm:ml-2">Desenvolvido com amor para mulheres extraordinárias.</span>
          </p>
          <div className="flex gap-6 text-[10px] font-body uppercase tracking-widest text-primary-foreground/40">
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhoIsForSection from "@/components/WhoIsForSection";
import MentorshipSection from "@/components/MentorshipSection";
import JourneySection from "@/components/JourneySection";
import BlogSection from "@/components/BlogSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import mandala from "@/assets/mandala-decoration.png";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";

const TransformationSection = () => (
  <section className="py-24 bg-background text-foreground relative overflow-hidden transition-colors duration-300">
    {/* Decorative Mandalas */}
    <motion.img
      animate={{ rotate: 360 }}
      transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
      src={mandala}
      className="absolute -top-32 -right-32 w-96 h-96 opacity-10 pointer-events-none grayscale dark:invert"
      alt=""
    />

    <div className="container mx-auto px-4 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto space-y-12"
      >
        <div className="space-y-6">
          <h3 className="text-3xl md:text-5xl font-display font-bold text-accent italic leading-tight">
            "Talvez você não precise mudar tudo. <br />
            Precisa de espaço para escutar o que pede mudança."
          </h3>
          <div className="w-20 h-1 bg-accent/30 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 text-left items-center mt-16">
          <div className="space-y-6 bg-card backdrop-blur-sm p-8 rounded-[2rem] border border-border shadow-2xl">
            <p className="text-sm font-sans uppercase tracking-widest text-accent font-bold">🌿 Quando continuar do mesmo jeito pesa</p>
            <p className="text-xl font-body leading-relaxed">
              Você pode até saber que precisa desacelerar, se cuidar ou escolher novos caminhos.
              <strong className="text-foreground"> Mas, quando a ansiedade, o cansaço ou a confusão tomam espaço, transformar esse saber em vida real pode ser difícil.</strong>
            </p>
          </div>
          <div className="space-y-6">
            <p className="text-2xl font-display font-bold">
              Você não precisa encontrar todas as respostas sozinho. <br />
              <span className="italic text-accent">Pode começar sendo acolhido onde está.</span>
            </p>
            <p className="text-lg font-body opacity-80">
              O acompanhamento Vida Lírica oferece presença, escuta e práticas integrativas para ajudar você a compreender seu momento e construir mudanças possíveis dentro da sua rotina.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative selection:bg-accent/20 transition-colors duration-300">
      {/* Mystical Background Layer */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(74,93,78,0.05),transparent)]" />
        <div className="absolute top-[20%] -left-[10%] w-[60%] h-[60%] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-20">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <TransformationSection />
          <WhoIsForSection />
          <MentorshipSection />
          <JourneySection />
          <BlogSection />
          <TestimonialsSection />
          <CTASection />
        </main>
        <Footer />
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Index;

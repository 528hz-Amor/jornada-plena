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

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/10">
      {/* 1. LAYER: FUNDO UNIFICADO & ELEMENTOS GLOBAIS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Blobs de fundo globais para profundidade constante */}
        <div className="absolute top-0 -left-[10%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-[40%] -right-[10%] w-[50%] h-[50%] bg-lilac/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] -left-[5%] w-[40%] h-[40%] bg-gold/5 rounded-full blur-[100px]" />
      </div>

      {/* 2. LAYER: MANDALAS QUE NÃO CORTAM (Flutuando entre seções) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        <motion.img
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          src={mandala}
          className="absolute top-[15%] -right-24 w-96 h-96 opacity-[0.07]"
          alt=""
        />
        <motion.img
          initial={{ rotate: 0, y: 0 }}
          animate={{ rotate: -360, y: [0, 50, 0] }}
          transition={{
            rotate: { duration: 60, repeat: Infinity, ease: "linear" },
            y: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          src={mandala}
          className="absolute top-[45%] -left-32 w-[500px] h-[500px] opacity-[0.04]"
          alt=""
        />
        <motion.img
          src={mandala}
          className="absolute bottom-[15%] -right-40 w-[600px] h-[600px] opacity-[0.03] animate-float"
          alt=""
        />
      </div>

      {/* 3. LAYER: CONTEÚDO */}
      <div className="relative z-20">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <WhoIsForSection />
          <MentorshipSection />
          <JourneySection />
          <BlogSection />
          <TestimonialsSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;

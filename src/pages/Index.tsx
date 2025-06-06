
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import ResumeSection from "@/components/ResumeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import ParticleField from "@/components/ParticleField";
import { useEffect } from "react";

const Index = () => {
  // Enhanced animation on scroll with bottom-to-top effect
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -100px 0px"
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
        }
      });
    }, observerOptions);
    
    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observer.observe(element);
    });
    
    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <ParticleField />
      <LoadingScreen />
      <Navbar />
      <div className="scroll-container">
        <HeroSection className="snap-section" />
        <AboutSection className="snap-section" />
        <ResumeSection className="snap-section" />
        <PortfolioSection className="snap-section" />
        <ContactSection className="snap-section" />
        <Footer />
      </div>
    </div>
  );
};

export default Index;

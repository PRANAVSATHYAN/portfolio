
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import ResumeSection from "@/components/ResumeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import ParticleField from "@/components/ParticleField";
import { useState, useEffect } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

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

  const renderCurrentSection = () => {
    switch (activeSection) {
      case 'home':
        return <HeroSection />;
      case 'about':
        return <AboutSection />;
      case 'resume':
        return <ResumeSection />;
      case 'portfolio':
        return <PortfolioSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HeroSection />;
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <ParticleField />
      <LoadingScreen />
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="h-screen">
        {renderCurrentSection()}
      </div>
      {activeSection === 'contact' && <Footer />}
    </div>
  );
};

export default Index;

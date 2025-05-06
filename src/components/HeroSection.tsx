import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = ["Data Analyst", "Business Analyst" "Data Visualizer", "SQL Developer", "Python Programmer"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      if (jobTitle.length < titles[currentIndex].length) {
        setJobTitle(titles[currentIndex].substring(0, jobTitle.length + 1));
      } else {
        // Keep the full text for a while before resetting
        setTimeout(() => {
          setJobTitle("");
        }, 1000);
      }
    }, 100);
    
    return () => clearTimeout(typingTimeout);
  }, [jobTitle, currentIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-lg mb-2 text-muted-foreground">Hi, Hope you are doing well...</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2">
              I am <span className="text-primary">Pranav Sathyan</span>
            </h1>
            <div className="h-14 mb-2">
              <h2 className="text-2xl md:text-3xl text-primary-foreground font-semibold animate-pulse">
                {jobTitle}<span className="animate-pulse">|</span>
              </h2>
            </div>
            <p className="text-xl mb-6 text-muted-foreground">An Aspiring Data Analyst</p>
            <p className="text-lg mb-8 text-muted-foreground max-w-lg">
              I'm a business analyst and an aspiring data engineer passionate about using data to solve real-world problems. 
              With expertise in Python, SQL, and visualization tools, I transform complex datasets into actionable insights.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-md">
                <a href="#portfolio">View My Work</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-md">
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -left-6 -top-6 w-72 h-72 bg-accent rounded-full filter blur-3xl opacity-40"></div>
              <div className="absolute -right-6 -bottom-6 w-72 h-72 bg-data-blue rounded-full filter blur-3xl opacity-30"></div>
              <div className="rounded-lg overflow-hidden border-8 border-background/20 shadow-xl relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  alt="Profile"
                  className="w-[300px] h-[300px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

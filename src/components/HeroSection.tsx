
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Turning Data into <span className="text-primary">Valuable Insights</span>
            </h1>
            <p className="text-lg mb-8 text-muted-foreground max-w-lg">
              I'm a data analyst passionate about using data to solve real-world problems. 
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
              <div className="rounded-lg overflow-hidden border-8 border-white shadow-xl relative z-10">
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

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import AnimatedWorkflow from "@/components/AnimatedWorkflow";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-3">
              <span className="px-4 py-2 bg-secondary text-secondary-foreground border-3 border-border rounded-full text-sm font-semibold">
                Building for Codecratz
              </span>
              <img 
                src="https://apvcouncil.in/codecratz/2.png" 
                alt="Codecratz Logo" 
                className="h-10 w-auto"
              />
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold text-foreground leading-tight">
              ResQ
              <br />
              <span className="text-primary"></span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl">
              AI-powered campus safety system with instant SOS alerts, smart detection, and real-time security response.
            </p>
            
            <p className="text-lg font-semibold text-foreground">
              Your Campus Shield — Smarter, Faster, Safer
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg">
                Starting Soon
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToAbout}>
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <AnimatedWorkflow />
          </div>
        </div>
        
        <div className="flex justify-center mt-16 animate-float">
          <button 
            onClick={scrollToAbout}
            className="p-3 bg-card border-4 border-border rounded-full card-shadow hover:translate-y-[-2px] transition-all"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-6 h-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import { Button } from "@/components/ui/button";
import { ArrowRight, Circle, Star } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center pt-20 section-padding">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 animate-fade-in">
            <div className="mb-6">
              <span className="text-hustly-accent font-semibold text-lg">Welcome to</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-hustly-primary mb-6">
              Hustly Life
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-hustly-primary/80 mb-6">
              The hustle, simplified
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-xl">
              We transform your innovative ideas into powerful digital solutions through expert AI, web, and blockchain development services. Let us handle the technical complexity while you focus on your vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-hustly-primary hover:bg-hustly-accent text-white px-8 py-6 rounded-md">
                <a href="#services" className="flex items-center">
                  Explore Services <ArrowRight className="ml-2" size={18} />
                </a>
              </Button>
              <Button variant="outline" className="border-hustly-primary text-hustly-primary hover:bg-hustly-primary/5 px-8 py-6 rounded-md">
                <a href="#booking">Book Free Consultation</a>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end animate-fade-in relative" style={{ animationDelay: "0.2s" }}>
            <div className="w-full max-w-md group relative">
              <div className="absolute -top-10 -left-10 opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                <Circle className="text-hustly-muted" size={100} strokeWidth={1} />
              </div>
              <div className="absolute -bottom-10 -right-10 opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                <Star className="text-hustly-accent" size={80} fill="currentColor" strokeWidth={1} />
              </div>
              <img 
                src="/lovable-uploads/fbda7179-eb98-4fac-bc0e-39ecd335ed4b.png" 
                alt="Hustly Life" 
                className="w-full h-auto rounded-xl shadow-2xl transform transition-transform duration-300 group-hover:scale-105 group-hover:rotate-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

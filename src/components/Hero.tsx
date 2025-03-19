
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="h-dynamic-screen flex flex-col items-center justify-center relative px-4 sm:px-6 lg:px-8">
      <div className="absolute top-0 left-0 right-0 h-full overflow-hidden -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-up">
        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          Full-Stack Developer
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-balance">
          Creating digital experiences with precision and purpose
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
          I design and build applications that are not just functional, but delightful to use. 
          Every pixel, every interaction, every line of code matters.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Button 
            size="lg" 
            className="button-hover-effect"
            onClick={scrollToProjects}
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get In Touch
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about" 
          className="flex items-center justify-center w-10 h-10 rounded-full border border-border hover:border-primary transition-colors duration-300"
          aria-label="Scroll down"
        >
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;

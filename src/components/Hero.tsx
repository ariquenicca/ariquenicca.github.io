
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
    <section className="min-h-[90vh] md:h-dynamic-screen flex flex-col items-center justify-center relative px-4 sm:px-6 lg:px-8 py-16 md:py-0">
      <div className="absolute top-0 left-0 right-0 h-full overflow-hidden -z-10">
        <div className="absolute top-1/3 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-primary/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8 animate-fade-up">
        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          Full-Stack Developer
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-balance">
          Creating digital experiences with precision and purpose
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
          I design and build applications that are not just functional, but delightful to use. 
          Every pixel, every interaction, every line of code matters.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Button 
            size="lg" 
            className="button-hover-effect w-full sm:w-auto bg-primary hover:bg-primary/90"
            onClick={scrollToProjects}
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10 hover:text-primary"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get In Touch
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:flex">
        <a 
          href="#about" 
          className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/30 hover:border-primary transition-colors duration-300"
          aria-label="Scroll down"
        >
          <ArrowDown size={20} className="text-primary" />
        </a>
      </div>
    </section>
  );
};

export default Hero;

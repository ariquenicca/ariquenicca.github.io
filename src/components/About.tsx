
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { cn } from "@/lib/utils";

const About = () => {
  const skills = [
    "JavaScript/TypeScript",
    "React & React Native",
    "Node.js",
    "Next.js",
    "CSS/SCSS/Tailwind",
    "UI/UX Design",
    "RESTful APIs",
    "GraphQL",
    "SQL & NoSQL Databases",
    "AWS/Azure Cloud",
    "CI/CD Pipelines",
    "Agile Methodologies",
  ];

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto">
        <SectionHeading 
          title="About Me"
          subtitle="I specialize in crafting elegant applications with clean code and thoughtful user experiences."
        />
        
        <div className="grid md:grid-cols-5 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="md:col-span-2 animate-on-scroll order-2 md:order-1">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
              <div className="w-full aspect-[5/6] bg-gray-200 rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/30 flex items-center justify-center text-primary/50">
                  Developer Photo
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Column */}
          <div className="md:col-span-3 animate-on-scroll order-1 md:order-2">
            <div className="prose prose-lg max-w-none">
              <p>
                With over 5 years of experience building web and mobile applications, I'm passionate about 
                creating software that solves real problems while providing exceptional user experiences.
              </p>
              <p>
                My approach combines technical excellence with design thinking. Beyond just writing code, 
                I focus on understanding the why behind each project, collaborating closely with stakeholders 
                to deliver solutions that exceed expectations.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
                or mentoring aspiring developers.
              </p>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3">
                {skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className={cn(
                      "flex items-center gap-2 pr-2",
                      "transition-transform duration-300 hover:translate-x-1"
                    )}
                  >
                    <CheckCircle2 size={16} className="text-primary shrink-0" />
                    <span className="text-sm sm:text-base truncate">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

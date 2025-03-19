
import { ArrowUpRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export interface ProjectProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectCardProps {
  project: ProjectProps;
  className?: string;
}

const ProjectCard = ({ project, className }: ProjectCardProps) => {
  return (
    <Card className={cn(
      "group overflow-hidden transition-all duration-300 hover:shadow-md border border-border/50 hover:border-primary/30 theme-shadow", 
      "animate-on-scroll",
      className
    )}>
      <div className="aspect-[16/9] w-full overflow-hidden bg-muted relative">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/5 to-primary/20 flex items-center justify-center text-primary/40">
            Project Image
          </div>
        )}
      </div>
      
      <CardContent className="p-4 sm:p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
          <Link to={`/project/${project.id}`} className="outline-none focus-visible:underline">
            {project.title}
          </Link>
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-2 text-sm sm:text-base">
          {project.description}
        </p>
        
        <div className="flex items-center space-x-3 mt-auto">
          <Link to={`/project/${project.id}`}>
            <Button variant="ghost" size="sm" className="gap-1 text-primary hover:bg-primary/10 hover:text-primary">
              View Details
              <ArrowUpRight size={16} />
            </Button>
          </Link>
          
          <div className="flex space-x-2">
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="View on GitHub"
              >
                <Github size={20} />
              </a>
            )}
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="View live site"
              >
                <ArrowUpRight size={20} />
              </a>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;

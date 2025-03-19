
import { useState } from "react";
import { Button } from "@/components/ui/button";
import SectionHeading from "./SectionHeading";
import ProjectCard, { ProjectProps } from "./ProjectCard";

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  
  // Sample project data
  const projects: ProjectProps[] = [
    {
      id: "project-1",
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product search/filtering, cart functionality, and Stripe payment integration.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: "project-2",
      title: "Task Management App",
      description: "A productivity app that helps teams manage tasks efficiently. Includes drag-and-drop interfaces, real-time updates, and detailed analytics for tracking progress.",
      tags: ["React", "Firebase", "Tailwind CSS"],
      image: "",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: "project-3",
      title: "Health & Fitness Tracker",
      description: "Mobile app for tracking workouts, nutrition, and health metrics. Utilizes React Native for cross-platform compatibility and includes data visualization features.",
      tags: ["React Native", "GraphQL", "TypeScript"],
      image: "",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: "project-4",
      title: "AI Content Assistant",
      description: "Web application that leverages AI to help users generate and optimize content for different platforms. Includes tools for SEO analysis and readability improvements.",
      tags: ["Next.js", "OpenAI API", "TailwindCSS"],
      image: "",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: "project-5",
      title: "Real Estate Marketplace",
      description: "Platform connecting property buyers, sellers, and agents. Features include property listings, search functionality, virtual tours, and secure messaging.",
      tags: ["React", "Node.js", "PostgreSQL"],
      image: "",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: "project-6",
      title: "Finance Dashboard",
      description: "Comprehensive dashboard for tracking personal finances, investments, and budget planning. Includes interactive charts and tools for financial goal setting.",
      tags: ["Vue.js", "Express", "D3.js"],
      image: "",
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  const totalProjects = projects.length;
  
  const loadMoreProjects = () => {
    setVisibleProjects(prev => Math.min(prev + 3, totalProjects));
  };

  return (
    <section id="projects" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="container mx-auto">
        <SectionHeading 
          title="Featured Projects"
          subtitle="A selection of my recent work showcasing my skills and experience."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.slice(0, visibleProjects).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {visibleProjects < totalProjects && (
          <div className="text-center mt-12">
            <Button 
              onClick={loadMoreProjects}
              variant="outline"
              size="lg"
              className="button-hover-effect"
            >
              Load More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

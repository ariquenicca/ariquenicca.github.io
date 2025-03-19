
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github, Globe, Calendar, User, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectProps } from "@/components/ProjectCard";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // Sample project data - in a real app, fetch this from an API
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
  
  const project = projects.find(p => p.id === id);
  
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
        <p className="text-muted-foreground mb-6">The project you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link to="/#projects">
            <ArrowLeft size={16} className="mr-2" />
            Back to Projects
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="container mx-auto">
        {/* Back Link */}
        <Link 
          to="/#projects" 
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Projects
        </Link>
        
        {/* Project Title */}
        <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6">
          {project.title}
        </h1>
        
        {/* Project Image */}
        <div className="w-full aspect-video mb-10 rounded-lg overflow-hidden bg-muted shadow-sm border border-border/50">
          {project.image ? (
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-400">
              Project Screenshot
            </div>
          )}
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {/* Project Details Sidebar */}
          <div className="md:col-span-1 order-2 md:order-1">
            <div className="bg-card p-6 rounded-lg border border-border/50 shadow-sm sticky top-24">
              <h2 className="text-xl font-bold mb-6">Project Details</h2>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Calendar size={18} className="text-primary mr-3" />
                  <div>
                    <h3 className="text-sm text-muted-foreground">Timeline</h3>
                    <p>2022 - 2023</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <User size={18} className="text-primary mr-3" />
                  <div>
                    <h3 className="text-sm text-muted-foreground">Role</h3>
                    <p>Full-Stack Developer</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Tag size={18} className="text-primary mr-3 mt-1" />
                  <div>
                    <h3 className="text-sm text-muted-foreground">Technologies</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="inline-block px-2 py-1 bg-secondary text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-border/50 my-6 pt-6">
                <div className="flex flex-col sm:flex-row gap-3">
                  {project.liveUrl && (
                    <Button asChild variant="default" className="w-full sm:w-auto button-hover-effect">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Globe size={16} className="mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  
                  {project.githubUrl && (
                    <Button asChild variant="outline" className="w-full sm:w-auto">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        View Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Project Content */}
          <div className="md:col-span-2 order-1 md:order-2">
            <div className="prose prose-lg max-w-none">
              <h2>Overview</h2>
              <p>
                {project.description}
              </p>
              
              <h2>The Challenge</h2>
              <p>
                The goal was to create a user-friendly and responsive application that would allow users to efficiently manage their tasks. 
                The main challenges included implementing a real-time updating system, creating an intuitive drag-and-drop interface, 
                and ensuring the application performed well across different devices.
              </p>
              
              <h2>My Approach</h2>
              <p>
                I began by conducting thorough research on user needs and potential pain points. This informed my design decisions 
                and helped me create wireframes and prototypes. I chose React for the frontend due to its component-based architecture, 
                which allowed for reusable UI elements and efficient state management.
              </p>
              <p>
                For the backend, I implemented a Node.js API with MongoDB, which provided the flexibility needed for the data structure. 
                The application includes authentication using JWT, real-time updates with Socket.io, and comprehensive error handling to ensure reliability.
              </p>
              
              <h2>Key Features</h2>
              <ul>
                <li>User authentication and authorization</li>
                <li>Intuitive drag-and-drop interface</li>
                <li>Real-time updates across devices</li>
                <li>Advanced filtering and sorting options</li>
                <li>Responsive design for all screen sizes</li>
                <li>Dark/light mode toggle</li>
                <li>Data visualization for productivity insights</li>
              </ul>
              
              <h2>Outcome and Results</h2>
              <p>
                The application was successfully launched and received positive feedback from users. The intuitive interface and 
                real-time functionality were particularly praised. The project helped me deepen my understanding of React's performance 
                optimization techniques and Socket.io implementation.
              </p>
              
              <h2>Lessons Learned</h2>
              <p>
                This project taught me valuable lessons about state management in complex applications, optimizing performance for real-time features, 
                and the importance of thorough testing across different devices. If I were to approach this project again, I would implement a more 
                comprehensive test suite from the beginning and consider using TypeScript for improved type safety.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;

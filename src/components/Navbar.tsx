
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId: string) => {
    closeMenu();
    
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      return; // Let the Link component handle the navigation to home page
    }
    
    // For home page sections, scroll smoothly
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: "Home", link: "/", id: "" },
    { name: "About", link: "/#about", id: "about" },
    { name: "Projects", link: "/#projects", id: "projects" },
    { name: "Contact", link: "/#contact", id: "contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass-effect py-2 shadow-sm" : "py-3 sm:py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="text-xl font-display font-bold tracking-tight transition-all hover:opacity-80 text-primary"
            onClick={closeMenu}
          >
            Nicca Arique
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className="text-sm font-medium hover:text-primary transition-colors duration-200"
                onClick={(e) => {
                  if (item.id) {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="button-hover-effect bg-primary hover:bg-primary/90">Resume</Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} className="text-primary" /> : <Menu size={24} className="text-primary" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 transform transition-transform duration-300 pt-20",
          isOpen ? "translate-x-0" : "translate-x-full",
          "md:hidden"
        )}
      >
        <div className="flex flex-col items-center space-y-8 p-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              className="text-xl font-medium hover:text-primary transition-colors duration-200"
              onClick={(e) => {
                if (item.id) {
                  e.preventDefault();
                  scrollToSection(item.id);
                } else {
                  closeMenu();
                }
              }}
            >
              {item.name}
            </Link>
          ))}
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full"
            onClick={closeMenu}
          >
            <Button className="w-full button-hover-effect bg-primary hover:bg-primary/90">Resume</Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

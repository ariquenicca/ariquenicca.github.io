
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/#about" },
    { name: "Projects", link: "/#projects" },
    { name: "Contact", link: "/#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass-effect py-3 shadow-sm" : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="text-xl font-display font-bold tracking-tight transition-all hover:opacity-80"
            onClick={closeMenu}
          >
            Developer
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className="text-sm font-medium hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <Button className="button-hover-effect">Resume</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
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
              onClick={closeMenu}
            >
              {item.name}
            </Link>
          ))}
          <Button className="w-full button-hover-effect">Resume</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

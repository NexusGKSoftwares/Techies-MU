
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    }
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-muted">
      <div className="container mx-auto py-4 px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="font-techies text-2xl font-bold text-pink-gradient">Techies MU</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/"
              className={`text-foreground/80 hover:text-techies-pink transition-colors ${isActive('/') && 'text-techies-pink'}`}
            >
              Home
            </Link>
            <Link 
               to="/about"
               className={`text-foreground/80 hover:text-techies-pink transition-colors ${isActive('/about') && 'text-techies-pink'}`}            >
              About
            </Link>
            <Link 
              to="/team"
              className={`text-foreground/80 hover:text-techies-pink transition-colors ${isActive('/team') && 'text-techies-pink'}`}
            >
              Team
            </Link>
            <Link 
              to="/events"
              className={`text-foreground/80 hover:text-techies-pink transition-colors ${isActive('/events') && 'text-techies-pink'}`}
            >
              Events
            </Link>
            <Link 
              to="/contact"
              className={`text-foreground/80 hover:text-techies-pink transition-colors ${isActive('/contact') && 'text-techies-pink'}`}
            >
              Contact
            </Link>
            <Button 
              onClick={() => scrollToSection('join')}
              className="pink-btn"
            >
              Join Us
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2">
              {isMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-muted flex flex-col space-y-4">
            <Link 
              to="/"
              className={`text-foreground/80 hover:text-techies-pink transition-colors py-2 ${isActive('/') && 'text-techies-pink'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground/80 hover:text-techies-pink transition-colors py-2 text-left"
            >
              About
            </button>
            <Link 
              to="/team"
              className={`text-foreground/80 hover:text-techies-pink transition-colors py-2 ${isActive('/team') && 'text-techies-pink'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </Link>
            <button 
              onClick={() => scrollToSection('events')}
              className="text-foreground/80 hover:text-techies-pink transition-colors py-2 text-left"
            >
              Events
            </button>
            <Link 
              to="/contact"
              className={`text-foreground/80 hover:text-techies-pink transition-colors py-2 ${isActive('/contact') && 'text-techies-pink'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <button 
              onClick={() => scrollToSection('join')}
              className="pink-btn w-full"
            >
              Join Us
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

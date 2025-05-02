
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";

interface Props extends React.HTMLAttributes<HTMLDivElement> { }

const Navbar: React.FC<Props> = ({ className, ...props }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background",
        className
      )}
      {...props}
    >
      <div className="container flex h-16 items-center justify-between py-4">
        <Link to="/" className="mr-4 flex items-center space-x-2">
          <Icons.logo className="h-6 w-6" />
          <span className="hidden font-bold sm:inline-block">
            {siteConfig.name}
          </span>
        </Link>
        
        {/* Mobile menu button */}
        <div className="flex items-center space-x-2 md:hidden">
          <ThemeToggle />
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <Icons.close className="h-6 w-6" /> : <Icons.menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex md:items-center md:gap-6">
          <Link to="/" className="font-medium text-foreground hover:text-primary">
            Home
          </Link>
          <Link to="/services" className="font-medium text-foreground hover:text-primary">
            Services
          </Link>
          <Link to="/portfolio" className="font-medium text-foreground hover:text-primary">
            Portfolio
          </Link>
          <Link to="/about" className="font-medium text-foreground hover:text-primary">
            About
          </Link>
          <Link to="/contact" className="font-medium text-foreground hover:text-primary">
            Contact
          </Link>
          <ThemeToggle />
        </div>
        
        {/* Mobile navigation menu */}
        {isMenuOpen && (
          <div className="absolute left-0 right-0 top-16 z-50 bg-background border-b md:hidden">
            <div className="flex flex-col gap-4 p-4">
              <Link 
                to="/" 
                className="block font-medium text-foreground hover:text-primary px-5 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className="block font-medium text-foreground hover:text-primary px-5 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/portfolio" 
                className="block font-medium text-foreground hover:text-primary px-5 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link 
                to="/about" 
                className="block font-medium text-foreground hover:text-primary px-5 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="block font-medium text-foreground hover:text-primary px-5 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

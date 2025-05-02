
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-hustly-primary text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">Hustly Life</h3>
            <p className="mb-6 text-hustly-secondary/90">
              Simplifying the hustle of digital transformation with expert AI, web, and blockchain solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-hustly-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-hustly-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-hustly-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-hustly-accent transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="hover:text-hustly-accent transition-colors">AI Solutions</a>
              </li>
              <li>
                <a href="#services" className="hover:text-hustly-accent transition-colors">Web Development</a>
              </li>
              <li>
                <a href="#services" className="hover:text-hustly-accent transition-colors">Blockchain Services</a>
              </li>
              <li>
                <a href="#services" className="hover:text-hustly-accent transition-colors">Smart Contracts</a>
              </li>
              <li>
                <a href="#services" className="hover:text-hustly-accent transition-colors">E-commerce Solutions</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="hover:text-hustly-accent transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-hustly-accent transition-colors">About Us</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-hustly-accent transition-colors">Our Work</a>
              </li>
              <li>
                <a href="#booking" className="hover:text-hustly-accent transition-colors">Book Consultation</a>
              </li>
              <li>
                <a href="#" className="hover:text-hustly-accent transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 text-hustly-accent" />
                <span>123 Innovation Way, Tech Valley, CA 94103</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-hustly-accent" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-hustly-accent" />
                <span>contact@hustlylife.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-hustly-secondary/70">
          <p>&copy; {new Date().getFullYear()} Hustly Life. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

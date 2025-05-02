
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "AI-Powered Analytics Dashboard",
    description: "A comprehensive analytics platform using machine learning to provide actionable insights for e-commerce businesses.",
    category: "AI",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Machine Learning", "Data Visualization", "React"]
  },
  {
    id: 2,
    title: "Decentralized Marketplace",
    description: "A blockchain-based marketplace for digital assets with secure transactions and smart contracts.",
    category: "Blockchain",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Ethereum", "Smart Contracts", "Web3"]
  },
  {
    id: 3,
    title: "E-commerce Website Redesign",
    description: "Complete redesign and development of an e-commerce platform with improved UX and conversion optimization.",
    category: "Web",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["UI/UX Design", "React", "Node.js"]
  },
  {
    id: 4,
    title: "NLP Customer Support Bot",
    description: "An AI-powered chatbot with natural language processing capabilities to handle customer inquiries.",
    category: "AI",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["NLP", "Machine Learning", "Python"]
  },
  {
    id: 5,
    title: "NFT Marketplace",
    description: "A platform for creating, buying, and selling unique digital collectibles as NFTs on the blockchain.",
    category: "Blockchain",
    image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["NFT", "Solidity", "React"]
  },
  {
    id: 6,
    title: "Corporate Website & CMS",
    description: "A modern, responsive corporate website with a custom content management system for easy updates.",
    category: "Web",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["WordPress", "Custom CMS", "JavaScript"]
  }
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const filters = ["All", "AI", "Web", "Blockchain"];
  
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding bg-hustly-light">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-hustly-accent font-semibold">OUR WORK</span>
          <h2 className="text-4xl font-bold text-hustly-primary mt-2">Featured Projects</h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful projects across AI, web development, and blockchain
            technologies that have helped businesses achieve their goals.
          </p>
        </div>
        
        <div className="flex justify-center mb-10 flex-wrap gap-2">
          {filters.map((filter) => (
            <Button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              variant={activeFilter === filter ? "default" : "outline"}
              className={`
                rounded-full px-6 py-2 m-1
                ${activeFilter === filter 
                  ? 'bg-hustly-primary hover:bg-hustly-primary/90' 
                  : 'border-hustly-primary text-hustly-primary hover:bg-hustly-primary/5'}
              `}
            >
              {filter}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.slice(0, 2).map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-hustly-accent/10 text-hustly-accent">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 2 && (
                    <Badge variant="secondary" className="bg-hustly-secondary text-hustly-primary">
                      +{project.tags.length - 2}
                    </Badge>
                  )}
                </div>
                <h3 className="text-xl font-bold text-hustly-primary mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Button variant="link" className="text-hustly-accent p-0 hover:text-hustly-primary">
                  View Case Study
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-hustly-primary hover:bg-hustly-accent">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

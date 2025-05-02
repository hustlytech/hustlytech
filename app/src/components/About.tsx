
import { CheckCircle2, Clock, Users, Zap } from "lucide-react";

const features = [
  {
    icon: <Clock size={24} className="text-hustly-accent" />,
    title: "Fast Turnaround",
    description: "We deliver projects efficiently without compromising on quality, ensuring you meet your business deadlines."
  },
  {
    icon: <Users size={24} className="text-hustly-accent" />,
    title: "Expert Team",
    description: "Our team of experienced developers and consultants brings specialized knowledge across multiple technologies."
  },
  {
    icon: <Zap size={24} className="text-hustly-accent" />,
    title: "Cutting-Edge Solutions",
    description: "We stay ahead of technological trends to provide innovative solutions that give you a competitive advantage."
  },
  {
    icon: <CheckCircle2 size={24} className="text-hustly-accent" />,
    title: "Client-Focused Approach",
    description: "We prioritize your business goals and tailor our services to meet your specific needs and requirements."
  }
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-hustly-secondary">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <span className="text-hustly-accent font-semibold">WHY CHOOSE US</span>
            <h2 className="text-4xl font-bold text-hustly-primary mt-2 mb-6">
              Simplified Solutions for Complex Problems
            </h2>
            <p className="text-gray-700 mb-8">
              At Hustly Life, we understand that technology should simplify, not complicate. 
              Our mission is to decode the complexity of modern tech and deliver streamlined 
              solutions that elevate your business.
            </p>
            <p className="text-gray-700 mb-8">
              With expertise across AI, web development, and blockchain technologies, 
              we offer a holistic approach to digital transformation that helps businesses 
              of all sizes achieve their objectives efficiently.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 mt-1">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold text-hustly-primary mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-xl bg-white p-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="text-5xl font-bold text-hustly-accent mr-4">250+</div>
                <div className="text-hustly-primary">Projects Successfully Completed</div>
              </div>
              <div className="w-full h-px bg-gray-200"></div>
              <div className="flex items-center">
                <div className="text-5xl font-bold text-hustly-accent mr-4">98%</div>
                <div className="text-hustly-primary">Client Satisfaction Rate</div>
              </div>
              <div className="w-full h-px bg-gray-200"></div>
              <div className="flex items-center">
                <div className="text-5xl font-bold text-hustly-accent mr-4">15+</div>
                <div className="text-hustly-primary">Years of Combined Experience</div>
              </div>
              <div className="w-full h-px bg-gray-200"></div>
              <div className="flex items-center">
                <div className="text-5xl font-bold text-hustly-accent mr-4">24/7</div>
                <div className="text-hustly-primary">Support for All Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

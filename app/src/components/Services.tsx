
import { BrainCircuit, Code, Database } from "lucide-react";

const serviceData = [
  {
    icon: <BrainCircuit size={48} className="text-hustly-accent mb-4" />,
    title: "AI Solutions",
    description: "Harness the power of artificial intelligence to automate processes, gain insights from data, and enhance decision making with our custom AI integrations and machine learning solutions.",
    features: ["ML Model Development", "AI Chatbots", "Data Analysis", "Process Automation"]
  },
  {
    icon: <Code size={48} className="text-hustly-accent mb-4" />,
    title: "Web Development",
    description: "Create responsive, user-friendly websites and web applications with modern technologies that deliver outstanding experiences and help your business stand out from the competition.",
    features: ["Responsive Design", "E-commerce", "Web Applications", "CMS Development"]
  },
  {
    icon: <Database size={48} className="text-hustly-accent mb-4" />,
    title: "Blockchain Services",
    description: "Build secure, transparent, and decentralized applications using blockchain technology. From smart contracts to full-scale dApps, we help you leverage this revolutionary technology.",
    features: ["Smart Contracts", "NFT Development", "DeFi Applications", "Blockchain Integration"]
  }
];

const Services = () => {
  return (
    <section id="services" className="bg-white section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-hustly-accent font-semibold">WHAT WE DO</span>
          <h2 className="text-4xl font-bold text-hustly-primary mt-2">Our Services</h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions tailored to your unique business needs,
            combining cutting-edge technology with strategic expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service, index) => (
            <div 
              key={index} 
              className="service-card group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.icon}
              <h3 className="text-xl font-bold text-hustly-primary mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-hustly-accent mr-2"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

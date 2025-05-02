
import { Mail, MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-hustly-light">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-hustly-accent font-semibold">GET IN TOUCH</span>
          <h2 className="text-4xl font-bold text-hustly-primary mt-2">Contact Us</h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Have questions or ready to start your project? Reach out to us directly or use the form below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-md text-center flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-hustly-accent/10 rounded-full flex items-center justify-center mb-4">
              <Phone className="text-hustly-accent" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-hustly-primary mb-2">Call Us</h3>
            <p className="text-gray-600 mb-4">Mon-Fri from 9am to 6pm</p>
            <a href="tel:+15551234567" className="text-hustly-accent font-medium hover:text-hustly-primary">
              +1 (555) 123-4567
            </a>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md text-center flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-hustly-accent/10 rounded-full flex items-center justify-center mb-4">
              <Mail className="text-hustly-accent" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-hustly-primary mb-2">Email Us</h3>
            <p className="text-gray-600 mb-4">We'll respond within 24 hours</p>
            <a href="mailto:contact@hustlylife.com" className="text-hustly-accent font-medium hover:text-hustly-primary">
              contact@hustlylife.com
            </a>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md text-center flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-hustly-accent/10 rounded-full flex items-center justify-center mb-4">
              <MessageSquare className="text-hustly-accent" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-hustly-primary mb-2">Live Chat</h3>
            <p className="text-gray-600 mb-4">Chat with our support team</p>
            <Button className="bg-hustly-accent hover:bg-hustly-primary">
              Start Chat
            </Button>
          </div>
        </div>
        
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="p-1 bg-hustly-primary rounded-xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.77409918207!2d-122.47261283083148!3d37.75813870121048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1649301994367!5m2!1sen!2sus" 
              width="100%" 
              height="400" 
              style={{ border: 0, borderRadius: "0.65rem" }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Hustly Life Office Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

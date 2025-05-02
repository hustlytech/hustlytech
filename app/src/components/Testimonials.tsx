
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

// Testimonial data
const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    role: "CTO",
    content: "Hustly Life transformed our business with their AI-powered solution. Their team understood our needs perfectly and delivered a system that increased our efficiency by 40%. The ongoing support has been exceptional.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&auto=format&fit=crop",
    rating: 5,
    project: "AI Customer Service Platform"
  },
  {
    name: "Michael Chen",
    company: "FinEdge",
    role: "Product Director",
    content: "Working with the Hustly team on our blockchain integration was a game changer. They navigated complex technical challenges with ease and delivered a secure, scalable solution ahead of schedule.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&h=100&auto=format&fit=crop",
    rating: 5,
    project: "Blockchain Payment System"
  },
  {
    name: "Emma Rodriguez",
    company: "Creative Pulse",
    role: "Marketing Director",
    content: "Our website redesign by Hustly Life exceeded all expectations. The responsive design and intuitive user interface have significantly improved our conversion rates. Their approach to understanding our brand was refreshing.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&h=100&auto=format&fit=crop",
    rating: 5,
    project: "E-commerce Website Redesign"
  },
  {
    name: "David Park",
    company: "HealthTech Solutions",
    role: "CEO",
    content: "The AI diagnostic tool developed by Hustly Life has revolutionized our patient screening process. Their expertise in healthcare AI applications is unmatched, and their commitment to ethical AI development was crucial for our project.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&h=100&auto=format&fit=crop",
    rating: 5,
    project: "Healthcare AI Application"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-hustly-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-hustly-accent font-semibold">TESTIMONIALS</span>
          <h2 className="text-4xl font-bold text-hustly-primary mt-2 mb-6">
            Client Success Stories
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from our satisfied clients about their experiences working with the Hustly Life team.
          </p>
        </div>

        <div className="py-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="mx-auto max-w-5xl"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-6">
                  <Card className="h-full bg-white dark:bg-gray-800 shadow-lg border-none overflow-hidden">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center mb-4">
                        <Avatar className="h-12 w-12 mr-4 border-2 border-hustly-accent">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-bold text-hustly-primary dark:text-white">{testimonial.name}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.role}, {testimonial.company}</p>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        {Array(5).fill(0).map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            className={`inline-block ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill={i < testimonial.rating ? 'currentColor' : 'none'}
                          />
                        ))}
                      </div>
                      
                      <div className="relative flex-grow">
                        <Quote className="text-hustly-accent/20 absolute -top-2 -left-2" size={32} />
                        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4 relative z-10 pl-4">
                          {testimonial.content}
                        </p>
                      </div>
                      
                      <div className="mt-auto">
                        <span className="text-xs font-medium bg-hustly-secondary text-hustly-primary px-3 py-1 rounded-full dark:bg-gray-700 dark:text-gray-300">
                          Project: {testimonial.project}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static mr-2 h-10 w-10" />
              <CarouselNext className="relative static ml-2 h-10 w-10" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

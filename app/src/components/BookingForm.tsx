
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Check, CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const services = [
  "AI Development",
  "Web Development",
  "Blockchain Solutions",
  "Other/Not Sure"
];

const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Consultation Booked!",
        description: "We'll contact you shortly to confirm your appointment.",
        action: (
          <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
            <Check className="h-5 w-5 text-white" />
          </div>
        ),
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
      setDate(undefined);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="booking" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-hustly-accent font-semibold">GET STARTED</span>
            <h2 className="text-4xl font-bold text-hustly-primary mt-2">
              Book a Free Consultation
            </h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Let's discuss how we can help bring your ideas to life. Schedule a no-obligation 
              consultation with our experts to explore the possibilities.
            </p>
          </div>
          
          <div className="bg-hustly-primary/5 rounded-xl p-8 md:p-10 shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-hustly-primary font-medium">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="border-hustly-primary/20 focus:border-hustly-accent"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-hustly-primary font-medium">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="border-hustly-primary/20 focus:border-hustly-accent"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-hustly-primary font-medium">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className="border-hustly-primary/20 focus:border-hustly-accent"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-hustly-primary font-medium">
                    Preferred Date
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal border-hustly-primary/20 focus:border-hustly-accent"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span className="text-gray-400">Select a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <CalendarComponent
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        disabled={(date) => {
                          const today = new Date();
                          return date < today;
                        }}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div className="space-y-2">
                  <label className="text-hustly-primary font-medium">
                    Service Interest
                  </label>
                  <Select onValueChange={handleServiceChange} value={formData.service}>
                    <SelectTrigger className="border-hustly-primary/20 focus:border-hustly-accent">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="message" className="text-hustly-primary font-medium">
                    Project Details
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or requirements..."
                    className="min-h-[120px] border-hustly-primary/20 focus:border-hustly-accent"
                  />
                </div>
              </div>
              
              <div className="text-center pt-4">
                <Button 
                  type="submit" 
                  className="bg-hustly-accent hover:bg-hustly-primary w-full md:w-auto px-8 py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Booking..." : "Book Your Free Consultation"}
                </Button>
              </div>
            </form>
          </div>
          
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
            <div className="flex items-center">
              <Calendar className="text-hustly-primary mr-3" />
              <div>
                <p className="font-medium text-hustly-primary">Available 7 days a week</p>
                <p className="text-gray-600 text-sm">9:00 AM - 6:00 PM</p>
              </div>
            </div>
            <div className="h-8 w-px bg-gray-300 hidden md:block"></div>
            <p className="text-gray-600">
              <span className="font-medium text-hustly-primary">Response Time:</span> We'll get back to you within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;

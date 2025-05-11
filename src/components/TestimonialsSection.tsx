
import React from 'react';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    name: "Jane Doe",
    role: "Computer Science Student",
    testimonial: "Joining Techies MU transformed my coding journey. Their workshops gave me the confidence to build my first web app!",
    avatar: "👩‍💻"
  },
  {
    name: "John Smith",
    role: "Engineering Student",
    testimonial: "The hackathon organized by Techies MU was challenging and fun. I made great connections and learned so much in 48 hours.",
    avatar: "👨‍💻"
  },
  {
    name: "Amina Hassan",
    role: "Business Student",
    testimonial: "As a non-tech major, I was intimidated at first, but the digital skills workshops were so accessible and practical!",
    avatar: "👩‍🎓"
  },
  {
    name: "David Kimani",
    role: "Cybersecurity Enthusiast",
    testimonial: "The mentorship I received through Techies MU helped me land my first tech internship. Forever grateful!",
    avatar: "🧑‍💻"
  },
];

const TestimonialsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="testimonials" className="relative py-20 px-4">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-techies-neon-pink/15 filter blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 rounded-full bg-techies-hot-pink/15 filter blur-3xl"></div>
        <div className="absolute top-2/3 left-1/2 w-48 h-48 rounded-full bg-techies-magenta/20 filter blur-2xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="inline-block text-3xl md:text-4xl font-techies font-bold text-gradient mb-4">
            Member Stories
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-techies-purple to-techies-pink mx-auto my-4 rounded-full"></div>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Hear from our community members about their experiences with Techies MU.
          </p>
        </motion.div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="h-full"
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-muted h-full hover:border-techies-pink/50 transition-colors duration-300">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="mb-4 text-4xl">{testimonial.avatar}</div>
                      <p className="text-foreground/90 mb-4 italic flex-grow">"{testimonial.testimonial}"</p>
                      <div className="mt-auto">
                        <p className="font-medium text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-foreground/70">{testimonial.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex left-0 bg-background/80 border-techies-pink/30 text-foreground hover:bg-techies-pink hover:text-background" />
          <CarouselNext className="hidden md:flex right-0 bg-background/80 border-techies-pink/30 text-foreground hover:bg-techies-pink hover:text-background" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;

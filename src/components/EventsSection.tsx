
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, Users } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const EventsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Event date set to May 25th, 2025
  const eventDate = new Date('2025-05-25T10:00:00');

  return (
    <section id="events" className="relative py-20 px-4">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-techies-pink/15 filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-techies-neon-pink/15 filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="inline-block text-3xl md:text-4xl font-techies font-bold text-pink-gradient mb-4">
            Featured Event
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-techies-pink to-techies-neon-pink mx-auto my-4 rounded-full"></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Card className="bg-card/70 backdrop-blur-lg border-muted overflow-hidden max-w-5xl mx-auto">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Event Image/Poster Side */}
                <div className="relative h-72 lg:h-full bg-gradient-to-br from-techies-purple/70 via-techies-pink/70 to-techies-neon-pink/70 overflow-hidden">
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-center p-6"
                    >
                      <h3 className="font-techies text-2xl md:text-3xl font-bold text-white mb-2">Introduction to</h3>
                      <h2 className="font-techies text-3xl md:text-5xl font-bold text-white mb-4">Digital Skills</h2>
                      
                      <div className="flex flex-col gap-3 mb-6">
                        <div className="flex items-center justify-center gap-2">
                          <CalendarDays className="h-5 w-5 text-white/90" />
                          <span className="text-white/90">May 25th, 2025 • 10:00 AM</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <Users className="h-5 w-5 text-white/90" />
                          <span className="text-white/90">Limited to 100 participants</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 px-3">
                        <CountdownTimer targetDate={eventDate} />
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-techies-neon-pink/30 rounded-bl-full blur-lg"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-techies-pink/30 rounded-tr-full blur-lg"></div>
                  <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-sm"></div>
                  <div className="absolute bottom-1/4 right-1/3 w-8 h-8 bg-white/20 rounded-full blur-sm"></div>
                </div>
                
                {/* Event Details Side */}
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="p-8 lg:p-10"
                >
                  <h3 className="font-techies text-2xl font-semibold mb-4 text-pink-gradient">Event Details</h3>
                  
                  <p className="text-foreground/80 mb-6">
                    Join us for an immersive introduction to essential digital skills that every university student needs in today's tech-driven world. This event is perfect for beginners and those looking to strengthen their digital foundation.
                  </p>
                  
                  <h4 className="text-lg font-semibold text-foreground mb-3">Topics Covered:</h4>
                  <ul className="space-y-3 mb-8">
                    <motion.li 
                      initial={{ opacity: 0, x: 10 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                      className="flex items-start"
                    >
                      <div className="w-2 h-2 rounded-full bg-techies-purple mt-2 mr-2"></div>
                      <span className="text-foreground/80">Digital Literacy Fundamentals</span>
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: 10 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
                      transition={{ duration: 0.4, delay: 0.7 }}
                      className="flex items-start"
                    >
                      <div className="w-2 h-2 rounded-full bg-techies-pink mt-2 mr-2"></div>
                      <span className="text-foreground/80">Coding Roadmap for Beginners</span>
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: 10 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
                      transition={{ duration: 0.4, delay: 0.8 }}
                      className="flex items-start"
                    >
                      <div className="w-2 h-2 rounded-full bg-techies-neon-pink mt-2 mr-2"></div>
                      <span className="text-foreground/80">Productivity Tools & Applications</span>
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: 10 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
                      transition={{ duration: 0.4, delay: 0.9 }}
                      className="flex items-start"
                    >
                      <div className="w-2 h-2 rounded-full bg-techies-light-pink mt-2 mr-2"></div>
                      <span className="text-foreground/80">Online Safety & Digital Wellbeing</span>
                    </motion.li>
                  </ul>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Button className="pink-btn w-full">
                      Register for Event
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;

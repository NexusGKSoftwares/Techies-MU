
import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section with Animation */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden z-0">
            <div className="absolute inset-0 bg-hero-pattern"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background to-transparent"></div>
            <div className="absolute top-1/4 left-1/5 w-80 h-80 rounded-full bg-techies-pink/30 filter blur-[60px] animate-float"></div>
            <div className="absolute bottom-1/4 right-1/5 w-96 h-96 rounded-full bg-techies-neon-pink/30 filter blur-[70px] animate-float" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto"
            >
              <h1 className="font-techies text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
              <p className="text-foreground/70 text-lg mb-8">Have questions or feedback? We'd love to hear from you!</p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form and Information */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              
              {/* Contact Form */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-card/30 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-muted"
              >
                <h2 className="font-techies text-2xl font-semibold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                    <Input id="name" placeholder="Enter your name" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                    <Input id="email" type="email" placeholder="Enter your email" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Input id="subject" placeholder="Enter subject" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea id="message" placeholder="Type your message here..." className="min-h-[150px]" required />
                  </div>
                  <Button type="submit" className="pink-btn w-full" size="lg">
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </motion.div>
              
              {/* Contact Information */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <h2 className="font-techies text-2xl font-semibold mb-4">Contact Information</h2>
                  <p className="text-foreground/70">Reach out to us through any of these channels. We're always ready to help!</p>
                  
                  <div className="space-y-4 mt-8">
                    <div className="flex items-start space-x-4">
                      <div className="bg-techies-pink/10 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-techies-pink" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">Address</h3>
                        <p className="text-foreground/70 mt-1">Moi University Main Campus, Kesses, Eldoret, Kenya</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-techies-blue/10 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-techies-blue" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">Phone</h3>
                        <p className="text-foreground/70 mt-1">+254 768 610 613</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-techies-purple/10 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-techies-purple" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">Email</h3>
                        <p className="text-foreground/70 mt-1">techies@moiuniversity.ac.ke</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h3 className="font-techies text-xl font-semibold mb-4">Office Hours</h3>
                  <div className="bg-card/30 backdrop-blur-sm rounded-lg p-6 border border-muted">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span>9:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span>10:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-techies text-3xl font-bold mb-12"
            >
              Find Us
            </motion.h2>
            <div className="rounded-lg overflow-hidden shadow-lg h-[400px] border border-muted">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6776876654716!2d35.26964631426383!3d0.5144162996135077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1781018c8ebcbe21%3A0xb53a491e427f0d71!2sMoi%20University%20Main%20Campus!5e0!3m2!1sen!2ske!4v1621374842294!5m2!1sen!2ske" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Moi University Map"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

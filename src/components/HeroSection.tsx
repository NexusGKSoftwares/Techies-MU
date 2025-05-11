
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  // Floating animation for background elements
  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: { 
        duration: 6, 
        repeat: Infinity, 
        repeatType: "reverse" as const
      }
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-20 pb-10 px-4">
      {/* Enhanced Neon Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute inset-0 bg-hero-pattern"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background to-transparent"></div>
        
        {/* Animated background elements */}
        <motion.div 
          initial="initial"
          animate="animate"
          variants={floatingAnimation}
          className="absolute top-1/4 left-1/5 w-80 h-80 rounded-full bg-techies-purple/30 filter blur-[60px]"
        ></motion.div>
        <motion.div 
          initial="initial"
          animate="animate"
          variants={floatingAnimation}
          style={{ animationDelay: '1s' }}
          className="absolute bottom-1/4 right-1/5 w-96 h-96 rounded-full bg-techies-pink/30 filter blur-[70px]"
        ></motion.div>
        <motion.div 
          initial="initial"
          animate="animate"
          variants={floatingAnimation}
          style={{ animationDelay: '2s' }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-techies-neon-pink/20 filter blur-[80px]"
        ></motion.div>
        
        <motion.div 
          initial="initial"
          animate="animate"
          variants={floatingAnimation}
          style={{ animationDelay: '3s' }}
          className="absolute top-3/4 left-1/4 w-64 h-64 rounded-full bg-techies-hot-pink/25 filter blur-[50px]"
        ></motion.div>
        <motion.div 
          initial="initial"
          animate="animate"
          variants={floatingAnimation}
          style={{ animationDelay: '2.5s' }}
          className="absolute top-1/3 right-1/3 w-48 h-48 rounded-full bg-techies-magenta/25 filter blur-[40px]"
        ></motion.div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto z-10 text-center">
        <motion.div 
          className="flex flex-col items-center space-y-6 max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={itemVariants} 
            className="font-techies text-4xl md:text-6xl lg:text-7xl font-bold text-gradient mb-4"
          >
            Techies MU
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl font-medium text-foreground/90 max-w-2xl"
          >
            Empowering Students Through Technology
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={() => scrollToSection('join')}
                className="pink-btn text-lg px-8 py-6"
              >
                Join Us
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={() => scrollToSection('events')}
                variant="outline" 
                className="text-lg px-8 py-6 pink-neon-border bg-background/50"
              >
                Upcoming Events
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Animated scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.span 
          className="text-sm text-foreground/80 mb-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll Down
        </motion.span>
        <motion.svg 
          className="w-6 h-6 text-foreground/80"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
          fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </motion.svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;

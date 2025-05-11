
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="relative py-20 px-4">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-techies-pink/10 filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-techies-neon-pink/10 filter blur-3xl"></div>
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
            About Us
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-techies-pink to-techies-neon-pink mx-auto my-4 rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-muted hover:border-techies-pink/50 transition-colors overflow-hidden group h-full">
              <CardContent className="p-8">
                <motion.h3 
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-xl md:text-2xl font-techies font-semibold mb-4 text-pink-gradient"
                >
                  Our Mission
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-foreground/80 leading-relaxed"
                >
                  At Techies MU, we're dedicated to promoting digital literacy, 
                  coding excellence, and technological innovation among university students. 
                  Our mission is to create a vibrant community where students can learn, 
                  collaborate, and build the skills needed for the digital future.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="mt-6 flex flex-wrap gap-3"
                >
                  <span className="bg-muted/80 px-3 py-1 rounded-full text-sm text-foreground/80 hover:bg-techies-pink/20 transition-colors">Digital Literacy</span>
                  <span className="bg-muted/80 px-3 py-1 rounded-full text-sm text-foreground/80 hover:bg-techies-pink/20 transition-colors">Coding Skills</span>
                  <span className="bg-muted/80 px-3 py-1 rounded-full text-sm text-foreground/80 hover:bg-techies-pink/20 transition-colors">Innovation</span>
                  <span className="bg-muted/80 px-3 py-1 rounded-full text-sm text-foreground/80 hover:bg-techies-pink/20 transition-colors">Community</span>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-muted hover:border-techies-neon-pink/50 transition-colors overflow-hidden group h-full">
              <CardContent className="p-8">
                <motion.h3 
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-xl md:text-2xl font-techies font-semibold mb-4 text-pink-gradient"
                >
                  Who We Are
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-foreground/80 leading-relaxed"
                >
                  Techies MU is a student-run tech hub based at Moi University. 
                  We bring together passionate students from various disciplines 
                  who share a common interest in technology. Our community is driven 
                  by students, for students, with the support of faculty advisors 
                  and industry partners.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="mt-6 space-y-3"
                >
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-techies-purple mr-2"></div>
                    <span className="text-foreground/80">Student-led organization</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-techies-pink mr-2"></div>
                    <span className="text-foreground/80">Based at Moi University</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-techies-neon-pink mr-2"></div>
                    <span className="text-foreground/80">Open to all departments</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-techies-light-pink mr-2"></div>
                    <span className="text-foreground/80">Powered by MoiHub</span>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

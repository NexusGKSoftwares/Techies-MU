
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProgramsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const programs = [
    {
      title: "Digital Skills Workshops",
      description: "Hands-on workshops covering essential digital skills for students across all disciplines, from basic computer literacy to advanced software tools.",
      icon: (
        <svg className="w-12 h-12 text-techies-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Coding Bootcamps",
      description: "Intensive training programs focusing on programming languages, web development, mobile apps, and software engineering fundamentals.",
      icon: (
        <svg className="w-12 h-12 text-techies-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Hackathons",
      description: "Collaborative coding events where students work in teams to solve real-world problems through innovative technological solutions.",
      icon: (
        <svg className="w-12 h-12 text-techies-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Tech Talks & Meetups",
      description: "Regular gatherings featuring guest speakers, industry professionals, and student presentations on emerging technologies and career paths.",
      icon: (
        <svg className="w-12 h-12 text-techies-sky-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="programs" className="relative py-20 px-4 bg-gradient-to-b from-background to-muted/50">
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
            Programs & Activities
          </h2>
          <div className="w-20 h-1 bg-gradient-neon mx-auto my-4 rounded-full"></div>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Dive into our diverse range of programs designed to nurture your tech skills and connect you with like-minded peers.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {programs.map((program, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-muted hover:border-techies-purple/50 transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0 bg-muted/50 p-4 rounded-lg">
                      {program.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-techies font-semibold mb-3 text-gradient">{program.title}</h3>
                      <p className="text-foreground/80">{program.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsSection;

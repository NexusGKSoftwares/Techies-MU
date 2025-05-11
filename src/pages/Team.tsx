
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Team members data
const teamMembers = [
  {
    id: 1,
    name: 'Jane Mutua',
    role: 'President',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjI0MDE0Nzky&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
    bio: 'Computer Science student with a passion for AI and software development. Leading Techies MU to create a thriving tech community at Moi University.',
    socials: {
      twitter: '#',
      linkedin: '#',
      github: '#',
      email: 'jane@example.com'
    }
  },
  {
    id: 2,
    name: 'John Kimani',
    role: 'Vice President',
    image: 'https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjI0MDE0ODYx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
    bio: 'Electrical Engineering major with expertise in IoT and robotics. Loves building projects that combine hardware and software solutions.',
    socials: {
      twitter: '#',
      linkedin: '#',
      github: '#',
      email: 'john@example.com'
    }
  },
  {
    id: 3,
    name: 'Sarah Odhiambo',
    role: 'Secretary',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjI0MDE0OTE1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
    bio: 'Information Systems student with strong organizational skills. Manages club documentation and ensures smooth operations of all Techies MU events.',
    socials: {
      twitter: '#',
      linkedin: '#',
      github: '#',
      email: 'sarah@example.com'
    }
  },
  {
    id: 4,
    name: 'David Kiprop',
    role: 'Technical Lead',
    image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjI0MDE0OTY4&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
    bio: 'Software Engineering student specialized in web development. Leads technical workshops and hackathon projects for the club members.',
    socials: {
      twitter: '#',
      linkedin: '#',
      github: '#',
      email: 'david@example.com'
    }
  },
  {
    id: 5,
    name: 'Mary Wangari',
    role: 'Events Coordinator',
    image: 'https://images.unsplash.com/photo-1619970242189-507c7e879c65?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjI0MDE1MDAz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
    bio: 'Business Information Technology student with excellent networking skills. Plans and executes all club events, workshops, and community outreach programs.',
    socials: {
      twitter: '#',
      linkedin: '#',
      github: '#',
      email: 'mary@example.com'
    }
  },
  {
    id: 6,
    name: 'Michael Onyango',
    role: 'Treasurer',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjI0MDE1MDQx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
    bio: 'Finance major with a tech hobbyist background. Manages club funds, sponsorships, and ensures financial sustainability of all club initiatives.',
    socials: {
      twitter: '#',
      linkedin: '#',
      github: '#',
      email: 'michael@example.com'
    }
  },
  {
    id: 7,
    name: 'Faith Kamau',
    role: 'Design Lead',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjI0MDE1MDc3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
    bio: 'Graphic Design student with UX/UI expertise. Creates all visual assets for the club and teaches design principles to tech-focused members.',
    socials: {
      twitter: '#',
      linkedin: '#',
      github: '#',
      email: 'faith@example.com'
    }
  },
  {
    id: 8,
    name: 'Brian Maina',
    role: 'Community Manager',
    image: 'https://images.unsplash.com/photo-1522556189639-b150ed9c4330?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjI0MDE1MTE3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
    bio: 'Communications major with a love for technology. Manages social media, club outreach, and builds relationships with other tech communities.',
    socials: {
      twitter: '#',
      linkedin: '#',
      github: '#',
      email: 'brian@example.com'
    }
  }
];

const Team = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden z-0">
            <div className="absolute inset-0 bg-hero-pattern"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background to-transparent"></div>
            
            {/* Animated neon elements */}
            <div className="absolute top-1/4 left-1/5 w-80 h-80 rounded-full bg-techies-pink/30 filter blur-[60px] animate-float"></div>
            <div className="absolute bottom-1/4 right-1/5 w-96 h-96 rounded-full bg-techies-blue/30 filter blur-[70px] animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-techies-purple/20 filter blur-[80px] animate-float" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto"
            >
              <h1 className="font-techies text-4xl md:text-5xl font-bold mb-6">
                Meet Our Team
              </h1>
              <p className="text-foreground/70 text-lg mb-8">
                The passionate individuals behind Techies MU who work tirelessly to foster technology and innovation at Moi University.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Team Members Grid */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card/30 backdrop-blur-sm rounded-lg overflow-hidden border border-muted group"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-techies text-xl font-semibold">{member.name}</h3>
                    <p className="text-techies-pink mb-3">{member.role}</p>
                    <p className="text-foreground/70 text-sm mb-4">{member.bio}</p>
                    
                    <div className="flex space-x-3">
                      <a 
                        href={member.socials.github} 
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-muted hover:bg-techies-purple/20 transition-colors"
                        aria-label={`${member.name}'s Github`}
                      >
                        <Github className="w-4 h-4 text-foreground/80" />
                      </a>
                      <a 
                        href={member.socials.linkedin} 
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-muted hover:bg-techies-blue/20 transition-colors"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin className="w-4 h-4 text-foreground/80" />
                      </a>
                      <a 
                        href={member.socials.twitter} 
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-muted hover:bg-techies-sky-blue/20 transition-colors"
                        aria-label={`${member.name}'s Twitter`}
                      >
                        <Twitter className="w-4 h-4 text-foreground/80" />
                      </a>
                      <a 
                        href={`mailto:${member.socials.email}`} 
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-muted hover:bg-techies-pink/20 transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="w-4 h-4 text-foreground/80" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Join the Team Section */}
        <section className="py-16 bg-muted/30 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-techies text-3xl md:text-4xl font-bold mb-6"
              >
                Want to Join Our Team?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-foreground/70 text-lg mb-8"
              >
                We're always looking for passionate individuals to join Techies MU leadership. Applications open at the beginning of each academic year.
              </motion.p>
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                href="/contact" 
                className="pink-btn inline-flex items-center px-8 py-3"
              >
                Contact Us to Learn More
              </motion.a>
            </div>
          </div>
          
          {/* Background elements */}
          <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-techies-pink/10 filter blur-[40px]"></div>
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-techies-purple/10 filter blur-[40px]"></div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;


import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast"; 

const JoinUsSection: React.FC = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // In a real application, you would send this data to your backend
    toast({
      title: "Application received!",
      description: "Thanks for joining Techies MU. We'll be in touch soon!",
      duration: 5000,
    });
  };

  return (
    <section id="join" className="relative py-20 px-4">
   <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-techies-neon-pink/15 filter blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 rounded-full bg-techies-hot-pink/15 filter blur-3xl"></div>
        <div className="absolute top-2/3 left-1/2 w-48 h-48 rounded-full bg-techies-magenta/20 filter blur-2xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="inline-block text-3xl md:text-4xl font-techies font-bold text-gradient glow-text mb-4">
            Join Us
          </h2>
          <div className="w-20 h-1 bg-gradient-neon mx-auto my-4 rounded-full"></div>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Become part of our vibrant community and unlock opportunities to learn, collaborate, and grow your tech skills.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-muted">
            <CardContent className="p-8">
              <h3 className="text-xl font-techies font-semibold mb-4 text-gradient">Membership Registration</h3>
              
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your name" required className="bg-muted/50" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="you@example.com" required className="bg-muted/50" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="course">Course/Program</Label>
                  <Input id="course" placeholder="e.g. Computer Science" required className="bg-muted/50" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="year">Year of Study</Label>
                  <Input id="year" placeholder="e.g. 2nd Year" required className="bg-muted/50" />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" required />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to receive communications from Techies MU
                  </Label>
                </div>
                
                <Button type="submit" className="gradient-btn w-full">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <h3 className="text-xl font-techies font-semibold mb-4 text-gradient">Connect With Us</h3>
              <p className="text-foreground/80 mb-4">
                Have questions or want to learn more about Techies MU? Reach out to us through WhatsApp or email.
              </p>
              
              <div className="space-y-4 mt-6">
                <a 
                  href="https://wa.me/254768610613" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg border border-muted hover:border-techies-purple/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M5 3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5zm7 4a6 6 0 11-3.657 10.762L5 19l1.242-3.296A6 6 0 0112 7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">WhatsApp</div>
                    <div className="text-sm text-foreground/80">+254 768 610 613</div>
                  </div>
                </a>
                
                <a 
                  href="mailto:techies@moiuniversity.ac.ke" 
                  className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg border border-muted hover:border-techies-blue/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-techies-blue flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-foreground/80">techies@moiuniversity.ac.ke</div>
                  </div>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-techies font-semibold mb-4 text-gradient">Member Benefits</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-techies-purple mt-2 mr-2"></div>
                  <span className="text-foreground/80">Access to workshops, bootcamps, and exclusive events</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-techies-pink mt-2 mr-2"></div>
                  <span className="text-foreground/80">Networking opportunities with peers and industry professionals</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-techies-blue mt-2 mr-2"></div>
                  <span className="text-foreground/80">Mentorship from senior students and faculty advisors</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-techies-sky-blue mt-2 mr-2"></div>
                  <span className="text-foreground/80">Collaboration on real-world projects and hackathons</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;

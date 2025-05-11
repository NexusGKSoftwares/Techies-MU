
import React from 'react';
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-card/80 backdrop-blur-sm border-t border-muted">
      {/* Radial gradient for a subtle glow effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1/2 bg-techies-purple/5 blur-3xl rounded-full opacity-30"></div>
      </div>
      
      <div className="container mx-auto py-12 px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo and Description */}
          <div className="space-y-4">
            <h3 className="font-techies text-2xl font-bold text-gradient glow-text">Techies MU</h3>
            <p className="text-foreground/70">Empowering students through technology at Moi University.</p>
            
            <div className="mt-6 flex items-center">
              <span className="text-foreground/50 text-sm">Powered by</span>
              <span className="ml-2 font-semibold text-gradient">NexusGK & MoiHub</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-techies text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-3">
              <a href="#about" className="block text-foreground/70 hover:text-techies-purple transition-colors">About Us</a>
              <a href="#programs" className="block text-foreground/70 hover:text-techies-purple transition-colors">Programs</a>
              <a href="#events" className="block text-foreground/70 hover:text-techies-purple transition-colors">Events</a>
              <a href="#join" className="block text-foreground/70 hover:text-techies-purple transition-colors">Join Us</a>
            </div>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-techies text-lg font-semibold text-foreground">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-muted hover:bg-techies-purple/20 transition-colors">
                <Facebook className="w-5 h-5 text-foreground/80" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-muted hover:bg-techies-pink/20 transition-colors">
                <Instagram className="w-5 h-5 text-foreground/80" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-muted hover:bg-techies-blue/20 transition-colors">
                <Linkedin className="w-5 h-5 text-foreground/80" />
              </a>
              <a href="mailto:techies@moiuniversity.ac.ke" className="w-10 h-10 flex items-center justify-center rounded-full bg-muted hover:bg-techies-sky-blue/20 transition-colors">
                <Mail className="w-5 h-5 text-foreground/80" />
              </a>
            </div>
            
            <div className="mt-4 space-y-2">
              <p className="flex items-center text-foreground/70">
                <span className="mr-2">📧</span> 
                techies@moiuniversity.ac.ke
              </p>
              <p className="flex items-center text-foreground/70">
                <span className="mr-2">📱</span> 
                +254 768 610 613
              </p>
              <p className="flex items-center text-foreground/70">
                <span className="mr-2">📍</span> 
                Moi University, Eldoret, Kenya
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-muted flex flex-col md:flex-row justify-between items-center">
          <p className="text-gradient">
            © {new Date().getFullYear()} Techies MU. All rights reserved. 
          </p>
          <p className="text-gradient">
          Made with ❤️ by the NexusGK 
          </p>
          <div className="mt-4 md:mt-0 text-gradient flex space-x-4">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

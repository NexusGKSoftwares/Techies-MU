
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Enhanced Neon Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute inset-0 bg-hero-pattern"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background to-transparent"></div>
        {/* Larger, more intense animated neon circles */}
        <div className="absolute top-1/4 left-1/5 w-80 h-80 rounded-full bg-techies-pink/30 filter blur-[60px] animate-float"></div>
        <div className="absolute bottom-1/4 right-1/5 w-96 h-96 rounded-full bg-techies-neon-pink/30 filter blur-[70px] animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-techies-magenta/20 filter blur-[80px] animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="text-center z-10">
        <h1 className="font-techies text-8xl font-bold text-pink-gradient mb-4">404</h1>
        <p className="text-xl text-foreground/80 mb-8">Oops! This page doesn't exist in our digital universe</p>
        <Button asChild className="pink-btn text-lg px-8 py-6">
          <a href="/">Return to Home</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;

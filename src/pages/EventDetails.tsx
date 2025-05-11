
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Share2, Users, ChevronLeft } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import CountdownTimer from '@/components/CountdownTimer';
import { toast } from '@/components/ui/use-toast';

// Sample event data - in a real app this would come from an API
const eventData = {
  id: '1',
  title: 'Annual Techies Hackathon 2025',
  date: new Date('2025-06-15T09:00:00'),
  endDate: new Date('2025-06-17T18:00:00'),
  location: 'Engineering Building, Moi University',
  image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTY1OTk5Mw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
  description: 'Join us for our flagship annual hackathon! This exciting 3-day event brings together the brightest tech minds from Moi University and beyond. Participants will work in teams to develop innovative solutions to real-world problems, with mentorship from industry experts and academics. The event includes workshops, networking opportunities, and attractive prizes for winning teams.',
  organizer: 'Techies MU',
  attendees: 158,
  capacity: 200,
  highlights: [
    'Cash prizes worth over KSh 200,000',
    'Career opportunities with top tech companies',
    'Professional mentorship throughout the event',
    'Free meals and refreshments',
    'Networking with industry professionals',
    'Certificate of participation'
  ],
  schedule: [
    { day: 'Day 1', title: 'Opening Ceremony & Team Formation', time: '09:00 AM - 11:00 AM' },
    { day: 'Day 1', title: 'Problem Statement Presentation', time: '11:30 AM - 01:00 PM' },
    { day: 'Day 1', title: 'Hacking Begins', time: '02:00 PM - 10:00 PM' },
    { day: 'Day 2', title: 'Hacking Continues', time: '08:00 AM - 10:00 PM' },
    { day: 'Day 2', title: 'Workshops & Mentorship', time: '09:00 AM - 05:00 PM' },
    { day: 'Day 3', title: 'Final Submissions', time: '08:00 AM - 12:00 PM' },
    { day: 'Day 3', title: 'Project Presentations', time: '01:00 PM - 05:00 PM' },
    { day: 'Day 3', title: 'Awards & Closing Ceremony', time: '06:00 PM - 08:00 PM' }
  ]
};

const EventDetails: React.FC = () => {
  const { id } = useParams();
  // In a real app, fetch the event data based on the ID
  // For now, we'll use our sample data
  
  const handleRegister = () => {
    toast({
      title: "Registration Successful!",
      description: "You've successfully registered for the event. Check your email for details.",
    });
  };
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: eventData.title,
        text: "Check out this awesome event by Techies MU!",
        url: window.location.href,
      })
      .catch((error) => console.log('Error sharing', error));
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "Event link copied to clipboard.",
      });
    }
  };

  const isEventPassed = new Date() > eventData.date;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section with Event Image */}
        <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={eventData.image} 
              alt={eventData.title}
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent"></div>
            
            {/* Animated neon elements */}
            <div className="absolute top-1/4 left-1/5 w-80 h-80 rounded-full bg-techies-pink/30 filter blur-[60px] animate-float"></div>
            <div className="absolute bottom-1/4 right-1/5 w-96 h-96 rounded-full bg-techies-purple/30 filter blur-[70px] animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <div className="container mx-auto px-4 h-full flex items-end pb-12 relative z-10">
            <div className="w-full">
              <Link to="/events" className="flex items-center text-foreground/70 hover:text-foreground mb-4 transition-colors">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to all events
              </Link>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-techies text-3xl md:text-5xl font-bold mb-4"
              >
                {eventData.title}
              </motion.h1>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap gap-4 md:gap-6 text-foreground/80 mb-6"
              >
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-techies-pink" />
                  <span>{eventData.date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-techies-blue" />
                  <span>{eventData.date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-techies-purple" />
                  <span>{eventData.location}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-techies-green" />
                  <span>{eventData.attendees} / {eventData.capacity} Registered</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Event Details and Registration */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Event Description and Details */}
              <div className="lg:col-span-2 space-y-8">
                {/* Countdown Timer for upcoming events */}
                {!isEventPassed && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-card/30 backdrop-blur-sm rounded-lg p-6 border border-muted"
                  >
                    <h3 className="text-center text-lg font-semibold mb-2">Event Starts In</h3>
                    <CountdownTimer targetDate={eventData.date} />
                  </motion.div>
                )}
                
                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h2 className="font-techies text-2xl font-semibold mb-4">About This Event</h2>
                  <div className="prose dark:prose-invert max-w-none">
                    <p className="text-foreground/80 leading-relaxed">{eventData.description}</p>
                  </div>
                </motion.div>
                
                {/* Event Highlights */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <h2 className="font-techies text-2xl font-semibold mb-4">Event Highlights</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {eventData.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-flex items-center justify-center bg-techies-pink/10 text-techies-pink rounded-full h-6 w-6 mr-3 mt-0.5 text-sm">✓</span>
                        <span className="text-foreground/80">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                
                {/* Event Schedule */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <h2 className="font-techies text-2xl font-semibold mb-4">Event Schedule</h2>
                  <div className="space-y-4">
                    {eventData.schedule.map((item, index) => (
                      <div 
                        key={index} 
                        className="bg-card/30 backdrop-blur-sm rounded-lg p-4 border border-muted flex flex-col md:flex-row justify-between"
                      >
                        <div className="mb-2 md:mb-0">
                          <span className="text-techies-pink font-medium">{item.day}</span>
                          <h4 className="font-medium text-lg">{item.title}</h4>
                        </div>
                        <div className="flex items-center text-foreground/70">
                          <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                          <span>{item.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
              
              {/* Registration Card */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-muted sticky top-24"
                >
                  {!isEventPassed ? (
                    <>
                      <h3 className="font-techies text-xl font-semibold mb-4 text-center">Reserve Your Spot</h3>
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-2">
                          <span>Attendance</span>
                          <span className="font-medium">{eventData.attendees}/{eventData.capacity}</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-techies-pink to-techies-purple h-2 rounded-full" 
                            style={{ width: `${(eventData.attendees / eventData.capacity) * 100}%` }}
                          ></div>
                        </div>
                        <p className="text-sm text-foreground/70 mt-2">
                          {eventData.capacity - eventData.attendees} spots remaining
                        </p>
                      </div>
                      <Button onClick={handleRegister} className="pink-btn w-full mb-4" size="lg">
                        Register Now
                      </Button>
                    </>
                  ) : (
                    <>
                      <h3 className="font-techies text-xl font-semibold mb-4 text-center">Event Has Ended</h3>
                      <p className="text-foreground/70 text-center mb-6">This event has already taken place. Check out our upcoming events!</p>
                      <Button asChild className="pink-btn w-full mb-4" size="lg">
                        <Link to="/events">View Upcoming Events</Link>
                      </Button>
                    </>
                  )}
                  
                  <Button onClick={handleShare} variant="outline" className="w-full">
                    <Share2 className="mr-2 h-4 w-4" /> Share Event
                  </Button>
                  
                  <div className="mt-6 pt-6 border-t border-muted">
                    <h4 className="font-medium mb-2">Organized by</h4>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                        <span className="font-techies font-bold text-techies-pink">T</span>
                      </div>
                      <div className="ml-3">
                        <p className="font-medium">{eventData.organizer}</p>
                        <Link to="/" className="text-sm text-techies-pink hover:text-techies-pink/80 transition-colors">
                          View Profile
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EventDetails;

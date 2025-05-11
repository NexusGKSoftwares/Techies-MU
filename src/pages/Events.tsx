import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const events = [
    {
        id: '1',
        title: 'Annual Techies Hackathon 2025',
        date: new Date('2025-06-15T09:00:00'),
        location: 'Engineering Building, Moi University',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1080&q=80',
        attendees: 158,
        capacity: 200,
    },
    // You can add more events here
];

const Events: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="relative w-full min-h-screen bg-black text-white overflow-hidden">
                {/* Glowing Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute w-[600px] h-[600px] bg-purple-500 rounded-full mix-blend-screen filter blur-[150px] opacity-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute w-[400px] h-[400px] bg-blue-500 rounded-full mix-blend-screen filter blur-[120px] opacity-20 top-[30%] left-[20%]" />
                    <div className="absolute w-[300px] h-[300px] bg-pink-500 rounded-full mix-blend-screen filter blur-[100px] opacity-30 bottom-[20%] right-[20%]" />
                </div>

                {/* Foreground Text Content */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-32">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                        TECHIES MU
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">
                        A vibrant community of tech minds at Meru University. Building, sharing, and innovating together.
                    </p>
                    <div className="mt-8">
                        <a href="/contact" className="relative inline-block px-8 py-3 font-medium group">
                            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-techies-purple group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-techies-pink border-2 border-black group-hover:bg-techies-purple"></span>
                            <span className="relative text-white group-hover:text-white">Join Us</span>
                        </a>


                        <main className="flex-1">
                            <section className="container mx-auto px-4 py-12 md:py-16">
                                <motion.h1
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="text-4xl md:text-5xl font-bold font-techies bg-gradient-to-r from-techies-pink via-techies-blue to-techies-purple bg-clip-text text-transparent animate-text-glow"
                                >
                                    Meet the Visionaries Behind Techies MU
                                </motion.h1>
                                <br />

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {events.map((event) => (
                                        <motion.div
                                            key={event.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: 0.1 }}
                                            className="bg-card rounded-lg overflow-hidden border border-muted shadow-md hover:shadow-lg transition-shadow"
                                        >
                                            <Link to={`/events/${event.id}`} className="block group">
                                                <div className="relative h-48">
                                                    <img
                                                        src={event.image}
                                                        alt={event.title}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                                </div>
                                                <div className="p-5 space-y-3">
                                                    <h2 className="text-xl font-semibold font-techies group-hover:text-techies-pink transition-colors">
                                                        {event.title}
                                                    </h2>
                                                    <div className="flex items-center text-sm text-muted-foreground">
                                                        <Calendar className="w-4 h-4 mr-2 text-techies-blue" />
                                                        {event.date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                                    </div>
                                                    <div className="flex items-center text-sm text-muted-foreground">
                                                        <MapPin className="w-4 h-4 mr-2 text-techies-purple" />
                                                        {event.location}
                                                    </div>
                                                    <div className="flex items-center text-sm text-muted-foreground">
                                                        <Users className="w-4 h-4 mr-2 text-techies-green" />
                                                        {event.attendees} / {event.capacity} registered
                                                    </div>
                                                </div>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            </section>
                        </main>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Events;

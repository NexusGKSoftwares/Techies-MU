import { motion } from 'framer-motion';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import CountUp from 'react-countup';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const stats = [
    { label: 'Active Members', value: 200 },
    { label: 'Events Held', value: 45 },
    { label: 'Projects Built', value: 68 },
    { label: 'Hackathons Won', value: 12 },
    { label: 'Workshops Conducted', value: 25 }, // New stat
    { label: 'Collaborations', value: 10 }, // New stat
];

const achievements = [
    '/achievements/1.jpg',
    '/achievements/2.jpg',
    '/achievements/3.jpg',
    '/achievements/4.jpg',
];

const teamMembers = [
    { name: 'John Doe', role: 'President', image: '/team/john.jpg' },
    { name: 'Jane Smith', role: 'Vice President', image: '/team/jane.jpg' },
    { name: 'Alice Brown', role: 'Event Coordinator', image: '/team/alice.jpg' },
];

const testimonials = [
    { name: 'Sarah Lee', feedback: 'Techies MU has transformed my coding skills. Amazing community!' },
    { name: 'Mark Richards', feedback: 'The collaboration opportunities here are endless. Grateful to be part of this!' },
];

const About: React.FC = () => {
    return (
        <ParallaxProvider>
            <Navbar />
            <section className="relative min-h-screen text-white bg-black bg-gradient-to-br from-[#0e0e0e] via-[#1f1c2c] to-[#3a2c51] overflow-x-hidden">

                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center pt-24 px-6"
                >
                    <h1 className="text-5xl md:text-6xl font-bold font-techies bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-text-glow">
                        Empowering Tech Minds at Moi University
                    </h1>
                    <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-300">
                        At Techies MU, we're not just coding. We're building the future together.
                    </p>
                </motion.div>

                {/* Mission Section */}
                <div className="mt-20 px-6 max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-white mb-6">Our Core Values</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {['Innovation', 'Collaboration', 'Impact'].map((item, i) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                className="bg-gradient-to-br from-purple-800 to-pink-600 p-6 rounded-xl shadow-xl hover:scale-105 transform transition duration-300"
                            >
                                <h3 className="text-xl font-bold text-white">{item}</h3>
                                <p className="mt-2 text-sm text-gray-200">
                                    {item === 'Innovation' && 'We encourage bold ideas and emerging tech.'}
                                    {item === 'Collaboration' && 'Tech thrives when we build together.'}
                                    {item === 'Impact' && 'Driving change beyond campus walls.'}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Stats Section */}
                <div className="mt-24 px-6 max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Techies MU in Numbers</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                className="text-center"
                            >
                                <h3 className="text-4xl font-bold text-pink-500">
                                    <CountUp end={stat.value} duration={2} />
                                </h3>
                                <p className="text-gray-300 text-sm mt-2">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>


                {/* Testimonials Section */}
                <div className="mt-28 px-6 max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-6">What Our Members Say</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {testimonials.map((testimonial, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-gradient-to-br from-purple-800 to-pink-600 p-6 rounded-xl shadow-xl"
                            >
                                <p className="text-sm text-gray-200 italic">"{testimonial.feedback}"</p>
                                <h3 className="mt-4 text-lg font-bold text-white">{testimonial.name}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Timeline Section */}
                <div className="mt-28 px-6 max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center  mb-8">Our Journey</h2>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="h-px bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-full"></div>
                        </div>
                        <div className="relative flex justify-between items-center space-x-10">
                            <div className="text-center transition-all duration-500 transform hover:scale-105">
                                <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-6 rounded-full shadow-lg hover:shadow-2xl">
                                    <h3 className="font-bold text-2xl">2015</h3>
                                    <p className="text-lg">Founded</p>
                                </div>
                            </div>
                            <div className="text-center transition-all duration-500 transform hover:scale-105">
                                <div className="bg-gradient-to-r from-green-500 to-yellow-500 text-white p-6 rounded-full shadow-lg hover:shadow-2xl">
                                    <h3 className="font-bold text-2xl">2018</h3>
                                    <p className="text-lg">Launched First Hackathon</p>
                                </div>
                            </div>
                            <div className="text-center transition-all duration-500 transform hover:scale-105">
                                <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white p-6 rounded-full shadow-lg hover:shadow-2xl">
                                    <h3 className="font-bold text-2xl">2022</h3>
                                    <p className="text-lg">Reached 200 Members</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {/* CTA Section */}
                <Parallax speed={-10}>
                    <div className="mt-32 text-center px-6">
                        <h2 className="text-4xl font-bold mb-4 text-white">Ready to Join the Movement?</h2>
                        <p className="text-lg text-gray-300 mb-6 max-w-xl mx-auto">
                            Whether you're a beginner or a seasoned coder, Techies MU is your gateway to greatness.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition"
                        >
                            Become a Techie Today
                        </a>
                    </div>
                </Parallax>

                <Footer />
            </section>
        </ParallaxProvider>
    );
};

export default About;


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
  ];

  const achievements = [
    '/achievements/1.jpg',
    '/achievements/2.jpg',
    '/achievements/3.jpg',
    '/achievements/4.jpg',
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

        {/* Achievements Carousel */}
        <div className="mt-28 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Our Achievements</h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
          >
            {achievements.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Achievement ${i + 1}`}
                width={300}
                height={200}
                className="rounded-lg object-cover flex-shrink-0 hover:scale-105 transition"
              />
            ))}
          </motion.div>
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

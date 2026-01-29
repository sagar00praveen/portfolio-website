import { motion } from "framer-motion";
import BujjiModel from "./ui/BujjiModel";

const HeroSection = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center px-6 md:px-20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] opacity-50 animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Column: Text Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-xl md:text-2xl font-medium text-gray-400 mb-4 tracking-wide">
              Hello, I'm Sagar Praveen.
            </h2>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/50 leading-tight tracking-tight"
          >
            Designing the <br /> Future of Web.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-8 text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed"
          >
            I craft aesthetically pleasing and highly functional digital experiences with a focus on motion and user interaction.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="mt-12 flex gap-6"
          >
            <a href="#projects" className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform">
              View Work
            </a>
            <a href="#contact" className="px-8 py-3 bg-white/10 text-white font-medium rounded-full hover:bg-white/20 transition-colors backdrop-blur-md">
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right Column: Bujji Model */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden md:flex justify-center items-center h-[500px] w-full"
        >
          <BujjiModel />
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;

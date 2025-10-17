
const HeroSection = () => (
  <section
    id="about"
    className="relative min-h-screen flex flex-col items-center justify-center text-center bg-[#0b1a20] text-black pt-20 px-6"
  >
    <div className="flex items-center justify-center">
      <h1 className="text-5xl font-bold">
        <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-white bg-clip-text text-transparent">
          Designer + MERN Developer
        </span>
      </h1>
    </div>

    <p className="text-center text-gray-300 mt-7">
      Blending creativity with code to build beautiful things.
    </p>

    {/* Button positioned at bottom-right */}
    <a
      href="#contact"
      className="absolute bottom-10 right-10 inline-block bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-300 hover:from-teal-300 hover:via-cyan-300 hover:to-sky-200 text-white font-semibold py-4 px-6 md:px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-200/50 transform hover:-translate-y-1"
    >
      Get In Touch
    </a>
  </section>
);

export default HeroSection;

const ContactSection = ({ socials }) => {
  const emailAddress = "sagar.y.praveen@gmail.com"; // your email

  return (
    <section
      id="contact"
      className="py-24 bg-[#0b1a20] text-white px-6 relative"
    >
      <div className="max-w-4xl mx-auto animate-fade-in">
        {/* Frosted Glass Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl shadow-cyan-500/20 p-12 text-center">
          <h2 className="text-4xl font-bold mb-8 ">
            <span className="bg-gradient-to-r from-white via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Contact Me
            </span>
          </h2>

          {/* Email Button */}
          <a
            href={`mailto:${emailAddress}`}
            className="inline-block bg-gradient-to-r from-cyan-400 via-teal-400 to-white text-black font-bold py-3 px-8 rounded-2xl transition-transform duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/40"
          >
            {emailAddress}
          </a>

          {/* Social Links */}
          <div className="flex justify-center items-center gap-8 mt-12">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full backdrop-blur-md shadow-md hover:shadow-[0_0_20px_#00ffff] transition-all duration-300 transform hover:scale-110">
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-6 h-6 invert group-hover:invert-0 transition-all duration-300"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

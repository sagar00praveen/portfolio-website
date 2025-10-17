const SkillsSection = ({ skills }) => (
  <section id="skills" className="py-24 bg-[#0b1a20] text-white relative">
    <div className="max-w-6xl mx-auto px-6">
      {/* Gradient Heading */}
      <h2 className="text-4xl font-bold text-center mb-16 ">
        <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-white bg-clip-text text-transparent">
          Technologies & Skills
        </span>
      </h2>

      {/* Skills Grid */}
      <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center group cursor-pointer"
          >
            {/* Glass/Mica Icon Container */}
            <div className="w-16 h-16 md:w-20 md:h-20 p-2 bg-white/5 backdrop-blur-lg rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/20 hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] transition-all duration-300">
              <img
                src={skill.icon}
                alt={skill.name}
                className="object-contain w-12 h-12 md:w-14 md:h-14 grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110"
              />
            </div>
            {/* Skill Name */}
            <span className="mt-3 text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;

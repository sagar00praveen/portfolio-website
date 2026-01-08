import { motion } from "framer-motion";

const SkillsSection = ({ skills }) => {
  return (
    <section id="skills" className="py-24 overflow-hidden relative z-10">
      <h2 className="text-center text-3xl font-semibold mb-16 tracking-tight">Tools & Technologies</h2>

      <div className="relative flex overflow-x-hidden group">
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <div key={`${skill.name}-${index}`} className="flex flex-col items-center gap-4 min-w-[120px] p-6 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
              <span className="text-sm font-medium text-gray-400">{skill.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;

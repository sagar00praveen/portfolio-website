import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

const ProjectsSection = ({ projects, onProjectClick, onViewAll }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextProject = () => {
    setActiveIndex((prev) => prev + 1);
  };

  const prevProject = () => {
    setActiveIndex((prev) => prev - 1);
  };

  const getVisibleProjects = () => {
    // Generate indices: previous, current, next
    const indices = [activeIndex - 1, activeIndex, activeIndex + 1];

    return indices.map((index) => {
      // Handle negative modulo correctly for data lookup
      const dataIndex = ((index % projects.length) + projects.length) % projects.length;

      let position = "center";
      if (index < activeIndex) position = "left";
      if (index > activeIndex) position = "right";

      return {
        ...projects[dataIndex],
        keyDetails: index, // Unique key based on infinite sequence
        position
      };
    });
  };

  return (
    <section id="projects" className="py-32 overflow-hidden relative min-h-[800px] flex flex-col justify-center bg-[#0a0a0a]">
      {/* Header with Title and View All Button */}
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-end mb-20 px-6 z-20 relative">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4 md:mb-0">Selected Works</h2>

        <button
          onClick={onViewAll}
          className="flex items-center gap-2 px-6 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white font-medium hover:bg-white hover:text-black transition-all group"
        >
          View All <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Container needs to be wide enough or allow overflow for side items */}
      <div className="relative flex items-center justify-center h-[500px] w-full perspective-1000">
        <AnimatePresence initial={false} mode="popLayout">
          {getVisibleProjects().map((project) => {
            const isCenter = project.position === "center";
            const isLeft = project.position === "left";
            const isRight = project.position === "right";

            return (
              <motion.div
                key={project.keyDetails}
                initial={{
                  scale: 0.8,
                  x: isRight ? "100%" : isLeft ? "-100%" : 0,
                  opacity: 0,
                  zIndex: isCenter ? 20 : 5,
                  filter: "blur(4px)"
                }}
                animate={{
                  scale: isCenter ? 1 : 0.8,
                  x: isCenter ? 0 : isLeft ? "-60%" : "60%", // Adjust offset to ensure visibility
                  opacity: isCenter ? 1 : 0.4,
                  zIndex: isCenter ? 20 : 5,
                  filter: isCenter ? "blur(0px)" : "blur(2px)",
                  rotateY: isLeft ? 15 : isRight ? -15 : 0
                }}
                exit={{
                  scale: 0.6,
                  opacity: 0,
                  zIndex: 0,
                  filter: "blur(8px)"
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onClick={() => isCenter && onProjectClick(project)}
                style={{
                  position: 'absolute',
                  transformStyle: 'preserve-3d'
                }}
                className="w-[85vw] md:w-[700px] aspect-video rounded-3xl overflow-hidden cursor-pointer shadow-2xl border border-white/10 bg-[#111]"
              >
                <img src={project.screenshotUrl} alt={project.title} className="w-full h-full object-cover" />

                {isCenter && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8"
                  >
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-300 line-clamp-2 max-w-lg mb-4 text-lg">{project.description}</p>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-white border-b border-white pb-0.5 hover:text-gray-200 transition-colors">
                        View Case Study <ArrowUpRight size={16} />
                      </span>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={prevProject}
          className="absolute left-4 md:left-[10%] z-40 p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black transition-all hover:scale-110 active:scale-95"
          aria-label="Previous project"
        >
          <ArrowLeft size={24} />
        </button>
        <button
          onClick={nextProject}
          className="absolute right-4 md:right-[10%] z-40 p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black transition-all hover:scale-110 active:scale-95"
          aria-label="Next project"
        >
          <ArrowRight size={24} />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-3 mt-12 z-20 relative">
        {projects.map((_, idx) => {
          const currentDataIndex = ((activeIndex % projects.length) + projects.length) % projects.length;
          return (
            <button
              key={idx}
              onClick={() => setActiveIndex(activeIndex + (idx - currentDataIndex))}
              className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentDataIndex ? "w-8 bg-white" : "w-1.5 bg-white/30 hover:bg-white/50"}`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;

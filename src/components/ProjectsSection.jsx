const ProjectsSection = ({ projects, onProjectClick }) => (
  <section id="projects" className="py-24 bg-[#0b1a20] text-white relative">
    <div className="max-w-6xl mx-auto px-6">
      {/* Gradient Heading */}
      <h2 className="text-4xl font-bold text-center mb-16 ">
        <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
          My Projects
        </span>
      </h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => onProjectClick(project)}
            className="relative backdrop-blur-lg bg-white/20 border border-white/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_20px_rgba(200,200,200,0.5)] cursor-pointer transition-all duration-300 group"
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={project.screenshotUrl}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-semibold border-2 border-cyan-400 rounded-full px-5 py-2">
                  View Details
                </span>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
              <p className="text-white-300 mb-4 text-sm line-clamp-2">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="bg-white text-black text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;

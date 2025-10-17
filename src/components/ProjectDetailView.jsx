import { useEffect } from "react";

const ProjectDetailView = ({ project, onBack }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") onBack();
    };
    window.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [onBack]);

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onBack}
    >
      <div
        className="bg-white/5 dark:bg-black/30 backdrop-blur-xl rounded-3xl shadow-2xl shadow-cyan-500/20 border border-white/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative ring-1 ring-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onBack}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300 z-10"
          aria-label="Close project details"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Content */}
        <div className="p-8 md:p-12">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {project.title}
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-200 mb-3">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-cyan-500/20 text-cyan-400 text-sm font-medium px-4 py-1.5 rounded-full backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-cyan-400 via-teal-400 to-white text-black font-bold py-3 px-6 rounded-2xl transition-transform duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/40"
              >
                View Live Project || Code
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>

            {/* Right */}
            <div className="lg:w-1/2 mt-6 lg:mt-0">
              <img
                src={project.screenshotUrl}
                alt={`${project.title} screenshot`}
                className="w-full h-auto rounded-2xl shadow-xl border border-white/20 backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailView;

import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import SpotlightCard from "./ui/SpotlightCard";

const AllProjectsView = ({ projects, onBack, onProjectClick }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-[#0a0a0a] overflow-y-auto"
        >
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex items-center gap-4 mb-12">
                    <button
                        onClick={onBack}
                        className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors border border-white/10 text-white"
                    >
                        <ArrowLeft size={24} />
                    </button>
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">All Projects</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <SpotlightCard key={project.id} className="group cursor-pointer bg-[#111] border-white/10">
                            <div onClick={() => onProjectClick(project)} className="h-full flex flex-col">
                                <div className="relative aspect-video overflow-hidden">
                                    <img
                                        src={project.screenshotUrl}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ArrowUpRight size={20} className="text-white" />
                                    </div>
                                </div>

                                <div className="p-6 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-xl font-medium text-white mb-2">{project.title}</h3>
                                        <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>
                                    </div>

                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {project.technologies.slice(0, 3).map(tech => (
                                            <span key={tech} className="text-xs font-medium text-gray-500 border border-gray-800 px-3 py-1 rounded-full">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </SpotlightCard>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default AllProjectsView;

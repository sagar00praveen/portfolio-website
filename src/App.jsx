import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import ProjectDetailView from './components/ProjectDetailView';
import AllProjectsView from './components/AllProjectsView';
import portfolioData from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  return (
    <div className="min-h-screen font-sans text-white">
      <Header />
      <main>
        <HeroSection />
        <ProjectsSection
          projects={portfolioData.projects}
          onProjectClick={setSelectedProject}
          onViewAll={() => setShowAllProjects(true)}
        />
        <SkillsSection skills={portfolioData.skills} />
      </main>
      <ContactSection socials={portfolioData.socials} />

      <AnimatePresence>
        {showAllProjects && (
          <AllProjectsView
            projects={portfolioData.projects}
            onBack={() => setShowAllProjects(false)}
            onProjectClick={setSelectedProject}
          />
        )}
        {selectedProject && (
          <ProjectDetailView
            project={selectedProject}
            onBack={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

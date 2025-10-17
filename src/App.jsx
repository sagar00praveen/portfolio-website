import { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import ProjectDetailView from './components/ProjectDetailView';
import portfolioData from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="bg-white dark:bg-black min-h-screen font-sans">
      <Header />
      <main>
        <HeroSection />
        <ProjectsSection projects={portfolioData.projects} onProjectClick={setSelectedProject} />
        <SkillsSection skills={portfolioData.skills} />
      </main>
      <ContactSection socials={portfolioData.socials} />
      {selectedProject && <ProjectDetailView project={selectedProject} onBack={() => setSelectedProject(null)} />}
    </div>
  );
}

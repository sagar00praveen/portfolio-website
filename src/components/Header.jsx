import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 dark:bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-xl font-semibold text-white tracking-widest uppercase">
          Sagar Praveen
        </h1>

        <nav className="space-x-8 hidden md:flex">
          <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
            About
          </a>
          <a href="#projects" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
            Projects
          </a>
          <a href="#skills" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
            Skills
          </a>
          <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

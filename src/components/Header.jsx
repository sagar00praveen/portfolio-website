import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-black/50 backdrop-blur-xl border-b border-white/5 py-4" : "py-6 bg-transparent"}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12">
        <h1 className="text-xl font-bold text-white tracking-tight">
          Sagar.
        </h1>

        <nav className="flex items-center">
          <a href="#contact" className="px-4 py-2 bg-white text-black text-sm font-semibold rounded-full hover:scale-105 transition-transform">
            Let's Talk
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

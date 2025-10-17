// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // 🔹 Detect scroll to apply background shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300 ${
        scrolled
          ? "bg-black/80 shadow-lg backdrop-blur-md border-b border-purple-800/40"
          : "bg-black/60 backdrop-blur-md"
      }`}
    >
      {/* 🔹 Gradient Logo Text */}
      <h1 className="text-2xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent tracking-wide">
        Dreamz Nexus’25
      </h1>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8 text-gray-300 text-lg">
        <a href="#about" className="hover:text-purple-400 transition">About</a>
        <a href="#events" className="hover:text-purple-400 transition">Events</a>
        <a href="#sponsors" className="hover:text-purple-400 transition">Sponsors</a>
        <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-white focus:outline-none"
        aria-label="Toggle Menu"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-3/4 h-full bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 text-white border-l border-purple-800 shadow-lg md:hidden"
          >
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="text-2xl hover:text-purple-400"
            >
              About
            </a>
            <a
              href="#events"
              onClick={() => setMenuOpen(false)}
              className="text-2xl hover:text-purple-400"
            >
              Events
            </a>
            <a
              href="#sponsors"
              onClick={() => setMenuOpen(false)}
              className="text-2xl hover:text-purple-400"
            >
              Sponsors
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="text-2xl hover:text-purple-400"
            >
              Contact
            </a>

            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white"
            >
              <X size={26} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

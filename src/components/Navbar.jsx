// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Detect scroll for shadow effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
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
      {/* Logo */}
      <h1 className="text-2xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent tracking-wide">
        Dreamz Nexus’25
      </h1>

      {/* Desktop Links + Brochure */}
      <div className="hidden md:flex items-center space-x-6 text-gray-300 text-lg">
        <a href="#about" className="hover:text-purple-400 transition">About</a>
        <a href="#events" className="hover:text-purple-400 transition">Events</a>
        <a href="#sponsors" classClass="hover:text-purple-400 transition">Sponsors</a>
        <a href="#contact" className="hover:text-purple-400 transition">Contact</a>

        <a
          href="/DreamzNexus25_Brochure.pdf"
          download
          className="ml-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg flex items-center gap-2 hover:shadow-[0_0_12px_rgba(168,85,247,0.7)] transition-all"
        >
          <Download size={18} />
          <span className="text-sm font-semibold">Brochure</span>
        </a>
      </div>

      {/* Mobile Hamburger Toggle */}
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
            className="fixed top-0 right-0 w-3/4 h-full bg-black/95 backdrop-blur-xl flex flex-col items-start justify-start pt-16 space-y-6 px-6 text-white border-l border-purple-800 shadow-lg md:hidden"
          >
            {/* Close button only inside drawer */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
              aria-label="Close Menu"
            >
              <X size={26} />
            </button>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="w-full text-2xl hover:text-purple-400"
            >
              About
            </a>
            <a
              href="#events"
              onClick={() => setMenuOpen(false)}
              className="w-full text-2xl hover:text-purple-400"
            >
              Events
            </a>
            <a
              href="#sponsors"
              onClick={() => setMenuOpen(false)}
              className="w-full text-2xl hover:text-purple-400"
            >
              Sponsors
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="w-full text-2xl hover:text-purple-400"
            >
              Contact
            </a>

            <a
              href="/DreamzNexus25_Brochure.pdf"
              download
              onClick={() => setMenuOpen(false)}
              className="mt-4 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center gap-2 hover:shadow-[0_0_15px_rgba(168,85,247,0.6)] transition-all"
            >
              <Download size={22} />
              <span className="font-semibold">Download Brochure</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

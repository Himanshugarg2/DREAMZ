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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav
      className={`fixed w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300 ${
        scrolled
          ? "bg-black/80 shadow-lg backdrop-blur-md border-b border-purple-800/40"
          : "bg-black/60 backdrop-blur-md"
      }`}
    >
      {/* Logo */}
      <a href="#home" className="flex items-center gap-3">
        <img
          src="/logo_Image.png"
          alt="Dreamz Nexus ’25 logo"
          className="h-9 w-9 rounded-md object-contain shadow-[0_0_12px_rgba(168,85,247,0.45)]"
          loading="eager"
        />
        <h1 className="text-2xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent tracking-wide">
          Dreamz Nexus’25
        </h1>
      </a>

      {/* Desktop Links + Brochure */}
      <div className="hidden md:flex items-center space-x-6 text-gray-300 text-lg">
        <a href="#about" className="hover:text-purple-400 transition">About</a>
        <a href="#events" className="hover:text-purple-400 transition">Events</a>
        <a href="#sponsors" className="hover:text-purple-400 transition">Sponsors</a>
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
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden z-[90]"
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="fixed top-0 right-0 w-full h-screen bg-gradient-to-b from-black/95 via-black/90 to-black/95 backdrop-blur-xl md:hidden z-[100] border-l border-purple-800/40 shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <img src="/logo_Image.png" alt="Dreamz Nexus ’25" className="h-7 w-7 rounded" />
                  <h2 className="text-xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent tracking-wide">
                    Dreamz Nexus’25
                  </h2>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-400 hover:text-white"
                  aria-label="Close Menu"
                >
                  <X size={26} />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col items-start gap-4 px-6 py-6 overflow-y-auto h-[calc(100vh-56px)]">
                <a href="#about" onClick={() => setMenuOpen(false)} className="text-xl text-white hover:text-purple-400 transition">About</a>
                <a href="#events" onClick={() => setMenuOpen(false)} className="text-xl text-white hover:text-purple-400 transition">Events</a>
                <a href="#sponsors" onClick={() => setMenuOpen(false)} className="text-xl text-white hover:text-purple-400 transition">Sponsors</a>
                <a href="#contact" onClick={() => setMenuOpen(false)} className="text-xl text-white hover:text-purple-400 transition">Contact</a>

                <a
                  href="/DreamzNexus25_Brochure.pdf"
                  download
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-[0_0_18px_rgba(168,85,247,0.7)] transition"
                >
                  <Download size={20} />
                  <span className="font-semibold">Brochure</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

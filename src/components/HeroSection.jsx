import { useState } from "react";
import { motion } from "framer-motion";
import RegisterModal from "./RegisterModal";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="home"
      className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-purple-950 to-black text-white text-center px-4 pt-24"
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-extrabold mb-4"
      >
        Get <span className="text-purple-400">READY</span> for <br /> DREAMZ:{" "}
        <span className="neon-text">Nexus ’25!</span>
      </motion.h1>

      <p className="text-gray-300 text-lg max-w-2xl mb-6">
        A Celebration of Talent, Teamwork, and Discovery — Where Creativity Meets Science.
      </p>

      <div className="flex gap-4 text-xl mb-6">
        {["55 Days", "07 Hours", "56 Minutes"].map((item, i) => (
          <div
            key={i}
            className="bg-white/10 px-6 py-3 rounded-xl backdrop-blur-md border border-white/20"
          >
            {item}
          </div>
        ))}
      </div>

      <button
        onClick={() => setIsModalOpen(true)}
        className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold hover:scale-105 transition-transform"
      >
        Register Now
      </button>

      {/* Popup Modal */}
      <RegisterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}

// src/components/DownloadBrochureSection.jsx
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function DownloadBrochureSection() {
  return (
    <section
      id="brochure"
      className="py-24 bg-gradient-to-b from-black via-purple-950 to-black text-center text-white"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
      >
        Download Our Brochure
      </motion.h2>

      <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
        Get detailed insights about events, schedules, and competitions at{" "}
        <span className="text-purple-400 font-semibold">Dreamz Nexus’25</span>.
      </p>

      {/* Download Button */}
      <motion.a
        href="/DreamzNexus25_Brochure.pdf"
        download
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold text-lg hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-shadow"
      >
        <Download size={24} />
        Download PDF
      </motion.a>

      {/* Optional tagline */}
      <p className="mt-8 text-gray-500 text-sm">
        File size ≈ 2 MB • Format : PDF • Updated for 2025 Edition
      </p>
    </section>
  );
}

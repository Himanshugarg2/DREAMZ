// src/components/SponsorsSection.jsx
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

export default function SponsorsSection() {
  // Sponsor logos (add your actual logo image paths in /public/logos/)
  const sponsors = [
    "/logos/tanishq.png",
    "/logos/redbull.png",
    "/logos/dominos.png",
    "/logos/max.png",
    "/logos/mioamore.png",
    "/logos/synergy.png",
    "/logos/near.png",
    "/logos/icpa.png",
  ];

  return (
    <section
      id="sponsors"
      className="py-24 bg-gradient-to-t from-black to-purple-950 text-white text-center overflow-hidden"
    >
      {/* Section Title */}
      <h2 className="text-5xl font-extrabold mb-12 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
        Our Sponsors
      </h2>

      {/* Scrolling Marquee Animation */}
      <Marquee gradient={false} speed={60} pauseOnHover={true}>
        {sponsors.map((logo, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="mx-12 p-6 bg-white/10 border border-white/20 rounded-2xl backdrop-blur-lg shadow-lg hover:shadow-purple-500/30 transition-all"
          >
            <img
              src={logo}
              alt="Sponsor logo"
              className="h-16 grayscale hover:grayscale-0 transition-all duration-500 mx-auto"
            />
          </motion.div>
        ))}
      </Marquee>

      {/* Optional tag line */}
      <p className="mt-10 text-gray-400 text-lg">
        We thank our amazing partners for powering Dreamz Synapsis ’25 ✨
      </p>
    </section>
  );
}

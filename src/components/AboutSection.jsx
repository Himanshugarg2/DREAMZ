import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-black text-gray-200">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-8 text-white"
        >
          About <span className="text-purple-400">Dreamz Nexus ’25</span>
        </motion.h2>

        <p className="text-lg leading-relaxed text-gray-400">
          Dreamz Nexus is more than an event — it’s a celebration of innovation, creativity, and unity
          in the dental community. Through science, culture, and collaboration, it inspires the next
          generation of thinkers and creators.
        </p>

        <motion.img
          src="/campus.jpg"
          alt="Campus lights"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-10 mx-auto rounded-2xl shadow-lg w-[80%] hover:scale-105 transition-transform"
        />
      </div>
    </section>
  );
}

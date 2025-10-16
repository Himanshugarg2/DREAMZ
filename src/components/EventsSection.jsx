import { motion } from "framer-motion";

export default function EventsSection() {
  const events = [
    {
      title: "Scientific Day",
      desc: "Paper presentations, debates, quizzes, and podcasts to ignite curiosity and innovation.",
      date: "Feb 26, 2025",
    },
    {
      title: "Cultural Day 1",
      desc: "Gaming, fitness, art, food competitions, and an unforgettable DJ night.",
      date: "Feb 27, 2025",
    },
    {
      title: "Cultural Day 2",
      desc: "Drama, dance, and musical performances that bring creativity to life.",
      date: "Feb 28, 2025",
    },
  ];

  return (
    <section id="events" className="py-20 bg-gradient-to-t from-black to-purple-950 text-white">
      <h2 className="text-4xl font-extrabold text-center mb-12">The Series of Events</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {events.map((event, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-md"
          >
            <h3 className="text-2xl font-bold mb-2 text-purple-400">{event.title}</h3>
            <p className="text-gray-300 mb-3">{event.desc}</p>
            <p className="text-sm text-gray-400">{event.date}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

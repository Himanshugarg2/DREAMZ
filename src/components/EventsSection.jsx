import { motion } from "framer-motion";

export default function EventsSection() {
  const events = [
    {
      title: "Scientific Day",
      desc: "Paper presentations, debates, quizzes, and podcasts to ignite curiosity and innovation.",
      date: "Feb 26, 2025",
      color: "from-purple-600/40 to-purple-900/30",
    },
    {
      title: "Cultural Day 1",
      desc: "Gaming, fitness, art, food competitions, and an unforgettable DJ night.",
      date: "Feb 27, 2025",
      color: "from-pink-600/40 to-pink-900/30",
    },
    {
      title: "Cultural Day 2",
      desc: "Drama, dance, and musical performances that bring creativity to life.",
      date: "Feb 28, 2025",
      color: "from-indigo-600/40 to-indigo-900/30",
    },
  ];

  return (
    <section
      id="events"
      className="py-16 bg-gradient-to-b from-black via-purple-950 to-black text-white relative overflow-hidden"
    >
      {/* Title */}
      <h2 className="text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
        The Series of Events
      </h2>

      {/* Timeline line (moved slightly lower, centered properly) */}
      <div className="absolute left-1/2 top-28 bottom-12 w-[2px] bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block"></div>

      {/* Timeline Events */}
      <div className="flex flex-col space-y-14 relative max-w-6xl mx-auto px-6">
        {events.map((event, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`relative md:w-[47%] p-6 rounded-2xl bg-gradient-to-br ${event.color} border border-white/20 shadow-lg backdrop-blur-md ${
              i % 2 === 0 ? "self-start md:mr-auto" : "self-end md:ml-auto"
            }`}
          >
            {/* Connector dot */}
            <span
              className={`hidden md:block absolute top-8 w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-4 border-black shadow-[0_0_10px_rgba(168,85,247,0.7)] ${
                i % 2 === 0 ? "-right-[39px]" : "-left-[39px]"
              }`}
            ></span>

            {/* Event Content */}
            <h3 className="text-2xl font-bold mb-2 text-white">{event.title}</h3>
            <p className="text-gray-300 mb-3 leading-relaxed">{event.desc}</p>
            <p className="text-sm text-gray-400 italic">{event.date}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Calendar, Sparkles, Music, Microscope, Palette } from "lucide-react";

export default function EventsSection() {
  const events = [
    {
      title: "Scientific Day",
      desc: "Paper presentations, debates, quizzes, and podcasts to ignite curiosity and innovation.",
      date: "Feb 26, 2025",
      color: "from-purple-600/50 to-purple-900/40",
      borderColor: "border-purple-500/30",
      glowColor: "hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]",
      icon: Microscope,
      highlights: ["Paper Presentations", "Debates", "Quizzes", "Podcasts"],
    },
    {
      title: "Cultural Day 1",
      desc: "Gaming, fitness, art, food competitions, and an unforgettable DJ night.",
      date: "Feb 27, 2025",
      color: "from-pink-600/50 to-pink-900/40",
      borderColor: "border-pink-500/30",
      glowColor: "hover:shadow-[0_0_30px_rgba(236,72,153,0.5)]",
      icon: Music,
      highlights: ["Gaming", "Fitness", "Art", "DJ Night"],
    },
    {
      title: "Cultural Day 2",
      desc: "Drama, dance, and musical performances that bring creativity to life.",
      date: "Feb 28, 2025",
      color: "from-indigo-600/50 to-indigo-900/40",
      borderColor: "border-indigo-500/30",
      glowColor: "hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]",
      icon: Palette,
      highlights: ["Drama", "Dance", "Music", "Performances"],
    },
  ];

  return (
    <section
      id="events"
      className="py-20 bg-gradient-to-b from-black via-purple-950/50 to-black text-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Title with icon */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <Sparkles className="text-purple-400" size={32} />
          <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent">
            The Series of Events
          </h2>
          <Sparkles className="text-pink-400" size={32} />
        </div>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto px-4">
          Three days of innovation, creativity, and celebration
        </p>
      </motion.div>

      {/* Timeline line */}
      <div className="absolute left-1/2 top-52 bottom-12 w-[3px] bg-gradient-to-b from-purple-500 via-pink-500 to-indigo-500 hidden md:block shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>

      {/* Timeline Events */}
      <div className="flex flex-col space-y-16 relative max-w-6xl mx-auto px-6">
        {events.map((event, i) => {
          const Icon = event.icon;
          const isLeft = i % 2 === 0;
          
          return (
            <motion.div
              key={i}
              initial={{ 
                opacity: 0, 
                y: 50,
                scale: 0.9,
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                scale: 1,
              }}
              transition={{ 
                duration: 0.6,
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ 
                scale: 1.02, 
                y: -5,
              }}
              className={`relative w-full md:w-[48%] group ${
                isLeft ? "md:self-start md:mr-auto" : "md:self-end md:ml-auto"
              }`}
            >
              {/* Connector dot with pulse animation */}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className={`hidden md:block absolute top-10 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-4 border-black shadow-[0_0_20px_rgba(168,85,247,0.8)] ${
                  i % 2 === 0 ? "-right-[41px]" : "-left-[41px]"
                }`}
              ></motion.span>

              {/* Event Card */}
              <div
                className={`p-8 rounded-3xl bg-gradient-to-br ${event.color} border-2 ${event.borderColor} ${event.glowColor} backdrop-blur-xl transition-all duration-300 relative overflow-hidden`}
              >
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon and Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                      <Icon size={28} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 group-hover:bg-clip-text transition-all duration-300">
                        {event.title}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-300">
                        <Calendar size={16} />
                        <p className="text-sm font-medium">{event.date}</p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-200 mb-5 leading-relaxed text-base">
                    {event.desc}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {event.highlights.map((highlight, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * idx }}
                        className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-xs font-semibold text-white border border-white/20 hover:bg-white/20 transition-all duration-300"
                      >
                        {highlight}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Decorative corner element */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

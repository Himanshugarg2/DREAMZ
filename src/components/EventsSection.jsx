import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, MapPin, Sparkles, Microscope, Music, Trophy } from "lucide-react";

export default function EventsSection() {
  const [activeTab, setActiveTab] = useState("scientific");

  // -------------------------
  // REAL EVENT DATA
  // -------------------------
  const eventsData = {
    scientific: [
      {
        title: "Clinical Paper Presentation",
        desc: "Discuss real cases and evidence-based insights bridging theory with clinical practice.",
        venue: "Smart Classroom II",
        time: "10 AM – 3 PM",
      },
      {
        title: "Pre-Clinical Paper Presentation",
        desc: "Explore foundational concepts and research that bridge to future clinical practice.",
        venue: "Smart Classroom I",
        time: "10 AM – 3 PM",
      },
      {
        title: "Badminton",
        desc: "A thrilling badminton tournament showcasing skill, speed, and sportsmanship.",
        venue: "Boys Hostel",
        time: "9:30 AM – 11:00 AM",
      },
      {
        title: "Open Mic",
        desc: "A stage to unleash your voice, thoughts, and creativity; where every word finds its audience.",
        venue: "Auditorium",
        time: "10 AM – 12 PM",
      },
      {
        title: "Ping Pong Showdown",
        desc: "A fun target game where players aim to toss a plastic ball into a bucket.",
        venue: "Games Room",
        time: "12:30 PM – 1:30 PM",
      },
      {
        title: "Quiz",
        desc: "A quiz where sharp minds meet, clash, and conquer through knowledge.",
        venue: "R. Ahmed Examination Hall",
        time: "12:30 PM – 3:30 PM",
      },
      {
        title: "College Band",
        desc: "A mesmerizing and energetic performance setting the bar high for upcoming events.",
        venue: "Auditorium",
        time: "4:30 PM – 6:30 PM",
      },
    ],

    cultural: [
      {
        title: "Photography",
        desc: "Capture the world through your lens and let the story unfold.",
        venue: "Flip Classroom",
        time: "9:30 AM – 10:30 AM",
      },
      {
        title: "Fitness Competition",
        desc: "An energetic fitness competition testing strength, endurance, and determination.",
        venue: "Games Room",
        time: "8:30 AM – 9:30 AM",
      },
      {
        title: "Pictionary",
        desc: "Where imagination speaks louder than words and art becomes the language of fun.",
        venue: "Anatomy Room",
        time: "9 AM – 10 AM",
      },
      {
        title: "Drawing Contest",
        desc: "A celebration of colors and creativity, where every stroke tells a story.",
        venue: "R. Ahmed Examination Hall",
        time: "10:30 AM – 12:30 PM",
      },
      {
        title: "Inauguration Ceremony",
        desc: "To celebrate new beginnings, shared visions, and the journey ahead.",
        venue: "Auditorium",
        time: "11 AM – 1 PM",
      },
      {
        title: "Faculty Performance",
        desc: "Celebrate the talented creativity of our esteemed faculty.",
        venue: "Auditorium",
        time: "1 PM – 2 PM",
      },
      {
        title: "E-Games",
        desc: "Exciting gaming competitions filled with strategy, skill, and virtual battles.",
        venue: "Flip Classroom",
        time: "2 PM – 3:30 PM",
      },
      {
        title: "Freshers’ Performance",
        desc: "An energetic performance welcoming new talents to the stage.",
        venue: "Main Stage",
        time: "2:45 PM onwards",
      },
      {
        title: "DJ Night",
        desc: "Groove and let loose for a night of music, lights, and non-stop fun!",
        venue: "Main Stage",
        time: "6:30 PM – 8:30 PM",
      },
    ],

    final: [
      {
        title: "Debate",
        desc: "Where voices collide, ideas ignite, and logic takes the crown.",
        venue: "R. Ahmed Examination Hall",
        time: "9 AM onwards",
      },
      {
        title: "Chess",
        desc: "Where strategy meets intellect and every move defines a mind.",
        venue: "Flip Classroom",
        time: "9:30 AM onwards",
      },
      {
        title: "Instrumental",
        desc: "Let the music speak its voice and fill the air with melody.",
        venue: "Auditorium",
        time: "9 AM – 10 AM",
      },
      {
        title: "Solo Singing",
        desc: "Where one voice expresses endless emotion through song.",
        venue: "Main Stage",
        time: "10 AM – 11:30 AM",
      },
      {
        title: "Solo Eastern Dance",
        desc: "Grace, rhythm, and tradition narrate your story through dance.",
        venue: "Auditorium",
        time: "9 AM – 10 AM",
      },
      {
        title: "Interns’ Drama",
        desc: "Interns turn chaos into comedy and pressure into performance.",
        venue: "Auditorium",
        time: "12:15 PM – 1 PM",
      },
      {
        title: "Group Dance",
        desc: "Energy, moves, and teamwork rise to the top in this group performance.",
        venue: "Auditorium",
        time: "11 AM – 12 PM",
      },
      {
        title: "Fashion Show",
        desc: "Display your vision through style, elegance, and confidence.",
        venue: "Main Stage",
        time: "3:30 PM – 5 PM",
      },
      {
        title: "Artist Performance",
        desc: "Where imagination comes alive through voice and art.",
        venue: "Main Stage",
        time: "6:30 PM – 8 PM",
      },
    ],
  };

  // -------------------------
  // COMPONENT STRUCTURE
  // -------------------------
  const tabs = [
    { key: "scientific", label: "Scientific Day", icon: Microscope },
    { key: "cultural", label: "Cultural Day", icon: Music },
    { key: "final", label: "Final Day", icon: Trophy },
  ];

  // Map tab to date label
  const dayDates = {
    scientific: "Dec 16, 2025",
    cultural: "Dec 17, 2025",
    final: "Dec 18, 2025",
  };

  // Determine if today is live (Dec 16/17/18)
  const [liveTab, setLiveTab] = useState(null);
  const isLive = Boolean(liveTab);
  const cardsRef = useRef(null);

  useEffect(() => {
    const now = new Date();
    if (now.getMonth() === 11) { // December (0-indexed)
      const d = now.getDate();
      if (d === 16) setLiveTab("scientific");
      else if (d === 17) setLiveTab("cultural");
      else if (d === 18) setLiveTab("final");
    }
  }, []);

  

  return (
    <section
      id="events"
      className="py-20 bg-gradient-to-b from-black via-purple-950/50 to-black text-white relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, 90, 0], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 30, repeat: Infinity }}
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl"
        />
      </div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
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
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Dive into three unforgettable days of science, creativity, and celebration.
        </p>
      </motion.div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {tabs.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-5 py-2.5 rounded-full flex items-center gap-2 text-sm md:text-base font-semibold transition-all duration-300 ${
              activeTab === key
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                : "bg-white/10 text-gray-300 hover:bg-white/20"
            }`}
          >
            <Icon size={18} />
            {key === liveTab && (
              <span className="relative flex h-2.5 w-2.5 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-pink-500"></span>
              </span>
            )}
            {label}
          </button>
        ))}
      </div>

      {/* Live banner */}
      {isLive && (
        <div className="flex justify-center mb-8 px-4">
          <div className="bg-gradient-to-r from-purple-600/25 to-pink-600/25 border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-3 backdrop-blur-md">
            <span className="inline-flex items-center gap-2 text-white">
              <span className="relative flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-70"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-pink-500"></span>
              </span>
              Event is live — {dayDates[liveTab]}
            </span>
            <button
              onClick={() => {
                if (liveTab) setActiveTab(liveTab);
                const el = cardsRef.current;
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="ml-2 px-3 py-1.5 text-sm rounded-lg bg-white/10 hover:bg-white/20 border border-white/10"
            >
              See today's activities
            </button>
          </div>
        </div>
      )}

      {/* Timeline Line */}
      <div className="absolute left-1/2 top-80 bottom-12 w-[3px] bg-gradient-to-b from-purple-500 via-pink-500 to-indigo-500 hidden md:block shadow-[0_0_20px_rgba(168,85,247,0.6)]"></div>

  {/* Event Cards */}
  <div ref={cardsRef} className="relative max-w-6xl mx-auto px-6">
        <AnimatePresence mode="wait">
          {eventsData[activeTab] && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col space-y-16 relative"
            >
              {eventsData[activeTab].map((event, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    viewport={{ once: true }}
                    className={`relative w-full md:w-[47%] ${
                      isLeft ? "md:self-start md:mr-auto" : "md:self-end md:ml-auto"
                    }`}
                  >
                    {/* Connector dot */}
                    <motion.span
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`hidden md:block absolute top-10 w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-4 border-black shadow-[0_0_20px_rgba(168,85,247,0.8)] ${
                        isLeft ? "-right-[40px]" : "-left-[40px]"
                      }`}
                    ></motion.span>

                    {/* Event Card */}
                    <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-800/30 to-pink-900/20 border border-white/10 backdrop-blur-lg hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition-all duration-300">
                      <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">{event.desc}</p>

                      <div className="flex items-center gap-3 text-gray-400 text-sm mb-1">
                        <MapPin size={16} className="text-pink-400" />
                        <span>{event.venue}</span>
                      </div>

                      {/* Event Date */}
                      <div className="flex items-center gap-3 text-gray-400 text-sm mb-1">
                        <Calendar size={16} className="text-purple-400" />
                        <span>{dayDates[activeTab]}</span>
                      </div>

                      {/* Event Time */}
                      <div className="flex items-center gap-3 text-gray-400 text-sm">
                        <Clock size={16} className="text-indigo-400" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

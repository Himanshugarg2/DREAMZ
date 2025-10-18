import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import RegisterModal from "./RegisterModal";

export default function HeroSection() {
  const targetDate = new Date(2025, 11, 16, 0, 0, 0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate));
  const [initialDays, setInitialDays] = useState(1);
  const [liveDay, setLiveDay] = useState(null);

  // Detect live event day
  useEffect(() => {
    const now = new Date();
    if (now.getMonth() === 11) {
      const d = now.getDate();
      if (d === 16)
        setLiveDay({
          key: "scientific",
          label: "Day 1 — Scientific Events LIVE!",
          from: "from-purple-600/25",
          to: "to-violet-800/25",
          dot: "bg-purple-500",
        });
      else if (d === 17)
        setLiveDay({
          key: "cultural",
          label: "Day 2 — Cultural Events LIVE!",
          from: "from-pink-600/25",
          to: "to-fuchsia-700/25",
          dot: "bg-pink-500",
        });
      else if (d === 18)
        setLiveDay({
          key: "final",
          label: "Day 3 — Finale LIVE!",
          from: "from-indigo-600/25",
          to: "to-blue-700/25",
          dot: "bg-indigo-500",
        });
    }
  }, []);

  // Countdown
  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft(targetDate)), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const initialMs = targetDate - Date.now();
    const d = initialMs / (1000 * 60 * 60 * 24);
    setInitialDays(d > 0 ? d : 1);
  }, []);

  function calculateTimeLeft(target) {
    const now = new Date();
    const diff = target - now;
    if (diff <= 0)
      return { days: 0, hours: 0, minutes: 0, seconds: 0, finished: true };
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds, finished: false };
  }

  const handleSeeEvents = () => {
    if (liveDay?.key) {
      window.dispatchEvent(new CustomEvent("setActiveEventTab", { detail: liveDay.key }));
    }
    const section = document.getElementById("events");
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-center text-white text-center px-4 pt-24 overflow-hidden"
    >
      {/* 🔮 Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{
          backgroundImage: "url('/logo_Image.png')", // ✅ ensure path correct
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(2px) brightness(0.6)",
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-purple-950/60 to-black/90"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Title */}
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

        {/* Countdown or Live Banner */}
        <div
          className="w-full max-w-3xl grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          aria-live="polite"
        >
          {timeLeft.finished || liveDay ? (
            <div
              className={`col-span-2 md:col-span-4 bg-gradient-to-r ${
                liveDay?.from || "from-purple-600/25"
              } ${liveDay?.to || "to-pink-600/25"} border border-white/10 rounded-2xl px-6 py-4 flex flex-col md:flex-row items-center justify-center gap-4 backdrop-blur-md transition-all`}
            >
              <span className="inline-flex items-center gap-3 text-lg font-semibold text-white">
                <span className="relative flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                  <span
                    className={`relative inline-flex rounded-full h-3.5 w-3.5 ${
                      liveDay?.dot || "bg-pink-500"
                    }`}
                  ></span>
                </span>
                {liveDay ? liveDay.label : "🎉 The celebration begins today!"}
              </span>

              {liveDay && (
                <button
                  onClick={handleSeeEvents}
                  className="px-4 py-2 text-sm rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 transition-all"
                >
                  See Today’s Events
                </button>
              )}
            </div>
          ) : (
            <>
              <CountdownRing label="Days" value={timeLeft.days} max={Math.max(1, Math.ceil(initialDays))} colorFrom="#a78bfa" colorTo="#ec4899" pad={false} />
              <CountdownRing label="Hours" value={timeLeft.hours} max={24} colorFrom="#ec4899" colorTo="#d946ef" pad />
              <CountdownRing label="Minutes" value={timeLeft.minutes} max={60} colorFrom="#d946ef" colorTo="#8b5cf6" pad />
              <CountdownRing label="Seconds" value={timeLeft.seconds} max={60} colorFrom="#8b5cf6" colorTo="#6366f1" pad pulse />
            </>
          )}
        </div>

        {/* Register Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold hover:scale-105 transition-transform"
        >
          Register Now
        </button>
      </div>

      <RegisterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}

// Countdown Ring (unchanged)
function CountdownRing({ label, value, max, colorFrom, colorTo, pad = true, pulse = false }) {
  const size = 110;
  const stroke = 10;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const progress = Math.max(0, Math.min(value / max, 1));
  const offset = c * (1 - progress);
  const display = pad ? String(value).padStart(2, "0") : String(value);
  const ringId = `${label}-grad`;

  return (
    <div className="rounded-2xl p-3 flex flex-col items-center justify-center relative overflow-visible">
      <div
        className="absolute inset-0 opacity-30 blur-2xl pointer-events-none"
        style={{
          background: `radial-gradient(50% 50% at 50% 50%, ${colorFrom}22 0%, transparent 70%)`,
        }}
      />
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90 absolute inset-0">
          <defs>
            <linearGradient id={ringId} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={colorFrom} />
              <stop offset="100%" stopColor={colorTo} />
            </linearGradient>
          </defs>
          <circle cx={size / 2} cy={size / 2} r={r} stroke="rgba(255,255,255,0.12)" strokeWidth={stroke} fill="none" />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            stroke={`url(#${ringId})`}
            strokeWidth={stroke}
            strokeLinecap="round"
            fill="none"
            strokeDasharray={c}
            animate={{ strokeDashoffset: offset }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.6 }}
            style={{ filter: `drop-shadow(0 0 8px ${colorFrom}66)` }}
          />
        </svg>
        <motion.div
          key={`${label}-${value}`}
          initial={{ opacity: 0, y: 6, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.25 }}
          className="absolute inset-0 flex items-center justify-center text-2xl font-extrabold tracking-wide"
        >
          {display}
        </motion.div>
      </div>
      <div className="mt-2 text-sm text-gray-300">{label}</div>
      {pulse && (
        <motion.div
          key={`pulse-${value}`}
          initial={{ opacity: 0.35, scale: 0.9 }}
          animate={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="absolute w-[85px] h-[85px] rounded-full border-2"
          style={{ borderColor: `${colorTo}44` }}
        />
      )}
    </div>
  );
}


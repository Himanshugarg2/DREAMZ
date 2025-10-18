import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import RegisterModal from "./RegisterModal";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Countdown to Dec 16, 2025 (local time)
  const targetDate = new Date(2025, 11, 16, 0, 0, 0);
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate));
  const [initialDays, setInitialDays] = useState(1);

  function calculateTimeLeft(target) {
    const now = new Date();
    const diff = target.getTime() - now.getTime();
    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, finished: true };
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds, finished: false };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Capture initial total days at mount to drive the Days ring max value
  useEffect(() => {
    const initialMs = targetDate.getTime() - Date.now();
    const d = initialMs / (1000 * 60 * 60 * 24);
    setInitialDays(d > 0 ? d : 1);
  }, []);

  const pad = (n) => String(n).padStart(2, "0");

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

      {/* Creative Live Countdown (Rings) */}
      <div className="w-full max-w-3xl grid grid-cols-2 md:grid-cols-4 gap-4 mb-8" aria-live="polite">
        {timeLeft.finished ? (
          <div className="col-span-2 md:col-span-4 bg-white/10 px-6 py-4 rounded-2xl backdrop-blur-md border border-white/20 text-purple-300 font-semibold text-center">
            The celebration begins today!
          </div>
        ) : (
          <>
            <CountdownRing
              label="Days"
              value={timeLeft.days}
              max={Math.max(1, Math.ceil(initialDays))}
              colorFrom="#a78bfa" /* purple-400 */
              colorTo="#ec4899"   /* pink-500 */
              pad={false}
            />
            <CountdownRing
              label="Hours"
              value={timeLeft.hours}
              max={24}
              colorFrom="#ec4899" /* pink-500 */
              colorTo="#d946ef"   /* fuchsia-500 */
              pad
            />
            <CountdownRing
              label="Minutes"
              value={timeLeft.minutes}
              max={60}
              colorFrom="#d946ef" /* fuchsia-500 */
              colorTo="#8b5cf6"   /* violet-500 */
              pad
            />
            <CountdownRing
              label="Seconds"
              value={timeLeft.seconds}
              max={60}
              colorFrom="#8b5cf6" /* violet-500 */
              colorTo="#6366f1"   /* indigo-500 */
              pad
              pulse
            />
          </>
        )}
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

// Inline subcomponent: animated circular ring with gradient stroke
function CountdownRing({ label, value, max, colorFrom, colorTo, pad = true, pulse = false }) {
  const size = 110;
  const stroke = 10;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const clamped = Math.max(0, Math.min(value, max));
  const progress = max > 0 ? clamped / max : 0; // remaining fraction
  const offset = c * (1 - progress);
  const display = pad ? String(value).padStart(2, "0") : String(value);

  const ringId = `${label}-grad`;

  return (
    <div className="rounded-2xl p-3 flex flex-col items-center justify-center relative overflow-visible">
      {/* subtle glow */}
      <div
        className="absolute inset-0 opacity-30 blur-2xl pointer-events-none"
        style={{ background: `radial-gradient(50% 50% at 50% 50%, ${colorFrom}22 0%, transparent 70%)` }}
      />

      {/* ring and centered value wrapper */}
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90 absolute inset-0">
          <defs>
            <linearGradient id={ringId} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={colorFrom} />
              <stop offset="100%" stopColor={colorTo} />
            </linearGradient>
          </defs>
          {/* track */}
          <circle cx={size/2} cy={size/2} r={r} stroke="rgba(255,255,255,0.12)" strokeWidth={stroke} fill="none" />
          {/* progress */}
          <motion.circle
            cx={size/2}
            cy={size/2}
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

        {/* numeric value centered */}
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

      {/* label */}
      <div className="mt-2 text-sm text-gray-300">{label}</div>

      {/* subtle pulsing ring for seconds */}
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

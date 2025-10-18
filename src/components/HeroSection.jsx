import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import RegisterModal from "./RegisterModal";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Countdown to Dec 16, 2025 (local time)
  const targetDate = new Date(2025, 11, 16, 0, 0, 0);
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate));

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

      {/* Live countdown */}
      <div className="flex gap-4 text-xl mb-6" aria-live="polite">
        {timeLeft.finished ? (
          <div className="bg-white/10 px-6 py-3 rounded-xl backdrop-blur-md border border-white/20 text-purple-300 font-semibold">
            The celebration begins today!
          </div>
        ) : (
          <>
            <div className="bg-white/10 px-6 py-3 rounded-xl backdrop-blur-md border border-white/20">
              <span className="font-bold">{pad(timeLeft.days)}</span> Days
            </div>
            <div className="bg-white/10 px-6 py-3 rounded-xl backdrop-blur-md border border-white/20">
              <span className="font-bold">{pad(timeLeft.hours)}</span> Hours
            </div>
            <div className="bg-white/10 px-6 py-3 rounded-xl backdrop-blur-md border border-white/20">
              <span className="font-bold">{pad(timeLeft.minutes)}</span> Minutes
            </div>
            <div className="bg-white/10 px-6 py-3 rounded-xl backdrop-blur-md border border-white/20">
              <span className="font-bold">{pad(timeLeft.seconds)}</span> Seconds
            </div>
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

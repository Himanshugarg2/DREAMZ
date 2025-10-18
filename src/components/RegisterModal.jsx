import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RegisterModal({ isOpen, onClose }) {
  const eventsData = {
    scientific: [
      "Clinical Paper Presentation",
      "Pre-Clinical Paper Presentation",
      "Badminton",
      "Open Mic",
      "Ping Pong Showdown",
      "Quiz",
      "College Band",
    ],
    cultural: [
      "Photography",
      "Fitness Competition",
      "Pictionary",
      "Drawing Contest",
      "Inauguration Ceremony",
      "Faculty Performance",
      "E-Games",
      "Freshers’ Performance",
      "DJ Night",
    ],
    final: [
      "Debate",
      "Chess",
      "Instrumental",
      "Solo Singing",
      "Solo Eastern Dance",
      "Interns’ Drama",
      "Group Dance",
      "Fashion Show",
      "Artist Performance",
    ],
  };

  const [selectedDay, setSelectedDay] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("");

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Responsive scrollable modal */}
          <motion.div
            className="bg-white/10 border border-white/20 text-white rounded-2xl shadow-2xl 
                       w-full max-w-[900px] max-h-[90vh] overflow-y-auto overflow-x-hidden 
                       relative p-6 sm:p-8 scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-transparent overscroll-contain"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-4 text-gray-300 hover:text-white text-xl"
            >
              ✕
            </button>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-purple-400">
              Register for Dreamz Nexus ‘25
            </h2>
            <p className="text-sm text-center text-gray-300 mb-6">
              <strong className="text-pink-400">Only Team Leader</strong> needs to register.
            </p>

            {/* FORM */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(`✅ Registered for ${selectedEvent || "an event"} on ${selectedDay || "some day"}!`);
                onClose();
              }}
              className="space-y-6"
            >
              {/* Two-column grid for desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Select Day */}
                <div>
                  <label className="block text-sm mb-1">Select Day</label>
                  <select
                    required
                    value={selectedDay}
                    onChange={(e) => {
                      setSelectedDay(e.target.value);
                      setSelectedEvent("");
                    }}
                    className="w-full p-3 rounded-lg bg-black/40 border border-white/20 text-white"
                  >
                    <option value="">Choose Day</option>
                    <option value="scientific">Scientific Day (Dec 16, 2025)</option>
                    <option value="cultural">Cultural Day (Dec 17, 2025)</option>
                    <option value="final">Final Day (Dec 18, 2025)</option>
                  </select>
                </div>

                {/* Select Event */}
                <div>
                  <label className="block text-sm mb-1">Select Event</label>
                  <select
                    required
                    value={selectedEvent}
                    onChange={(e) => setSelectedEvent(e.target.value)}
                    disabled={!selectedDay}
                    className={`w-full p-3 rounded-lg border border-white/20 text-white ${
                      selectedDay ? "bg-black/40" : "bg-gray-800/40"
                    }`}
                  >
                    <option value="">Choose Event</option>
                    {selectedDay &&
                      eventsData[selectedDay].map((event, i) => (
                        <option key={i} value={event}>
                          {event}
                        </option>
                      ))}
                  </select>
                </div>

                {/* Team Leader Name */}
                <div>
                  <label className="block text-sm mb-1">Team Leader Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter leader name"
                    className="w-full p-3 rounded-lg bg-black/40 border border-white/20 text-white placeholder-gray-400"
                  />
                </div>

                {/* Roll Number */}
                <div>
                  <label className="block text-sm mb-1">Roll Number</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter roll number"
                    className="w-full p-3 rounded-lg bg-black/40 border border-white/20 text-white placeholder-gray-400"
                  />
                </div>

                {/* Year */}
                <div>
                  <label className="block text-sm mb-1">Year</label>
                  <select
                    required
                    className="w-full p-3 rounded-lg bg-black/40 border border-white/20 text-white"
                  >
                    <option value="">Select Year</option>
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year">4th Year</option>
                    <option value="Intern">Intern</option>
                  </select>
                </div>

                {/* Team Size */}
                <div>
                  <label className="block text-sm mb-1">Team Size</label>
                  <input
                    type="number"
                    required
                    min="1"
                    max="10"
                    placeholder="Enter team size"
                    className="w-full p-3 rounded-lg bg-black/40 border border-white/20 text-white placeholder-gray-400"
                  />
                </div>

                {/* Team Members */}
                <div className="md:col-span-2">
                  <label className="block text-sm mb-1">Team Members’ Names</label>
                  <textarea
                    rows="3"
                    placeholder="Enter team members' names separated by commas"
                    className="w-full p-3 rounded-lg bg-black/40 border border-white/20 text-white placeholder-gray-400 resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col md:flex-row justify-between mt-8 gap-3 sticky bottom-0 bg-black/40 py-3 backdrop-blur-md rounded-lg px-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition w-full md:w-auto"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition-transform w-full md:w-auto"
                >
                  Submit
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

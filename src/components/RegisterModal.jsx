// src/components/RegisterModal.jsx
import { motion, AnimatePresence } from "framer-motion";

export default function RegisterModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white/10 border border-white/20 text-white rounded-2xl p-8 w-[90%] md:w-[450px] shadow-xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-center mb-6 text-purple-400">
              Register for Dreamz Synapsis ‘25
            </h2>

            <form className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 rounded-lg bg-black/40 border border-white/20 text-white"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 rounded-lg bg-black/40 border border-white/20 text-white"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Age</label>
                <input
                  type="number"
                  placeholder="Enter your age"
                  className="w-full p-3 rounded-lg bg-black/40 border border-white/20 text-white"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">College / Institution</label>
                <input
                  type="text"
                  placeholder="Enter your college name"
                  className="w-full p-3 rounded-lg bg-black/40 border border-white/20 text-white"
                />
              </div>

              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition-transform"
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

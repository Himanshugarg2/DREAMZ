export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10 text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold tracking-wider neon-text">Dreamz Nexus’25</h1>
      <div className="space-x-6 text-gray-300">
        <a href="#about" className="hover:text-purple-400">About</a>
        <a href="#events" className="hover:text-purple-400">Events</a>
        <a href="#sponsors" className="hover:text-purple-400">Sponsors</a>
        <a href="#contact" className="hover:text-purple-400">Contact</a>
      </div>
    </nav>
  );
}

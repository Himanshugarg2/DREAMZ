export default function SponsorsSection() {
  const sponsors = ["Tanishq", "RedBull", "Domino’s", "Max", "Mio Amore", "Synergy Pharma"];

  return (
    <section id="sponsors" className="py-20 bg-black text-center text-white">
      <h2 className="text-4xl font-bold mb-8">Our Previous Sponsors</h2>
      <div className="flex flex-wrap justify-center gap-10 text-lg text-gray-300">
        {sponsors.map((s, i) => (
          <div key={i} className="opacity-80 hover:opacity-100 transition-all">{s}</div>
        ))}
      </div>
    </section>
  );
}

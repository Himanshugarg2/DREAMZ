export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-black text-white text-center">
      <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
      <form className="max-w-md mx-auto space-y-4">
        <input type="text" placeholder="Name" className="w-full p-3 rounded-lg bg-white/10 border border-white/20" />
        <input type="email" placeholder="Email" className="w-full p-3 rounded-lg bg-white/10 border border-white/20" />
        <textarea placeholder="Message" className="w-full p-3 rounded-lg bg-white/10 border border-white/20"></textarea>
        <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold hover:scale-105 transition-transform">
          Send Message
        </button>
      </form>
    </section>
  );
}

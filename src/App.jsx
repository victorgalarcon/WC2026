import { useEffect, useState } from "react";

export default function WorldCupVIPMicrosite() {
  const matchDate = new Date("2026-06-13T15:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = matchDate - now;
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / (1000 * 60)) % 60),
        });
      }
    };

    updateTimer();
    const timer = setInterval(updateTimer, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-950 via-black to-red-950 text-white font-sans">
      <section className="text-center px-4 py-12">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight animate-pulse">
          BRAZIL vs MOROCCO
        </h1>
        <p className="text-xl md:text-3xl mt-3 text-yellow-400 font-semibold">
          FIFA World Cup 2026™ VIP Weekend Package
        </p>
        <p className="mt-4 text-base md:text-lg max-w-3xl mx-auto">
          One weekend. One match. Memories for a lifetime.
        </p>

        <div className="mt-6 bg-black/40 inline-block px-6 py-4 rounded-2xl border border-yellow-400">
          <p className="text-lg font-semibold">Countdown to Match Day</p>
          <p className="text-2xl font-bold text-yellow-400">
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-6">
        <img
          src="/flyer.png"
          alt="VIP Flyer"
          className="w-full rounded-3xl shadow-2xl border border-white/20"
        />
      </section>

      <section className="grid md:grid-cols-2 gap-8 px-4 max-w-6xl mx-auto py-10">
        <div className="rounded-3xl shadow-2xl bg-white text-black p-8">
          <h2 className="text-4xl font-bold text-center">$3,499</h2>
          <p className="text-center text-lg mt-2 font-semibold">
            All-Inclusive VIP Package
          </p>

          <ul className="mt-6 space-y-4 text-base md:text-lg">
            <li>🎟️ Official Match Ticket – Block 302 / Row 24 / Seat 28</li>
            <li>🏡 2-Night Furnished Private Studio (Sleeps 2)</li>
            <li>📍 Modera 44 – Walk to Morristown Green nightlife</li>
            <li>✈️ Airport Pickup & Dropoff Included</li>
            <li>🚆 Round-Trip Stadium Transportation Included</li>
            <li>⭐ Stress-Free VIP Weekend Experience</li>
          </ul>

          <a href="https://wa.me/12034508872" target="_blank" rel="noreferrer">
            <button className="w-full mt-8 text-lg py-4 rounded-2xl bg-green-600 hover:bg-green-700 text-white font-bold">
              💬 Contact on WhatsApp
            </button>
          </a>
        </div>

        <div className="rounded-3xl shadow-2xl bg-black/40 border border-white/20 text-white p-8">
          <h3 className="text-3xl font-bold mb-6">Reserve / Inquiry Form</h3>
          <form className="space-y-4" action="https://formspree.io/f/your-form-id" method="POST">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 rounded-xl text-black"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-xl text-black"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone / WhatsApp"
              className="w-full p-3 rounded-xl text-black"
            />
            <textarea
              name="message"
              placeholder="Questions or reservation request..."
              className="w-full p-3 rounded-xl text-black"
              rows="4"
            />
            <button
              type="submit"
              className="w-full text-lg py-4 rounded-2xl bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>

      <footer className="text-center py-10 text-sm text-white/70 px-4">
        Private hosted World Cup weekend package • Morristown, NJ • MetLife Stadium
      </footer>
    </div>
  );
}

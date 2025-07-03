"use client";

export default function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/herobg.webp')" }}
    >
      <div className="absolute inset-0 bg-teal-900/70"></div>
      <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional Counseling for Christian Healing and Growth
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Compassionate guidance for life's challenges
          </p>
          <button
            onClick={() => {
              if (typeof window !== "undefined") {
                const el = document.getElementById("contact");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }
            }}
            className="bg-teal-600 hover:bg-teal-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
  
export default function ScheduleAConsultation() {
  return (
    <section className="bg-[#124644] text-white px-6 py-12 min-h-[240px] flex items-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 w-full">
        {/* Heading */}
        <h3 className="text-3xl md:text-4xl font-bold text-left w-full md:w-auto leading-tight">
          Schedule A <br className="md:hidden" /> Consultation
        </h3>

        {/* Center Message */}
        <p className="text-base md:text-lg text-center md:flex-1 leading-relaxed">
          Dr. Serena Blake is currently accepting new clients. Available for online and in-person sessions.
        </p>

        {/* CTA Button */}
        <a
          href="#contact"
          className="mt-4 md:mt-0 border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#124644] transition text-base md:text-lg font-medium"
        >
          ✨ Start Healing
        </a>
      </div>
    </section>
  );
}

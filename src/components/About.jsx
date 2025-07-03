export default function About() {
  return (
    <section className="bg-[#b6e4e4] py-40 px-6"> {/* More vertical height */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-20 items-start">

        {/* Profile Image */}
        <div className="lg:col-span-1 flex justify-center">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src="/profile-photo.jpg"
              alt="Dr. Serena Blake headshot"
              className="rounded-lg w-72 h-auto object-cover"
            />
            <p className="text-base font-semibold text-gray-700 mt-3 text-center">Dr. Serena Blake</p>
          </div>
        </div>

        {/* About Text */}
        <div className="lg:col-span-2 text-gray-800">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">
            Hi! I’m Dr. Serena Blake
          </h2>

          <p className="text-2xl leading-relaxed mb-8">
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma. Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
          </p>
        </div>
      </div>
    </section>
  );
}

// app/page.tsx
// import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import About from "@/components/About";
import ScheduleAConsultation from "@/components/ScheduleAConsultation";
import Faq from "@/components/Faq";
import ContactForm from "@/components/ContactForm";


import "./globals.css";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* <Navigation /> */}
      <Hero />
      <Stats />
      <Services />
      <ScheduleAConsultation />
      <About />
      <Faq />
      <ContactForm />
      {/* Add other sections as needed */}
    </main>
  );
}

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MissionStatement from "@/components/MissionStatement";
import Modules from "@/components/Modules";
import EnergyMatrix from "@/components/EnergyMatrix";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian text-white flex flex-col relative">
      <Navbar />
      
      {/* Sticky Hero Container - Stays fixed in the background */}
      <div className="sticky top-0 w-full h-[90vh] z-0">
        <Hero />
      </div>

      {/* 
        Content Wrapper - Higher z-index allows this to naturally slide 
        over the fixed Hero video as the user scrolls down 
      */}
      <div className="relative z-10 w-full bg-white shadow-[0_-10px_40px_rgba(0,0,0,0.3)]">
        <MissionStatement />
        <Modules />
        <EnergyMatrix />
        <Certifications />
        <Footer />
      </div>
    </main>
  );
}
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MissionStatement from "@/components/MissionStatement";
import Modules from "@/components/Modules";
import EnergyMatrix from "@/components/EnergyMatrix";
import Certifications from "@/components/Certifications";
import InquiryPortal from "@/components/InquiryPortal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian text-white flex flex-col relative">
      <Navbar />
      
      {/* 
        Sticky Hero Container 
        This pins the videos to the background while you scroll 
      */}
      <div className="sticky top-0 w-full h-[90vh] z-0">
        <Hero />
      </div>

      {/* 
        Elevated Content Wrapper 
        The z-10 index forces this container to slide OVER the static Hero
      */}
      <div className="relative z-10 w-full bg-white shadow-[0_-15px_40px_rgba(0,0,0,0.3)]">
        <MissionStatement />
        <Modules />
        <EnergyMatrix />
        <Certifications />
        
        {/* New Web3Forms Inquiry Portal */}
        <InquiryPortal />
        
        <Footer />
      </div>
    </main>
  );
}
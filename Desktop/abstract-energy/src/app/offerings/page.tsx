import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Offerings() {
  const offerings = [
    { id: "O.1", title: "Commercial Audits", desc: "Investment Grade Audits (IGA) establishing precise energy baselines and compliance mapping for high-density infrastructure." },
    { id: "O.2", title: "ConEd M&V", desc: "Measurement and Verification telemetry executing under Consolidated Edison incentive contracts for immutable data delivery." },
    { id: "O.3", title: "Willdan Incentives", desc: "Multifamily Energy Efficiency Program (MFEEP) deployment, capturing exact ROI and emissions reductions." },
    { id: "O.4", title: "HVAC Spec Agents", desc: "OK3YO neural auditors inspecting chiller plant specifications, thermal matrices, and dynamic fan CFM." },
    { id: "O.5", title: "VFD Logic", desc: "Real-time variable frequency drive programming and phase-balancing analysis." }
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col pt-24 font-sans">
      <Navbar />
      
      <div className="max-w-[1400px] mx-auto px-8 py-20 w-full flex-grow">
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6">Offerings</h1>
        <p className="text-xl text-zinc-400 font-light max-w-2xl mb-24">
          Automated baseline modeling, real-time telemetry pipelines, and institutional compliance scoring.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((item) => (
            <div key={item.id} className="border border-zinc-800 bg-[#111111] p-8 relative group hover:border-zinc-500 transition-colors"
                 style={{ clipPath: "polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 0 100%)" }}>
              <div className="font-mono text-xs text-zinc-500 tracking-widest mb-8 uppercase">Module {item.id}</div>
              <h3 className="text-2xl font-medium tracking-tight mb-4">{item.title}</h3>
              <p className="text-sm text-zinc-400 font-light leading-relaxed mb-12">{item.desc}</p>
              
              {/* Telemetry Graphic Decoration */}
              <div className="absolute bottom-6 right-6 opacity-30 group-hover:opacity-100 transition-opacity">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" className="text-white">
                  <path d="M0 20 H10 L15 5 L25 35 L30 20 H40" strokeWidth="1" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Capabilities() {
  const nodes = [
    { label: "AI + ML Routing", tech: "Agent Router API, Claude 3.5, Gemini Pro" },
    { label: "Telemetry Streaming", tech: "Power Query, Python automation, IPMVP Option B/C" },
    { label: "Geospatial Engineering", tech: "ArcGIS, AutoCAD, Remote Sensing, QGIS" },
    { label: "Edge Computing", tech: "Raspberry Pi, ESP32, Real-time IoT" }
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col pt-24 font-sans">
      <Navbar />
      
      <div className="max-w-[1400px] mx-auto px-8 py-20 w-full flex-grow grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6">Capabilities</h1>
          <p className="text-xl text-zinc-400 font-light mb-12">
            A convergence of advanced software engineering, AI orchestration, and physical energy infrastructure.
          </p>
          
          <div className="border border-zinc-800 bg-[#111111] p-8 font-mono text-sm text-zinc-300">
            <span className="text-emerald-500">root@abstract-engine:~#</span> initialize --core-modules<br />
            [OK] Loading AI Orchestration...<br />
            [OK] Establishing Serial Comms...<br />
            [OK] Compiling Digital Twins...<br />
            <br />
            <span className="text-zinc-500">SYSTEM ONLINE. ALL CAPABILITIES SECURED.</span>
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-6">
          {nodes.map((node, i) => (
            <div key={i} className="border-b border-zinc-800 pb-6 relative">
              <div className="absolute left-0 top-2 w-2 h-2 bg-white rounded-full" />
              <div className="pl-8">
                <h3 className="text-xl font-medium tracking-tight mb-1">{node.label}</h3>
                <p className="text-xs font-mono text-zinc-500 tracking-widest uppercase">{node.tech}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
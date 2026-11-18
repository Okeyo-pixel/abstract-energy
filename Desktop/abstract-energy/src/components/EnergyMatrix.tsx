"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const matrixData = [
  {
    id: "iga",
    tabLabel: "IGA Audits",
    title: "Investment Grade Audits & Compliance Scoring",
    description: "Automate baseline modeling and institutional compliance scoring. Deploy precise, verifiable, and immutable audits that unlock continuous capital efficiency across commercial grids.",
    action: "Explore IGA Systems",
    image: "/1.jpg", 
  },
  {
    id: "vfd",
    tabLabel: "VFD Retrofits",
    title: "Real-Time VFD & Fan CFM Analysis",
    description: "Continuously monitor and optimize variable frequency drives. Our telemetry engines ingest motor specifications and analyze CFM fluctuations to guarantee post-inspection superiority.",
    action: "Deploy VFD Agents",
    image: "/2.jpg",
  },
  {
    id: "mv",
    tabLabel: "M&V Telemetry",
    title: "Immutable IPMVP M&V Verification",
    description: "Rigorous measurement & verification data pipelines built for institutional efficiency incentive compliance. Achieve seamless Option B & C continuous automated verification.",
    action: "View M&V Ledgers",
    image: "/3.jpg",
  },
  {
    id: "bess",
    tabLabel: "BESS Grid",
    title: "Battery Energy Storage & Peak Shaving",
    description: "Cryptographic AI coordination for decentralized physical infrastructure. Optimize KPLC tariff analytics, predict blackouts, and automate phase-balancing for dynamic grid environments.",
    action: "Initialize BESS",
    image: "/4.jpg",
  },
  {
    id: "hvac",
    tabLabel: "HVAC Matrix",
    title: "Thermal Optimization & Fault Detection",
    description: "Advanced neural agents inspecting chiller plant staging, heating matrices, and airflow dynamics. Automate fault detection from the facility floor to the front lines.",
    action: "Optimize HVAC",
    image: "/5.jpg",
  }
];

export default function EnergyMatrix() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % matrixData.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const activeContent = matrixData[activeIndex];

  return (
    <section className="w-full bg-white text-zinc-900 py-24 md:py-32 font-sans border-b border-zinc-200">
      <div className="max-w-[1400px] mx-auto px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <h2 className="text-4xl md:text-6xl font-normal tracking-tight text-[#161616]">
            Capabilities Matrix
          </h2>
          
          <div className="flex flex-wrap gap-2 md:gap-3">
            {matrixData.map((tab, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveIndex(index)}
                  className={`px-5 py-2.5 text-xs font-mono tracking-widest uppercase transition-all duration-300 border ${
                    isActive
                      ? "bg-obsidian text-white border-obsidian shadow-lg"
                      : "bg-transparent text-zinc-500 border-zinc-300 hover:border-zinc-500 hover:text-zinc-900"
                  }`}
                >
                  {tab.tabLabel}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center min-h-[500px]">
          
          <div 
            key={`text-${activeContent.id}`} 
            className="lg:col-span-5 flex flex-col justify-center animate-[fade-in-up_0.6s_ease-out_forwards]"
          >
            <div className="flex items-center space-x-3 mb-6 font-mono text-xs text-zinc-500 tracking-widest uppercase">
              <span className="w-1.5 h-1.5 bg-obsidian rounded-full" />
              <span>{activeContent.tabLabel} Protocol</span>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-medium tracking-tight text-[#161616] leading-[1.1] mb-6">
              {activeContent.title}
            </h3>
            
            <p className="text-lg font-light text-zinc-600 leading-relaxed mb-10">
              {activeContent.description}
            </p>
            
            <button className="self-start group flex items-center space-x-3 pb-2 border-b border-obsidian text-sm font-mono tracking-widest uppercase text-obsidian hover:text-palantir-blue hover:border-palantir-blue transition-colors">
              <span>{activeContent.action}</span>
              <span className="transform transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>

          <div 
            key={`img-${activeContent.id}`}
            className="lg:col-span-7 relative w-full aspect-video bg-obsidian animate-[fade-in-blur_0.8s_ease-out_forwards]"
            style={{ clipPath: "polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)" }}
          >
            <Image
              src={activeContent.image}
              alt={activeContent.title}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-contain opacity-90 p-4"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-obsidian/80 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-6 left-6 font-mono text-[10px] text-white/80 tracking-widest uppercase pointer-events-none">
              <div className="flex items-center mb-2">
                <span className="animate-pulse inline-block w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2" />
                <span>Uplink Established</span>
              </div>
              <div className="text-zinc-400">
                MODULE: {activeContent.id.toUpperCase()} // LAT: -1.2921 // LNG: 36.8219
              </div>
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-blur {
          0% { opacity: 0; filter: blur(8px); }
          100% { opacity: 1; filter: blur(0px); }
        }
      `}} />
    </section>
  );
}
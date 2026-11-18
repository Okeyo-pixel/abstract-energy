export default function Certifications() {
  const certs = [
    {
      issuer: "STRATHMORE SERC",
      title: "Certified Energy Manager (CEM)",
      desc: "Authorized energy auditor and measurement & verification specialist trained at the Strathmore University Energy Research Centre.",
      tech: ["ConEd M&V", "Energy Auditing", "HVAC Specs"],
    },
    {
      issuer: "APACHE",
      title: "AI Orchestration Fundamentals",
      desc: "Certified in deploying advanced neural agents, training RLHF models, and architecting LLM routing workflows for telemetry analysis.",
      tech: ["RLHF Models", "Agent Routing", "LLM Orchestration"],
    },
    {
      issuer: "GOOGLE",
      title: "Data Analytics Professional",
      desc: "Professional credential demonstrating rigorous capability in data transformation, structuring, and visualization for complex operational ledgers.",
      tech: ["Data Transformation", "Ledger Structuring", "Power Query"],
    },
    {
      issuer: "ACADEMIC",
      title: "Geospatial Engineering",
      desc: "Specialization in Remote Sensing, Cartography, and Land Surveying, enabling the deployment of multi-role 3D engineering simulations.",
      tech: ["PostGIS", "Mapbox/Deck.gl", "NASA POWER"],
    },
    {
      issuer: "ISO 50001",
      title: "Energy Management Systems",
      desc: "Lead auditor credential for establishing, implementing, and maintaining rigorous energy management protocols for institutional grid efficiency.",
      tech: ["Grid Efficiency", "Protocol Audits", "Compliance"],
    },
    {
      issuer: "NABCEP",
      title: "Solar PV & BESS Integration",
      desc: "Advanced qualification for solar photovoltaic system sizing, PostGIS spatial mapping, and battery energy storage system optimization.",
      tech: ["Solar PV Sizing", "BESS Integration", "Grid Reliability"],
    }
  ];

  return (
    <section className="bg-white text-black w-full py-24 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 mb-16">
        <h2 className="text-5xl md:text-6xl font-normal tracking-tight text-obsidian">
          Certifications & Accreditations
        </h2>
      </div>

      {/* Infinite Marquee Container (No hover pause applied) */}
      <div className="relative w-full flex overflow-hidden">
        
        {/* The continuously scrolling track */}
        <div className="flex w-fit animate-marquee">
          
          {/* First Set of Cards */}
          <div className="flex space-x-6 px-3">
            {certs.map((cert, i) => (
              <div 
                key={`first-${i}`}
                className="group flex-none w-[320px] md:w-[400px] bg-[#f5f5f5] hover:bg-[#121212] p-8 h-[380px] flex flex-col relative transition-colors duration-500 cursor-crosshair"
                style={{ clipPath: "polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)" }}
              >
                <h3 className="font-mono text-sm tracking-widest text-zinc-500 group-hover:text-zinc-400 uppercase mb-6 transition-colors duration-500">
                  {cert.issuer}
                </h3>
                
                <p className="text-lg font-medium leading-relaxed text-zinc-900 group-hover:text-zinc-300 transition-colors duration-500">
                  "{cert.desc}"
                </p>

                {/* Bottom Section Wrapper to prevent layout shift */}
                <div className="relative h-[90px] mt-auto w-full">
                  {/* Default State: Standard Title */}
                  <div className="absolute inset-0 pt-6 border-t border-zinc-300/50 transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-4">
                    <span className="font-semibold text-sm text-black">{cert.title}</span>
                  </div>

                  {/* Hover State: Revealed Technical Metadata */}
                  <div className="absolute inset-0 pt-6 border-t border-zinc-700 transition-all duration-500 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                    <span className="font-semibold text-sm text-white block mb-3">{cert.title}</span>
                    <div className="flex flex-wrap gap-2">
                      {cert.tech.map((t, index) => (
                        <span key={index} className="text-[10px] font-mono bg-zinc-800 text-zinc-300 px-2 py-1 uppercase tracking-wider">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Duplicate Set for Seamless Looping */}
          <div className="flex space-x-6 px-3" aria-hidden="true">
            {certs.map((cert, i) => (
              <div 
                key={`second-${i}`}
                className="group flex-none w-[320px] md:w-[400px] bg-[#f5f5f5] hover:bg-[#121212] p-8 h-[380px] flex flex-col relative transition-colors duration-500 cursor-crosshair"
                style={{ clipPath: "polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)" }}
              >
                <h3 className="font-mono text-sm tracking-widest text-zinc-500 group-hover:text-zinc-400 uppercase mb-6 transition-colors duration-500">
                  {cert.issuer}
                </h3>
                
                <p className="text-lg font-medium leading-relaxed text-zinc-900 group-hover:text-zinc-300 transition-colors duration-500">
                  "{cert.desc}"
                </p>

                <div className="relative h-[90px] mt-auto w-full">
                  <div className="absolute inset-0 pt-6 border-t border-zinc-300/50 transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-4">
                    <span className="font-semibold text-sm text-black">{cert.title}</span>
                  </div>
                  <div className="absolute inset-0 pt-6 border-t border-zinc-700 transition-all duration-500 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                    <span className="font-semibold text-sm text-white block mb-3">{cert.title}</span>
                    <div className="flex flex-wrap gap-2">
                      {cert.tech.map((t, index) => (
                        <span key={index} className="text-[10px] font-mono bg-zinc-800 text-zinc-300 px-2 py-1 uppercase tracking-wider">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Inline CSS Animation Engine */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); } 
          }
          .animate-marquee {
            animation: marquee 35s linear infinite;
          }
        `}} />
      </div>
    </section>
  );
}
import Image from "next/image";

const modules = [
  {
    id: "0.1",
    title: "OK3YO",
    subtitle: "Automate operations, from the facility floor to the front lines of M&V",
    desc: "Advanced neural agents inspecting HVAC motor specifications, fan CFM analysis, and VFD speed logic.",
    image: "/PIC1.jpg", 
  },
  {
    id: "0.2",
    title: "Matrix",
    subtitle: "Achieve institutional energy superiority, from baseline to post-inspection",
    desc: "Rigorous measurement & verification data pipelines built for complex efficiency incentive compliance.",
    image: "/PIC2.jpg",
  },
  {
    id: "0.3",
    title: "Portal",
    subtitle: "Build and manage ontology-powered telemetry software across any environment",
    desc: "Complete developer platform for real-time telemetry and commercial property tracking.",
    image: "/PIC3.jpg",
  },
  {
    id: "0.4",
    title: "Volt",
    subtitle: "Cryptographic AI coordination for decentralized physical infrastructure",
    desc: "VoltShield modeling with Merkle logging, phase-balancing, and blackout prediction for dynamic grid environments.",
    image: "/PIC4.jpg",
  },
  {
    id: "0.5",
    title: "Spatial",
    subtitle: "Deploy multi-role 3D engineering and architectural simulations",
    desc: "Integrates Mapbox ecosystem, PostGIS spatial databases, and NASA POWER solar yield models for grid reliability.",
    image: "/PIC5.jpg",
  },
];

export default function Modules() {
  return (
    <section className="bg-white text-black w-full pb-24 font-sans">
      <div className="flex flex-col w-full overflow-hidden border-t border-zinc-200">
        {modules.map((mod, index) => (
          <div 
            key={mod.id} 
            className={`group w-full py-16 md:py-24 px-8 border-b border-zinc-200 cursor-pointer ${index % 2 === 0 ? 'bg-[#f5f5f5]' : 'bg-white'}`}
          >
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              
              <div className="md:col-span-3 flex flex-col justify-between h-full min-h-[160px]">
                <p className="text-xl md:text-2xl font-light leading-snug text-zinc-900 pr-4">
                  {mod.subtitle}
                </p>
                <div className="mt-8">
                  <span className="font-mono text-sm text-zinc-500">/{mod.id}</span>
                </div>
              </div>

              {/* Aspect-video and object-contain ensures 100% of the image is visible without clipping */}
              <div className="md:col-span-4 relative w-full aspect-video rounded overflow-hidden bg-zinc-900/5 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                <Image 
                  src={mod.image} 
                  alt={mod.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 font-mono text-[10px] text-white/90">
                  <span className="animate-pulse inline-block w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2" />
                  SYSTEM ACTIVE
                </div>
              </div>

              <div className="md:col-span-5 flex md:justify-end">
                <h3 className="text-7xl md:text-[8rem] lg:text-[10rem] font-normal tracking-tight text-[#161616] leading-none transform translate-x-0 group-hover:translate-x-8 transition-transform duration-700 ease-out">
                  {mod.title}
                </h3>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
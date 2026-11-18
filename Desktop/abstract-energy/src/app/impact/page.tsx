import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Impact() {
  const studies = [
    {
      title: "KAWI LLC Telemetry Pipeline",
      metric: "99.9%",
      metricLabel: "M&V Audit Accuracy",
      desc: "Deployed continuous energy audits and pre/post-inspection measurement & verification for Willdan MFEEP pipelines."
    },
    {
      title: "Nairobi Commercial Grid",
      metric: "2.4MW",
      metricLabel: "Peak Demand Offset",
      desc: "Analyzed KPLC tariff structures to optimize Battery Energy Storage Systems (BESS) and execute automated phase-balancing."
    },
    {
      title: "Kibwezi Geospatial Twin",
      metric: "0.05m",
      metricLabel: "Spatial Resolution",
      desc: "Executed cadastral, topographical, and sectional property mapping using precision ArcGIS and remote sensing protocols."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col pt-24 font-sans">
      <Navbar />
      
      <div className="max-w-[1400px] mx-auto px-8 py-20 w-full flex-grow">
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6">Impact Studies</h1>
        <p className="text-xl text-zinc-400 font-light max-w-2xl mb-24">
          Quantifiable execution across international energy infrastructure and precise geospatial surveying.
        </p>

        <div className="flex flex-col space-y-8">
          {studies.map((study, i) => (
            <div key={i} className="flex flex-col md:flex-row border-t border-zinc-800 pt-8">
              <div className="w-full md:w-1/3 pr-8 mb-8 md:mb-0">
                <div className="text-5xl font-mono font-light tracking-tighter mb-2">{study.metric}</div>
                <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{study.metricLabel}</div>
              </div>
              <div className="w-full md:w-2/3 md:border-l md:border-zinc-800 md:pl-12">
                <h3 className="text-2xl font-medium tracking-tight mb-4">{study.title}</h3>
                <p className="text-zinc-400 font-light leading-relaxed">{study.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
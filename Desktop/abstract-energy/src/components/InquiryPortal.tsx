"use client";

import { useState } from "react";

export default function InquiryPortal() {
  const [showForm, setShowForm] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY"); // Replace with your key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="inquiry" className="w-full flex flex-col font-sans border-t border-zinc-200">
      
      {/* High-Contrast Split Action Block */}
      <div className="flex flex-col md:flex-row w-full">
        
        {/* Left: Request a Demo (Reveals Form) */}
        <button 
          onClick={() => setShowForm(!showForm)}
          className="w-full md:w-1/2 bg-white text-black py-24 md:py-32 px-12 md:px-24 flex items-center justify-between hover:bg-zinc-50 transition-colors text-left group"
        >
          {/* Added leading-[1.1] to fix overlapping text on wrap */}
          <h2 className="text-4xl md:text-[3.5rem] lg:text-[4.5rem] font-normal tracking-tight leading-[1.1]">
            Request a Demo
          </h2>
          {/* Added flex-shrink-0 to prevent arrow from squeezing */}
          <span className={`text-4xl font-light flex-shrink-0 ml-4 transform transition-transform duration-500 ${showForm ? 'rotate-90' : ''}`}>→</span>
        </button>

        {/* Right: Start Building (Redirects) */}
        <a 
          href="https://build.mauriceokeyo.com"
          className="w-full md:w-1/2 bg-[#0a0a0a] text-white py-24 md:py-32 px-12 md:px-24 flex items-center justify-between hover:bg-[#111111] transition-colors group"
        >
          {/* Added leading-[1.1] to match layout */}
          <h2 className="text-4xl md:text-[3.5rem] lg:text-[4.5rem] font-normal tracking-tight leading-[1.1]">
            Start Building
          </h2>
          <span className="text-4xl font-light flex-shrink-0 ml-4 group-hover:translate-x-2 transition-transform duration-300">→</span>
        </a>

      </div>

      {/* Collapsible Web3Forms Portal */}
      <div className={`w-full bg-[#050505] text-white transition-all duration-700 ease-in-out overflow-hidden ${showForm ? 'max-h-[1000px] opacity-100 border-t border-zinc-800' : 'max-h-0 opacity-0'}`}>
        <div className="max-w-[1400px] mx-auto p-12 md:p-24 flex flex-col md:flex-row gap-16">
          
          <div className="md:w-1/3">
            <div className="font-mono text-xs text-zinc-500 tracking-widest uppercase mb-4 flex items-center">
              <span className="w-1.5 h-1.5 bg-palantir-blue rounded-full mr-3 animate-pulse" />
              Secure Uplink
            </div>
            <h3 className="text-3xl font-medium tracking-tight mb-4">Inquiry Portal</h3>
            <p className="text-zinc-400 font-light text-sm leading-relaxed">
              Establish communication for enterprise deployment, custom measurement & verification protocols, or dedicated telemetry access.
            </p>
          </div>
          
          <div className="md:w-2/3">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input type="text" name="name" required placeholder="OPERATOR NAME" className="bg-transparent border-b border-zinc-800 pb-3 text-sm font-mono focus:outline-none focus:border-white transition-colors placeholder:text-zinc-600 rounded-none w-full" />
                <input type="email" name="email" required placeholder="SECURE EMAIL" className="bg-transparent border-b border-zinc-800 pb-3 text-sm font-mono focus:outline-none focus:border-white transition-colors placeholder:text-zinc-600 rounded-none w-full" />
              </div>
              <input type="text" name="organization" placeholder="ORGANIZATION / GRID" className="bg-transparent border-b border-zinc-800 pb-3 text-sm font-mono focus:outline-none focus:border-white transition-colors placeholder:text-zinc-600 rounded-none w-full" />
              <textarea name="message" required placeholder="TRANSMISSION DATA..." rows={2} className="bg-transparent border-b border-zinc-800 pb-3 text-sm font-mono focus:outline-none focus:border-white transition-colors placeholder:text-zinc-600 resize-none rounded-none w-full" />
              
              <div className="pt-4 flex items-center space-x-6">
                <button type="submit" disabled={status === "submitting" || status === "success"} className="bg-white text-black px-8 py-3 text-xs font-mono tracking-widest uppercase hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)" }}>
                  {status === "idle" ? "Transmit Request" : status === "submitting" ? "Encrypting..." : "Submitted"}
                </button>
                {status === "success" && <span className="font-mono text-xs text-emerald-500 uppercase tracking-widest">Transmission Confirmed</span>}
                {status === "error" && <span className="font-mono text-xs text-red-500 uppercase tracking-widest">Delivery Fault</span>}
              </div>
            </form>
          </div>

        </div>
      </div>

    </section>
  );
}
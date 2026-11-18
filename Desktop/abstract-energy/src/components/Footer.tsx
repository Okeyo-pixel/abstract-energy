import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full font-sans">
      {/* Split CTA Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        <div className="bg-[#f5f5f5] text-black p-12 md:p-20 flex justify-between items-center group cursor-pointer hover:bg-[#ebebeb] transition-colors">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight">Request a Demo</h2>
          <span className="text-4xl font-light group-hover:translate-x-2 transition-transform duration-300">→</span>
        </div>
        <div className="bg-obsidian text-white p-12 md:p-20 flex justify-between items-center group cursor-pointer hover:bg-zinc-900 transition-colors">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight">Start Building</h2>
          <span className="text-4xl font-light group-hover:translate-x-2 transition-transform duration-300">→</span>
        </div>
      </div>

      {/* Main Footer Links Section */}
      <footer className="bg-white text-black px-8 py-16">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
          
          {/* Left Column: Brand & Copyright */}
          <div className="md:col-span-1 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="relative w-6 h-6">
                  <Image src="/company-logo.png" alt="Abstract Corp" fill sizes="24px" className="object-contain filter invert" />
                </div>
                <span className="font-mono text-sm font-bold tracking-wider uppercase">Abstract</span>
              </div>
              <div className="text-xs text-zinc-500 space-y-4">
                <p>© 2026 Abstract Corp.</p>
                <p>All rights reserved.</p>
                <button className="underline hover:text-black transition-colors border-none bg-transparent cursor-pointer">Cookies Settings</button>
                <div className="flex space-x-3 pt-2">
                  <span className="text-black font-medium cursor-pointer">KE</span>
                  <span className="cursor-pointer hover:text-black transition-colors">US</span>
                  <span className="cursor-pointer hover:text-black transition-colors">UK</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-3 text-xs font-mono text-zinc-500 mt-12 uppercase">
              <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
              <a href="https://github.com/Okeyo-pixel" className="hover:text-black transition-colors">GitHub</a>
              <a href="#" className="hover:text-black transition-colors">Store</a>
            </div>
          </div>

          {/* Right Columns: Data Links */}
          <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
            {/* Column 1 */}
            <div className="flex flex-col space-y-3">
              <h3 className="font-mono text-xs text-zinc-400 mb-2 uppercase tracking-widest">Offerings</h3>
              <a href="#" className="hover:underline hover:text-palantir-blue transition-colors">Commercial Audits</a>
              <a href="#" className="hover:underline hover:text-palantir-blue transition-colors">ConEd M&V</a>
              <a href="#" className="hover:underline hover:text-palantir-blue transition-colors">Willdan Incentives</a>
              <a href="#" className="hover:underline hover:text-palantir-blue transition-colors">HVAC Spec Agents</a>
              <a href="#" className="hover:underline hover:text-palantir-blue transition-colors">VFD Logic</a>
              <a href="#" className="hover:underline hover:text-palantir-blue transition-colors">Energy</a>
              <a href="#" className="hover:underline hover:text-palantir-blue transition-colors">Defense</a>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col space-y-3">
              <h3 className="font-mono text-xs text-zinc-400 mb-2 uppercase tracking-widest">Impact Studies</h3>
              <a href="#" className="hover:underline hover:text-palantir-blue transition-colors">KAWI LLC</a>
              <a href="#" className="hover:underline hover:text-palantir-blue transition-colors">Multifamily Matrix</a>
              <a href="#" className="hover:underline hover:text-palantir-blue transition-colors">Nairobi Grid</a>
              <a href="#" className="hover:underline hover:text-palantir-blue transition-colors">Kibwezi Mapping</a>
              <a href="#" className="hover:underline hover:text-palantir-blue transition-colors">Abstract AI</a>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col space-y-3">
              <h3 className="font-mono text-xs text-zinc-400 mb-2 uppercase tracking-widest">Capabilities</h3>
              <a href="#" className="hover:underline hover:text-palantir-blue transition-colors">AI + ML</a>
              <a href="#" className="hover:underline hover:text-palantir-blue transition-colors">Telemetry Streaming</a>
              <a href="#" className="hover:underline hover:text-palantir-blue transition-colors">Geospatial Mapping</a>
              <a href="#" className="hover:underline hover:text-palantir-blue transition-colors">Digital Twin</a>
              <a href="#" className="hover:underline hover:text-palantir-blue transition-colors">Edge AI</a>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col space-y-3">
              <h3 className="font-mono text-xs text-zinc-400 mb-2 uppercase tracking-widest">Documents</h3>
              <a href="#" className="hover:underline hover:text-palantir-blue transition-colors">Developer Community</a>
              <a href="#" className="hover:underline hover:text-palantir-blue transition-colors">Platform Documentation</a>
              <a href="#" className="hover:underline hover:text-palantir-blue transition-colors">Trust Center</a>
              <a href="#" className="hover:underline hover:text-palantir-blue transition-colors">Privacy Policy</a>
              <a href="#" className="hover:underline hover:text-palantir-blue transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
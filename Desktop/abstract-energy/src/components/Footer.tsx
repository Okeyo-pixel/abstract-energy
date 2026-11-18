import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-[#161616] pt-24 pb-12 px-8 font-sans border-t border-zinc-200">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 mb-24">
        
        {/* Column 1: Brand & Copyright */}
        <div className="flex flex-col space-y-6">
          <div className="flex items-center space-x-3 mb-2">
            <Image src="/company-logo.png" alt="Abstract Corp" width={20} height={20} className="invert opacity-80" />
            <span className="font-bold text-xs tracking-widest uppercase">Abstract</span>
          </div>
          <div className="text-xs text-zinc-500 space-y-4 font-light">
            <p>© {new Date().getFullYear()} Abstract Corp.</p>
            <p>All rights reserved.</p>
            <p className="underline cursor-pointer hover:text-black">Cookies Settings</p>
            <p className="font-mono tracking-widest uppercase pt-2">KE <span className="text-zinc-300 mx-2">US</span> <span className="text-zinc-300">UK</span></p>
          </div>
          
          <div className="pt-8 flex flex-col space-y-4">
            <a href="#" className="font-mono text-[10px] tracking-widest uppercase text-zinc-500 hover:text-black transition-colors">LinkedIn</a>
            <a href="https://github.com/Okeyo-pixel" target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] tracking-widest uppercase text-zinc-500 hover:text-black transition-colors">GitHub</a>
          </div>
        </div>

        {/* Column 2: Offerings */}
        <div className="flex flex-col">
          <h4 className="font-mono text-[10px] tracking-widest uppercase text-zinc-400 mb-8">Offerings</h4>
          <div className="space-y-4 flex flex-col">
            <Link href="/offerings" className="text-sm font-light text-zinc-600 hover:text-black transition-colors">Commercial Audits</Link>
            <Link href="/offerings" className="text-sm font-light text-zinc-600 hover:text-black transition-colors">ConEd M&V</Link>
            <Link href="/offerings" className="text-sm font-light text-zinc-600 hover:text-black transition-colors">Willdan Incentives</Link>
            <Link href="/offerings" className="text-sm font-light text-zinc-600 hover:text-black transition-colors">HVAC Spec Agents</Link>
            <Link href="/offerings" className="text-sm font-light text-zinc-600 hover:text-black transition-colors">VFD Logic</Link>
            <Link href="/offerings" className="text-sm font-light text-zinc-600 hover:text-black transition-colors">Energy</Link>
            <Link href="/offerings" className="text-sm font-light text-zinc-600 hover:text-black transition-colors">Defense</Link>
          </div>
        </div>

        {/* Column 3: Impact Studies */}
        <div className="flex flex-col">
          <h4 className="font-mono text-[10px] tracking-widest uppercase text-zinc-400 mb-8">Impact Studies</h4>
          <div className="space-y-4 flex flex-col">
            <Link href="/impact" className="text-sm font-light text-zinc-600 hover:text-black transition-colors">KAWI LLC</Link>
            <Link href="/impact" className="text-sm font-light text-zinc-600 hover:text-black transition-colors">Multifamily Matrix</Link>
            <Link href="/impact" className="text-sm font-light text-zinc-600 hover:text-black transition-colors">Nairobi Grid</Link>
            <Link href="/impact" className="text-sm font-light text-zinc-600 hover:text-black transition-colors">Kibwezi Mapping</Link>
            <Link href="/impact" className="text-sm font-light text-zinc-600 hover:text-black transition-colors">Abstract AI</Link>
          </div>
        </div>

        {/* Column 4: Capabilities */}
        <div className="flex flex-col">
          <h4 className="font-mono text-[10px] tracking-widest uppercase text-zinc-400 mb-8">Capabilities</h4>
          <div className="space-y-4 flex flex-col">
            <Link href="/capabilities" className="text-sm font-light text-zinc-600 hover:text-black transition-colors">AI + ML</Link>
            <Link href="/capabilities" className="text-sm font-light text-zinc-600 hover:text-black transition-colors">Telemetry Streaming</Link>
            <Link href="/capabilities" className="text-sm font-light text-zinc-600 hover:text-black transition-colors">Geospatial Mapping</Link>
            <Link href="/capabilities" className="text-sm font-light text-zinc-600 hover:text-black transition-colors">Digital Twin</Link>
            <Link href="/capabilities" className="text-sm font-light text-zinc-600 hover:text-black transition-colors">Edge AI</Link>
          </div>
        </div>

        {/* Column 5: Documents */}
        <div className="flex flex-col">
          <h4 className="font-mono text-[10px] tracking-widest uppercase text-zinc-400 mb-8">Documents</h4>
          <div className="space-y-4 flex flex-col">
            <Link href="/documents" className="text-sm font-light text-zinc-600 hover:text-black transition-colors">Developer Community</Link>
            <Link href="/documents" className="text-sm font-light text-zinc-600 hover:text-black transition-colors">Platform Documentation</Link>
            <Link href="/documents" className="text-sm font-light text-zinc-600 hover:text-black transition-colors">Trust Center</Link>
            <Link href="/documents" className="text-sm font-light text-zinc-600 hover:text-black transition-colors">Privacy Policy</Link>
            <Link href="/documents" className="text-sm font-light text-zinc-600 hover:text-black transition-colors">Terms of Use</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-obsidian/90 backdrop-blur-md border-b border-zinc-800 font-sans h-16 flex items-center">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 flex justify-between items-center">
        
        {/* Brand */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative w-6 h-6 opacity-80 group-hover:opacity-100 transition-opacity">
            <Image src="/company-logo.png" alt="Abstract Corp" fill className="object-contain" />
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="font-bold text-white tracking-widest text-sm uppercase">Abstract</span>
            <span className="font-mono text-zinc-400 text-xs tracking-widest uppercase">Energy</span>
          </div>
        </Link>

        {/* Action */}
        <Link 
          href="/#inquiry" 
          className="bg-white text-black px-6 py-2 text-xs font-mono tracking-widest uppercase hover:bg-zinc-200 transition-colors"
          style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)" }}
        >
          Get Started
        </Link>

      </div>
    </nav>
  );
}
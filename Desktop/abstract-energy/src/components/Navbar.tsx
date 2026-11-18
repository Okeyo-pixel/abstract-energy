import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-obsidian/90 backdrop-blur-md border-b border-obsidian-border">
      <div className="flex items-center space-x-6">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative w-8 h-8">
            <Image 
              src="/company-logo.png" 
              alt="Abstract Corp Logo" 
              fill 
              sizes="32px"
              className="object-contain"
            />
          </div>
          <span className="font-mono text-lg font-bold tracking-wider text-white uppercase group-hover:text-palantir-accent transition-colors">
            Abstract <span className="text-zinc-400 font-light">Energy</span>
          </span>
        </Link>

        {/* Active Department Indicator */}
        <nav className="hidden md:flex items-center space-x-6 text-xs font-mono text-zinc-400">
          <span className="text-white border-b border-white pb-0.5">ENERGY</span>
        </nav>
      </div>

      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 text-xs font-mono tracking-widest text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 transition-all uppercase">
          Portal Login
        </button>
        <button className="px-5 py-2 text-xs font-mono tracking-widest text-obsidian bg-white hover:bg-zinc-200 transition-all font-semibold uppercase">
          Get Started
        </button>
      </div>
    </header>
  );
}
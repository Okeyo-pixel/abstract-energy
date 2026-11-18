"use client";

import { useEffect, useState, useRef } from "react";

export default function MissionStatement() {
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const missionText = "Our software powers real-time, AI-driven decisions in critical institutional and commercial grids in the West, from the facility floors to the front lines.";
  const words = missionText.split(" ");

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Animation starts when the text section enters the bottom of the screen (windowHeight * 0.8)
        const start = windowHeight * 0.8;
        // Animation finishes completely when the text section is near the top of the screen (windowHeight * 0.2)
        const end = windowHeight * 0.2;
        
        // Calculate a strict 0 to 1 ratio based on scroll position
        let p = (start - rect.top) / (start - end);
        p = Math.max(0, Math.min(1, p));
        setProgress(p);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initialize on mount
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Map the scroll progress directly to the number of visible words
  const visibleWordsCount = Math.floor(progress * words.length);

  return (
    <section className="w-full bg-white text-zinc-900 font-sans border-b border-zinc-200 flex flex-col justify-between overflow-hidden">
      
      {/* Normal Document Flow */}
      <div className="flex-grow flex items-center justify-center py-32 md:py-48 px-4 md:px-8 min-h-[70vh]">
        <div ref={sectionRef} className="max-w-[1400px] w-full text-center">
          <h2 
            className="font-medium text-[#161616] leading-[1.05] flex flex-wrap justify-center transition-all duration-75"
            style={{ fontSize: "clamp(2rem, 5vw, 5.5rem)" }}
          >
            {words.map((word, i) => {
              // Word is visible if its index is less than or equal to the scroll-calculated count
              const isVisible = i <= visibleWordsCount;
              
              return (
                <span
                  key={i}
                  className={`inline-block transition-all duration-300 ease-out ${
                    isVisible ? "opacity-100 blur-0 translate-y-0" : "opacity-0 blur-[2px] translate-y-4"
                  }`}
                >
                  {word === "AI-driven" ? (
                    <span className="text-zinc-500">{word}</span>
                  ) : (
                    word
                  )}
                  &nbsp;
                </span>
              );
            })}
          </h2>
        </div>
      </div>

      <div className="w-full px-8 pb-16 max-w-[1400px] mx-auto bg-white">
        <h3 
          className="font-normal text-[#161616] transition-all duration-700 ease-out"
          style={{ 
            fontSize: "clamp(2.5rem, 5vw, 4rem)", 
            letterSpacing: "-0.02em",
            // "Our Software" fades in exactly when the sentence is 95% complete
            opacity: progress >= 0.95 ? 1 : 0,
            transform: progress >= 0.95 ? "translateY(0)" : "translateY(20px)"
          }}
        >
          Our Software
        </h3>
      </div>
    </section>
  );
}
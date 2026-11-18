"use client";

import { useState, useEffect } from "react";

// Sub-component that breaks text into words, then characters, and drops them in with spring physics
const SpringText = ({ text, isActive, delayOffset = 0 }: { text: string, isActive: boolean, delayOffset?: number }) => {
  let charIndex = 0;
  return (
    <span className="inline-flex flex-wrap justify-center">
      {text.split(" ").map((word, wIdx) => (
        <span key={wIdx} className="inline-flex whitespace-nowrap mr-[0.3em]">
          {word.split("").map((char, cIdx) => {
            const currentIdx = charIndex++;
            return (
              <span
                key={cIdx}
                className={`inline-block transition-all duration-[1000ms] ${
                  isActive 
                    ? "opacity-100 translate-y-0 scale-100 blur-0" 
                    : "opacity-0 -translate-y-8 scale-110 blur-[2px]"
                }`}
                style={{
                  // Staggered index delay for the drop effect
                  transitionDelay: isActive ? `${delayOffset + currentIdx * 25}ms` : '0ms',
                  // Spring physics easing curve
                  transitionTimingFunction: isActive 
                    ? "cubic-bezier(0.175, 0.885, 0.32, 1.275)" 
                    : "ease-in-out"
                }}
              >
                {char}
              </span>
            );
          })}
        </span>
      ))}
    </span>
  );
};

export default function Hero() {
  const rotatingText = [
    "Institutional Grids",
    "Every Decision",
    "Measurement & Verification",
    "Multi-Family Audits"
  ];

  const videos = [
    "/VIDEO1.mp4",
    "/VIDEO2.mp4",
    "/VIDEO3.mp4",
    "/VIDEO4.mp4",
    "/VIDEO5.mp4"
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [videoIndex, setVideoIndex] = useState(0);

  useEffect(() => {
    // Text cycles every 5 seconds to allow time for the full entrance and exit animations
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingText.length);
    }, 5000);

    // Videos continuously switch every 2.5 seconds
    const videoInterval = setInterval(() => {
      setVideoIndex((prev) => (prev + 1) % videos.length);
    }, 2500);

    return () => {
      clearInterval(textInterval);
      clearInterval(videoInterval);
    };
  }, [rotatingText.length, videos.length]);

  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-obsidian font-sans">
      
      {/* Continuous Multi-Video Background */}
      <div className="absolute inset-0 z-0">
        {videos.map((src, i) => (
          <video
            key={i}
            autoPlay
            loop
            muted
            playsInline
            // Videos are ALWAYS playing. We just crossfade their opacity.
            className={`absolute inset-0 w-full h-full object-cover filter contrast-125 saturate-50 transition-opacity duration-1000 ease-in-out ${
              videoIndex === i ? "opacity-50 z-10" : "opacity-0 z-0"
            }`}
          >
            <source src={src} type="video/mp4" />
          </video>
        ))}
        <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,10,0.95)_120%)]" />
      </div>

      {/* Centered Kinetic Typography Content */}
      <div className="relative z-30 w-full px-4 flex flex-col items-center text-center">
        
        {/* Significantly reduced font sizes */}
        <h1 className="text-3xl md:text-5xl lg:text-[4rem] font-medium tracking-tight text-white leading-[1.15] drop-shadow-2xl flex flex-col items-center w-full">
          
          <span className="relative grid items-center justify-center text-center w-full">
            {rotatingText.map((text, i) => (
              <div
                key={i}
                className={`col-start-1 row-start-1 flex flex-col items-center justify-center w-full ${
                  textIndex === i ? "z-10" : "z-0 pointer-events-none"
                }`}
              >
                {/* The entire block animates out and back in seamlessly */}
                <SpringText text="Intelligent Telemetry" isActive={textIndex === i} delayOffset={0} />
                <div className="flex flex-wrap justify-center items-center mt-2 md:mt-4">
                  <span className="font-light text-zinc-400 mr-[0.3em]">
                    <SpringText text="for" isActive={textIndex === i} delayOffset={350} />
                  </span>
                  <SpringText text={text} isActive={textIndex === i} delayOffset={450} />
                </div>
              </div>
            ))}

            {/* Invisible structural placeholder ensures the grid doesn't collapse horizontally */}
            <div className="col-start-1 row-start-1 opacity-0 pointer-events-none flex flex-col items-center w-full select-none">
              <span className="inline-flex flex-wrap justify-center">Intelligent Telemetry</span>
              <div className="flex flex-wrap justify-center items-center mt-2 md:mt-4">
                <span className="font-light mr-[0.3em]">for</span>
                <span>Measurement & Verification</span>
              </div>
            </div>
          </span>

        </h1>
      </div>
    </section>
  );
}
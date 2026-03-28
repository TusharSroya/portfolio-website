"use client";

import { useEffect, useState, useCallback } from "react";
import { Particles } from "./Particles";
import { ParticleMorphTransition } from "./ParticleMorphTransition";

export function LandingScreen() {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [scrollToWork, setScrollToWork] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("has_visited");
    if (!hasVisited) {
      setVisible(true);
      sessionStorage.setItem("has_visited", "true");
    }
  }, []);

  const handleLearn = () => {
    setExiting(true);
  };

  const handleEnter = () => {
    setScrollToWork(true);
    setExiting(true);
  };

  // Called by ParticleMorphTransition when animation is complete
  const handleMorphComplete = useCallback(() => {
    setVisible(false);
    if (scrollToWork) {
      document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollToWork]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ pointerEvents: exiting ? "none" : "auto" }}
    >
      {/* When exiting: show the morph canvas that moves particles to halftone positions */}
      {exiting ? (
        <ParticleMorphTransition onComplete={handleMorphComplete} duration={4000} />
      ) : (
        <>
          {/* Normal state: floating particles */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "#2A4535" }}
          />
          <Particles
            className="absolute inset-0"
            quantity={160}
            staticity={40}
            ease={60}
            size={0.8}
            color="#E8DDBC"
          />
        </>
      )}

      {/* Content, fades out when exiting */}
      <div
        className="relative z-10 flex flex-col items-center text-center px-6 md:px-8 gap-6 md:gap-10"
        style={{
          transition: "opacity 0.4s ease",
          opacity: exiting ? 0 : 1,
        }}
      >
        <div className="flex flex-col gap-4 items-center">
          <p
            className="text-sm uppercase tracking-[0.3em] font-medium"
            style={{ color: "#8BA896" }}
          >
            Welcome
          </p>
          <h1
            className="text-5xl md:text-7xl lg:text-[7rem] font-serif leading-none"
            style={{ color: "#E8DDBC" }}
          >
            Hi. I&rsquo;m Tushar.
          </h1>
          <p
            className="text-xl md:text-2xl font-light max-w-lg leading-relaxed mt-2"
            style={{ color: "rgba(232, 221, 188, 0.65)" }}
          >
            Product Manager. Photographer. Systems thinker.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <button
            onClick={handleLearn}
            className="group relative px-6 py-3 md:px-10 md:py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "#E8DDBC",
              color: "#2A4535",
            }}
          >
            Learn About Me
          </button>
          <button
            onClick={handleEnter}
            className="px-6 py-3 md:px-10 md:py-4 rounded-full font-semibold text-sm tracking-wide border transition-all duration-300 hover:scale-105"
            style={{
              borderColor: "rgba(232, 221, 188, 0.3)",
              color: "rgba(232, 221, 188, 0.7)",
            }}
            onMouseEnter={e => {
              (e.target as HTMLButtonElement).style.borderColor = "rgba(232, 221, 188, 0.7)";
              (e.target as HTMLButtonElement).style.color = "#E8DDBC";
            }}
            onMouseLeave={e => {
              (e.target as HTMLButtonElement).style.borderColor = "rgba(232, 221, 188, 0.3)";
              (e.target as HTMLButtonElement).style.color = "rgba(232, 221, 188, 0.7)";
            }}
          >
            View My Work
          </button>
        </div>
      </div>

      {/* Subtle vignette */}
      {!exiting && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, transparent 50%, rgba(42, 69, 53, 0.7) 100%)"
          }}
        />
      )}
    </div>
  );
}

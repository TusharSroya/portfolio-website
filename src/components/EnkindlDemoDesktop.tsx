"use client";

import { useState } from "react";
import { EnkindlNav, EnkindlPhone, type ScreenKey } from "./EnkindlClickThrough";

const SCREEN_INFO: { key: ScreenKey; label: string; desc: string }[] = [
  { key: "home", label: "Home", desc: "Pick a language. Eelam Tamil or Household Punjabi." },
  { key: "stages", label: "Stages", desc: "Lessons organized by real life moments, with mastery tracking." },
  { key: "intro", label: "Intro", desc: "Cultural notes, the phrase in native script, and transliteration." },
  { key: "conversation", label: "Conversation", desc: "The voice orb. You speak, the coach listens and responds." },
  { key: "feedback", label: "Feedback", desc: "Articulatory coaching with weighted mastery scoring." },
];

export default function EnkindlDemoDesktop() {
  const [screen, setScreen] = useState<ScreenKey>("home");

  return (
    <div className="grid grid-cols-[1fr_auto] gap-16 items-start">
      {/* Left: sticky description + nav */}
      <div className="sticky top-24 flex flex-col gap-8 py-12">
        <h2 className="text-4xl md:text-5xl font-serif text-accent-cream leading-tight">
          Try it yourself.
        </h2>
        <p className="text-xl text-accent-cream/60 font-light max-w-md">
          Tap through the Enkindl iOS app. Home screen, lesson stages, conversation view, feedback.
        </p>

        {/* Nav pills */}
        <div className="mt-2">
          <EnkindlNav screen={screen} setScreen={setScreen} />
        </div>

        {/* Screen descriptions, highlight active */}
        <div className="flex flex-col gap-4 mt-4">
          {SCREEN_INFO.map(({ key, label, desc }) => (
            <button
              key={key}
              onClick={() => setScreen(key)}
              className="flex gap-4 items-start text-left transition-all duration-300 cursor-pointer rounded-xl px-3 py-2 -mx-3"
              style={{
                background: screen === key ? "rgba(245,237,223,0.06)" : "transparent",
                opacity: screen === key ? 1 : 0.5,
              }}
            >
              <span className="text-xs uppercase tracking-widest text-sage font-bold mt-1 w-32 flex-shrink-0">
                {label}
              </span>
              <span className="text-accent-cream/70 text-sm leading-relaxed">{desc}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Right: phone */}
      <div className="py-8" style={{ zoom: 0.78 }}>
        <EnkindlPhone screen={screen} setScreen={setScreen} />
      </div>
    </div>
  );
}

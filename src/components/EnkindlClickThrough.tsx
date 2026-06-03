"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ── Design tokens ──
const ENK = {
  cream: "#F5EDDF", paper: "#FBF6EC", buff: "#ECDFC9",
  clay: "#C97B4A", ember: "#E08A47", flame: "#F4B261", saffron: "#D9803A",
  teak: "#4A2E1F", soot: "#1F140D", ash: "#6E5A48", smoke: "#9A8772",
  night: "#14100B", night2: "#221912",
  kumkum: "#B8413A", phulkari: "#C53A6E", positive: "#5C7A4A",
};

// ── Voice Orb ──
function VoiceOrb({ size = 140, state = "listening" }: { size?: number; state?: string }) {
  const modes: Record<string, { scale: number; halo: number; breath: number; flick: number }> = {
    listening: { scale: 1.0, halo: 0.55, breath: 3200, flick: 1800 },
    user:      { scale: 1.18, halo: 0.95, breath: 1200, flick: 340 },
    ai:        { scale: 0.78, halo: 0.40, breath: 4400, flick: 2600 },
  };
  const M = modes[state] || modes.listening;

  const sparks = [
    { x: "14%", y: "38%", s: 2.5, d: 0 }, { x: "88%", y: "32%", s: 2, d: 0.4 },
    { x: "78%", y: "84%", s: 3, d: 0.8 }, { x: "20%", y: "78%", s: 2, d: 1.2 },
    { x: "92%", y: "60%", s: 2.5, d: 0.2 }, { x: "8%", y: "58%", s: 2, d: 0.9 },
    { x: "50%", y: "6%", s: 2.5, d: 0.5 }, { x: "52%", y: "94%", s: 2, d: 1.1 },
  ];

  return (
    <div style={{ width: size, height: size, position: "relative", transform: `scale(${M.scale})`, transition: "transform 700ms cubic-bezier(0.32,0.72,0.24,1)" }}>
      <style>{`
        @keyframes enk-breath{0%,100%{transform:scale(1);filter:brightness(1)}50%{transform:scale(1.04);filter:brightness(1.08)}}
        @keyframes enk-haze{0%,100%{transform:scale(1);opacity:.55}50%{transform:scale(1.16);opacity:.85}}
        @keyframes enk-lick-a{0%,100%{transform:rotate(0deg);filter:blur(2px) brightness(1)}50%{transform:rotate(180deg);filter:blur(2.5px) brightness(1.15)}100%{transform:rotate(360deg);filter:blur(2px) brightness(1)}}
        @keyframes enk-lick-b{0%,100%{transform:rotate(0deg);filter:blur(1.2px) brightness(1.1)}50%{transform:rotate(-180deg);filter:blur(1.6px) brightness(1.25)}100%{transform:rotate(-360deg);filter:blur(1.2px) brightness(1.1)}}
        @keyframes enk-spark{0%,100%{opacity:0.55}50%{opacity:1}}
      `}</style>
      {/* haze */}
      <div style={{ position: "absolute", inset: "-22%", borderRadius: "50%", background: `radial-gradient(circle, rgba(244,178,97,${0.42*M.halo}) 0%, rgba(244,178,97,${0.18*M.halo}) 38%, rgba(244,178,97,0) 70%)`, animation: `enk-haze ${M.breath}ms cubic-bezier(0.4,0,0.4,1) infinite`, filter: "blur(2px)" }} />
      {/* ember body */}
      <div style={{ position: "absolute", inset: "6%", borderRadius: "50%", background: "radial-gradient(circle at 50% 50%, rgba(58,22,8,0.85) 0%, rgba(40,16,6,0.7) 55%, rgba(20,10,4,0.55) 85%, rgba(20,10,4,0.4) 100%)", boxShadow: "inset 0 0 30px rgba(244,178,97,0.18), inset 0 0 8px rgba(31,20,13,0.6)", animation: `enk-breath ${M.breath}ms cubic-bezier(0.32,0.72,0.24,1) infinite` }} />
      {/* fire ring 1 */}
      <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "conic-gradient(from 0deg, rgba(244,178,97,0.0) 0deg, rgba(244,178,97,0.55) 25deg, rgba(255,210,140,0.85) 60deg, rgba(244,178,97,0.4) 110deg, rgba(217,128,58,0.2) 160deg, rgba(244,178,97,0.0) 200deg, rgba(244,178,97,0.5) 250deg, rgba(255,226,168,0.95) 290deg, rgba(244,178,97,0.45) 330deg, rgba(244,178,97,0.0) 360deg)", WebkitMask: "radial-gradient(circle, transparent 0%, transparent 41%, black 47%, black 50%, transparent 56%)", mask: "radial-gradient(circle, transparent 0%, transparent 41%, black 47%, black 50%, transparent 56%)", animation: `enk-lick-a ${M.flick*6}ms linear infinite`, mixBlendMode: "screen" }} />
      {/* fire ring 2 */}
      <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "conic-gradient(from 90deg, rgba(255,255,255,0.0) 0deg, rgba(255,255,255,0.95) 30deg, rgba(255,226,168,0.7) 70deg, rgba(244,178,97,0.0) 130deg, rgba(244,178,97,0.0) 200deg, rgba(255,210,140,0.85) 240deg, rgba(255,255,255,0.7) 280deg, rgba(244,178,97,0.0) 340deg, rgba(255,255,255,0.0) 360deg)", WebkitMask: "radial-gradient(circle, transparent 0%, transparent 44%, black 48%, black 49.5%, transparent 53%)", mask: "radial-gradient(circle, transparent 0%, transparent 44%, black 48%, black 49.5%, transparent 53%)", animation: `enk-lick-b ${M.flick*4.5}ms linear infinite`, mixBlendMode: "screen" }} />
      {/* tendrils */}
      <div style={{ position: "absolute", inset: "-8%", borderRadius: "50%", background: "conic-gradient(from 45deg, rgba(244,178,97,0) 0deg, rgba(244,178,97,0.35) 40deg, rgba(244,178,97,0) 90deg, rgba(244,178,97,0) 180deg, rgba(244,178,97,0.4) 220deg, rgba(244,178,97,0) 270deg, rgba(244,178,97,0) 360deg)", WebkitMask: "radial-gradient(circle, transparent 0%, transparent 42%, rgba(0,0,0,0.6) 50%, black 55%, transparent 64%)", mask: "radial-gradient(circle, transparent 0%, transparent 42%, rgba(0,0,0,0.6) 50%, black 55%, transparent 64%)", filter: "blur(3px)", animation: `enk-lick-a ${M.flick*9}ms linear infinite reverse`, mixBlendMode: "screen", opacity: M.halo }} />
      {/* sparks */}
      <div style={{ position: "absolute", inset: 0, borderRadius: "50%", overflow: "visible", mixBlendMode: "screen" }}>
        {sparks.map((sp, i) => (
          <div key={i} style={{ position: "absolute", left: sp.x, top: sp.y, width: sp.s, height: sp.s, borderRadius: "50%", background: "#FFE2A8", boxShadow: "0 0 6px 1px rgba(255,210,140,0.85)", animation: `enk-spark ${1400+i*110}ms ease-in-out ${sp.d}s infinite` }} />
        ))}
      </div>
    </div>
  );
}

// ── Exported standalone orb for hero section ──
export function EnkindlVoiceOrbHero() {
  const [orbState, setOrbState] = useState("listening");
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="relative">
        <VoiceOrb size={200} state={orbState} />
      </div>
      <div className="flex gap-2">
        {[
          { key: "listening", label: "Idle" },
          { key: "user", label: "You speaking" },
          { key: "ai", label: "Coach speaking" },
        ].map(({ key, label }) => (
          <button key={key} onClick={() => setOrbState(key)}
            className={`text-[11px] font-semibold tracking-wide px-3 py-1.5 rounded-full border transition-all cursor-pointer ${orbState === key ? "bg-[#F4B261]/20 text-[#F4B261] border-[#F4B261]/40" : "bg-transparent text-[#F5EDDF]/50 border-[#F5EDDF]/12"}`}>
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

// ── Phone Frame ──
function PhoneFrame({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div style={{ width: 390, height: 844, borderRadius: 54, overflow: "hidden", position: "relative", background: dark ? "#14100B" : "#F5EDDF", boxShadow: "0 30px 80px rgba(74,46,31,0.18), 0 0 0 10px #1F140D, 0 0 0 11px rgba(255,255,255,0.05)", fontFamily: "'Inter Tight', -apple-system, system-ui, sans-serif", flexShrink: 0 }}>
      {/* status bar */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 50, zIndex: 10, display: "flex", alignItems: "flex-end", justifyContent: "space-between", padding: "0 28px 8px", boxSizing: "border-box", color: dark ? "#F5EDDF" : "#1F140D", fontFamily: "-apple-system, system-ui", fontSize: 15, fontWeight: 600, letterSpacing: -0.2 }}>
        <span>9:41</span>
        <span style={{ display: "inline-flex", gap: 6, alignItems: "center", fontSize: 13 }}>
          <span>&#x2022;&#x2022;&#x2022;</span>
        </span>
      </div>
      {/* dynamic island */}
      <div style={{ position: "absolute", top: 11, left: "50%", transform: "translateX(-50%)", width: 120, height: 35, borderRadius: 22, background: "#000", zIndex: 50 }} />
      {/* content */}
      <div style={{ position: "absolute", inset: 0, paddingTop: 50, paddingBottom: 34, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {children}
      </div>
      {/* home indicator */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 34, display: "flex", justifyContent: "center", alignItems: "flex-end", paddingBottom: 9, zIndex: 60, pointerEvents: "none" }}>
        <div style={{ width: 134, height: 5, borderRadius: 100, background: dark ? "rgba(245,237,223,0.6)" : "rgba(31,20,13,0.35)" }} />
      </div>
    </div>
  );
}

// ── Sub-components ──
function TopBar({ title, onBack, dark = false, faded = true }: { title?: string; onBack?: () => void; dark?: boolean; faded?: boolean }) {
  return (
    <div style={{ height: 48, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 12px", flex: "none", background: faded ? "transparent" : (dark ? "rgba(20,16,11,0.78)" : "rgba(245,237,223,0.78)"), backdropFilter: faded ? "none" : "blur(20px)", borderBottom: faded ? "none" : `0.5px solid ${dark ? "rgba(245,237,223,0.08)" : "rgba(74,46,31,0.08)"}` }}>
      {onBack ? (
        <button onClick={onBack} style={{ background: "transparent", border: 0, cursor: "pointer", display: "flex", alignItems: "center", gap: 4, padding: "8px 12px", color: dark ? ENK.flame : ENK.clay, fontFamily: "'Inter Tight', sans-serif", fontSize: 16, fontWeight: 500 }}>
          <svg width="11" height="18" viewBox="0 0 11 18"><path d="M9 1L2 9l7 8" stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Back
        </button>
      ) : <span style={{ width: 60 }} />}
      {title && !faded && <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 500, fontSize: 17, color: dark ? ENK.cream : ENK.teak }}>{title}</div>}
      <span style={{ width: 60 }} />
    </div>
  );
}

function PillButton({ children, onClick, variant = "primary", style = {} }: { children: React.ReactNode; onClick?: () => void; variant?: string; style?: React.CSSProperties }) {
  const v = variant === "ghost" ? { bg: "transparent", fg: ENK.teak } : { bg: ENK.clay, fg: "#FFF8EC" };
  return (
    <button onClick={onClick} style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 16, fontWeight: 600, padding: "14px 22px", borderRadius: 999, border: 0, cursor: "pointer", background: v.bg, color: v.fg, boxShadow: variant === "ghost" ? "inset 0 0 0 1px rgba(74,46,31,0.24)" : "0 1px 2px rgba(74,46,31,0.06)", transition: "transform 160ms cubic-bezier(0.32,0.72,0.24,1)", ...style }}>
      {children}
    </button>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return <div style={{ background: ENK.paper, borderRadius: 14, boxShadow: "0 1px 2px rgba(74,46,31,0.06), 0 1px 1px rgba(74,46,31,0.04)", padding: 20 }}>{children}</div>;
}

// ── Screens ──

function HomeScreen({ onPickLanguage }: { onPickLanguage: () => void }) {
  return (
    <div style={{ flex: 1, overflow: "auto", display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "8px 20px 12px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/enkindl/wordmark.svg" alt="Enkindl" style={{ height: 28 }} />
      </div>
      <div style={{ padding: "20px 20px 8px" }}>
        <h1 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 500, fontSize: 32, lineHeight: 1.1, letterSpacing: -0.6, color: ENK.teak, margin: 0 }}>Welcome back.</h1>
        <p style={{ fontFamily: "'Fraunces', Georgia, serif", fontStyle: "italic", fontSize: 17, color: ENK.ash, marginTop: 8, lineHeight: 1.4 }}>Pick a language. Listen first, then your turn.</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: "16px 20px 24px" }}>
        {[
          { name: "Tamil", dialect: "Eelam Tamil", native: "தமிழ்", accent: ENK.kumkum, scene: "/enkindl/dinner-table-tamil.svg" },
          { name: "Punjabi", dialect: "Household Punjabi", native: "ਪੰਜਾਬੀ", accent: ENK.phulkari, scene: "/enkindl/dinner-table-punjabi.svg" },
        ].map((lang) => (
          <button key={lang.name} onClick={onPickLanguage} style={{ display: "flex", flexDirection: "column", alignItems: "stretch", gap: 0, width: "100%", padding: 0, background: ENK.paper, border: 0, cursor: "pointer", borderRadius: 18, overflow: "hidden", boxShadow: "0 2px 4px rgba(74,46,31,0.08), 0 4px 12px rgba(74,46,31,0.06)", textAlign: "left" }}>
            <div style={{ background: ENK.cream, padding: "0 0 8px", display: "flex", justifyContent: "center" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={lang.scene} alt="" style={{ width: "100%", display: "block" }} />
            </div>
            <div style={{ padding: "14px 18px 18px", display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
                <span style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 22, fontWeight: 500, color: ENK.teak, letterSpacing: -0.2 }}>{lang.name}</span>
                <span style={{ fontSize: 13, color: ENK.ash }}>{lang.dialect}</span>
              </div>
              <span style={{ fontSize: 26, color: lang.accent, fontWeight: 500 }}>{lang.native}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

const TAMIL_STAGES = [
  { stage: 1, label: "Speak from day one", lessons: [
    { id: "1.1", title: "Greet elders and family members", native: "வணக்கம்", done: true },
    { id: "1.2", title: "Introduce yourself", native: "என் பெயர்", done: true },
    { id: "1.3", title: "Ask someone to repeat politely", native: "மறுபடியும்…", done: true },
    { id: "1.4", title: "Use numbers in speech", native: "ஒன்று, ரெண்டு", done: false },
    { id: "1.5", title: "Use days of the week", native: "திங்கட்கிழமை", done: false },
  ]},
  { stage: 2, label: "Daily life", lessons: [
    { id: "2.1", title: "Order food or tea", native: "டீ, கோப்பி", done: false },
    { id: "2.2", title: "Shop for simple items", native: "எவ்வளவு?", done: false },
  ]},
];

function StageListScreen({ onBack, onLesson }: { onBack: () => void; onLesson: (l: typeof TAMIL_STAGES[0]["lessons"][0]) => void }) {
  return (
    <div style={{ flex: 1, overflow: "auto", display: "flex", flexDirection: "column", background: ENK.cream }}>
      <TopBar onBack={onBack} faded={false} title="Eelam Tamil" />
      <div style={{ padding: "8px 20px 4px" }}>
        <h1 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 500, fontSize: 30, letterSpacing: -0.5, color: ENK.teak, margin: 0 }}>Eelam Tamil</h1>
        <p style={{ fontSize: 13, color: ENK.ash, marginTop: 4 }}>
          <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: ENK.kumkum, marginRight: 6, verticalAlign: "middle" }} />
          Conservative dialect &middot; Jaffna household register
        </p>
      </div>
      {TAMIL_STAGES.map(s => (
        <div key={s.stage}>
          <div style={{ padding: "24px 20px 8px", display: "flex", alignItems: "baseline", gap: 12 }}>
            <span style={{ fontWeight: 700, fontSize: 11, letterSpacing: 0.16, textTransform: "uppercase", color: ENK.ash }}>Stage {s.stage}</span>
            <span style={{ flex: 1, fontFamily: "'Fraunces', Georgia, serif", fontSize: 14, color: ENK.teak, fontWeight: 500 }}>{s.label}</span>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: ENK.smoke }}>{s.lessons.filter(l => l.done).length}/{s.lessons.length}</span>
          </div>
          <div style={{ margin: "0 16px", background: ENK.paper, borderRadius: 14, boxShadow: "0 1px 2px rgba(74,46,31,0.06)", overflow: "hidden" }}>
            {s.lessons.map((l) => (
              <button key={l.id} onClick={() => onLesson(l)} style={{ display: "flex", alignItems: "center", gap: 14, width: "100%", padding: "14px 20px", background: "transparent", border: 0, cursor: "pointer", borderBottom: "0.5px solid rgba(74,46,31,0.08)", textAlign: "left" }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: ENK.smoke, width: 32, flexShrink: 0 }}>{l.id}</span>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
                  <span style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 17, color: ENK.teak, fontWeight: 500, lineHeight: 1.25 }}>{l.title}</span>
                  <span style={{ fontSize: 14, color: ENK.clay }}>{l.native}</span>
                </div>
                {l.done && <span style={{ width: 22, height: 22, borderRadius: "50%", background: ENK.positive, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700 }}>&check;</span>}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function LessonIntroScreen({ onBack, onStart }: { onBack: () => void; onStart: () => void }) {
  return (
    <div style={{ flex: 1, overflow: "auto", display: "flex", flexDirection: "column", background: ENK.cream }}>
      <TopBar onBack={onBack} faded />
      <div style={{ padding: "8px 24px 0" }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: ENK.smoke, letterSpacing: 0.06 }}>LESSON 1.1 &middot; STAGE 1</span>
        <h1 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 500, fontSize: 30, lineHeight: 1.16, letterSpacing: -0.4, color: ENK.teak, margin: "8px 0 0" }}>Greet elders and family members</h1>
        <p style={{ fontFamily: "'Fraunces', Georgia, serif", fontStyle: "italic", fontSize: 19, color: ENK.teak, marginTop: 18, lineHeight: 1.4 }}>Today you&apos;ll greet Appa for the first time. Listen first. Then try.</p>
      </div>
      <div style={{ padding: "20px 20px 8px" }}>
        <Card>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <span style={{ fontWeight: 700, fontSize: 11, letterSpacing: 0.16, textTransform: "uppercase", color: ENK.ash }}>The phrase</span>
            <span style={{ fontSize: 26, color: ENK.teak, lineHeight: 1.2 }}>{"வணக்கம், எப்படி இருக்கிறீங்க?"}</span>
            <span style={{ fontFamily: "'Fraunces', Georgia, serif", fontStyle: "italic", fontSize: 17, color: ENK.ash }}>Vanakkam, eppadi irukinga?</span>
            <span style={{ fontSize: 14, color: ENK.smoke }}>Hello &mdash; how are you? <em>(Eelam form, with the formal &quot;-nga&quot; suffix.)</em></span>
          </div>
        </Card>
      </div>
      <div style={{ padding: "8px 20px 8px" }}>
        <Card>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <span style={{ fontWeight: 700, fontSize: 11, letterSpacing: 0.16, textTransform: "uppercase", color: ENK.ash }}>Cultural note</span>
            <span style={{ fontSize: 14, color: ENK.teak, lineHeight: 1.45 }}>Default to &quot;Neenga&quot; for elders and older siblings. Saying &quot;Nee&quot; prematurely can feel <em>visar</em> &mdash; disrespectful.</span>
            <span style={{ fontFamily: "'Caveat', cursive", fontSize: 22, color: ENK.clay, marginTop: 4 }}>&mdash; soft &quot;Ohm&quot; for yes</span>
          </div>
        </Card>
      </div>
      <div style={{ flex: 1 }} />
      <div style={{ padding: "12px 20px 24px", display: "flex", flexDirection: "column", gap: 10 }}>
        <PillButton onClick={onStart} style={{ width: "100%" }}>Begin &middot; Your turn</PillButton>
        <PillButton variant="ghost" style={{ width: "100%" }}>Listen first</PillButton>
      </div>
    </div>
  );
}

function ConversationScreen({ onEnd }: { onEnd: () => void }) {
  const [mode, setMode] = useState("listening");
  const STATUS: Record<string, { hint: string; sub: string }> = {
    listening: { hint: "Listening…", sub: "Speak when you’re ready." },
    user: { hint: "Vanakkam…", sub: "Your turn — keep going." },
    ai: { hint: "Amma is responding…", sub: "Listen first." },
  };
  const s = STATUS[mode] || STATUS.listening;
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", background: ENK.night, color: ENK.cream }}>
      <TopBar onBack={onEnd} dark faded />
      <div style={{ padding: "8px 36px", textAlign: "center", fontFamily: "'Fraunces', Georgia, serif", fontStyle: "italic", fontSize: 17, fontWeight: 400, color: "rgba(245,237,223,0.6)", lineHeight: 1.4 }}>
        Greet Appa for the first time. Listen first. Then try.
      </div>
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <VoiceOrb size={140} state={mode} />
      </div>
      <div style={{ textAlign: "center", padding: "0 32px 4px" }}>
        <div style={{ fontFamily: mode === "user" ? "'Caveat', cursive" : "'Fraunces', Georgia, serif", fontSize: mode === "user" ? 24 : 18, fontStyle: mode === "user" ? "normal" : "italic", color: mode === "user" ? ENK.flame : "rgba(245,237,223,0.78)", lineHeight: 1.3, transition: "all 400ms ease" }}>{s.hint}</div>
        <div style={{ fontSize: 12, color: "rgba(245,237,223,0.42)", letterSpacing: 0.04, marginTop: 4 }}>{s.sub}</div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: 6, padding: "14px 20px 0" }}>
        {(["listening", "user", "ai"] as const).map(k => (
          <button key={k} onClick={() => setMode(k)} style={{ fontSize: 11, fontWeight: 600, letterSpacing: 0.04, padding: "6px 12px", background: mode === k ? "rgba(244,178,97,0.18)" : "transparent", color: mode === k ? ENK.flame : "rgba(245,237,223,0.5)", border: `1px solid ${mode === k ? "rgba(244,178,97,0.35)" : "rgba(245,237,223,0.12)"}`, borderRadius: 999, cursor: "pointer" }}>
            {k === "listening" ? "Idle" : k === "user" ? "You speaking" : "Coach speaking"}
          </button>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: 48, padding: "20px 20px 36px" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, color: ENK.cream }}>&pausemark;</div>
          <span style={{ fontSize: 11, color: "rgba(245,237,223,0.5)", textTransform: "uppercase" }}>Hold</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <button onClick={onEnd} style={{ width: 64, height: 64, borderRadius: "50%", background: ENK.kumkum, border: 0, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, color: ENK.cream }}>&times;</button>
          <span style={{ fontSize: 11, color: "rgba(245,237,223,0.5)", textTransform: "uppercase" }}>End</span>
        </div>
      </div>
    </div>
  );
}

function FeedbackScreen({ onContinue, onAgain, onBack }: { onContinue: () => void; onAgain: () => void; onBack: () => void }) {
  return (
    <div style={{ flex: 1, overflow: "auto", display: "flex", flexDirection: "column", background: ENK.cream }}>
      <TopBar onBack={onBack} faded />
      <div style={{ padding: "20px 24px 8px" }}>
        <span style={{ fontWeight: 700, fontSize: 11, letterSpacing: 0.16, textTransform: "uppercase", color: ENK.positive }}>Nandri</span>
        <h1 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 500, fontSize: 30, lineHeight: 1.16, letterSpacing: -0.4, color: ENK.teak, margin: "8px 0 0" }}>That was warm.</h1>
        <p style={{ fontFamily: "'Fraunces', Georgia, serif", fontStyle: "italic", fontSize: 17, color: ENK.ash, marginTop: 10, lineHeight: 1.45 }}>
          Your &quot;ohm&quot; landed soft and Eelam &mdash; the way an aunt would say it. Your &quot;vanakkam&quot; was clear; the retroflex &apos;&#x0273;&apos; came through.
        </p>
      </div>
      {/* coaching card */}
      <div style={{ padding: "20px 20px 0" }}>
        <div style={{ display: "flex", background: ENK.paper, borderRadius: 14, border: "1px solid rgba(176,122,62,0.18)", boxShadow: "0 1px 2px rgba(74,46,31,0.04)", overflow: "hidden" }}>
          <div style={{ width: 3, background: "#B07A3E", flexShrink: 0 }} />
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <div style={{ padding: "16px 18px 14px", display: "flex", flexDirection: "column", gap: 8 }}>
              <span style={{ fontWeight: 700, fontSize: 11, letterSpacing: 0.16, textTransform: "uppercase", color: "#B07A3E" }}>One small adjustment</span>
              <span style={{ fontSize: 14, lineHeight: 1.45, color: ENK.teak }}>That came out a little Indian-Tamil &mdash; try the Eelam shape. Softer retroflex.</span>
            </div>
            <div style={{ height: 1, background: "rgba(74,46,31,0.08)" }} />
            <div style={{ padding: "14px 18px 16px" }}>
              <span style={{ fontFamily: "'Fraunces', Georgia, serif", fontStyle: "italic", fontSize: 14, lineHeight: 1.45, color: ENK.ash }}>
                Curl the tongue tip back toward the hard palate. That curl is what makes it sound Eelam, not Indian Tamil.
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* mastery score */}
      <div style={{ padding: "14px 20px 0" }}>
        <Card>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
              <span style={{ fontSize: 13, color: ENK.teak, fontWeight: 500 }}>Mastery score</span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 14, color: ENK.teak }}>7.4 / 10</span>
            </div>
            <div style={{ height: 6, borderRadius: 999, background: "rgba(74,46,31,0.08)", overflow: "hidden" }}>
              <div style={{ width: "74%", height: "100%", background: "#B07A3E", borderRadius: 999 }} />
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 2 }}>
              {[["40%", "Honorifics"], ["30%", "Pronunciation"], ["20%", "Dialect"], ["10%", "Syntax"]].map(([w, lbl]) => (
                <span key={lbl} style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11, padding: "4px 10px", borderRadius: 999, background: "rgba(74,46,31,0.05)", color: ENK.ash }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, color: ENK.teak }}>{w}</span>
                  <span>{lbl}</span>
                </span>
              ))}
            </div>
          </div>
        </Card>
      </div>
      <div style={{ flex: 1 }} />
      <div style={{ padding: "20px 20px 24px", display: "flex", flexDirection: "column", gap: 10 }}>
        <PillButton onClick={onContinue} style={{ width: "100%" }}>Keep going &middot; 1.2 next</PillButton>
        <PillButton variant="ghost" onClick={onAgain} style={{ width: "100%" }}>Try this once more</PillButton>
      </div>
    </div>
  );
}

// ── Main Export ──

type ScreenKey = "home" | "stages" | "intro" | "conversation" | "feedback";

export default function EnkindlClickThrough() {
  const [screen, setScreen] = useState<ScreenKey>("home");

  const dark = screen === "conversation";

  return (
    <div className="flex flex-col items-center gap-8">
      {/* nav pills */}
      <div className="flex gap-2 p-1.5 rounded-full" style={{ background: "rgba(74,46,31,0.08)" }}>
        {(["home", "stages", "intro", "conversation", "feedback"] as const).map(k => (
          <button key={k} onClick={() => setScreen(k)}
            className="text-[13px] font-semibold px-3.5 py-2 rounded-full border-0 cursor-pointer transition-all"
            style={{ background: screen === k ? ENK.clay : "transparent", color: screen === k ? "#FFF8EC" : ENK.teak }}>
            {k.charAt(0).toUpperCase() + k.slice(1)}
          </button>
        ))}
      </div>
      {/* phone */}
      <AnimatePresence mode="wait">
        <motion.div key={screen} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
          <PhoneFrame dark={dark}>
            {screen === "home" && <HomeScreen onPickLanguage={() => setScreen("stages")} />}
            {screen === "stages" && <StageListScreen onBack={() => setScreen("home")} onLesson={() => setScreen("intro")} />}
            {screen === "intro" && <LessonIntroScreen onBack={() => setScreen("stages")} onStart={() => setScreen("conversation")} />}
            {screen === "conversation" && <ConversationScreen onEnd={() => setScreen("feedback")} />}
            {screen === "feedback" && <FeedbackScreen onContinue={() => setScreen("stages")} onAgain={() => setScreen("conversation")} onBack={() => setScreen("stages")} />}
          </PhoneFrame>
        </motion.div>
      </AnimatePresence>
      <p className="text-sage/50 text-xs tracking-wide max-w-sm text-center">
        Tap the nav pills above, or use the in-screen buttons to navigate. The voice orb breathes at 3.2s &mdash; try switching states on the conversation screen.
      </p>
    </div>
  );
}

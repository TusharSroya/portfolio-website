"use client";

import React, { useState, useEffect } from 'react';
import { ZoomIn, X, ChevronLeft, ChevronRight, Cpu, Map, Brain, BarChart3, Zap, Target, Layers, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CivicTwinShowcase() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const galleryItems = [
    { tag: "Ward Dashboard", title: "Spatial Intelligence at a Glance", desc: "The main 311 Forecaster dashboard showing Toronto's ward-level anomaly detection, real-time service metrics, and geographic hotspot visualization with active complaint trajectories.", img: "/civictwin/dashboard.png" },
    { tag: "Morning Briefing", title: "AI Morning Operations Briefing", desc: "An AI-generated daily operations briefing that surfaces critical activity, watch-list wards, alerts and threats — giving city operations managers an actionable summary before they start their day.", img: "/civictwin/morning-briefing.png" },
    { tag: "Demand Forecast", title: "Predictive Demand Modeling", desc: "Next-quarter demand forecasting with linear projection and 95% confidence bands, broken down by service type — enabling proactive resource allocation before complaints spike.", img: "/civictwin/demand-forecast.png" },
    { tag: "Auto-Triage", title: "NIM-Powered Request Classification", desc: "Natural language auto-triage powered by NVIDIA NIM. Citizens describe issues in plain text and the model classifies them to the most likely service type and division in real-time.", img: "/civictwin/auto-triage.png" },
    { tag: "Triage Results", title: "Embedding-Based Routing", desc: "The classification results showing confidence-ranked service matches — Catch Basin, Basement Flooding Investigation, and Stray Animal — derived from semantic similarity against historical 311 data.", img: "/civictwin/auto-triage-results.png" },
    { tag: "Resource Simulator", title: "What-If Resource Modeling", desc: "An interactive resource simulator that models how added crew capacity changes a ward's backlog clearance and response times, letting planners test staffing scenarios before committing budget.", img: "/civictwin/resource-simulator.png" },
    { tag: "Simulation Engine", title: "Live Agent Simulation", desc: "The generative agent simulation engine running 10,000 synthetic citizens through the digital twin — producing realistic 311 complaint patterns with full spatial-temporal fidelity on NVIDIA DGX Spark.", img: "/civictwin/simulation-run.png" },
  ];

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % galleryItems.length);
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === 'Escape') setSelectedIdx(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx]);

  return (
    <div className="w-full flex flex-col gap-32 mt-20 pt-20 border-t border-sage/10 text-accent-cream leading-relaxed font-light relative">

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[10%] -left-64 w-[500px] h-[500px] bg-sage/5 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] -right-64 w-[600px] h-[600px] bg-sage/5 rounded-full blur-[150px]" />
      </div>

      {/* Lightbox */}
      {selectedIdx !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          onClick={() => setSelectedIdx(null)}
        >
          <button className="absolute top-8 right-8 text-sage hover:text-accent-cream transition-colors p-2 z-[110]" onClick={() => setSelectedIdx(null)}>
            <X className="w-8 h-8" />
          </button>
          <button className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-sage/40 hover:text-accent-cream transition-colors p-4 z-[110]" onClick={handlePrev}>
            <ChevronLeft className="w-10 h-10 md:w-16 md:h-16" />
          </button>
          <button className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-sage/40 hover:text-accent-cream transition-colors p-4 z-[110]" onClick={handleNext}>
            <ChevronRight className="w-10 h-10 md:w-16 md:h-16" />
          </button>
          <div className="max-w-5xl w-full flex flex-col gap-8 animate-in fade-in zoom-in duration-300 items-center">
            <div className="relative w-full shadow-2xl rounded-2xl overflow-hidden border border-sage/20 bg-black/40">
              <img
                src={galleryItems[selectedIdx].img}
                alt={galleryItems[selectedIdx].title}
                className="w-full h-auto max-h-[70vh] object-contain cursor-default"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            <div className="flex flex-col gap-3 text-center max-w-2xl px-4" onClick={(e) => e.stopPropagation()}>
              <p className="text-sage tracking-[0.2em] uppercase text-xs font-bold">{galleryItems[selectedIdx].tag}</p>
              <h3 className="text-3xl md:text-4xl font-serif text-accent-cream">{galleryItems[selectedIdx].title}</h3>
              <p className="text-accent-cream/70 text-lg leading-relaxed">{galleryItems[selectedIdx].desc}</p>
              <div className="flex gap-2 justify-center mt-4">
                {galleryItems.map((_, i) => (
                  <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === selectedIdx ? 'bg-sage w-10' : 'bg-sage/20'}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Platform Gallery */}
      <section className="flex flex-col gap-16">
        <div className="flex flex-col gap-4">
          <h3 className="text-xs uppercase tracking-[0.3em] text-sage font-bold border-b border-sage/20 pb-4 max-w-xs">Platform Gallery</h3>
          <p className="text-accent-cream/60 max-w-2xl mt-2 text-lg">Click to explore the 311 Forecaster dashboard, AI briefings, and simulation engine.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {galleryItems.map((item, i) => (
            <div key={i} className={`group flex flex-col gap-6 p-10 bg-sage/5 border border-sage/10 rounded-[2.5rem] hover:bg-sage/10 hover:border-sage/30 transition-all duration-700 shadow-xl hover:shadow-sage/5 relative overflow-hidden ${i === galleryItems.length - 1 && galleryItems.length % 2 !== 0 ? 'md:col-span-2 md:max-w-[calc(50%-1.25rem)]' : ''}`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-sage/5 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2" />
              <div className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-widest text-sage/70 font-bold italic">{item.tag}</span>
                <h4 className="text-3xl font-serif text-accent-cream">{item.title}</h4>
                <p className="text-accent-cream/70 text-base leading-relaxed mt-2">{item.desc}</p>
              </div>
              <motion.div
                className="mt-4 w-full bg-black/40 rounded-3xl border border-sage/10 flex items-center justify-center relative overflow-hidden cursor-zoom-in shadow-inner"
                initial="idle"
                whileHover="active"
                whileInView="active"
                viewport={{ margin: "-20% 0px -20% 0px", amount: 0.5 }}
                onClick={() => setSelectedIdx(i)}
              >
                <motion.img
                  src={item.img}
                  alt={item.title}
                  variants={{
                    idle: { opacity: 0.85, scale: 1 },
                    active: { opacity: 1, scale: 1.03 }
                  }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="w-full h-auto object-cover"
                />
                <motion.div
                  variants={{ idle: { opacity: 0 }, active: { opacity: 1 } }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-sage/5 flex items-center justify-center backdrop-blur-[2px]"
                >
                  <motion.div
                    variants={{ idle: { y: 24 }, active: { y: 0 } }}
                    transition={{ duration: 0.7 }}
                    className="bg-black/80 backdrop-blur-xl p-5 rounded-full border border-sage/30 shadow-2xl"
                  >
                    <ZoomIn className="w-8 h-8 text-sage" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture & Tech Stack */}
      <section className="flex flex-col gap-16">
        <div className="flex flex-col gap-4">
          <h3 className="text-xs uppercase tracking-[0.3em] text-sage font-bold border-b border-sage/20 pb-4 max-w-xs flex items-center gap-2">
            <Layers className="w-4 h-4" /> Architecture
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Brain, label: "Simulation Layer", desc: "10,000 generative citizen agents with behavioral profiles, daily routines, and frustration thresholds running through a spatial-temporal digital twin of Toronto." },
            { icon: Cpu, label: "GPU-Accelerated Pipeline", desc: "RAPIDS cuDF and cuML for real-time anomaly detection, demand forecasting, and clustering — all running locally on the NVIDIA DGX Spark." },
            { icon: Map, label: "Spatial Intelligence", desc: "Ward-level geographic visualization with active complaint trajectories, hotspot detection, and zone-based anomaly scoring across 25 wards." },
            { icon: Target, label: "NIM Auto-Triage", desc: "NVIDIA NIM embedding models classify free-text citizen complaints into service categories with confidence-ranked routing against historical 311 data." },
            { icon: BarChart3, label: "Demand Forecasting", desc: "Linear projection models with 95% confidence bands predict next-quarter complaint volumes by service type for proactive resource allocation." },
            { icon: Activity, label: "Resource Simulator", desc: "What-if modeling engine that tests staffing scenarios — showing how added crew capacity affects backlog clearance, response times, and coverage." },
          ].map((item, i) => (
            <div key={i} className="p-8 bg-sage/5 border border-sage/10 rounded-3xl hover:bg-sage/10 transition-all duration-500 group flex flex-col gap-5">
              <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center text-sage group-hover:bg-sage/20 transition-colors">
                <item.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-serif text-accent-cream">{item.label}</h4>
              <p className="text-accent-cream/70 text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Banner */}
      <section className="flex flex-col gap-8">
        <h3 className="text-xs uppercase tracking-[0.3em] text-sage font-bold border-b border-sage/20 pb-4 max-w-xs flex items-center gap-2">
          <Zap className="w-4 h-4" /> Tech Stack
        </h3>
        <div className="flex flex-wrap gap-3">
          {[
            "NVIDIA DGX Spark", "NVIDIA NIM", "RAPIDS cuDF", "RAPIDS cuML", "Python", "Next.js", "Mapbox", "Tailwind CSS", "LLM Embeddings", "Spatial-Temporal Simulation"
          ].map((tech) => (
            <span key={tech} className="text-sm uppercase tracking-wider bg-sage/10 text-sage px-5 py-2.5 rounded-full border border-sage/20 font-medium hover:bg-sage/20 transition-colors">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Key Metrics */}
      <section className="flex flex-col gap-12 pb-24">
        <h3 className="text-xs uppercase tracking-[0.3em] text-sage font-bold flex items-center gap-3 border-b border-sage/10 pb-6">
          <BarChart3 className="w-5 h-5" /> Simulation Metrics
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Synthetic Citizens", val: "10,000 generative agents with unique behavioral profiles and daily routines." },
            { label: "Service Coverage", val: "17,042 active 311 requests tracked across Toronto's 25 municipal wards." },
            { label: "Response Target", val: "80.9% service level maintained with 4.2-day average response time across all categories." },
            { label: "GPU Inference", val: "All anomaly detection, forecasting, and NIM triage running locally on a single DGX Spark." },
          ].map((stat, i) => (
            <div key={i} className="p-8 bg-sage/5 border border-sage/10 rounded-[2rem] hover:bg-sage/10 transition-all duration-500 group">
              <p className="text-xs uppercase tracking-widest text-sage font-bold mb-4 italic group-hover:translate-x-1 transition-transform">{stat.label}</p>
              <p className="text-lg text-accent-cream/80 font-light leading-snug">{stat.val}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

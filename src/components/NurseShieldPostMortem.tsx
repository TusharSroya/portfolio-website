"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, AlertTriangle, Lightbulb, Clock, Shield, Brain, X, ZoomIn, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NurseShieldPostMortem() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const galleryItems = [
    { tag: "Slide 1", title: "The Entry Point", desc: "Showcases the clean, professional 'NurseShield' login. It establishes the brand as a 'Workforce Operations Platform.'", img: "/nurseshield/slide1.png" },
    { tag: "Slide 2", title: "The Nurse's Reality", desc: "The Bedside Nurse Dashboard. Highlights the 'Shift Timer' and 'Staff Requests' features that were central to the initial hypothesis.", img: "/nurseshield/slide2.png" },
    { tag: "Slide 3", title: "The AI Wedge", desc: "The 'Shift Recovery' screen. Shows how the app attempted to turn a stream of consciousness into a structured timeline.", img: "/nurseshield/slide3.png" },
    { tag: "Slide 4", title: "The Manager's View", desc: "The Charge Nurse Dashboard. This displays the 'Behavioral Load' and 'Emotional Labor' metrics, a bold attempt to quantify nurse well-being.", img: "/nurseshield/slide4.png" },
    { tag: "Slide 5", title: "The 'Aha' Moment", desc: "The Shift Recovery Notes modal. This is where the 'too many questions' feedback originated, marking the turning point of the project.", img: "/nurseshield/slide5.png" },
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
      
      {/* Aesthetic Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[10%] -left-64 w-[500px] h-[500px] bg-sage/5 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] -right-64 w-[600px] h-[600px] bg-sage/5 rounded-full blur-[150px]" />
      </div>

      {/* Lightbox Overlay */}
      {selectedIdx !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          onClick={() => setSelectedIdx(null)}
        >
          <button 
            className="absolute top-8 right-8 text-sage hover:text-accent-cream transition-colors p-2 z-[110]"
            onClick={() => setSelectedIdx(null)}
          >
            <X className="w-8 h-8" />
          </button>

          {/* Nav Buttons */}
          <button 
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-sage/40 hover:text-accent-cream transition-colors p-4 z-[110]"
            onClick={handlePrev}
          >
            <ChevronLeft className="w-10 h-10 md:w-16 md:h-16" />
          </button>
          <button 
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-sage/40 hover:text-accent-cream transition-colors p-4 z-[110]"
            onClick={handleNext}
          >
            <ChevronRight className="w-10 h-10 md:w-16 md:h-16" />
          </button>

          <div className="max-w-5xl w-full flex flex-col gap-8 animate-in fade-in zoom-in duration-300 items-center">
            <div className="relative w-full group/full shadow-2xl rounded-2xl overflow-hidden border border-sage/20 bg-black/40">
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

      {/* Portfolio Gallery: The Prototype */}
      <section className="flex flex-col gap-16">
        <div className="flex flex-col gap-4">
          <h3 className="text-xs uppercase tracking-[0.3em] text-sage font-bold border-b border-sage/20 pb-4 max-w-xs">Portfolio Gallery: The Prototype</h3>
          <p className="text-accent-cream/60 max-w-2xl mt-2 text-lg">Click to explore the visual design and core interactions of the NurseShield platform.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {galleryItems.map((item, i) => (
            <div key={i} className="group flex flex-col gap-6 p-10 bg-sage/5 border border-sage/10 rounded-[2.5rem] hover:bg-sage/10 hover:border-sage/30 transition-all duration-700 shadow-xl hover:shadow-sage/5 relative overflow-hidden">
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
                  variants={{
                    idle: { opacity: 0 },
                    active: { opacity: 1 }
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-sage/5 flex items-center justify-center backdrop-blur-[2px]"
                >
                   <motion.div 
                     variants={{
                       idle: { y: 24 },
                       active: { y: 0 }
                     }}
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

      {/* Project Demo Video (Now lower, under gallery) */}
      <section className="flex flex-col gap-16">
        <div className="flex flex-col gap-4">
          <h3 className="text-xs uppercase tracking-[0.3em] text-sage font-bold border-b border-sage/20 pb-4 max-w-xs flex items-center gap-2">
            <Play className="w-4 h-4" /> Feature Demo
          </h3>
          <p className="text-accent-cream/60 max-w-2xl mt-2 text-lg">A visual walkthrough of the AI-powered shift recovery and workforce coordination features.</p>
        </div>
        <div className="w-full bg-sage/5 border border-sage/20 rounded-[3rem] p-4 md:p-8 flex items-center justify-center relative overflow-hidden shadow-2xl group">
          <div className="absolute inset-0 bg-gradient-to-br from-sage/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <video
            src="/nurseshield-demo-trimmed.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover rounded-[2rem] shadow-2xl border border-sage/10 relative z-10"
          />
        </div>
      </section>

      {/* Post-Mortem Context Header */}
      <div className="flex flex-col gap-6 text-center max-w-4xl mx-auto py-12">
        <h2 className="text-5xl md:text-7xl font-serif text-accent-cream leading-tight">
          Project Post-Mortem
        </h2>
        <p className="text-xl md:text-2xl text-accent-cream/60 font-light italic">
          Why "perfect" software doesn&apos;t always solve a systemic crisis.
        </p>
      </div>

      {/* Timeline */}
      <section className="flex flex-col gap-16">
        <h3 className="text-xs uppercase tracking-[0.3em] text-sage font-bold border-b border-sage/20 pb-4 max-w-xs flex items-center gap-2">
          <Clock className="w-4 h-4" /> The Narrative Path
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { date: "Jan 19, 2026", phase: "Problem Hunting", desc: "Narrowed focus to healthcare after realizing the physical and mental toll on frontline nurses. Validated the 'Invisible Work' gap." },
            { date: "Feb 2, 2026", phase: "Clinical Deep-Dive", desc: "Interviews with ED nurses confirmed that 20.7% of critical documentation occurs outside scheduled hours." },
            { date: "Feb 16, 2026", phase: "MVP Build", desc: "Built a functional AI-powered prototype to turn stream-of-consciousness inputs into structured logs." },
            { date: "March 2026", phase: "The Hard Stop", desc: "Chose to drop the standalone model after realizing the product faced a Micromanagement Paradox.", isDrop: true }
          ].map((item, i) => (
            <div key={i} className={`p-8 rounded-3xl border ${item.isDrop ? 'bg-red-950/20 border-red-900/30' : 'bg-sage/5 border-sage/10'} flex flex-col gap-6 relative overflow-hidden group hover:bg-sage/10 transition-all duration-500`}>
              <span className={`text-xs font-bold tracking-[0.2em] uppercase ${item.isDrop ? 'text-red-400' : 'text-sage'}`}>{item.date}</span>
              <h4 className="text-xl font-serif text-accent-cream">{item.phase}</h4>
              <p className="text-base text-accent-cream/70 leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Drop: Software vs Systemic Crisis */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 pb-16">
        <div className="md:col-span-5 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
             <h3 className="text-xs uppercase tracking-[0.3em] text-sage font-bold flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-red-400" /> The Decision to Pivot
            </h3>
            <h2 className="text-4xl md:text-5xl font-serif text-accent-cream leading-tight mt-4">
              Not every crisis has a software solution.
            </h2>
          </div>
          <p className="text-xl text-accent-cream/60 font-light leading-relaxed">The project was halted not due to technical failure, but due to a deeper understanding of the healthcare ecosystem.</p>
        </div>
        <div className="md:col-span-7 flex flex-col gap-12">
          <div className="flex gap-6 group">
            <div className="text-3xl font-serif text-sage/30 group-hover:text-sage transition-colors duration-500">01</div>
            <div>
              <h4 className="text-2xl font-serif mb-4 text-accent-cream">The Micromanagement Paradox</h4>
              <p className="text-lg text-accent-cream/75 leading-relaxed font-light">While the tool protected nurses by documenting their "invisible work," users feared it would become a surveillance tool for management. In an environment where trust is already fractured, adding a tracking layer felt like the "wrong time."</p>
            </div>
          </div>
          
          <div className="flex gap-6 group">
            <div className="text-3xl font-serif text-sage/30 group-hover:text-sage transition-colors duration-500">02</div>
            <div>
              <h4 className="text-2xl font-serif mb-4 text-accent-cream italic">Software vs. Systemic Crisis</h4>
              <p className="text-lg text-accent-cream/75 leading-relaxed font-light">Systemic issues like <strong className="font-semibold text-accent-cream">understaffing and shift gaps</strong> are structural failures that cannot be "fixed" by an emotional offloading application. The primary solution to burnout is more nurses, not better code. Nurses were skeptical that any standalone software could solve the root resource problem.</p>
            </div>
          </div>

          <div className="mt-8 p-10 bg-red-950/10 border-l-4 border-red-500/50 rounded-r-[2rem] shadow-xl relative overflow-hidden group">
               <div className="absolute inset-0 bg-red-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
               <p className="text-2xl font-serif italic text-accent-cream/90 leading-relaxed relative z-10">
                "Some problems are systemic crises that software can only bandage. This solution belongs as a native, invisible feature within EHRs like Epic or Meditech, rather than a separate platform."
              </p>
          </div>
        </div>
      </section>

      {/* Summary: AI Potential */}
      <section className="flex flex-col gap-12 pb-24">
        <h3 className="text-xs uppercase tracking-[0.3em] text-sage font-bold flex items-center gap-3 border-b border-sage/10 pb-6">
          <Shield className="w-5 h-5" /> Product Outcome & Strategic Potential
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Critical Pain", val: "79% of nurses report chronic stress overload due to undocumented labor." },
            { label: "AI Potential", val: "Reclaiming 2-3 administrative hours daily via ambient recovery tools." },
            { label: "Strategic Oversight", val: "Empowering managers to identify burnout patterns and reduce turnover before it occurs." },
            { label: "Final Verdict", val: "Pivot to Feature. Valid technology, wrong delivery model for a standalone app." }
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

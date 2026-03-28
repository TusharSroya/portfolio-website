"use client";

import { portfolioData } from "@/data/portfolio";
import { ArrowLeft, Lightbulb, Target, Settings, BarChart } from "lucide-react";
import Link from "next/link";
import { PortfolioTabs } from "@/components/NavigationTabs";
import NurseShieldPostMortem from "@/components/NurseShieldPostMortem";

export default function NurseShieldPage() {
  const project = portfolioData.nurseshield;

  return (
    <main className="min-h-screen bg-background text-accent-cream flex flex-col">
      {/* Navigation */}
      <nav className="w-full px-6 py-6 md:px-8 md:py-8 flex justify-between items-center z-10 max-w-7xl mx-auto border-b border-sage/10 relative gap-4">
        <div className="flex items-center gap-4 md:gap-6">
          <Link
            href="/"
            className="group flex items-center gap-2 text-[10px] md:text-sm tracking-widest uppercase font-medium text-sage hover:text-accent-cream transition-colors whitespace-nowrap"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="hidden xs:inline">Back to Home</span>
            <span className="xs:hidden">Home</span>
          </Link>
          <a
            href="https://nurseshield.lovable.app/auth"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-bold text-accent-cream bg-sage/20 px-4 py-2 rounded-full border border-sage/30 hover:bg-sage/30 transition-all"
          >
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            View Live App
          </a>
        </div>
        <div className="flex">
          <PortfolioTabs />
        </div>
      </nav>

      {/* Hero Section */}
      <article className="max-w-6xl mx-auto w-full px-6 md:px-8 py-12 md:py-20 flex flex-col gap-16 md:gap-24 font-light text-lg leading-relaxed">
        
        {/* Header */}
        <header className="flex flex-col gap-8">
          <div className="flex gap-4 flex-wrap">
            {project.tags.map(tag => (
              <span key={tag} className="text-xs uppercase tracking-widest bg-sage/10 text-sage px-4 py-1.5 rounded-full border border-sage/20 font-medium">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-5xl md:text-8xl font-serif text-accent-cream leading-[1.05] tracking-tight">
            {project.title}
          </h1>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 mt-4 border-l-2 border-sage/30 pl-6 md:pl-8 relative">
            <div className="flex flex-col gap-2">
              <p className="text-xs uppercase tracking-widest text-sage/70 font-semibold italic">Core Role</p>
              <p className="text-xl font-medium">{project.role}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs uppercase tracking-widest text-sage/70 font-semibold italic">Chronology</p>
              <p className="text-xl font-medium">{project.timeline}</p>
            </div>
            
            <div className="md:ml-auto flex items-center">
              <a
                href="https://nurseshield.lovable.app/auth"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-sage/10 text-sage hover:text-accent-cream px-6 py-3 rounded-full border border-sage/20 hover:border-sage/40 transition-all font-semibold tracking-wide"
              >
                View Live Prototype
                <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </header>

        {/* 1. The Vision Section */}
        <section className="bg-sage/5 rounded-3xl md:rounded-[3rem] p-6 md:p-16 border border-sage/10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sage/5 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2 group-hover:bg-sage/10 transition-colors" />
          
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4 max-w-3xl">
              <h2 className="text-sm uppercase tracking-[0.3em] text-sage font-bold flex items-center gap-3">
                <Lightbulb className="w-5 h-5" /> The Vision
              </h2>
              <p className="text-xl md:text-3xl font-serif text-accent-cream leading-tight">
                Reducing cognitive overload in environments where time is a luxury that nurses cannot afford.
              </p>
            </div>

            <p className="text-lg md:text-2xl text-accent-cream/70 leading-relaxed font-light">
              The goal was to focus on <span className="text-accent-cream font-medium italic">mental recovery</span> rather than simple efficiency. Instead of fighting strict industry regulations that make reducing charting times nearly impossible, NurseShield aimed to provide nurse managers with transparency into the real-time cognitive and stress overload of their staff.
            </p>

            {/* Sub-sections: Challenge, Process, Impact (Moved under Vision) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-8 md:pt-12 border-t border-sage/10">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-sage mb-2">
                  <Target className="w-5 h-5" />
                  <h3 className="text-xs uppercase tracking-widest font-bold">The Challenge</h3>
                </div>
                <p className="text-base text-accent-cream/80 leading-relaxed">{project.problem}</p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-sage mb-2">
                  <Settings className="w-5 h-5" />
                  <h3 className="text-xs uppercase tracking-widest font-bold">The Process</h3>
                </div>
                <p className="text-base text-accent-cream/80 leading-relaxed">{project.process}</p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-sage mb-2">
                  <BarChart className="w-5 h-5" />
                  <h3 className="text-xs uppercase tracking-widest font-bold">The Impact</h3>
                </div>
                <p className="text-base text-accent-cream/90 font-medium leading-relaxed">{project.impact}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Portfolio Gallery & Video Section */}
        <NurseShieldPostMortem />

      </article>
    </main>
  );
}

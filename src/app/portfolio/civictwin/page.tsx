"use client";

import { portfolioData } from "@/data/portfolio";
import { ArrowLeft, Lightbulb, Target, Settings, BarChart, Github } from "lucide-react";
import Link from "next/link";
import { PortfolioTabs } from "@/components/NavigationTabs";
import CivicTwinShowcase from "@/components/CivicTwinShowcase";

export default function CivicTwinPage() {
  const project = portfolioData.civictwin;

  return (
    <main className="min-h-screen bg-background text-accent-cream flex flex-col">
      {/* Navigation */}
      <nav className="w-full px-6 py-6 md:px-8 md:py-8 flex flex-col md:flex-row justify-between items-center z-10 max-w-7xl mx-auto border-b border-sage/10 relative gap-6 md:gap-4 text-center md:text-left">
        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
          <Link
            href="/"
            className="group flex items-center gap-2 text-[10px] md:text-sm tracking-widest uppercase font-medium text-sage hover:text-accent-cream transition-colors whitespace-nowrap"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
          <a
            href="https://github.com/TusharSroya/NvidiaHackathon"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-bold text-accent-cream bg-sage/20 px-4 py-2 rounded-full border border-sage/30 hover:bg-sage/30 transition-all scale-90 sm:scale-100"
          >
            <Github className="w-3.5 h-3.5" />
            View Source
          </a>
        </div>
        <div className="flex scale-90 sm:scale-100 origin-center md:origin-right">
          <div className="md:hidden">
            <PortfolioTabs forceShowLabels={true} />
          </div>
          <div className="hidden md:block">
            <PortfolioTabs forceShowLabels={false} />
          </div>
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
                href="https://github.com/TusharSroya/NvidiaHackathon"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-sage/10 text-sage hover:text-accent-cream px-6 py-3 rounded-full border border-sage/20 hover:border-sage/40 transition-all font-semibold tracking-wide"
              >
                View on GitHub
                <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </header>

        {/* The Vision */}
        <section className="bg-sage/5 rounded-3xl md:rounded-[3rem] p-6 md:p-16 border border-sage/10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sage/5 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2 group-hover:bg-sage/10 transition-colors" />

          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4 max-w-3xl">
              <h2 className="text-sm uppercase tracking-[0.3em] text-sage font-bold flex items-center gap-3">
                <Lightbulb className="w-5 h-5" /> The Vision
              </h2>
              <p className="text-xl md:text-3xl font-serif text-accent-cream leading-tight">
                A digital twin that lets cities stress-test their 311 systems before real crises hit.
              </p>
            </div>

            <p className="text-lg md:text-2xl text-accent-cream/70 leading-relaxed font-light">
              CivicTwin Spark is an <span className="text-accent-cream font-medium italic">agentic urban simulation sandbox</span> that generates 10,000 synthetic citizens with realistic behavioral profiles — running them through a spatial-temporal digital twin of Toronto to forecast 311 demand, auto-triage complaints, and produce AI morning briefings for city operations teams.
            </p>

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

        {/* Hero Image */}
        <div className="w-full bg-sage/5 border border-sage/20 rounded-[3rem] p-4 md:p-8 flex items-center justify-center relative overflow-hidden shadow-2xl group">
          <div className="absolute inset-0 bg-gradient-to-br from-sage/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <img
            src="/civictwin/dashboard.png"
            alt="CivicTwin 311 Forecaster Dashboard"
            className="w-full h-auto object-cover rounded-[2rem] shadow-2xl border border-sage/10 relative z-10"
          />
        </div>

        {/* Full Showcase */}
        <CivicTwinShowcase />

      </article>
    </main>
  );
}

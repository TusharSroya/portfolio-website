"use client";

import { portfolioData } from "@/data/portfolio";
import { ArrowLeft, Lightbulb, Target, Settings, BarChart } from "lucide-react";
import Link from "next/link";
import { PortfolioTabs } from "@/components/NavigationTabs";
import dynamic from "next/dynamic";
import { EnkindlVoiceOrbHero } from "@/components/EnkindlClickThrough";

const EnkindlClickThrough = dynamic(() => import("@/components/EnkindlClickThrough"), { ssr: false });

export default function EnkindlPage() {
  const project = portfolioData.enkindl;

  return (
    <main className="min-h-screen bg-background text-accent-cream flex flex-col">
      {/* Navigation */}
      <nav className="w-full px-6 py-6 md:px-8 md:py-8 flex flex-col md:flex-row justify-between items-center z-10 max-w-7xl mx-auto border-b border-sage/10 relative gap-6 md:gap-4 text-center md:text-left">
        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
          <Link href="/" className="group flex items-center gap-2 text-[10px] md:text-sm tracking-widest uppercase font-medium text-sage hover:text-accent-cream transition-colors whitespace-nowrap">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
        </div>
        <div className="flex scale-90 sm:scale-100 origin-center md:origin-right">
          <div className="md:hidden"><PortfolioTabs forceShowLabels={true} /></div>
          <div className="hidden md:block"><PortfolioTabs forceShowLabels={false} /></div>
        </div>
      </nav>

      <article className="max-w-6xl mx-auto w-full px-6 md:px-8 py-12 md:py-20 flex flex-col gap-16 md:gap-24 font-light text-lg leading-relaxed">

        {/* Header */}
        <header className="flex flex-col gap-8">
          <div className="flex gap-4 flex-wrap">
            {project.tags.map(tag => (
              <span key={tag} className="text-xs uppercase tracking-widest bg-sage/10 text-sage px-4 py-1.5 rounded-full border border-sage/20 font-medium">{tag}</span>
            ))}
          </div>
          <div className="flex items-center gap-6 md:gap-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/enkindl/app-icon.svg"
              alt="Enkindl app icon"
              className="w-20 h-20 md:w-32 md:h-32 rounded-[18px] md:rounded-[28px] shadow-lg flex-shrink-0"
              style={{ boxShadow: "0 8px 32px rgba(74,46,31,0.25), 0 2px 8px rgba(74,46,31,0.15)" }}
            />
            <div className="flex flex-col gap-3">
              <h1 className="text-5xl md:text-8xl font-serif text-accent-cream leading-[1.05] tracking-tight">
                {project.title}
              </h1>
              <p className="text-lg md:text-2xl text-accent-cream/60 font-light max-w-2xl" style={{ fontStyle: "italic" }}>
                Learn the language your family speaks. Not the textbook version.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 mt-4 border-l-2 border-sage/30 pl-6 md:pl-8 relative">
            <div className="flex flex-col gap-2">
              <p className="text-xs uppercase tracking-widest text-sage/70 font-semibold italic">Core Role</p>
              <p className="text-xl font-medium">{project.role}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs uppercase tracking-widest text-sage/70 font-semibold italic">Chronology</p>
              <p className="text-xl font-medium">{project.timeline}</p>
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
                A grandmother&apos;s voice, slowed down for you.
              </p>
            </div>
            <p className="text-lg md:text-2xl text-accent-cream/70 leading-relaxed font-light">
              Enkindl teaches <span className="text-accent-cream font-medium italic">Eelam Tamil</span> and <span className="text-accent-cream font-medium italic">Household Punjabi</span> through voice conversation with on-device AI. The whole point is joining a family dinner. It coaches you on register, honorifics, and the specific dialect your family actually speaks at home.
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

        {/* Interactive Click-Through */}
        <section className="flex flex-col gap-12 items-center">
          <div className="flex flex-col gap-4 text-center max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif text-accent-cream leading-tight">
              Try it yourself.
            </h2>
            <p className="text-lg text-accent-cream/60 font-light">
              An interactive walkthrough of the Enkindl iOS app. Navigate through the home screen, lesson stages, conversation view, and feedback.
            </p>
          </div>
          <div className="w-full flex justify-center overflow-x-auto py-4">
            <EnkindlClickThrough />
          </div>
        </section>

        {/* Voice Orb */}
        <section className="bg-[#14100B] rounded-3xl md:rounded-[3rem] p-8 md:p-16 border border-sage/10 relative overflow-hidden flex flex-col items-center gap-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,178,97,0.06)_0%,transparent_60%)]" />
          <div className="relative z-10 flex flex-col items-center gap-6">
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-[#F4B261]/70">The Voice Orb</p>
            <p className="text-accent-cream/50 text-center max-w-md text-base">
              The only animation that never stops. It breathes at 3.2 seconds. Try switching between states.
            </p>
          </div>
          <div className="relative z-10">
            <EnkindlVoiceOrbHero />
          </div>
        </section>

        {/* Design Philosophy */}
        <section className="flex flex-col gap-16 border-t border-sage/10 pt-16">
          <div className="flex flex-col gap-4">
            <h3 className="text-xs uppercase tracking-[0.3em] text-sage font-bold border-b border-sage/20 pb-4 max-w-xs">Design Philosophy</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl font-serif text-accent-cream">The product never shouts</h4>
              <p className="text-accent-cream/70 leading-relaxed">There are no XP bars, no leaderboards. Enkindl uses lessons, stages, and real life moments. You get praised for sounding like your aunt, for nailing the right register. Speed is irrelevant.</p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl font-serif text-accent-cream">Your grandmother&apos;s dialect</h4>
              <p className="text-accent-cream/70 leading-relaxed">Standard Tamil and what your family speaks at dinner are different languages in practice. Enkindl teaches the Eelam form, the soft &quot;ohm&quot; for yes, the conservative Jaffna register, the honorific patterns that actually matter when you sit down with family.</p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl font-serif text-accent-cream">Everything stays on your phone</h4>
              <p className="text-accent-cream/70 leading-relaxed">The whole learning loop runs on the iPhone. Voice capture, analysis, coaching, progress. No internet required. Your voice data never leaves the device.</p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl font-serif text-accent-cream">It tells you where to put your tongue</h4>
              <p className="text-accent-cream/70 leading-relaxed">Enkindl gives you physical instructions. Curl the tip back toward the hard palate for the retroflex. Let the long vowel breathe. That&apos;s how you actually learn pronunciation, through your mouth, through repetition.</p>
            </div>
          </div>
        </section>

        {/* Tech tags */}
        <section className="flex flex-col gap-8 pb-24">
          <h3 className="text-xs uppercase tracking-[0.3em] text-sage font-bold border-b border-sage/20 pb-4 max-w-xs">Built With</h3>
          <div className="flex flex-wrap gap-3">
            {["SwiftUI", "On-Device ML", "Speech Recognition", "RAG Pipeline", "Articulatory Phonetics", "Local-First Architecture"].map(tech => (
              <span key={tech} className="text-sm uppercase tracking-wider bg-sage/10 text-sage px-5 py-2.5 rounded-full border border-sage/20 font-medium hover:bg-sage/20 transition-colors">{tech}</span>
            ))}
          </div>
        </section>

      </article>
    </main>
  );
}

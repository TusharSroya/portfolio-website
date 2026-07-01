"use client";

import { portfolioData } from "@/data/portfolio";
import { ArrowLeft, Lightbulb, Target, Settings, BarChart, ExternalLink, Users, Zap, Brain, Layers, Trophy, Sliders, Swords, Package } from "lucide-react";
import Link from "next/link";
import { PortfolioTabs } from "@/components/NavigationTabs";
import { motion } from "framer-motion";

export default function PricePlayoffsPage() {
  const project = portfolioData.priceplayoffs;

  const rounds = [
    {
      icon: Sliders,
      round: "Round 1",
      title: "Set Your Launch Price",
      desc: "20 simulated customers, each with a willingness to pay. Drag the slider, watch the avatar grid turn green as customers convert. Revenue, margin, and coverage update as you move.",
    },
    {
      icon: Swords,
      round: "Round 2",
      title: "A Competitor Arrives",
      desc: "A competitor (AI picks the name) shows up at 80% of your price. Hold your ground, drop to match, or add a feature. You lose customers, keep customers, or squeeze your margin. Pick one.",
    },
    {
      icon: Package,
      round: "Round 3",
      title: "Build Your Tiers",
      desc: "Design Basic, Pro, and Premium tiers. Pick features from the AI-calibrated set. The game projects revenue across customer segments and locks in your final score.",
    },
  ];

  const techStack = [
    "TanStack Start",
    "React 19",
    "Vite 7",
    "Gemini Flash",
    "Zod",
    "localStorage Sync",
    "QR Join Codes",
  ];

  return (
    <main className="min-h-screen bg-background text-accent-cream flex flex-col">
      {/* Navigation */}
      <nav className="w-full px-6 py-6 md:px-8 md:py-8 flex flex-col md:flex-row justify-between items-center z-10 max-w-7xl mx-auto border-b border-sage/10 relative gap-6 md:gap-4 text-center md:text-left">
        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
          <Link href="/" className="group flex items-center gap-2 text-[10px] md:text-sm tracking-widest uppercase font-medium text-sage hover:text-accent-cream transition-colors whitespace-nowrap">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
          <a
            href="https://priceplayoffs.lovable.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-bold text-accent-cream bg-sage/20 px-4 py-2 rounded-full border border-sage/30 hover:bg-sage/30 transition-all scale-90 sm:scale-100"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Play Live
          </a>
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
          <div className="flex flex-col gap-3">
            <h1 className="text-5xl md:text-8xl font-serif text-accent-cream leading-[1.05] tracking-tight">
              {project.title}
            </h1>
            <p className="text-lg md:text-2xl text-accent-cream/60 font-light max-w-2xl" style={{ fontStyle: "italic" }}>
              Students play startup founders. An AI builds their market. Three rounds, one projected leaderboard.
            </p>
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
            <div className="flex flex-col gap-2">
              <p className="text-xs uppercase tracking-widest text-sage/70 font-semibold italic">Program</p>
              <p className="text-xl font-medium">Schulich PMC</p>
            </div>
            <div className="md:ml-auto flex items-center">
              <a
                href="https://priceplayoffs.lovable.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-sage/10 text-sage hover:text-accent-cream px-6 py-3 rounded-full border border-sage/20 hover:border-sage/40 transition-all font-semibold tracking-wide"
              >
                Try the Game
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
                The best way to understand pricing is to set one and watch what happens.
              </p>
            </div>
            <p className="text-lg md:text-2xl text-accent-cream/70 leading-relaxed font-light">
              Each team describes their startup. An AI generates a full market: customer willingness to pay, margin rates, competitor names, product features. Then three rounds of live decisions where teams set prices, respond to competitors, and build tiered packaging. The leaderboard is projected. Everyone can see who&apos;s winning and why.
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

        {/* Event Photos */}
        <section className="flex flex-col gap-8">
          <h2 className="text-sm uppercase tracking-[0.3em] text-sage font-bold">First Session at Schulich</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-sage/5 border border-sage/20 rounded-3xl p-4 md:p-6 overflow-hidden group">
              <img
                src="/priceplayoffs/presenting.jpg"
                alt="Tushar presenting the Pricing Blueprint game to Schulich PMC students with the Game Master dashboard projected"
                className="w-full h-auto object-cover rounded-2xl shadow-xl border border-sage/10"
              />
              <p className="text-sm text-accent-cream/50 mt-4 text-center">Running the session as Game Master with the lobby projected to the room</p>
            </div>
            <div className="bg-sage/5 border border-sage/20 rounded-3xl p-4 md:p-6 overflow-hidden group">
              <img
                src="/priceplayoffs/leaderboard.jpg"
                alt="Student laptop showing the Pricing Blueprint leaderboard with team scores"
                className="w-full h-auto object-cover rounded-2xl shadow-xl border border-sage/10"
              />
              <p className="text-sm text-accent-cream/50 mt-4 text-center">The Insight Board ranking teams by revenue, coverage, and margin</p>
            </div>
          </div>
        </section>

        {/* How It Works — 3 Rounds */}
        <section className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <h2 className="text-sm uppercase tracking-[0.3em] text-sage font-bold flex items-center gap-3">
              <Layers className="w-5 h-5" /> How It Works
            </h2>
            <p className="text-xl md:text-2xl font-serif text-accent-cream leading-tight max-w-2xl">
              The whole game runs in 20 minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rounds.map((r, i) => (
              <motion.div
                key={r.round}
                className="bg-sage/5 border border-sage/15 rounded-2xl p-8 flex flex-col gap-5 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sage/15 flex items-center justify-center">
                    <r.icon className="w-5 h-5 text-sage" />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-sage font-bold">{r.round}</span>
                </div>
                <h3 className="text-xl font-serif text-accent-cream">{r.title}</h3>
                <p className="text-accent-cream/70 text-base leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Key Design Decisions */}
        <section className="flex flex-col gap-16 border-t border-sage/10 pt-16">
          <div className="flex flex-col gap-4">
            <h3 className="text-xs uppercase tracking-[0.3em] text-sage font-bold border-b border-sage/20 pb-4 max-w-xs">Design Decisions</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-sage mb-1">
                <Brain className="w-5 h-5" />
                <h4 className="text-2xl font-serif text-accent-cream">The AI does the setup</h4>
              </div>
              <p className="text-accent-cream/70 leading-relaxed">Each team writes a product description. The AI returns willingness to pay, margin rates, eight features, and a competitor name. The instructor just clicks &quot;Begin Round.&quot;</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-sage mb-1">
                <Users className="w-5 h-5" />
                <h4 className="text-2xl font-serif text-accent-cream">No backend, no accounts</h4>
              </div>
              <p className="text-accent-cream/70 leading-relaxed">All state lives in localStorage, synced across tabs with polling. Students scan a QR code, type a team name, and they&apos;re playing. No sign ups, no database, nothing to maintain between semesters.</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-sage mb-1">
                <Trophy className="w-5 h-5" />
                <h4 className="text-2xl font-serif text-accent-cream">Scoring drives the debrief</h4>
              </div>
              <p className="text-accent-cream/70 leading-relaxed">Final scores weight revenue (40%), customer coverage (30%), and margin (30%). Each team gets a narrative line explaining what their strategy actually did. The class discussion starts from the scoreboard.</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-sage mb-1">
                <Zap className="w-5 h-5" />
                <h4 className="text-2xl font-serif text-accent-cream">Fits in one class</h4>
              </div>
              <p className="text-accent-cream/70 leading-relaxed">Three rounds, a winner, and a debrief. The whole thing takes about 20 minutes. Students leave having actually made pricing decisions instead of reading about them.</p>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="flex flex-col gap-8 pb-24">
          <h3 className="text-xs uppercase tracking-[0.3em] text-sage font-bold border-b border-sage/20 pb-4 max-w-xs">Built With</h3>
          <div className="flex flex-wrap gap-3">
            {techStack.map(tech => (
              <span key={tech} className="text-sm uppercase tracking-wider bg-sage/10 text-sage px-5 py-2.5 rounded-full border border-sage/20 font-medium hover:bg-sage/20 transition-colors">{tech}</span>
            ))}
          </div>
        </section>

      </article>
    </main>
  );
}

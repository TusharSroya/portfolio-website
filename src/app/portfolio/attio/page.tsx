"use client";

import { ArrowLeft, Construction, Rocket, Clock } from "lucide-react";
import Link from "next/link";
import { PortfolioTabs } from "@/components/NavigationTabs";
import { motion } from "framer-motion";

export default function AttioComingSoon() {
  return (
    <main className="min-h-screen bg-background text-accent-cream flex flex-col">
      {/* Navigation */}
      <nav className="w-full px-6 py-6 md:px-8 md:py-8 flex flex-col md:flex-row justify-between items-center z-10 max-w-7xl mx-auto border-b border-sage/10 relative gap-6 md:gap-4 text-center md:text-left">
        <Link
          href="/"
          className="group flex items-center gap-2 text-[10px] md:text-sm tracking-widest uppercase font-medium text-sage hover:text-accent-cream transition-colors whitespace-nowrap"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>
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
      <section className="flex-1 flex flex-col items-center justify-center px-6 md:px-8 text-center relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sage/5 rounded-full blur-3xl -z-10 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sage/10 rounded-full blur-3xl -z-10 animate-pulse delay-700" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-8 max-w-2xl"
        >
          <div className="w-20 h-20 bg-sage/10 rounded-2xl flex items-center justify-center border border-sage/30 mb-4">
            <Construction className="w-10 h-10 text-sage animate-bounce" />
          </div>

          <h1 className="text-4xl md:text-7xl font-serif text-accent-cream leading-tight">
            Attio CRM <br />
            <span className="italic text-sage/80 font-light">Coming Soon</span>
          </h1>

          <div className="flex flex-col gap-6 text-lg md:text-xl text-accent-cream/70 font-light leading-relaxed">
            <p>
              This case study is currently <span className="text-sage font-medium">in progress</span>. I&apos;m polishing the documentation to best showcase the CRM architecture and operations strategy.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex items-center gap-3 px-6 py-3 bg-sage/5 border border-sage/20 rounded-full text-sage text-sm font-medium tracking-wide">
              <Rocket className="w-4 h-4" />
              Launching Q2 2026
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-sage/5 border border-sage/20 rounded-full text-sage text-sm font-medium tracking-wide">
              <Clock className="w-4 h-4" />
              Processing Metrics
            </div>
          </div>

          <Link
            href="/#work"
            className="mt-12 group flex items-center gap-3 bg-accent-cream text-primary-green px-6 py-3 md:px-10 md:py-4 rounded-full font-semibold hover:brightness-110 transition-all transform hover:scale-105"
          >
            Explore Other Projects
            <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>

      {/* Subtle Bottom Pattern */}
      <div className="h-24 w-full bg-gradient-to-t from-sage/5 to-transparent pointer-events-none" />
    </main>
  );
}

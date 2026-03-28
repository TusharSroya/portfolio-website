import { AnimatedBackground } from "@/components/AnimatedBackground";
import { AnimatedRibbon } from "@/components/AnimatedRibbon";
import { Capabilities } from "@/components/Capabilities";
import { SelectedWorks } from "@/components/SelectedWorks";
import { Contact } from "@/components/Contact";
import { ArrowRight } from "lucide-react";
import { HomeTabs } from "@/components/NavigationTabs";
import { LandingScreen } from "@/components/LandingScreen";

export default function Home() {
  return (
    <main className="w-full flex flex-col bg-background relative">
      <LandingScreen />
      {/* HERO WRAPPER - Encapsulates the top section */}
      <div className="relative w-full min-h-screen flex flex-col">
        {/* Navigation - Solid background ensures it stays visually separated from the pattern */}
        <nav className="w-full px-6 py-6 md:px-8 md:py-8 flex justify-between items-center z-20 max-w-7xl mx-auto relative bg-background">
          <span className="text-xl md:text-3xl font-serif tracking-wide text-accent-cream uppercase">
            Tushar Sroya
          </span>
          <div className="flex">
            <HomeTabs />
          </div>
        </nav>

        {/* Hero Section Container for the pattern and text */}
        <section className="flex-1 flex flex-col justify-center px-8 z-10 w-full relative overflow-hidden">
          <AnimatedBackground />
          <div className="max-w-7xl mx-auto w-full pt-10 pb-32 relative z-10 pointer-events-none">
            <div className="max-w-4xl pointer-events-auto">
              <h2 className="text-sage text-sm md:text-base uppercase tracking-[0.2em] mb-6 font-semibold">
                Tech MBA & Product Manager
              </h2>
              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif text-accent-cream leading-[1.1] mb-8">
                I build systems that <span className="italic text-sage/90">scale with people.</span>
              </h1>
              <p className="text-lg md:text-xl text-accent-cream/80 max-w-2xl font-light leading-relaxed mb-12">
                Aspiring Product Manager turning messy, real-world problems into structured, scalable solutions. Currently focused on building HealthTech products that make people&apos;s lives easier, not harder.
              </p>

              <div className="flex items-center gap-8">
                <a
                  href="#work"
                  className="group flex items-center gap-2 bg-accent-cream text-primary-green px-8 py-4 rounded-full font-semibold hover:brightness-110 transition-all transform hover:scale-105"
                >
                  Explore My Work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="text-accent-cream/80 hover:text-accent-cream text-sm uppercase tracking-widest font-semibold transition-colors"
                >
                  Let&apos;s Connect
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Subsequent sections flow seamlessly without border separation */}
      <Capabilities />

      {/* Decorative Ribbon Transition */}
      <div className="w-full h-64 md:h-96 relative overflow-hidden bg-background">
        <AnimatedRibbon />
      </div>

      <SelectedWorks />
      
      {/* Decorative Ribbon Transition */}
      <div className="w-full h-64 md:h-96 relative overflow-hidden bg-background">
        <AnimatedRibbon />
      </div>

      <Contact />
    </main>
  );
}

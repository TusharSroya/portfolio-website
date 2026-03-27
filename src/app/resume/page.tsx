"use client";

import { ArrowLeft, Phone, Mail, MapPin, Linkedin, ExternalLink, Download } from "lucide-react";
import Link from "next/link";
import { PortfolioTabs } from "@/components/NavigationTabs";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-background text-accent-cream flex flex-col">
      <style>{`
        @media print {
          body { background: white !important; color: #111 !important; }
          nav, .no-print { display: none !important; }
          main { background: white !important; }
          article { padding: 0 !important; max-width: 100% !important; }
          h1, h2, h3, h4 { color: #111 !important; font-family: serif; }
          p, li, span, a { color: #333 !important; }
          .text-sage { color: #555 !important; }
          .border-sage\/20, .border-sage\/10 { border-color: #ccc !important; }
          a[href]:after { content: none !important; }
        }
      `}</style>
      {/* Navigation */}
      <nav className="no-print w-full px-8 py-8 flex justify-between items-center z-10 max-w-7xl mx-auto border-b border-sage/10 relative">
        <Link
          href="/"
          className="group flex items-center gap-2 text-sm tracking-widest uppercase font-medium text-sage hover:text-accent-cream transition-colors"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        <div className="flex items-center gap-4">
          <button
            onClick={() => window.print()}
            className="no-print flex items-center gap-2 px-5 py-2.5 rounded-full border border-sage/30 text-sm text-sage hover:border-sage hover:text-accent-cream transition-colors font-medium"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </button>
          <div className="hidden md:block">
            <PortfolioTabs />
          </div>
        </div>
      </nav>

      {/* Resume Content */}
      <article className="max-w-4xl mx-auto w-full px-8 py-16 flex flex-col gap-12">

        {/* Header */}
        <header className="flex flex-col items-center gap-4 border-b border-sage/20 pb-10 text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-accent-cream tracking-wide">
            Tushar Sroya
          </h1>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-accent-cream/60">
            <a href="tel:6477045299" className="flex items-center gap-1.5 hover:text-sage transition-colors">
              <Phone className="w-3.5 h-3.5" /> (647)-704-5299
            </a>
            <a href="mailto:sroyatushar@gmail.com" className="flex items-center gap-1.5 hover:text-sage transition-colors">
              <Mail className="w-3.5 h-3.5" /> sroyatushar@gmail.com
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" /> Toronto, ON
            </span>
            <a href="https://linkedin.com/in/tusharsroya" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-sage transition-colors">
              <Linkedin className="w-3.5 h-3.5" /> in/tusharsroya
            </a>
          </div>
        </header>

        {/* Professional Summary */}
        <Section title="Professional Summary">
          <p className="text-accent-cream/80 font-light leading-relaxed">
            Aspiring Product Manager who enjoys turning messy, real-world problems into structured, scalable solutions. With 3+ years in SaaS engineering, I&apos;ve worked at the intersection of users, systems, and complexity and recently built a HealthTech MVP after uncovering how broken clinical workflows really are. Currently pursuing a Tech MBA at Schulich, focused on building products that make people&apos;s lives easier (not harder).
          </p>
        </Section>

        {/* Education */}
        <Section title="Education">
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-baseline flex-wrap gap-2">
              <h3 className="text-accent-cream font-semibold">MBA in Technology Leadership</h3>
              <span className="text-sage text-sm tracking-widest">2025 – 2026</span>
            </div>
            <p className="text-accent-cream/60 text-sm">Schulich School of Business, Toronto, ON</p>
          </div>
        </Section>

        {/* Projects */}
        <Section title="Projects">
          {/* Attio */}
          <div className="flex flex-col gap-4 pb-8 border-b border-sage/10">
            <div className="flex justify-between items-baseline flex-wrap gap-2">
              <h3 className="text-accent-cream font-semibold">Technology and Operations Consultant</h3>
              <span className="text-sage text-sm tracking-widest">2026 – Present</span>
            </div>
            <p className="text-accent-cream/60 text-sm uppercase tracking-widest">Attio CRM Systems · Schulich Startups / YSpace</p>
            <ul className="flex flex-col gap-2.5 pl-4 border-l border-sage/20">
              {[
                "Designing and implementing a custom Attio CRM architecture and improved relationship management across 4+ startups, enabling more structured decision-making and reporting.",
                "Road mapped stakeholder workflows into scalable CRM data models through user research to support founder pipelines, sponsor management, sales and reporting.",
                "Built structured CRM pipelines in Attio to track founder, sponsor, and partner journeys, enabling clearer visibility into engagement stages and improving decision-making across Schulich Startups programs.",
              ].map((item, i) => (
                <li key={i} className="text-accent-cream/75 font-light leading-relaxed text-sm flex gap-2">
                  <span className="text-sage mt-1.5 flex-shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* NurseShield */}
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-baseline flex-wrap gap-2">
              <a
                href="/portfolio/nurseshield"
                className="text-sage font-semibold hover:text-accent-cream transition-colors flex items-center gap-1.5"
              >
                NurseShield, HealthTech Workforce Platform (MVP)
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span className="text-sage text-sm tracking-widest">2026 – Present</span>
            </div>
            <ul className="flex flex-col gap-2.5 pl-4 border-l border-sage/20">
              {[
                "Validated nursing workflow challenges through research (600–800 entries/shift; 79% report inefficiencies).",
                "Built MVP to reduce documentation load and improve staffing visibility.",
              ].map((item, i) => (
                <li key={i} className="text-accent-cream/75 font-light leading-relaxed text-sm flex gap-2">
                  <span className="text-sage mt-1.5 flex-shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Relevant Experience */}
        <Section title="Relevant Experience">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-baseline flex-wrap gap-2">
              <h3 className="text-accent-cream font-semibold">Application Engineer</h3>
              <span className="text-sage text-sm tracking-widest">2022 – 2025</span>
            </div>
            <p className="text-accent-cream/60 text-sm uppercase tracking-widest">ValGenesis · Toronto, ON</p>
            <ul className="flex flex-col gap-2.5 pl-4 border-l border-sage/20">
              {[
                "Delivered 700+ technical solutions for enterprise SaaS clients with 98% satisfaction and zero escalations.",
                "Led 12+ international training sessions to improve internal and external knowledge sharing and technical adoption.",
                "Reduced open tickets for a critical client from 50+ to just 4 tickets within 2 months using agile workflows, serving as an executive spokesperson for the company.",
              ].map((item, i) => (
                <li key={i} className="text-accent-cream/75 font-light leading-relaxed text-sm flex gap-2">
                  <span className="text-sage mt-1.5 flex-shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Volunteer / Extracurriculars */}
        <Section title="Volunteer / Extracurriculars">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-baseline flex-wrap gap-2">
              <h3 className="text-accent-cream font-semibold">Director of Technology and Operations</h3>
              <span className="text-sage text-sm tracking-widest">2025 – Present</span>
            </div>
            <p className="text-accent-cream/60 text-sm uppercase tracking-widest">Schulich Product Management Club</p>
            <ul className="flex flex-col gap-2.5 pl-4 border-l border-sage/20">
              <li className="text-accent-cream/75 font-light leading-relaxed text-sm flex gap-2">
                <span className="text-sage mt-1.5 flex-shrink-0">•</span>
                Managed technical operations and logistics for Product Management events including branding and marketing execution, growing from a new club to a standout club at Schulich School of Business.
              </li>
            </ul>
          </div>
        </Section>

        {/* Tools & Technologies */}
        <Section title="Tools & Technologies">
          <div className="flex flex-col gap-4">
            {[
              {
                category: "UI/UX + Development",
                items: "Adobe XD, Sketch, Figma, Canva, Illustrator, Photoshop, HTML/CSS, Java, Python, Lovable, Claude, OpenAI Atlas"
              },
              {
                category: "Data Analytics + Operations",
                items: "ServiceNow, Jira, Confluence, Asana, Attio, Smartsheet, Google Analytics, Tableau, Excel, SQL"
              },
              {
                category: "Fintech & Payment Tools",
                items: "Stripe, Google Merchant Center, Google Ads (familiar)"
              }
            ].map(({ category, items }) => (
              <div key={category}>
                <span className="text-accent-cream font-medium text-sm">{category} </span>
                <span className="text-accent-cream/65 font-light text-sm">, {items}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Certifications */}
        <Section title="Certifications">
          <p className="text-accent-cream/75 font-light text-sm">
            Professional Scrum Master 1 (PSM 1), COMPTIA A+
          </p>
        </Section>

      </article>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-xs uppercase tracking-[0.25em] text-sage font-semibold border-b border-sage/20 pb-3">
        {title}
      </h2>
      {children}
    </section>
  );
}

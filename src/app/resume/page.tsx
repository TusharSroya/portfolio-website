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
            Product Manager who turns messy, real-world problems into structured, scalable products. Currently a Product Management Intern at
            EvonSys on TracEI, a payments investigation product for banks. 3+ years in enterprise SaaS engineering, a Tech MBA from Schulich, and a
            habit of shipping: an iOS language app, a macOS and Windows focus app built in public, and CRM systems for startup founders. I go deep on
            the user problem, then build until the fix is obvious.
          </p>
        </Section>

        {/* Experience */}
        <Section title="Experience">
          {EXPERIENCE.map((job) => (
            <Entry key={job.org} {...job} />
          ))}
        </Section>

        {/* Projects */}
        <Section title="Projects">
          {PROJECTS.map((p) => (
            <Entry key={p.title} {...p} />
          ))}
        </Section>

        {/* Education */}
        <Section title="Education">
          {EDUCATION.map((e) => (
            <Entry key={e.title} {...e} />
          ))}
        </Section>

        {/* Leadership */}
        <Section title="Leadership & Community">
          <Entry
            title="Director of Technology and Operations"
            org="Schulich Product Management Club"
            when="2025 – Present"
            bullets={[
              "Led cross-functional coordination of events, branding, and marketing for a new Product Management club, working with student teams and external partners to grow it into one of Schulich's standout organizations.",
              "Created and taught Pricing Blueprint, a live pricing-strategy game run in class for MKTG 6120.",
            ]}
          />
        </Section>

        {/* Skills */}
        <Section title="Skills & Certifications">
          <div className="flex flex-col gap-3">
            {SKILLS.map(({ category, items }) => (
              <p key={category} className="text-sm leading-relaxed">
                <span className="text-accent-cream font-medium">{category}: </span>
                <span className="text-accent-cream/65 font-light">{items}</span>
              </p>
            ))}
          </div>
        </Section>

      </article>
    </main>
  );
}

type EntryProps = { title: string; org?: string; when: string; bullets: string[]; href?: string };

const EXPERIENCE: EntryProps[] = [
  {
    title: "Product Management Intern",
    org: "EvonSys · Toronto, ON",
    when: "Sep 2026 – Present",
    bullets: [
      "Work across product and go-to-market for TracEI, EvonSys's payments investigation product for banks, at a Pega partner delivering low-code digital transformation. Moved from Business Analyst Intern to Product Management Intern within the first two weeks.",
      "Built a 10-flow Power Automate and Office Scripts system that keeps the TracEI leads tracker current from email and calendar activity: it logs every touch, moves leads through stages on reply keywords, flags bounces and overdue follow-ups, and sends a weekly digest, replacing manual tracker updates. Documented and handed it off to run on the product lead's own account.",
      "Building an EU Pega prospect outreach tool that consolidates qualified prospects into one source and generates personalized outreach, opening a repeatable pipeline into a market the Canadian office didn't cover.",
      "Researched and planned the 2027 payments industry events calendar and a promotion plan for the TracEI white paper to guide where the team shows up and who it reaches.",
    ],
  },
  {
    title: "Production Operations & Strategy Intern",
    org: "SP Productions · Toronto, ON",
    when: "Summer 2026",
    bullets: [
      "Designed a 4-stage automation pipeline and application skeletons, building the core architecture that connects script ingestion, AI summarization, teaser creation, and distributor outreach for an influencer-driven film marketing platform.",
      "Built a 0-to-1 product strategy and roadmap as entrepreneur-in-residence from market and competitive research, defining requirements and priorities across squads to shape go-to-market positioning for a new entertainment venture.",
      "Supported the CEO with executive-level coordination across the organization, covering scheduling, communications, and cross-functional operations alongside analyst and build work.",
    ],
  },
  {
    title: "Product Consultant",
    org: "Attio CRM Systems · Schulich Startups / YSpace",
    when: "2026 – Present",
    href: "/portfolio/attio",
    bullets: [
      "Designed and implemented custom Attio CRM systems with 4+ startup founders, improving how teams track customer and partner relationships and giving better sales pipeline visibility.",
      "Translated stakeholder needs into scalable CRM data models that support reporting, pipeline tracking, and operational decisions.",
      "Mapped internal user journeys through product walkthroughs and turned user feedback into actionable product insights.",
      "Built pipelines tracking founder, sponsor, and partner engagement, giving program leads clearer visibility into relationship health.",
    ],
  },
  {
    title: "Application Engineer",
    org: "ValGenesis · Toronto, ON",
    when: "2022 – 2025",
    href: "/portfolio/valgenesis",
    bullets: [
      "Delivered 700+ tailored solutions for enterprise clients, raising product adoption and customer satisfaction by identifying gaps.",
      "Led 12+ international client training sessions across global teams, strengthening product understanding and long-term relationships.",
      "Reduced a critical account's open issues from 50+ to 4 within 2 months as executive spokesperson, through process analysis and targeted improvements.",
    ],
  },
];

const PROJECTS: EntryProps[] = [
  {
    title: "Pomocat · macOS & Windows Focus App",
    when: "Nov 2026 – Present",
    href: "/portfolio/pomocat",
    bullets: [
      "Designed and built a pomodoro app with a native Swift menu-bar version for macOS and an Electron version for Windows, featuring a pixel-cat progress bar around the MacBook notch, a focus music tray, and XP, levels and unlockable pets.",
      "Built a guard cat that detects distracting apps and sites and escalates across four levels as slips cost the round, with a first-run setup guide that walks users through permissions.",
      "Shipped installers to early testers and acted on their feedback, adding a force-quit screen, an XP-costing emergency pass, and a keep-open music picker; feedback is collected and published live on the Pomocat Wall.",
    ],
  },
  {
    title: "Enkindl · Language Learning iOS App",
    when: "2026 – Present",
    href: "/portfolio/enkindl",
    bullets: [
      "Designed a 4-axis pronunciation scoring engine weighted for cultural accuracy, built 59 phoneme animations by hand, and shipped 60 lessons that score you on how you'd sound at your family's dinner table.",
    ],
  },
  {
    title: "NurseShield · HealthTech Workforce Platform (MVP)",
    when: "2026",
    href: "/portfolio/nurseshield",
    bullets: [
      "Validated nursing workflow pain through user research (600–800 data entries per shift; 79% report inefficiencies) and built an MVP giving charge nurses visibility into staff workload and stress.",
    ],
  },
  {
    title: "CivicTwin Spark · NVIDIA Hackathon",
    when: "2026",
    href: "/portfolio/civictwin",
    bullets: [
      "Built an agentic simulation of 10,000 citizen agents across a digital twin of Toronto on an NVIDIA DGX Spark to forecast 311 demand and triage complaints with embeddings.",
    ],
  },
];

const EDUCATION: EntryProps[] = [
  {
    title: "MBA in Technology Leadership",
    org: "Schulich School of Business · Toronto, ON",
    when: "2025 – 2026",
    bullets: ["GPA 3.7/4.0 · Dean's Entrance Scholarship"],
  },
  {
    title: "Bachelor's in Information Technology",
    org: "York University · Toronto, ON",
    when: "2017 – 2021",
    bullets: [
      "Dean's Award for Research Excellence (DARE): built a data analysis application that scraped and organized 500+ company financial records from CapitalIQ to surface investment insights.",
    ],
  },
];

const SKILLS = [
  { category: "Product", items: "User research, roadmapping, requirements, prioritization, go-to-market, Jira, Confluence, Asana, Attio, Smartsheet, ServiceNow" },
  { category: "Data & analysis", items: "Excel, SQL, Tableau, Google Analytics" },
  { category: "Building", items: "Swift, Electron, Next.js, HTML/CSS, Python, Claude Code, Google Antigravity, Visual Studio" },
  { category: "Growth & payments", items: "Stripe, Google Merchant Center, Google Ads" },
  { category: "Certifications", items: "Professional Scrum Master I (PSM I), CompTIA A+" },
];

function Entry({ title, org, when, bullets, href }: EntryProps) {
  return (
    <div className="flex flex-col gap-3 pb-8 border-b border-sage/10 last:border-0 last:pb-0">
      <div className="flex justify-between items-baseline flex-wrap gap-2">
        {href ? (
          <Link href={href} className="text-accent-cream font-semibold hover:text-sage transition-colors flex items-center gap-1.5">
            {title}
            <ExternalLink className="no-print w-3.5 h-3.5 text-sage" />
          </Link>
        ) : (
          <h3 className="text-accent-cream font-semibold">{title}</h3>
        )}
        <span className="text-sage text-sm tracking-widest">{when}</span>
      </div>
      {org && <p className="text-accent-cream/60 text-sm uppercase tracking-widest">{org}</p>}
      <ul className="flex flex-col gap-2.5 pl-4 border-l border-sage/20">
        {bullets.map((item, i) => (
          <li key={i} className="text-accent-cream/75 font-light leading-relaxed text-sm flex gap-2">
            <span className="text-sage mt-1.5 flex-shrink-0">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
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

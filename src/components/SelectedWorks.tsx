"use client";

import { Stethoscope, Database, Activity, ArrowRight, Cpu, Flame, Gamepad2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export const SelectedWorks = () => {
  const projects = [
    {
      title: "Enkindl",
      slug: "enkindl",
      role: "Founder & Developer",
      icon: Flame,
      problem: "Diaspora children grow up hearing their family's language but can't join the conversation. Textbook apps teach standard dialects. The kitchen Tamil that connects you to home? That's missing.",
      process: "Built a local-first iOS app with on-device AI that coaches pronunciation through articulatory mechanics: tongue placement, breath control, register awareness.",
      impact: "A voice-driven language learning app that runs entirely on the iPhone. Teaches Eelam Tamil and Household Punjabi through real family conversation scenarios.",
    },
    {
      title: "Pricing Blueprint",
      slug: "priceplayoffs",
      role: "Creator & Instructor, Schulich PMC",
      icon: Gamepad2,
      problem: "I was teaching pricing strategy to MKTG 6120 through the Schulich Product Management Club. Slides weren't cutting it. Students could define price elasticity but had no feel for real pricing decisions.",
      process: "Built a live game and ran it in class. Teams described their startup, an AI generated a market, and I walked the room through three rounds from the Game Master dashboard.",
      impact: "The class got competitive fast. Teams joined by QR code, argued over pricing in real time, and debriefed around a projected leaderboard. 20 minutes covered more than the lecture it replaced.",
    },
    {
      title: "CivicTwin Spark (NVIDIA Hackathon)",
      slug: "civictwin",
      role: "Developer",
      icon: Cpu,
      problem: "Cities lack a way to stress-test their 311 service request systems against realistic urban friction and emergency situations.",
      process: "Built an agentic urban simulation sandbox running 10,000 generative citizen agents through a spatial-temporal digital twin of Toronto using RAPIDS cuDF, cuML, and NVIDIA NIM.",
      impact: "Created a closed-loop simulation on the NVIDIA DGX Spark that forecasts 311 demand, triages complaints via embeddings, and generates AI morning briefings locally.",
    },
    {
      title: "ValGenesis Technical Escalations",
      slug: "valgenesis",
      role: "Application Engineer",
      icon: Activity,
      problem: "A critical enterprise SaaS client faced a high volume of open support tickets (50+), impacting overall satisfaction and threatening contract renewal.",
      process: "Diagnosed the root software workflow issues. Delivered 700+ technical solutions globally and led 12+ international training sessions.",
      impact: "Reduced open tickets from 50+ to just 4 within 2 months using agile workflows, serving as the executive spokesperson. Maintained 98% satisfaction.",
    },
    {
      title: "NurseShield HealthTech MVP",
      slug: "nurseshield",
      role: "Product Manager & Technical Lead",
      icon: Stethoscope,
      problem: "Nurses input 600-800 data points per shift. 79% report extreme fatigue from duplicative charting, leading to significant unpaid overtime and clinical errors.",
      process: "Conducted deep user problem validation spanning Nov '24 - Mar '26. Pinpointed cognitive overload, staffing instability, and high-frequency ED checklists as the core root causes.",
      impact: "Designed and built an MVP tailored to reduce post-shift documentation recovery, providing quicker charting workflows and significantly improved staffing visibility.",
    },
    {
      title: "Attio CRM Architecture",
      slug: "attio",
      role: "Technology & Operations Consultant @ Schulich Startups",
      icon: Database,
      problem: "Fragmented stakeholder management and lack of actionable reporting across 4+ fast-growing startup cohorts.",
      process: "Road mapped stakeholder workflows through extensive user research to support both founder pipelines and sponsor management.",
      impact: "Built structured CRM pipelines in Attio, enabling clear visibility into engagement stages and drastically improving data-driven decision-making.",
    }
  ];

  return (
    <section id="work" className="w-full py-16 md:py-32 px-6 md:px-8 bg-background relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-20">
          <h2 className="text-sage text-sm md:text-base uppercase tracking-[0.2em] mb-4 font-semibold">
            My Work
          </h2>
          <h3 className="text-3xl md:text-5xl font-serif text-accent-cream">
            What this looks like in practice.
          </h3>
        </div>

        <div className="flex flex-col gap-12 text-accent-cream">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx} 
              className="group relative border border-sage/20 rounded-3xl p-6 md:p-12 overflow-hidden flex flex-col md:flex-row gap-8 md:gap-16 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial="idle"
              whileHover="active"
              whileInView="active"
              viewport={{ margin: "-20% 0px -20% 0px", amount: 0.3 }}
            >
              <motion.div 
                variants={{ idle: { opacity: 0 }, active: { opacity: 1 } }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-sage/10 pointer-events-none -z-10"
              />
              
              {/* Left Column (Title & Role) */}
              <div className="md:w-1/3 flex flex-col gap-4 relative z-10">
                 <div className="w-14 h-14 bg-sage/10 rounded-full flex items-center justify-center text-sage mb-2 md:mb-4">
                   <project.icon className="w-7 h-7" strokeWidth={1.5} />
                 </div>
                 <h4 className="text-2xl md:text-3xl font-serif leading-tight">{project.title}</h4>
                 <p className="text-sage uppercase tracking-wider text-xs md:text-sm font-semibold mt-1 md:mt-2">{project.role}</p>
              </div>

              {/* Right Column (Details) */}
              <div className="md:w-2/3 flex flex-col gap-6 md:gap-8 border-t md:border-t-0 md:border-l border-sage/20 pt-6 md:pt-0 md:pl-12 relative z-10">
                <div className="flex flex-col gap-2 md:gap-3">
                  <h5 className="text-sm uppercase tracking-widest text-sage/70 font-semibold">The Problem</h5>
                  <p className="text-lg font-light leading-relaxed">{project.problem}</p>
                </div>
                <div className="flex flex-col gap-3">
                  <h5 className="text-sm uppercase tracking-widest text-sage/70 font-semibold">The Process</h5>
                  <p className="text-lg font-light leading-relaxed">{project.process}</p>
                </div>
                <div className="flex flex-col gap-3">
                  <h5 className="text-sm uppercase tracking-widest text-sage/70 font-semibold">The Impact</h5>
                  <p className="text-lg font-light leading-relaxed text-accent-cream">{project.impact}</p>
                </div>
                
                <div className="mt-4 pt-8 border-t border-sage/10">
                  <Link 
                    href={`/portfolio/${project.slug}`}
                    className="group inline-flex items-center gap-2 text-sage uppercase tracking-widest text-sm font-semibold hover:text-accent-cream transition-colors"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

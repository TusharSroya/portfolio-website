"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  TrendingUp, 
  Users, 
  Globe, 
  CheckCircle2, 
  Award, 
  ArrowUpRight,
  ShieldCheck,
  FileText,
  Zap,
  ArrowLeft
} from 'lucide-react';
import Link from 'next/link';
import { PortfolioTabs } from "@/components/NavigationTabs";

const stats = [
  { label: "Tickets Closed", value: 420, suffix: "+", icon: <CheckCircle2 className="w-5 h-5 text-sage" /> },
  { label: "Genentech Backlog", value: "50→0", icon: <ShieldCheck className="w-5 h-5 text-sage" /> },
  { label: "Coworkers Trained", value: 15, icon: <Users className="w-5 h-5 text-sage" /> },
  { label: "Design to Delivery", value: 1, suffix: " Week", icon: <Zap className="w-5 h-5 text-sage" /> }
];

const trainingSlides = [
  {
    img: "/valgenesis/slide1.png",
    title: "IMS Ticket Training",
    desc: "Initial overview of ticket lifecycle management and support workflows delivered to the Lisbon team."
  },
  {
    img: "/valgenesis/slide2.png",
    title: "Training Schedule",
    desc: "A compressed 1-week intensive curriculum designed to onboard international leads in record time."
  },
  {
    img: "/valgenesis/slide3.png",
    title: "Monday's Teaching Outline",
    desc: "Deep dive into VLMS systems, backend jobs, and known technical workarounds."
  },
  {
    img: "/valgenesis/slide4.png",
    title: "Testing Scenarios",
    desc: "Real-world customer reporting scenarios used to validate technical troubleshooting skills."
  }
];

const milestones = [
  {
    date: "May 2022",
    title: "Day One",
    desc: "Selected from 50 candidates to join a high-velocity technical team supporting North American pharma giants.",
    icon: <Briefcase className="w-6 h-6" />,
    color: "bg-sage/10 text-sage"
  },
  {
    date: "July 2022",
    title: "Early Leadership",
    desc: "Stepped up within 60 days to train a new cohort of 15 Application Engineers, using active recall methods to accelerate onboarding.",
    icon: <Users className="w-6 h-6" />,
    color: "bg-sage/10 text-sage"
  },
  {
    date: "Ongoing",
    title: "Global Alignment",
    desc: "Led recurring monthly calls with global teams to standardize best practices and fill leadership gaps across time zones.",
    icon: <Globe className="w-6 h-6" />,
    color: "bg-sage/10 text-sage"
  },
  {
    date: "April 2024",
    title: "Mission: Lisbon",
    desc: "Represented North America in Portugal to deliver a 1-week intensive curriculum, compressing 2 months of product knowledge for international leads.",
    icon: <Award className="w-6 h-6" />,
    color: "bg-sage/10 text-sage"
  },
  {
    date: "Jan – July 2025",
    title: "The Crisis Solver",
    desc: "Assigned to the Genentech escalation. Systematically cleared a 50+ ticket backlog, securing the contract renewal for a top-tier enterprise client.",
    icon: <ShieldCheck className="w-6 h-6" />,
    color: "bg-sage/10 text-sage"
  }
];

const tools = [
  "ServiceNow", "ServiceDesk Plus", "Excel", "VBA", "Figma", 
  "SLA Management", "Quality Assurance", "Knowledge Base", 
  "Technical Training", "Customer Success", "PSR/PSTR Documentation"
];

function StatCounter({ value, suffix, label, icon }: { value: any, suffix?: string, label: string, icon: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2 p-6 rounded-3xl bg-sage/5 border border-sage/10 hover:border-sage/30 transition-colors group">
      <div className="flex items-center gap-3 text-sage/80 group-hover:text-sage transition-colors">
        {icon}
        <span className="text-[10px] uppercase tracking-widest font-bold opacity-60">{label}</span>
      </div>
      <div className="text-3xl md:text-4xl font-serif text-accent-cream flex items-baseline gap-1">
        {value}
        {suffix && <span className="text-sm font-sans text-sage uppercase">{suffix}</span>}
      </div>
    </div>
  );
}

export default function ValGenesisPage() {
  const [selectedSlideIdx, setSelectedSlideIdx] = React.useState<number | null>(null);
  
  return (
    <main className="w-full min-h-screen bg-background text-accent-cream overflow-x-hidden">
      <nav className="w-full px-6 py-6 md:px-8 md:py-8 flex flex-col md:flex-row justify-between items-center z-20 max-w-7xl mx-auto border-b border-sage/10 relative gap-6 md:gap-4 text-center md:text-left">
        <Link href="/" className="group flex items-center gap-2 text-[10px] md:text-sm tracking-widest uppercase font-medium text-sage hover:text-accent-cream transition-colors whitespace-nowrap">
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

      <div className="max-w-7xl mx-auto py-12 md:py-20 px-6 md:px-8 flex flex-col gap-16 md:gap-24">
        
        {/* Header Logic */}
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-4 text-sage">
              <span className="h-[1px] w-12 bg-sage/30" />
              <span className="text-sm uppercase tracking-[0.3em] font-bold">ValGenesis Experience</span>
            </div>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif text-accent-cream leading-[1.1]">
              Application <span className="text-sage italic">Engineer</span>
            </h1>
            <p className="text-lg md:text-2xl text-accent-cream/60 font-serif italic max-w-2xl leading-relaxed">
              &quot;Three years, One company, A junior hire who became the person the team turned to, for training, for escalations, and for the client nobody else could crack.&quot;
            </p>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + (i * 0.1) }}
            >
              <StatCounter {...stat} />
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">
          
          {/* Main Narrative - Left Column */}
          <div className="lg:col-span-7 flex flex-col gap-12 md:gap-16">
            <div className="flex flex-col gap-6 md:gap-8 text-accent-cream/70 text-lg leading-relaxed font-light">
               <p>
                I joined ValGenesis as one of <span className="text-accent-cream font-normal underline decoration-sage/50 underline-offset-4">50 applicants</span> selected for the Application Engineer role, supporting North American life sciences clients using their Validation Lifecycle Management platform. 
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                <div className="flex flex-col gap-4">
                   <h4 className="text-accent-cream font-serif text-xl">The Scope</h4>
                   <p className="text-sm">My work spanned customer support, ticket resolution, QA automation, and onboarding. I mastered the industry-standard ServiceNow and ServiceDesk Plus ecosystems while building custom VBA tools to solve complex client issues.</p>
                </div>
                <div className="flex flex-col gap-4">
                   <h4 className="text-accent-cream font-serif text-xl">The Impact</h4>
                   <p className="text-sm">Beyond code, I became a strategic bridge between the product and the customer, developing international training curricula and managing high-stakes escalations for enterprise pharma clients.</p>
                </div>
              </div>
            </div>

            {/* Skills Pills */}
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, i) => (
                <span key={i} className="px-4 py-1.5 rounded-full bg-sage/5 border border-sage/10 text-sage/80 text-xs font-medium hover:bg-sage/10 hover:border-sage/30 transition-all cursor-default">
                  {tool}
                </span>
              ))}
            </div>

            {/* Portugal Training Slides Evidence */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 md:p-10 rounded-3xl md:rounded-[2.5rem] bg-sage/5 border border-sage/20 flex flex-col gap-6 md:gap-10 shadow-2xl relative overflow-hidden group hover:bg-sage/10 transition-colors"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Globe className="w-32 h-32 text-sage" />
              </div>

              <div className="flex flex-col gap-6 relative z-10">
                <div className="flex items-center gap-3">
                   <div className="px-3 py-1 rounded-full bg-sage/20 text-sage text-[10px] font-bold tracking-widest uppercase border border-sage/30">Excellence Recognition</div>
                   <h3 className="text-xl md:text-3xl font-serif text-accent-cream">Delivered Training Internationally, Lisbon, Portugal (2024)</h3>
                </div>
                <p className="text-accent-cream/60 leading-relaxed text-lg font-light">
                   Selected to represent the North American team and fly to ValGenesis&apos;s Lisbon office to upskill global Application Engineers and team leads. I designed and delivered a structured training program from scratch, covering ticket lifecycle management, system workflows, and hands-on troubleshooting.
                </p>
              </div>

              {/* Slide Gallery */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
                {trainingSlides.map((slide, i) => (
                  <motion.div 
                    key={i} 
                    className="aspect-[4/3] rounded-xl bg-background border border-sage/20 overflow-hidden cursor-zoom-in hover:border-sage/50 transition-colors flex items-center justify-center relative shadow-lg"
                    initial="idle"
                    whileHover="active"
                    whileInView="active"
                    viewport={{ margin: "-20% 0px -20% 0px", amount: 0.5 }}
                    onClick={() => setSelectedSlideIdx(i)}
                  >
                    <motion.img 
                      src={slide.img} 
                      alt={slide.title}
                      variants={{
                        idle: { opacity: 0.8, scale: 1 },
                        active: { opacity: 1, scale: 1.05 }
                      }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                      className="w-full h-full object-cover"
                    />
                    <motion.div 
                      variants={{ idle: { opacity: 0 }, active: { opacity: 1 } }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-sage/5 flex items-center justify-center backdrop-blur-[1px]"
                    >
                       <motion.div 
                         variants={{ idle: { scale: 0.9 }, active: { scale: 1 } }}
                         transition={{ duration: 0.4 }}
                         className="bg-black/60 p-2 rounded-full border border-sage/20"
                       >
                         <ArrowUpRight className="w-4 h-4 text-sage" />
                       </motion.div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex items-center gap-2 text-xs text-sage/60 font-medium italic">
                <ArrowUpRight className="w-3 h-3" /> Visual evidence from the Portugal Training Final presentation
              </div>
            </motion.div>

            {/* Lightbox Modal with Next/Prev and Descriptions */}
            {selectedSlideIdx !== null && (
              <div 
                className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
                onClick={() => setSelectedSlideIdx(null)}
              >
                <div className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center gap-8">
                  {/* Image Container */}
                  <motion.div 
                    key={selectedSlideIdx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex-1 flex items-center justify-center relative group/modal cursor-zoom-out"
                  >
                    <img 
                      src={trainingSlides[selectedSlideIdx].img} 
                      alt={trainingSlides[selectedSlideIdx].title} 
                      className="max-w-full max-h-[70vh] object-contain rounded-2xl shadow-2xl border border-sage/20"
                    />
                    
                    {/* Navigation Buttons */}
                    <button 
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-sage/40 text-sage p-4 rounded-full transition-all border border-sage/20 backdrop-blur-xl"
                      onClick={(e) => { 
                        e.stopPropagation(); 
                        setSelectedSlideIdx((prevIdx) => (prevIdx! - 1 + trainingSlides.length) % trainingSlides.length);
                      }}
                    >
                      <ArrowLeft className="w-6 h-6" />
                    </button>
                    <button 
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-sage/40 text-sage p-4 rounded-full transition-all border border-sage/20 backdrop-blur-xl"
                      onClick={(e) => { 
                        e.stopPropagation(); 
                        setSelectedSlideIdx((prevIdx) => (prevIdx! + 1) % trainingSlides.length);
                      }}
                    >
                      <ArrowLeft className="w-6 h-6 rotate-180" />
                    </button>
                  </motion.div>

                  {/* Description Container */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center flex flex-col gap-3 max-w-2xl px-4 md:px-8"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex items-center justify-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-sage">
                       <span className="opacity-50">Slide {selectedSlideIdx + 1} of {trainingSlides.length}</span>
                    </div>
                    <h4 className="text-2xl md:text-3xl font-serif text-accent-cream">{trainingSlides[selectedSlideIdx].title}</h4>
                    <p className="text-base md:text-lg text-accent-cream/60 font-light leading-relaxed italic">&quot;{trainingSlides[selectedSlideIdx].desc}&quot;</p>
                  </motion.div>

                  {/* Close Button */}
                  <button 
                    className="absolute top-0 right-0 bg-sage/20 hover:bg-sage/40 text-sage p-3 rounded-full transition-colors"
                    onClick={() => setSelectedSlideIdx(null)}
                  >
                    <ArrowLeft className="w-6 h-6 rotate-90" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Vertical Timeline - Right Column */}
          <div className="lg:col-span-5 flex flex-col gap-8 md:gap-12 relative">
             <div className="absolute left-[27px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-sage/0 via-sage/20 to-sage/0" />
             
             {milestones.map((milestone, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 + (i * 0.1) }}
                 className="relative pl-16 group"
               >
                 <div className={`absolute left-0 top-0 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110 z-10 ${milestone.color} border border-sage/20 text-sage`}>
                   {milestone.icon}
                 </div>
                 
                 <div className="flex flex-col gap-2 pt-1">
                   <span className="text-xs font-bold uppercase tracking-widest text-sage/60">{milestone.date}</span>
                   <h4 className="text-2xl font-serif text-accent-cream group-hover:text-sage transition-colors">{milestone.title}</h4>
                   <p className="text-sm text-accent-cream/50 leading-relaxed font-light">{milestone.desc}</p>
                 </div>
               </motion.div>
             ))}

             {/* Bottom Journey Callout */}
             <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               className="mt-8 p-8 rounded-3xl bg-sage/5 border border-sage/10 text-center"
             >
               <TrendingUp className="w-8 h-8 text-sage mx-auto mb-4 opacity-50" />
               <p className="text-sm text-accent-cream/40 italic font-serif leading-relaxed">
                 From a rookie trainee to the global crisis solver for top-priority enterprise accounts.
               </p>
             </motion.div>
          </div>
        </div>

      </div>
    </main>
  );
}

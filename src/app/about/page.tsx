import { ArrowLeft, ExternalLink, Camera, Briefcase, GraduationCap, Users } from "lucide-react";
import Link from "next/link";
import { PortfolioTabs } from "@/components/NavigationTabs";

export const metadata = {
  title: 'About | Tushar Sroya',
  description: 'Product Manager, Tech MBA, and photographer. Turning messy, real-world problems into structured, scalable solutions.',
};

export default function AboutPage() {
  const timeline = [
    {
      year: "Since Childhood",
      icon: Camera,
      role: "Photographer",
      org: "Self-Taught / Lifelong Passion",
      desc: "Photography has been a core part of who I am since childhood. Long before any career, I was already learning to see the world through a viewfinder, composing moments, chasing light, and finding the story in the stillness.",
      accent: "photography"
    },
    {
      year: "2022 – 2025",
      icon: Briefcase,
      role: "Application Engineer",
      org: "ValGenesis, Toronto, ON",
      desc: "Delivered 700+ technical solutions for enterprise SaaS clients with 98% satisfaction and zero escalations. Led 12+ international training sessions. Reduced a critical client's open tickets from 50+ to just 4 within 2 months, serving as executive spokesperson.",
      accent: "work"
    },
    {
      year: "2025 – Present",
      icon: GraduationCap,
      role: "MBA in Technology Leadership",
      org: "Schulich School of Business, Toronto, ON",
      desc: "Currently pursuing a Tech MBA with a focus on building products that make people's lives easier, not harder. Schulich gave me the structure; the startup world gave me the urgency.",
      accent: "education"
    },
    {
      year: "2025 – Present",
      icon: Users,
      role: "Director of Technology & Operations",
      org: "Schulich Product Management Club",
      desc: "Managing all technical operations and logistics for the Product Management Club, from event branding and marketing execution to growing it from a new club into a standout presence at Schulich School of Business.",
      accent: "work"
    },
    {
      year: "2026 – Present",
      icon: Briefcase,
      role: "Technology & Operations Consultant",
      org: "Attio CRM Systems · Schulich Startups / YSpace",
      desc: "Designing and implementing a custom Attio CRM architecture for 4+ fast-scaling startups. Road-mapping stakeholder workflows into scalable data models to support founder pipelines, sponsor management, and data-driven reporting.",
      accent: "work"
    },
    {
      year: "2026 – Present",
      icon: Camera,
      role: "Product Manager & Technical Lead",
      org: "NurseShield, HealthTech Workforce Platform",
      desc: "Validated nursing workflow challenges through deep user research (600–800 data entries/shift; 79% report inefficiencies). Built an MVP to reduce documentation load and improve staffing visibility, redefining what post-shift recovery looks like.",
      accent: "product"
    }
  ];

  const photoCats = [
    {
      title: "Brand Photography",
      subtitle: "Arc'teryx Femme Climb Event · 2025",
      href: "https://tusharsroya.myportfolio.com/arc-teryx-femme-climb-event",
      desc: "Capturing the raw energy of Arc'teryx's women's climbing event, movement, texture, and authenticity in every frame."
    },
    {
      title: "Fashion Photography",
      subtitle: "Editorial · 2025",
      href: "https://tusharsroya.myportfolio.com/headshots",
      desc: "Fashion as storytelling. I direct and capture editorial shoots that make each subject feel powerful, present, and seen."
    },
    {
      title: "Headshots",
      subtitle: "Professional Portraits · 2025",
      href: "https://tusharsroya.myportfolio.com/headshots-1",
      desc: "Professional headshots crafted to communicate confidence and authenticity, the first impression you control."
    }
  ];

  const accentColors: Record<string, string> = {
    photography: "border-amber-400/50 bg-amber-400/5",
    work: "border-sage/40 bg-sage/5",
    education: "border-blue-400/30 bg-blue-400/5",
    product: "border-emerald-400/30 bg-emerald-400/5"
  };

  const dotColors: Record<string, string> = {
    photography: "bg-amber-400",
    work: "bg-sage",
    education: "bg-blue-400",
    product: "bg-emerald-400"
  };

  return (
    <main className="min-h-screen bg-background text-accent-cream flex flex-col">
      {/* Navigation */}
      <nav className="w-full px-8 py-8 flex justify-between items-center z-10 max-w-7xl mx-auto border-b border-sage/10 relative">
        <Link
          href="/"
          className="group flex items-center gap-2 text-sm tracking-widest uppercase font-medium text-sage hover:text-accent-cream transition-colors"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        <div className="hidden md:block">
          <PortfolioTabs />
        </div>
      </nav>

      {/* ── HERO STATEMENT ── */}
      <section className="w-full px-8 py-28 max-w-7xl mx-auto">
        <p className="text-sage text-sm md:text-base uppercase tracking-[0.2em] mb-6 font-semibold">About Me</p>
        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif text-accent-cream leading-[1.1] mb-10 max-w-4xl">
          I see the world in{" "}
          <span className="italic text-sage/90">systems</span>
          {" "}and{" "}
          <span className="italic text-amber-300/80">frames.</span>
        </h1>
        <p className="text-xl md:text-2xl text-accent-cream/70 max-w-2xl font-light leading-relaxed">
          Product Manager. Tech MBA candidate. And a photographer since before I ever had a job title.
          I've spent my life learning two seemingly opposite crafts, and finding out they're the same thing.
        </p>
      </section>

      {/* ── VISUAL DIVIDE ── */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-sage/30 to-transparent" />

      {/* ── WHY SECTION ── */}
      <section className="w-full px-8 py-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-serif text-accent-cream mb-6">
            What drives me
          </h2>
          <div className="flex flex-col gap-6 text-lg text-accent-cream/75 font-light leading-relaxed">
            <p>
              Poorly designed systems frustrate people, waste time, and limit potential.
              I've felt that frustration as a user, as an engineer, and as a product manager, and I refuse to accept it as inevitable.
            </p>
            <p>
              With 3+ years in SaaS engineering and now pursuing a Tech MBA, I've worked at the intersection of users, systems, and complexity.
              I recently built a HealthTech MVP after uncovering how broken clinical workflows really are.
              That's what I'm about: going deep into a problem until the human cost is undeniable, then building until the fix is obvious.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "700+", sub: "technical solutions delivered" },
            { label: "98%", sub: "client satisfaction rate" },
            { label: "4+", sub: "startups consulting in CRM" },
            { label: "PSM 1", sub: "certified Scrum Master" },
          ].map(stat => (
            <div key={stat.label} className="border border-sage/20 rounded-2xl p-6 bg-sage/5 hover:bg-sage/10 transition-colors">
              <p className="text-4xl font-serif text-sage mb-2">{stat.label}</p>
              <p className="text-sm text-accent-cream/60 uppercase tracking-wider">{stat.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CAREER TIMELINE ── */}
      <section className="w-full px-8 py-24 border-t border-sage/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-sage text-sm uppercase tracking-[0.2em] mb-4 font-semibold">My journey</p>
          <h2 className="text-4xl md:text-5xl font-serif text-accent-cream mb-16">
            The path, not just the destination.
          </h2>

          <div className="relative flex flex-col gap-12 ml-4">
            <div className="absolute top-2 bottom-2 left-[5px] w-[1px] bg-gradient-to-b from-amber-400/50 via-sage/30 to-emerald-400/40" />

            {timeline.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex gap-8 relative group">
                  <div className={`w-3 h-3 rounded-full relative z-10 mt-2 transition-all duration-300 flex-shrink-0 ${dotColors[item.accent]}`}>
                    <div className={`absolute inset-[-4px] rounded-full opacity-0 group-hover:opacity-30 transition-opacity ${dotColors[item.accent]}`} />
                  </div>
                  <div className={`flex-1 border rounded-2xl p-6 transition-all duration-300 group-hover:scale-[1.01] ${accentColors[item.accent]}`}>
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                      <div className="flex items-center gap-3">
                        <Icon className="w-4 h-4 text-sage" />
                        <span className="text-sage text-xs tracking-widest uppercase font-medium">{item.year}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-medium text-accent-cream mb-1">{item.role}</h3>
                    <p className="text-sm text-accent-cream/50 uppercase tracking-widest mb-4">{item.org}</p>
                    <p className="text-accent-cream/80 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PHOTOGRAPHY SECTION ── */}
      <section className="w-full px-8 py-24 border-t border-sage/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-amber-300/70 text-sm uppercase tracking-[0.2em] mb-4 font-semibold">Beyond product</p>
          <h2 className="text-4xl md:text-5xl font-serif text-accent-cream mb-6 max-w-2xl">
            Photography is how I learned to tell stories.
          </h2>
          <p className="text-lg text-accent-cream/70 max-w-2xl font-light leading-relaxed mb-16">
            I picked up a camera as a child and never put it down. What started as curiosity became craft
            , and eventually, a business. Photography taught me the most important skill in product management:
            <span className="text-sage italic"> how to find the right frame.</span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {photoCats.map((cat, i) => (
              <a
                key={i}
                href={cat.href}
                target="_blank"
                rel="noreferrer"
                className="group relative border border-sage/20 rounded-2xl p-8 bg-sage/5 hover:bg-amber-400/5 hover:border-amber-400/30 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-4 h-4 text-amber-300/60" />
                </div>
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center mb-6">
                  <Camera className="w-5 h-5 text-amber-300/70" />
                </div>
                <p className="text-xs text-amber-300/60 uppercase tracking-widest mb-2">{cat.subtitle}</p>
                <h3 className="text-xl font-medium text-accent-cream mb-3">{cat.title}</h3>
                <p className="text-accent-cream/70 font-light leading-relaxed text-sm">{cat.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-sage/60 group-hover:text-amber-300/70 transition-colors text-sm">
                  <span className="tracking-widest uppercase text-xs">View Gallery</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </a>
            ))}
          </div>

          {/* University & Club Highlight */}
          <div className="border border-sage/20 rounded-2xl p-8 bg-sage/5">
            <h3 className="text-2xl font-serif text-accent-cream mb-6 border-l-2 border-amber-400/60 pl-4">
              University & Club Involvement
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Led University Photography Operations",
                  desc: "Operated as the official photographer for major university events, capturing the energy of institutional life and student culture."
                },
                {
                  title: "Executive Creative Lead, Student Clubs",
                  desc: "Served as the creative and visual director for major student clubs, producing all event coverage, branding, and promotional media."
                },
                {
                  title: "Freelance Photography Business",
                  desc: "Founded and operated an independent photography studio, from brand shoots to professional headshots, all shot and directed solo."
                }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <h4 className="text-accent-cream font-medium">{item.title}</h4>
                  <p className="text-accent-cream/65 text-sm font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FOOTER ── */}
      <section className="w-full px-8 py-20 border-t border-sage/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <h2 className="text-3xl md:text-4xl font-serif text-accent-cream max-w-lg">
            Want to see how I think? Check out my work.
          </h2>
          <div className="flex gap-4 flex-wrap">
            <Link href="/#work" className="group flex items-center gap-2 bg-accent-cream text-primary-green px-8 py-4 rounded-full font-semibold hover:brightness-110 transition-all transform hover:scale-105 text-sm">
              View My Projects
            </Link>
            <a href="https://tusharsroya.myportfolio.com/work" target="_blank" rel="noreferrer" className="group flex items-center gap-2 border border-amber-400/40 text-amber-300/80 hover:text-amber-300 hover:border-amber-400 px-8 py-4 rounded-full font-semibold transition-all text-sm">
              Photography Portfolio
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

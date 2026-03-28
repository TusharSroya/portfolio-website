import { portfolioData } from "@/data/portfolio";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortfolioTabs } from "@/components/NavigationTabs";
import NurseShieldPostMortem from "@/components/NurseShieldPostMortem";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function PortfolioPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const project = portfolioData[slug as keyof typeof portfolioData];

  if (!project) {
    notFound();
  }

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

      {/* Case Study Content */}
      <article className="max-w-4xl mx-auto w-full px-8 py-20 flex flex-col gap-16">

        {/* Header */}
        <header className="flex flex-col gap-6">
          <div className="flex gap-4 flex-wrap">
            {project.tags.map(tag => (
              <span key={tag} className="text-xs uppercase tracking-widest bg-sage/10 text-sage px-3 py-1 rounded-full border border-sage/20">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-accent-cream leading-[1.1]">
            {project.title}
          </h1>
          <div className="flex flex-col md:flex-row gap-4 md:gap-12 mt-4 border-l-2 border-sage/30 pl-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-sage/70 font-semibold mb-1">Role</p>
              <p className="text-lg font-light">{project.role}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-sage/70 font-semibold mb-1">Timeline</p>
              <p className="text-lg font-light">{project.timeline}</p>
            </div>
          </div>
        </header>

        {/* Project Media */}
        {("video" in project && typeof project.video === "string") ? (
          <div className="w-full bg-sage/5 border border-sage/20 rounded-3xl flex items-center justify-center relative overflow-hidden">
            {project.video.endsWith('.mp4') ? (
              <video
                src={project.video as string}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-cover rounded-3xl"
              />
            ) : (
              <img
                src={project.video as string}
                alt={`${project.title} Demo`}
                className="w-full h-auto object-cover rounded-3xl"
              />
            )}
          </div>
        ) : (
          <div className="w-full h-64 md:h-96 bg-sage/5 border border-sage/20 rounded-3xl flex items-center justify-center relative overflow-hidden">
            <p className="text-sage/50 text-sm tracking-widest uppercase">Project Preview Image Gallery</p>
          </div>
        )}

        {/* Detailed Sections */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 font-light text-lg leading-relaxed">
          <div className="md:col-span-4 border-t border-sage/10 pt-6">
            <h2 className="text-sm uppercase tracking-widest text-sage font-semibold mb-4">The Challenge</h2>
          </div>
          <div className="md:col-span-8 border-t border-sage/10 pt-6">
            <p className="text-accent-cream/90">{project.problem}</p>
          </div>

          <div className="md:col-span-4 border-t border-sage/10 pt-6">
            <h2 className="text-sm uppercase tracking-widest text-sage font-semibold mb-4">The Process</h2>
          </div>
          <div className="md:col-span-8 border-t border-sage/10 pt-6">
            <p className="text-accent-cream/90">{project.process}</p>
          </div>

          <div className="md:col-span-4 border-t border-sage/10 pt-6">
            <h2 className="text-sm uppercase tracking-widest text-sage font-semibold mb-4">The Impact</h2>
          </div>
          <div className="md:col-span-8 border-t border-sage/10 pt-6">
            <p className="text-white font-medium">{project.impact}</p>
          </div>
        </div>

        {slug === "nurseshield" && <NurseShieldPostMortem />}

      </article>
    </main>
  );
}

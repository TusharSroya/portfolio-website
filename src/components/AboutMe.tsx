export function AboutMe() {
  const timeline = [
    { 
      year: "2024 - Present", 
      role: "Product Manager & Tech MBA", 
      org: "HealthTech & Schulich Startups", 
      desc: "Currently leading product strategy for clinical MVPs and consulting for startups. Bridging the gap between messy operational workflows and scalable application logic." 
    },
    { 
      year: "2021 - 2024", 
      role: "Senior Consultant / Analyst", 
      org: "Enterprise Tech", 
      desc: "Diagnosed operational bottlenecks for SaaS clients. Built robust technical workflow engines and led cross-functional international training." 
    },
    { 
      year: "2019 - 2021", 
      role: "Photographer & Creative Lead", 
      org: "Freelance / University", 
      desc: "Founded a freelance photography business while simultaneously operating as the lead photographer for university events and major student clubs." 
    }
  ];

  return (
    <section id="about" className="w-full py-16 md:py-32 px-6 md:px-8 bg-background relative z-10 border-t border-sage/10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
        
        {/* Left Column: Story & Passions */}
        <div className="flex-1 flex flex-col gap-12">
          <div>
            <h2 className="text-sage text-sm md:text-base uppercase tracking-[0.2em] mb-4 font-semibold">
              About Me
            </h2>
            <h3 className="text-3xl md:text-5xl font-serif text-accent-cream leading-tight mb-6 md:mb-8">
              Systems thinker, <br />
              visual storyteller.
            </h3>
            <div className="flex flex-col gap-6 text-lg text-accent-cream/80 max-w-xl font-light leading-relaxed">
              <p>
                I am a Product Manager and Tech MBA candidate who thrives at the intersection of complex problem-solving and human-centric design. I build digital spaces that simplify life.
              </p>
              <p>
                Why do I do it? Because poorly designed systems frustrate people, waste time, and limit potential. Whether it's mapping clinical workflows for exhausted nurses or structuring CRM architectures for scaling startups, my goal is always to transform chaos into intuitive clarity.
              </p>
            </div>
          </div>

          <div className="border border-sage/20 rounded-2xl p-6 md:p-8 bg-sage/5 hover:bg-sage/10 transition-colors">
            <h4 className="text-xl font-serif text-accent-cream mb-4 border-l-2 border-sage pl-3">Beyond Product Management</h4>
            <p className="text-accent-cream/80 font-light leading-relaxed mb-6">
              When I'm not whiteboarding product architecture, you'll find me behind a lens. Photography fundamentally shapes how I approach product design, it's all about framing the right perspective and capturing the narrative.
            </p>
            <ul className="flex flex-col gap-3 text-sm text-sage tracking-wide uppercase">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-sage" />
                Led University Photography Operations
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-sage" />
                Executive Creative Lead for Major Student Clubs
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-sage" />
                Founder of Independent Photography Business
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Career Timeline */}
        <div className="flex-1 lg:pl-10 lg:border-l border-sage/10">
          <h4 className="text-2xl font-serif text-accent-cream mb-10">Career Timeline</h4>
          
          <div className="flex flex-col gap-12 relative">
            <div className="absolute top-2 bottom-2 left-[5px] w-[1px] bg-sage/20" />
            
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6 relative group">
                <div className="w-3 h-3 rounded-full bg-background border-2 border-sage relative z-10 mt-1.5 group-hover:bg-sage transition-colors" />
                <div className="flex flex-col gap-2">
                  <span className="text-sage text-sm tracking-widest uppercase font-medium">
                    {item.year}
                  </span>
                  <h5 className="text-xl font-medium text-accent-cream">
                    {item.role}
                  </h5>
                  <span className="text-sm text-accent-cream/60 uppercase tracking-wider mb-2">
                    {item.org}
                  </span>
                  <p className="text-accent-cream/80 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}

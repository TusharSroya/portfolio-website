import { Target, Workflow, HeartPulse } from "lucide-react";

export const Capabilities = () => {
  const skills = [
    {
      icon: Target,
      title: "Product Strategy",
      description: "Aligning founders, go-to-market teams, and engineering. Conducting deep market gap analysis to drive tricky products from idea to adoption."
    },
    {
      icon: Workflow,
      title: "Workflow Optimization",
      description: "Designing structured CRM architectures and roadmapping backend processes so day-to-day operations scale with less friction."
    },
    {
      icon: HeartPulse,
      title: "HealthTech & SaaS",
      description: "Translating messy clinical workflows into clear technical requirements to build software that actively reduces user cognitive load."
    }
  ];

  return (
    <section id="capabilities" className="w-full py-16 md:py-32 px-6 md:px-8 bg-background relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-20">
          <h2 className="text-sage text-sm md:text-base uppercase tracking-[0.2em] mb-4 font-semibold">
            Capabilities
          </h2>
          <h3 className="text-3xl md:text-5xl font-serif text-accent-cream">
            Where I&apos;m most useful.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col gap-6 group">
              <div className="w-14 h-14 rounded-full border border-sage/30 flex items-center justify-center text-sage group-hover:bg-sage/10 transition-colors">
                <skill.icon strokeWidth={1.5} className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-serif text-accent-cream">{skill.title}</h4>
              <p className="text-accent-cream/70 leading-relaxed font-light text-lg">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

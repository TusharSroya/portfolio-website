import { Mail, Linkedin, QrCode } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="w-full py-20 md:py-40 px-6 md:px-8 bg-background relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-sage text-sm md:text-base uppercase tracking-[0.2em] mb-4 md:mb-6 font-semibold">
          Let&apos;s Connect
        </h2>
        <h3 className="text-4xl md:text-7xl font-serif text-accent-cream mb-8 md:mb-12">
          Ready to build systems <br className="hidden md:block" /> that scale?
        </h3>
        
        <p className="text-lg md:text-xl text-accent-cream/80 max-w-2xl font-light leading-relaxed mb-10 md:mb-16">
          Whether you&apos;re looking to reduce clinical workflow friction, optimize CRM operations, or chat about product strategy, I&apos;d love to hear from you.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-6">
          <a
            href="mailto:sroyatushar@gmail.com"
            className="flex items-center gap-3 bg-accent-cream text-primary-green px-6 py-4 md:px-8 md:py-5 rounded-full font-semibold hover:brightness-110 transition-all transform hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            sroyatushar@gmail.com
          </a>
          
          <a
            href="https://linkedin.com/in/tusharsroya"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border border-sage/30 text-accent-cream px-6 py-4 md:px-8 md:py-5 rounded-full font-semibold hover:bg-sage/10 transition-all"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn Profile
          </a>
        </div>

        {/* Footer / Business Card Integration */}
        <div className="mt-20 md:mt-40 pt-8 md:pt-12 border-t border-sage/10 w-full flex flex-col md:flex-row justify-between items-center text-accent-cream/50 text-sm tracking-widest uppercase gap-6 md:gap-0">
          <p>© {new Date().getFullYear()} Tushar Sroya</p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-center text-center">
            <span>Tech MBA</span>
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-sage/50" />
            <span>Schulich School of Business</span>
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-sage/50" />
            <span className="flex items-center justify-center gap-2">
               Product Management <QrCode className="w-4 h-4 ml-1 opacity-70"/>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

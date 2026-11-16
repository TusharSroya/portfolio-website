"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Loader2 } from "lucide-react";
import { PixelCat } from "@/components/PixelCat";
import { FEATURES, PLATFORMS, USAGE, PAY, type FeatureId } from "@/lib/feedback";

type Form = {
  platform: string;
  usage: string;
  ratings: Partial<Record<FeatureId, number>>;
  focus: number | null;
  setup: number | null;
  nps: number | null;
  favorite: string;
  pay: string;
  frustration: string;
  wish: string;
  quote: string;
  quoteOk: boolean;
  name: string;
  role: string;
  website: string;
};

const empty: Form = {
  platform: "", usage: "", ratings: {}, focus: null, setup: null, nps: null, favorite: "", pay: "",
  frustration: "", wish: "", quote: "", quoteOk: false, name: "", role: "", website: "",
};

const FOCUS_LABELS = ["Much worse", "A bit worse", "No change", "A bit better", "Much better"];
const SETUP_LABELS = ["Very hard", "Hard", "Okay", "Easy", "Very easy"];

const pill = (on: boolean) =>
  `px-4 py-2 rounded-full text-sm border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cream ${
    on ? "bg-accent-cream text-primary-green border-accent-cream font-semibold" : "border-sage/30 text-accent-cream/80 hover:bg-sage/10"
  }`;

function Question({ n, title, hint, children }: { n: number; title: string; hint?: string; children: React.ReactNode }) {
  return (
    <fieldset className="flex flex-col gap-4 border-t border-sage/10 pt-8">
      <legend className="sr-only">{title}</legend>
      <div className="flex gap-4 items-baseline">
        <span className="text-sage text-xs tracking-[0.2em] font-semibold tabular-nums">Q{n}</span>
        <div>
          <h2 className="font-serif text-2xl md:text-3xl text-accent-cream text-balance">{title}</h2>
          {hint && <p className="text-accent-cream/60 text-sm mt-1">{hint}</p>}
        </div>
      </div>
      <div className="md:pl-10">{children}</div>
    </fieldset>
  );
}

function Scale({ value, onChange, labels, id }: { value: number | null; onChange: (n: number) => void; labels: string[]; id: string }) {
  return (
    <div className="flex flex-wrap gap-2" role="radiogroup" aria-labelledby={id}>
      {labels.map((l, i) => (
        <button type="button" key={l} role="radio" aria-checked={value === i + 1} className={pill(value === i + 1)} onClick={() => onChange(i + 1)}>
          {l}
        </button>
      ))}
    </div>
  );
}

export default function PomocatFeedback() {
  const [f, setF] = useState<Form>(empty);
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState("");
  const set = <K extends keyof Form>(k: K, v: Form[K]) => setF((p) => ({ ...p, [k]: v }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setState("sending");
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(f),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Your answers couldn't be sent. Try again.");
      setState("done");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Your answers couldn't be sent. Try again.");
      setState("idle");
    }
  }

  if (state === "done") {
    return (
      <main className="min-h-screen bg-background text-accent-cream flex items-center justify-center px-6">
        <div className="max-w-xl text-center flex flex-col items-center gap-6">
          <PixelCat size={96} />
          <h1 className="font-serif text-4xl md:text-6xl">Thank you!</h1>
          <p className="text-lg text-accent-cream/75 font-light">
            The cat has filed your feedback. Every answer goes straight into what I build next.
          </p>
          <Link href="/feedback/pomocat/results" className="flex items-center gap-2 bg-accent-cream text-primary-green px-6 py-3 rounded-full font-semibold hover:brightness-110">
            See what everyone said <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-accent-cream">
      <nav className="max-w-3xl mx-auto px-6 py-6 flex justify-between items-center text-xs tracking-widest uppercase">
        <Link href="/" className="group flex items-center gap-2 text-sage hover:text-accent-cream transition-colors">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Home
        </Link>
        <Link href="/feedback/pomocat/results" className="text-sage hover:text-accent-cream transition-colors">
          Live results →
        </Link>
      </nav>

      <header className="max-w-3xl mx-auto px-6 pt-10 pb-12 flex flex-col gap-6">
        <PixelCat size={72} />
        <p className="text-sage text-sm uppercase tracking-[0.2em] font-semibold">Pomocat · user feedback</p>
        <h1 className="font-serif text-4xl md:text-6xl leading-tight text-balance">How did the cat do?</h1>
        <p className="text-lg text-accent-cream/75 font-light max-w-2xl leading-relaxed">
          Pomocat is a pomodoro timer with a pixel cat that cheers your focus rounds and gets dramatic when you slack off. I&apos;m
          building it in public. This takes about 3 minutes.
        </p>
        <p className="text-sm text-accent-cream/55 max-w-2xl">
          Scores show up anonymously on the <Link href="/feedback/pomocat/results" className="underline hover:text-accent-cream">public results page</Link>. Written answers stay private unless you tick the quote box at the end.
        </p>
      </header>

      <form onSubmit={submit} className="max-w-3xl mx-auto px-6 pb-24 flex flex-col gap-10">
        <input type="text" name="website" id="website" tabIndex={-1} autoComplete="off" className="hidden" value={f.website} onChange={(e) => set("website", e.target.value)} aria-hidden="true" />

        <Question n={1} title="Which version did you use?">
          <div className="flex flex-wrap gap-2">
            {PLATFORMS.map((p) => (
              <button type="button" key={p} className={pill(f.platform === p)} onClick={() => set("platform", p)} aria-pressed={f.platform === p}>{p}</button>
            ))}
          </div>
        </Question>

        <Question n={2} title="How much have you used it?">
          <div className="flex flex-wrap gap-2">
            {USAGE.map((u) => (
              <button type="button" key={u} className={pill(f.usage === u)} onClick={() => set("usage", u)} aria-pressed={f.usage === u}>{u}</button>
            ))}
          </div>
        </Question>

        <Question n={3} title="Rate each feature you tried" hint="1 = didn't work for me, 5 = love it. Skip any you didn't use.">
          <div className="flex flex-col gap-3">
            {FEATURES.map((ft) => (
              <div key={ft.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-2 border-b border-sage/10 last:border-0">
                <span className="text-accent-cream/90" id={`r-${ft.id}`}>{ft.label}</span>
                <div className="flex gap-1.5" role="radiogroup" aria-labelledby={`r-${ft.id}`}>
                  {[1, 2, 3, 4, 5].map((n) => {
                    const on = f.ratings[ft.id] === n;
                    return (
                      <button
                        type="button"
                        key={n}
                        role="radio"
                        aria-checked={on}
                        aria-label={`${n} of 5`}
                        onClick={() => set("ratings", { ...f.ratings, [ft.id]: on ? undefined : n })}
                        className={`w-10 h-10 rounded-full text-sm tabular-nums border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cream ${
                          on ? "bg-accent-cream text-primary-green border-accent-cream font-semibold" : "border-sage/30 hover:bg-sage/10"
                        }`}
                      >
                        {n}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </Question>

        <Question n={4} title="Did Pomocat change how focused your sessions were?">
          <Scale id="q-focus" value={f.focus} onChange={(n) => set("focus", n)} labels={FOCUS_LABELS} />
        </Question>

        <Question n={5} title="How easy was it to install and set up?">
          <Scale id="q-setup" value={f.setup} onChange={(n) => set("setup", n)} labels={SETUP_LABELS} />
        </Question>

        <Question n={6} title="How likely are you to recommend Pomocat to a friend?" hint="0 = not at all, 10 = already did">
          <div className="grid grid-cols-6 sm:grid-cols-11 gap-1.5 max-w-xl" role="radiogroup" aria-label="Recommendation score">
            {Array.from({ length: 11 }, (_, n) => (
              <button
                type="button"
                key={n}
                role="radio"
                aria-checked={f.nps === n}
                onClick={() => set("nps", n)}
                className={`h-11 rounded-lg text-sm tabular-nums border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cream ${
                  f.nps === n ? "bg-accent-cream text-primary-green border-accent-cream font-semibold" : "border-sage/30 hover:bg-sage/10"
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        </Question>

        <Question n={7} title="Which feature would you miss most if it disappeared?">
          <div className="flex flex-wrap gap-2">
            {FEATURES.map((ft) => (
              <button type="button" key={ft.id} className={pill(f.favorite === ft.id)} onClick={() => set("favorite", ft.id)} aria-pressed={f.favorite === ft.id}>{ft.label}</button>
            ))}
          </div>
        </Question>

        <Question n={8} title="If Pomocat cost money, what would you pay?">
          <div className="flex flex-wrap gap-2">
            {PAY.map((p) => (
              <button type="button" key={p} className={pill(f.pay === p)} onClick={() => set("pay", p)} aria-pressed={f.pay === p}>{p}</button>
            ))}
          </div>
        </Question>

        <Question n={9} title="What annoyed you or broke?" hint="Bugs, confusing moments, the cat being too much. Private.">
          <textarea id="frustration" rows={4} maxLength={1500} value={f.frustration} onChange={(e) => set("frustration", e.target.value)}
            className="w-full bg-transparent border border-sage/30 rounded-xl p-4 text-accent-cream placeholder:text-accent-cream/35 focus:outline-none focus:border-accent-cream"
            placeholder="The guard cat sat on my notes app during a break…" />
        </Question>

        <Question n={10} title="What one change would make you use it every day?" hint="Private.">
          <textarea id="wish" rows={3} maxLength={1500} value={f.wish} onChange={(e) => set("wish", e.target.value)}
            className="w-full bg-transparent border border-sage/30 rounded-xl p-4 text-accent-cream placeholder:text-accent-cream/35 focus:outline-none focus:border-accent-cream"
            placeholder="Sync my stats across devices…" />
        </Question>

        <Question n={11} title="Pomocat in one or two sentences" hint="Optional. Tick the box if I can show it on the public results page.">
          <div className="flex flex-col gap-4">
            <textarea id="quote" rows={3} maxLength={400} value={f.quote} onChange={(e) => set("quote", e.target.value)}
              className="w-full bg-transparent border border-sage/30 rounded-xl p-4 text-accent-cream placeholder:text-accent-cream/35 focus:outline-none focus:border-accent-cream"
              placeholder="I didn't open YouTube once because I felt bad for the cat." />
            <label className="flex items-start gap-3 text-sm text-accent-cream/80 cursor-pointer">
              <input id="quoteOk" type="checkbox" checked={f.quoteOk} onChange={(e) => set("quoteOk", e.target.checked)} className="mt-0.5 w-4 h-4 accent-[#E8DDBC]" />
              Tushar can show this quote publicly
            </label>
            <div className="grid sm:grid-cols-2 gap-3">
              <input id="name" type="text" maxLength={60} value={f.name} onChange={(e) => set("name", e.target.value)} placeholder="First name (optional)"
                className="bg-transparent border border-sage/30 rounded-xl px-4 py-3 placeholder:text-accent-cream/35 focus:outline-none focus:border-accent-cream" />
              <input id="role" type="text" maxLength={80} value={f.role} onChange={(e) => set("role", e.target.value)} placeholder="Role, e.g. CS student (optional)"
                className="bg-transparent border border-sage/30 rounded-xl px-4 py-3 placeholder:text-accent-cream/35 focus:outline-none focus:border-accent-cream" />
            </div>
          </div>
        </Question>

        {error && <p role="alert" className="text-[#F2B8A8] text-sm border border-[#F2B8A8]/40 rounded-xl px-4 py-3">{error}</p>}

        <button type="submit" disabled={state === "sending"}
          className="self-start flex items-center gap-2 bg-accent-cream text-primary-green px-8 py-4 rounded-full font-semibold hover:brightness-110 disabled:opacity-60 transition-all">
          {state === "sending" ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
          {state === "sending" ? "Sending…" : "Send feedback"}
        </button>
      </form>
    </main>
  );
}

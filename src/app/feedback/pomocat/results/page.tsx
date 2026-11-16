import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { PixelCat } from "@/components/PixelCat";
import { FEATURES, PAY, PLATFORMS, loadFeedback, storeConfigured, type FeedbackEntry } from "@/lib/feedback";
import { POMOCAT_JOURNEY } from "@/data/pomocatJourney";

export const revalidate = 60; // refresh the wall at most once a minute

export const metadata: Metadata = {
  title: "The Pomocat Wall",
  description: "Live, public user feedback for Pomocat, a pixel-cat pomodoro timer built in public by Tushar Sroya: NPS, feature scores, quotes, and what changed because of them.",
  alternates: { canonical: "/feedback/pomocat/results" },
  openGraph: {
    title: "The Pomocat Wall | Tushar Sroya",
    description: "Live user feedback for Pomocat, built in public.",
  },
};

const avg = (xs: number[]) => (xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : null);
const pct = (n: number, d: number) => (d ? Math.round((n / d) * 100) : 0);

function summarize(rows: FeedbackEntry[]) {
  const n = rows.length;
  const promoters = rows.filter((r) => r.nps >= 9).length;
  const detractors = rows.filter((r) => r.nps <= 6).length;
  const passives = n - promoters - detractors;
  const nps = n ? Math.round(((promoters - detractors) / n) * 100) : null;
  const focusBetter = pct(rows.filter((r) => r.focus >= 4).length, n);
  const setup = avg(rows.map((r) => r.setup));
  const features = FEATURES.map((f) => {
    const scores = rows.map((r) => r.ratings?.[f.id]).filter((x): x is number => typeof x === "number");
    return { ...f, avg: avg(scores), count: scores.length, missed: rows.filter((r) => r.favorite === f.id).length };
  }).sort((a, b) => (b.avg ?? 0) - (a.avg ?? 0));
  const platforms = PLATFORMS.map((p) => ({ label: p, count: rows.filter((r) => r.platform === p).length }));
  const pay = PAY.map((p) => ({ label: p, count: rows.filter((r) => r.pay === p).length }));
  const quotes = rows.filter((r) => r.quoteOk && r.quote).reverse();
  // cumulative responses by day
  const byDay = new Map<string, number>();
  for (const r of rows) {
    const d = r.createdAt.slice(0, 10);
    byDay.set(d, (byDay.get(d) ?? 0) + 1);
  }
  let running = 0;
  const timeline = [...byDay.entries()].sort().map(([day, c]) => ({ day, total: (running += c) }));
  return { n, promoters, passives, detractors, nps, focusBetter, setup, features, platforms, pay, quotes, timeline };
}

function Stat({ value, label, sub }: { value: string; label: string; sub?: string }) {
  return (
    <div className="flex flex-col gap-1 min-w-0">
      <span className="font-serif text-5xl md:text-6xl text-accent-cream tabular-nums leading-none">{value}</span>
      <span className="text-sage text-xs uppercase tracking-[0.2em] font-semibold mt-2">{label}</span>
      {sub && <span className="text-accent-cream/55 text-sm">{sub}</span>}
    </div>
  );
}

function Section({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-8 border-t border-sage/10 pt-12">
      <div>
        <p className="text-sage text-xs uppercase tracking-[0.2em] font-semibold">{eyebrow}</p>
        <h2 className="font-serif text-3xl md:text-4xl mt-2 text-balance">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Growth({ points }: { points: { day: string; total: number }[] }) {
  if (points.length < 2) return <p className="text-accent-cream/55">The growth line appears after a second day of responses.</p>;
  const W = 640, H = 180, P = { l: 36, r: 12, t: 12, b: 28 };
  const max = points[points.length - 1].total;
  const x = (i: number) => P.l + (i / (points.length - 1)) * (W - P.l - P.r);
  const y = (v: number) => H - P.b - (v / max) * (H - P.t - P.b);
  const line = points.map((p, i) => `${i ? "L" : "M"}${x(i).toFixed(1)},${y(p.total).toFixed(1)}`).join(" ");
  const area = `${line} L${x(points.length - 1)},${H - P.b} L${x(0)},${H - P.b} Z`;
  const fmt = (d: string) => new Date(d + "T12:00:00Z").toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: "UTC" });
  const last = points.length - 1;
  return (
    <div className="overflow-x-auto">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full min-w-[320px]" role="img" aria-label={`Responses grew to ${max} over ${points.length} days`}>
        {[0, 0.5, 1].map((t) => (
          <g key={t}>
            <line x1={P.l} x2={W - P.r} y1={y(max * t)} y2={y(max * t)} stroke="#8BA896" strokeOpacity={0.15} />
            <text x={P.l - 8} y={y(max * t) + 4} textAnchor="end" fontSize={11} fill="#8BA896">{Math.round(max * t)}</text>
          </g>
        ))}
        <path d={area} fill="#E8DDBC" fillOpacity={0.08} />
        <path d={line} fill="none" stroke="#E8DDBC" strokeWidth={2} />
        <circle cx={x(last)} cy={y(max)} r={4} fill="#E59A4C" />
        <text x={P.l} y={H - 8} fontSize={11} fill="#8BA896">{fmt(points[0].day)}</text>
        <text x={W - P.r} y={H - 8} fontSize={11} fill="#8BA896" textAnchor="end">{fmt(points[last].day)}</text>
      </svg>
    </div>
  );
}

function Bars({ items, total }: { items: { label: string; count: number }[]; total: number }) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((it) => (
        <div key={it.label} className="flex flex-col gap-1.5">
          <div className="flex justify-between text-sm"><span>{it.label}</span><span className="tabular-nums text-accent-cream/60">{pct(it.count, total)}%</span></div>
          <div className="h-2 rounded-full bg-sage/10 overflow-hidden"><div className="h-full bg-sage rounded-full" style={{ width: `${pct(it.count, total)}%` }} /></div>
        </div>
      ))}
    </div>
  );
}

export default async function PomocatWall() {
  let rows: FeedbackEntry[] = [];
  if (storeConfigured()) {
    try { rows = await loadFeedback(); } catch { rows = []; }
  }
  const s = summarize(rows);

  return (
    <main className="min-h-screen bg-background text-accent-cream">
      <nav className="max-w-5xl mx-auto px-6 py-6 flex justify-between items-center text-xs tracking-widest uppercase">
        <Link href="/" className="group flex items-center gap-2 text-sage hover:text-accent-cream transition-colors">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Home
        </Link>
        <Link href="/feedback/pomocat" className="text-sage hover:text-accent-cream transition-colors">Give feedback →</Link>
      </nav>

      <div className="max-w-5xl mx-auto px-6 pb-24 flex flex-col gap-16">
        <header className="pt-8 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <PixelCat size={64} />
            <span className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-sage font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#E59A4C] animate-pulse motion-reduce:animate-none" /> Live · built in public
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] text-balance">The Pomocat Wall</h1>
          <p className="text-lg md:text-xl text-accent-cream/75 font-light max-w-2xl leading-relaxed">
            Pomocat is a pomodoro timer for macOS and Windows with a pixel cat that guards your focus. This is what real users think, updated as answers come in, and what I changed because of it.
          </p>
        </header>

        {s.n === 0 ? (
          <section className="border border-sage/20 rounded-3xl p-8 md:p-12 flex flex-col items-start gap-5">
            <h2 className="font-serif text-3xl">No responses yet</h2>
            <p className="text-accent-cream/70 max-w-xl">
              Once people answer the 3-minute survey, this page fills in with the recommendation score, feature ratings, a growth chart and quotes they agreed to share.
            </p>
            <Link href="/feedback/pomocat" className="flex items-center gap-2 bg-accent-cream text-primary-green px-6 py-3 rounded-full font-semibold hover:brightness-110">
              Be the first <ArrowRight className="w-4 h-4" />
            </Link>
          </section>
        ) : (
          <>
            <section className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
              <Stat value={String(s.n)} label="Responses" sub={s.platforms.map((p) => `${p.count} ${p.label}`).join(" · ")} />
              <Stat value={s.nps === null ? "–" : (s.nps > 0 ? "+" : "") + s.nps} label="Net Promoter Score" sub="−100 to +100" />
              <Stat value={`${s.focusBetter}%`} label="Focused better" sub="said sessions improved" />
              <Stat value={s.setup === null ? "–" : s.setup.toFixed(1)} label="Setup ease" sub="out of 5" />
            </section>

            <Section eyebrow="Would you recommend it?" title="Promoters, passives, detractors">
              <div className="flex flex-col gap-3">
                <div className="flex h-4 rounded-full overflow-hidden bg-sage/10" role="img" aria-label={`${s.promoters} promoters, ${s.passives} passives, ${s.detractors} detractors`}>
                  <div className="bg-sage" style={{ width: `${pct(s.promoters, s.n)}%` }} />
                  <div className="bg-accent-cream/40" style={{ width: `${pct(s.passives, s.n)}%` }} />
                  <div className="bg-[#E59A4C]" style={{ width: `${pct(s.detractors, s.n)}%` }} />
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-accent-cream/70 tabular-nums">
                  <span><i className="inline-block w-2.5 h-2.5 rounded-full bg-sage mr-2" />Promoters (9–10) {pct(s.promoters, s.n)}%</span>
                  <span><i className="inline-block w-2.5 h-2.5 rounded-full bg-accent-cream/40 mr-2" />Passives (7–8) {pct(s.passives, s.n)}%</span>
                  <span><i className="inline-block w-2.5 h-2.5 rounded-full bg-[#E59A4C] mr-2" />Detractors (0–6) {pct(s.detractors, s.n)}%</span>
                </div>
              </div>
            </Section>

            <Section eyebrow="Feature scores" title="What's working, out of 5">
              <div className="flex flex-col gap-4">
                {s.features.map((f) => (
                  <div key={f.id} className="grid grid-cols-[minmax(0,1fr)_auto] md:grid-cols-[16rem_minmax(0,1fr)_7rem] items-center gap-x-4 gap-y-1.5">
                    <span className="text-sm md:text-base">{f.label}</span>
                    <div className="col-span-2 md:col-span-1 md:order-none order-last h-2.5 rounded-full bg-sage/10 overflow-hidden">
                      <div className="h-full bg-accent-cream rounded-full" style={{ width: `${((f.avg ?? 0) / 5) * 100}%` }} />
                    </div>
                    <span className="text-right text-sm tabular-nums text-accent-cream/70">
                      {f.avg === null ? "no ratings" : `${f.avg.toFixed(1)} · ${f.count} rated`}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-accent-cream/55">
                Most missed if it disappeared:{" "}
                <span className="text-accent-cream">{[...s.features].sort((a, b) => b.missed - a.missed)[0]?.label}</span>
              </p>
            </Section>

            <div className="grid md:grid-cols-2 gap-16 md:gap-12">
              <Section eyebrow="Growth" title="Responses over time">
                <Growth points={s.timeline} />
              </Section>
              <Section eyebrow="Pricing signal" title="What people would pay">
                <Bars items={s.pay} total={s.n} />
              </Section>
            </div>

            {s.quotes.length > 0 && (
              <Section eyebrow="In their words" title="What users are saying">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
                  {s.quotes.map((q, i) => (
                    <figure key={i} className="break-inside-avoid mb-5 border border-sage/20 rounded-2xl p-6 flex flex-col gap-4 bg-sage/5">
                      <Quote className="w-5 h-5 text-sage" aria-hidden="true" />
                      <blockquote className="font-serif text-xl leading-snug">{q.quote}</blockquote>
                      <figcaption className="text-sm text-accent-cream/60">
                        {q.name || "Anonymous"}{q.role ? `, ${q.role}` : ""} · {q.platform}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </Section>
            )}
          </>
        )}

        <Section eyebrow="Build log" title="You said, I shipped">
          <ol className="flex flex-col">
            {POMOCAT_JOURNEY.map((j, i) => (
              <li key={i} className="grid md:grid-cols-[7rem_minmax(0,1fr)_minmax(0,1fr)] gap-2 md:gap-8 py-5 border-b border-sage/10 last:border-0">
                <span className="text-sage text-xs uppercase tracking-[0.2em] font-semibold pt-1">{j.when}</span>
                <p className="text-accent-cream/65"><span className="text-sage">Heard:</span> {j.heard}</p>
                <p><span className="text-sage">Shipped:</span> {j.shipped}</p>
              </li>
            ))}
          </ol>
        </Section>

        <section className="border-t border-sage/10 pt-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="font-serif text-3xl">Tried Pomocat?</h2>
            <p className="text-accent-cream/65 mt-1">Your answers shape the next update. About 3 minutes.</p>
          </div>
          <Link href="/feedback/pomocat" className="self-start flex items-center gap-2 bg-accent-cream text-primary-green px-6 py-3 rounded-full font-semibold hover:brightness-110">
            Give feedback <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </main>
  );
}

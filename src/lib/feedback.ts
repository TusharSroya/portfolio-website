// Pomocat feedback: survey definition + storage (Upstash Redis REST, free tier via the Vercel Marketplace).
// No SDK: two REST calls. Vercel injects KV_REST_API_URL / KV_REST_API_TOKEN (or UPSTASH_REDIS_REST_*) when the store is connected.

export const FEATURES = [
  { id: "timer", label: "Focus timer & rounds" },
  { id: "pet", label: "Pixel pet & notch bar" },
  { id: "music", label: "Music tray" },
  { id: "guard", label: "Guard cat (distraction blocking)" },
  { id: "xp", label: "XP, levels & unlocks" },
  { id: "setup", label: "First-run setup guide" },
] as const;

export type FeatureId = (typeof FEATURES)[number]["id"];

export const PLATFORMS = ["macOS", "Windows"] as const;
export const USAGE = ["Tried it once", "A few sessions", "About a week", "Most days"] as const;
export const PAY = ["Only if free", "$1–3 one-time", "$4–8 one-time", "$9+ or a subscription"] as const;

export type FeedbackEntry = {
  createdAt: string;
  platform: (typeof PLATFORMS)[number];
  usage: (typeof USAGE)[number];
  ratings: Partial<Record<FeatureId, number>>; // 1–5, missing = didn't use
  focus: number; // 1–5, effect on focus
  setup: number; // 1–5, ease of setup
  nps: number; // 0–10
  favorite: FeatureId;
  pay: (typeof PAY)[number];
  frustration: string;
  wish: string;
  quote: string;
  quoteOk: boolean;
  name: string;
  role: string;
};

const KEY = "pomocat:feedback";

// The Vercel integration may add a custom prefix (e.g. STORAGE_KV_REST_API_URL), so match on the suffix.
function env(...suffixes: string[]) {
  for (const suffix of suffixes) {
    const key = Object.keys(process.env).find((k) => k === suffix || k.endsWith("_" + suffix));
    if (key && process.env[key]) return process.env[key];
  }
  return undefined;
}

function creds() {
  const url = env("KV_REST_API_URL", "UPSTASH_REDIS_REST_URL");
  const token = env("KV_REST_API_TOKEN", "UPSTASH_REDIS_REST_TOKEN");
  return url && token ? { url, token } : null;
}

export const storeConfigured = () => creds() !== null;

async function redis(command: (string | number)[]) {
  const c = creds();
  if (!c) throw new Error("store_not_configured");
  const res = await fetch(c.url, {
    method: "POST",
    headers: { Authorization: `Bearer ${c.token}`, "Content-Type": "application/json" },
    body: JSON.stringify(command),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`store_error_${res.status}`);
  return (await res.json()).result;
}

export async function saveFeedback(entry: FeedbackEntry) {
  await redis(["RPUSH", KEY, JSON.stringify(entry)]);
}

export async function loadFeedback(): Promise<FeedbackEntry[]> {
  const rows: string[] = (await redis(["LRANGE", KEY, 0, -1])) ?? [];
  return rows.flatMap((r) => {
    try { return [JSON.parse(r) as FeedbackEntry]; } catch { return []; }
  });
}

const clip = (v: unknown, n: number) => (typeof v === "string" ? v.trim().slice(0, n) : "");
const int = (v: unknown, lo: number, hi: number) => {
  const n = Number(v);
  return Number.isInteger(n) && n >= lo && n <= hi ? n : null;
};
const oneOf = <T extends readonly string[]>(v: unknown, list: T) =>
  (list as readonly string[]).includes(v as string) ? (v as T[number]) : null;

/** Validates untrusted input. Returns the entry or a message saying what to fix. */
export function parseFeedback(body: Record<string, unknown>): FeedbackEntry | string {
  const platform = oneOf(body.platform, PLATFORMS);
  if (!platform) return "Pick the platform you used.";
  const usage = oneOf(body.usage, USAGE);
  if (!usage) return "Say how much you used Pomocat.";
  const nps = int(body.nps, 0, 10);
  if (nps === null) return "Pick a 0–10 recommendation score.";
  const focus = int(body.focus, 1, 5);
  if (focus === null) return "Rate how Pomocat affected your focus.";
  const setup = int(body.setup, 1, 5);
  if (setup === null) return "Rate how easy setup was.";
  const ids = FEATURES.map((f) => f.id) as readonly string[];
  const favorite = oneOf(body.favorite, ids) as FeatureId | null;
  if (!favorite) return "Pick your favorite feature.";
  const pay = oneOf(body.pay, PAY);
  if (!pay) return "Pick what you'd pay.";
  const ratings: Partial<Record<FeatureId, number>> = {};
  const raw = (body.ratings ?? {}) as Record<string, unknown>;
  for (const f of FEATURES) {
    const r = int(raw[f.id], 1, 5);
    if (r !== null) ratings[f.id] = r;
  }
  return {
    createdAt: new Date().toISOString(),
    platform, usage, ratings, focus, setup, nps, favorite, pay,
    frustration: clip(body.frustration, 1500),
    wish: clip(body.wish, 1500),
    quote: clip(body.quote, 400),
    quoteOk: body.quoteOk === true,
    name: clip(body.name, 60),
    role: clip(body.role, 80),
  };
}

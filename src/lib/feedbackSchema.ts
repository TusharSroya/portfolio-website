// Survey definition shared by the form (browser) and the API (server).
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


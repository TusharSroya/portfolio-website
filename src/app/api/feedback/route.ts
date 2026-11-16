import { NextResponse } from "next/server";
import { parseFeedback, saveFeedback, storeConfigured } from "@/lib/feedback";

// Status check: is storage connected? Reveals nothing else.
export async function GET() {
  if (storeConfigured()) return NextResponse.json({ storage: "connected" });
  // Names only (never values), to diagnose a mismatched integration prefix.
  const hints = Object.keys(process.env).filter((k) => /KV|REDIS|UPSTASH|STORAGE|REST_API/.test(k));
  return NextResponse.json({ storage: "not_connected", envNames: hints });
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "The form data couldn't be read. Refresh and try again." }, { status: 400 });
  }
  // Honeypot: bots fill every field, people never see this one.
  if (typeof body.website === "string" && body.website) return NextResponse.json({ ok: true });

  const entry = parseFeedback(body);
  if (typeof entry === "string") return NextResponse.json({ error: entry }, { status: 400 });
  if (!storeConfigured()) {
    return NextResponse.json({ error: "Feedback storage isn't switched on yet. Please try again later." }, { status: 503 });
  }
  try {
    await saveFeedback(entry);
  } catch {
    return NextResponse.json({ error: "Your answers couldn't be saved. Try again in a minute." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}

import { NextResponse } from "next/server";
import { parseFeedback, saveFeedback, storeConfigured } from "@/lib/feedback";

// Status check: is storage connected? Reveals nothing else.
export async function GET() {
  return NextResponse.json({ storage: storeConfigured() ? "connected" : "not_connected" });
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

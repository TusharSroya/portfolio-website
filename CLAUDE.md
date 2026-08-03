# Lingua-Partner — Claude Code Master Context

## 1. Platform & Mission
- **Domain:** Language Learning iOS App — "Family Belonging" through dialect-first language acquisition.
- **Tech Stack:**
    - **Frontend:** Next.js 16 + TypeScript + Tailwind CSS v4 + Framer Motion (marketing site / web companion).
    - **Mobile:** Swift/SwiftUI targeting iPhone 11+ (A13 chip minimum).
    - **On-Device AI:** Gemma 4 E2B/E4B for local inference — zero cloud dependency for core learning loop.
    - **Data:** Local `user_progress.json` for persistence. No remote database.
- **Philosophy:** Local-first, RAG-driven, dialect-first. Prioritizes Eelam Tamil and Household Punjabi over "standard" textbook versions.
- **Goal:** Teach users to *join a conversation*, not pass a test — using articulatory coaching and culturally weighted mastery scoring.

## 2. Architecture — The RAG Learning Loop
The core loop runs entirely on-device:
1. **Listen** — Capture audio via iPhone mic.
2. **Retrieve** — Pull relevant Lesson + IPA tokens + Review Checklist from local `Knowledge Base/`.
3. **Analyze** — Gemma 4 compares audio against "Gold Standard" IPA tokens.
4. **Coach** — Provide feedback using Articulatory Mechanics (tongue placement, breath control).
5. **Update** — Persist progress to local `user_progress.json`.

## 3. Key Content Directories

| Directory | Purpose |
|-----------|---------|
| `Curriculum/Roadmap.md` | Master plan from "Survival" to "Fluency" |
| `Curriculum/MASTERY_ENGINE.md` | Scoring protocol — Honorifics (40%), Pronunciation (30%) are top weights |
| `Knowledge Base/Lessons/` | 56 enriched files with IPA tokens, articulatory guides, tasks |
| `Knowledge Base/Reviews/` | Rubrics the AI uses to score mastery |
| `Knowledge Base/Correction Policy/` | Coaching tone guidelines (Encouraging vs. Strict) |

## 4. Ownership & Workflow Rules

| Zone | Mandatory Workflow |
|------|-------------------|
| `src/**` (web) | `npx tsc --noEmit` after every change |
| `Curriculum/**` | Changes must preserve MASTERY_ENGINE scoring weights |
| `Knowledge Base/Lessons/` | Every lesson file must include IPA tokens and articulatory guides |
| `Knowledge Base/Correction Policy/` | Review with human before modifying coaching tone |

## 5. Execution Hard-Limits
- **Bug Fixes:** One fix = one commit. Keep changes focused.
- **File Hygiene:** Max 500 lines per file. Extract logic to `utils/` or `components/` if exceeded.
- **Validation:** Never claim a task is "done" without running the relevant verify command and showing output.
- **Web Changes:** Run `npm run build` to confirm no build errors before marking complete.

## 6. Environment & Security Hygiene
- **Secret Masking:** Read `.env` files for context but mask values in output.
- **No-Commit Rule:** Never `git add` any `.env`, secret files, or local data directories.
- **Curriculum Integrity:** Never modify mastery weights (Honorifics 40%, Pronunciation 30%) without explicit approval.
- **User Data:** `user_progress.json` is append-style — never delete historical progress data.

## 7. Scalability Notes
- **Language Agnostic:** New languages are added by following the existing folder structure. The Mastery Engine handles scoring automatically.
- **Hardware Target:** Optimized for iPhone 11 (A13 chip) using Gemma 4 E2B/E4B for on-device inference.

## 8. Common Commands
```bash
npm run dev      # Start Next.js dev server (web companion)
npm run build    # Production build — run before marking web tasks done
npm run lint     # ESLint check
npx tsc --noEmit # Type-check without emitting
```

"use client";

import { useEffect, useRef } from "react";

interface ParticleMorphProps {
  onComplete: () => void;
  duration?: number; // ms
}

type Particle = {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  size: number;
  alpha: number;
};

// Replicate the exact position algorithm from AnimatedBackground
function computeHalftoneTargets(
  width: number,
  height: number
): { x: number; y: number }[] {
  const positions: { x: number; y: number }[] = [];
  const baseSpacing = 35;
  const rows = 40;
  const cols = Math.ceil(width / (baseSpacing * 0.5)) * 2;
  const time = 0; // snapshot at t=0 (start of background animation)

  for (let j = 1; j <= rows; j++) {
    const normalizedY = j / rows;
    const scale = Math.pow(normalizedY, 1.8);
    if (scale < 0.02) continue;

    const baseY = height * Math.pow(normalizedY, 1.2);

    for (let i = -cols; i <= cols; i++) {
      const xOffset = i * baseSpacing;
      const screenX = width / 2 + xOffset * scale;
      if (screenX < -50 || screenX > width + 50) continue;

      const wavePhaseX = i * 0.1 + time;
      const wavePhaseY = j * 0.2 - time * 0.5;
      const wave1 = Math.sin(wavePhaseX) * 120 * scale;
      const wave2 = Math.cos(wavePhaseX * 0.5 + wavePhaseY) * 80 * scale;
      const wave3 = Math.sin(wavePhaseX * 2 - wavePhaseY * 0.5) * 40 * scale;
      const finalY = baseY + wave1 + wave2 + wave3;

      if (finalY < -50 || finalY > height + 50) continue;
      positions.push({ x: screenX, y: finalY });
    }
  }
  return positions;
}

function easeInOut(t: number): number {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

export function ParticleMorphTransition({ onComplete, duration = 4000 }: ParticleMorphProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const W = container.offsetWidth;
    const H = container.offsetHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = `${W}px`;
    canvas.style.height = `${H}px`;
    ctx.scale(dpr, dpr);

    // Compute where the halftone dots live
    const targets = computeHalftoneTargets(W, H);

    // Create particles, each gets a random start and a halftone target
    const COUNT = Math.min(targets.length, 600);
    const shuffledTargets = [...targets].sort(() => Math.random() - 0.5).slice(0, COUNT);

    const particles: Particle[] = shuffledTargets.map((t) => ({
      x: Math.random() * W,          // random start (mimics floating particles)
      y: Math.random() * H,
      targetX: t.x,
      targetY: t.y,
      size: Math.random() * 1.5 + 0.8,
      alpha: Math.random() * 0.5 + 0.2,
    }));

    const rgb = [232, 221, 188]; // #E8DDBC
    let startTime: number | null = null;
    let rafId: number;

    const animate = (now: number) => {
      if (!startTime) startTime = now;
      const elapsed = now - startTime;
      const rawProgress = Math.min(elapsed / duration, 1);
      const progress = easeInOut(rawProgress);

      // Background fades from full to 0 over the same duration
      const bgAlpha = 1 - progress;

      ctx.clearRect(0, 0, W, H);

      // Draw background colour fading out
      ctx.fillStyle = `rgba(42, 69, 53, ${bgAlpha})`;
      ctx.fillRect(0, 0, W, H);

      // Draw each particle lerped from start → target
      particles.forEach((p) => {
        const x = p.x + (p.targetX - p.x) * progress;
        const y = p.y + (p.targetY - p.y) * progress;

        // Alpha: stays visible then fades near the very end
        const fadeOut = rawProgress > 0.85 ? 1 - (rawProgress - 0.85) / 0.15 : 1;
        const alpha = p.alpha * fadeOut;

        ctx.beginPath();
        ctx.arc(x, y, p.size * (2.5 * scale(p.targetY, H)), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb.join(",")}, ${alpha})`;
        ctx.fill();
      });

      if (rawProgress < 1) {
        rafId = requestAnimationFrame(animate);
      } else {
        onComplete();
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [duration, onComplete]);

  return (
    <div ref={containerRef} className="absolute inset-0">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}

// Match the perspective scale used by AnimatedBackground so arriving particles look right
function scale(targetY: number, H: number): number {
  const normY = Math.min(targetY / H, 1);
  return Math.max(Math.pow(normY, 1.8), 0.05);
}

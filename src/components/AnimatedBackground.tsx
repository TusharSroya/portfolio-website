"use client";

import { useEffect, useRef } from "react";

export const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const mouse = { x: -1000, y: -1000 };
    const targetMouse = { x: -1000, y: -1000 };
    let lastScrollY = window.scrollY;
    let isMobile = false;

    const checkMobile = () => {
      isMobile = window.matchMedia("(max-width: 768px)").matches;
    };
    checkMobile();

    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile) return;
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
      targetMouse.x = e.clientX - rect.left;
      targetMouse.y = e.clientY - rect.top;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect || !e.touches[0]) return;
      targetMouse.x = e.touches[0].clientX - rect.left;
      targetMouse.y = e.touches[0].clientY - rect.top;
    };

    const handleScroll = () => {
      if (!isMobile) return;
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      // On mobile, scroll causes a horizontal ripple sweep
      const scrollY = window.scrollY;
      const scrollDelta = scrollY - lastScrollY;
      lastScrollY = scrollY;

      // Position the "virtual cursor" at 40% of viewport height, 
      // oscillating horizontally based on scroll depth
      targetMouse.y = window.innerHeight * 0.4;
      targetMouse.x = (width / 2) + Math.sin(scrollY * 0.005) * (width * 0.4);
    };

    const handleMouseLeave = () => {
      if (isMobile) return;
      targetMouse.x = -1000;
      targetMouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchstart", handleTouchMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    const handleResize = () => {
      const parent = canvasRef.current?.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width;
      canvas.height = height;
      checkMobile();
    };
    window.addEventListener("resize", handleResize);

    // Initial size configuration
    setTimeout(handleResize, 100);

    let time = 0;

    const draw = () => {
      time -= 0.01;

      // Autonomous drift on mobile if not interacting
      if (isMobile && targetMouse.x === -1000) {
        // Natural wandering orbit
        mouse.x = (width / 2) + Math.sin(time * 0.5) * (width * 0.3);
        mouse.y = (height / 2) + Math.cos(time * 0.3) * (height * 0.2);
      } else {
        mouse.x += (targetMouse.x - mouse.x) * 0.15;
        mouse.y += (targetMouse.y - mouse.y) * 0.15;
      }

      ctx.clearRect(0, 0, width, height);
      // Extremely subtle, complementing cream/sage blend that won't distract from text
      ctx.fillStyle = "rgba(232, 221, 188, 0.25)";

      const baseSpacing = 35; // Spacing in the absolute foreground
      const rows = 40; // Number of horizontal lines stretching into the distance
      const cols = Math.ceil(width / (baseSpacing * 0.5)) * 2;

      for (let j = 1; j <= rows; j++) {
        const normalizedY = j / rows; // 0 near horizon, 1 at bottom screen

        // Z-Depth scaling (1 at foreground, extremely small at horizon)
        // We use a power curve so it stretches out infinitely
        const scale = Math.pow(normalizedY, 1.8);
        if (scale < 0.02) continue; // Imperceivable scale cut-off

        // Vertical screen position curves downwards to create a "floor"
        const baseY = height * Math.pow(normalizedY, 1.2);

        for (let i = -cols; i <= cols; i++) {
          const xOffset = i * baseSpacing;

          // Apply perspective scaling to X coordinate
          const screenX = width / 2 + (xOffset * scale);

          // Don't draw if it's way off screen
          if (screenX < -50 || screenX > width + 50) continue;

          // 3D Organic Wave math using original coordinates but scaled
          const wavePhaseX = (i * 0.1) + time;
          const wavePhaseY = (j * 0.2) - (time * 0.5);

          const wave1 = Math.sin(wavePhaseX) * 120 * scale;
          const wave2 = Math.cos(wavePhaseX * 0.5 + wavePhaseY) * 80 * scale;
          const wave3 = Math.sin(wavePhaseX * 2 - wavePhaseY * 0.5) * 40 * scale;

          const finalY = baseY + wave1 + wave2 + wave3;

          // The base radius gets infinitely small into the horizon
          const baseRadius = 2.5 * scale;

          // Add interaction (repel dots from mouse)
          const dx = screenX - mouse.x; // Vector from mouse to dot
          const dy = finalY - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const maxDist = 250;
          let drawX = screenX;
          let drawY = finalY;
          let finalRadius = baseRadius;

          if (dist < maxDist && dist > 0.1) {
            // Smoother falloff curve for explosion effect
            const intensity = Math.pow(1 - (dist / maxDist), 1.5);

            // Push dots away
            const pushFactor = intensity * 150;

            // Add pseudo-random scatter based on grid position for chaotic explosion
            const angle = Math.atan2(dy, dx);
            const scatterX = Math.cos(i * 12.3 + j * 4.5) * 40 * intensity;
            const scatterY = Math.sin(i * 4.5 + j * 12.3) * 40 * intensity;

            drawX += Math.cos(angle) * pushFactor + scatterX;
            drawY += Math.sin(angle) * pushFactor + scatterY;

            // Shrink slightly when pushed to look dynamic
            finalRadius = Math.max(0.5, baseRadius - (baseRadius * 0.4 * intensity));
          }

          if (finalRadius <= 0.1) continue;

          ctx.beginPath();
          ctx.arc(drawX, drawY, finalRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        maskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
        animation: "fadeInBackground 3.5s ease 0.8s forwards",
        opacity: 0,
      }}
    >
      <style>{`
        @keyframes fadeInBackground {
          to { opacity: 1; }
        }
      `}</style>
      {/* Uses standard blend mode so the subtle cream/sage color renders cleanly beneath text */}
      <canvas ref={canvasRef} className="w-full h-full opacity-100" />
    </div>
  );
};

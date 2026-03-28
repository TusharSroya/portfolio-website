"use client";

import { useEffect, useRef } from "react";

export const AnimatedRibbon = () => {
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
      
      const scrollY = window.scrollY;
      lastScrollY = scrollY;

      // Position the "virtual cursor" based on scroll depth
      // In ribbon, we want it to sweep vertically through the ribbon's height
      targetMouse.y = height / 2 + Math.sin(scrollY * 0.01) * 80;
      targetMouse.x = (width / 2) + Math.cos(scrollY * 0.005) * (width * 0.4);
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
        mouse.x = (width / 2) + Math.cos(time * 0.4) * (width * 0.3);
        mouse.y = (height / 2) + Math.sin(time * 0.6) * 60;
      } else {
        mouse.x += (targetMouse.x - mouse.x) * 0.15;
        mouse.y += (targetMouse.y - mouse.y) * 0.15;
      }

      ctx.clearRect(0, 0, width, height);
      // Matching the exact coloring of the landing page animation
      ctx.fillStyle = "rgba(232, 221, 188, 0.25)"; 

      // Create a dense, clustered 2D ribbon
      const baseSpacing = 20; 
      const rows = 25; 
      const cols = Math.ceil(width / baseSpacing) + 5; 

      for (let j = 0; j < rows; j++) {
        // Center the ribbon vertically within the container
        const normalizedY = (j / rows) - 0.5; // -0.5 to 0.5
        const baseY = height / 2 + (normalizedY * 160); // Cluster vertically
        
        // Dots shrink towards the top/bottom edges of the ribbon for a feathered blending effect
        // Using 2.0 means edgeScale reaches 0 exactly at normalizedY = -0.5 and 0.5
        const edgeScale = 1 - Math.abs(normalizedY) * 2.0;
        if (edgeScale <= 0) continue;

        for (let i = -5; i <= cols; i++) {
          const screenX = i * baseSpacing;
          
          if (screenX < -50 || screenX > width + 50) continue;

          // 2D Ribbon Wave math
          // Combine multiple sine waves for a natural, flowing free-form feel
          const wavePhaseX = (i * 0.05) + time;
          const wavePhaseY = (j * 0.1) - (time * 0.2);
          
          const wave1 = Math.sin(wavePhaseX) * 100;
          const wave2 = Math.cos(wavePhaseX * 0.3 + wavePhaseY) * 60;
          const wave3 = Math.sin(wavePhaseX * 1.2 - wavePhaseY) * 30;
          
          const finalY = baseY + wave1 + wave2 + wave3;
          
          // Base radius depends on its position in the ribbon thickness
          const baseRadius = 2.5 * edgeScale;
          
          // Add interaction (repel dots from mouse)
          const dx = screenX - mouse.x; 
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
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full opacity-100" />
    </div>
  );
};

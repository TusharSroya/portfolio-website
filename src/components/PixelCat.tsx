// The real Pomocat ginger cat: its 8-frame idle animation (rendered from the app's own sprites, 32×32 per frame).
export function PixelCat({ size = 72 }: { size?: number }) {
  return (
    <>
      <span
        role="img"
        aria-label="Pomocat, a ginger pixel cat"
        className="pomocat-sprite inline-block shrink-0"
        style={{
          width: size,
          height: size,
          backgroundImage: "url(/pomocat-cat-idle.png)",
          backgroundSize: `${size * 8}px ${size}px`,
          backgroundRepeat: "no-repeat",
          imageRendering: "pixelated",
          ["--cat-w" as string]: `${size * 8}px`,
        }}
      />
      <style>{`
        .pomocat-sprite { animation: pomocat-idle 2s steps(8) infinite; }
        @keyframes pomocat-idle { to { background-position: calc(-1 * var(--cat-w)) 0; } }
        @media (prefers-reduced-motion: reduce) { .pomocat-sprite { animation: none; } }
      `}</style>
    </>
  );
}

/**
 * Shared REC isometric wireframe cube mark.
 * Geometry: outer cube + top-face Y (center → N/E/W) with four node dots + REC on right face.
 * Matches static/rec-logo.svg and the forest-green hero reference (no recessed inner square).
 *
 * Structural classes (`rec-logo__*`) enable the hero circuit-draw animation when a parent
 * has `.rec-logo-hero--animate`. Static uses (nav/footer) ignore those classes — same paths.
 */
export const REC_LOGO_GREEN = "#163A32";
export const REC_LOGO_INVERT = "#E8F5F0";

export function RecLogo({
  size = 40,
  className = "",
  invert = false,
  title,
}: {
  /** Rendered CSS width in px (height follows viewBox aspect). */
  size?: number;
  className?: string;
  /** Light strokes for dark backgrounds (e.g. footer). */
  invert?: boolean;
  title?: string;
}) {
  const color = invert ? REC_LOGO_INVERT : REC_LOGO_GREEN;
  // viewBox 200×210 → height = size * 210/200
  const height = (size * 210) / 200;

  // Top face: N(100,14) E(176,54) S/center(100,100) W(24,54)
  const N = { x: 100, y: 14 };
  const E = { x: 176, y: 54 };
  const C = { x: 100, y: 100 };
  const W = { x: 24, y: 54 };

  return (
    <svg
      viewBox="0 0 200 210"
      width={size}
      height={height}
      className={`rec-logo ${className}`.trim()}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {title ? <title>{title}</title> : null}

      {/* Outer cube silhouette */}
      <path
        className="rec-logo__stroke rec-logo__stroke--sides"
        d="M100 14 L176 54 V146 L100 186 L24 146 V54 Z"
        fill="none"
        stroke={color}
        strokeWidth="2.25"
        strokeLinejoin="round"
        pathLength={1}
      />

      {/* Top-face Y: center → top / right / left */}
      <path
        className="rec-logo__stroke rec-logo__stroke--top"
        d={`M${C.x} ${C.y} L${N.x} ${N.y} M${C.x} ${C.y} L${E.x} ${E.y} M${C.x} ${C.y} L${W.x} ${W.y}`}
        fill="none"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
      />

      {/* Four nodes: top, center, left, right */}
      <circle className="rec-logo__dot" cx={N.x} cy={N.y} r="2.4" fill={color} />
      <circle className="rec-logo__dot" cx={C.x} cy={C.y} r="2.4" fill={color} />
      <circle className="rec-logo__dot" cx={W.x} cy={W.y} r="2.4" fill={color} />
      <circle className="rec-logo__dot" cx={E.x} cy={E.y} r="2.4" fill={color} />

      {/*
        REC painted on the right face.
        Local x follows top edge ≈ (0.855, -0.518); local y follows vertical face edge.
      */}
      <g transform="matrix(0.86, -0.5, 0, 0.92, 138, 128)">
        {/* Inner group keeps matrix transform intact when CSS fades the mark in */}
        <g className="rec-logo__mark">
          <text
            x="0"
            y="0"
            textAnchor="middle"
            dominantBaseline="central"
            fill={color}
            fontSize="26"
            fontWeight="700"
            fontFamily="Arial, Helvetica, sans-serif"
            letterSpacing="1.5"
          >
            REC
          </text>
        </g>
      </g>
    </svg>
  );
}

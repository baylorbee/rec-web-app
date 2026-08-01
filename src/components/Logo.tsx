export function Logo({
  className = "",
  markClassName = "",
  showWordmark = true,
  invert = false,
}: {
  className?: string;
  markClassName?: string;
  showWordmark?: boolean;
  invert?: boolean;
}) {
  const stroke = invert ? "#E8F5F0" : "#0B3D36";
  const accent = invert ? "#3DDC97" : "#1FA87A";
  const text = invert ? "text-white" : "text-navy";

  return (
    <a
      href="#top"
      className={`inline-flex items-center gap-2.5 ${text} ${className}`}
      aria-label="Refine Energy Consulting home"
    >
      <svg
        viewBox="0 0 48 52"
        className={`h-9 w-8 shrink-0 ${markClassName}`}
        aria-hidden="true"
      >
        {/* Isometric cube wireframe with network motif + REC face */}
        <path
          d="M24 2 L44 13.5 V38.5 L24 50 L4 38.5 V13.5 Z"
          fill="none"
          stroke={stroke}
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <path
          d="M24 2 L24 26 M24 26 L44 13.5 M24 26 L4 13.5"
          fill="none"
          stroke={stroke}
          strokeWidth="1.25"
          strokeLinejoin="round"
          opacity="0.55"
        />
        {/* Top face network nodes */}
        <circle cx="24" cy="10" r="1.6" fill={accent} />
        <circle cx="17" cy="14" r="1.3" fill={accent} />
        <circle cx="31" cy="14" r="1.3" fill={accent} />
        <circle cx="24" cy="18" r="1.3" fill={accent} />
        <path
          d="M24 10 L17 14 L24 18 L31 14 Z"
          fill="none"
          stroke={accent}
          strokeWidth="1"
          opacity="0.85"
        />
        {/* Front-right face: REC */}
        <text
          x="30"
          y="36"
          textAnchor="middle"
          fill={stroke}
          fontSize="7.5"
          fontWeight="700"
          fontFamily="var(--font-display), system-ui, sans-serif"
          letterSpacing="0.5"
        >
          REC
        </text>
      </svg>
      {showWordmark && (
        <span className="font-display text-[15px] font-semibold tracking-tight leading-tight">
          Refine Energy
          <span
            className={`block text-[11px] font-medium tracking-wide opacity-90 ${
              invert ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Consulting
          </span>
        </span>
      )}
    </a>
  );
}

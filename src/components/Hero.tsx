import { hero } from "@/lib/content";
import { ButtonLink, Container } from "./ui";

function HeroCube() {
  return (
    <div className="relative mx-auto mt-10 w-full max-w-md lg:mt-0 lg:max-w-none" aria-hidden>
      <div className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle_at_center,rgba(31,168,122,0.18),transparent_65%)] blur-2xl" />
      <svg
        viewBox="0 0 420 440"
        className="mx-auto h-auto w-full max-w-[340px] drop-shadow-sm animate-float"
        role="img"
        aria-label="REC isometric cube logo"
      >
        <defs>
          <linearGradient id="cubeEdge" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0B3D36" />
            <stop offset="100%" stopColor="#1FA87A" />
          </linearGradient>
        </defs>
        {/* Large isometric cube */}
        <path
          d="M210 28 L372 118 V302 L210 392 L48 302 V118 Z"
          fill="none"
          stroke="url(#cubeEdge)"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        <path
          d="M210 28 L210 210 M210 210 L372 118 M210 210 L48 118"
          fill="none"
          stroke="#0B3D36"
          strokeWidth="2"
          opacity="0.45"
        />
        {/* Network on top face */}
        <circle cx="210" cy="95" r="5" fill="#1FA87A" />
        <circle cx="155" cy="125" r="4" fill="#1FA87A" />
        <circle cx="265" cy="125" r="4" fill="#1FA87A" />
        <circle cx="210" cy="155" r="4" fill="#1FA87A" />
        <circle cx="175" cy="100" r="3" fill="#0B3D36" opacity="0.5" />
        <circle cx="245" cy="100" r="3" fill="#0B3D36" opacity="0.5" />
        <path
          d="M210 95 L155 125 L210 155 L265 125 Z M210 95 L175 100 M210 95 L245 100 M155 125 L175 100 M265 125 L245 100"
          fill="none"
          stroke="#1FA87A"
          strokeWidth="1.75"
          opacity="0.9"
        />
        {/* REC wordmark on front-right face */}
        <text
          x="275"
          y="275"
          textAnchor="middle"
          fill="#0B1F33"
          fontSize="42"
          fontWeight="700"
          fontFamily="var(--font-display), system-ui, sans-serif"
          letterSpacing="4"
          transform="skewX(-12)"
        >
          REC
        </text>
        {/* Subtle grid dots */}
        {[0, 1, 2, 3].map((i) => (
          <circle
            key={i}
            cx={90 + i * 28}
            cy={340 + (i % 2) * 12}
            r="2"
            fill="#94A3B8"
            opacity="0.45"
          />
        ))}
      </svg>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
      >
        <div className="absolute inset-0 bg-grid-fade opacity-[0.45]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(31,168,122,0.08),_transparent_55%)]" />
        <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          <div className="max-w-2xl">
            <p className="mb-4 font-display text-sm font-semibold tracking-[0.2em] text-accent uppercase">
              Refine Energy Consulting
            </p>
            <h1 className="font-display text-[2.15rem] leading-[1.12] font-bold tracking-tight text-navy sm:text-5xl sm:leading-[1.08]">
              {hero.headline}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              {hero.supporting}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={hero.primaryCta.href}>
                {hero.primaryCta.label}
              </ButtonLink>
              <ButtonLink href={hero.secondaryCta.href} variant="secondary">
                {hero.secondaryCta.label}
              </ButtonLink>
            </div>
          </div>
          <HeroCube />
        </div>
      </Container>
    </section>
  );
}

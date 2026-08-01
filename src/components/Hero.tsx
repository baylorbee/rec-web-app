import { hero } from "@/lib/content";
import { HeroLogo } from "./HeroLogo";
import { ButtonLink, Container } from "./ui";

const badgeIcons = [
  // trend
  <svg key="s" viewBox="0 0 20 20" className="h-4 w-4 text-accent-dark" fill="none" aria-hidden>
    <path d="M3 5l5 5 3-3 6 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 13h5V8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // pulse
  <svg key="m" viewBox="0 0 20 20" className="h-4 w-4 text-accent-dark" fill="none" aria-hidden>
    <path d="M2 10h3l2-4 3 8 2-4h4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // wrench
  <svg key="e" viewBox="0 0 20 20" className="h-4 w-4 text-accent-dark" fill="none" aria-hidden>
    <path d="M12.5 5.5a3.5 3.5 0 00-4.7 4.7L4 14l2 2 3.8-3.8a3.5 3.5 0 004.7-4.7L12 9l-1.8-1.8 2.3-1.7z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
  </svg>,
  // clock
  <svg key="d" viewBox="0 0 20 20" className="h-4 w-4 text-accent-dark" fill="none" aria-hidden>
    <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.75" />
    <path d="M10 6v4l2.5 1.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
  </svg>,
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-grid-fade opacity-[0.35]" />
      </div>

      <Container>
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          <HeroLogo />

          <h1 className="mt-6 max-w-full font-display text-[2.125rem] leading-[1.1] font-bold tracking-tight text-neutral-950 min-[380px]:text-[2.5rem] sm:text-5xl md:text-6xl">
            {hero.headline}
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-balance text-neutral-500 sm:text-lg">
            {hero.supporting}
          </p>

          <div className="mt-8 flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
            <ButtonLink href={hero.primaryCta.href} className="w-full sm:w-auto">
              {hero.primaryCta.label}
            </ButtonLink>
            <ButtonLink
              href={hero.secondaryCta.href}
              variant="secondary"
              className="w-full sm:w-auto"
            >
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>

          <ul className="mt-10 flex w-full flex-wrap items-center justify-center gap-2">
            {hero.badges.map((badge, i) => (
              <li
                key={badge.label}
                className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-neutral-200/90 bg-white/80 px-3 py-2 text-xs font-medium text-neutral-600 shadow-sm sm:gap-2 sm:px-3.5 sm:text-sm"
              >
                <span className="shrink-0">{badgeIcons[i]}</span>
                <span className="text-left">{badge.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

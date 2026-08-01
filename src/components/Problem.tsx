import { problem } from "@/lib/content";
import { Container, SectionLabel } from "./ui";
import { FadeIn } from "./FadeIn";

const icons = {
  schedule: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M3 9h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M8 14h3M13 14h3M8 17h8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  ),
  runtime: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  ),
  fault: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <path
        d="M12 3l9 16H3L12 3z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path d="M12 10v4M12 17h.01" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  ),
};

export function Problem() {
  return (
    <section id="problem" className="py-16 sm:py-20">
      <Container>
        <FadeIn>
          <div className="max-w-2xl">
            <SectionLabel>{problem.eyebrow}</SectionLabel>
            <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              {problem.headline}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              {problem.intro}
            </p>
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {problem.cards.map((card, i) => (
            <FadeIn key={card.title} delayMs={i * 80}>
              <article className="h-full rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold text-navy">
                    {card.title}
                  </h3>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-dark">
                    {icons[card.icon]}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-slate-600">{card.body}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

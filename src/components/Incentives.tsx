import { incentives } from "@/lib/content";
import { Container, SectionLabel } from "./ui";
import { FadeIn } from "./FadeIn";

export function Incentives() {
  return (
    <section id="incentives" className="bg-slate-wash py-16 sm:py-20">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>{incentives.eyebrow}</SectionLabel>
            <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              {incentives.headline}
            </h2>
            <p className="mt-4 text-base text-slate-600">{incentives.intro}</p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {incentives.cards.map((card, i) => (
            <FadeIn key={card.title} delayMs={i * 80}>
              <article className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-soft text-accent-dark">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
                      <path
                        d="M12 3v18M7 8h7a3 3 0 010 6H9"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <span className="rounded-full bg-accent-soft px-2.5 py-1 text-[11px] font-semibold text-accent-dark">
                    {card.tag}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-navy">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {card.body}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

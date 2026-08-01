import { benefits } from "@/lib/content";
import { Container, SectionLabel } from "./ui";
import { FadeIn } from "./FadeIn";

const benefitIcons = [
  // trend down
  <svg key="1" viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
    <path d="M4 6l6 6 3-3 7 7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 16h6v-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // shield
  <svg key="2" viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
    <path d="M12 3l8 4v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V7l8-4z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
  </svg>,
  // wrench
  <svg key="3" viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
    <path d="M14.7 6.3a4 4 0 00-5.6 5.6L4 17l3 3 5.1-5.1a4 4 0 005.6-5.6L15 12l-2.3-2.3 2-3.4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>,
  // phone
  <svg key="4" viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
    <rect x="8" y="3" width="8" height="18" rx="2" stroke="currentColor" strokeWidth="1.75" />
    <path d="M11 17h2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
  </svg>,
  // clock
  <svg key="5" viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
    <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
  </svg>,
  // thermo
  <svg key="6" viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
    <path d="M12 14.5V5a2 2 0 114 0v9.5a3.5 3.5 0 11-4 0z" stroke="currentColor" strokeWidth="1.75" />
  </svg>,
  // scales
  <svg key="7" viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
    <path d="M12 3v18M5 7h14M5 7l-2 6h4L5 7zM19 7l-2 6h4l-2-6z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // doc
  <svg key="8" viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
    <path d="M7 3h7l5 5v13a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
    <path d="M14 3v5h5M9 13h6M9 17h4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
  </svg>,
];

export function Benefits() {
  return (
    <section id="benefits" className="py-16 sm:py-20">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>{benefits.eyebrow}</SectionLabel>
            <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              {benefits.headline}
            </h2>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.items.map((item, i) => (
            <FadeIn key={item.title} delayMs={(i % 4) * 60}>
              <article className="h-full rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6">
                <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-accent-soft text-accent-dark">
                  {benefitIcons[i]}
                </span>
                <h3 className="font-display text-base font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.body}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { howItWorks } from "@/lib/content";
import { Container, SectionLabel } from "./ui";
import { FadeIn } from "./FadeIn";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-20">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>{howItWorks.eyebrow}</SectionLabel>
            <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              {howItWorks.headline}
            </h2>
            <p className="mt-4 text-base text-slate-600">{howItWorks.intro}</p>
          </div>
        </FadeIn>

        <ol className="relative mt-12 grid grid-cols-1 gap-10 sm:mt-14 md:grid-cols-3 md:gap-6">
          <div
            className="pointer-events-none absolute top-8 right-[16%] left-[16%] hidden h-px border-t border-dashed border-slate-300 md:block"
            aria-hidden
          />
          {howItWorks.steps.map((step, i) => (
            <FadeIn key={step.number} delayMs={i * 90}>
              <li className="relative mx-auto max-w-sm text-center md:mx-0 md:max-w-none md:px-2">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-accent/25 bg-accent-soft font-display text-sm font-bold text-accent-dark shadow-sm md:mb-5">
                  {step.number}
                </div>
                <h3 className="font-display text-lg font-semibold text-navy">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {step.body}
                </p>
              </li>
            </FadeIn>
          ))}
        </ol>
      </Container>
    </section>
  );
}

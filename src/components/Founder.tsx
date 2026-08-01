import { founder } from "@/lib/content";
import { Container, SectionLabel } from "./ui";
import { FadeIn } from "./FadeIn";

export function Founder() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <Container>
        <FadeIn>
          <div className="max-w-2xl">
            <SectionLabel>{founder.eyebrow}</SectionLabel>
            <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              {founder.headline}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              {founder.intro}
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <FadeIn>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[4/5] bg-[linear-gradient(145deg,#0B1F33_0%,#0B3D36_45%,#1FA87A_100%)]">
                <div className="absolute inset-0 bg-grid-fade opacity-20" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-sm">
                    <span className="font-display text-4xl font-bold tracking-wider">
                      MR
                    </span>
                  </div>
                  <p className="mt-5 font-display text-lg font-semibold">
                    Matthew Allen Reed
                  </p>
                  <p className="mt-1 text-sm text-white/75">Founder</p>
                </div>
              </div>
              <ul className="grid grid-cols-1 gap-px bg-slate-200 sm:grid-cols-2">
                {founder.credentials.map((c) => (
                  <li
                    key={c}
                    className="bg-white px-4 py-3 text-xs font-medium text-slate-700 sm:text-sm"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delayMs={100}>
            <div>
              <h3 className="font-display text-2xl font-bold text-navy">
                {founder.name}
              </h3>
              <p className="mt-1 text-sm font-semibold text-accent-dark">
                {founder.title}
              </p>
              <div className="mt-6 space-y-4">
                {founder.bio.map((para) => (
                  <p
                    key={para.slice(0, 32)}
                    className="text-sm leading-relaxed text-slate-600 sm:text-base"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

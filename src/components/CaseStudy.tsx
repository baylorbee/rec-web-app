import { caseStudy } from "@/lib/content";
import { Container, SectionLabel } from "./ui";
import { FadeIn } from "./FadeIn";

export function CaseStudy() {
  return (
    <section id="case-study" className="bg-slate-wash py-16 sm:py-20">
      <Container>
        <FadeIn>
          <div className="max-w-2xl">
            <SectionLabel>{caseStudy.eyebrow}</SectionLabel>
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                {caseStudy.headline}
              </h2>
              <span className="rounded-full border border-amber-300/70 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">
                {caseStudy.badge}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              {caseStudy.disclaimer}
            </p>
          </div>
        </FadeIn>

        <FadeIn delayMs={80}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="border-b border-slate-200 p-7 lg:border-r lg:border-b-0">
                <p className="text-xs font-semibold tracking-[0.14em] text-slate-400 uppercase">
                  Building profile
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-navy">
                  {caseStudy.building.name}
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  {caseStudy.building.address}
                </p>
                <dl className="mt-6 space-y-4 text-sm">
                  <div>
                    <dt className="font-medium text-navy">Size & type</dt>
                    <dd className="mt-0.5 text-slate-600">
                      {caseStudy.building.profile}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-navy">Lease</dt>
                    <dd className="mt-0.5 text-slate-600">
                      {caseStudy.building.lease}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-navy">Recommended path</dt>
                    <dd className="mt-0.5 text-slate-600">
                      {caseStudy.building.hvacPath}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="bg-[linear-gradient(160deg,#F0F9F5_0%,#FFFFFF_55%)] p-7">
                <p className="text-xs font-semibold tracking-[0.14em] text-accent-dark uppercase">
                  Illustrative savings scenarios
                </p>
                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  {caseStudy.findings.map((f) => (
                    <div
                      key={f.label}
                      className="rounded-xl border border-accent/15 bg-white/80 p-4"
                    >
                      <p className="text-xs font-semibold tracking-wide text-accent-dark uppercase">
                        {f.label}
                      </p>
                      <p className="mt-1 font-display text-2xl font-bold text-navy">
                        {f.annual}
                      </p>
                      <p className="mt-1 text-sm text-slate-600">{f.savings}</p>
                      <p className="mt-2 text-xs text-slate-500">{f.payback}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="border-t border-slate-200 bg-slate-50 px-7 py-4 text-xs leading-relaxed text-slate-500">
              {caseStudy.note}
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

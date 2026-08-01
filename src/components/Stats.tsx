import { industries, stats } from "@/lib/content";
import { Container } from "./ui";
import { FadeIn } from "./FadeIn";

export function StatsBar() {
  return (
    <section className="pb-8" aria-label="Key figures">
      <Container>
        <FadeIn>
          <div className="overflow-hidden rounded-2xl border border-accent/15 bg-accent/15">
            <dl className="grid grid-cols-1 gap-px min-[400px]:grid-cols-2 sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.value}
                  className="bg-accent-soft/95 px-4 py-5 text-center sm:px-4 sm:py-6"
                >
                  <dt className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                    {stat.value}
                  </dt>
                  <dd className="mx-auto mt-1.5 max-w-[14rem] text-xs leading-snug text-slate-600 sm:max-w-none sm:text-sm">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <p className="mt-3 text-center text-[11px] text-slate-400">
            Figures drawn from DOE citation and REC pricing/analysis in the business overview — payback is illustrative.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}

export function Industries() {
  return (
    <section id="industries" className="py-10" aria-labelledby="industries-heading">
      <Container>
        <FadeIn>
          <h2
            id="industries-heading"
            className="text-center text-sm font-medium tracking-wide text-slate-500"
          >
            {industries.label}
          </h2>
          <ul className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
            {industries.items.map((item) => (
              <li
                key={item}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>
      </Container>
    </section>
  );
}

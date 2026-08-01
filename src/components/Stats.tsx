import { industries, stats } from "@/lib/content";
import { Container } from "./ui";
import { FadeIn } from "./FadeIn";

export function StatsBar() {
  return (
    <section className="pb-8" aria-label="Key figures">
      <Container>
        <FadeIn>
          <div className="overflow-hidden rounded-2xl border border-accent/15 bg-accent-soft/80">
            <dl className="grid grid-cols-2 divide-y divide-accent/15 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
              {stats.map((stat) => (
                <div key={stat.value} className="px-5 py-6 text-center sm:px-4">
                  <dt className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-1.5 text-xs leading-snug text-slate-600 sm:text-sm">
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
    <section className="py-10" aria-labelledby="industries-heading">
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

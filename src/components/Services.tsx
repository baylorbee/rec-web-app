import { services } from "@/lib/content";
import { Container, SectionLabel } from "./ui";
import { FadeIn } from "./FadeIn";

function ThermostatWidget() {
  return (
    <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
      <div className="flex items-center justify-between text-xs text-slate-500">
        <span>Thermostat · Suite 1</span>
        <span className="flex items-center gap-1.5 text-accent-dark">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Online
        </span>
      </div>
      <p className="mt-3 font-display text-4xl font-bold tracking-tight text-navy">
        72°F
      </p>
      <p className="mt-2 text-xs text-slate-500">
        Schedule: Business hours · 8am – 6pm
      </p>
    </div>
  );
}

function AlertsWidget() {
  return (
    <div className="mt-6 space-y-2">
      <div className="rounded-lg bg-red-50 px-3 py-2 text-xs font-medium text-red-700">
        Compressor #3: High temp alert
      </div>
      <div className="rounded-lg bg-emerald-50 px-3 py-2 text-xs font-medium text-emerald-800">
        Unit 2: Running normally
      </div>
      <div className="rounded-lg bg-slate-100 px-3 py-2 text-xs font-medium text-slate-600">
        Zone AHU: Schedule updated
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="bg-slate-wash py-16 sm:py-20">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>{services.eyebrow}</SectionLabel>
            <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              {services.headline}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              {services.intro}
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {services.cards.map((card, i) => (
            <FadeIn key={card.id} delayMs={i * 100}>
              <article className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent-dark">
                  {card.widget === "thermostat" ? (
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
                      <rect x="8" y="2" width="8" height="14" rx="4" stroke="currentColor" strokeWidth="1.75" />
                      <path d="M12 16v4M9 20h6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                      <circle cx="12" cy="10" r="1.5" fill="currentColor" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
                      <path d="M4 19V5M4 19h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                      <path d="M8 14l3-3 3 2 4-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <h3 className="font-display text-xl font-semibold text-navy">
                  {card.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-accent-dark">
                  {card.subtitle}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {card.body}
                </p>
                <ul className="mt-4 space-y-2">
                  {card.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex gap-2 text-sm text-slate-600"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                {card.widget === "thermostat" ? (
                  <ThermostatWidget />
                ) : (
                  <AlertsWidget />
                )}
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { bottomCta, site } from "@/lib/content";
import { ButtonLink, Container } from "./ui";
import { Logo } from "./Logo";
import { FadeIn } from "./FadeIn";

export function BottomCTA() {
  return (
    <section className="border-t border-slate-200/80 bg-[radial-gradient(ellipse_at_center,_rgba(31,168,122,0.08),_transparent_60%)] py-16 sm:py-20">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              {bottomCta.headline}
            </h2>
            <p className="mt-4 text-base text-slate-600">
              {bottomCta.supporting}
            </p>
            <div className="mt-8">
              <ButtonLink href={bottomCta.cta.href}>
                {bottomCta.cta.label} →
              </ButtonLink>
            </div>
            <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-slate-500">
              {bottomCta.notes.map((n) => (
                <li key={n} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-slate-400" />
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy text-slate-300">
      <Container className="flex flex-col items-start justify-between gap-5 py-10 sm:flex-row sm:items-center sm:gap-6">
        <div className="min-w-0 max-w-full">
          <Logo invert showWordmark />
        </div>
        <p className="shrink-0 text-xs leading-relaxed text-slate-500">
          © {year} {site.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

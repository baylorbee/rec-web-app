import { bottomCta, footer, site } from "@/lib/content";
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
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-2">
            <Logo invert showWordmark />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              {footer.blurb}
            </p>
            <dl className="mt-5 space-y-1 text-sm">
              <div>
                <dt className="sr-only">Email</dt>
                <dd>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="hover:text-white"
                  >
                    {site.contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Phone</dt>
                <dd>{site.contact.phone}</dd>
              </div>
              <div>
                <dt className="sr-only">Service area</dt>
                <dd>{site.serviceArea}</dd>
              </div>
            </dl>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-300 transition hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>Email & phone are placeholders pending final contact details.</p>
        </div>
      </Container>
    </footer>
  );
}

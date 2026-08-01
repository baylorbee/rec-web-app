import Image from "next/image";
import { founder } from "@/lib/content";
import { Container, SectionLabel } from "./ui";
import { FadeIn } from "./FadeIn";

export function Founder({ asPage = false }: { asPage?: boolean }) {
  return (
    <section
      id={asPage ? undefined : "about"}
      className={asPage ? "pt-28 pb-16 sm:pt-32 sm:pb-20" : "py-16 sm:py-20"}
      aria-labelledby="founder-heading"
    >
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>{founder.eyebrow}</SectionLabel>
            <h1
              id="founder-heading"
              className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
            >
              {founder.headline}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              {founder.intro}
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid items-start gap-8 sm:mt-14 sm:gap-10 lg:mt-16 lg:grid-cols-[2fr_3fr] lg:gap-14">
          <FadeIn>
            <div className="mx-auto w-full max-w-[260px] sm:max-w-sm lg:mx-0 lg:max-w-none">
              <div className="relative mx-auto aspect-square max-h-[280px] w-full overflow-hidden rounded-2xl bg-slate-100 sm:max-h-none sm:rounded-3xl">
                <Image
                  src={founder.photo.src}
                  alt={founder.photo.alt}
                  fill
                  priority={asPage}
                  sizes="(max-width: 640px) 260px, (max-width: 1024px) 384px, 420px"
                  className="object-cover object-top"
                />
              </div>
              <ul className="mt-5 grid grid-cols-1 gap-y-1.5 text-left text-xs font-medium text-slate-600 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-2 sm:text-sm">
                {founder.credentials.map((c) => (
                  <li key={c} className="break-words">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delayMs={100}>
            <div>
              <h2 className="font-display text-2xl font-bold text-navy sm:text-3xl">
                {founder.name}
              </h2>
              <p className="mt-1.5 text-sm font-semibold text-accent sm:text-base">
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

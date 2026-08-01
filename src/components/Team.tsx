import Image from "next/image";
import { team } from "@/lib/content";
import { Container } from "./ui";
import { FadeIn } from "./FadeIn";

export function Team() {
  return (
    <section
      className="pb-16 pt-4 sm:pb-20 sm:pt-6"
      aria-labelledby="team-heading"
    >
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="team-heading"
              className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl"
            >
              {team.headline}
            </h2>
          </div>
        </FadeIn>

        <ul className="mx-auto mt-10 flex max-w-xl list-none flex-col items-center gap-10 sm:mt-12 sm:flex-row sm:justify-center sm:gap-16">
          {team.members.map((member, i) => (
            <li key={member.name} className="flex flex-col items-center text-center">
              <FadeIn delayMs={i * 80}>
                <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full bg-slate-100 sm:h-36 sm:w-36">
                  <Image
                    src={member.photo.src}
                    alt={member.photo.alt}
                    fill
                    sizes="144px"
                    className="rounded-full object-cover object-top"
                  />
                </div>
                <p className="mt-4 font-display text-lg font-bold text-navy">
                  {member.name}
                </p>
                <p className="mt-1 text-sm font-semibold text-accent">
                  {member.role}
                </p>
              </FadeIn>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

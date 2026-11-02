import { hero, profile } from "../data/content";
import { ArrowDown, ArrowUpRight } from "./Icons";
import Reveal from "./Reveal";

const badgePositions = {
  "top-right": "absolute -top-3 -right-2 sm:-right-3",
  "middle-left": "absolute top-1/2 -left-3 -translate-y-1/2 sm:-left-5",
  "bottom-right": "absolute -bottom-3 right-6 sm:right-8",
};

const dotTones = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  "primary-container": "bg-primary-container",
};

const highlightTones = {
  "on-surface": "text-on-surface",
  primary: "text-primary",
  secondary: "text-secondary",
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pb-20 pt-32 md:px-16 md:pt-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(55%_45%_at_78%_18%,rgba(253,207,205,0.28),transparent_70%)]"
      />

      <div className="mx-auto flex min-h-[calc(100svh-14rem)] max-w-7xl flex-col justify-center">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col gap-6 lg:col-span-7">
            <Reveal className="inline-flex items-center gap-2">
              <span className="h-px w-6 bg-secondary" aria-hidden="true" />
              <span className="font-label-md text-label-md uppercase tracking-widest text-secondary">
                {hero.eyebrow}
              </span>
            </Reveal>

            <Reveal
              as="h1"
              delay={60}
              className="text-balance font-display-hero text-display-hero-mobile leading-none tracking-tight text-on-surface md:text-display-hero"
            >
              {hero.headlineLead}{" "}
              <span className="italic text-primary">{hero.headlineAccent}</span>
              <br />
              {hero.headlineTail}
            </Reveal>

            <Reveal
              as="p"
              delay={120}
              className="max-w-xl font-body-lg text-body-lg text-on-surface-variant"
            >
              {hero.description}
            </Reveal>

            <Reveal
              delay={180}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-lg border border-transparent bg-primary-container px-6 py-3.5 font-label-md text-label-md text-on-primary transition-all duration-200 hover:bg-primary hover:ring-1 hover:ring-secondary active:scale-[0.99]"
              >
                Explore My Work
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#about"
                className="group inline-flex items-center justify-center gap-2 rounded-lg border border-outline-variant bg-surface-container-lowest px-6 py-3.5 font-label-md text-label-md text-on-surface transition-all duration-200 hover:bg-surface-container active:scale-[0.99]"
              >
                About Me
                <ArrowDown className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
              </a>
              <a
                href={profile.resumeUrl || "#resume"}
                target={profile.resumeUrl ? "_blank" : undefined}
                rel={profile.resumeUrl ? "noopener noreferrer" : undefined}
                className="group inline-flex items-center justify-center gap-2 rounded-lg px-2 py-3.5 font-label-md text-label-md text-on-surface underline decoration-secondary/60 decoration-1 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary hover:decoration-2"
              >
                View Résumé
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Reveal>

            <Reveal
              delay={240}
              className="mt-8 grid grid-cols-3 gap-4 border-t border-outline-variant/60 pt-8"
            >
              {hero.highlights.map((item) => (
                <div key={item.label}>
                  <div
                    className={`font-headline-sm text-headline-sm ${highlightTones[item.tone] ?? "text-on-surface"}`}
                  >
                    {item.value}
                  </div>
                  <div className="mt-1 font-label-sm text-label-sm text-on-surface-variant">
                    {item.label}
                  </div>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal
            delay={120}
            className="relative mx-auto flex w-full max-w-md justify-center lg:col-span-5"
          >
            <div className="relative aspect-[19/20] w-full rounded-xl border border-outline-variant/80 bg-surface-container p-3 shadow-sm">
              <div className="relative h-full w-full overflow-hidden rounded-lg border border-outline-variant/40 bg-surface-container-high">
                <img
                  src="/portrait.png"
                  alt="Editorial portrait of Arul Mangai Nayage"
                  width="370"
                  height="391"
                  loading="eager"
                  fetchPriority="high"
                  className="h-full w-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-inverse-surface/40 via-transparent to-transparent"
                />
                <div className="absolute inset-x-4 bottom-4 flex items-end justify-between">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-inverse-on-surface/90">
                    {profile.role}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-fixed" />
                </div>
              </div>

              {hero.badges.map((badge) => (
                <div
                  key={badge.label}
                  className={`flex items-center gap-1.5 rounded-md border border-outline-variant bg-surface-container-lowest px-3 py-1.5 shadow-sm ${badgePositions[badge.position]}`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${dotTones[badge.dot]}`}
                    aria-hidden="true"
                  />
                  <span className="whitespace-nowrap font-label-sm text-label-sm uppercase tracking-wider text-on-surface">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

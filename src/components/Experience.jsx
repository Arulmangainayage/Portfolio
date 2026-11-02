import { experience } from "../data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const dotTones = {
  primary: "bg-primary",
  secondary: "bg-secondary",
};

const labelTones = {
  primary: "text-primary",
  secondary: "text-secondary",
  muted: "text-on-surface-variant",
};

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-24 md:px-16">
      <SectionHeading
        eyebrow={experience.eyebrow}
        title={experience.heading}
        titleClassName="mb-16"
      />

      <ol className="relative space-y-14 border-l border-outline-variant/80 pl-6 md:space-y-16 md:pl-10">
        {experience.items.map((role, index) => (
          <li key={`${role.title}-${role.period}`} className="relative">
            <span
              className={`absolute top-1.5 h-3.5 w-3.5 rounded-full ring-4 ring-background ${
                dotTones[role.tone]
              } -left-[31px] md:-left-[47px]`}
              aria-hidden="true"
            />

            <Reveal delay={Math.min(index, 3) * 80}>
              <div className="mb-2 flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                <h3 className="font-headline-md text-headline-sm text-on-surface md:text-headline-md">
                  {role.title}
                </h3>
                <span className="font-label-md text-label-md text-secondary">
                  {role.period} | {role.mode}
                </span>
              </div>

              <div className="mb-4 font-label-lg text-label-lg font-medium text-primary">
                {role.company}
              </div>

              <p className="mb-6 max-w-3xl text-pretty font-body-md text-body-md text-on-surface-variant">
                {role.description}
              </p>

              <div
                className={`grid grid-cols-1 gap-4 ${
                  role.columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2"
                }`}
              >
                {role.highlights.map((highlight) => (
                  <div
                    key={highlight.title}
                    className="rounded-lg border border-outline-variant/60 bg-surface-container p-4 transition-colors duration-300 hover:border-secondary/60"
                  >
                    <div
                      className={`mb-1 font-label-sm text-label-sm uppercase ${
                        labelTones[highlight.tone] ?? "text-on-surface-variant"
                      }`}
                    >
                      {highlight.label}
                    </div>
                    <div className="mb-2 font-headline-sm text-base text-on-surface">
                      {highlight.title}
                    </div>
                    <p className="text-pretty font-body-sm text-body-sm text-on-surface-variant">
                      {highlight.description}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}

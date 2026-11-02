import { education } from "../data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-7xl px-6 py-24 md:px-16">
      <SectionHeading eyebrow={education.eyebrow} title={education.heading} />

      <Reveal className="mt-12 max-w-4xl rounded-2xl border border-outline-variant bg-surface-container p-8 transition-colors duration-300 hover:border-secondary/50 md:p-10">
        <div className="mb-6 flex flex-col gap-2 border-b border-outline-variant/60 pb-6 md:flex-row md:items-baseline md:justify-between">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
              {education.degreeLabel}
            </span>
            <h3 className="mt-1 font-headline-md text-headline-md text-on-surface">
              {education.degree}
            </h3>
            <div className="mt-1 font-body-md text-body-md text-on-surface-variant">
              {education.institution}
            </div>
          </div>

          <div className="text-left md:text-right">
            <div className="font-headline-sm text-headline-sm text-primary">
              {education.score}
            </div>
            <div className="mt-1 font-label-md text-label-md text-on-surface-variant">
              {education.period}
            </div>
          </div>
        </div>

        <p className="text-pretty font-body-md text-body-md text-on-surface-variant">
          {education.description}
        </p>
      </Reveal>
    </section>
  );
}

import { skills } from "../data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const dotTones = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  tertiary: "bg-tertiary",
  "primary-container": "bg-primary-container",
};

export default function Skills() {
  return (
    <section id="skills" className="bg-surface-container-low/40">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-16">
        <SectionHeading
          eyebrow={skills.eyebrow}
          title={skills.heading}
          titleClassName="mb-16"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {skills.groups.map((group, index) => (
            <Reveal
              key={group.title}
              delay={Math.min(index, 3) * 70}
              className={`flex h-full flex-col justify-between rounded-xl border border-outline-variant bg-surface-container-lowest p-6 transition-colors duration-300 hover:border-secondary/60 ${
                group.wide ? "lg:col-span-2" : ""
              }`}
            >
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <span
                    className={`h-2 w-2 rounded-full ${dotTones[group.tone]}`}
                    aria-hidden="true"
                  />
                  <h3 className="font-label-md text-label-md font-semibold uppercase tracking-wider text-on-surface">
                    {group.title}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded border border-outline-variant/60 bg-surface-container px-3 py-1.5 font-label-md text-label-md text-on-surface transition-colors duration-200 hover:border-primary/40 hover:text-primary"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {group.footnote && (
                <div className="mt-4 border-t border-outline-variant/40 pt-4 font-label-sm text-label-sm text-on-surface-variant">
                  {group.footnote}
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { recognition } from "../data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const labelTones = {
  primary: "text-primary",
  secondary: "text-secondary",
};

const dateTones = {
  primary: "text-primary",
  secondary: "text-secondary",
};

export default function Recognition() {
  return (
    <section className="border-t border-outline-variant/80">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-16">
        <SectionHeading
          eyebrow={recognition.eyebrow}
          title={recognition.heading}
          titleClassName="mb-16"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {recognition.items.map((item, index) => (
            <Reveal
              key={item.title}
              delay={Math.min(index, 3) * 80}
              className="flex h-full flex-col justify-between rounded-xl border border-outline-variant bg-surface-container-low p-6 transition-colors duration-300 hover:border-secondary/60 hover:shadow-ambient"
            >
              <div>
                <div
                  className={`mb-2 font-label-sm text-label-sm uppercase tracking-wider ${
                    labelTones[item.tone]
                  }`}
                >
                  {item.label}
                </div>
                <h3 className="mb-3 text-balance font-headline-sm text-headline-sm text-on-surface">
                  {item.title}
                </h3>
                <p className="mb-6 text-pretty font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center justify-between gap-3 border-t border-outline-variant/40 pt-4">
                <span className="font-label-sm text-label-sm font-semibold text-on-surface">
                  {item.source}
                </span>
                <span
                  className={`shrink-0 font-label-sm text-label-sm ${dateTones[item.tone]}`}
                >
                  {item.date}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

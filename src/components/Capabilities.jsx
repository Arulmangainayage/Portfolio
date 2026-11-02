import { capabilities } from "../data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Capabilities() {
  return (
    <section id="what-i-do" className="bg-surface-container-low/50">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-16">
        <SectionHeading
          eyebrow={capabilities.eyebrow}
          title={capabilities.heading}
          titleClassName="mb-12"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.items.map((item, index) => (
            <Reveal
              as="article"
              key={item.index}
              delay={Math.min(index, 3) * 70}
              className={`group flex h-full flex-col justify-between rounded-xl border border-outline-variant bg-surface-container-lowest p-6 transition-colors duration-300 hover:border-secondary hover:shadow-ambient sm:p-8 ${
                item.wide ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div>
                <div className="mb-3 font-label-sm text-label-sm uppercase tracking-widest text-secondary">
                  {item.index} / Capability
                </div>
                <h3 className="mb-3 font-headline-sm text-headline-sm text-on-surface transition-colors duration-300 group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="mb-6 text-pretty font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 border-t border-outline-variant/40 pt-4">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-outline-variant/60 bg-surface-container px-2.5 py-1 font-label-sm text-label-sm text-on-surface"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

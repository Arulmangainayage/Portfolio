import { about } from "../data/content";
import Reveal from "./Reveal";

const layerTones = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  tertiary: "bg-tertiary",
};

const factTones = {
  primary: "text-primary",
  secondary: "text-secondary",
};

export default function About() {
  const { schematic } = about;

  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 md:px-16">
      <Reveal className="mb-4 flex items-center gap-3">
        <span className="font-label-md text-label-md uppercase tracking-widest text-secondary">
          {about.eyebrow}
        </span>
        <span className="h-px flex-1 bg-outline-variant/60" aria-hidden="true" />
      </Reveal>

      <div className="mt-8 grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="flex flex-col gap-6 lg:col-span-6">
          <Reveal
            as="h2"
            className="text-balance font-headline-lg text-headline-lg-mobile text-on-surface md:text-headline-lg"
          >
            {about.heading}
          </Reveal>

          {about.body.map((paragraph, index) => (
            <Reveal
              as="p"
              key={paragraph.slice(0, 24)}
              delay={80 + index * 60}
              className="text-pretty font-body-lg text-body-lg leading-relaxed text-on-surface-variant"
            >
              {paragraph}
            </Reveal>
          ))}

          <Reveal delay={200} className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
            {about.facts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-lg border border-outline-variant/60 bg-surface-container p-4 transition-colors duration-300 hover:border-secondary/60"
              >
                <div
                  className={`mb-1 font-label-sm text-label-sm uppercase tracking-wider ${factTones[fact.tone]}`}
                >
                  {fact.label}
                </div>
                <div className="font-body-md text-body-md font-medium text-on-surface">
                  {fact.value}
                </div>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal
          delay={120}
          className="flex flex-col gap-6 rounded-xl border border-outline-variant bg-surface-container-low p-6 lg:col-span-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-outline-variant/60 pb-3 sm:gap-4">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
              {schematic.title}
            </span>
            <span className="shrink-0 font-label-sm text-label-sm uppercase text-primary">
              {schematic.version}
            </span>
          </div>

          <div className="space-y-4">
            {schematic.layers.map((layer) => (
              <div key={layer.name}>
                <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-outline-variant/80 bg-surface-container-lowest p-4 transition-colors duration-300 hover:border-secondary/70 sm:gap-4">
                  <div className="flex min-w-0 items-center gap-3">
                    <span
                      className={`h-2.5 w-2.5 shrink-0 rounded-sm ${layerTones[layer.tone]}`}
                      aria-hidden="true"
                    />
                    <div>
                      <div className="font-label-md text-label-md text-on-surface">
                        {layer.name}
                      </div>
                      <div className="font-body-sm text-body-sm text-on-surface-variant">
                        {layer.detail}
                      </div>
                    </div>
                  </div>
                  <span className="shrink-0 rounded bg-surface-container px-2 py-0.5 font-label-sm text-label-sm text-on-surface-variant">
                    {layer.chip}
                  </span>
                </div>

                {layer.connector && (
                  <div className="flex justify-center py-1">
                    <span className="font-label-sm text-label-sm text-outline">
                      ↓ {layer.connector}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-1 border-t border-outline-variant/40 pt-3 font-label-sm text-label-sm text-on-surface-variant sm:flex-row sm:justify-between">
            {schematic.footer.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

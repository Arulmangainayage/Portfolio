import { projects } from "../data/content";
import ProjectVisual from "./ProjectVisual";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const metricTones = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  "primary-container": "bg-primary-container",
};

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24 md:px-16">
      <SectionHeading
        eyebrow={projects.eyebrow}
        title={projects.heading}
        titleClassName="mb-16"
      />

      <div className="space-y-16 lg:space-y-20">
        {projects.items.map((project, index) => {
          const visualFirst = index % 2 === 1;

          return (
            <Reveal
              as="article"
              key={project.id}
              id={project.id}
              className="group grid grid-cols-1 items-center gap-8 rounded-2xl border border-outline-variant bg-surface-container p-6 transition-[box-shadow,border-color] duration-300 hover:border-secondary/50 hover:shadow-ambient md:p-10 lg:grid-cols-12"
            >
              <div
                className={`flex flex-col gap-4 lg:col-span-5 ${
                  visualFirst ? "order-1 lg:order-2" : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`h-2 w-2 rounded-full ${metricTones[project.tone]}`}
                    aria-hidden="true"
                  />
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-balance font-headline-md text-headline-md text-on-surface">
                  {project.title}
                </h3>

                <p className="text-pretty font-body-md text-body-md text-on-surface-variant">
                  {project.description}
                </p>

                <div className="my-2 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-outline-variant/60 bg-surface-container-lowest px-2.5 py-1 font-label-sm text-label-sm text-on-surface"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60 motion-reduce:hidden" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                  </span>
                  <span className="font-label-sm text-label-sm font-semibold uppercase text-primary">
                    {project.metric}
                  </span>
                </div>
              </div>

              <div
                className={`lg:col-span-7 ${
                  visualFirst ? "order-2 lg:order-1" : ""
                }`}
              >
                <ProjectVisual variant={project.visual} />
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

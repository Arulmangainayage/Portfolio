import {
  education,
  experience,
  profile,
  projects,
  recognition,
  resume,
  skills,
} from "../data/content";
import {
  ArrowLeft,
  ArrowUpRight,
  GitHub,
  LinkedIn,
  Mail,
  MapPin,
  Printer,
} from "./Icons";

const dotTones = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  tertiary: "bg-tertiary",
  "primary-container": "bg-primary-container",
};

const updated = new Intl.DateTimeFormat("en-GB", {
  month: "long",
  year: "numeric",
}).format(new Date());

function SectionHeading({ number, title }) {
  return (
    <div className="mb-4 border-b border-outline-variant/60 pb-2">
      <div className="flex items-baseline gap-3">
        <span className="font-label-sm text-label-sm text-secondary">
          {number}
        </span>
        <h2 className="font-headline-sm text-headline-sm text-on-surface">
          {title}
        </h2>
      </div>
    </div>
  );
}

export default function Resume() {
  const resumeProjects = projects.items.slice(0, 3);

  return (
    <div className="min-h-screen bg-surface-container-low px-4 py-6 sm:px-6 sm:py-10 print:min-h-0 print:bg-white print:p-0">
      <div className="mx-auto max-w-5xl print:max-w-none">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3 print:hidden">
          <a
            href="#home"
            className="group inline-flex items-center gap-2 rounded-lg border border-outline-variant bg-surface-container-lowest px-4 py-2.5 font-label-md text-label-md text-on-surface transition-all duration-200 hover:border-primary/40 hover:bg-surface-container hover:text-primary active:scale-[0.99]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
            Back to portfolio
          </a>

          <div className="flex items-center gap-3">
            <span className="hidden font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant sm:inline">
              Updated {updated}
            </span>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-lg bg-primary-container px-4 py-2.5 font-label-md text-label-md text-on-primary transition-all duration-200 hover:bg-primary hover:ring-1 hover:ring-secondary active:scale-[0.99]"
            >
              <Printer className="h-4 w-4" />
              Print / Save PDF
            </button>
          </div>
        </div>

        <article className="resume-sheet overflow-hidden rounded-2xl border border-outline-variant bg-surface-container-lowest shadow-ambient-lg print:overflow-visible print:rounded-none print:border-0 print:shadow-none">
          <header className="relative overflow-hidden border-b border-outline-variant/70 px-6 py-8 sm:px-10 md:px-12 print:px-0 print:pb-5 print:pt-0">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-24 h-56 w-56 rounded-full bg-secondary-container/30 blur-2xl print:hidden"
            />

            <div className="relative flex flex-col gap-6 md:flex-row md:items-start md:justify-between print:flex-row print:items-start print:justify-between">
              <div>
                <span className="font-label-md text-label-md uppercase tracking-widest text-secondary">
                  {resume.eyebrow}
                </span>
                <h1 className="mt-2 text-balance font-display-hero text-[2.5rem] leading-none tracking-tight text-on-surface sm:text-5xl">
                  {profile.name}
                </h1>
                <p className="mt-3 font-headline-sm text-headline-sm italic text-primary">
                  {profile.role}
                </p>
              </div>

              <div className="flex flex-col gap-2 md:items-end md:text-right print:items-end print:text-right">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 font-body-sm text-body-sm text-on-surface-variant transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4 shrink-0 text-secondary" />
                  <span className="break-all">{profile.email}</span>
                </a>
                <span className="inline-flex items-center gap-2 font-body-sm text-body-sm text-on-surface-variant md:justify-end">
                  <MapPin className="h-4 w-4 shrink-0 text-secondary" />
                  {profile.location}
                </span>
                <div className="mt-1 flex flex-wrap gap-2 md:justify-end">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded border border-outline-variant/70 bg-surface-container px-2.5 py-1 font-label-sm text-label-sm text-on-surface transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    <GitHub className="h-3.5 w-3.5" />
                    GitHub
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded border border-outline-variant/70 bg-surface-container px-2.5 py-1 font-label-sm text-label-sm text-on-surface transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    <LinkedIn className="h-3.5 w-3.5" />
                    LinkedIn
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>

            <div className="relative mt-6 flex flex-wrap items-center gap-2 border-t border-outline-variant/50 pt-5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary-fixed/40 px-3 py-1 font-label-sm text-label-sm text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {profile.availability}
              </span>
              {resume.focus.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-outline-variant/60 bg-surface-container px-3 py-1 font-label-sm text-label-sm text-on-surface-variant"
                >
                  {item}
                </span>
              ))}
            </div>
          </header>

          <div className="grid grid-cols-1 gap-10 px-6 py-8 sm:px-10 md:grid-cols-12 md:gap-10 md:px-12 md:py-10 print:grid-cols-12 print:gap-6 print:px-0 print:pb-0 print:pt-6">
            <div className="space-y-8 md:col-span-8 print:col-span-8">
              <section>
                <SectionHeading number="01" title="Profile" />
                <p className="text-pretty font-body-md text-body-md text-on-surface-variant">
                  {resume.summary}
                </p>
              </section>

              <section>
                <SectionHeading number="02" title="Experience" />

                <ol className="space-y-7">
                  {experience.items.map((role) => (
                    <li
                      key={`${role.title}-${role.period}`}
                      className="break-inside-avoid"
                    >
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                        <h3 className="font-headline-sm text-lg leading-snug text-on-surface">
                          {role.title}
                        </h3>
                        <span className="font-label-sm text-label-sm text-secondary">
                          {role.period}
                        </span>
                      </div>

                      <div className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-1 font-label-md text-label-md text-primary">
                        <span>{role.company}</span>
                        <span className="text-outline-variant" aria-hidden="true">
                          •
                        </span>
                        <span className="text-on-surface-variant">
                          {role.mode}
                        </span>
                      </div>

                      <p className="mt-2 text-pretty font-body-sm text-body-sm text-on-surface-variant">
                        {role.description}
                      </p>

                      <ul className="mt-3 space-y-1.5">
                        {role.highlights.map((highlight) => (
                          <li
                            key={highlight.title}
                            className="flex gap-2 font-body-sm text-body-sm text-on-surface-variant"
                          >
                            <span
                              className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-secondary"
                              aria-hidden="true"
                            />
                            <span>
                              <span className="font-semibold text-on-surface">
                                {highlight.title}.
                              </span>{" "}
                              {highlight.description}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ol>
              </section>

              <section>
                <SectionHeading number="03" title="Selected Projects" />

                <div className="space-y-5">
                  {resumeProjects.map((project) => (
                    <div key={project.id} className="break-inside-avoid">
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                        <h3 className="font-headline-sm text-base leading-snug text-on-surface">
                          {project.title}
                        </h3>
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                          {project.category}
                        </span>
                      </div>

                      <p className="mt-1.5 text-pretty font-body-sm text-body-sm text-on-surface-variant">
                        {project.description}
                      </p>

                      <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1.5">
                        <span className="font-label-sm text-label-sm font-semibold text-primary">
                          {project.metric}
                        </span>
                        <span
                          className="h-3 w-px bg-outline-variant/70"
                          aria-hidden="true"
                        />
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {project.tags.join(" · ")}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="space-y-8 md:col-span-4 md:border-l md:border-outline-variant/60 md:pl-8 print:col-span-4 print:border-l print:border-outline-variant/60 print:pl-6">
              <section>
                <SectionHeading number="04" title="Skills" />

                <div className="space-y-4">
                  {skills.groups.map((group) => (
                    <div key={group.title}>
                      <h3 className="mb-1.5 flex items-center gap-1.5 font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            dotTones[group.tone] ?? "bg-primary"
                          }`}
                          aria-hidden="true"
                        />
                        {group.title}
                      </h3>
                      <p className="font-body-sm text-body-sm leading-relaxed text-on-surface">
                        {group.items.join(" · ")}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <SectionHeading number="05" title="Education" />

                <div className="break-inside-avoid">
                  <h3 className="font-headline-sm text-base leading-snug text-on-surface">
                    {education.degree}
                  </h3>
                  <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">
                    {education.institution}
                  </p>
                  <div className="mt-2 flex flex-wrap items-center justify-between gap-2 font-label-sm text-label-sm">
                    <span className="text-primary">{education.score}</span>
                    <span className="text-on-surface-variant">
                      {education.period}
                    </span>
                  </div>
                </div>
              </section>

              <section>
                <SectionHeading number="06" title="Recognition" />

                <ul className="space-y-3.5">
                  {recognition.items.map((item) => (
                    <li
                      key={item.title}
                      className="break-inside-avoid border-l-2 border-outline-variant/70 pl-3"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                          {item.label}
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {item.date}
                        </span>
                      </div>
                      <h3 className="mt-1 font-body-sm font-semibold text-on-surface">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 font-body-sm text-body-sm text-on-surface-variant">
                        {item.source}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            </aside>
          </div>

          <footer className="border-t border-outline-variant/60 px-6 py-4 sm:px-10 md:px-12 print:px-0">
            <div className="flex flex-col items-center justify-between gap-1 text-center sm:flex-row sm:text-left">
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                {profile.name} · Résumé · Updated {updated}
              </span>
              <span className="font-label-sm text-label-sm text-outline">
                References available on request
              </span>
            </div>
          </footer>
        </article>

        <p className="mt-4 text-center font-label-sm text-label-sm text-on-surface-variant print:hidden">
          Tip: choose “Save as PDF” in the print dialog to download a copy.
        </p>
      </div>
    </div>
  );
}

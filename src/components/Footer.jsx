import { useEffect, useState } from "react";
import { nav, profile } from "../data/content";
import { ArrowUpRight } from "./Icons";

const footerNav = nav.filter((item) =>
  ["home", "about", "projects", "experience", "skills", "contact"].includes(
    item.id,
  ),
);

const timeFormatter = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: "Asia/Kolkata",
});

function useIndiaTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => setTime(timeFormatter.format(new Date()));
    update();
    const interval = window.setInterval(update, 30000);
    return () => window.clearInterval(interval);
  }, []);

  return time;
}

export default function Footer() {
  const time = useIndiaTime();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-inverse-surface">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-6 py-12 md:flex-row md:px-16">
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
          <a
            href="#home"
            className="font-headline-md text-headline-md font-bold tracking-tight text-inverse-on-surface"
            aria-label={`${profile.monogram} — ${profile.name}, back to top`}
          >
            {profile.monogram}
          </a>
          <span className="hidden text-outline md:inline" aria-hidden="true">
            |
          </span>
          <p className="font-body-sm text-body-sm text-outline-variant">
            Designed and engineered with curiosity by {profile.shortName}.
          </p>
        </div>

        <nav
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
          aria-label="Footer"
        >
          {footerNav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="font-label-sm text-label-sm text-outline-variant transition-colors hover:text-inverse-on-surface"
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.resumeUrl || "#resume"}
            target={profile.resumeUrl ? "_blank" : undefined}
            rel={profile.resumeUrl ? "noopener noreferrer" : undefined}
            className="font-label-sm text-label-sm text-inverse-primary transition-colors hover:text-inverse-on-surface"
          >
            Résumé
          </a>
          <a
            href="#home"
            className="inline-flex items-center gap-1 font-label-sm text-label-sm text-inverse-primary transition-colors hover:underline hover:underline-offset-4"
          >
            Back to Top
            <ArrowUpRight className="h-3 w-3 -rotate-45" />
          </a>
        </nav>
      </div>

      <div className="border-t border-outline/10 px-6 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
          <p className="font-body-sm text-body-sm text-outline-variant/80">
            © {year} {profile.name}. All rights reserved.
          </p>
          <p className="font-label-sm text-label-sm text-outline-variant/80">
            Bengaluru, India
            {time ? ` · ${time} IST` : ""}
          </p>
        </div>
      </div>
    </footer>
  );
}

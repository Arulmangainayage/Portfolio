import { useEffect, useState } from "react";
import { nav, profile } from "../data/content";
import { ArrowUpRight, Close, Menu } from "./Icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Highlight the section currently in view
  useEffect(() => {
    const ids = nav.map((item) => item.id);
    let frame = 0;

    const update = () => {
      frame = 0;
      const offset = 140;
      let current = ids[0];

      for (const id of ids) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= offset) {
          current = id;
        }
      }

      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (nearBottom) current = ids[ids.length - 1];

      setActive(current);
      setScrolled(window.scrollY > 8);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  // Lock scroll, close on Escape, close when resizing to desktop
  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };

    document.body.classList.add("body-lock");
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    return () => {
      document.body.classList.remove("body-lock");
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 sm:pt-4">
      <div
        className={`mx-auto max-w-7xl rounded-full border bg-surface/85 backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? "border-outline-variant/80 shadow-ambient"
            : "border-outline-variant/50 shadow-sm"
        }`}
      >
        <div className="flex items-center justify-between gap-3 px-4 py-2.5 sm:px-6 sm:py-3">
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="shrink-0 font-headline-sm text-headline-sm font-bold tracking-tight text-on-surface transition-transform active:scale-[0.98]"
            aria-label={`${profile.monogram} — ${profile.name}, back to top`}
          >
            {profile.monogram}
          </a>

          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1" aria-label="Primary">
            {nav.map((item) => {
              const isActive = active === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={isActive ? "location" : undefined}
                  className={`rounded-full px-2.5 py-1.5 font-label-md text-label-md transition-colors xl:px-3 ${
                    isActive
                      ? "bg-surface-container text-primary"
                      : "text-on-surface-variant hover:bg-surface-container/70 hover:text-on-surface"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden xl:flex items-center gap-2 rounded-full border border-outline-variant/60 bg-surface-container px-3 py-1">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60 motion-reduce:hidden" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                {profile.availability}
              </span>
            </div>

            <a
              href={profile.resumeUrl || "#resume"}
              target={profile.resumeUrl ? "_blank" : undefined}
              rel={profile.resumeUrl ? "noopener noreferrer" : undefined}
              className="hidden items-center gap-1.5 rounded-full border border-outline-variant/70 bg-surface-container-lowest px-3.5 py-2 font-label-md text-label-md text-on-surface transition-all duration-200 hover:border-primary/40 hover:text-primary active:scale-[0.98] lg:inline-flex"
            >
              Résumé
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="group inline-flex items-center gap-1.5 rounded-full bg-primary-container px-3.5 py-2 font-label-md text-label-md text-on-primary transition-all duration-200 hover:bg-primary hover:ring-1 hover:ring-secondary active:scale-[0.98] sm:px-4"
            >
              Let's Talk
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-outline-variant/70 bg-surface-container-lowest text-on-surface transition-colors hover:bg-surface-container lg:hidden"
            >
              {open ? <Close /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="menu-panel mx-auto mt-3 max-h-[calc(100dvh-6rem)] w-full max-w-7xl overflow-y-auto rounded-2xl border border-outline-variant/70 bg-surface/95 p-5 shadow-ambient-lg backdrop-blur-xl lg:hidden"
        >
          <nav className="grid grid-cols-2 gap-1.5" aria-label="Mobile">
            {nav.map((item) => {
              const isActive = active === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "location" : undefined}
                  className={`rounded-lg px-3.5 py-3 font-label-md text-label-md transition-colors ${
                    isActive
                      ? "bg-surface-container text-primary"
                      : "text-on-surface-variant hover:bg-surface-container/70 hover:text-on-surface"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <a
            href={profile.resumeUrl || "#resume"}
            target={profile.resumeUrl ? "_blank" : undefined}
            rel={profile.resumeUrl ? "noopener noreferrer" : undefined}
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-between rounded-lg border border-outline-variant/70 bg-surface-container px-3.5 py-3 font-label-md text-label-md text-on-surface transition-colors hover:bg-surface-container-high hover:text-primary"
          >
            View Résumé
            <ArrowUpRight className="h-4 w-4" />
          </a>

          <div className="mt-4 flex flex-col gap-3 border-t border-outline-variant/60 pt-4">
            <a
              href={`mailto:${profile.email}`}
              className="break-all font-body-sm text-body-sm text-on-surface-variant transition-colors hover:text-primary"
            >
              {profile.email}
            </a>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-outline-variant/60 bg-surface-container px-2.5 py-1 font-label-sm text-label-sm text-on-surface-variant">
                {profile.location}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-outline-variant/60 bg-surface-container px-2.5 py-1 font-label-sm text-label-sm text-on-surface-variant">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {profile.availability}
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

import { marquee } from "../data/content";

export default function Marquee() {
  return (
    <section
      aria-label="Areas of expertise"
      className="marquee marquee-mask select-none overflow-hidden border-y border-outline-variant/80 bg-surface-container-low py-4"
    >
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1 ? "true" : undefined}
            className="flex shrink-0 items-center gap-8 pr-8 font-label-lg text-label-lg tracking-widest text-on-surface"
          >
            {marquee.map((item, index) => (
              <div key={item} className="flex items-center gap-8">
                <span className="whitespace-nowrap uppercase">{item}</span>
                <span
                  className={index % 2 === 0 ? "text-secondary" : "text-primary"}
                  aria-hidden="true"
                >
                  ✳
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

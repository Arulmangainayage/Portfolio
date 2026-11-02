import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  id,
  className = "",
  titleClassName = "",
}) {
  return (
    <div className={className}>
      <Reveal className="mb-4 flex items-center gap-3">
        <span className="font-label-md text-label-md uppercase tracking-widest text-secondary">
          {eyebrow}
        </span>
        <span className="h-px flex-1 bg-outline-variant/60" aria-hidden="true" />
      </Reveal>
      {title && (
        <Reveal
          as="h2"
          id={id}
          delay={60}
          className={`text-balance font-headline-lg text-headline-lg-mobile text-on-surface md:text-headline-lg ${titleClassName}`}
        >
          {title}
        </Reveal>
      )}
    </div>
  );
}

import { useEffect, useRef, useState } from "react";
import { contact, profile } from "../data/content";
import {
  ArrowUpRight,
  Check,
  Copy,
  GitHub,
  LinkedIn,
  Mail,
  MapPin,
  Send,
} from "./Icons";
import Reveal from "./Reveal";

const ENDPOINT = (import.meta.env.VITE_FORM_ENDPOINT || "").trim();

const emptyValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
  company: "",
};

const inputClass =
  "w-full rounded-lg border border-on-primary-container/30 bg-surface-container-lowest/15 px-4 py-3 text-sm text-on-primary placeholder:text-on-primary-container/60 transition-all focus:border-on-primary focus:outline-none focus:ring-1 focus:ring-on-primary";

function validate(values) {
  const errors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (values.subject.trim().length < 3) {
    errors.subject = "Please add a short subject.";
  }
  if (values.message.trim().length < 10) {
    errors.message = "Please share a little more detail (10+ characters).";
  }

  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(emptyValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");
  const [copied, setCopied] = useState(false);
  const copyTimer = useRef(null);

  useEffect(() => () => window.clearTimeout(copyTimer.current), []);

  const update = (field) => (event) => {
    const { value } = event.target;
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
    if (status === "error" || status === "mailto") {
      setStatus("idle");
      setFeedback("");
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.clearTimeout(copyTimer.current);
      copyTimer.current = window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const sendViaMailClient = (valuesToSend) => {
    const subject = encodeURIComponent(
      `Portfolio enquiry — ${valuesToSend.subject.trim()}`,
    );
    const body = encodeURIComponent(
      `${valuesToSend.message.trim()}\n\n— ${valuesToSend.name.trim()} (${valuesToSend.email.trim()})`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      const firstField = Object.keys(nextErrors)[0];
      document.getElementById(firstField)?.focus();
      return;
    }

    // Honeypot: silently accept and discard bot submissions
    if (values.company) return;

    if (!ENDPOINT) {
      sendViaMailClient(values);
      setStatus("mailto");
      setFeedback(
        "Your email app should open with the message pre-filled. You can also copy the address below.",
      );
      return;
    }

    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          subject: values.subject.trim(),
          message: values.message.trim(),
          _subject: `Portfolio enquiry — ${values.subject.trim()}`,
        }),
      });

      if (!response.ok) {
        let detail = "";
        try {
          const data = await response.json();
          detail = (data?.errors ?? [])
            .map((item) => item?.message)
            .filter(Boolean)
            .join(" ");
        } catch {
          /* response had no JSON body */
        }
        throw new Error(detail || `Request failed (${response.status}).`);
      }

      setStatus("success");
      setValues(emptyValues);
      setErrors({});
    } catch (error) {
      setStatus("error");
      setFeedback(
        `${error.message || "Something went wrong."} You can also email ${profile.email} directly.`,
      );
    }
  };

  const busy = status === "submitting";

  return (
    <section id="contact" className="bg-primary-container text-on-primary">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-16">
        <Reveal className="mb-4 flex items-center gap-3">
          <span className="font-label-md text-label-md uppercase tracking-widest text-on-primary-container">
            {contact.eyebrow}
          </span>
          <span
            className="h-px flex-1 bg-on-primary-container/30"
            aria-hidden="true"
          />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col gap-6 lg:col-span-5">
            <Reveal
              as="h2"
              className="text-balance font-display-hero text-headline-lg-mobile leading-tight text-on-primary sm:text-headline-lg"
            >
              {contact.heading}
            </Reveal>

            <Reveal
              as="p"
              delay={60}
              className="text-pretty font-body-lg text-body-lg leading-relaxed text-on-primary-container"
            >
              {contact.description}
            </Reveal>

            <Reveal delay={120} className="space-y-4 pt-4">
              <div className="flex flex-wrap items-center gap-3">
                <Mail className="shrink-0 text-on-primary-container" />
                <a
                  href={`mailto:${profile.email}`}
                  className="break-all font-body-md text-body-md text-on-primary underline decoration-secondary-container underline-offset-4 transition-colors hover:decoration-2"
                >
                  {profile.email}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label={
                    copied ? "Email address copied" : "Copy email address"
                  }
                  className="inline-flex items-center gap-1.5 rounded border border-on-primary-container/30 bg-surface/10 px-2.5 py-1 font-label-sm text-label-sm text-on-primary transition-colors hover:bg-surface/20"
                >
                  {copied ? (
                    <Check className="h-3.5 w-3.5" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="shrink-0 text-on-primary-container" />
                <span className="font-body-md text-body-md text-on-primary">
                  {profile.location}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded border border-on-primary-container/30 bg-surface/10 px-3.5 py-1.5 font-label-sm text-label-sm text-on-primary transition-colors hover:bg-surface/20"
                >
                  <GitHub className="h-3.5 w-3.5" />
                  GitHub
                  <ArrowUpRight className="h-3 w-3" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded border border-on-primary-container/30 bg-surface/10 px-3.5 py-1.5 font-label-sm text-label-sm text-on-primary transition-colors hover:bg-surface/20"
                >
                  <LinkedIn className="h-3.5 w-3.5" />
                  LinkedIn
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-on-primary-container/30 bg-surface/10 px-3 py-1.5 font-label-sm text-label-sm text-on-primary-container">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-fixed/70 motion-reduce:hidden" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary-fixed" />
                </span>
                {profile.availability}
              </div>
            </Reveal>
          </div>

          <Reveal
            delay={100}
            className="rounded-2xl border border-on-primary-container/20 bg-surface-container-lowest/10 p-6 backdrop-blur-md md:p-10 lg:col-span-7"
          >
            {status === "success" ? (
              <div className="flex h-full min-h-[320px] flex-col items-start justify-center gap-5">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-on-primary text-primary">
                  <Check className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-primary">
                    Thank you — message received.
                  </h3>
                  <p className="mt-2 font-body-md text-body-md text-on-primary-container">
                    I&apos;ll get back to you shortly. In the meantime, feel free
                    to explore the work above.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="rounded-lg border border-on-primary-container/40 px-4 py-2 font-label-md text-label-md text-on-primary transition-colors hover:bg-surface/10"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      className="mb-2 block font-label-sm text-label-sm uppercase tracking-wider text-on-primary-container"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      placeholder="Your Name"
                      className={inputClass}
                      value={values.name}
                      onChange={update("name")}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p
                        id="name-error"
                        className="mt-1.5 font-body-sm text-body-sm text-secondary-container"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      className="mb-2 block font-label-sm text-label-sm uppercase tracking-wider text-on-primary-container"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="name@company.com"
                      className={inputClass}
                      value={values.email}
                      onChange={update("email")}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p
                        id="email-error"
                        className="mt-1.5 font-body-sm text-body-sm text-secondary-container"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    className="mb-2 block font-label-sm text-label-sm uppercase tracking-wider text-on-primary-container"
                    htmlFor="subject"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="AI Architecture / Data Engineering / Consultation"
                    className={inputClass}
                    value={values.subject}
                    onChange={update("subject")}
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={
                      errors.subject ? "subject-error" : undefined
                    }
                  />
                  {errors.subject && (
                    <p
                      id="subject-error"
                      className="mt-1.5 font-body-sm text-body-sm text-secondary-container"
                    >
                      {errors.subject}
                    </p>
                  )}
                  <div className="mt-2 flex flex-wrap gap-2">
                    {contact.subjects.map((subject) => (
                      <button
                        key={subject}
                        type="button"
                        onClick={() => {
                          setValues((current) => ({ ...current, subject }));
                          setErrors((current) => {
                            if (!current.subject) return current;
                            const next = { ...current };
                            delete next.subject;
                            return next;
                          });
                        }}
                        className="rounded border border-on-primary-container/25 bg-surface/5 px-2 py-1 font-label-sm text-label-sm text-on-primary-container transition-colors hover:bg-surface/15 hover:text-on-primary"
                      >
                        {subject}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-baseline justify-between gap-3">
                    <label
                      className="block font-label-sm text-label-sm uppercase tracking-wider text-on-primary-container"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <span className="font-label-sm text-label-sm text-on-primary-container/70">
                      {values.message.trim().length}/1000
                    </span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    maxLength={1000}
                    placeholder="Tell me about your initiative or technical challenge..."
                    className={`${inputClass} resize-none`}
                    value={values.message}
                    onChange={update("message")}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                  />
                  {errors.message && (
                    <p
                      id="message-error"
                      className="mt-1.5 font-body-sm text-body-sm text-secondary-container"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Honeypot — hidden from people, tempting to bots */}
                <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
                  <label htmlFor="company">Company</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={values.company}
                    onChange={update("company")}
                  />
                </div>

                {feedback && (
                  <p
                    role={status === "error" ? "alert" : "status"}
                    className={`rounded-lg border px-3 py-2 font-body-sm text-body-sm ${
                      status === "error"
                        ? "border-secondary-container/60 bg-secondary/25 text-secondary-container"
                        : "border-on-primary-container/40 bg-surface/10 text-on-primary"
                    }`}
                  >
                    {feedback}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={busy}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-on-primary py-4 font-label-md text-label-md font-semibold uppercase tracking-wider text-primary transition-all duration-200 hover:bg-secondary-container hover:text-on-secondary-container active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {busy ? (
                    <>
                      <span
                        className="h-4 w-4 animate-spin rounded-full border-2 border-primary/30 border-t-primary"
                        aria-hidden="true"
                      />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>

                <p className="text-center font-body-sm text-body-sm text-on-primary-container/80">
                  {ENDPOINT
                    ? "Your message goes straight to my inbox. I usually reply within a couple of days."
                    : "No form service configured — this opens your email app with the message pre-filled."}
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

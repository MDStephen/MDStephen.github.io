export default function Hero({ info }) {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-12 px-4 sm:px-6 max-w-5xl mx-auto"
    >
      {/* Eyebrow */}
      <p className="font-mono text-xs text-accent mb-4 tracking-widest uppercase">
        Portfolio
      </p>

      {/* Name */}
      <h1 className="font-sans text-5xl sm:text-7xl font-semibold text-bright leading-none tracking-tight mb-6">
        {info.name}
      </h1>

      {/* Tagline */}
      <p className="font-sans text-xl sm:text-2xl text-text font-light max-w-xl mb-2">
        {info.tagline}
      </p>
      <p className="font-mono text-sm text-dim max-w-xl mb-10">
        {info.subTagline}
      </p>

      {/* Links */}
      <div className="flex flex-wrap gap-3">
        <ContactLink href={info.github} label="GitHub" icon="⌥" />
        <ContactLink href={info.linkedin} label="LinkedIn" icon="⌗" />
        <ContactLink href={`mailto:${info.email}`} label={info.email} icon="@" />
      </div>

      {/* Scroll hint */}
      <div className="mt-20 flex items-center gap-2 text-muted">
        <div className="h-px w-8 bg-muted" />
        <span className="font-mono text-xs">scroll</span>
      </div>
    </section>
  );
}

function ContactLink({ href, label, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group flex items-center gap-2 px-4 py-2
        border border-border
        font-mono text-sm text-dim
        hover:border-accent hover:text-accent
        transition-colors duration-150
      "
    >
      <span className="text-muted group-hover:text-accent transition-colors">{icon}</span>
      {label}
    </a>
  );
}

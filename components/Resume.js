import { SectionHeader } from './Projects';

export default function Resume({ resumeUrl }) {
  return (
    <section id="resume" className="py-24 px-4 sm:px-6 max-w-5xl mx-auto">
      <SectionHeader label="04" title="Resume" />

      <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <div>
          <p className="font-sans text-sm text-dim max-w-sm">
            One-page resume. PDF. Last updated 2024.
          </p>
        </div>
        <a
          href={resumeUrl}
          download
          className="
            font-mono text-sm px-6 py-3 border border-accent text-accent
            hover:bg-accent hover:text-bg
            transition-colors duration-150
            flex items-center gap-2 whitespace-nowrap
          "
        >
          ↓ Download PDF
        </a>
      </div>
    </section>
  );
}

import ProjectCard from './ProjectCard';

export default function Projects({ projects }) {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 max-w-5xl mx-auto">
      <SectionHeader label="02" title="Projects" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {projects.map(p => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}

export function SectionHeader({ label, title }) {
  return (
    <div className="flex items-baseline gap-4 border-b border-border pb-4">
      <span className="font-mono text-xs text-muted">{label}</span>
      <h2 className="font-sans text-2xl font-semibold text-bright tracking-tight">
        {title}
      </h2>
    </div>
  );
}

import { TECH_COLORS, CATEGORY_COLORS } from '../data/projects';

export function TechPill({ tech }) {
  const style = TECH_COLORS[tech] || { bg: '#1a1a1a', text: '#94a3b8' };
  return (
    <span
      className="font-mono text-xs px-2 py-0.5 rounded-sm"
      style={{ backgroundColor: style.bg, color: style.text }}
    >
      {tech}
    </span>
  );
}

export function CategoryTag({ category }) {
  const style = CATEGORY_COLORS[category] || { bg: '#1a1a1a', text: '#94a3b8', border: '#333' };
  return (
    <span
      className="font-mono text-xs px-2 py-0.5 border"
      style={{
        backgroundColor: style.bg,
        color: style.text,
        borderColor: style.border,
      }}
    >
      {category}
    </span>
  );
}

export default function ProjectCard({ project }) {
  return (
    <div className="flex flex-col border border-border bg-surface p-5 hover:border-muted transition-colors duration-150">
      {/* Header */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <h3 className="font-sans font-semibold text-bright text-lg leading-tight">
          {project.name}
        </h3>
        <CategoryTag category={project.category} />
      </div>

      {/* Description */}
      <p className="font-sans text-sm text-dim leading-relaxed mb-4 flex-1">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tech.map(t => <TechPill key={t} tech={t} />)}
      </div>

      {/* Links */}
      <div className="flex gap-3 mt-auto pt-4 border-t border-border">
        {project.demo && (
          <ProjectLink href={project.demo} label="Live Demo" primary />
        )}
        {project.repo && (
          <ProjectLink href={project.repo} label="GitHub" />
        )}
        {!project.demo && !project.repo && (
          <span className="font-mono text-xs text-muted">No links available</span>
        )}
      </div>
    </div>
  );
}

function ProjectLink({ href, label, primary }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        font-mono text-xs px-3 py-1.5 border transition-colors duration-150
        ${primary
          ? 'border-accent text-accent hover:bg-accent hover:text-bg'
          : 'border-border text-dim hover:border-muted hover:text-text'
        }
      `}
    >
      {label} ↗
    </a>
  );
}

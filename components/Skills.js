import { SectionHeader } from './Projects';
import { TECH_COLORS } from '../data/projects';

export default function Skills({ skills }) {
  const categories = Object.entries(skills);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 max-w-5xl mx-auto">
      <SectionHeader label="03" title="Skills" />

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {categories.map(([category, items]) => (
          <div key={category}>
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">
              {category}
            </p>
            <div className="flex flex-wrap gap-2">
              {items.map(skill => {
                const style = TECH_COLORS[skill] || { bg: '#1a1a1a', text: '#94a3b8' };
                return (
                  <span
                    key={skill}
                    className="font-mono text-sm px-3 py-1 border"
                    style={{
                      backgroundColor: style.bg,
                      color: style.text,
                      borderColor: style.bg,
                    }}
                  >
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

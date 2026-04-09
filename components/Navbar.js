export default function Navbar({ name }) {
  const links = [
    { label: 'Projects', href: '#projects' },
    { label: 'Skills',   href: '#skills' },
    { label: 'Resume',   href: '#resume' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg/90 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-12 flex items-center justify-between">
        <span className="font-mono text-sm text-accent font-medium tracking-tight">
          {name.split(' ')[0].toLowerCase()}.dev
        </span>
        <ul className="flex gap-6">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-xs text-dim hover:text-bright transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

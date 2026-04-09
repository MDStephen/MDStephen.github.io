export default function Footer({ name }) {
  return (
    <footer className="border-t border-border py-8 px-4 sm:px-6 max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <p className="font-mono text-xs text-muted">
          {name} — {new Date().getFullYear()}
        </p>
        <p className="font-mono text-xs text-muted">
          Built with Next.js + Tailwind
        </p>
      </div>
    </footer>
  );
}

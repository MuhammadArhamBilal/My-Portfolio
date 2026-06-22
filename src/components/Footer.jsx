export default function Footer() {
  return (
    <footer className="border-t border-base-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="font-mono text-xs text-ink-dim">
          built with react &amp; tailwind
        </p>
        <p className="font-mono text-xs text-ink-dim">
          © {new Date().getFullYear()} — status: online
        </p>
      </div>
    </footer>
  );
}
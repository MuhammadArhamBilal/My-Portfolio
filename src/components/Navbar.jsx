import { useState } from "react";

const links = [
  { label: "~/home", href: "#home" },
  { label: "~/stack", href: "#skills" },
  { label: "~/work", href: "#projects" },
  { label: "~/contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-base-border bg-base-bg/80 backdrop-blur-md">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-mono text-sm text-accent-teal tracking-wide">
          My-Portfolio<span className="text-ink-secondary">:</span>~$
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-ink-secondary hover:text-accent-amber transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden font-mono text-ink-primary text-sm border border-base-border px-3 py-1.5 rounded"
        >
          {open ? "close" : "menu"}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col border-t border-base-border bg-base-bg font-mono text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-6 py-3 text-ink-secondary hover:text-accent-amber border-b border-base-border"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
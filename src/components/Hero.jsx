import { useEffect, useState } from "react";

const bootLines = [
  "booting profile...",
  "loading stack: react, tailwind, node, sql, python, c++, c#",
  "mounting projects/ ...",
  "status: ready",
];

export default function Hero() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (lineIndex >= bootLines.length) {
      setDone(true);
      return;
    }
    const currentLine = bootLines[lineIndex];
    if (charIndex < currentLine.length) {
      const timeout = setTimeout(() => setCharIndex((c) => c + 1), 18);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setLineIndex((l) => l + 1);
        setCharIndex(0);
      }, 280);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, lineIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* subtle grid backdrop */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-base-bg/60 via-transparent to-base-bg" />

      <div className="relative max-w-6xl mx-auto px-6 w-full grid md:grid-cols-[1.4fr_1fr] gap-12 items-center">
        <div>
          <div className="font-mono text-xs text-ink-dim border border-base-border rounded px-3 py-2 inline-block mb-8 min-h-[1.5rem]">
            {bootLines.slice(0, lineIndex).map((line, i) => (
              <div key={i} className="text-ink-secondary">
                <span className="text-accent-emerald">$</span> {line}
              </div>
            ))}
            {!done && (
              <div className="text-ink-secondary">
                <span className="text-accent-emerald">$</span>{" "}
                {bootLines[lineIndex]?.slice(0, charIndex)}
                <span className="inline-block w-2 h-3 bg-accent-emerald ml-1 animate-pulse" />
              </div>
            )}
          </div>

          {/* TODO: replace with your name */}
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-ink-primary leading-tight">
            Arham Bilal
          </h1>
          <p className="font-mono text-accent-emerald mt-3 text-sm tracking-wide">
            // builder of agents, tools &amp; systems
          </p>
          <p className="font-body text-ink-secondary mt-5 max-w-md leading-relaxed">
            I build practical software end to end — from automation scripts
            and AI agents to full-stack apps and C++ systems. Currently
            shipping <span className="text-ink-primary">Jarwas</span>, an AI
            personal agent.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#projects"
              className="btn-shine font-mono text-sm border border-base-border bg-accent-emerald text-base-bg text-orange-400 px-5 py-3 rounded font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(52,211,153,0.45)] active:scale-95"
            >
              view_projects()
            </a>
            <a
              href="#contact"
              className="btn-shine font-mono text-sm border border-base-border text-ink-primary px-5 py-3 rounded transition-all duration-300 hover:scale-105 hover:border-accent-emerald hover:text-accent-emerald hover:shadow-[0_0_20px_rgba(52,211,153,0.2)] active:scale-95"
            >
              get_in_touch()
            </a>
          </div>
        </div>

        <div className="hidden md:block border border-base-border rounded-lg bg-base-surface/60 p-6">
          <p className="font-mono text-xs text-ink-dim mb-4">status.log</p>
          <ul className="space-y-3 font-mono text-sm">
            <li className="flex items-center justify-between">
              <span className="text-ink-secondary">Jarwas</span>
              <span className="text-accent-emerald">ACTIVE BUILD</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-ink-secondary">OnlyProxies</span>
              <span className="text-ink-dim">SHIPPED</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-ink-secondary">Dental Booking</span>
              <span className="text-ink-dim">SHIPPED</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
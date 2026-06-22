import { projects } from "../Data.js";

const statusStyles = {
  emerald: "text-accent-emerald border-accent-emerald/40 bg-accent-emerald/10",
  slate: "text-ink-secondary border-base-border bg-base-surface2/40",
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-base-border">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-sm text-accent-emerald mb-2">$ ls ~/projects</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink-primary mb-12">
          What I've built
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.id}
              className="border border-base-border rounded-lg p-6 bg-base-surface/50 hover:border-ink-dim transition-colors flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`font-mono text-[11px] uppercase tracking-wide border rounded-full px-2.5 py-1 ${statusStyles[p.statusColor]}`}
                >
                  {p.status}
                </span>
                <span className="font-mono text-xs text-ink-dim">{p.year}</span>
              </div>

              <h3 className="font-display text-xl font-semibold text-ink-primary">
                {p.name}
              </h3>
              <p className="font-mono text-xs text-ink-secondary mt-1 mb-4">
                {p.tagline}
              </p>

              <p className="font-body text-sm text-ink-secondary leading-relaxed flex-1">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {p.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] text-ink-secondary border border-base-border rounded px-2 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
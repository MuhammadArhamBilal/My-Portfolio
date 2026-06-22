import { skills } from "../data";

const categories = ["Frontend", "Backend", "Languages"];

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-base-border bg-base-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-sm text-accent-emerald mb-2">$ cat stack.json</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink-primary mb-12">
          Tools I build with
        </h2>

        <div className="grid sm:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div key={cat}>
              <p className="font-mono text-xs text-ink-dim uppercase tracking-widest mb-4">
                {cat}
              </p>
              <ul className="space-y-2">
                {skills
                  .filter((s) => s.category === cat)
                  .map((s) => (
                    <li
                      key={s.name}
                      className="font-mono text-sm text-ink-secondary border border-base-border rounded px-4 py-2.5 hover:border-accent-emerald hover:text-ink-primary transition-colors"
                    >
                      {s.name}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
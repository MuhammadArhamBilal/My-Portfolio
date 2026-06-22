export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-base-border bg-base-surface/30">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="font-mono text-sm text-accent-emerald mb-2">$ ./contact.sh</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink-primary mb-4">
          Let's build something
        </h2>
        <p className="font-body text-ink-secondary max-w-md mx-auto mb-10">
          Open to internships, freelance work, and collaborations on
          interesting problems. Reach out below.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {/* TODO: replace with your real email and profile links */}
          <a
           href="https://mail.google.com/mail/?view=cm&fs=1&to=bilalarham6@gmail.com"
           target="_Blank"
            className="btn-shine font-mono text-sm border border-base-border bg-accent-emerald px-6 py-3 rounded font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(52,211,153,0.45)] active:scale-95"
          >
            Email<span className="text-red-500">_</span>
          </a>
          <a
            href="https://github.com/yourusername"  
            target="_blank"
            rel="noreferrer"
            className="btn-shine font-mono text-sm border border-base-border text-ink-primary px-6 py-3 rounded transition-all duration-300 hover:scale-105 hover:border-accent-emerald hover:text-accent-emerald hover:shadow-[0_0_20px_rgba(52,211,153,0.2)] active:scale-95"
          >
            git<span className="text-orange-400">hub</span>
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
            className="btn-shine font-mono text-sm border border-base-border text-ink-primary px-6 py-3 rounded transition-all duration-300 hover:scale-105 hover:border-accent-emerald hover:text-accent-emerald hover:shadow-[0_0_20px_rgba(52,211,153,0.2)] active:scale-95"
          >
            <span className="text-blue-400">linked</span>In
          </a>
        </div>
      </div>
    </section>
  );
}
import Reveal from './Reveal.jsx'

const repos = [
  { name: 'doctor-appointment-app', lang: 'JavaScript' },
  { name: 'ecommerce-storefront-mern', lang: 'JavaScript' },
  { name: 'task-management-dashboard', lang: 'React' },
]

export default function GithubSection() {
  return (
    <section id="github" className="py-24 md:py-32">
      <div className="max-w-[1180px] mx-auto px-5 md:px-7">
        <Reveal className="rounded-3xl border border-black/10 dark:border-white/10 bg-light-panel dark:bg-ink-panel p-8 md:p-10 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex items-center gap-2.5 font-mono text-[12.5px] tracking-widest uppercase text-accent mb-4">
              <span className="w-5 h-px bg-accent" />
              Open Source
            </div>
            <h2 className="font-display font-semibold text-2xl md:text-[26px] mb-3.5">
              Code lives on GitHub.
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-[15px] mb-6">
              Featured repositories, ongoing projects, and day-to-day contribution activity — all public.
            </p>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3.5 rounded-xl font-semibold text-[14.5px] text-white bg-gradient-to-br from-accent to-signal shadow-lg shadow-accent/30 hover:-translate-y-0.5 transition-transform"
            >
              Explore My GitHub
            </a>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-3.5 mb-4">
              <div className="rounded-xl bg-light-panel2 dark:bg-ink-panel2 border border-black/10 dark:border-white/10 p-4">
                <div className="font-display font-bold text-xl text-signal-light dark:text-signal">8+</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Public Repositories</div>
              </div>
              <div className="rounded-xl bg-light-panel2 dark:bg-ink-panel2 border border-black/10 dark:border-white/10 p-4">
                <div className="font-display font-bold text-xl text-signal-light dark:text-signal">MERN</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Primary Stack</div>
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              {repos.map((r) => (
                <div
                  key={r.name}
                  className="flex justify-between items-center px-3.5 py-3 bg-light-panel2 dark:bg-ink-panel2 border border-black/10 dark:border-white/10 rounded-lg text-[13.5px]"
                >
                  <span>{r.name}</span>
                  <span className="font-mono text-[11px] text-accent">{r.lang}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

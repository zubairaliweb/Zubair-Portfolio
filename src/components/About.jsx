import Reveal from './Reveal.jsx'

const stats = [
  { num: '8+', label: 'Projects Completed' },
  { num: '10+', label: 'Technologies Learned' },
  { num: '2025', label: 'CS Graduate' },
  { num: '3', label: 'Certifications' },
]

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-[1180px] mx-auto px-5 md:px-7">
        <Reveal className="max-w-xl mb-14">
          <div className="flex items-center gap-2.5 font-mono text-[12.5px] tracking-widest uppercase text-accent mb-4">
            <span className="w-5 h-px bg-accent" />
            About
          </div>
          <h2 className="font-display font-semibold text-3xl md:text-4xl">
            Grounded in computer science, focused on the web.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <Reveal className="space-y-4 text-[15.5px] text-slate-500 dark:text-slate-400">
            <p>
              I hold a <strong className="dark:text-slate-100 text-slate-800">BS in Computer Science</strong> and focus on one thing: building web applications that work well and feel considered — from the database schema up to the interface people actually click on.
            </p>
            <p>
              My primary stack is{' '}
              <strong className="dark:text-slate-100 text-slate-800">React.js, Node.js, Express.js, and MongoDB (MERN)</strong>, paired with Tailwind CSS for fast, consistent styling. I care about clean component structure, responsive layouts, and APIs that are easy to reason about.
            </p>
            <p>
              I'm a continuous learner by habit — most of what I know past the classroom came from shipping small projects, breaking them, and fixing them properly. I like turning a rough idea into a working, deployable site.
            </p>
          </Reveal>

          <Reveal className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-black/10 dark:border-white/10 bg-light-panel dark:bg-ink-panel p-5"
              >
                <div className="font-display font-bold text-3xl text-accent">{s.num}</div>
                <div className="text-[13px] text-slate-500 dark:text-slate-400 mt-1">{s.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

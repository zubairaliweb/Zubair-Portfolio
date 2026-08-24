import Reveal from './Reveal.jsx'

const groups = [
  {
    title: 'Frontend',
    note: '// interfaces people can use',
    items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    title: 'Backend',
    note: '// the logic underneath',
    items: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT Authentication', 'MySQL'],
  },
  {
    title: 'Tools',
    note: '// the daily workflow',
    items: ['Git', 'GitHub', 'VS Code', 'Vite', 'Postman', 'Vercel / Netlify'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-[1180px] mx-auto px-5 md:px-7">
        <Reveal className="max-w-xl mb-14">
          <div className="flex items-center gap-2.5 font-mono text-[12.5px] tracking-widest uppercase text-accent mb-4">
            <span className="w-5 h-px bg-accent" />
            Skills
          </div>
          <h2 className="font-display font-semibold text-3xl md:text-4xl mb-3">
            What I build with.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-[16.5px]">
            A focused, modern web stack — from the interface down to the API and database.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {groups.map((g) => (
            <Reveal
              key={g.title}
              className="rounded-2xl border border-black/10 dark:border-white/10 bg-light-panel dark:bg-ink-panel p-6 hover:border-accent hover:-translate-y-1 transition-all"
            >
              <h3 className="font-display text-[16.5px] mb-1">{g.title}</h3>
              <div className="font-mono text-[12.5px] text-slate-400 mb-4">{g.note}</div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="text-[12.5px] px-3 py-1.5 rounded-lg bg-light-panel2 dark:bg-ink-panel2 border border-black/10 dark:border-white/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

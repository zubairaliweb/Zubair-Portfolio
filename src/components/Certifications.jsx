import Reveal from './Reveal.jsx'

const certs = [
  { title: 'Certification Name', org: 'Issuing Organization', year: '2025' },
  { title: 'Certification Name', org: 'Issuing Organization', year: '2025' },
  { title: 'Certification Name', org: 'Issuing Organization', year: '2026' },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-32">
      <div className="max-w-[1180px] mx-auto px-5 md:px-7">
        <Reveal className="max-w-xl mb-14">
          <div className="flex items-center gap-2.5 font-mono text-[12.5px] tracking-widest uppercase text-accent mb-4">
            <span className="w-5 h-px bg-accent" />
            Certifications
          </div>
          <h2 className="font-display font-semibold text-3xl md:text-4xl">Formal learning, on record.</h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((c, i) => (
            <Reveal
              key={i}
              className="rounded-2xl border border-black/10 dark:border-white/10 bg-light-panel dark:bg-ink-panel p-6"
            >
              <h3 className="font-display text-[15px] mb-1.5">{c.title}</h3>
              <div className="text-[13px] text-slate-500 dark:text-slate-400 mb-4">{c.org}</div>
              <div className="flex justify-between items-center text-xs font-mono text-slate-400 border-t border-black/10 dark:border-white/10 pt-3">
                <span>{c.year}</span>
                <a href="#" className="text-accent">View credential →</a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

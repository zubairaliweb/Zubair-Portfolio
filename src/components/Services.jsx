import Reveal from './Reveal.jsx'

const services = [
  { num: '01', title: 'Frontend Development', desc: 'Responsive, accessible interfaces built with React and Tailwind CSS, from landing pages to full dashboards.' },
  { num: '02', title: 'Backend & API Development', desc: 'REST APIs, authentication, and database design using Node.js, Express, and MongoDB.' },
  { num: '03', title: 'Full-Stack Web Applications', desc: 'End-to-end MERN applications — from schema design to a deployed, production-ready product.' },
  { num: '04', title: 'Website Maintenance & Optimization', desc: 'Performance tuning, bug fixes, and ongoing feature work for existing websites.' },
]

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-[1180px] mx-auto px-5 md:px-7">
        <Reveal className="max-w-xl mb-14">
          <div className="flex items-center gap-2.5 font-mono text-[12.5px] tracking-widest uppercase text-accent mb-4">
            <span className="w-5 h-px bg-accent" />
            Services
          </div>
          <h2 className="font-display font-semibold text-3xl md:text-4xl mb-3">How I can help.</h2>
          <p className="text-slate-500 dark:text-slate-400 text-[16.5px]">
            Available for freelance and project-based work across analytics and development.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <Reveal
              key={s.num}
              className="rounded-2xl border border-black/10 dark:border-white/10 bg-light-panel dark:bg-ink-panel p-6 hover:-translate-y-1 hover:border-accent transition-all"
            >
              <div className="font-mono text-xs text-accent mb-4">{s.num}</div>
              <h3 className="font-display text-[16px] mb-2.5">{s.title}</h3>
              <p className="text-[13.5px] text-slate-500 dark:text-slate-400">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

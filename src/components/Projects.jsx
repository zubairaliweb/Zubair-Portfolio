import { useState } from 'react'
import { Github, ExternalLink } from 'lucide-react'
import Reveal from './Reveal.jsx'

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'fullstack', label: 'Full-Stack' },
  { key: 'frontend', label: 'Frontend' },
]

const PROJECTS = [
  {
    cat: 'fullstack',
    tag: 'Full-Stack',
    glyph: '<DoctorApp />',
    title: 'Doctor Appointment Booking System',
    desc: 'A MERN-stack web application designed to streamline doctor discovery and appointment booking, with role-based dashboards for patients and doctors.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    github: '#',
    demo: '#',
  },
  {
    cat: 'fullstack',
    tag: 'Full-Stack',
    glyph: '<StoreApp />',
    title: 'E-Commerce Storefront',
    desc: 'A full-stack online store with product catalog, cart, checkout flow, and an admin panel for managing inventory and orders.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Stripe'],
    github: '#',
    demo: '#',
  },
  {
    cat: 'fullstack',
    tag: 'Full-Stack',
    glyph: '<TaskBoard />',
    title: 'Task Management Dashboard',
    desc: 'A Trello-style task manager with drag-and-drop boards, team workspaces, and real-time status updates.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    github: '#',
    demo: '#',
  },
  {
    cat: 'frontend',
    tag: 'Frontend',
    glyph: '<Weather />',
    title: 'Weather Forecast App',
    desc: 'A responsive weather app consuming a public API, with location search, unit toggles, and a clean data-forward UI.',
    tech: ['React.js', 'Tailwind CSS', 'REST API'],
    github: '#',
    demo: '#',
  },
]

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const visible = PROJECTS.filter((p) => filter === 'all' || p.cat === filter)

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-[1180px] mx-auto px-5 md:px-7">
        <Reveal className="max-w-xl mb-10">
          <div className="flex items-center gap-2.5 font-mono text-[12.5px] tracking-widest uppercase text-accent mb-4">
            <span className="w-5 h-px bg-accent" />
            Featured Projects
          </div>
          <h2 className="font-display font-semibold text-3xl md:text-4xl">
            A few things I've built end to end.
          </h2>
        </Reveal>

        <Reveal className="flex flex-wrap gap-2.5 mb-9">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-4 py-2 rounded-full border text-[13.5px] font-semibold transition-colors ${
                filter === f.key
                  ? 'border-accent text-accent bg-accent/10'
                  : 'border-black/10 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:border-accent hover:text-accent'
              }`}
            >
              {f.label}
            </button>
          ))}
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((p) => (
            <Reveal
              key={p.title}
              className="rounded-2xl border border-black/10 dark:border-white/10 bg-light-panel dark:bg-ink-panel overflow-hidden flex flex-col hover:-translate-y-1.5 hover:border-accent transition-all"
            >
              <div className="h-[150px] relative flex items-center justify-center bg-gradient-to-br from-accent to-signal">
                <span className="font-mono text-[13px] text-white/90 tracking-wide relative z-10">
                  {p.glyph}
                </span>
              </div>
              <div className="p-5 flex flex-col gap-3 flex-1">
                <span className="font-mono text-[11px] uppercase tracking-wider text-signal-light dark:text-signal">
                  {p.tag}
                </span>
                <h3 className="font-display text-[17.5px]">{p.title}</h3>
                <p className="text-[13.8px] text-slate-500 dark:text-slate-400 flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2.5 py-1 rounded-md bg-light-panel2 dark:bg-ink-panel2 border border-black/10 dark:border-white/10 text-slate-500 dark:text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2.5 mt-1">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold border border-black/10 dark:border-white/10 px-3 py-2 rounded-lg hover:border-accent hover:text-accent transition-colors"
                  >
                    <Github size={13} /> GitHub
                  </a>
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold border border-black/10 dark:border-white/10 px-3 py-2 rounded-lg hover:border-accent hover:text-accent transition-colors"
                    >
                      <ExternalLink size={13} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

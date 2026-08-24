import Reveal from './Reveal.jsx'
import Timeline from './Timeline.jsx'

const items = [
  {
    meta: 'FOUNDATION',
    title: 'Computer Science Education',
    desc: 'Completed a BS in Computer Science, building a base in programming, data structures, databases, and systems thinking.',
  },
  {
    meta: 'FRONTEND',
    title: 'Frontend Development Learning',
    desc: 'Learned HTML, CSS, and JavaScript fundamentals, then moved to React and Tailwind CSS for building interfaces.',
  },
  {
    meta: 'BACKEND',
    title: 'Backend Development Learning',
    desc: 'Built REST APIs and authentication flows with Node.js, Express.js, and MongoDB.',
  },
  {
    meta: 'FULL-STACK',
    title: 'MERN Stack Projects',
    desc: 'Shipped complete full-stack applications end to end — from database schema to deployed UI.',
  },
  {
    meta: 'CURRENT',
    title: 'Freelancing Development',
    desc: 'Setting up as an independent freelancer, offering full custom websites and web applications to early clients.',
  },
]

export default function Experience() {
  return (
    <section id="journey" className="py-24 md:py-32">
      <div className="max-w-[1180px] mx-auto px-5 md:px-7">
        <Reveal className="max-w-xl mb-14">
          <div className="flex items-center gap-2.5 font-mono text-[12.5px] tracking-widest uppercase text-accent mb-4">
            <span className="w-5 h-px bg-accent" />
            Experience &amp; Learning
          </div>
          <h2 className="font-display font-semibold text-3xl md:text-4xl mb-3">
            A growth journey, not a job list.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-[16.5px]">
            I'm early in my career — this is the honest path so far, from coursework to freelancing.
          </p>
        </Reveal>
        <Timeline items={items} />
      </div>
    </section>
  )
}

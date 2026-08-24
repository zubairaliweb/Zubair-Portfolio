import { Github, Linkedin } from 'lucide-react'
import profileImg from '../assets/profile.jpg'

const bars = [38, 64, 48, 88, 56, 100, 72]

export default function Hero() {
  return (
    <section id="home" className="pt-[150px] md:pt-[168px] pb-20 md:pb-24">
      <div className="max-w-[1180px] mx-auto px-5 md:px-7 grid md:grid-cols-[1.05fr_0.85fr] gap-12 md:gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-black/10 dark:border-white/10 text-[12.5px] font-mono text-accent mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_0_3px_rgba(52,211,153,0.18)]" />
            Computer Science Graduate · Full-Stack Web Developer
          </div>

          <h1 className="font-display font-bold text-[38px] sm:text-[46px] lg:text-[58px] leading-[1.06] mb-5">
            Hello, I'm Zubair Ali —<br />
            I build{' '}
            <span className="bg-gradient-to-r from-accent to-signal bg-clip-text text-transparent">
              fast
            </span>
            ,{' '}
            <span className="bg-gradient-to-r from-accent to-signal bg-clip-text text-transparent">
              reliable
            </span>{' '}
            web applications.
          </h1>

          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-lg mb-8">
            I'm a Computer Science graduate specializing in modern Web Development. I build
            clean, responsive, and scalable websites and applications end to end — from
            database and API to a polished, production-ready interface.
          </p>

          <div className="flex flex-wrap gap-3.5 mb-8">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-[14.5px] text-white bg-gradient-to-br from-accent to-signal shadow-lg shadow-accent/30 hover:-translate-y-0.5 transition-transform"
            >
              View My Projects
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                alert('Add your CV file (e.g. resume.pdf) to /public and point this button to it.')
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-[14.5px] border border-black/10 dark:border-white/10 hover:border-accent hover:text-accent transition-colors"
            >
              Download CV
            </a>
          </div>

          <div className="flex gap-3">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="w-10 h-10 rounded-lg border border-black/10 dark:border-white/10 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="w-10 h-10 rounded-lg border border-black/10 dark:border-white/10 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div className="relative">
          {/* profile photo card */}
          <div className="relative rounded-[26px] p-1.5 bg-gradient-to-br from-accent to-signal shadow-card-light dark:shadow-card">
            <div className="rounded-[22px] overflow-hidden bg-light-panel dark:bg-ink-panel">
              <img
                src={profileImg}
                alt="Portrait of Zubair Ali"
                className="w-full h-[380px] sm:h-[440px] object-cover object-top"
              />
            </div>
          </div>

          {/* floating chart/code card — signature element */}
          <div className="absolute -bottom-8 -left-6 sm:-left-10 w-[210px] rounded-2xl border border-black/10 dark:border-white/10 bg-light-panel dark:bg-ink-panel2 shadow-card-light dark:shadow-card p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-black/10 dark:bg-white/10" />
                <span className="w-2 h-2 rounded-full bg-black/10 dark:bg-white/10" />
                <span className="w-2 h-2 rounded-full bg-black/10 dark:bg-white/10" />
              </div>
              <span className="font-mono text-[10px] text-slate-400">app.tsx</span>
            </div>
            <div className="flex items-end gap-1.5 h-16 border-b border-dashed border-black/10 dark:border-white/10 pb-2">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-[4px] bg-gradient-to-b from-accent to-signal opacity-85 animate-barGrow"
                  style={{ height: `${h}%`, animationDelay: `${i * 0.12}s` }}
                />
              ))}
            </div>
            <p className="font-mono text-[10.5px] text-slate-400 mt-3 leading-relaxed">
              <span className="text-accent">export default</span> function <span className="text-signal">App</span>()
            </p>
          </div>

          {/* floating stat pill */}
          <div className="absolute -top-5 -right-4 sm:-right-6 rounded-xl border border-black/10 dark:border-white/10 bg-light-panel2 dark:bg-ink-panel2 shadow-card-light dark:shadow-card px-4 py-3 flex items-center gap-2.5">
            <strong className="font-display text-lg">MERN</strong>
            <span className="text-[11.5px] text-slate-500 dark:text-slate-400 max-w-[100px] leading-tight">
              React, Node.js &amp; MongoDB
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

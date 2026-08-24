import { Linkedin, Github, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 py-11">
      <div className="max-w-[1180px] mx-auto px-5 md:px-7">
        <div className="flex flex-wrap justify-between items-center gap-5">
          <div>
            <div className="font-display font-bold text-base">Zubair Ali</div>
            <span className="text-[12.5px] text-slate-500 dark:text-slate-400">Full-Stack Web Developer</span>
          </div>
          <div className="flex gap-2.5">
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-lg border border-black/10 dark:border-white/10 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-lg border border-black/10 dark:border-white/10 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
            >
              <Github size={16} />
            </a>
            <a
              href="mailto:zubair.ali@example.com"
              aria-label="Email"
              className="w-9 h-9 rounded-lg border border-black/10 dark:border-white/10 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
        <div className="text-center text-xs text-slate-500 dark:text-slate-400 mt-8">
          © 2026 Zubair Ali. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

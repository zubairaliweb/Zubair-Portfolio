import { useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#journey', label: 'Experience' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false)

  const handleCvClick = (e) => {
    e.preventDefault()
    alert('Add your CV file (e.g. resume.pdf) to /public and point this button to it.')
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-light-bg/80 dark:bg-ink-bg/80 border-b border-black/10 dark:border-white/10 transition-colors">
      <nav className="max-w-[1180px] mx-auto px-5 md:px-7 h-[74px] flex items-center justify-between">
        <a href="#home" className="font-display font-bold text-lg flex items-center gap-2">
          <span className="w-2 h-2 rounded-sm bg-accent dark:bg-accent" />
          Zubair Ali
        </a>

        <ul
          className={`
            md:flex md:items-center md:gap-7 md:static md:flex-row md:bg-transparent md:p-0 md:opacity-100 md:pointer-events-auto md:translate-y-0
            fixed top-[74px] left-0 right-0 bottom-0 flex flex-col gap-0 bg-light-bg dark:bg-ink-bg px-5 pb-8 pt-2 overflow-y-auto
            transition-all duration-300
            ${open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none md:opacity-100 md:translate-y-0 md:pointer-events-auto'}
          `}
        >
          {LINKS.map((l) => (
            <li key={l.href} className="w-full md:w-auto border-b md:border-none border-black/10 dark:border-white/10">
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-4 md:py-0 text-[15px] font-medium text-slate-600 dark:text-slate-300 hover:text-accent dark:hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="mt-4 md:hidden">
            <a
              href="#"
              onClick={handleCvClick}
              className="inline-block px-5 py-2.5 rounded-lg font-semibold text-sm text-white bg-gradient-to-br from-accent to-signal shadow-lg"
            >
              Download CV
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#"
            onClick={handleCvClick}
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-lg font-semibold text-sm text-white bg-gradient-to-br from-accent to-signal shadow-lg shadow-accent/30 hover:-translate-y-0.5 transition-transform"
          >
            Download CV
          </a>

          <button
            onClick={toggleTheme}
            aria-label="Toggle dark and light mode"
            className="w-9 h-9 rounded-lg border border-black/10 dark:border-white/10 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
          >
            {theme === 'light' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Open menu"
            aria-expanded={open}
            className="md:hidden w-9 h-9 rounded-lg border border-black/10 dark:border-white/10 flex items-center justify-center"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>
    </header>
  )
}

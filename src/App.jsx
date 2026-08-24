import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import SignalDivider from './components/SignalDivider.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Services from './components/Services.jsx'
import Experience from './components/Experience.jsx'
import Certifications from './components/Certifications.jsx'
import GithubSection from './components/GithubSection.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only">Skip to content</a>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main id="main">
        <Hero />
        <SignalDivider />
        <About />
        <Skills />
        <Projects />
        <SignalDivider />
        <Services />
        <Experience />
        <Certifications />
        <GithubSection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

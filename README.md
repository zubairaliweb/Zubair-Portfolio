# Zubair Ali — Web Developer Portfolio (React + Tailwind CSS)

A responsive personal portfolio built with React, Vite, and Tailwind CSS.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

The production files are written to `dist/`.

## What to personalize

- **Photo**: `src/assets/profile.jpg` — your headshot is already dropped in and wired up in `src/components/Hero.jsx`.
- **CV**: add a `resume.pdf` to `public/`, then update the three "Download CV" click handlers in
  `src/components/Navbar.jsx` and `src/components/Hero.jsx` to link to `/resume.pdf` instead of showing an alert.
- **Links**: GitHub/LinkedIn/email placeholders live in `Hero.jsx`, `Footer.jsx`, `Contact.jsx`, and `GithubSection.jsx`.
- **Projects, certifications, timeline content**: each section's data lives at the top of its component file
  (e.g. `src/components/Projects.jsx` exports a `PROJECTS` array) — edit the arrays, not the JSX layout.
- **Contact form**: `src/components/Contact.jsx` validates and shows a confirmation client-side only. Wire
  `handleSubmit` to a service like Formspree/Getform, or your own API endpoint, to actually receive messages.

## Structure

```
src/
  App.jsx                 # page layout + dark/light theme state
  index.css                # Tailwind directives + small custom utilities
  hooks/useReveal.js        # scroll-reveal IntersectionObserver hook
  components/
    Navbar.jsx, Hero.jsx, About.jsx, Skills.jsx, Projects.jsx,
    Services.jsx, Experience.jsx, Certifications.jsx,
    GithubSection.jsx, Contact.jsx, Footer.jsx, Reveal.jsx,
    SignalDivider.jsx, Timeline.jsx
```

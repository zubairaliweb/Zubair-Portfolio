import Reveal from './Reveal.jsx'

export default function Timeline({ items }) {
  return (
    <Reveal className="relative pl-8">
      <div className="absolute left-[7px] top-1.5 bottom-1.5 w-0.5 bg-gradient-to-b from-accent via-signal to-transparent" />
      <div className="space-y-9">
        {items.map((item) => (
          <div key={item.title} className="relative">
            <div className="absolute -left-8 top-0.5 w-[15px] h-[15px] rounded-full bg-light-bg dark:bg-ink-bg border-2 border-accent" />
            <span className="block font-mono text-[11.5px] text-accent mb-1.5">{item.meta}</span>
            <h3 className="font-display text-[16.5px] mb-1">{item.title}</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-2.5">{item.desc}</p>
            {item.tags && (
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-light-panel2 dark:bg-ink-panel2 border border-black/10 dark:border-white/10 text-slate-500 dark:text-slate-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Reveal>
  )
}

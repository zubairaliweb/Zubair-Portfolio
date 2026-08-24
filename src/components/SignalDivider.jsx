export default function SignalDivider() {
  const heights = ['40%', '100%', '60%', '85%', '35%', '70%', '50%']
  return (
    <div className="max-w-[1180px] mx-auto px-5 md:px-7">
      <div className="flex items-end gap-1 h-6 opacity-50" aria-hidden="true">
        {heights.map((h, i) => (
          <span
            key={i}
            className="signal-bar animate-signal"
            style={{ height: h, animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  )
}

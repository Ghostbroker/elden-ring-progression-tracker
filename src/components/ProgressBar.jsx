export default function ProgressBar({ completed, total, label }) {
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0
  return (
    <div className="mb-6">
      {label && <p className="text-text-muted text-sm mb-1">{label}</p>}
      <div className="flex items-center gap-3">
        <div className="flex-1 bg-bg-primary rounded-full h-3 overflow-hidden">
          <div
            className="bg-gold h-full rounded-full transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
        <span className="text-gold text-sm font-medium whitespace-nowrap">
          {pct}% ({completed}/{total})
        </span>
      </div>
    </div>
  )
}

export default function ProgressBar({ value = 0 }) {
  return (
    <div className="h-3 w-full overflow-hidden rounded-full bg-white/10">
      <div className="h-full rounded-full bg-gradient-to-r from-brand-500 to-cyan-400 transition-all duration-500" style={{ width: `${Math.min(value, 100)}%` }} />
    </div>
  )
}

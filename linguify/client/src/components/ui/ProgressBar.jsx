export default function ProgressBar({ value = 0 }) {
  return (
    <div className="h-3 overflow-hidden rounded-full bg-brand-100/70">
      <div
        className="h-full rounded-full bg-gradient-to-r from-brand-500 via-brand-400 to-[#f2d19a] transition-all duration-500"
        style={{ width: `${Math.min(value, 100)}%` }}
      />
    </div>
  )
}

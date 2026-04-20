export default function StatCard({ label, value, hint }) {
  return (
    <div className="card">
      <p className="text-sm text-ink-700/60">{label}</p>
      <h3 className="mt-3 text-3xl font-bold text-ink-900">{value}</h3>
      {hint && <p className="mt-2 text-sm text-brand-700">{hint}</p>}
    </div>
  )
}

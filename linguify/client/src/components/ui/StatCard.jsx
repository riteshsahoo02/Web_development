export default function StatCard({ label, value, hint }) {
  return (
    <div className="card">
      <p className="text-sm text-slate-400">{label}</p>
      <h3 className="mt-3 text-3xl font-bold text-white">{value}</h3>
      {hint && <p className="mt-2 text-sm text-brand-300">{hint}</p>}
    </div>
  )
}

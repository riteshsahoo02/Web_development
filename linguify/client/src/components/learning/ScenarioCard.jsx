import { Link } from 'react-router-dom'

export default function ScenarioCard({ item }) {
  return (
    <div className="card">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-ink-900">{item.title}</h3>
          <p className="mt-3 text-ink-700/80">{item.situation}</p>
        </div>
        <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">{item.level}</span>
      </div>
      <div className="mt-6 flex items-center gap-3 text-sm text-ink-700/70">
        <span className="rounded-full border border-brand-100 bg-white px-3 py-1">{item.steps?.length || 0} turns</span>
        <span>Longer guided roleplay</span>
      </div>
      <Link to={`/learn/conversations/${item._id}`} className="primary-btn mt-6 py-2">
        Start scenario
      </Link>
    </div>
  )
}

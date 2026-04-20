import { Link } from 'react-router-dom'

export default function ScenarioCard({ item }) {
  return (
    <div className="card">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-white">{item.title}</h3>
          <p className="mt-3 text-slate-300">{item.situation}</p>
        </div>
        <span className="rounded-full bg-violet-500/15 px-3 py-1 text-xs font-semibold text-violet-300">{item.level}</span>
      </div>
      <Link to={`/learn/conversations/${item._id}`} className="primary-btn mt-6 py-2">
        Start scenario
      </Link>
    </div>
  )
}

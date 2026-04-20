import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ModuleCard({ title, desc, path, accent = 'from-brand-300 via-brand-200 to-washi-100' }) {
  return (
    <Link to={path} className="group relative overflow-hidden rounded-[2rem] border border-brand-100 bg-white/90 p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-glow">
      <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-50 transition group-hover:opacity-70`} />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent" />
      <div className="relative z-10">
        <div className="mb-6 inline-flex rounded-full border border-brand-100 bg-white/75 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
          Module
        </div>
        <h3 className="text-2xl font-bold text-ink-900">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-ink-700/80">{desc}</p>
        <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-brand-700">
          Start learning <ArrowRight size={16} />
        </div>
      </div>
    </Link>
  )
}

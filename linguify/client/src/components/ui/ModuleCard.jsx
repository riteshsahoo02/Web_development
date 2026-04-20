import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ModuleCard({ title, desc, path, accent = 'from-brand-500 to-cyan-400' }) {
  return (
    <Link to={path} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-400/60 hover:shadow-glow">
      <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-10 transition group-hover:opacity-20`} />
      <div className="relative z-10">
        <div className="mb-6 inline-flex rounded-2xl border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-200">
          Module
        </div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-300">{desc}</p>
        <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-brand-300">
          Start learning <ArrowRight size={16} />
        </div>
      </div>
    </Link>
  )
}

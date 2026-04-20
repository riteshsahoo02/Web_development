import { Languages } from 'lucide-react'

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 text-white shadow-glow">
        <Languages size={22} />
      </div>
      <div>
        <p className="text-lg font-bold tracking-wide text-ink-900">Linguify</p>
        <p className="text-xs text-ink-700/70">Japanese-inspired language studio</p>
      </div>
    </div>
  )
}

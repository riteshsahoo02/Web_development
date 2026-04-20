import { Languages } from 'lucide-react'

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-500 text-white shadow-glow">
        <Languages size={22} />
      </div>
      <div>
        <p className="text-lg font-bold tracking-wide text-white">Linguify</p>
        <p className="text-xs text-slate-400">Speak, listen, learn with confidence</p>
      </div>
    </div>
  )
}

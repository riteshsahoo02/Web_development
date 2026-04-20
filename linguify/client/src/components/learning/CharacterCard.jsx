import { speakText } from '../../utils/speech'

export default function CharacterCard({ item, selected, onSelect }) {
  const handleSpeak = (e) => {
    e.stopPropagation()
    speakText(item.symbol, 'ja-JP')
  }

  return (
    <button
      type="button"
      onClick={() => onSelect?.(item)}
      className={`card w-full text-left transition ${selected ? 'border-brand-400/70 shadow-glow' : 'hover:-translate-y-1 hover:border-white/20'}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-5xl font-bold text-white md:text-6xl">{item.symbol}</p>
          <p className="mt-3 text-lg font-semibold text-brand-300">{item.romanization}</p>
        </div>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300">
          {item.strokeCount || item.strokeTips?.length || 0} strokes
        </span>
      </div>

      <p className="mt-4 text-sm text-slate-400">
        Examples: {item.exampleWords?.join(', ') || '—'}
      </p>

      <div className="mt-4 flex gap-3">
        <button
          type="button"
          onClick={handleSpeak}
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:border-brand-400/40"
        >
          🔊 Play
        </button>

        <span className="text-sm font-medium text-white/80">Open practice →</span>
      </div>
    </button>
  )
}
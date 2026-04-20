export default function CharacterCard({ item, selected, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect?.(item)}
      className={`card w-full text-left transition ${selected ? 'border-brand-300 shadow-glow' : 'hover:-translate-y-1 hover:border-brand-200'}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-5xl font-bold text-ink-900 md:text-6xl">{item.symbol}</p>
          <p className="mt-3 text-lg font-semibold text-brand-700">{item.romanization}</p>
        </div>
        <span className="rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-semibold text-ink-700/70">
          {item.strokeCount || item.strokeTips?.length || 0} strokes
        </span>
      </div>
      <p className="mt-4 text-sm text-ink-700/70">Examples: {item.exampleWords?.join(', ') || '—'}</p>
      <p className="mt-4 text-sm font-medium text-ink-800">Open practice →</p>
    </button>
  )
}

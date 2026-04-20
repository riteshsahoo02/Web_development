export default function WordCard({ item }) {
  return (
    <div className="card">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-ink-900">{item.word}</h3>
          <p className="mt-1 text-sm text-brand-700">{item.romanization}</p>
        </div>
        <span className="rounded-full border border-brand-100 bg-brand-50/70 px-3 py-1 text-xs text-ink-700/70">{item.topic}</span>
      </div>
      <p className="mt-4 text-lg text-ink-800">{item.translation}</p>
      {item.examples?.length > 0 && <p className="mt-3 text-sm text-ink-700/70">Example: {item.examples[0]}</p>}
    </div>
  )
}

export default function GrammarCard({ item }) {
  return (
    <div className="card">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-2xl font-bold text-ink-900">{item.title}</h3>
        <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">{item.level}</span>
      </div>
      <p className="mt-4 text-brand-700">Pattern: {item.pattern}</p>
      <p className="mt-3 text-ink-700/80">{item.explanation}</p>
      {item.examples?.[0] && (
        <div className="mt-5 rounded-2xl border border-brand-100 bg-[#fff8fa] p-4">
          <p className="font-medium text-ink-900">{item.examples[0].sentence}</p>
          <p className="mt-2 text-sm text-ink-700/70">{item.examples[0].translation}</p>
        </div>
      )}
    </div>
  )
}

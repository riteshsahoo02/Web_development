export default function WordCard({ item }) {
  return (
    <div className="card">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-white">{item.word}</h3>
          <p className="mt-1 text-sm text-brand-300">{item.romanization}</p>
        </div>
        <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">{item.topic}</span>
      </div>
      <p className="mt-4 text-lg text-slate-200">{item.translation}</p>
      {item.examples?.length > 0 && <p className="mt-3 text-sm text-slate-400">Example: {item.examples[0]}</p>}
    </div>
  )
}

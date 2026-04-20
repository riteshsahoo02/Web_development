export default function GrammarCard({ item }) {
  return (
    <div className="card">
      <div className="flex flex-wrap items-center gap-3">
        <h3 className="text-2xl font-bold text-white">{item.title}</h3>
        <span className="rounded-full bg-brand-500/15 px-3 py-1 text-xs font-semibold text-brand-300">{item.level}</span>
      </div>
      <p className="mt-4 text-brand-200">Pattern: {item.pattern}</p>
      <p className="mt-3 leading-7 text-slate-300">{item.explanation}</p>
      {item.examples?.[0] && (
        <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="font-medium text-white">{item.examples[0].sentence}</p>
          <p className="mt-2 text-sm text-slate-300">{item.examples[0].translation}</p>
        </div>
      )}
    </div>
  )
}

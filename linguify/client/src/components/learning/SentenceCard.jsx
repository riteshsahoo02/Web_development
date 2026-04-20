export default function SentenceCard({ item }) {
  return (
    <div className="card">
      <p className="text-xl font-semibold text-white">{item.sentence}</p>
      <p className="mt-2 text-sm text-brand-300">{item.romanization}</p>
      <p className="mt-4 text-slate-300">{item.translation}</p>
      <span className="mt-5 inline-flex rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">{item.topic}</span>
    </div>
  )
}

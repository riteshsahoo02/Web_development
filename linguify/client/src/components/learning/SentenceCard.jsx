export default function SentenceCard({ item }) {
  return (
    <div className="card">
      <p className="text-xl font-semibold text-ink-900">{item.sentence}</p>
      <p className="mt-2 text-sm text-brand-700">{item.romanization}</p>
      <p className="mt-4 text-ink-700/80">{item.translation}</p>
    </div>
  )
}

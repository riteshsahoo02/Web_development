import { useEffect, useState } from 'react'
import api from '../services/api'
import SectionHeading from '../components/ui/SectionHeading'

export default function Listening() {
  const [items, setItems] = useState([])
  const [selected, setSelected] = useState({})

  useEffect(() => {
    api.get('/content/listening').then(({ data }) => setItems(data)).catch(() => setItems([]))
  }, [])

  return (
    <section className="section-container py-16">
      <SectionHeading eyebrow="Listening" title="Train your ears with guided comprehension tasks" subtitle="For the MVP, audio fields are present in the backend and the UI focuses on selecting correct meaning and recognition." />
      <div className="mt-10 space-y-6">
        {items.map((item) => {
          const isCorrect = selected[item._id] === item.correctAnswer
          return (
            <div key={item._id} className="card">
              <p className="text-lg font-semibold text-white">{item.promptText}</p>
              <p className="mt-2 text-sm text-slate-400">Topic: {item.topic} • Difficulty: {item.difficulty}</p>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {item.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => setSelected((prev) => ({ ...prev, [item._id]: option }))}
                    className={`rounded-2xl border px-4 py-3 text-left transition ${selected[item._id] === option ? 'border-brand-400 bg-brand-500/10 text-white' : 'border-white/10 bg-white/5 text-slate-300 hover:bg-white/10'}`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {selected[item._id] && (
                <p className={`mt-4 text-sm ${isCorrect ? 'text-emerald-300' : 'text-rose-300'}`}>
                  {isCorrect ? 'Correct answer.' : `Try again. Correct answer: ${item.correctAnswer}`}
                </p>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

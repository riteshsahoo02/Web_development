import { useEffect, useState } from 'react'
import api from '../services/api'
import ProgressBar from '../components/ui/ProgressBar'

export default function Progress() {
  const [items, setItems] = useState([])

  useEffect(() => {
    api.get('/progress/me').then(({ data }) => setItems(data)).catch(() => setItems([]))
  }, [])

  return (
    <section className="section-container py-16">
      <div className="card">
        <p className="kicker mb-4">Progress</p>
        <h1 className="mt-1 text-3xl font-bold text-ink-900">Your learning progress</h1>
        <div className="mt-8 space-y-5">
          {items.length === 0 && <p className="text-ink-700/70">No progress yet. Start a lesson to begin tracking.</p>}
          {items.map((item) => (
            <div key={item._id} className="rounded-2xl border border-brand-100 bg-[#fff8fa] p-5">
              <div className="mb-2 flex items-center justify-between">
                <p className="font-semibold text-ink-900">{item.type}</p>
                <p className="text-sm text-ink-700/60">{item.score}%</p>
              </div>
              <ProgressBar value={item.score} />
              <p className="mt-3 text-sm text-ink-700/60">Completed: {item.completed ? 'Yes' : 'No'}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

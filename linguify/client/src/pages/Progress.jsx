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
        <p className="text-sm uppercase tracking-widest text-brand-300">Progress</p>
        <h1 className="mt-3 text-3xl font-bold text-white">Your learning progress</h1>
        <div className="mt-8 space-y-5">
          {items.length === 0 && <p className="text-slate-400">No progress yet. Start a lesson to begin tracking.</p>}
          {items.map((item) => (
            <div key={item._id} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="mb-2 flex items-center justify-between">
                <p className="font-semibold text-white">{item.type}</p>
                <p className="text-sm text-slate-400">{item.score}%</p>
              </div>
              <ProgressBar value={item.score} />
              <p className="mt-3 text-sm text-slate-400">Completed: {item.completed ? 'Yes' : 'No'}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

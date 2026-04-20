import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../services/api'
import { useAuth } from '../context/AuthContext'
import StatCard from '../components/ui/StatCard'
import ProgressBar from '../components/ui/ProgressBar'
import { modules } from '../data/fallbackData'

export default function Dashboard() {
  const { user } = useAuth()
  const [progress, setProgress] = useState([])

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const { data } = await api.get('/progress/me')
        setProgress(data)
      } catch {
        setProgress([])
      }
    }
    fetchProgress()
  }, [])

  const completed = progress.filter((item) => item.completed).length
  const averageScore = progress.length ? Math.round(progress.reduce((sum, item) => sum + (item.score || 0), 0) / progress.length) : 0

  return (
    <section className="section-container py-16">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="card overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-widest text-brand-300">Dashboard</p>
                <h1 className="mt-3 text-4xl font-bold text-white">Welcome back, {user?.name}</h1>
                <p className="mt-3 max-w-2xl text-slate-300">Keep going with your {user?.profile?.targetLanguage || 'target language'} journey. Complete lessons daily to build reading, listening, speaking, and conversation skill.</p>
              </div>
              <Link to="/learn" className="primary-btn">Continue learning</Link>
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard label="Completed lessons" value={completed} hint="Across all modules" />
            <StatCard label="Average score" value={`${averageScore}%`} hint="Practice quality" />
            <StatCard label="Current level" value={user?.profile?.level || 'Beginner'} hint="From your profile" />
            <StatCard label="Target language" value={user?.profile?.targetLanguage || 'Japanese'} hint="Selected at signup" />
          </div>
        </div>

        <div className="card">
          <p className="text-sm uppercase tracking-widest text-brand-300">Module progress</p>
          <div className="mt-6 space-y-5">
            {modules.map((module, index) => {
              const item = progress[index]
              return (
                <div key={module.key}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-white">{module.title}</span>
                    <span className="text-slate-400">{item?.score || 0}%</span>
                  </div>
                  <ProgressBar value={item?.score || 0} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

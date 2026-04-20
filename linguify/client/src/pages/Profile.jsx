import { useAuth } from '../context/AuthContext'

export default function Profile() {
  const { user } = useAuth()

  return (
    <section className="section-container py-16">
      <div className="mx-auto max-w-3xl card">
        <p className="text-sm uppercase tracking-widest text-brand-300">Profile</p>
        <h1 className="mt-3 text-3xl font-bold text-white">Learner settings</h1>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-slate-400">Name</p>
            <p className="mt-2 text-lg text-white">{user?.name}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-slate-400">Email</p>
            <p className="mt-2 text-lg text-white">{user?.email}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-slate-400">Native language</p>
            <p className="mt-2 text-lg text-white">{user?.profile?.nativeLanguage || 'English'}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-slate-400">Target language</p>
            <p className="mt-2 text-lg text-white">{user?.profile?.targetLanguage || 'Japanese'}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:col-span-2">
            <p className="text-sm text-slate-400">Current level</p>
            <p className="mt-2 text-lg text-white">{user?.profile?.level || 'Beginner'}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

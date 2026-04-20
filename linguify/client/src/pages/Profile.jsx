import { useAuth } from '../context/AuthContext'

export default function Profile() {
  const { user } = useAuth()

  return (
    <section className="section-container py-16">
      <div className="mx-auto max-w-3xl card">
        <p className="kicker mb-4">Profile</p>
        <h1 className="mt-1 text-3xl font-bold text-ink-900">Learner settings</h1>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-brand-100 bg-[#fff8fa] p-5">
            <p className="text-sm text-ink-700/60">Name</p>
            <p className="mt-2 text-lg text-ink-900">{user?.name}</p>
          </div>
          <div className="rounded-2xl border border-brand-100 bg-[#fff8fa] p-5">
            <p className="text-sm text-ink-700/60">Email</p>
            <p className="mt-2 text-lg text-ink-900">{user?.email}</p>
          </div>
          <div className="rounded-2xl border border-brand-100 bg-[#fff8fa] p-5">
            <p className="text-sm text-ink-700/60">Native language</p>
            <p className="mt-2 text-lg text-ink-900">{user?.profile?.nativeLanguage || 'English'}</p>
          </div>
          <div className="rounded-2xl border border-brand-100 bg-[#fff8fa] p-5">
            <p className="text-sm text-ink-700/60">Target language</p>
            <p className="mt-2 text-lg text-ink-900">{user?.profile?.targetLanguage || 'Japanese'}</p>
          </div>
          <div className="rounded-2xl border border-brand-100 bg-[#fff8fa] p-5 sm:col-span-2">
            <p className="text-sm text-ink-700/60">Current level</p>
            <p className="mt-2 text-lg text-ink-900">{user?.profile?.level || 'Beginner'}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

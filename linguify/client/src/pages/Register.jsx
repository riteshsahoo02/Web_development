import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Register() {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '', email: '', password: '', nativeLanguage: 'English', targetLanguage: 'Japanese', level: 'beginner'
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await register(form)
      navigate('/dashboard')
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="section-container py-16">
      <div className="mx-auto max-w-2xl card">
        <h1 className="text-3xl font-bold text-white">Create your learner account</h1>
        <p className="mt-2 text-slate-400">Set your target language and start learning step by step.</p>
        <form className="mt-8 grid gap-5 md:grid-cols-2" onSubmit={handleSubmit}>
          <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-brand-400" placeholder="Name" type="text" name="name" value={form.name} onChange={handleChange} required />
          <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-brand-400" placeholder="Email" type="email" name="email" value={form.email} onChange={handleChange} required />
          <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-brand-400 md:col-span-2" placeholder="Password" type="password" name="password" value={form.password} onChange={handleChange} required />
          <select className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-brand-400" name="nativeLanguage" value={form.nativeLanguage} onChange={handleChange}>
            <option>English</option>
            <option>Hindi</option>
          </select>
          <select className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-brand-400" name="targetLanguage" value={form.targetLanguage} onChange={handleChange}>
            <option>Japanese</option>
            <option>Spanish</option>
            <option>Korean</option>
            <option>Hindi</option>
          </select>
          <select className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-brand-400 md:col-span-2" name="level" value={form.level} onChange={handleChange}>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
          {error && <p className="text-sm text-rose-300 md:col-span-2">{error}</p>}
          <button className="primary-btn md:col-span-2" disabled={loading}>{loading ? 'Creating account...' : 'Create account'}</button>
        </form>
        <p className="mt-6 text-sm text-slate-400">Already have an account? <Link className="text-brand-300" to="/login">Login</Link></p>
      </div>
    </section>
  )
}

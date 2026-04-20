import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await login(form)
      navigate('/dashboard')
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="section-container py-16">
      <div className="mx-auto max-w-lg glass rounded-[2rem] p-8">
        <p className="kicker mb-4">Welcome back</p>
        <h1 className="text-3xl font-bold text-ink-900">Log in to your learning studio</h1>
        <p className="mt-2 text-ink-700/70">Continue your sakura-themed language journey.</p>
        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <input className="w-full rounded-2xl border border-brand-100 bg-[#fff8fa] px-4 py-3 text-ink-900 outline-none transition focus:border-brand-300" placeholder="Email" type="email" name="email" value={form.email} onChange={handleChange} required />
          <input className="w-full rounded-2xl border border-brand-100 bg-[#fff8fa] px-4 py-3 text-ink-900 outline-none transition focus:border-brand-300" placeholder="Password" type="password" name="password" value={form.password} onChange={handleChange} required />
          {error && <p className="text-sm text-rose-600">{error}</p>}
          <button className="primary-btn w-full" disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
        </form>
        <p className="mt-6 text-sm text-ink-700/70">No account? <Link className="font-semibold text-brand-700" to="/register">Create one</Link></p>
      </div>
    </section>
  )
}

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
      <div className="mx-auto max-w-lg card">
        <h1 className="text-3xl font-bold text-white">Welcome back</h1>
        <p className="mt-2 text-slate-400">Log in to continue your language journey.</p>
        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-brand-400" placeholder="Email" type="email" name="email" value={form.email} onChange={handleChange} required />
          <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-brand-400" placeholder="Password" type="password" name="password" value={form.password} onChange={handleChange} required />
          {error && <p className="text-sm text-rose-300">{error}</p>}
          <button className="primary-btn w-full" disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
        </form>
        <p className="mt-6 text-sm text-slate-400">No account? <Link className="text-brand-300" to="/register">Create one</Link></p>
      </div>
    </section>
  )
}

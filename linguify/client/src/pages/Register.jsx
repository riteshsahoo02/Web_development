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
      <div className="mx-auto max-w-2xl glass rounded-[2rem] p-8">
        <p className="kicker mb-4">Get started</p>
        <h1 className="text-3xl font-bold text-ink-900">Create your learner account</h1>
        <p className="mt-2 text-ink-700/70">Set your target language and start learning step by step.</p>
        <form className="mt-8 grid gap-5 md:grid-cols-2" onSubmit={handleSubmit}>
          <input className="rounded-2xl border border-brand-100 bg-[#fff8fa] px-4 py-3 text-ink-900 outline-none transition focus:border-brand-300" placeholder="Name" type="text" name="name" value={form.name} onChange={handleChange} required />
          <input className="rounded-2xl border border-brand-100 bg-[#fff8fa] px-4 py-3 text-ink-900 outline-none transition focus:border-brand-300" placeholder="Email" type="email" name="email" value={form.email} onChange={handleChange} required />
          <input className="rounded-2xl border border-brand-100 bg-[#fff8fa] px-4 py-3 text-ink-900 outline-none transition focus:border-brand-300 md:col-span-2" placeholder="Password" type="password" name="password" value={form.password} onChange={handleChange} required />
          <select className="rounded-2xl border border-brand-100 bg-white px-4 py-3 text-ink-900 outline-none transition focus:border-brand-300" name="nativeLanguage" value={form.nativeLanguage} onChange={handleChange}>
            <option>English</option>
            <option>Hindi</option>
          </select>
          <select className="rounded-2xl border border-brand-100 bg-white px-4 py-3 text-ink-900 outline-none transition focus:border-brand-300" name="targetLanguage" value={form.targetLanguage} onChange={handleChange}>
            <option>Japanese</option>
            <option>Spanish</option>
            <option>Korean</option>
            <option>Hindi</option>
          </select>
          <select className="rounded-2xl border border-brand-100 bg-white px-4 py-3 text-ink-900 outline-none transition focus:border-brand-300 md:col-span-2" name="level" value={form.level} onChange={handleChange}>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
          {error && <p className="text-sm text-rose-600 md:col-span-2">{error}</p>}
          <button className="primary-btn md:col-span-2" disabled={loading}>{loading ? 'Creating account...' : 'Create account'}</button>
        </form>
        <p className="mt-6 text-sm text-ink-700/70">Already have an account? <Link className="font-semibold text-brand-700" to="/login">Login</Link></p>
      </div>
    </section>
  )
}

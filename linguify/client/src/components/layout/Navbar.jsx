import { Link, NavLink } from 'react-router-dom'
import Logo from '../ui/Logo'
import { useAuth } from '../../context/AuthContext'

export default function Navbar() {
  const { user, logout } = useAuth()

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="section-container flex items-center justify-between py-4">
        <Link to="/">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <NavLink className="text-sm text-slate-300 transition hover:text-white" to="/">Home</NavLink>
          <NavLink className="text-sm text-slate-300 transition hover:text-white" to="/learn">Learn</NavLink>
          <NavLink className="text-sm text-slate-300 transition hover:text-white" to="/dashboard">Dashboard</NavLink>
          <NavLink className="text-sm text-slate-300 transition hover:text-white" to="/progress">Progress</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <span className="hidden text-sm text-slate-300 sm:inline">Hi, {user.name}</span>
              <button onClick={logout} className="secondary-btn py-2">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="secondary-btn py-2">Login</Link>
              <Link to="/register" className="primary-btn py-2">Get Started</Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

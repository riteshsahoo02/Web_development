import { Link, NavLink } from 'react-router-dom'
import Logo from '../ui/Logo'
import { useAuth } from '../../context/AuthContext'

const navItem = ({ isActive }) =>
  `rounded-full px-4 py-2 text-sm font-medium transition ${isActive ? 'bg-brand-50 text-brand-700' : 'text-ink-700 hover:bg-brand-50/80 hover:text-brand-700'}`

export default function Navbar() {
  const { user, logout } = useAuth()

  return (
    <header className="sticky top-0 z-40 border-b border-brand-100/80 bg-white/75 backdrop-blur-xl">
      <div className="section-container flex items-center justify-between gap-4 py-4">
        <Link to="/">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          <NavLink className={navItem} to="/">Home</NavLink>
          <NavLink className={navItem} to="/learn">Learn</NavLink>
          <NavLink className={navItem} to="/dashboard">Dashboard</NavLink>
          <NavLink className={navItem} to="/progress">Progress</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <span className="hidden rounded-full border border-brand-100 bg-white/80 px-4 py-2 text-sm text-ink-700 sm:inline">
                こんにちは, {user.name}
              </span>
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

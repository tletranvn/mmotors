import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navLinks = [
  { label: 'Accueil', to: '/' },
  { label: 'Catalogue', to: '/vehicles' },
  { label: 'À Propos', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-background border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
          >
            {/* Lightning bolt icon */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="text-primary group-hover:text-white transition-colors"
            >
              <path
                d="M13 2L4.5 13.5H11L10 22L19.5 10.5H13L13 2Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-white font-extrabold text-lg tracking-widest">
              M-MOTORS
            </span>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navigation principale">
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-primary'
                      : 'text-white/70 hover:text-white'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className="text-white/70 hover:text-white transition-colors px-3 py-1.5 text-sm font-medium"
            >
              Se connecter
            </Link>
            <Link
              to="/register"
              className="bg-primary text-background hover:opacity-90 transition-opacity px-4 py-1.5 rounded text-sm font-semibold"
            >
              S'inscrire
            </Link>
          </div>

          {/* Burger menu mobile */}
          <button
            className="md:hidden text-white/70 hover:text-white p-2"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {/* Menu mobile */}
        {menuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3" aria-label="Navigation mobile">
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-medium py-2 transition-colors ${
                    isActive ? 'text-primary' : 'text-white/70 hover:text-white'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="text-white/70 hover:text-white text-sm font-medium py-2 transition-colors"
            >
              Se connecter
            </Link>
            <Link
              to="/register"
              onClick={() => setMenuOpen(false)}
              className="bg-primary text-background text-center py-2 rounded text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              S'inscrire
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

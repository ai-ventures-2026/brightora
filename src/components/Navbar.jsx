import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-icon">B</span>
          <span className="navbar__logo-text">
            Bright<span className="navbar__logo-accent">ora</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="navbar__nav" aria-label="Main navigation">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `navbar__link${isActive ? ' navbar__link--active' : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* CTA Button */}
        <Link to="/contact" className="btn btn-primary navbar__cta">
          Let's Talk
        </Link>

        {/* Mobile hamburger */}
        <button
          className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile${menuOpen ? ' navbar__mobile--open' : ''}`}>
        {navLinks.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `navbar__mobile-link${isActive ? ' navbar__mobile-link--active' : ''}`
            }
          >
            {label}
          </NavLink>
        ))}
        <Link to="/contact" className="btn btn-primary navbar__mobile-cta">
          Let's Talk
        </Link>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid transparent;
          transition: all 0.3s ease;
        }

        .navbar--scrolled {
          border-bottom-color: rgba(255, 107, 53, 0.15);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
        }

        .navbar__inner {
          display: flex;
          align-items: center;
          gap: 32px;
          height: 72px;
        }

        /* Logo */
        .navbar__logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
        }

        .navbar__logo-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #ff6b35, #ffd166);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 900;
          font-size: 1.2rem;
          letter-spacing: -0.05em;
          box-shadow: 0 3px 12px rgba(255, 107, 53, 0.35);
        }

        .navbar__logo-text {
          font-size: 1.35rem;
          font-weight: 900;
          color: #2d2d2d;
          letter-spacing: -0.03em;
        }

        .navbar__logo-accent {
          color: #ff6b35;
        }

        /* Desktop nav */
        .navbar__nav {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-left: auto;
        }

        .navbar__link {
          padding: 8px 16px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.95rem;
          color: #555555;
          text-decoration: none;
          transition: all 0.2s ease;
          position: relative;
        }

        .navbar__link:hover {
          color: #ff6b35;
          background: rgba(255, 107, 53, 0.08);
        }

        .navbar__link--active {
          color: #ff6b35;
          background: rgba(255, 107, 53, 0.1);
        }

        /* CTA */
        .navbar__cta {
          flex-shrink: 0;
          font-size: 0.9rem;
          padding: 10px 22px;
        }

        /* Hamburger */
        .navbar__hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          border-radius: 8px;
          transition: background 0.2s;
          margin-left: auto;
        }

        .navbar__hamburger:hover {
          background: rgba(255, 107, 53, 0.08);
        }

        .navbar__hamburger span {
          display: block;
          width: 24px;
          height: 2.5px;
          background: #2d2d2d;
          border-radius: 2px;
          transition: all 0.3s ease;
          transform-origin: center;
        }

        .navbar__hamburger--open span:nth-child(1) {
          transform: translateY(7.5px) rotate(45deg);
        }

        .navbar__hamburger--open span:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }

        .navbar__hamburger--open span:nth-child(3) {
          transform: translateY(-7.5px) rotate(-45deg);
        }

        /* Mobile menu */
        .navbar__mobile {
          display: none;
          flex-direction: column;
          padding: 0 20px 24px;
          gap: 4px;
          background: white;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s ease, padding 0.35s ease;
          border-top: 1px solid transparent;
        }

        .navbar__mobile--open {
          max-height: 400px;
          border-top-color: rgba(255, 107, 53, 0.12);
        }

        .navbar__mobile-link {
          padding: 12px 16px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 1rem;
          color: #555555;
          text-decoration: none;
          transition: all 0.2s;
        }

        .navbar__mobile-link:hover,
        .navbar__mobile-link--active {
          background: rgba(255, 107, 53, 0.08);
          color: #ff6b35;
        }

        .navbar__mobile-cta {
          margin-top: 12px;
          text-align: center;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .navbar__nav,
          .navbar__cta {
            display: none;
          }

          .navbar__hamburger {
            display: flex;
          }

          .navbar__mobile {
            display: flex;
          }
        }
      `}</style>
    </header>
  )
}

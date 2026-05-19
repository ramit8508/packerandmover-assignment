import { useState, useEffect } from 'react'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#process', label: 'How It Works' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-inner">
        {/* Logo */}
        <a href="#" className="logo" aria-label="SteelMove Co. Home">
          <span className="logo-badge">SM</span>
          <span className="logo-text">
            SteelMove<span className="logo-accent"> Co.</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <nav aria-label="Primary" className="nav-links">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className="nav-link">
              {label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="nav-right">
          <a href="tel:+919876543210" className="nav-phone">
            <span className="nav-phone-icon">&#128222;</span>
            +91 98765 43210
          </a>
          <a className="btn btn-primary nav-cta" href="#contact">
            Get a Free Quote
          </a>

          {/* Hamburger */}
          <button
            className={`hamburger ${menuOpen ? 'hamburger-open' : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="mobile-menu">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a href="tel:+919876543210" className="mobile-link mobile-phone">
            &#128222; +91 98765 43210
          </a>
          <a
            className="btn btn-primary"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Get a Free Quote
          </a>
        </div>
      )}
    </header>
  )
}

export default Header

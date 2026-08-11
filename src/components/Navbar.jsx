import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { profile } from '../data/portfolio.js';

const tabs = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Me' },
  { to: '/projects', label: 'Projects' },
  { to: '/certifications', label: 'Certifications' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <NavLink to="/" className="logo">
          <span className="logo-mark">{profile.initials}</span>
          <span>{profile.brand}</span>
        </NavLink>

        <nav className={`tabs${open ? ' open' : ''}`}>
          {tabs.map((tab) => (
            <NavLink
              key={tab.to}
              to={tab.to}
              end={tab.to === '/'}
              className={({ isActive }) => `tab${isActive ? ' active' : ''}`}
            >
              {tab.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '\u2715' : '\u2630'}
        </button>
      </div>
    </header>
  );
}

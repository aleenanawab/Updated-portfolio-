import { useEffect, useState } from 'react';

const links = [
  { href: '#about',      label: 'About' },
  { href: '#projects',   label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills',     label: 'Skills' },
  { href: '#contact',    label: 'Contact' },
];

interface NavProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export default function Nav({ theme, toggleTheme }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [active, setActive]     = useState('');
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 1024);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      const m = window.innerWidth < 1024;
      setIsMobile(m);
      if (!m) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: '-30% 0px -65% 0px' }
    );
    links.forEach(({ href }) => {
      const el = document.getElementById(href.slice(1));
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="nav">
        <div className={`nav-inner${scrolled ? ' scrolled' : ''}`}>

          {/* Logo */}
          <a href="#top" className="nav-logo">
            <span className="nav-logo-badge">A</span>
            <span className="nav-logo-name">Aleena Nawab</span>
          </a>

          {/* Desktop links */}
          <nav className="nav-links">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`nav-link${active === href.slice(1) ? ' active' : ''}`}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Right side: Resume + Theme toggle */}
          <div className="nav-right">
            <a href="/resume.pdf" download className="nav-resume">
              Resume ↓
            </a>
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? '☀' : '☾'}
            </button>

            {/* Hamburger (mobile only) */}
            {isMobile && (
              <button
                className="nav-hamburger"
                onClick={() => setOpen((o) => !o)}
                aria-label="Toggle menu"
              >
                <span style={{ transform: open ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
                <span style={{ opacity: open ? 0 : 1 }} />
                <span style={{ transform: open ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Mobile dropdown */}
      {isMobile && open && (
        <nav className="nav-mobile">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`nav-mobile-link${active === href.slice(1) ? ' active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="nav-mobile-resume"
            onClick={() => setOpen(false)}
          >
            Download Resume ↓
          </a>
        </nav>
      )}
    </>
  );
}

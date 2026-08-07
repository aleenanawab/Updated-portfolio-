import { useEffect, useState } from 'react';
import { profile } from '../data';
import { SplineScene } from '@/components/ui/spline';
import { Spotlight } from '@/components/ui/spotlight';

const roles = ['MERN Stack Developer', 'Full-Stack Engineer', 'React Developer'];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText]       = useState('');
  const [typing, setTyping]   = useState(true);

  useEffect(() => {
    const target = roles[roleIdx];
    if (typing) {
      if (text.length < target.length) {
        const t = setTimeout(() => setText(target.slice(0, text.length + 1)), 65);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setTyping(false), 2200);
      return () => clearTimeout(t);
    } else {
      if (text.length > 0) {
        const t = setTimeout(() => setText(target.slice(0, text.length - 1)), 38);
        return () => clearTimeout(t);
      }
      setRoleIdx((i) => (i + 1) % roles.length);
      setTyping(true);
    }
  }, [text, typing, roleIdx]);

  const stats = [
    { v: '1+',  l: 'Year Experience' },
    { v: '4',   l: 'Live Projects' },
    { v: '3',   l: 'Internships' },
    { v: '15+', l: 'API Endpoints' },
  ];

  return (
    <section id="about">
      <div className="section-inner" style={{ paddingTop: 56, paddingBottom: 72 }}>
        <div className="hero-grid">

          {/* ── Left column ── */}
          <div>
            <div className="badge fade-up" style={{ animationDelay: '0ms', marginBottom: 28 }}>
              <span className="dot-pulse" />
              Available for opportunities · {profile.location}
            </div>

            <h1
              className="fade-up"
              style={{
                fontFamily: 'var(--font-head)',
                fontSize: 'clamp(2.4rem, 5.5vw, 4rem)',
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: '-0.02em',
                color: 'var(--ink)',
                marginBottom: 16,
                animationDelay: '80ms',
              }}
            >
              {profile.name.split(' ')[0]}{' '}
              <span className="grad">{profile.name.split(' ')[1]}</span>
            </h1>

            <div className="fade-up" style={{ animationDelay: '160ms', marginBottom: 20 }}>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
                color: 'var(--muted)',
              }}>
                {text}<span className="cursor" />
              </span>
            </div>

            <p
              className="fade-up"
              style={{
                animationDelay: '240ms',
                color: 'var(--muted)',
                fontSize: 15,
                lineHeight: 1.8,
                maxWidth: 480,
                marginBottom: 36,
              }}
            >
              MERN Stack Developer with 1+ year of internship experience building
              full-stack applications — authentication systems, RESTful APIs, and
              responsive UIs. I ship{' '}
              <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>real, deployed products</strong>,
              not just tutorials.
            </p>

            {/* Stats row */}
            <div
              className="fade-up"
              style={{
                animationDelay: '280ms',
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 1,
                marginBottom: 32,
                background: 'var(--border)',
                border: '1px solid var(--border)',
                borderRadius: 12,
                overflow: 'hidden',
              }}
            >
              {stats.map((s) => (
                <div
                  key={s.l}
                  style={{
                    padding: '14px 8px',
                    textAlign: 'center',
                    background: 'var(--bg)',
                  }}
                >
                  <div className="grad" style={{ fontFamily: 'var(--font-head)', fontSize: 22, fontWeight: 800 }}>{s.v}</div>
                  <div style={{ fontSize: 10, color: 'var(--muted)', marginTop: 3, fontWeight: 500, lineHeight: 1.3 }}>{s.l}</div>
                </div>
              ))}
            </div>

            <div className="fade-up" style={{ animationDelay: '320ms', display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <a href="#projects" className="btn-primary">View Projects</a>
              <a href="#contact" className="btn-ghost">Get in Touch</a>
              <a
                href="/resume.pdf"
                download
                style={{ display: 'inline-flex', alignItems: 'center', padding: '11px 18px', fontSize: 14, color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--accent-light)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--muted)')}
              >
                ↓ Resume
              </a>
            </div>
          </div>

          {/* ── Right column — 3D Spline scene ── */}
          <div className="hero-side fade-up" style={{ animationDelay: '200ms' }}>
            <div
              className="card"
              style={{
                overflow: 'hidden',
                height: 480,
                position: 'relative',
                background: 'var(--bg2)',
              }}
            >
              <Spotlight size={320} />

              {/* Scene */}
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />

              {/* Overlay label */}
              <div style={{
                position: 'absolute',
                bottom: 0, left: 0, right: 0,
                padding: '20px 22px',
                background: 'linear-gradient(to top, var(--bg2) 0%, transparent 100%)',
                pointerEvents: 'none',
              }}>
                <p style={{ fontFamily: 'var(--font-head)', fontSize: 13, fontWeight: 600, color: 'var(--ink2)' }}>
                  Interactive 3D
                </p>
                <p style={{ fontSize: 11, color: 'var(--muted)', marginTop: 2 }}>
                  Drag to explore · Built with Spline
                </p>
              </div>

              {/* Quick links row */}
              <div style={{
                position: 'absolute',
                top: 16, right: 16,
                display: 'flex',
                gap: 8,
              }}>
                {[
                  { label: 'GitHub',   href: `https://${profile.github}` },
                  { label: 'LinkedIn', href: `https://${profile.linkedin}` },
                ].map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '5px 12px',
                      borderRadius: 8,
                      fontSize: 11,
                      fontWeight: 600,
                      color: 'var(--ink2)',
                      textDecoration: 'none',
                      background: 'rgba(0,0,0,0.35)',
                      border: '1px solid var(--border)',
                      backdropFilter: 'blur(8px)',
                      transition: 'background 0.2s',
                    }}
                  >
                    {l.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

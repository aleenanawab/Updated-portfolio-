import { education, languages, profile } from '../data';
import { useReveal } from '../hooks/useReveal';

export function Education() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="education">
      <div ref={ref} className="section-inner">
        <div className="reveal" style={{ marginBottom: 52 }}>
          <p className="section-tag">Education</p>
          <h2 className="section-title">Background</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%,420px),1fr))', gap: 16 }}>
          {/* Academic */}
          <div className="card reveal" style={{ overflow: 'hidden' }}>
            <div style={{ padding: '14px 22px', borderBottom: '1px solid var(--border)' }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)' }}>Academic</p>
            </div>
            <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', gap: 20 }}>
              {education.map((e) => (
                <div key={e.degree} style={{ display: 'flex', gap: 14 }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--violet)', flexShrink: 0, marginTop: 6 }} />
                  <div>
                    <p style={{ fontFamily: 'var(--font-head)', fontSize: 15, fontWeight: 600, color: 'var(--ink)' }}>{e.degree}</p>
                    <p style={{ fontSize: 13, color: 'var(--muted)', marginTop: 2 }}>{e.school}</p>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--muted2)', marginTop: 4 }}>{e.dates}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="card reveal" style={{ overflow: 'hidden' }}>
            <div style={{ padding: '14px 22px', borderBottom: '1px solid var(--border)' }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)' }}>Languages & Status</p>
            </div>
            <div style={{ padding: 22 }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>Spoken</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 22 }}>
                {languages.map((l) => <span key={l} className="pill">{l}</span>)}
              </div>
              <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>Currently</p>
              <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.75 }}>
                1st semester of BS Computer Science, building toward a career shaped by production-grade full-stack work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const ref = useReveal<HTMLDivElement>();

  const rows = [
    { icon: '✉', label: 'Email',    value: profile.email,    href: `mailto:${profile.email}` },
    { icon: '📞', label: 'Phone',    value: profile.phone,    href: `tel:${profile.phone}` },
    { icon: 'in', label: 'LinkedIn', value: profile.linkedin, href: `https://${profile.linkedin}` },
    { icon: '⌥',  label: 'GitHub',   value: profile.github,   href: `https://${profile.github}` },
  ];

  const infoRows = [
    { label: 'Location',  value: profile.location },
    { label: 'Work type', value: 'Remote / On-site' },
    { label: 'Role type', value: 'Full-time / Internship' },
    { label: 'Response',  value: 'Within 24 hours' },
  ];

  return (
    <section id="contact">
      <div ref={ref} className="section-inner">
        <div className="reveal" style={{ marginBottom: 52 }}>
          <p className="section-tag">Contact</p>
          <h2 className="section-title">Let's work together</h2>
          <p className="section-sub">
            Open to full-stack and frontend roles. I reply fast and I'm based in {profile.location}, working remote-friendly.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%,420px),1fr))', gap: 16 }}>

          {/* Contact details */}
          <div className="card reveal" style={{ overflow: 'hidden' }}>
            <div style={{ padding: '14px 22px', borderBottom: '1px solid var(--border)' }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)' }}>Contact Details</p>
            </div>
            {rows.map((r, i) => (
              <a
                key={r.label}
                href={r.href}
                target={r.href.startsWith('http') ? '_blank' : undefined}
                rel={r.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="contact-row"
                style={{ borderBottom: i < rows.length - 1 ? '1px solid var(--border)' : 'none' }}
              >
                <span className="contact-icon">{r.icon}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: 11, color: 'var(--muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 2 }}>{r.label}</p>
                  <p style={{ fontSize: 13, color: 'var(--ink)', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.value}</p>
                </div>
                <span style={{ fontSize: 12, color: 'var(--muted2)' }}>↗</span>
              </a>
            ))}
          </div>

          {/* Availability */}
          <div className="card reveal" style={{ overflow: 'hidden', transitionDelay: '80ms' }}>
            <div style={{ padding: '14px 22px', borderBottom: '1px solid var(--border)' }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)' }}>Availability</p>
            </div>
            <div style={{ padding: 22, display: 'flex', flexDirection: 'column', gap: 18 }}>
              {/* Status badge */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '10px 14px', borderRadius: 10,
                background: 'rgba(34,217,196,0.07)', border: '1px solid rgba(34,217,196,0.18)',
              }}>
                <span className="dot-pulse" />
                <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--cyan)' }}>Available for new opportunities</span>
              </div>

              {/* Info rows */}
              <div>
                {infoRows.map((r) => (
                  <div key={r.label} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '10px 0', borderBottom: '1px solid var(--border)',
                  }}>
                    <span style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.07em' }}>{r.label}</span>
                    <span style={{ fontSize: 13, color: 'var(--ink)', fontWeight: 500 }}>{r.value}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <a href={`mailto:${profile.email}`} className="btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
                  Send Email
                </a>
                <a href="/resume.pdf" download className="btn-ghost" style={{ flex: 1, justifyContent: 'center' }}>
                  ↓ Resume
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '24px' }}>
      <div style={{
        maxWidth: 'var(--max-w)', margin: '0 auto',
        display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 12,
        fontSize: 12, color: 'var(--muted2)',
      }}>
        <span>© {new Date().getFullYear()} {profile.name} — Built with React & TypeScript</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span className="dot-pulse" style={{ width: 6, height: 6 }} />
          Available for work
        </span>
      </div>
    </footer>
  );
}

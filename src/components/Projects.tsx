import { projects } from '../data';
import { useReveal } from '../hooks/useReveal';

export default function Projects() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="projects">
      <div ref={ref} className="section-inner">
        <div className="reveal" style={{ marginBottom: 52 }}>
          <p className="section-tag">Projects</p>
          <h2 className="section-title">Shipped, not just started</h2>
          <p className="section-sub">
            Four production-deployed applications — collaboration tools, HR systems,
            e-commerce, and AI-assisted publishing.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%,460px),1fr))', gap: 20 }}>
          {projects.map((p, i) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card reveal"
              style={{
                display: 'flex', flexDirection: 'column',
                padding: 28, textDecoration: 'none',
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 16 }}>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-head)', fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>
                    {p.name}
                  </h3>
                  <p style={{ fontSize: 13, color: 'var(--muted)' }}>{p.role}</p>
                </div>
                <span style={{ fontSize: 18, color: 'var(--violet)', opacity: 0.7 }}>↗</span>
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, flex: 1, marginBottom: 20 }}>
                {p.bullets.map((b, j) => (
                  <li key={j} style={{ display: 'flex', gap: 10, fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>
                    <span style={{ color: 'var(--violet)', flexShrink: 0, marginTop: 2 }}>▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, paddingTop: 16, borderTop: '1px solid var(--border)' }}>
                {p.stack.map((s) => <span key={s} className="pill">{s}</span>)}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

import { experience } from '../data';
import { useReveal } from '../hooks/useReveal';

export default function Experience() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="experience">
      <div ref={ref} className="section-inner">
        <div className="reveal" style={{ marginBottom: 52 }}>
          <p className="section-tag">Experience</p>
          <h2 className="section-title">Where I've worked</h2>
        </div>

        <div className="card reveal" style={{ padding: '32px 36px' }}>
          {experience.map((job, i) => (
            <div key={i} className="tl-item">
              <span className="tl-dot" />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8, marginBottom: 4 }}>
                  <h3 style={{ fontFamily: 'var(--font-head)', fontSize: 17, fontWeight: 700, color: 'var(--ink)' }}>
                    {job.title}
                  </h3>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: 11,
                    padding: '3px 10px', borderRadius: 999,
                    background: 'var(--cyan-glow)', color: 'var(--cyan)',
                    border: '1px solid rgba(34,217,196,0.2)',
                    whiteSpace: 'nowrap', flexShrink: 0,
                  }}>
                    {job.dates}
                  </span>
                </div>
                <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 12 }}>
                  {job.company} · {job.location}
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7 }}>
                  {job.bullets.map((b, j) => (
                    <li key={j} style={{ display: 'flex', gap: 10, fontSize: 13, color: 'var(--muted)', lineHeight: 1.65 }}>
                      <span style={{ color: 'var(--violet)', flexShrink: 0 }}>▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { skills } from '../data';
import { useReveal } from '../hooks/useReveal';

const labelMap: Record<string, string> = {
  frontend:     'Frontend',
  backend:      'Backend',
  database:     'Database',
  tooling:      'Tools & Workflow',
  cloud_devops: 'Cloud & DevOps',
};

export default function Skills() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="skills">
      <div ref={ref} className="section-inner">
        <div className="reveal" style={{ marginBottom: 52 }}>
          <p className="section-tag">Skills</p>
          <h2 className="section-title">What I build with</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%,300px),1fr))', gap: 16 }}>
          {skills.map((g, i) => (
            <div
              key={g.label}
              className="card reveal"
              style={{ padding: 22, transitionDelay: `${i * 60}ms` }}
            >
              <p style={{ fontSize: 12, fontWeight: 700, color: 'var(--ink)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>
                {labelMap[g.label] ?? g.label}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {g.items.map((item) => <span key={item} className="pill">{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

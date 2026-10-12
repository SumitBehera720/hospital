import { UserCheck, Stethoscope, HeartPulse, Clock4 } from 'lucide-react';
import { MEDICAL_TEAM_INFO } from '../data/healthcareData.js';

export default function MedicalTeamSection() {
  const roleIcons = [Stethoscope, HeartPulse, UserCheck, Clock4];

  return (
    <section id="medical-team" className="siza-section siza-section--muted">
      <div className="siza-container">
        <div style={{ textAlign: 'center', maxWidth: '48rem', margin: '0 auto' }}>
          <span className="siza-eyebrow">{MEDICAL_TEAM_INFO.eyebrow}</span>
          <h2 className="siza-heading">{MEDICAL_TEAM_INFO.title}</h2>
          <p className="siza-lead">{MEDICAL_TEAM_INFO.description}</p>
          <span className="siza-divider" />
        </div>

        {/* Stats Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1.25rem',
            margin: '3rem 0 3.5rem 0'
          }}
        >
          {MEDICAL_TEAM_INFO.stats.map((s, idx) => (
            <div
              key={idx}
              style={{
                background: '#ffffff',
                padding: '1.5rem',
                borderRadius: '8px',
                textAlign: 'center',
                border: '1px solid var(--siza-border)',
                boxShadow: 'var(--siza-shadow-sm)'
              }}
            >
              <div style={{ fontFamily: 'var(--siza-font-serif)', fontSize: '2rem', fontWeight: 800, color: 'var(--siza-teal)' }}>
                {s.value}
              </div>
              <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--siza-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '0.25rem' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Roles Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.75rem' }}>
          {MEDICAL_TEAM_INFO.roles.map((r, i) => {
            const Icon = roleIcons[i % roleIcons.length];
            return (
              <div
                key={i}
                style={{
                  background: '#ffffff',
                  padding: '1.75rem',
                  borderRadius: 'var(--siza-radius)',
                  border: '1px solid var(--siza-border)',
                  boxShadow: 'var(--siza-shadow-sm)'
                }}
              >
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '2.75rem',
                    height: '2.75rem',
                    borderRadius: '8px',
                    background: 'var(--siza-teal-light)',
                    color: 'var(--siza-teal)',
                    marginBottom: '1rem'
                  }}
                >
                  <Icon size={22} />
                </div>
                <h3 style={{ fontFamily: 'var(--siza-font-serif)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--siza-navy)', margin: '0 0 0.5rem 0' }}>
                  {r.title}
                </h3>
                <p style={{ fontSize: '0.875rem', lineHeight: '1.6', color: 'var(--siza-text-muted)', margin: 0 }}>
                  {r.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

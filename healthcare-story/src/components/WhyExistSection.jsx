import { AlertCircle, Clock, Car, ShieldAlert, HeartHandshake } from 'lucide-react';
import { WHY_EXIST } from '../data/healthcareData.js';

export default function WhyExistSection() {
  const icons = [Car, Clock, ShieldAlert, AlertCircle];

  return (
    <section id="why-exist" className="siza-section">
      <div className="siza-container">
        <div style={{ textAlign: 'center', maxWidth: '48rem', margin: '0 auto' }}>
          <span className="siza-eyebrow">24/7 On-Demand Care · Home · Hotel · Workplace</span>
          <h2 className="siza-heading">{WHY_EXIST.title}</h2>
          <p className="siza-lead">{WHY_EXIST.lead}</p>
          <span className="siza-divider" />
        </div>

        <div className="siza-barriers-grid">
          {WHY_EXIST.barriers.map((barrier, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div key={index} className="siza-barrier-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.6rem' }}>
                  <Icon size={20} color="var(--siza-amber-dark)" />
                  <h3 className="siza-barrier-card__title" style={{ margin: 0 }}>{barrier.title}</h3>
                </div>
                <p className="siza-barrier-card__desc">{barrier.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Highlight Callout Box */}
        <div className="siza-callout-box">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--siza-amber)' }}>
            <HeartHandshake size={28} />
            <span style={{ fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.85rem' }}>
              The Heltcare Mission
            </span>
          </div>
          <p style={{ fontSize: '1.15rem', lineHeight: '1.7', maxWidth: '46rem', margin: '0 auto', color: '#ffffff' }}>
            {WHY_EXIST.solution}
          </p>
        </div>
      </div>
    </section>
  );
}

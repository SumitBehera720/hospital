import { APPROACH_PILLARS } from '../data/healthcareData.js';

export default function ApproachSection() {
  return (
    <section id="approach" className="siza-section siza-section--muted">
      <div className="siza-container">
        <div style={{ textAlign: 'center', maxWidth: '48rem', margin: '0 auto' }}>
          <span className="siza-eyebrow">Our Approach to Care</span>
          <h2 className="siza-heading">Clinical Excellence, Patient-Centered Care</h2>
          <p className="siza-lead">
            At SiZa Healthcare India, we combine clinical precision with patient-first empathy. Our medical protocols ensure every consultation, diagnosis, and treatment is delivered with hospital-grade safety and utmost professionalism.
          </p>
          <span className="siza-divider" />
        </div>

        <div className="siza-approach-grid">
          {APPROACH_PILLARS.map((pillar) => (
            <div key={pillar.num} className="siza-pillar-card">
              <div className="siza-pillar-card__num">{pillar.num}</div>
              <h3 className="siza-pillar-card__title">{pillar.title}</h3>
              <p style={{ fontSize: '0.885rem', lineHeight: '1.6', color: 'var(--siza-text-muted)', margin: 0 }}>
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

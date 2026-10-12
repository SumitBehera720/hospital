import { Star, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS } from '../data/healthcareData.js';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="siza-section">
      <div className="siza-container">
        <div style={{ textAlign: 'center', maxWidth: '48rem', margin: '0 auto' }}>
          <span className="siza-eyebrow">Patient Stories</span>
          <h2 className="siza-heading">Families Across India Trust Heltcare</h2>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: 'var(--siza-surface-muted)', padding: '0.4rem 1rem', borderRadius: '9999px', margin: '0.5rem auto 1rem auto' }}>
            <div style={{ display: 'flex', color: '#f59e0b' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="#f59e0b" />
              ))}
            </div>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--siza-navy)' }}>
              5.0 Rating · Committed to exceptional care
            </span>
          </div>
          <p className="siza-lead">
            Real experiences from patients who chose professional at-home medical care — discreet, compassionate, and always within reach.
          </p>
          <span className="siza-divider" />
        </div>

        <div className="siza-testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="siza-testimonial-card">
              <div className="siza-testimonial-card__stars">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={15} fill="#f59e0b" />
                ))}
              </div>

              <p className="siza-testimonial-card__text">
                "{t.text}"
              </p>

              <div className="siza-testimonial-card__author">
                <img src={t.image} alt={t.name} className="siza-testimonial-card__avatar" />
                <div>
                  <h4 className="siza-testimonial-card__name">{t.name}</h4>
                  <p className="siza-testimonial-card__meta">
                    {t.service} · {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

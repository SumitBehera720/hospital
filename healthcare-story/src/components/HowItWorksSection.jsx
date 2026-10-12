import { Phone, MessageCircle } from 'lucide-react';
import { HOW_IT_WORKS_STEPS, CONTACT_INFO } from '../data/healthcareData.js';

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="siza-section">
      <div className="siza-container">
        <div style={{ textAlign: 'center', maxWidth: '48rem', margin: '0 auto' }}>
          <span className="siza-eyebrow">Simple Process</span>
          <h2 className="siza-heading">Getting a Doctor on Call in India in Three Simple Steps</h2>
          <p className="siza-lead">
            No convoluted apps to download. No confusing paperwork. No 3-hour waiting room queues. Just fast, verified medical care delivered to your exact location.
          </p>
          <span className="siza-divider" />
        </div>

        <div className="siza-steps-grid">
          {HOW_IT_WORKS_STEPS.map((s) => (
            <div key={s.step} className="siza-step-card">
              <div className="siza-step-badge">{s.step}</div>
              <h3 className="siza-step-card__title">{s.title}</h3>
              <p className="siza-step-card__desc">{s.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '3.5rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a
            href={`tel:${CONTACT_INFO.phoneRaw}`}
            className="siza-btn-primary"
          >
            <Phone size={16} />
            <span>Call Us Now ({CONTACT_INFO.phone})</span>
          </a>
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=Hi%2C%20I'd%20like%20to%20book%20a%20doctor%20visit%20at%20my%20location.`}
            target="_blank"
            rel="noopener noreferrer"
            className="siza-btn-amber"
          >
            <MessageCircle size={16} />
            <span>WhatsApp Us Now</span>
          </a>
        </div>
      </div>
    </section>
  );
}

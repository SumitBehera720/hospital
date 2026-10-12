import { ShieldCheck, MessageSquare, Timer, Lock, Stethoscope } from 'lucide-react';
import { COMMITMENTS } from '../data/healthcareData.js';

export default function CommitmentSection() {
  const icons = [ShieldCheck, MessageSquare, Timer, Lock, Stethoscope];

  return (
    <section id="commitment" className="siza-section siza-section--dark">
      <div className="siza-container">
        <div style={{ textAlign: 'center', maxWidth: '48rem', margin: '0 auto' }}>
          <span className="siza-eyebrow siza-eyebrow--amber">Our Commitment</span>
          <h2 className="siza-heading siza-heading--light">Healthcare You Can Trust</h2>
          <p className="siza-lead siza-lead--light">
            Every patient interaction across India is guided by clinical responsibility, transparency, and deep empathy.
          </p>
          <span className="siza-divider" />
        </div>

        <div className="siza-commitments-grid">
          {COMMITMENTS.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div key={index} className="siza-commitment-item">
                <div style={{ marginBottom: '1rem', color: 'var(--siza-amber)' }}>
                  <Icon size={26} />
                </div>
                <h3 className="siza-commitment-item__title">{item.title}</h3>
                <p className="siza-commitment-item__desc">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

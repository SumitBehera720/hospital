import { Phone, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/healthcareData.js';

export default function EmergencyBanner() {
  return (
    <section id="contact" className="siza-emergency-banner">
      <div className="siza-container">
        <div className="siza-emergency-banner__inner">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span className="siza-pulse-dot" />
              <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#86efac' }}>
                24/7 Clinical Hotline · Pan-India Dispatch
              </span>
            </div>
            <h2 className="siza-heading siza-heading--light" style={{ margin: '0 0 0.5rem 0' }}>
              Need a Doctor at Your Doorstep in India?
            </h2>
            <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.85)', fontSize: '1rem', maxWidth: '38rem' }}>
              NMC-registered physicians and emergency-certified nurses available 24/7 across major cities — direct to your home, hotel, or office.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="siza-btn-amber"
            >
              <Phone size={16} />
              <span>Call {CONTACT_INFO.phone}</span>
            </a>
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=Hi%2C%20I%20urgently%20need%20a%20doctor%20at%20my%20location.`}
              target="_blank"
              rel="noopener noreferrer"
              className="siza-btn-outline-white"
            >
              <MessageCircle size={16} />
              <span>Book via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Heart, ArrowUp } from 'lucide-react';
import { CONTACT_INFO, SERVICES, COVERAGE_AREAS } from '../data/healthcareData.js';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="siza-footer">
      <div className="siza-container">
        <div className="siza-footer-grid">
          {/* Brand Col */}
          <div>
            <div className="siza-brand" style={{ marginBottom: '1.25rem' }}>
              <div className="siza-brand__cross">+</div>
              <div className="siza-brand__text">
                <span className="siza-brand__name" style={{ color: '#ffffff' }}>Heltcare</span>
                <span className="siza-brand__tag">India · Bringing Healthcare Home</span>
              </div>
            </div>
            <p style={{ lineHeight: '1.65', color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem', marginBottom: '1.5rem', maxWidth: '24rem' }}>
              Accredited home healthcare provider across India. Bringing doctor consultations, registered nursing, NABL lab diagnostics, IV therapy, and elderly care directly to your location 24/7.
            </p>
            <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.55)', lineHeight: '1.5' }}>
              <strong>Emergency Notice:</strong> {CONTACT_INFO.emergencyNote}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="siza-footer-col__title">Services</h4>
            <ul className="siza-footer-links">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <a href="#delivered-services" className="siza-footer-link">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coverage Cities */}
          <div>
            <h4 className="siza-footer-col__title">Areas We Serve</h4>
            <ul className="siza-footer-links">
              {COVERAGE_AREAS.map((a) => (
                <li key={a.city}>
                  <a href="#areas" className="siza-footer-link">{a.city}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="siza-footer-col__title">Contact & Dispatch</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem' }}>
              <div>
                <span style={{ color: 'rgba(255, 255, 255, 0.5)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase' }}>Phone</span>
                <a href={`tel:${CONTACT_INFO.phoneRaw}`} style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 600 }}>{CONTACT_INFO.phone}</a>
              </div>
              <div>
                <span style={{ color: 'rgba(255, 255, 255, 0.5)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase' }}>WhatsApp</span>
                <a href={`https://wa.me/${CONTACT_INFO.whatsappRaw}`} style={{ color: '#25D366', textDecoration: 'none', fontWeight: 600 }}>{CONTACT_INFO.whatsapp}</a>
              </div>
              <div>
                <span style={{ color: 'rgba(255, 255, 255, 0.5)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase' }}>Email</span>
                <a href={`mailto:${CONTACT_INFO.email}`} style={{ color: 'rgba(255, 255, 255, 0.85)', textDecoration: 'none' }}>{CONTACT_INFO.email}</a>
              </div>
              <div>
                <span style={{ color: 'rgba(255, 255, 255, 0.5)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase' }}>Corporate Office</span>
                <span style={{ color: 'rgba(255, 255, 255, 0.85)' }}>{CONTACT_INFO.headquarters}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="siza-footer-bottom">
          <div>
            © {new Date().getFullYear()} Heltcare India. All rights reserved. Registered under Indian Medical Regulations.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <a href="#" className="siza-footer-link" style={{ fontSize: '0.8rem' }}>Privacy Policy</a>
            <a href="#" className="siza-footer-link" style={{ fontSize: '0.8rem' }}>Terms of Service</a>
            <button
              type="button"
              onClick={scrollToTop}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: '#ffffff',
                padding: '0.4rem 0.75rem',
                borderRadius: '4px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.785rem'
              }}
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

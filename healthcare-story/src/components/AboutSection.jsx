import { MessageCircle, ShieldCheck, Award, Users } from 'lucide-react';
import { CONTACT_INFO } from '../data/healthcareData.js';

export default function AboutSection() {
  return (
    <section id="about" className="siza-section">
      <div className="siza-container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
          <div>
            <span className="siza-eyebrow">About Heltcare India</span>
            <h2 className="siza-heading">Redefining Home Healthcare Across India</h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--siza-text-muted)', marginBottom: '1.25rem' }}>
              Heltcare is India's premier accredited home medical service, delivering hospital-standard clinical care directly to patients in their homes, luxury hotels, and executive workplaces.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--siza-text-muted)', marginBottom: '1.75rem' }}>
              We were founded with an uncompromising conviction: medical care should never be bottlenecked by traffic gridlock, crowded emergency rooms, or mobility limitations. Every patient deserves prompt, dignified, and clinically safe care in the comfort of their personal environment.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem', marginBottom: '2rem' }}>
              <div style={{ borderLeft: '3px solid var(--siza-teal)', paddingLeft: '1rem' }}>
                <div style={{ fontFamily: 'var(--siza-font-serif)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--siza-navy)' }}>
                  25,000+
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--siza-text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>
                  Home Visits Completed
                </div>
              </div>
              <div style={{ borderLeft: '3px solid var(--siza-amber)', paddingLeft: '1rem' }}>
                <div style={{ fontFamily: 'var(--siza-font-serif)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--siza-navy)' }}>
                  98.6%
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--siza-text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>
                  On-Time Arrival Rate
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=Hi%2C%20I'd%20like%20to%20know%20more%20about%20Heltcare%20services%20in%20India.`}
                target="_blank"
                rel="noopener noreferrer"
                className="siza-btn-primary"
              >
                <MessageCircle size={16} />
                <span>WhatsApp Us Anytime</span>
              </a>
              <a href="#how-it-works" className="siza-btn-amber">
                <span>See How It Works</span>
              </a>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{ borderRadius: 'var(--siza-radius)', overflow: 'hidden', boxShadow: 'var(--siza-shadow-lg)' }}>
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop"
                alt="Heltcare doctor caring for patient in India"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            {/* Floating verification badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '-1.5rem',
                left: '1.5rem',
                background: '#ffffff',
                padding: '1rem 1.25rem',
                borderRadius: '8px',
                border: '1px solid var(--siza-border)',
                boxShadow: 'var(--siza-shadow-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}
            >
              <ShieldCheck size={28} color="var(--siza-teal)" />
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--siza-navy)' }}>
                  100% Certified Clinicians
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--siza-text-muted)' }}>
                  National Medical Commission Verified
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { Phone, MessageCircle, Mail, Clock, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO, SERVICES, COVERAGE_AREAS } from '../data/healthcareData.js';

export default function ContactFormSection({ preselectedService }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: 'Delhi NCR',
    serviceNeeded: preselectedService || 'Doctor on Call at Home',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="contact-form" className="siza-section">
      <div className="siza-container">
        <div style={{ textAlign: 'center', maxWidth: '48rem', margin: '0 auto' }}>
          <span className="siza-eyebrow">Connect With Us</span>
          <h2 className="siza-heading">Available 24/7 for Bookings & Inquiries</h2>
          <p className="siza-lead">
            Our medical coordination team is available around the clock to assist with home appointments, urgent doctor dispatch, and diagnostic inquiries.
          </p>
          <span className="siza-divider" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', marginTop: '3.5rem' }}>
          {/* Direct Contact Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ background: 'var(--siza-surface-muted)', padding: '1.5rem', borderRadius: 'var(--siza-radius)', border: '1px solid var(--siza-border)', display: 'flex', gap: '1rem' }}>
              <div style={{ width: '2.75rem', height: '2.75rem', borderRadius: '8px', background: 'var(--siza-teal-light)', color: 'var(--siza-teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Phone size={22} />
              </div>
              <div>
                <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '0.875rem', color: 'var(--siza-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Call Us 24/7</h4>
                <a href={`tel:${CONTACT_INFO.phoneRaw}`} style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--siza-navy)', textDecoration: 'none' }}>
                  {CONTACT_INFO.phone}
                </a>
                <p style={{ margin: '0.35rem 0 0 0', fontSize: '0.8rem', color: 'var(--siza-text-muted)' }}>Speak directly with our clinical triage desk.</p>
              </div>
            </div>

            <div style={{ background: 'var(--siza-surface-muted)', padding: '1.5rem', borderRadius: 'var(--siza-radius)', border: '1px solid var(--siza-border)', display: 'flex', gap: '1rem' }}>
              <div style={{ width: '2.75rem', height: '2.75rem', borderRadius: '8px', background: '#dcfce7', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <MessageCircle size={22} />
              </div>
              <div>
                <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '0.875rem', color: 'var(--siza-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>WhatsApp Booking</h4>
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=Hi%2C%20I'd%20like%20to%20book%20a%20doctor%20visit.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '1.25rem', fontWeight: 800, color: '#16a34a', textDecoration: 'none' }}
                >
                  {CONTACT_INFO.whatsapp}
                </a>
                <p style={{ margin: '0.35rem 0 0 0', fontSize: '0.8rem', color: 'var(--siza-text-muted)' }}>Instant confirmation & live location dispatch.</p>
              </div>
            </div>

            <div style={{ background: 'var(--siza-surface-muted)', padding: '1.5rem', borderRadius: 'var(--siza-radius)', border: '1px solid var(--siza-border)', display: 'flex', gap: '1rem' }}>
              <div style={{ width: '2.75rem', height: '2.75rem', borderRadius: '8px', background: 'var(--siza-teal-light)', color: 'var(--siza-teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Mail size={22} />
              </div>
              <div>
                <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '0.875rem', color: 'var(--siza-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email Support</h4>
                <a href={`mailto:${CONTACT_INFO.email}`} style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--siza-navy)', textDecoration: 'none' }}>
                  {CONTACT_INFO.email}
                </a>
                <p style={{ margin: '0.35rem 0 0 0', fontSize: '0.8rem', color: 'var(--siza-text-muted)' }}>Corporate queries and health reports.</p>
              </div>
            </div>

            <div style={{ background: 'var(--siza-surface-muted)', padding: '1.5rem', borderRadius: 'var(--siza-radius)', border: '1px solid var(--siza-border)', display: 'flex', gap: '1rem' }}>
              <div style={{ width: '2.75rem', height: '2.75rem', borderRadius: '8px', background: 'var(--siza-teal-light)', color: 'var(--siza-teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Clock size={22} />
              </div>
              <div>
                <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '0.875rem', color: 'var(--siza-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Availability</h4>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--siza-navy)' }}>24/7 · 365 Days a Year</div>
                <p style={{ margin: '0.35rem 0 0 0', fontSize: '0.8rem', color: 'var(--siza-text-muted)' }}>Including weekends and national holidays.</p>
              </div>
            </div>
          </div>

          {/* Interactive Booking Form */}
          <div className="siza-booking-card">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div style={{ width: '4rem', height: '4rem', borderRadius: '50%', background: 'var(--siza-teal-light)', color: 'var(--siza-teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="siza-heading" style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>
                  Request Received!
                </h3>
                <p style={{ color: 'var(--siza-text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  Thank you, <strong>{formData.fullName}</strong>. A medical coordinator is reviewing your details and will call <strong>{formData.phone}</strong> within 3 minutes to confirm doctor arrival.
                </p>
                <button
                  type="button"
                  className="siza-btn-primary"
                  onClick={() => setSubmitted(false)}
                >
                  Book Another Visit
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontFamily: 'var(--siza-font-serif)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--siza-navy)', margin: '0 0 0.25rem 0' }}>
                  Request a Home Visit
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--siza-text-muted)', marginBottom: '1.5rem' }}>
                  We respond within 3 minutes, 24/7.
                </p>

                <div className="siza-form-group">
                  <label className="siza-form-label">Patient Full Name *</label>
                  <input
                    type="text"
                    required
                    className="siza-input"
                    placeholder="e.g. Ramesh Patel"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.85rem' }}>
                  <div className="siza-form-group">
                    <label className="siza-form-label">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      className="siza-input"
                      placeholder="+91 98765 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="siza-form-group">
                    <label className="siza-form-label">Email (Optional)</label>
                    <input
                      type="email"
                      className="siza-input"
                      placeholder="patient@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.85rem' }}>
                  <div className="siza-form-group">
                    <label className="siza-form-label">City in India *</label>
                    <select
                      className="siza-select"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    >
                      {COVERAGE_AREAS.map((a) => (
                        <option key={a.city} value={a.city}>{a.city}</option>
                      ))}
                    </select>
                  </div>

                  <div className="siza-form-group">
                    <label className="siza-form-label">Service Needed *</label>
                    <select
                      className="siza-select"
                      value={formData.serviceNeeded}
                      onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="siza-form-group">
                  <label className="siza-form-label">Symptoms / Specific Instructions (Optional)</label>
                  <textarea
                    rows={3}
                    className="siza-textarea"
                    placeholder="Briefly describe symptoms, patient age, or hotel room number..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  />
                </div>

                <button type="submit" className="siza-btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                  <Send size={16} />
                  <span>Send Immediate Request</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

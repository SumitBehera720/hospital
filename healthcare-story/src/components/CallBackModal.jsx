import { useState } from 'react';
import { X, PhoneCall, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO, SERVICES, COVERAGE_AREAS } from '../data/healthcareData.js';

export default function CallBackModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Delhi NCR');
  const [service, setService] = useState('Doctor on Call at Home');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="siza-modal-backdrop" onClick={handleClose}>
      <div className="siza-modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="siza-modal-close"
          onClick={handleClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div
              style={{
                width: '3.5rem',
                height: '3.5rem',
                borderRadius: '50%',
                background: 'var(--siza-teal-light)',
                color: 'var(--siza-teal)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem auto'
              }}
            >
              <CheckCircle2 size={32} />
            </div>
            <h3 className="siza-heading" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
              We're Calling You Back!
            </h3>
            <p style={{ color: 'var(--siza-text-muted)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Our clinical coordinator will call <strong>{phone}</strong> within 60 seconds to confirm the arrival of your doctor or nurse in {city}.
            </p>
            <button type="button" className="siza-btn-primary" onClick={handleClose}>
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <span className="siza-eyebrow">Priority Call Back · Average 60s Response</span>
            <h3 className="siza-heading" style={{ fontSize: '1.65rem', marginBottom: '0.5rem' }}>
              Arrange an Immediate Call Back
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--siza-text-muted)', marginBottom: '1.5rem' }}>
              Leave your details below and an on-duty medical triage officer will call you right away.
            </p>

            <div className="siza-form-group">
              <label className="siza-form-label">Full Name *</label>
              <input
                type="text"
                required
                className="siza-input"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="siza-form-group">
              <label className="siza-form-label">Phone Number *</label>
              <input
                type="tel"
                required
                className="siza-input"
                placeholder="+91 98765 00000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.85rem' }}>
              <div className="siza-form-group">
                <label className="siza-form-label">City *</label>
                <select className="siza-select" value={city} onChange={(e) => setCity(e.target.value)}>
                  {COVERAGE_AREAS.map((a) => (
                    <option key={a.city} value={a.city}>{a.city}</option>
                  ))}
                </select>
              </div>

              <div className="siza-form-group">
                <label className="siza-form-label">Required Service</label>
                <select className="siza-select" value={service} onChange={(e) => setService(e.target.value)}>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                </select>
              </div>
            </div>

            <button type="submit" className="siza-btn-amber" style={{ width: '100%', marginTop: '0.75rem' }}>
              <PhoneCall size={16} />
              <span>Call Me Immediately</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

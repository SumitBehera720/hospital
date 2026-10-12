import { useState } from 'react';
import { MapPin, Clock, CheckCircle } from 'lucide-react';
import { COVERAGE_AREAS } from '../data/healthcareData.js';

export default function AreasSection() {
  const [selectedCityIndex, setSelectedCityIndex] = useState(0);
  const currentCity = COVERAGE_AREAS[selectedCityIndex];

  return (
    <section id="areas" className="siza-section siza-section--muted">
      <div className="siza-container">
        <div style={{ textAlign: 'center', maxWidth: '48rem', margin: '0 auto' }}>
          <span className="siza-eyebrow">Coverage Areas</span>
          <h2 className="siza-heading">Care Anywhere Across India</h2>
          <p className="siza-lead">
            We provide prompt home healthcare services across major metropolises and urban zones. Whether at home, in a premier hotel, or at your workspace, our team is dispatched swiftly.
          </p>
          <span className="siza-divider" />
        </div>

        {/* City Navigation Tabs */}
        <div className="siza-areas-nav">
          {COVERAGE_AREAS.map((item, index) => (
            <button
              key={item.city}
              type="button"
              className={`siza-area-btn ${selectedCityIndex === index ? 'siza-area-btn--active' : ''}`}
              onClick={() => setSelectedCityIndex(index)}
            >
              {item.city}
            </button>
          ))}
        </div>

        {/* City Details Display */}
        <div className="siza-area-detail-card">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', borderBottom: '1px solid var(--siza-border)', paddingBottom: '1.25rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <MapPin size={24} color="var(--siza-teal)" />
              <h3 style={{ fontFamily: 'var(--siza-font-serif)', fontSize: '1.65rem', fontWeight: 700, color: 'var(--siza-navy)', margin: 0 }}>
                {currentCity.city}
              </h3>
            </div>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--siza-teal-light)', padding: '0.4rem 0.85rem', borderRadius: '6px', color: 'var(--siza-teal)', fontWeight: 700, fontSize: '0.85rem' }}>
              <Clock size={16} />
              <span>Avg Arrival: {currentCity.eta}</span>
            </div>
          </div>

          <p style={{ fontSize: '0.925rem', color: 'var(--siza-text-muted)', marginBottom: '1rem' }}>
            Primary residential sectors, corporate hubs, and premier hotel clusters covered 24 hours a day:
          </p>

          <div className="siza-area-chips">
            {currentCity.subregions.map((sub, i) => (
              <span key={i} className="siza-chip">
                {sub}
              </span>
            ))}
          </div>

          <div style={{ marginTop: '2rem', padding: '1rem 1.25rem', background: 'var(--siza-surface-muted)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <CheckCircle size={18} color="var(--siza-teal)" />
            <span style={{ fontSize: '0.85rem', color: 'var(--siza-text)' }}>
              Looking for service outside primary zones? Call or WhatsApp our dispatch desk to check doctor availability.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { ArrowUpRight, MessageCircle, CheckCircle2, X } from 'lucide-react';
import { SERVICES, CONTACT_INFO } from '../data/healthcareData.js';

export default function ServicesSection({ onBookService }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedService, setSelectedService] = useState(null);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'doctor', label: 'Doctor Visits' },
    { id: 'nursing', label: 'Nursing Care' },
    { id: 'diagnostics', label: 'Diagnostics & IV' },
    { id: 'specialized', label: 'Elderly & Rehab' }
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section id="delivered-services" className="siza-section">
      <div className="siza-container">
        <div style={{ textAlign: 'center', maxWidth: '48rem', margin: '0 auto' }}>
          <span className="siza-eyebrow">Our Services</span>
          <h2 className="siza-heading">Comprehensive Home Healthcare in India</h2>
          <p className="siza-lead">
            Location-based medical care across India — delivered under strict clinical and regulatory standards for convenience, privacy, and clinical safety.
          </p>
          <span className="siza-divider" />
        </div>

        {/* Category Filters */}
        <div className="siza-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`siza-filter-tab ${activeCategory === cat.id ? 'siza-filter-tab--active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="siza-services-grid">
          {filteredServices.map((service) => (
            <article key={service.id} className="siza-service-card">
              <div className="siza-service-card__media">
                <img src={service.image} alt={service.title} loading="lazy" />
                <span className="siza-service-card__badge">{service.badge}</span>
              </div>

              <div className="siza-service-card__body">
                <h3 className="siza-service-card__title">{service.title}</h3>
                <p className="siza-service-card__desc">{service.shortDesc}</p>

                <div className="siza-service-card__footer">
                  <button
                    type="button"
                    className="siza-service-card__learn"
                    onClick={() => setSelectedService(service)}
                  >
                    <span>Learn more</span>
                    <ArrowUpRight size={15} />
                  </button>

                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=Hi%2C%20I'd%20like%20to%20book%20${encodeURIComponent(service.title)}%20in%20India.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="siza-whatsapp-btn"
                    aria-label={`Chat on WhatsApp about ${service.title}`}
                  >
                    <MessageCircle size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="siza-modal-backdrop" onClick={() => setSelectedService(null)}>
          <div className="siza-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="siza-modal-close"
              onClick={() => setSelectedService(null)}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div style={{ aspectRatio: '16/9', borderRadius: '8px', overflow: 'hidden', marginBottom: '1.25rem' }}>
              <img
                src={selectedService.image}
                alt={selectedService.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <span className="siza-eyebrow">{selectedService.badge}</span>
            <h3 className="siza-heading" style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>
              {selectedService.title}
            </h3>

            <p style={{ fontSize: '0.925rem', lineHeight: '1.65', color: 'var(--siza-text-muted)', marginBottom: '1.25rem' }}>
              {selectedService.fullDesc}
            </p>

            <h4 style={{ fontFamily: 'var(--siza-font-sans)', fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--siza-navy)', marginBottom: '0.75rem' }}>
              Clinical Inclusions:
            </h4>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.75rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {selectedService.features.map((feat, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.875rem' }}>
                  <CheckCircle2 size={16} color="var(--siza-teal)" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="siza-btn-primary"
                style={{ flex: 1 }}
                onClick={() => {
                  const serv = selectedService;
                  setSelectedService(null);
                  onBookService(serv);
                }}
              >
                Book This Service Now
              </button>
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=Hi%2C%20I'd%20like%20to%20book%20${encodeURIComponent(selectedService.title)}%20in%20India.`}
                target="_blank"
                rel="noopener noreferrer"
                className="siza-btn-amber"
              >
                <MessageCircle size={15} />
                <span>WhatsApp Booking</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

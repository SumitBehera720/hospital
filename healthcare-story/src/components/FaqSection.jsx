import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQ_ITEMS } from '../data/healthcareData.js';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="siza-section siza-section--muted">
      <div className="siza-container">
        <div style={{ textAlign: 'center', maxWidth: '48rem', margin: '0 auto' }}>
          <span className="siza-eyebrow">FAQ</span>
          <h2 className="siza-heading">Frequently Asked Questions</h2>
          <p className="siza-lead">
            Common questions regarding doctor credentials, home visit procedures, hotel room consultations, prescriptions, and diagnostic protocols in India.
          </p>
          <span className="siza-divider" />
        </div>

        <div style={{ maxWidth: '52rem', margin: '3.5rem auto 0 auto' }}>
          <div className="siza-faq-list">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`siza-faq-item ${isOpen ? 'siza-faq-item--open' : ''}`}
                >
                  <button
                    type="button"
                    className="siza-faq-trigger"
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>
                    <span style={{ color: 'var(--siza-teal)', flexShrink: 0 }}>
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="siza-faq-answer">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

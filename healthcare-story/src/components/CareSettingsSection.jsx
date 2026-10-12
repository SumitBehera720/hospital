import { Check, ArrowRight } from 'lucide-react';
import { CARE_SETTINGS } from '../data/healthcareData.js';

export default function CareSettingsSection({ onSelectSetting }) {
  return (
    <section id="care-settings" className="siza-section siza-section--muted">
      <div className="siza-container">
        <div style={{ textAlign: 'center', maxWidth: '48rem', margin: '0 auto' }}>
          <span className="siza-eyebrow">Medical Care Wherever You Are in India</span>
          <h2 className="siza-heading">One Call. One Team. Three Settings.</h2>
          <p className="siza-lead">
            SiZa Healthcare brings certified medical professionals directly to you — whether at your private home, your hotel room, or corporate headquarters.
          </p>
          <span className="siza-divider" />
        </div>

        <div className="siza-settings-grid">
          {CARE_SETTINGS.map((item) => (
            <div key={item.id} className="siza-setting-card">
              <div className="siza-setting-card__image">
                <img src={item.image} alt={item.title} loading="lazy" />
                <span className="siza-setting-card__tag">{item.setting}</span>
              </div>

              <div className="siza-setting-card__body">
                <h3 className="siza-setting-card__title">{item.title}</h3>
                <p className="siza-setting-card__desc">{item.desc}</p>

                <ul className="siza-perks-list">
                  {item.perks.map((perk, i) => (
                    <li key={i} className="siza-perk-item">
                      <Check size={16} />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className="siza-btn-primary"
                  style={{ width: '100%', marginTop: 'auto' }}
                  onClick={() => onSelectSetting(item.title)}
                >
                  <span>{item.action}</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

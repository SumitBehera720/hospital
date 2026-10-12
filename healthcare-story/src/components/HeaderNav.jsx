import { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, Phone, MessageCircle, ChevronRight, ShieldCheck, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../data/healthcareData.js';

export default function HeaderNav({ onOpenCallBack }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  // Compact core links for top navbar to ensure zero overlap with actions
  const desktopPrimaryNav = [
    { href: '#delivered-services', label: 'Services' },
    { href: '#care-settings', label: 'Care Settings' },
    { href: '#why-exist', label: 'Why Us' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#testimonials', label: 'Reviews' },
    { href: '#areas', label: 'Areas' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact-form', label: 'Book Visit' }
  ];

  // Full comprehensive navigation items for the mobile & tablet slide-out drawer
  const allDrawerNav = [
    { href: '#delivered-services', label: 'Services', badge: 'Popular' },
    { href: '#care-settings', label: 'Care Settings' },
    { href: '#why-exist', label: 'Why Us' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#approach', label: 'Clinical Standards' },
    { href: '#medical-team', label: 'Medical Team' },
    { href: '#testimonials', label: 'Patient Reviews' },
    { href: '#areas', label: 'Areas We Serve' },
    { href: '#faq', label: 'Frequently Asked Questions' },
    { href: '#blog', label: 'Clinical Insights & Blog' },
    { href: '#contact-form', label: 'Request a Home Visit' }
  ];

  return (
    <>
      <header className={`siza-navbar ${scrolled ? 'siza-navbar--scrolled' : ''}`}>
        <div className="siza-navbar__container siza-navbar__inner">
          {/* Brand */}
          <a href="#" className="siza-brand" onClick={closeMenu}>
            <div className="siza-brand__cross">
              <span>+</span>
            </div>
            <div className="siza-brand__text">
              <span className="siza-brand__name">Heltcare</span>
              <span className="siza-brand__tag">India · Bringing Healthcare Home</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="siza-navlinks" aria-label="Main Navigation">
            {desktopPrimaryNav.map((item) => (
              <a key={item.href} href={item.href} className="siza-navlink">
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="siza-nav-actions">
            {/* WhatsApp Quick Action Button (Visible on mobile & tablet) */}
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=Hi%2C%20I'd%20like%20to%20book%20a%20doctor%20visit%20in%20India.`}
              target="_blank"
              rel="noopener noreferrer"
              className="siza-nav-whatsapp-btn"
              aria-label="Chat on WhatsApp"
            >
              <svg viewBox="0 0 32 32" width="18" height="18" fill="currentColor" aria-hidden="true">
                <path d="M16 2a13.9 13.9 0 0 0-12 20.9L2 30l7.3-1.9A13.9 13.9 0 1 0 16 2zm0 25.4c-2.3 0-4.6-.6-6.6-1.8l-.5-.3-4.4 1.2 1.2-4.3-.3-.5A11.5 11.5 0 1 1 27.5 16 11.6 11.6 0 0 1 16 27.4zm6.3-8.6c-.3-.2-2-1-2.3-1.1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1a9.2 9.2 0 0 1-2.7-1.7 10.1 10.1 0 0 1-1.9-2.3c-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.4.3-.6a.7.7 0 0 0 0-.6c-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.9.4 3.7 3.7 0 0 0-1.2 2.8 6.4 6.4 0 0 0 1.4 3.4 14.5 14.5 0 0 0 5.6 5c2.3 1 3.2 1 4.3.9a3.7 3.7 0 0 0 2.4-1.7 3 3 0 0 0 .2-1.7c-.1-.2-.3-.3-.6-.5z"/>
              </svg>
              <span className="siza-nav-whatsapp-btn__text">WhatsApp</span>
            </a>

            {/* Call button visible on tablet and desktop */}
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="siza-nav-quickcall"
              aria-label={`Call ${CONTACT_INFO.phone}`}
            >
              <Phone size={14} />
              <span className="siza-nav-quickcall__num">{CONTACT_INFO.phone}</span>
            </a>

            <button
              type="button"
              className="siza-btn-amber siza-nav-callback-btn"
              onClick={onOpenCallBack}
            >
              <PhoneCall size={14} />
              <span>Call Back</span>
            </button>

            {/* Mobile 3-Line Hamburger Menu Toggle */}
            <button
              type="button"
              className={`siza-mobile-toggle ${mobileMenuOpen ? 'siza-mobile-toggle--active' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              <span className="siza-hamburger-box">
                <span className="siza-hamburger-line siza-hamburger-line--1" />
                <span className="siza-hamburger-line siza-hamburger-line--2" />
                <span className="siza-hamburger-line siza-hamburger-line--3" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop & Modal Sheet */}
      <div
        className={`siza-mobile-drawer ${mobileMenuOpen ? 'siza-mobile-drawer--open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="siza-mobile-drawer__overlay" onClick={closeMenu} />

        <div className="siza-mobile-drawer__panel">
          <div className="siza-mobile-drawer__header">
            <div className="siza-brand">
              <div className="siza-brand__cross">+</div>
              <div className="siza-brand__text">
                <span className="siza-brand__name">Heltcare</span>
                <span className="siza-brand__tag">India · 24/7 At Home</span>
              </div>
            </div>
            <button
              type="button"
              className="siza-mobile-drawer__close"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <div className="siza-mobile-drawer__body">
            {/* Quick Status Pill */}
            <div className="siza-mobile-status">
              <span className="siza-pulse-dot" />
              <span>Doctors on duty · 30–45 min arrival</span>
            </div>

            {/* Navigation Links with touch-friendly tap targets */}
            <nav className="siza-mobile-nav">
              {allDrawerNav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="siza-mobile-nav__item"
                  onClick={closeMenu}
                >
                  <span className="siza-mobile-nav__label">{item.label}</span>
                  {item.badge && <span className="siza-mobile-nav__badge">{item.badge}</span>}
                  <ChevronRight size={16} className="siza-mobile-nav__chevron" />
                </a>
              ))}
            </nav>

            {/* Emergency & Direct Dispatch Box */}
            <div className="siza-mobile-quickactions">
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="siza-btn-primary siza-mobile-action-btn"
                onClick={closeMenu}
              >
                <Phone size={17} />
                <span>Call {CONTACT_INFO.phone}</span>
              </a>

              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=Hi%2C%20I'd%20like%20to%20book%20a%20doctor%20visit%20in%20India.`}
                target="_blank"
                rel="noopener noreferrer"
                className="siza-whatsapp-btn-full"
                onClick={closeMenu}
              >
                <MessageCircle size={18} />
                <span>WhatsApp Instant Dispatch</span>
              </a>

              <button
                type="button"
                className="siza-btn-amber siza-mobile-action-btn"
                onClick={() => {
                  closeMenu();
                  onOpenCallBack();
                }}
              >
                <PhoneCall size={16} />
                <span>Arrange an Urgent Call Back</span>
              </button>
            </div>

            {/* Micro accreditation footer */}
            <div className="siza-mobile-drawer__footer">
              <div className="siza-mobile-badge-row">
                <span><ShieldCheck size={14} color="var(--siza-teal)" /> NMC Registered</span>
                <span><Clock size={14} color="var(--siza-teal)" /> 24/7 Available</span>
              </div>
              <p className="siza-mobile-notice">
                {CONTACT_INFO.headquarters}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

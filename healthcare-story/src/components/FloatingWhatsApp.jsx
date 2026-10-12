import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/healthcareData.js';

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=Hi%2C%20I'd%20like%20to%20book%20a%20doctor%20visit%20in%20India.`}
      target="_blank"
      rel="noopener noreferrer"
      className="siza-floating-whatsapp"
      aria-label="Chat with Heltcare doctor on WhatsApp 24/7"
    >
      <span className="siza-whatsapp-pulse-ring" aria-hidden="true" />
      <span className="siza-whatsapp-icon-box">
        <svg viewBox="0 0 32 32" width="22" height="22" fill="currentColor" aria-hidden="true">
          <path d="M16 2a13.9 13.9 0 0 0-12 20.9L2 30l7.3-1.9A13.9 13.9 0 1 0 16 2zm0 25.4c-2.3 0-4.6-.6-6.6-1.8l-.5-.3-4.4 1.2 1.2-4.3-.3-.5A11.5 11.5 0 1 1 27.5 16 11.6 11.6 0 0 1 16 27.4zm6.3-8.6c-.3-.2-2-1-2.3-1.1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1a9.2 9.2 0 0 1-2.7-1.7 10.1 10.1 0 0 1-1.9-2.3c-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.4.3-.6a.7.7 0 0 0 0-.6c-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.9.4 3.7 3.7 0 0 0-1.2 2.8 6.4 6.4 0 0 0 1.4 3.4 14.5 14.5 0 0 0 5.6 5c2.3 1 3.2 1 4.3.9a3.7 3.7 0 0 0 2.4-1.7 3 3 0 0 0 .2-1.7c-.1-.2-.3-.3-.6-.5z"/>
        </svg>
      </span>
      <span className="siza-floating-whatsapp__text">WhatsApp 24/7</span>
    </a>
  );
}

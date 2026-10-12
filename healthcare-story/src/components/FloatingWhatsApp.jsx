import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/healthcareData.js';

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=Hi%2C%20I'd%20like%20to%20book%20a%20doctor%20visit%20in%20India.`}
      target="_blank"
      rel="noopener noreferrer"
      className="siza-floating-whatsapp"
      aria-label="Chat on WhatsApp 24/7"
    >
      <MessageCircle size={20} />
      <span>WhatsApp 24/7</span>
    </a>
  );
}

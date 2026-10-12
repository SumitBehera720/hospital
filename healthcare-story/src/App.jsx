import { useState } from 'react';
import TopBar from './components/TopBar.jsx';
import HeaderNav from './components/HeaderNav.jsx';
import HealthcareStorySection from './story/components/HealthcareStorySection.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import CareSettingsSection from './components/CareSettingsSection.jsx';
import WhyExistSection from './components/WhyExistSection.jsx';
import ApproachSection from './components/ApproachSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import MedicalTeamSection from './components/MedicalTeamSection.jsx';
import HowItWorksSection from './components/HowItWorksSection.jsx';
import CommitmentSection from './components/CommitmentSection.jsx';
import TestimonialsSection from './components/TestimonialsSection.jsx';
import AreasSection from './components/AreasSection.jsx';
import ContactFormSection from './components/ContactFormSection.jsx';
import FaqSection from './components/FaqSection.jsx';
import BlogSection from './components/BlogSection.jsx';
import EmergencyBanner from './components/EmergencyBanner.jsx';
import Footer from './components/Footer.jsx';
import CallBackModal from './components/CallBackModal.jsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx';

import './styles/siza-sections.css';

export default function App() {
  const [callBackModalOpen, setCallBackModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('Doctor on Call at Home');

  const handleBookService = (service) => {
    setPreselectedService(service.title);
    const contactElem = document.getElementById('contact-form');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectSetting = (settingTitle) => {
    setPreselectedService(settingTitle);
    const contactElem = document.getElementById('contact-form');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="siza-app">
      {/* Top Bar with 24/7 Hotline, Email, WhatsApp, Socials */}
      <TopBar />

      {/* Main Sticky Header */}
      <HeaderNav onOpenCallBack={() => setCallBackModalOpen(true)} />

      <main id="main-content">
        {/* Cinematic Hero Story (Preserved & prioritized as hero section) */}
        <HealthcareStorySection afterId="delivered-services" />

        {/* Section 1: Delivered Services in India */}
        <ServicesSection onBookService={handleBookService} />

        {/* Section 2: Care Settings (Home, Hotel, Office) */}
        <CareSettingsSection onSelectSetting={handleSelectSetting} />

        {/* Section 3: Why We Exist (Removing Barriers to Care in India) */}
        <WhyExistSection />

        {/* Section 4: Clinical Standards & Approach to Care */}
        <ApproachSection />

        {/* Section 5: About SiZa Healthcare */}
        <AboutSection />

        {/* Section 6: Medical Team (Physicians, Nurses, Coordinators) */}
        <MedicalTeamSection />

        {/* Section 7: How It Works (3 Simple Steps) */}
        <HowItWorksSection />

        {/* Section 8: Our Commitment (Clinical Excellence & Safety) */}
        <CommitmentSection />

        {/* Section 9: Patient Testimonials across India */}
        <TestimonialsSection />

        {/* Section 10: Coverage Areas (Delhi NCR, Mumbai, Bengaluru, Hyderabad, etc.) */}
        <AreasSection />

        {/* Section 11: 24/7 Booking & Inquiry Form */}
        <ContactFormSection preselectedService={preselectedService} />

        {/* Section 12: Frequently Asked Questions */}
        <FaqSection />

        {/* Section 13: Clinical Insights & Blog */}
        <BlogSection />

        {/* Section 14: Emergency Support Banner */}
        <EmergencyBanner />
      </main>

      {/* Footer */}
      <Footer />

      {/* Priority Call Back Modal */}
      <CallBackModal
        isOpen={callBackModalOpen}
        onClose={() => setCallBackModalOpen(false)}
      />

      {/* Floating 24/7 WhatsApp Quick Button */}
      <FloatingWhatsApp />
    </div>
  );
}

import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './sections/Hero';
import { TrustedCompanies } from './sections/TrustedCompanies';
import { Features } from './sections/Features';
import { ProgramsSection } from './sections/ProgramsSection';
import { ROICalculatorSection } from './sections/ROICalculatorSection';
import { Statistics } from './sections/Statistics';
import { Testimonials } from './sections/Testimonials';
import { FAQSection } from './sections/FAQSection';
import { CTA } from './sections/CTA';
import { Footer } from './components/layout/Footer';
import { BookDemoModal } from './components/common/BookDemoModal';
import { ProgramCatalogModal } from './components/common/ProgramCatalogModal';
import { Toast } from './components/ui/Toast';
import { Program } from './types';

export default function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedProgramTitle, setSelectedProgramTitle] = useState('Enterprise Executive AI Transformation');

  const [catalogModalOpen, setCatalogModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const [toast, setToast] = useState<{ isVisible: boolean; message: string; type: 'success' | 'error' | 'info' }>({
    isVisible: false,
    message: '',
    type: 'success'
  });

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    setToast({ isVisible: true, message, type });
  };

  const handleOpenDemoModal = (programTitle?: string) => {
    if (programTitle) {
      setSelectedProgramTitle(programTitle);
    }
    setDemoModalOpen(true);
  };

  const handleSelectProgramForCatalog = (program: Program) => {
    setSelectedProgram(program);
    setCatalogModalOpen(true);
  };

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-700">
      {/* Sticky Navigation Header */}
      <Navbar
        onBookDemo={() => handleOpenDemoModal()}
        onSelectSection={handleScrollToSection}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Banner Section */}
        <Hero
          onBookDemo={() => handleOpenDemoModal()}
          onExplorePrograms={() => handleScrollToSection('programs')}
          onCalculateROI={() => handleScrollToSection('calculator')}
        />

        {/* Trusted Logos Marquee / Grid */}
        <TrustedCompanies />

        {/* Features & Benefits */}
        <Features onSelectFeature={() => handleOpenDemoModal()} />

        {/* Enterprise Programs Catalog */}
        <ProgramsSection
          onSelectProgram={handleSelectProgramForCatalog}
          onBookDemo={(title) => handleOpenDemoModal(title)}
        />

        {/* Interactive ROI Calculator */}
        <ROICalculatorSection
          onBookDemo={() => handleOpenDemoModal()}
          onDownloadReportSuccess={(msg) => showToast(msg, 'success')}
        />

        {/* Quantifiable Impact Statistics */}
        <Statistics />

        {/* Testimonials Carousel / Grid */}
        <Testimonials />

        {/* Searchable FAQ Accordion */}
        <FAQSection onBookDemo={() => handleOpenDemoModal()} />

        {/* High Conversion CTA Section */}
        <CTA onBookDemo={() => handleOpenDemoModal()} />
      </main>

      {/* Comprehensive Footer */}
      <Footer
        onSelectSection={handleScrollToSection}
        onBookDemo={() => handleOpenDemoModal()}
        onToast={(msg) => showToast(msg, 'info')}
      />

      {/* Interactive Modals */}
      <BookDemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        onSuccess={(msg) => showToast(msg, 'success')}
        initialProgram={selectedProgramTitle}
      />

      <ProgramCatalogModal
        program={selectedProgram}
        isOpen={catalogModalOpen}
        onClose={() => setCatalogModalOpen(false)}
        onBookDemo={(title) => handleOpenDemoModal(title)}
        onSyllabusSuccess={(msg) => showToast(msg, 'success')}
      />

      {/* Toast Notification Container */}
      <Toast
        isVisible={toast.isVisible}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ ...toast, isVisible: false })}
      />
    </div>
  );
}

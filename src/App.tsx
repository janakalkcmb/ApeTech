/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { initialServicesData } from './data/servicesData';
import { initialProductsData } from './data/productsData';
import { ServiceItem, ProductItem, QuoteRequest } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ComplianceBanner } from './components/ComplianceBanner';
import { ProductsSection } from './components/ProductsSection';
import { QuoteCalculator } from './components/QuoteCalculator';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DetailsModal } from './components/DetailsModal';
import { LoginModal } from './components/LoginModal';
import { ClientDashboardModal } from './components/ClientDashboardModal';
import { AdminPortalModal } from './components/AdminPortalModal';
import { ComplianceAuditModal } from './components/ComplianceAuditModal';
import { CheckCircle2, Bell } from 'lucide-react';

const DEFAULT_HERO_TITLE = 'Managed IT, Cloud, Security & Compliance';
const DEFAULT_HERO_SUBTITLE =
  'From custom software and legacy cloud migrations to NIST compliance, ISO 27001 readiness, firewalls, and surveillance installations. We secure and power your business.';

export default function App() {
  // Services & Products
  const [services] = useState<ServiceItem[]>(initialServicesData);
  const [products] = useState<ProductItem[]>(initialProductsData);

  // Editable Hero Content
  const [heroTitle, setHeroTitle] = useState<string>(() => {
    return localStorage.getItem('apesoft_hero_title') || DEFAULT_HERO_TITLE;
  });
  const [heroSubtitle, setHeroSubtitle] = useState<string>(() => {
    return localStorage.getItem('apesoft_hero_subtitle') || DEFAULT_HERO_SUBTITLE;
  });

  // Top Announcement Banner
  const [announcement, setAnnouncement] = useState<string | null>(() => {
    return localStorage.getItem('apesoft_announcement') || '🚀 ISO 27001:2022 Stage 1 Readiness Audit slots now open for Q4 Enterprise intake.';
  });

  // Quote Requests & Inquiries
  const [quoteRequests, setQuoteRequests] = useState<QuoteRequest[]>(() => {
    const saved = localStorage.getItem('apesoft_quotes');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // fallback
      }
    }
    return [
      {
        id: 'REQ-101',
        name: 'David Miller',
        email: 'dmiller@vertexlogistics.io',
        company: 'Vertex Logistics Corp',
        phone: '+1 (512) 489-0199',
        itemTitle: 'Cloud Enablement & Migrations',
        serviceType: 'Managed IT Service',
        message: 'Looking to migrate 4 legacy Windows SQL Server on-prem VMs to Azure with zero downtime.',
        timestamp: '2026-10-28 08:30',
        status: 'new',
        estimatedBudget: '$1,850/mo',
      },
      {
        id: 'REQ-102',
        name: 'Sarah Chen',
        email: 'schen@nexushealth.com',
        company: 'Nexus Health Systems',
        phone: '+1 (415) 399-2810',
        itemTitle: 'NIST Compliance',
        serviceType: 'Managed IT Service',
        message: 'Need urgent SP 800-171 gap remediation and System Security Plan drafting for DoD contract.',
        timestamp: '2026-10-27 16:15',
        status: 'proposal_sent',
        estimatedBudget: '$3,200/mo',
      },
    ];
  });

  // Modals state
  const [detailsModalState, setDetailsModalState] = useState<{
    isOpen: boolean;
    item: ServiceItem | ProductItem | null;
    type: 'service' | 'product' | null;
    initialNotes?: string;
    initialBudget?: string;
  }>({
    isOpen: false,
    item: null,
    type: null,
  });

  const [loginModalState, setLoginModalState] = useState<{
    isOpen: boolean;
    type: 'client' | 'admin';
  }>({
    isOpen: false,
    type: 'client',
  });

  const [clientDashboardOpen, setClientDashboardOpen] = useState(false);
  const [currentClientEmail, setCurrentClientEmail] = useState('client@acmeglobal.com');
  const [adminPortalOpen, setAdminPortalOpen] = useState(false);
  const [complianceAuditOpen, setComplianceAuditOpen] = useState(false);

  // Toast Notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Persist Hero and Announcements
  const handleUpdateHero = (title: string, subtitle: string) => {
    setHeroTitle(title);
    setHeroSubtitle(subtitle);
    localStorage.setItem('apesoft_hero_title', title);
    localStorage.setItem('apesoft_hero_subtitle', subtitle);
    showToast('Homepage hero content updated successfully!');
  };

  const handleUpdateAnnouncement = (ann: string | null) => {
    setAnnouncement(ann);
    if (ann) {
      localStorage.setItem('apesoft_announcement', ann);
    } else {
      localStorage.removeItem('apesoft_announcement');
    }
  };

  const handleResetDefaults = () => {
    setHeroTitle(DEFAULT_HERO_TITLE);
    setHeroSubtitle(DEFAULT_HERO_SUBTITLE);
    setAnnouncement(null);
    localStorage.removeItem('apesoft_hero_title');
    localStorage.removeItem('apesoft_hero_subtitle');
    localStorage.removeItem('apesoft_announcement');
    showToast('Reset homepage content to default.');
  };

  // Add new Quote Request
  const handleAddQuoteRequest = (lead: Omit<QuoteRequest, 'id' | 'timestamp' | 'status'>) => {
    const newQuote: QuoteRequest = {
      ...lead,
      id: `REQ-${Math.floor(100 + Math.random() * 900)}`,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 16),
      status: 'new',
    };

    const updated = [newQuote, ...quoteRequests];
    setQuoteRequests(updated);
    localStorage.setItem('apesoft_quotes', JSON.stringify(updated));
    showToast(`Inquiry for "${lead.itemTitle}" registered in Admin Portal!`);
  };

  const handleUpdateQuoteStatus = (id: string, status: QuoteRequest['status']) => {
    const updated = quoteRequests.map((q) => (q.id === id ? { ...q, status } : q));
    setQuoteRequests(updated);
    localStorage.setItem('apesoft_quotes', JSON.stringify(updated));
    showToast(`Updated lead status to: ${status}`);
  };

  // Handlers for Opening Modals
  const handleSelectService = (service: ServiceItem) => {
    setDetailsModalState({
      isOpen: true,
      item: service,
      type: 'service',
    });
  };

  const handleSelectProduct = (product: ProductItem) => {
    setDetailsModalState({
      isOpen: true,
      item: product,
      type: 'product',
    });
  };

  const handlePreFillQuoteFromEstimator = (title: string, summary: string, budget: string) => {
    // Open modal with pre-filled content
    setDetailsModalState({
      isOpen: true,
      item: services[0], // fallback item
      type: 'service',
      initialNotes: summary,
      initialBudget: budget,
    });
  };

  const handlePreFillQuoteFromAudit = (title: string, notes: string) => {
    setDetailsModalState({
      isOpen: true,
      item: services.find((s) => s.id === 'nist-compliance') || services[0],
      type: 'service',
      initialNotes: notes,
    });
  };

  const handleLoginSuccess = (type: 'client' | 'admin', userEmail: string) => {
    if (type === 'admin') {
      setAdminPortalOpen(true);
      showToast('Welcome, Administrator! Live editor unlocked.');
    } else {
      setCurrentClientEmail(userEmail);
      setClientDashboardOpen(true);
      showToast(`Logged into Client Portal as ${userEmail}`);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-600 selection:text-white">
      
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 border border-slate-700 text-white px-5 py-3.5 rounded-xl shadow-2xl flex items-center gap-3 animate-fadeIn">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-xs sm:text-sm font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Top Navbar */}
      <Navbar
        onOpenLogin={(type) => setLoginModalState({ isOpen: true, type })}
        onOpenAudit={() => setComplianceAuditOpen(true)}
        activeAnnouncement={announcement}
      />

      {/* Hero Section */}
      <Hero
        title={heroTitle}
        subtitle={heroSubtitle}
        onExploreServices={() => {
          document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
        }}
        onRequestQuote={() => {
          setDetailsModalState({
            isOpen: true,
            item: services[0],
            type: 'service',
            initialNotes: 'General Enterprise Solutions Consultation Request',
          });
        }}
        onOpenAudit={() => setComplianceAuditOpen(true)}
      />

      {/* 12 Managed IT Services Section */}
      <ServicesSection
        services={services}
        onSelectService={handleSelectService}
      />

      {/* Compliance & Security Banner */}
      <ComplianceBanner
        onOpenAudit={() => setComplianceAuditOpen(true)}
      />

      {/* 8 Software Products Section */}
      <ProductsSection
        products={products}
        onSelectProduct={handleSelectProduct}
      />

      {/* Interactive IT Cost Estimator */}
      <QuoteCalculator
        onPreFillQuote={handlePreFillQuoteFromEstimator}
      />

      {/* 24/7 Support, Contact & Enterprise FAQs */}
      <ContactSection
        onSubmitInquiry={handleAddQuoteRequest}
      />

      {/* Footer */}
      <Footer
        onOpenLogin={(type) => setLoginModalState({ isOpen: true, type })}
      />

      {/* MODALS */}
      {/* 1. Item Details & Quote Request Modal */}
      <DetailsModal
        isOpen={detailsModalState.isOpen}
        onClose={() => setDetailsModalState({ isOpen: false, item: null, type: null })}
        selectedItem={detailsModalState.item}
        itemType={detailsModalState.type}
        onSubmitQuote={handleAddQuoteRequest}
        initialNotes={detailsModalState.initialNotes}
        initialBudget={detailsModalState.initialBudget}
      />

      {/* 2. Login Modal (Client & Admin) */}
      <LoginModal
        isOpen={loginModalState.isOpen}
        initialType={loginModalState.type}
        onClose={() => setLoginModalState({ isOpen: false, type: 'client' })}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* 3. Live Client Portal Dashboard Modal */}
      <ClientDashboardModal
        isOpen={clientDashboardOpen}
        onClose={() => setClientDashboardOpen(false)}
        userEmail={currentClientEmail}
      />

      {/* 4. Administrator Dashboard & Live CMS Modal */}
      <AdminPortalModal
        isOpen={adminPortalOpen}
        onClose={() => setAdminPortalOpen(false)}
        heroTitle={heroTitle}
        heroSubtitle={heroSubtitle}
        onUpdateHero={handleUpdateHero}
        announcement={announcement}
        onUpdateAnnouncement={handleUpdateAnnouncement}
        quoteRequests={quoteRequests}
        onUpdateQuoteStatus={handleUpdateQuoteStatus}
        onResetDefaults={handleResetDefaults}
      />

      {/* 5. 2-Minute Compliance Audit Self-Assessment Modal */}
      <ComplianceAuditModal
        isOpen={complianceAuditOpen}
        onClose={() => setComplianceAuditOpen(false)}
        onRequestQuoteWithNotes={handlePreFillQuoteFromAudit}
      />

    </div>
  );
}

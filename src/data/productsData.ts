import { ProductItem } from '../types';

export const initialProductsData: ProductItem[] = [
  {
    id: 'ape-crm',
    name: 'ApeCRM',
    subtitle: 'Customer Relationship Management',
    description: 'A powerful, lightning-fast CRM designed to help your sales, support, and business development teams manage leads, track customer interactions, automate follow-ups, and close more deals faster.',
    category: 'crm',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Visual drag-and-drop sales pipeline & deal stage tracking',
      'Two-way email, calendar, and WhatsApp/SMS communication logging',
      'Unified 360-degree contact management with lifetime activity history',
      'Automated task reminders, deal probability scoring, and executive reporting'
    ],
    startingPrice: '$29 / user / month',
    badge: 'Popular'
  },
  {
    id: 'ape-taxi',
    name: 'ApeTaxi',
    subtitle: 'Fleet & Ride-Hailing Management',
    description: 'An intelligent dispatch and fleet management platform engineered for taxi operators, limousine companies, and ride-hailing services. Track drivers in real time, automate bookings, and calculate optimal routes.',
    category: 'fleet',
    imageUrl: 'https://images.unsplash.com/photo-1494783367193-149034c05e8f?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Live GPS telemetry tracking with sub-second driver location updates',
      'Algorithmic automated dispatching based on proximity and ETA',
      'Integrated in-app credit card, Apple Pay, and digital wallet checkout',
      'Driver earnings, fuel consumption tracking, and performance analytics'
    ],
    startingPrice: '$199 / month (up to 20 vehicles)'
  },
  {
    id: 'ape-resort',
    name: 'ApeResort',
    subtitle: 'Hospitality & Resort Management',
    description: 'A comprehensive hotel, villa, and resort property management system (PMS). Handle reservations, front desk check-in/out, housekeeping, restaurant POS, billing, and guest experiences from a unified command center.',
    category: 'hospitality',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Interactive room booking grid & real-time reservation calendar',
      'Housekeeping status tracking with mobile room attendant app',
      'Integrated guest folios, split billing, and automated invoicing',
      'Two-way Channel Manager integration (Booking.com, Airbnb, Expedia)'
    ],
    startingPrice: '$149 / property / month'
  },
  {
    id: 'ape-erp',
    name: 'ApeERP',
    subtitle: 'Enterprise Resource Planning Suite',
    description: 'An all-in-one Enterprise Resource Planning suite designed to streamline operations across multiple departments, eliminate data silos, and provide real-time executive visibility.',
    category: 'erp',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Multi-entity financial accounting, cost centers, and automated budgeting',
      'End-to-end supply chain & procurement purchase order lifecycle',
      'Manufacturing bill of materials (BOM) & inventory warehouse control',
      'Live executive business intelligence dashboards with exportable KPIs'
    ],
    startingPrice: '$349 / month',
    badge: 'Enterprise'
  },
  {
    id: 'ape-hrm',
    name: 'ApeHRM',
    subtitle: 'Human Resources & Payroll Management',
    description: 'A modern Human Resources Management system to empower your workforce. From applicant tracking to automated payroll, attendance biometric syncing, and performance reviews.',
    category: 'hr',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Self-service employee portal for leave requests, payslips, and claims',
      'Biometric clock-in and geo-fenced mobile attendance tracking',
      '1-click statutory payroll calculation with tax deductions & direct deposit',
      'Objective & Key Results (OKR) and 360-degree appraisal reviews'
    ],
    startingPrice: '$3.50 / employee / month'
  },
  {
    id: 'ape-finance',
    name: 'ApeFinance',
    subtitle: 'Accounting & Financial Management',
    description: 'A robust accounting and financial management software platform designed to give CFOs and business owners airtight control over financial compliance, cash flow, and tax reporting.',
    category: 'finance',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Double-entry general ledger, journal entries, and automated chart of accounts',
      'Accounts payable with OCR invoice receipt scanning & AP approval flows',
      'Automated multi-currency bank reconciliation with live feed integration',
      'Comprehensive tax compliance, GST/VAT statements, and P&L generation'
    ],
    startingPrice: '$89 / month'
  },
  {
    id: 'ape-platform',
    name: 'Ape',
    subtitle: 'Core Foundational Business Platform',
    description: 'Our proprietary foundational software platform that can be rapidly customized, extended, and scaled for any vertical industry. Ape acts as the secure microservices backbone connecting your custom tools.',
    category: 'platform',
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Modular microservices architecture with extensible plugin SDKs',
      'High-performance REST & GraphQL APIs with automated OpenAPI documentation',
      'Granular Role-Based Access Control (RBAC) with audit trail logs',
      'Cross-platform compatibility across modern Web, iOS, and Android'
    ],
    startingPrice: 'Custom Enterprise License'
  },
  {
    id: 'ape-erp-nextgen',
    name: 'ApeERP (Next-Gen)',
    subtitle: 'AI-Driven Autonomous ERP',
    description: 'We are developing the next generation of ApeERP. It features autonomous AI-driven demand forecasting, robotic process automation (RPA), natural language queries, and an ultra-fast modern interface.',
    category: 'erp',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    features: [
      'AI-powered demand forecasting and predictive stock replenishment',
      'Robotic process automation (RPA) for repetitive invoice data entry',
      'Natural language voice and chat assistant for instant operational queries',
      'Enhanced cloud-native serverless architecture with real-time sync'
    ],
    isComingSoon: true,
    badge: 'Coming Soon'
  }
];

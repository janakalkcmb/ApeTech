export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'cloud' | 'security' | 'infrastructure' | 'compliance' | 'software';
  imageUrl: string;
  features: string[];
  deliverables?: string[];
  timeline?: string;
  iconName?: string;
}

export interface ProductItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  category: 'crm' | 'fleet' | 'hospitality' | 'erp' | 'hr' | 'finance' | 'platform';
  imageUrl: string;
  features: string[];
  isComingSoon?: boolean;
  badge?: string;
  startingPrice?: string;
}

export interface QuoteRequest {
  id: string;
  name: string;
  email: string;
  company: string;
  phone?: string;
  itemTitle: string;
  serviceType: string;
  message?: string;
  timestamp: string;
  status: 'new' | 'contacted' | 'proposal_sent' | 'closed';
  estimatedBudget?: string;
}

export interface SupportTicket {
  id: string;
  subject: string;
  department: 'Cloud Ops' | 'Security SOC' | 'Software Support' | 'Billing';
  priority: 'low' | 'medium' | 'high' | 'critical';
  status: 'open' | 'in_progress' | 'resolved';
  createdAt: string;
  lastReply: string;
}

export interface ClientData {
  companyName: string;
  contactName: string;
  email: string;
  accountNumber: string;
  slaTier: 'Standard 8x5' | 'Enterprise 24x7 SOC' | 'Mission-Critical Gold';
  activeSubscriptions: {
    productName: string;
    licenseKey: string;
    usersCount: number;
    status: 'Active' | 'Expiring Soon' | 'Provisioning';
    renewalDate: string;
  }[];
  activeServices: {
    serviceName: string;
    status: 'Operational' | 'Scheduled Maintenance' | 'Audited';
    health: number; // percentage
  }[];
}

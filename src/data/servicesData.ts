import { ServiceItem } from '../types';

export const initialServicesData: ServiceItem[] = [
  {
    id: 'custom-software',
    title: 'Custom Software',
    subtitle: 'Bespoke Applications',
    description: 'We design and build custom software from the ground up to solve your specific business challenges. Our team handles everything from UI/UX design to backend architecture, microservices, and continuous cloud deployment.',
    category: 'software',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Tailored to your exact business processes',
      'Scalable and secure cloud architecture',
      'Integration with existing legacy systems and APIs',
      'Ongoing 24/7 maintenance, monitoring, and SLA support'
    ],
    deliverables: [
      'Full source code ownership & repository transfer',
      'Comprehensive architecture & API documentation',
      'Automated CI/CD deployment pipelines',
      '30-day post-launch warranty with dedicated engineer'
    ],
    timeline: '4 - 12 weeks depending on scope',
    iconName: 'Code2'
  },
  {
    id: 'cloud-enablement-migrations',
    title: 'Cloud Enablement & Migrations',
    subtitle: 'Legacy Modernization',
    description: 'Move your business to the cloud with zero downtime. We take your old, slow legacy applications and migrate them to modern, cloud-enabled infrastructure, dramatically improving speed, resilience, and remote accessibility.',
    category: 'cloud',
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Lift-and-shift or cloud-native re-architecture strategies',
      'Zero-downtime cutover and migration execution',
      'AWS, Microsoft Azure, and Google Cloud Platform expertise',
      'Post-migration cost optimization and FinOps auditing'
    ],
    deliverables: [
      'Cloud Readiness & TCO Assessment report',
      'Infrastructure as Code (Terraform / Bicep) scripts',
      'Staging dry-run and zero-loss cutover execution',
      'FinOps cloud bill reduction recommendations'
    ],
    timeline: '2 - 6 weeks',
    iconName: 'CloudUpload'
  },
  {
    id: 'hosting-solutions',
    title: 'Hosting Solutions',
    subtitle: 'Enterprise Hosting',
    description: 'Reliable, high-performance hosting for your web applications, mission-critical databases, and internal tools. We ensure 99.9% uptime, automated backups, and multi-layered intrusion security.',
    category: 'cloud',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Dedicated bare-metal, VPS, and managed cloud options',
      '24/7/365 proactive server and uptime monitoring',
      'Automated geo-redundant daily backup snapshots',
      'Enterprise DDoS protection and web application firewalls'
    ],
    deliverables: [
      '99.9% guaranteed uptime SLA agreement',
      'Dedicated private IP & free SSL/TLS automated certificates',
      'Isolated staging sandbox environments',
      'Disaster recovery recovery-point-objective < 15 mins'
    ],
    timeline: 'Instant to 48 hours provisioning',
    iconName: 'Server'
  },
  {
    id: 'm365-implementation',
    title: 'Microsoft 365 Implementation',
    subtitle: 'M365 Deployment & Security',
    description: 'We handle the complete enterprise deployment, migration, and hardening of Microsoft 365 for your organization. From legacy email migration to Microsoft Teams, SharePoint intranets, and Defender security policies.',
    category: 'software',
    imageUrl: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Seamless email migration from on-prem Exchange or IMAP',
      'Microsoft Teams, SharePoint, and OneDrive architecture',
      'Multi-factor authentication (MFA) & Conditional Access setup',
      'Staff onboarding training and customized user guides'
    ],
    deliverables: [
      'Zero email loss guarantee during MX record switch',
      'Microsoft Defender for Endpoint & Cloud App security rules',
      'Intune Mobile Device Management (MDM) enrollment',
      'Admin training walkthrough session + recorded guides'
    ],
    timeline: '1 - 3 weeks',
    iconName: 'Grid'
  },
  {
    id: 'google-workspace',
    title: 'Google Workspace (G-Suite)',
    subtitle: 'G-Suite Deployment & Collaboration',
    description: 'Seamless transition to Google Workspace. We help your team collaborate effortlessly with Gmail, Google Drive, Meet, and Docs, ensuring enterprise security, domain trust, and ease of use.',
    category: 'software',
    imageUrl: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Domain verification, SPF, DKIM, and DMARC anti-spoofing DNS',
      'Bulk data migration from Exchange, Office 365, or cPanel',
      'Google Drive structure with Shared Drives permission hierarchies',
      'Google Admin Console centralized policy management'
    ],
    deliverables: [
      'Clean 10/10 mail deliverability DNS score',
      'Shared drive taxonomy and role permissions matrix',
      'Context-Aware Access rules for remote workers',
      'Administrator handoff checklist'
    ],
    timeline: '1 - 2 weeks',
    iconName: 'Mail'
  },
  {
    id: 'cloud-security',
    title: 'Cloud Security',
    subtitle: 'Advanced Threat Protection',
    description: 'Protect your cloud environments from unauthorized access, ransomware, and insider threats. We implement robust defense-in-depth postures, including IAM governance, zero-trust policies, and continuous SIEM monitoring.',
    category: 'security',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Identity and Access Management (IAM) least-privilege review',
      'End-to-end data encryption at rest (AES-256) and in transit',
      'Continuous threat detection & vulnerability scanning',
      'Incident response playbooks and forensic readiness'
    ],
    deliverables: [
      'Cloud Security Posture Management (CSPM) audit report',
      'Zero-Trust network architecture blueprint',
      'Automated SIEM alerting rules (Slack/Teams/Email)',
      'Incident escalation drill & response procedure manual'
    ],
    timeline: '2 - 4 weeks',
    iconName: 'ShieldCheck'
  },
  {
    id: 'firewall-solutions',
    title: 'Firewall Solutions',
    subtitle: 'Network Perimeter Defense',
    description: 'We deploy, configure, and manage enterprise-grade next-generation firewalls (NGFW) to monitor, inspect, and control incoming and outgoing network traffic based on proactive security rules.',
    category: 'security',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Next-Generation Firewall (NGFW) deployment (Fortinet, Palo Alto, Cisco)',
      'Hardware Intrusion Prevention & Detection Systems (IPS/IDS)',
      'High-speed site-to-site & client IPsec/WireGuard VPN setup',
      'Deep packet inspection, web content filtering, and live reporting'
    ],
    deliverables: [
      'Hardware rack mounting or virtual appliance installation',
      'Custom perimeter egress/ingress rule sets',
      'Secure remote employee VPN client profiles',
      'Monthly network threat analysis reports'
    ],
    timeline: '3 - 7 days',
    iconName: 'Flame'
  },
  {
    id: 'network-design',
    title: 'Network Design & Installation',
    subtitle: 'Infrastructure Cabling & Wi-Fi',
    description: 'We design and install robust physical and wireless networks. Whether you are fitting out a new corporate office or upgrading aging warehouse infrastructure, we ensure lightning-fast, drop-free connectivity.',
    category: 'infrastructure',
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Structured low-voltage cabling (Cat6, Cat6A, & 10G Multi-mode Fiber)',
      'Enterprise Wi-Fi 6/6E heatmapping & seamless roaming rollout',
      'Segmented LAN/VLAN architecture (Corporate, IoT, Guest)',
      'Managed core switch and router provisioning with redundancy'
    ],
    deliverables: [
      'Physical CAD network topology schematics',
      'Certified Fluke cable test reports for every port drop',
      'Wi-Fi signal coverage heatmap validation report',
      'Server rack cable management and patch labeling'
    ],
    timeline: '1 - 3 weeks',
    iconName: 'Network'
  },
  {
    id: 'surveillance-systems',
    title: 'Surveillance Systems',
    subtitle: 'Physical Security & IP CCTV',
    description: 'Protect your premises with modern high-resolution IP-based CCTV surveillance systems. We handle turnkey design, physical camera mounting, NVR storage arrays, and mobile remote monitoring.',
    category: 'infrastructure',
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop',
    features: [
      '4K ultra-HD weatherproof and vandal-resistant IP cameras',
      'Encrypted remote viewing via iOS, Android, and Desktop apps',
      'Network Video Recorder (NVR) setup with RAID storage redundancy',
      'AI smart motion detection, facial recognition, and license plate capture'
    ],
    deliverables: [
      'Physical camera placement coverage blueprint',
      '30 to 90 days on-premise local video retention storage',
      'Emergency remote push notification configuration',
      'Operator and security personnel handover training'
    ],
    timeline: '3 - 10 days',
    iconName: 'Camera'
  },
  {
    id: 'nist-compliance',
    title: 'NIST Compliance',
    subtitle: 'Cybersecurity Framework (CSF)',
    description: 'We help your organization systematically align with the NIST Cybersecurity Framework (CSF 2.0 and SP 800-171). We perform thorough gap analyses, build required documentation, and implement the necessary technical controls.',
    category: 'compliance',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop',
    features: [
      'NIST CSF 2.0 Comprehensive Gap Analysis & Maturity Scoring',
      'System Security Plan (SSP) & Plan of Action & Milestones (POA&M)',
      'Risk assessment matrices and governance policy writing',
      'Continuous compliance audit readiness and remediation support'
    ],
    deliverables: [
      'Executive NIST Compliance Assessment Report',
      'Customized Security Policy Library (24+ templates)',
      'POA&M prioritized remediation roadmap',
      'Audit-ready proof binder for partners and regulators'
    ],
    timeline: '4 - 8 weeks',
    iconName: 'FileCheck'
  },
  {
    id: 'iso-27001-ready',
    title: 'ISO 27001 Ready',
    subtitle: 'Information Security Management (ISMS)',
    description: 'Prepare your business for successful ISO/IEC 27001:2022 certification. We provide end-to-end consulting, risk treatment plans, Annex A controls implementation, and internal pre-audit assessments.',
    category: 'compliance',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop',
    features: [
      'ISMS (Information Security Management System) scope definition',
      'Comprehensive risk assessment and Statement of Applicability (SoA)',
      'Internal pre-audit simulation and corrective action plans',
      'Interactive employee security awareness training modules'
    ],
    deliverables: [
      'Complete ISO 27001 ISMS documentation package',
      'Statement of Applicability (SoA) covering all 93 controls',
      'Stage 1 and Stage 2 certification audit readiness pass guarantee',
      'Staff compliance quiz and training logs'
    ],
    timeline: '6 - 12 weeks',
    iconName: 'Award'
  },
  {
    id: 'data-migrations',
    title: 'Data Migrations',
    subtitle: 'Database & File Transfers',
    description: 'We migrate your critical business data safely. Whether moving petabyte-scale databases between cloud providers or transitioning legacy on-premise file shares to the cloud, we guarantee 100% data integrity with zero downtime.',
    category: 'cloud',
    imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop',
    features: [
      'High-throughput database migration (SQL Server, PostgreSQL, Oracle, MongoDB)',
      'Unstructured file server to secure cloud storage transition',
      'Automated cryptographic checksum validation & data integrity audits',
      'Parallel replication with instant failover and rollback protection'
    ],
    deliverables: [
      'Data mapping and schema transformation specifications',
      'Zero-downtime delta synchronization protocol',
      'Cryptographic SHA-256 data validation certificates',
      'Post-cutover query performance benchmark report'
    ],
    timeline: '1 - 4 weeks',
    iconName: 'Database'
  }
];

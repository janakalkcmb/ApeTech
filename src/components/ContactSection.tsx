import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, ChevronDown, ChevronUp, ShieldCheck, Clock, Headphones } from 'lucide-react';
import { QuoteRequest } from '../types';

interface ContactSectionProps {
  onSubmitInquiry: (lead: Omit<QuoteRequest, 'id' | 'timestamp' | 'status'>) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onSubmitInquiry }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    serviceInterest: 'NIST & ISO 27001 Compliance Consulting',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    onSubmitInquiry({
      name: formData.name,
      email: formData.email,
      company: formData.company || 'Enterprise Prospect',
      phone: formData.phone,
      itemTitle: formData.serviceInterest,
      serviceType: 'Direct Web Inquiry',
      message: formData.message,
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        serviceInterest: 'NIST & ISO 27001 Compliance Consulting',
        message: '',
      });
    }, 3000);
  };

  const faqs = [
    {
      q: 'How does Apesoft guarantee zero downtime during legacy cloud migrations?',
      a: 'We leverage continuous real-time delta replication between your legacy on-premise infrastructure and your target cloud environment (AWS, Azure, or GCP). Staging cutovers are executed during scheduled maintenance windows with shadow verification and automated rollback procedures in place.',
    },
    {
      q: 'Can you assist us with NIST SP 800-171 and ISO 27001 audit preparation?',
      a: 'Yes. Our certified lead auditors perform baseline gap assessments, draft customized System Security Plans (SSP) and Statements of Applicability (SoA), and implement technical controls across all 93 ISO 27001:2022 Annex A safeguard domains.',
    },
    {
      q: 'What response time SLA is provided for 24/7 Managed SOC clients?',
      a: 'For Mission-Critical Gold clients, our 24/7/365 Security Operations Center guarantees a sub-15 minute response time for P1 critical threat detections and severe firewall anomalies, with a dedicated direct engineer hotline.',
    },
    {
      q: 'Are Apesoft software products (ApeCRM, ApeERP, ApeHRM) customizable for our industry?',
      a: 'Absolutely. All Apesoft applications are architected around our extensible modular Ape platform. We provide custom schema modeling, custom REST/GraphQL endpoints, legacy ERP database connectors, and customized role-based permissions.',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-950 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-500/30 text-blue-300 text-xs font-semibold mb-3">
            <Headphones className="w-3.5 h-3.5 text-blue-400" />
            24/7 Enterprise Engineering Support
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Connect With Our Engineering Team
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Whether you need urgent cybersecurity perimeter hardening, a zero-downtime database migration, or a demonstration of our enterprise software suite, our senior architects are ready.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Details & Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 bg-slate-900/80 rounded-2xl border border-slate-800 space-y-5">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-400" />
                Global Operations &amp; Support
              </h3>

              <div className="flex items-start gap-3.5 text-sm">
                <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">Emergency SOC Hotline (24/7)</div>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">+1 (800) 555-APE-NOC</div>
                  <div className="text-[11px] text-emerald-400">P1 Incident Escalations: &lt;15 min SLA</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-sm">
                <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">Direct Enterprise Inquiries</div>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">solutions@apesoft.com</div>
                  <div className="text-[11px] text-slate-500">RFP Proposals &amp; Architectural Scopes</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-sm">
                <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">Engineering Centers</div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    100 Tech Enterprise Blvd, Suite 400<br />
                    Austin, TX &amp; San Jose, CA
                  </div>
                </div>
              </div>
            </div>

            {/* SLA Guarantee Box */}
            <div className="p-6 bg-gradient-to-br from-blue-950/60 to-slate-900 rounded-2xl border border-blue-500/20 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <Clock className="w-4 h-4 text-amber-400" />
                Enterprise SLA Commitments
              </div>
              <p className="leading-relaxed">
                Every Apesoft deployment is backed by signed service level agreements covering hardware uptime, backup verification, and dedicated named lead engineers.
              </p>
            </div>

          </div>

          {/* Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-800">
            <h3 className="text-xl font-bold text-white mb-2">Request Architectural Consultation</h3>
            <p className="text-xs text-slate-400 mb-6">
              Complete the brief form below and our team will prepare a structured response tailored to your technical stack.
            </p>

            {submitted ? (
              <div className="p-8 text-center bg-emerald-950/40 border border-emerald-500/40 rounded-xl text-emerald-300">
                <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-3 animate-bounce" />
                <h4 className="text-lg font-bold text-white">Thank You for Reaching Out!</h4>
                <p className="text-xs text-emerald-200 mt-1 max-w-md mx-auto">
                  Your inquiry has been registered. An Apesoft solutions architect will contact you within 4 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Taylor"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-2.5 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-2.5 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Organization / Company
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Global Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full p-2.5 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 012-3456"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-2.5 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Primary Area of Interest
                  </label>
                  <select
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full p-2.5 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="NIST & ISO 27001 Compliance Consulting">
                      NIST &amp; ISO 27001 Compliance Consulting
                    </option>
                    <option value="Cloud Enablement & Zero-Downtime Migration">
                      Cloud Enablement &amp; Zero-Downtime Migration
                    </option>
                    <option value="Firewall Solutions & 24/7 Managed SOC">
                      Firewall Solutions &amp; 24/7 Managed SOC
                    </option>
                    <option value="Custom Software Development (Ape Platform)">
                      Custom Software Development (Ape Platform)
                    </option>
                    <option value="ApeCRM / ApeERP / ApeHRM Software Licensing">
                      ApeCRM / ApeERP / ApeHRM Software Licensing
                    </option>
                    <option value="Enterprise Structured Cabling & Surveillance CCTV">
                      Enterprise Structured Cabling &amp; Surveillance CCTV
                    </option>
                    <option value="Microsoft 365 or Google Workspace Deployment">
                      Microsoft 365 or Google Workspace Deployment
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Technical Scope or Specific Inquiries
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your environment, current hosting provider, seat counts, or deadline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-2.5 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Inquiry to Solutions Desk</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Enterprise FAQs Accordion */}
        <div className="mt-20 pt-16 border-t border-slate-800">
          <h3 className="text-xl font-bold text-white text-center mb-8">
            Frequently Asked Questions
          </h3>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between text-xs sm:text-sm font-bold text-white hover:text-blue-400 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-amber-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-xs text-slate-400 leading-relaxed border-t border-slate-800/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

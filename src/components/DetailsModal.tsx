import React, { useState, useEffect } from 'react';
import { ServiceItem, ProductItem, QuoteRequest } from '../types';
import { X, CheckCircle, Send, ShieldCheck, Clock, Award, Sparkles, Building, Mail, User, Phone } from 'lucide-react';

interface DetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedItem: ServiceItem | ProductItem | null;
  itemType: 'service' | 'product' | null;
  onSubmitQuote: (quote: Omit<QuoteRequest, 'id' | 'timestamp' | 'status'>) => void;
  initialNotes?: string;
  initialBudget?: string;
}

export const DetailsModal: React.FC<DetailsModalProps> = ({
  isOpen,
  onClose,
  selectedItem,
  itemType,
  onSubmitQuote,
  initialNotes = '',
  initialBudget = '',
}) => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    estimatedBudget: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialNotes || initialBudget) {
      setShowQuoteForm(true);
      setFormData((prev) => ({
        ...prev,
        message: initialNotes || prev.message,
        estimatedBudget: initialBudget || prev.estimatedBudget,
      }));
    } else {
      setShowQuoteForm(false);
      setIsSubmitted(false);
    }
  }, [initialNotes, initialBudget, isOpen]);

  if (!isOpen || !selectedItem) return null;

  const isProduct = itemType === 'product';
  const product = isProduct ? (selectedItem as ProductItem) : null;
  const service = !isProduct ? (selectedItem as ServiceItem) : null;
  const isComingSoon = product?.isComingSoon;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company) return;

    onSubmitQuote({
      name: formData.name,
      email: formData.email,
      company: formData.company,
      phone: formData.phone,
      itemTitle: isProduct ? product!.name : service!.title,
      serviceType: isProduct ? 'Software License' : 'Managed IT Service',
      message: formData.message,
      estimatedBudget: formData.estimatedBudget,
    });

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setShowQuoteForm(false);
      onClose();
    }, 2400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header Bar */}
        <div className="bg-slate-900 px-6 py-4 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-blue-400">
              {isProduct ? <Sparkles className="w-4 h-4" /> : <ShieldCheck className="w-4 h-4" />}
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                {isProduct ? product?.name : service?.title}
              </h3>
              <p className="text-xs text-blue-400 font-medium">
                {isProduct ? product?.subtitle : service?.subtitle}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* Hero image and quick meta */}
          <div className="relative rounded-xl overflow-hidden h-52 sm:h-64 bg-slate-950 border border-slate-200 shadow-inner">
            <img
              src={selectedItem.imageUrl}
              alt={isProduct ? product?.name : service?.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
            
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2">
              <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-wider shadow">
                {isProduct ? product?.category.toUpperCase() : service?.category.toUpperCase()}
              </span>

              {service?.timeline && (
                <span className="px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700 text-slate-200 text-xs font-mono flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  Estimated Timeline: {service.timeline}
                </span>
              )}

              {product?.startingPrice && (
                <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-bold font-mono">
                  {product.startingPrice}
                </span>
              )}
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
              Overview &amp; Architecture
            </h4>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {selectedItem.description}
            </p>
          </div>

          {/* Key Features & Deliverables */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-blue-600" />
                Key Features Included
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {selectedItem.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50/60 p-4 rounded-xl border border-blue-100">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-blue-600" />
                Enterprise Deliverables &amp; SLA
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {service?.deliverables ? (
                  service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))
                ) : (
                  <>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>Multi-tenant encrypted cloud database</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>99.9% Uptime availability SLA</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>Continuous automated backups &amp; rollbacks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>Dedicated technical onboarding specialist</span>
                    </li>
                  </>
                )}
              </ul>
            </div>

          </div>

          {/* Request Form Accordion */}
          {showQuoteForm ? (
            <div className="bg-slate-900 text-white p-5 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div>
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <Send className="w-4 h-4 text-amber-400" />
                    {isComingSoon ? 'Join Priority Beta Waitlist' : 'Request Proposal &amp; Custom Quote'}
                  </h4>
                  <p className="text-xs text-slate-400">
                    Our solutions team will formulate a custom proposal and reply within 4 business hours.
                  </p>
                </div>
                <button
                  onClick={() => setShowQuoteForm(false)}
                  className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
                >
                  Cancel
                </button>
              </div>

              {isSubmitted ? (
                <div className="p-6 text-center bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-emerald-300">
                  <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto mb-2 animate-bounce" />
                  <h5 className="text-lg font-bold text-white">Inquiry Received Successfully!</h5>
                  <p className="text-xs text-emerald-200 mt-1">
                    An enterprise account manager has been dispatched to review your request for{' '}
                    <strong className="text-white">{isProduct ? product?.name : service?.title}</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Jane Doe"
                          className="w-full pl-8 pr-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Corporate Work Email *
                      </label>
                      <div className="relative">
                        <Mail className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="jane@company.com"
                          className="w-full pl-8 pr-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Organization / Company *
                      </label>
                      <div className="relative">
                        <Building className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Acme Global Inc."
                          className="w-full pl-8 pr-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Phone Number (Optional)
                      </label>
                      <div className="relative">
                        <Phone className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 019-2834"
                          className="w-full pl-8 pr-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Project Scope &amp; Special Requirements
                    </label>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify user counts, timeline preferences, or existing infrastructure..."
                      className="w-full p-2.5 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-colors shadow-md cursor-pointer"
                  >
                    {isComingSoon ? 'Join Priority Beta Notification List' : 'Submit RFP / Quote Request'}
                  </button>
                </form>
              )}
            </div>
          ) : (
            <div>
              <button
                onClick={() => setShowQuoteForm(true)}
                className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer ${
                  isComingSoon
                    ? 'bg-amber-400 hover:bg-amber-300 text-slate-950'
                    : 'bg-blue-600 hover:bg-blue-500 text-white'
                }`}
              >
                <Send className="w-4 h-4" />
                <span>
                  {isComingSoon
                    ? 'Notify Me When ApeERP Launches'
                    : 'Request Information / Get a Custom Quote'}
                </span>
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

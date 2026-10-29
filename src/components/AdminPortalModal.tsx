import React, { useState } from 'react';
import { X, Check, Save, RotateCcw, Megaphone, Inbox, LayoutDashboard, Database, Eye } from 'lucide-react';
import { QuoteRequest } from '../types';

interface AdminPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  heroTitle: string;
  heroSubtitle: string;
  onUpdateHero: (title: string, subtitle: string) => void;
  announcement: string | null;
  onUpdateAnnouncement: (announcement: string | null) => void;
  quoteRequests: QuoteRequest[];
  onUpdateQuoteStatus: (id: string, status: QuoteRequest['status']) => void;
  onResetDefaults: () => void;
}

export const AdminPortalModal: React.FC<AdminPortalModalProps> = ({
  isOpen,
  onClose,
  heroTitle,
  heroSubtitle,
  onUpdateHero,
  announcement,
  onUpdateAnnouncement,
  quoteRequests,
  onUpdateQuoteStatus,
  onResetDefaults,
}) => {
  const [activeTab, setActiveTab] = useState<'content' | 'leads' | 'announcements'>('content');
  const [titleInput, setTitleInput] = useState(heroTitle);
  const [subtitleInput, setSubtitleInput] = useState(heroSubtitle);
  const [announcementInput, setAnnouncementInput] = useState(announcement || '');
  const [announcementEnabled, setAnnouncementEnabled] = useState(!!announcement);
  const [saveSuccess, setSaveSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSaveContent = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateHero(titleInput, subtitleInput);
    if (announcementEnabled && announcementInput.trim()) {
      onUpdateAnnouncement(announcementInput.trim());
    } else {
      onUpdateAnnouncement(null);
    }
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="bg-slate-950 px-6 py-4 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="bg-white/95 px-2.5 py-1 rounded-lg border border-slate-800 flex items-center">
              <img
                src="/assets/aistudio/Ape_Soft_2_64196088.jpg"
                alt="Apesoft Logo"
                className="h-6 w-auto object-contain mix-blend-multiply"
              />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Apesoft Admin Dashboard</h3>
              <p className="text-xs text-amber-400">Live Website Content Management &amp; Inquiries</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Strip */}
        <div className="bg-slate-100 border-b border-slate-200 px-6 flex space-x-6 text-xs font-bold text-slate-600">
          <button
            onClick={() => setActiveTab('content')}
            className={`py-3 border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'content'
                ? 'border-amber-500 text-slate-950 font-extrabold'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            <LayoutDashboard className="w-3.5 h-3.5" />
            Homepage Content Editor
          </button>
          <button
            onClick={() => setActiveTab('leads')}
            className={`py-3 border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'leads'
                ? 'border-amber-500 text-slate-950 font-extrabold'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            <Inbox className="w-3.5 h-3.5" />
            Client Inquiries &amp; Quotes ({quoteRequests.length})
          </button>
          <button
            onClick={() => setActiveTab('announcements')}
            className={`py-3 border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'announcements'
                ? 'border-amber-500 text-slate-950 font-extrabold'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            <Megaphone className="w-3.5 h-3.5" />
            Broadcast Banner
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {saveSuccess && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Website live content updated successfully! Changes are visible immediately.</span>
            </div>
          )}

          {/* CONTENT EDITOR TAB */}
          {activeTab === 'content' && (
            <form onSubmit={handleSaveContent} className="space-y-5">
              <p className="text-xs text-slate-600">
                Edit the text fields below to modify the live homepage headlines in real-time.
              </p>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1.5">
                  Hero Headline Title
                </label>
                <input
                  type="text"
                  required
                  value={titleInput}
                  onChange={(e) => setTitleInput(e.target.value)}
                  className="w-full p-3 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1.5">
                  Hero Subtitle Paragraph
                </label>
                <textarea
                  rows={3}
                  required
                  value={subtitleInput}
                  onChange={(e) => setSubtitleInput(e.target.value)}
                  className="w-full p-3 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 leading-relaxed"
                />
              </div>

              <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => {
                    onResetDefaults();
                    setTitleInput('Managed IT, Cloud, Security & Compliance');
                    setSubtitleInput(
                      'From custom software and legacy cloud migrations to NIST compliance, ISO 27001 readiness, firewalls, and surveillance installations. We secure and power your business.'
                    );
                    setAnnouncementInput('');
                    setAnnouncementEnabled(false);
                    setSaveSuccess(true);
                    setTimeout(() => setSaveSuccess(false), 2000);
                  }}
                  className="px-3.5 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset to Original Defaults
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 rounded-lg cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-1.5 cursor-pointer"
                  >
                    <Save className="w-3.5 h-3.5" />
                    Save &amp; Update Website
                  </button>
                </div>
              </div>
            </form>
          )}

          {/* LEADS & INQUIRIES TAB */}
          {activeTab === 'leads' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Incoming Inquiries &amp; Quote Requests
                  </h4>
                  <p className="text-xs text-slate-500">
                    Captures submissions from product modals and the IT cost estimator.
                  </p>
                </div>
                <span className="text-xs font-mono bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold">
                  {quoteRequests.length} Total Submissions
                </span>
              </div>

              {quoteRequests.length === 0 ? (
                <div className="text-center py-12 bg-slate-50 rounded-xl border border-slate-200 p-6">
                  <Inbox className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                  <p className="text-xs font-semibold text-slate-600">No customer quote requests yet.</p>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Try requesting a quote on any service or product on the homepage to see it appear here live!
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {quoteRequests.map((req) => (
                    <div key={req.id} className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <span className="font-bold text-sm text-slate-900">{req.name}</span>
                          <span className="text-xs text-slate-500 ml-2">({req.company})</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono text-slate-500">{req.timestamp}</span>
                          <select
                            value={req.status}
                            onChange={(e) => onUpdateQuoteStatus(req.id, e.target.value as any)}
                            className={`text-[11px] font-bold px-2 py-1 rounded border ${
                              req.status === 'new'
                                ? 'bg-amber-100 text-amber-800 border-amber-300'
                                : req.status === 'contacted'
                                ? 'bg-blue-100 text-blue-800 border-blue-300'
                                : req.status === 'proposal_sent'
                                ? 'bg-purple-100 text-purple-800 border-purple-300'
                                : 'bg-emerald-100 text-emerald-800 border-emerald-300'
                            }`}
                          >
                            <option value="new">Status: New Lead</option>
                            <option value="contacted">Status: Contacted</option>
                            <option value="proposal_sent">Status: Proposal Sent</option>
                            <option value="closed">Status: Deal Closed</option>
                          </select>
                        </div>
                      </div>

                      <div className="text-xs text-slate-600 flex flex-wrap gap-x-4 gap-y-1">
                        <span>
                          <strong>Service:</strong> {req.itemTitle}
                        </span>
                        <span>
                          <strong>Email:</strong> {req.email}
                        </span>
                        {req.phone && (
                          <span>
                            <strong>Phone:</strong> {req.phone}
                          </span>
                        )}
                        {req.estimatedBudget && (
                          <span>
                            <strong>Est. Budget:</strong> {req.estimatedBudget}
                          </span>
                        )}
                      </div>

                      {req.message && (
                        <div className="text-xs text-slate-700 bg-white p-2.5 rounded border border-slate-200 mt-2">
                          <strong>Note:</strong> {req.message}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ANNOUNCEMENTS TAB */}
          {activeTab === 'announcements' && (
            <form onSubmit={handleSaveContent} className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Top Website Broadcast Announcement
                  </h4>
                  <p className="text-xs text-slate-500">
                    Displays a prominent banner across the very top of the live website.
                  </p>
                </div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={announcementEnabled}
                    onChange={(e) => setAnnouncementEnabled(e.target.checked)}
                    className="w-4 h-4 rounded text-blue-600"
                  />
                  <span className="text-xs font-semibold text-slate-700">Display Banner</span>
                </label>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Banner Text Message
                </label>
                <input
                  type="text"
                  placeholder="e.g. Schedule your annual ISO 27001 readiness review before Q4 deadlines."
                  value={announcementInput}
                  onChange={(e) => setAnnouncementInput(e.target.value)}
                  className="w-full p-3 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:bg-white text-slate-900"
                />
              </div>

              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900">
                <strong>Preview:</strong>
                <div className="mt-1 p-2 bg-amber-400 text-slate-950 font-semibold rounded text-center">
                  {announcementInput || 'Your announcement message will appear here.'}
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold shadow-md cursor-pointer"
                >
                  Update Announcement
                </button>
              </div>
            </form>
          )}

        </div>

      </div>
    </div>
  );
};

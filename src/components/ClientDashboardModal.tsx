import React, { useState } from 'react';
import { X, CheckCircle2, Copy, Shield, Server, LifeBuoy, Plus, Download, ExternalLink, Activity, AlertCircle } from 'lucide-react';
import { SupportTicket } from '../types';

interface ClientDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  userEmail: string;
}

export const ClientDashboardModal: React.FC<ClientDashboardModalProps> = ({
  isOpen,
  onClose,
  userEmail,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'licenses' | 'tickets' | 'invoices'>('overview');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Tickets state
  const [tickets, setTickets] = useState<SupportTicket[]>([
    {
      id: 'TICK-9021',
      subject: 'Configure additional WireGuard VPN profile for remote engineer',
      department: 'Cloud Ops',
      priority: 'medium',
      status: 'in_progress',
      createdAt: '2026-10-27 14:20',
      lastReply: 'Engineer assigned. Generating client certificate.',
    },
    {
      id: 'TICK-8840',
      subject: 'Quarterly ISO 27001 Access Review Report request',
      department: 'Security SOC',
      priority: 'low',
      status: 'resolved',
      createdAt: '2026-10-18 09:12',
      lastReply: 'Audit documentation package generated and uploaded to secure Drive.',
    },
  ]);

  const [newTicketSubject, setNewTicketSubject] = useState('');
  const [newTicketDept, setNewTicketDept] = useState<'Cloud Ops' | 'Security SOC' | 'Software Support' | 'Billing'>('Cloud Ops');
  const [newTicketPriority, setNewTicketPriority] = useState<'low' | 'medium' | 'high' | 'critical'>('medium');
  const [showNewTicketForm, setShowNewTicketForm] = useState(false);

  if (!isOpen) return null;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(text);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleCreateTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTicketSubject.trim()) return;

    const newTicket: SupportTicket = {
      id: `TICK-${Math.floor(1000 + Math.random() * 9000)}`,
      subject: newTicketSubject,
      department: newTicketDept,
      priority: newTicketPriority,
      status: 'open',
      createdAt: new Date().toISOString().replace('T', ' ').substring(0, 16),
      lastReply: 'Ticket logged with Level 2 Support. First response SLA: < 15 mins.',
    };

    setTickets([newTicket, ...tickets]);
    setNewTicketSubject('');
    setShowNewTicketForm(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header Bar */}
        <div className="bg-slate-900 px-6 py-4 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-black text-white text-lg">
              A
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white">Acme Global Industries</h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  Account #APE-88219
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Logged in as: <span className="text-slate-200 font-medium">{userEmail}</span> • SLA:{' '}
                <span className="text-amber-400 font-semibold">24/7 SOC Dedicated</span>
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

        {/* Navigation Tabs */}
        <div className="bg-slate-100 border-b border-slate-200 px-6 flex space-x-6 text-xs font-bold text-slate-600">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 border-b-2 transition-all cursor-pointer ${
              activeTab === 'overview'
                ? 'border-blue-600 text-blue-600 font-extrabold'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Infrastructure Health
          </button>
          <button
            onClick={() => setActiveTab('licenses')}
            className={`py-3 border-b-2 transition-all cursor-pointer ${
              activeTab === 'licenses'
                ? 'border-blue-600 text-blue-600 font-extrabold'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Software Licenses (2 Active)
          </button>
          <button
            onClick={() => setActiveTab('tickets')}
            className={`py-3 border-b-2 transition-all cursor-pointer ${
              activeTab === 'tickets'
                ? 'border-blue-600 text-blue-600 font-extrabold'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Support Tickets ({tickets.filter((t) => t.status !== 'resolved').length} Open)
          </button>
          <button
            onClick={() => setActiveTab('invoices')}
            className={`py-3 border-b-2 transition-all cursor-pointer ${
              activeTab === 'invoices'
                ? 'border-blue-600 text-blue-600 font-extrabold'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Billing &amp; Invoices
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* OVERVIEW TAB */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-emerald-800">Managed Perimeter Firewall</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <div className="text-2xl font-black text-emerald-900 font-mono">100% Up</div>
                  <p className="text-[11px] text-emerald-700 mt-1">Fortinet NGFW HA Cluster active</p>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-blue-800">AWS Cloud Workload</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                  </div>
                  <div className="text-2xl font-black text-blue-900 font-mono">99.98% SLA</div>
                  <p className="text-[11px] text-blue-700 mt-1">Last automated snapshot: 12 min ago</p>
                </div>

                <div className="p-4 bg-purple-50 border border-purple-200 rounded-xl">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-purple-800">NIST Compliance Status</span>
                    <Shield className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="text-2xl font-black text-purple-900 font-mono">94% Certified</div>
                  <p className="text-[11px] text-purple-700 mt-1">Annual audit passed Sept 2026</p>
                </div>
              </div>

              {/* Monitored nodes */}
              <div>
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">
                  Live Managed Network Nodes
                </h4>
                <div className="bg-slate-50 rounded-xl border border-slate-200 divide-y divide-slate-200 text-xs">
                  <div className="p-3.5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Server className="w-4 h-4 text-slate-600" />
                      <div>
                        <div className="font-bold text-slate-900">Headquarters Core Switch &amp; Wi-Fi 6 APs</div>
                        <div className="text-slate-500 text-[11px]">IP: 192.168.10.1 (VLAN 10/20/30)</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-semibold text-[10px]">
                      Operational
                    </span>
                  </div>

                  <div className="p-3.5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Shield className="w-4 h-4 text-slate-600" />
                      <div>
                        <div className="font-bold text-slate-900">Cloud SIEM &amp; Threat Detection Engine</div>
                        <div className="text-slate-500 text-[11px]">Analyzing 45,000 events/sec • 0 High Severity Alerts</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-semibold text-[10px]">
                      Normal Telemetry
                    </span>
                  </div>

                  <div className="p-3.5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Activity className="w-4 h-4 text-slate-600" />
                      <div>
                        <div className="font-bold text-slate-900">Disaster Recovery Geo-Replication</div>
                        <div className="text-slate-500 text-[11px]">Target: US-East-2 (RPO &lt; 5m, RTO &lt; 15m)</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 font-semibold text-[10px]">
                      Synced
                    </span>
                  </div>
                </div>
              </div>

              {/* Emergency NOC notice */}
              <div className="p-4 rounded-xl bg-slate-900 text-white flex items-center justify-between">
                <div>
                  <h5 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    24/7 Security Operations Center Hotline
                  </h5>
                  <p className="text-xs text-slate-300 mt-0.5">
                    For P1 critical incidents, your priority line connects directly to a senior NOC engineer.
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-mono font-bold text-white bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
                    +1 (800) 555-APE-NOC
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* LICENSES TAB */}
          {activeTab === 'licenses' && (
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-slate-900">ApeCRM Enterprise Tier</h4>
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded">
                      Active
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Licensed Seats: <strong>25 Users</strong> • Renewal: Nov 15, 2027
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <code className="text-xs font-mono bg-white px-2 py-1 rounded border border-slate-300 text-slate-800">
                      APE-CRM-88219-X992-LIVE
                    </code>
                    <button
                      onClick={() => handleCopy('APE-CRM-88219-X992-LIVE')}
                      className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1 font-semibold cursor-pointer"
                    >
                      <Copy className="w-3 h-3" />
                      {copiedKey === 'APE-CRM-88219-X992-LIVE' ? 'Copied!' : 'Copy Key'}
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => alert('Redirecting to your hosted ApeCRM tenant...')}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold cursor-pointer"
                >
                  Launch App Web Console
                </button>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-slate-900">ApeHRM Workforce &amp; Payroll</h4>
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded">
                      Active
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Licensed Seats: <strong>50 Employees</strong> • Renewal: Nov 15, 2027
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <code className="text-xs font-mono bg-white px-2 py-1 rounded border border-slate-300 text-slate-800">
                      APE-HRM-44102-M883-LIVE
                    </code>
                    <button
                      onClick={() => handleCopy('APE-HRM-44102-M883-LIVE')}
                      className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1 font-semibold cursor-pointer"
                    >
                      <Copy className="w-3 h-3" />
                      {copiedKey === 'APE-HRM-44102-M883-LIVE' ? 'Copied!' : 'Copy Key'}
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => alert('Redirecting to your hosted ApeHRM portal...')}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold cursor-pointer"
                >
                  Launch App Web Console
                </button>
              </div>
            </div>
          )}

          {/* TICKETS TAB */}
          {activeTab === 'tickets' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Support &amp; Engineering Tickets
                </h4>
                <button
                  onClick={() => setShowNewTicketForm(!showNewTicketForm)}
                  className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Open New Ticket
                </button>
              </div>

              {showNewTicketForm && (
                <form onSubmit={handleCreateTicket} className="p-4 bg-slate-50 border border-slate-300 rounded-xl space-y-3">
                  <h5 className="text-xs font-bold text-slate-900">Submit Priority Request</h5>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">Issue Subject</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Add 2 new user mailboxes in Microsoft 365"
                      value={newTicketSubject}
                      onChange={(e) => setNewTicketSubject(e.target.value)}
                      className="w-full p-2 text-xs bg-white border border-slate-300 rounded-lg text-slate-900"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">Department</label>
                      <select
                        value={newTicketDept}
                        onChange={(e) => setNewTicketDept(e.target.value as any)}
                        className="w-full p-2 text-xs bg-white border border-slate-300 rounded-lg text-slate-900"
                      >
                        <option value="Cloud Ops">Cloud Ops &amp; Hosting</option>
                        <option value="Security SOC">Security SOC &amp; Firewall</option>
                        <option value="Software Support">Apesoft Software Bug/Request</option>
                        <option value="Billing">Billing &amp; Account</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">Priority</label>
                      <select
                        value={newTicketPriority}
                        onChange={(e) => setNewTicketPriority(e.target.value as any)}
                        className="w-full p-2 text-xs bg-white border border-slate-300 rounded-lg text-slate-900"
                      >
                        <option value="low">Low (General guidance)</option>
                        <option value="medium">Medium (Standard feature/user setup)</option>
                        <option value="high">High (Service degraded)</option>
                        <option value="critical">Critical (Work stoppage / Outage)</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowNewTicketForm(false)}
                      className="px-3 py-1.5 text-xs text-slate-600 hover:text-slate-800 cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold cursor-pointer"
                    >
                      Create Ticket
                    </button>
                  </div>
                </form>
              )}

              <div className="space-y-3">
                {tickets.map((t) => (
                  <div key={t.id} className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-slate-900">{t.id}</span>
                        <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">
                          {t.department}
                        </span>
                        <span
                          className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${
                            t.priority === 'critical'
                              ? 'bg-red-100 text-red-800'
                              : t.priority === 'high'
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {t.priority}
                        </span>
                      </div>
                      <span
                        className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                          t.status === 'resolved'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}
                      >
                        {t.status === 'resolved' ? 'Resolved' : 'In Progress'}
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-slate-900">{t.subject}</div>
                    <div className="text-xs text-slate-500 mt-1 italic">
                      Latest status: &quot;{t.lastReply}&quot;
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* INVOICES TAB */}
          {activeTab === 'invoices' && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                Recent Retainers &amp; Statements
              </h4>
              <div className="bg-white border border-slate-200 rounded-xl divide-y divide-slate-200 text-xs">
                <div className="p-3.5 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-900">Invoice #INV-2026-10-09</div>
                    <div className="text-slate-500 text-[11px]">Period: Oct 1 - Oct 31, 2026 • Managed SOC + Cloud Retainer</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono font-bold text-slate-900">$2,450.00</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">Paid</span>
                    <button
                      onClick={() => alert('Downloaded PDF Receipt for Invoice #INV-2026-10-09')}
                      className="p-1.5 text-slate-500 hover:text-blue-600 rounded cursor-pointer"
                      title="Download PDF"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="p-3.5 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-900">Invoice #INV-2026-09-08</div>
                    <div className="text-slate-500 text-[11px]">Period: Sep 1 - Sep 30, 2026 • Managed SOC + Cloud Retainer</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono font-bold text-slate-900">$2,450.00</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">Paid</span>
                    <button
                      onClick={() => alert('Downloaded PDF Receipt for Invoice #INV-2026-09-08')}
                      className="p-1.5 text-slate-500 hover:text-blue-600 rounded cursor-pointer"
                      title="Download PDF"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

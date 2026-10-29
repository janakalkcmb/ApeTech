import React, { useState } from 'react';
import { Calculator, ArrowRight, ShieldCheck, Server, Laptop, Check } from 'lucide-react';

interface QuoteCalculatorProps {
  onPreFillQuote: (title: string, summary: string, budget: string) => void;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({ onPreFillQuote }) => {
  const [userCount, setUserCount] = useState<number>(25);
  const [cloudOption, setCloudOption] = useState<'none' | 'hosting' | 'migration'>('hosting');
  const [securityTier, setSecurityTier] = useState<'standard' | 'soc' | 'compliance'>('soc');
  const [selectedApps, setSelectedApps] = useState<string[]>(['crm']);

  const toggleApp = (id: string) => {
    setSelectedApps((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  // Calculate pricing
  const calculateEstimate = () => {
    let base = 0;
    
    // Cloud option
    if (cloudOption === 'hosting') base += 250;
    if (cloudOption === 'migration') base += 900;

    // Security
    if (securityTier === 'standard') base += 350;
    if (securityTier === 'soc') base += 850;
    if (securityTier === 'compliance') base += 1600;

    // Users
    base += userCount * 18;

    // Apps
    selectedApps.forEach((app) => {
      if (app === 'crm') base += userCount * 12;
      if (app === 'erp') base += 390;
      if (app === 'hrm') base += userCount * 4;
      if (app === 'finance') base += 150;
    });

    return base;
  };

  const estimatedTotal = calculateEstimate();
  const timelineEstimate =
    cloudOption === 'migration' || securityTier === 'compliance'
      ? '3 - 6 Weeks'
      : '1 - 2 Weeks';

  const handleBookEstimate = () => {
    const summary = `Calculated Scope: ${userCount} Users | Cloud: ${cloudOption} | Security: ${securityTier} | Applications: ${selectedApps.join(
      ', '
    )} | Est. Monthly: $${estimatedTotal.toLocaleString()}/mo`;
    
    onPreFillQuote(
      `Custom IT & Software Solution (${userCount} Seats)`,
      summary,
      `~$${estimatedTotal.toLocaleString()}/mo`
    );
  };

  return (
    <section id="estimator" className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-500/30 text-blue-300 text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5 text-blue-400" />
            Transparent Budget Planning
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Interactive Solution &amp; IT Cost Estimator
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Select your company scale, cloud infrastructure requirements, and software modules to generate a real-time ballpark estimate and implementation timeline.
          </p>
        </div>

        {/* Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-8">
            
            {/* User Seats Slider */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-bold text-white flex items-center gap-2">
                  <span>Organization Size (Active Employees/Seats):</span>
                </label>
                <span className="text-xl font-black text-amber-400 font-mono bg-slate-900 px-3 py-1 rounded-lg border border-slate-800">
                  {userCount} Seats
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="250"
                step="5"
                value={userCount}
                onChange={(e) => setUserCount(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-2 font-mono">
                <span>5 Seats (Startup)</span>
                <span>50 Seats (Mid-Market)</span>
                <span>250+ Seats (Enterprise)</span>
              </div>
            </div>

            {/* Cloud & Hosting Tier */}
            <div>
              <label className="block text-sm font-bold text-white mb-3">
                Cloud &amp; Infrastructure Scope
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'none', title: 'On-Premise Only', desc: 'No cloud hosting changes' },
                  { id: 'hosting', title: 'Managed Hosting', desc: '99.9% Uptime cloud servers' },
                  { id: 'migration', title: 'Full Cloud Migration', desc: 'Zero-downtime AWS/Azure' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setCloudOption(opt.id as any)}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      cloudOption === opt.id
                        ? 'border-blue-500 bg-blue-950/60 text-white shadow-md'
                        : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-xs font-bold text-white">{opt.title}</div>
                    <div className="text-[11px] text-slate-400 mt-1 leading-tight">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Cybersecurity & Compliance */}
            <div>
              <label className="block text-sm font-bold text-white mb-3">
                Cybersecurity &amp; Compliance Level
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'standard', title: 'Standard Firewall', desc: 'Hardware perimeter & VPN' },
                  { id: 'soc', title: '24/7 Managed SOC', desc: 'Threat hunting & intrusion' },
                  { id: 'compliance', title: 'NIST / ISO 27001', desc: 'Full audit readiness & ISMS' },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setSecurityTier(tier.id as any)}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      securityTier === tier.id
                        ? 'border-amber-400 bg-amber-950/30 text-white shadow-md'
                        : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-xs font-bold text-white">{tier.title}</div>
                    <div className="text-[11px] text-slate-400 mt-1 leading-tight">{tier.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Software Applications */}
            <div>
              <label className="block text-sm font-bold text-white mb-3">
                Software Applications (Apesoft Suite)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'crm', name: 'ApeCRM' },
                  { id: 'erp', name: 'ApeERP' },
                  { id: 'hrm', name: 'ApeHRM' },
                  { id: 'finance', name: 'ApeFinance' },
                ].map((app) => {
                  const isChecked = selectedApps.includes(app.id);
                  return (
                    <button
                      key={app.id}
                      type="button"
                      onClick={() => toggleApp(app.id)}
                      className={`p-2.5 rounded-xl border text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                        isChecked
                          ? 'border-blue-500 bg-blue-600/20 text-white'
                          : 'border-slate-800 bg-slate-900/40 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <span>{app.name}</span>
                      <div
                        className={`w-4 h-4 rounded border flex items-center justify-center ${
                          isChecked ? 'border-blue-400 bg-blue-500 text-white' : 'border-slate-700'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Pricing Summary Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-950 to-blue-950/40 p-6 sm:p-8 rounded-2xl border border-blue-500/30 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs uppercase font-mono tracking-wider text-blue-400">
                  Estimated Retainer
                </span>
                <div className="text-3xl sm:text-4xl font-black text-white mt-1 font-mono">
                  ${estimatedTotal.toLocaleString()}
                  <span className="text-sm font-normal text-slate-400"> / month</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[10px] uppercase font-mono tracking-wider text-amber-400">
                  Onboarding SLA
                </span>
                <div className="text-sm font-bold text-white mt-1">
                  {timelineEstimate}
                </div>
              </div>
            </div>

            {/* Scope Breakdown */}
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Licensed User Seats:</span>
                <span className="font-semibold text-white">{userCount} Active Accounts</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Infrastructure Support:</span>
                <span className="font-semibold text-white capitalize">{cloudOption}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Security SLA:</span>
                <span className="font-semibold text-amber-400 uppercase">{securityTier}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Selected Applications:</span>
                <span className="font-semibold text-white">
                  {selectedApps.length > 0 ? selectedApps.join(', ').toUpperCase() : 'None'}
                </span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400">Included Core Services:</span>
                <span className="font-semibold text-emerald-400">24/7 Monitoring &amp; Backups</span>
              </div>
            </div>

            {/* Action */}
            <button
              onClick={handleBookEstimate}
              className="w-full py-4 px-6 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Lock In This Configuration &amp; Request Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-[11px] text-slate-400 text-center leading-relaxed">
              *Preliminary estimate for budgeting. Final formal proposal includes custom SLA agreements, hardware discounts, and zero-downtime cutover guarantees.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

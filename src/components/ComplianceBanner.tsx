import React from 'react';
import { ShieldCheck, CheckCircle2, Award, FileSpreadsheet, ArrowRight, Lock } from 'lucide-react';

interface ComplianceBannerProps {
  onOpenAudit: () => void;
}

export const ComplianceBanner: React.FC<ComplianceBannerProps> = ({ onOpenAudit }) => {
  return (
    <section id="compliance" className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-y-4 border-blue-600 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -top-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-amber-400 text-xs font-mono font-semibold mb-4 border border-slate-700">
          <Award className="w-3.5 h-3.5" />
          Enterprise Regulatory Standards
        </div>

        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
          Enterprise-Grade Security &amp; Compliance Readiness
        </h3>

        <p className="text-slate-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed mb-8">
          We help defense contractors, financial institutions, healthcare providers, and high-growth SaaS firms meet rigorous regulatory mandates. Eliminate compliance blindspots, pass audits on the first attempt, and safeguard client assets.
        </p>

        {/* Badges Grid */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-10">
          
          <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur border border-slate-700/80 px-5 py-3 rounded-xl shadow-md hover:border-amber-400 transition-colors">
            <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
              ✓
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-white">NIST CSF 2.0</div>
              <div className="text-[11px] text-slate-400">Cybersecurity Framework</div>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur border border-slate-700/80 px-5 py-3 rounded-xl shadow-md hover:border-blue-400 transition-colors">
            <div className="w-9 h-9 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
              ✓
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-white">ISO/IEC 27001:2022</div>
              <div className="text-[11px] text-slate-400">ISMS Certified Lead Auditors</div>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur border border-slate-700/80 px-5 py-3 rounded-xl shadow-md hover:border-emerald-400 transition-colors">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              ✓
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-white">SOC 2 Type II Ready</div>
              <div className="text-[11px] text-slate-400">Continuous Cloud Controls</div>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur border border-slate-700/80 px-5 py-3 rounded-xl shadow-md hover:border-purple-400 transition-colors">
            <div className="w-9 h-9 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
              ✓
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-white">HIPAA &amp; GDPR</div>
              <div className="text-[11px] text-slate-400">PHI &amp; PII Encryption Guard</div>
            </div>
          </div>

        </div>

        {/* Action Button */}
        <div>
          <button
            onClick={onOpenAudit}
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl text-sm shadow-lg shadow-amber-500/20 transition-all transform hover:scale-105 cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4 text-slate-950" />
            Take 2-Minute Compliance Readiness Audit
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

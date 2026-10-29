import React from 'react';
import { ShieldCheck, Lock, User, ExternalLink } from 'lucide-react';

interface FooterProps {
  onOpenLogin: (type: 'client' | 'admin') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLogin }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-900">
          
          {/* Logo & Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white/95 px-3 py-1.5 rounded-xl shadow-md border border-slate-800 flex items-center h-12">
                <img
                  src="/assets/aistudio/Ape_Soft_2_64196088.jpg"
                  alt="Apesoft Enterprise IT &amp; Security"
                  className="h-9 md:h-10 w-auto object-contain mix-blend-multiply"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Apesoft Organization
                </span>
                <span className="text-[10px] text-slate-400">
                  Managed IT, Cloud &amp; Compliance
                </span>
              </div>
            </div>

            <p className="text-slate-400 max-w-sm leading-relaxed">
              Empowering organizations with secure enterprise software, zero-downtime cloud migrations, next-generation firewall defense, and audit-ready NIST / ISO 27001 compliance.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => onOpenLogin('client')}
                className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 text-[11px] font-semibold flex items-center gap-1.5 cursor-pointer"
              >
                <User className="w-3 h-3 text-blue-400" />
                Client Portal
              </button>
              <button
                onClick={() => onOpenLogin('admin')}
                className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-amber-400 text-[11px] font-bold flex items-center gap-1.5 cursor-pointer"
              >
                <Lock className="w-3 h-3" />
                Staff Admin
              </button>
            </div>
          </div>

          {/* Managed IT Services Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              IT Services
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#services" className="hover:text-white transition-colors">Cloud Migrations</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Firewall &amp; 24/7 SOC</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Network &amp; Structured Cabling</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Surveillance &amp; IP CCTV</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Microsoft 365 &amp; G-Suite</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Zero-Downtime Data Migration</a></li>
            </ul>
          </div>

          {/* Software & Compliance Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Software &amp; Compliance
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#products" className="hover:text-white transition-colors">ApeCRM Platform</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">ApeERP Business Suite</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">ApeHRM &amp; Payroll</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">ApeTaxi Fleet Dispatch</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">ApeResort Property PMS</a></li>
              <li><a href="#compliance" className="hover:text-white transition-colors text-amber-400 font-semibold">NIST &amp; ISO 27001 Audits</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; 2026 Apesoft Organization. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              ISO/IEC 27001:2022 Certified
            </span>
            <span>•</span>
            <span className="text-slate-400">NIST SP 800-171 Aligned</span>
            <span>•</span>
            <span className="text-slate-400">SOC 2 Type II Audited</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

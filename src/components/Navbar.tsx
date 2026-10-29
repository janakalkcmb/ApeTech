import React, { useState } from 'react';
import { Shield, Menu, X, User, Lock, PhoneCall, ExternalLink } from 'lucide-react';

interface NavbarProps {
  onOpenLogin: (type: 'client' | 'admin') => void;
  onOpenAudit: () => void;
  activeAnnouncement?: string | null;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenLogin, onOpenAudit, activeAnnouncement }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {activeAnnouncement && (
        <div className="bg-amber-500 text-slate-950 px-4 py-2 text-xs md:text-sm font-semibold flex items-center justify-center gap-2 shadow-inner">
          <span className="inline-block w-2 h-2 rounded-full bg-slate-900 animate-ping"></span>
          <span>{activeAnnouncement}</span>
        </div>
      )}

      <nav className="bg-slate-900 border-b border-slate-800 text-slate-100 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group" title="Apesoft Home">
              <div className="bg-white/95 hover:bg-white px-2.5 sm:px-3 py-1.5 rounded-xl shadow-md border border-slate-700/60 group-hover:border-blue-400/80 group-hover:shadow-blue-500/20 transition-all flex items-center h-12">
                <img
                  src="/assets/aistudio/Ape_Soft_2_64196088.jpg"
                  alt="Apesoft Enterprise IT &amp; Security"
                  className="h-8 sm:h-9 md:h-10 w-auto object-contain mix-blend-multiply transition-transform group-hover:scale-[1.02]"
                />
              </div>
              <div className="hidden lg:flex flex-col">
                <span className="text-[11px] uppercase tracking-wider text-blue-400 font-bold leading-tight">
                  Managed IT &amp; Security
                </span>
                <span className="text-[9px] text-slate-400 leading-tight">
                  Cloud • Compliance • SOC
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-7 text-sm font-medium">
              <a href="#services" className="text-slate-300 hover:text-white transition-colors">
                Services
              </a>
              <a href="#products" className="text-slate-300 hover:text-white transition-colors">
                Products
              </a>
              <a href="#compliance" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-amber-400" />
                Compliance
              </a>
              <a href="#estimator" className="text-slate-300 hover:text-white transition-colors">
                Cost Estimator
              </a>
              <a href="#contact" className="text-slate-300 hover:text-white transition-colors">
                Contact
              </a>
            </div>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => onOpenLogin('client')}
                className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 rounded-lg transition-all shadow-sm cursor-pointer"
                title="Client Portal Login"
              >
                <User className="w-3.5 h-3.5 text-blue-400" />
                Client Login
              </button>

              <button
                onClick={() => onOpenLogin('admin')}
                className="flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-all shadow-sm shadow-amber-500/20 cursor-pointer"
                title="Administrator Portal"
              >
                <Lock className="w-3.5 h-3.5" />
                Admin Portal
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => onOpenLogin('client')}
                className="p-2 text-xs font-semibold text-blue-400 border border-slate-700 rounded-lg bg-slate-800"
              >
                Login
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950 border-b border-slate-800 px-5 pt-3 pb-6 space-y-3">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-300 hover:text-white font-medium text-base border-b border-slate-800/60"
            >
              Services (12 Managed Solutions)
            </a>
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-300 hover:text-white font-medium text-base border-b border-slate-800/60"
            >
              Software Products (Apesoft Suite)
            </a>
            <a
              href="#compliance"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-300 hover:text-white font-medium text-base border-b border-slate-800/60 flex items-center justify-between"
            >
              <span>NIST &amp; ISO 27001 Compliance</span>
              <span className="text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded">Audit Ready</span>
            </a>
            <a
              href="#estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-300 hover:text-white font-medium text-base border-b border-slate-800/60"
            >
              Solution Cost Estimator
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-300 hover:text-white font-medium text-base"
            >
              24/7 Support &amp; Contact
            </a>

            <div className="pt-4 grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLogin('client');
                }}
                className="flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-semibold text-white bg-slate-800 border border-slate-700 rounded-lg"
              >
                <User className="w-4 h-4 text-blue-400" />
                Client Login
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLogin('admin');
                }}
                className="flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-bold text-slate-950 bg-amber-400 rounded-lg"
              >
                <Lock className="w-4 h-4" />
                Admin Portal
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

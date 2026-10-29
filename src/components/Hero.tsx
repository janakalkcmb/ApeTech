import React from 'react';
import { ShieldCheck, Cloud, ArrowRight, Activity, CheckCircle2, Lock, Sparkles } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  onExploreServices: () => void;
  onRequestQuote: () => void;
  onOpenAudit: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  onExploreServices,
  onRequestQuote,
  onOpenAudit,
}) => {
  return (
    <header className="relative bg-slate-950 text-white overflow-hidden border-b border-slate-800">
      {/* Background with overlay and subtle dynamic grid */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/90 to-slate-950" />
      
      {/* Glow highlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Trust Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs font-semibold mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Enterprise SLA: 99.9% Uptime Guarantee</span>
            <span className="text-slate-500">|</span>
            <span className="text-amber-400 flex items-center gap-1 font-mono">
              <ShieldCheck className="w-3.5 h-3.5" /> NIST &amp; ISO 27001 Ready
            </span>
          </div>

          {/* Hero Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            {title}
          </h1>

          {/* Hero Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-base shadow-lg shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              Explore 12 Services
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onRequestQuote}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base shadow-lg shadow-blue-600/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              Request Free Consultation
            </button>

            <button
              onClick={onOpenAudit}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-slate-200 font-medium text-base transition-all cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Compliance Self-Assessment
            </button>
          </div>

          {/* Live Trust Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-slate-800/80 text-left">
            <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 p-4 rounded-xl">
              <div className="text-2xl lg:text-3xl font-extrabold text-blue-400 font-mono">99.98%</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Uptime SLA Guaranteed</div>
            </div>
            <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 p-4 rounded-xl">
              <div className="text-2xl lg:text-3xl font-extrabold text-emerald-400 font-mono">250+</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Legacy Cloud Migrations</div>
            </div>
            <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 p-4 rounded-xl">
              <div className="text-2xl lg:text-3xl font-extrabold text-amber-400 font-mono">Zero</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Breaches on Monitored Perimeter</div>
            </div>
            <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 p-4 rounded-xl">
              <div className="text-2xl lg:text-3xl font-extrabold text-white font-mono">24/7/365</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Dedicated SOC &amp; NOC Support</div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

import React, { useState, useEffect } from 'react';
import { X, Lock, Mail, UserCheck, ShieldCheck, ArrowRight, AlertCircle, Sparkles } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  initialType: 'client' | 'admin';
  onClose: () => void;
  onLoginSuccess: (type: 'client' | 'admin', userEmail: string) => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  initialType,
  onClose,
  onLoginSuccess,
}) => {
  const [activeTab, setActiveTab] = useState<'client' | 'admin'>(initialType);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    setActiveTab(initialType);
    setErrorMsg('');
    if (initialType === 'admin') {
      setEmail('admin@apesoft.com');
      setPassword('admin123');
    } else {
      setEmail('client@acmeglobal.com');
      setPassword('demo1234');
    }
  }, [initialType, isOpen]);

  if (!isOpen) return null;

  const handleTabSwitch = (type: 'client' | 'admin') => {
    setActiveTab(type);
    setErrorMsg('');
    if (type === 'admin') {
      setEmail('admin@apesoft.com');
      setPassword('admin123');
    } else {
      setEmail('client@acmeglobal.com');
      setPassword('demo1234');
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (activeTab === 'admin') {
      if (email.trim() === 'admin@apesoft.com' && password === 'admin123') {
        onLoginSuccess('admin', email);
        onClose();
      } else {
        setErrorMsg('Invalid Administrator credentials. Demo credentials: admin@apesoft.com / admin123');
      }
    } else {
      // Client validation
      if (email.includes('@') && password.length >= 6) {
        onLoginSuccess('client', email);
        onClose();
      } else {
        setErrorMsg('Please enter a valid work email and at least 6 characters password.');
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header Tabs */}
        <div className="flex border-b border-slate-800 bg-slate-900 text-white">
          <button
            type="button"
            onClick={() => handleTabSwitch('client')}
            className={`flex-1 py-3.5 text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'client'
                ? 'bg-slate-800 text-blue-400 border-b-2 border-blue-500'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <UserCheck className="w-4 h-4" />
            Client Portal
          </button>
          <button
            type="button"
            onClick={() => handleTabSwitch('admin')}
            className={`flex-1 py-3.5 text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'admin'
                ? 'bg-slate-800 text-amber-400 border-b-2 border-amber-400'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Lock className="w-4 h-4" />
            Admin Portal
          </button>
          
          <button
            onClick={onClose}
            className="p-3 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6">
          <div className="text-center mb-6">
            <div className="inline-block bg-white px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-sm mb-3">
              <img
                src="/assets/aistudio/Ape_Soft_2_64196088.jpg"
                alt="Apesoft Logo"
                className="h-8 w-auto object-contain mix-blend-multiply mx-auto"
              />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              {activeTab === 'admin' ? 'Administrator Login' : 'Client Portal Sign In'}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              {activeTab === 'admin'
                ? 'Access live website CMS, incoming quote leads, and SLA monitor.'
                : 'Access your deployed SaaS licenses, support tickets, and server telemetry.'}
            </p>
          </div>

          {errorMsg && (
            <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {activeTab === 'admin' ? 'Staff Email' : 'Account Work Email'}
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-900"
                />
              </div>
            </div>

            {/* Quick Demo Pre-fill note */}
            <div className="p-2.5 rounded-lg bg-slate-100 text-[11px] text-slate-600 flex items-center justify-between">
              <span className="flex items-center gap-1.5 font-mono">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                Demo Credentials Pre-Filled
              </span>
              <button
                type="button"
                onClick={() => {
                  if (activeTab === 'admin') {
                    setEmail('admin@apesoft.com');
                    setPassword('admin123');
                  } else {
                    setEmail('client@acmeglobal.com');
                    setPassword('demo1234');
                  }
                }}
                className="text-blue-600 font-semibold hover:underline cursor-pointer"
              >
                Reset Demo
              </button>
            </div>

            <button
              type="submit"
              className={`w-full py-3 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'admin'
                  ? 'bg-amber-400 hover:bg-amber-300 text-slate-950'
                  : 'bg-blue-600 hover:bg-blue-500 text-white'
              }`}
            >
              <span>{activeTab === 'admin' ? 'Enter Admin Dashboard' : 'Open Client Dashboard'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-5 text-center text-xs text-slate-500">
            {activeTab === 'admin' ? (
              <span>Authorized personnel only. Protected by 2FA token authentication.</span>
            ) : (
              <span>
                Need access to your client tenant?{' '}
                <a href="#contact" onClick={onClose} className="text-blue-600 font-semibold hover:underline">
                  Contact Support Desk
                </a>
              </span>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

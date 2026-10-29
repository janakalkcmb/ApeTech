import React, { useState } from 'react';
import { X, ShieldCheck, AlertTriangle, CheckCircle, ArrowRight, RefreshCw, Send } from 'lucide-react';

interface ComplianceAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestQuoteWithNotes: (title: string, notes: string) => void;
}

export const ComplianceAuditModal: React.FC<ComplianceAuditModalProps> = ({
  isOpen,
  onClose,
  onRequestQuoteWithNotes,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isCalculated, setIsCalculated] = useState(false);

  if (!isOpen) return null;

  const questions = [
    {
      id: 0,
      title: 'Data Classification & Storage',
      question: 'What type of sensitive data does your organization process or store?',
      options: [
        { label: 'Basic business correspondence & public marketing', score: 25 },
        { label: 'Customer PII (Names, addresses, emails, phone numbers)', score: 20 },
        { label: 'Financial records, cardholder data (PCI-DSS), or accounting', score: 15 },
        { label: 'Healthcare patient data (PHI/HIPAA) or defense CUI (ITAR/NIST)', score: 10 },
      ],
    },
    {
      id: 1,
      title: 'Identity & Access Management (IAM)',
      question: 'How do employees access critical corporate systems and cloud consoles?',
      options: [
        { label: 'Enforced MFA/2FA for 100% of staff + Single Sign-On (SSO)', score: 25 },
        { label: 'MFA only enabled on primary email accounts and admin logins', score: 15 },
        { label: 'Standard passwords with periodic 90-day reset cycles', score: 8 },
        { label: 'Shared departmental accounts or unmanaged passwords', score: 0 },
      ],
    },
    {
      id: 2,
      title: 'Endpoint & Perimeter Security',
      question: 'What security software and hardware protects your network and workstations?',
      options: [
        { label: 'Enterprise Next-Gen Firewall (NGFW) + Managed EDR/SOC', score: 25 },
        { label: 'Standard commercial antivirus + cloud vendor basic firewall', score: 16 },
        { label: 'Default OS antivirus (Windows Defender) with no central console', score: 8 },
        { label: 'No centralized firewall or endpoint tracking', score: 2 },
      ],
    },
    {
      id: 3,
      title: 'Disaster Recovery & Business Continuity',
      question: 'What is your backup schedule and recovery-time validation frequency?',
      options: [
        { label: 'Automated daily immutable off-site backups with quarterly recovery drills', score: 25 },
        { label: 'Automated weekly cloud backups, untested recovery restores', score: 16 },
        { label: 'Manual periodic exports to external hard drives / local NAS', score: 8 },
        { label: 'No structured disaster recovery policy or automated backup system', score: 0 },
      ],
    },
  ];

  const handleSelectOption = (index: number, label: string) => {
    setAnswers((prev) => ({ ...prev, [currentStep]: label }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCalculated(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setIsCalculated(false);
  };

  // Calculate score
  const calculateScore = () => {
    let total = 0;
    questions.forEach((q, qIndex) => {
      const selected = answers[qIndex];
      const opt = q.options.find((o) => o.label === selected);
      if (opt) total += opt.score;
    });
    return total;
  };

  const score = calculateScore();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-slate-900 px-6 py-5 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-blue-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">NIST &amp; ISO 27001 Readiness Audit</h3>
              <p className="text-xs text-slate-400">Instant Cybersecurity Posture Assessment</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {!isCalculated ? (
            <div>
              {/* Progress Indicator */}
              <div className="mb-6">
                <div className="flex justify-between text-xs font-semibold text-slate-500 mb-2">
                  <span>Question {currentStep + 1} of {questions.length}</span>
                  <span>{Math.round(((currentStep + 1) / questions.length) * 100)}% Complete</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="mb-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded">
                  {questions[currentStep].title}
                </span>
                <h4 className="text-lg font-bold text-slate-900 mt-2">
                  {questions[currentStep].question}
                </h4>
              </div>

              {/* Options */}
              <div className="space-y-3 mb-8">
                {questions[currentStep].options.map((opt, idx) => {
                  const isSelected = answers[currentStep] === opt.label;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(currentStep, opt.label)}
                      className={`w-full text-left p-4 rounded-xl border text-sm font-medium transition-all flex items-start justify-between cursor-pointer ${
                        isSelected
                          ? 'border-blue-600 bg-blue-50 text-blue-900 shadow-sm'
                          : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <span className="pr-4">{opt.label}</span>
                      <span
                        className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                          isSelected
                            ? 'border-blue-600 bg-blue-600 text-white'
                            : 'border-slate-300'
                        }`}
                      >
                        {isSelected && <span className="w-2 h-2 rounded-full bg-white" />}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Navigation button */}
              <div className="flex justify-end">
                <button
                  disabled={!answers[currentStep]}
                  onClick={handleNext}
                  className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm cursor-pointer transition-all ${
                    answers[currentStep]
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-500/20'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  {currentStep === questions.length - 1 ? 'Compute Posture Score' : 'Next Step'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* Results Screen */
            <div className="text-center py-2">
              <div className="inline-block p-4 rounded-full bg-blue-50 mb-4 border border-blue-100">
                <div
                  className={`text-4xl font-black font-mono ${
                    score >= 80 ? 'text-emerald-600' : score >= 50 ? 'text-amber-500' : 'text-red-500'
                  }`}
                >
                  {score}%
                </div>
              </div>

              <h4 className="text-xl font-extrabold text-slate-900">
                {score >= 80
                  ? 'Strong Compliance Readiness'
                  : score >= 50
                  ? 'Moderate Exposure - Gap Remediation Recommended'
                  : 'High Regulatory & Breach Risk'}
              </h4>

              <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                {score >= 80
                  ? 'Your organization has commendable baseline technical safeguards. An official ISO 27001 or NIST CSF Stage 1 pre-audit can formalize your certification in 4–6 weeks.'
                  : score >= 50
                  ? 'Identified vulnerability gaps in access controls or disaster recovery validation. We recommend a prioritized NIST SP 800-171 / CSF gap remediation roadmap.'
                  : 'Critical cybersecurity vulnerabilities detected in endpoint perimeter, lack of MFA governance, or unvalidated backup restoration. Immediate hardening is advised.'}
              </p>

              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-left my-6 space-y-2">
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Key Recommendations for your profile:
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-600">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Implement Next-Gen Firewall with SSL inspection &amp; 24/7 SOC telemetry</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-600">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Enforce FIDO2 / Authenticator MFA across all Google Workspace / M365 accounts</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-600">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Build Statement of Applicability (SoA) and System Security Plan (SSP)</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleReset}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-100 cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  Retake Assessment
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onRequestQuoteWithNotes(
                      'NIST / ISO 27001 Formal Gap Audit',
                      `Self-assessment score: ${score}%. Identified interest in compliance readiness roadmap and perimeter defense.`
                    );
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-md cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  Schedule Free Gap Consultation
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

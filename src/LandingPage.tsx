import React, { useState, useEffect } from 'react';

// Zero-dependency inline SVGs
const CarIcon = () => (
  <svg className="w-5 h-5 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2"></path>
    <circle cx="7" cy="17" r="2"></circle>
    <path d="M9 17h6"></path>
    <circle cx="17" cy="17" r="2"></circle>
  </svg>
);

const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={`${className} fill-current`} viewBox="0 0 24 24">
    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.666-.699c.95.539 1.942.825 2.802.825 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.767-5.776-5.771zm3.39 8.163c-.144.405-.837.774-1.17.824-.312.045-.694.06-2.115-.526-1.745-.722-2.884-2.483-2.973-2.599-.089-.116-.714-.949-.714-1.81 0-.862.453-1.285.614-1.46.16-.175.35-.219.467-.219.117 0 .234.001.336.006.108.006.252-.041.394.301.144.35.495 1.209.539 1.298.044.088.073.19.015.305-.058.117-.088.19-.175.292-.088.102-.185.228-.264.307-.088.087-.18.182-.077.359.102.175.455.751.977 1.216.671.598 1.237.784 1.412.871.176.088.278.073.38-.044.103-.117.438-.511.555-.686.117-.176.234-.146.394-.088.16.059 1.02.481 1.196.569.175.088.292.132.336.205.044.073.044.423-.1 0.828z" />
  </svg>
);

const CheckIcon = ({ className = "w-4 h-4 text-emerald-600 shrink-0 font-bold" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
  </svg>
);

export default function VahanCRMLanding() {
    const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalModalTab, setLegalModalTab] = useState<'privacy' | 'terms' | 'dpdpa'>('privacy');

  const openLegalModal = (tab: 'privacy' | 'terms' | 'dpdpa' = 'privacy') => {
    setLegalModalTab(tab);
    setLegalModalOpen(true);
  };
const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');
  const [heroSlide, setHeroSlide] = useState<number>(0);
  const [heroProgress, setHeroProgress] = useState<number>(0);
  const [isHeroPaused, setIsHeroPaused] = useState<boolean>(false);
  const [actionDone0, setActionDone0] = useState<boolean>(false);
  const [actionDone1, setActionDone1] = useState<boolean>(false);

  const [selectedDamage, setSelectedDamage] = useState<{ title: string; desc: string }>({
    title: 'Front Bumper Scuff',
    desc: 'Minor clearcoat abrasion from kerb hit. 2 photos attached.'
  });

  const WHATSAPP_PHONE = "919791388549";
  const whatsappDemoLink = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent("Hi VahanCRM team, I want to see a live quick demo of the workshop software.")}`;
  const whatsappTrialLink = (plan: string) => `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(`Hi VahanCRM team, I want to start my 14-day free trial (${plan}). Please activate my workshop account.`)}`;

  const totalHeroSlides = 4;
  const slideDuration = 7000;

  useEffect(() => {
    const stepMs = 50;
    const increment = (stepMs / slideDuration) * 100;
    const interval = setInterval(() => {
      if (!isHeroPaused) {
        setHeroProgress((prev) => {
          if (prev >= 100) {
            setHeroSlide((curr) => (curr + 1) % totalHeroSlides);
            return 0;
          }
          return prev + increment;
        });
      }
    }, stepMs);

    return () => clearInterval(interval);
  }, [isHeroPaused, heroSlide]);

  const selectHeroSlide = (idx: number) => {
    setHeroSlide(idx);
    setHeroProgress(0);
  };

  const prevHeroSlide = () => {
    setHeroSlide((curr) => (curr - 1 + totalHeroSlides) % totalHeroSlides);
    setHeroProgress(0);
  };

  const nextHeroSlide = () => {
    setHeroSlide((curr) => (curr + 1) % totalHeroSlides);
    setHeroProgress(0);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-red-600 selection:text-white font-sans antialiased">
      
      {/* Top Banner */}
      <aside aria-label="Live System Announcement" className="bg-slate-900 text-slate-200 border-b border-slate-800 text-xs py-2 px-3 text-center flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-black bg-red-600 text-white tracking-wider uppercase shadow-xs">
          ONE PLAN • UNLIMITED
        </span>
        <span className="text-xs sm:text-sm font-medium">
          Unlimited Owners, Branches, Staff & Job Cards • ₹999/mo or ₹9,999/yr.
        </span>
        <a href="#pricing" className="text-red-400 hover:text-red-300 underline font-bold ml-1.5 inline-flex items-center gap-0.5">
          View All Included Modules &rarr;
        </a>
      </aside>

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600 p-0.5 flex items-center justify-center shadow-md shadow-red-600/20">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                <CarIcon />
              </div>
            </div>
            <div>
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 flex items-center gap-1">
                Vahan<span className="text-red-600">CRM</span>
              </span>
              <span className="hidden sm:block text-[9px] uppercase tracking-widest text-slate-500 font-bold -mt-1">
                WORKSHOP REVENUE OS • INDIA
              </span>
            </div>
          </div>

          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#features" className="hover:text-red-600 transition-colors">Features</a>
            <a href="#integrations-ai" className="hover:text-red-600 transition-colors">Integrations &amp; AI</a>
            <a href="#pricing" className="hover:text-red-600 transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-red-600 transition-colors">FAQ</a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={whatsappDemoLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3.5 py-2 rounded-lg text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-300 hover:bg-emerald-100 transition-all shadow-xs"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="hidden sm:inline">Chat on </span>WhatsApp
            </a>
            <a
              href={whatsappTrialLink('Header Nav')}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-3 sm:px-4 py-2 rounded-lg text-xs font-extrabold text-white bg-red-600 hover:bg-red-700 transition-all shadow-md shadow-red-600/20 active:scale-95 whitespace-nowrap"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </header>

      {/* 4-IN-1 AUTOSCROLL COMMAND CENTER HERO */}
      <section 
        className="relative pt-6 pb-20 lg:pt-10 lg:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200"
        onMouseEnter={() => setIsHeroPaused(true)}
        onMouseLeave={() => setIsHeroPaused(false)}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Autoscroll Tabs */}
          <div className="mb-8 lg:mb-10">
            <div className="rounded-2xl p-2 sm:p-2.5 border border-slate-200 bg-white shadow-md">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                
                {/* Tab 1 */}
                <button
                  onClick={() => selectHeroSlide(0)}
                  className={`text-left px-3.5 py-2.5 rounded-xl transition-all relative overflow-hidden ${
                    heroSlide === 0
                      ? 'bg-red-50/70 border border-red-500/40 shadow-xs'
                      : 'bg-white border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 ${heroSlide === 0 ? 'text-red-600' : 'text-slate-500'}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${heroSlide === 0 ? 'bg-red-600' : 'bg-slate-400'}`} />
                      01 • 30-SEC INTAKE
                    </span>
                    <span className="text-[9px] font-mono text-slate-400">NO PAPER</span>
                  </div>
                  <div className={`text-xs truncate ${heroSlide === 0 ? 'font-extrabold text-slate-900' : 'font-semibold text-slate-700'}`}>
                    Ditch Paper Registers
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-slate-200 overflow-hidden">
                    <div className="h-full bg-red-600 transition-all duration-100 ease-linear" style={{ width: heroSlide === 0 ? `${heroProgress}%` : '0%' }} />
                  </div>
                </button>

                {/* Tab 2 */}
                <button
                  onClick={() => selectHeroSlide(1)}
                  className={`text-left px-3.5 py-2.5 rounded-xl transition-all relative overflow-hidden ${
                    heroSlide === 1
                      ? 'bg-red-50/70 border border-red-500/40 shadow-xs'
                      : 'bg-white border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 ${heroSlide === 1 ? 'text-red-600' : 'text-slate-500'}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${heroSlide === 1 ? 'bg-red-600' : 'bg-slate-400'}`} />
                      02 • WHATSAPP REMINDERS
                    </span>
                    <span className="text-[9px] font-mono text-slate-400">AUTO-FILL</span>
                  </div>
                  <div className={`text-xs truncate ${heroSlide === 1 ? 'font-extrabold text-slate-900' : 'font-semibold text-slate-700'}`}>
                    Bring Customers Back
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-slate-200 overflow-hidden">
                    <div className="h-full bg-red-600 transition-all duration-100 ease-linear" style={{ width: heroSlide === 1 ? `${heroProgress}%` : '0%' }} />
                  </div>
                </button>

                {/* Tab 3 */}
                <button
                  onClick={() => selectHeroSlide(2)}
                  className={`text-left px-3.5 py-2.5 rounded-xl transition-all relative overflow-hidden ${
                    heroSlide === 2
                      ? 'bg-red-50/70 border border-red-500/40 shadow-xs'
                      : 'bg-white border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 ${heroSlide === 2 ? 'text-red-600' : 'text-slate-500'}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${heroSlide === 2 ? 'bg-red-600' : 'bg-slate-400'}`} />
                      03 • BAY & PROFIT TRACKER
                    </span>
                    <span className="text-[9px] font-mono text-slate-400">MULTI-BAY</span>
                  </div>
                  <div className={`text-xs truncate ${heroSlide === 2 ? 'font-extrabold text-slate-900' : 'font-semibold text-slate-700'}`}>
                    Control Bays & Profits
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-slate-200 overflow-hidden">
                    <div className="h-full bg-red-600 transition-all duration-100 ease-linear" style={{ width: heroSlide === 2 ? `${heroProgress}%` : '0%' }} />
                  </div>
                </button>

                {/* Tab 4 */}
                <button
                  onClick={() => selectHeroSlide(3)}
                  className={`text-left px-3.5 py-2.5 rounded-xl transition-all relative overflow-hidden ${
                    heroSlide === 3
                      ? 'bg-red-50/70 border border-red-500/40 shadow-xs'
                      : 'bg-white border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 ${heroSlide === 3 ? 'text-red-600' : 'text-slate-500'}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${heroSlide === 3 ? 'bg-red-600' : 'bg-slate-400'}`} />
                      04 • 1-CLICK BILLING & QR
                    </span>
                    <span className="text-[9px] font-mono text-slate-400">DEALERSHIP</span>
                  </div>
                  <div className={`text-xs truncate ${heroSlide === 3 ? 'font-extrabold text-slate-900' : 'font-semibold text-slate-700'}`}>
                    Look Like A Dealership
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-slate-200 overflow-hidden">
                    <div className="h-full bg-red-600 transition-all duration-100 ease-linear" style={{ width: heroSlide === 3 ? `${heroProgress}%` : '0%' }} />
                  </div>
                </button>

              </div>
            </div>
          </div>

          {/* Slides Container */}
          <div className="relative min-h-[580px] sm:min-h-[540px] lg:min-h-[510px]">
            
            {/* Slide 0 */}
            {heroSlide === 0 && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
                <div className="lg:col-span-7 space-y-6 text-left">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-red-700">
                    <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
                    <span>🇮🇳 India’s Simplest Car & Bike Workshop CRM</span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08]">
                    Ditch the Register Book.<br />
                    <span className="text-red-600">Run Your Garage in 30 Seconds.</span>
                  </h1>

                  <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-normal">
                    Create digital job cards, track spare parts stock, and send digital bills on WhatsApp—designed so anyone on your workshop floor can use it from day one.
                  </p>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
                    <a
                      href="#pricing"
                      className="px-8 py-4 rounded-xl font-extrabold text-sm text-white bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/25 transition-all flex items-center justify-center gap-2 active:scale-95 group"
                    >
                      <span>Start Free Trial</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </a>
                    <a
                      href={whatsappDemoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="px-6 py-4 rounded-xl font-bold text-sm text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 transition-all flex items-center justify-center gap-2.5 active:scale-95 shadow-xs"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
                      <span>Book a Quick Demo</span>
                    </a>
                  </div>

                  <div className="pt-2 flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Works on any phone or PC</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>No training required</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>100% Fast Digital Billing</span>
                  </div>
                </div>

                <div className="lg:col-span-5 relative">
                  <div className="relative rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden">
                    <div className="bg-slate-900 px-4 py-3 text-white flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="font-mono font-bold tracking-tight text-slate-100">VAHAN OS • 30s DIGITAL JOB CARD</span>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-red-500/20 text-red-300 border border-red-500/30">#JC-4081</span>
                    </div>

                    <div className="bg-red-50 border-b border-red-100 px-4 py-2 flex items-center justify-between text-[11px]">
                      <span className="text-red-700 flex items-center gap-1.5 font-medium line-through decoration-red-400">
                        <span>❌</span> Paper Register (Lost parts, grease stains)
                      </span>
                      <span className="text-emerald-700 font-bold font-mono">30 SEC CLOUD</span>
                    </div>

                    <div className="p-4 sm:p-5 space-y-3.5 bg-slate-50/60 text-xs text-slate-700">
                      <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-900">Royal Enfield Hunter 350</span>
                          <span className="font-mono text-[11px] text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">KA 03 EX 9912</span>
                        </div>
                        <div className="text-[11px] text-slate-500">Customer: <strong className="text-slate-800">Ramesh K. (+91 98450 XXXXX)</strong></div>
                      </div>

                      <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="font-semibold text-slate-800">Auto Inventory Deduction</span>
                          <span className="font-mono text-emerald-700 font-bold">In Stock (42 cans)</span>
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-slate-600 font-mono">
                          <span>• Motul 7100 10W-50 (1.5L)</span>
                          <span>₹950</span>
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-slate-600 font-mono">
                          <span>• Oil Filter + Chain Lubing</span>
                          <span>₹300</span>
                        </div>
                        <div className="pt-1 border-t border-slate-200 flex items-center justify-between font-bold text-slate-900">
                          <span>Total Bill Amount</span>
                          <span className="text-red-600 font-mono text-sm">₹1,480</span>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          setActionDone0(true);
                          setTimeout(() => setActionDone0(false), 3000);
                        }}
                        className="w-full py-2.5 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-all flex items-center justify-center gap-1.5 active:scale-95 shadow-sm"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5" />
                        <span>{actionDone0 ? "WhatsApp Bill & Gate Pass Sent ✓✓" : "Send WhatsApp Bill & Gate Pass"}</span>
                      </button>
                    </div>

                    <div className="px-4 py-2.5 bg-white border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                        Stock updated in real time
                      </span>
                      <span className="font-mono text-slate-700 font-medium">Digital Invoice Ready</span>
                    </div>
                  </div>

                  <div className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white border border-emerald-300 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-[11px] font-bold text-slate-800">
                      <strong className="text-emerald-700 font-mono">100%</strong> Zero Lost Job Cards
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Slide 1 */}
            {heroSlide === 1 && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
                <div className="lg:col-span-7 space-y-6 text-left">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                    <span>Automated Customer Retention for 2W & 4W Workshops</span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08]">
                    Bring Every Bike & Car<br />
                    <span className="text-emerald-600">Back Automatically on WhatsApp.</span>
                  </h1>

                  <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-normal">
                    VahanDesk tracks every bike and car’s service cycle and sends timely WhatsApp reminders, digital estimates, and ready-for-pickup alerts—so your bays stay full year-round.
                  </p>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
                    <a
                      href="#pricing"
                      className="px-8 py-4 rounded-xl font-extrabold text-sm text-white bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/25 transition-all flex items-center justify-center gap-2 active:scale-95 group"
                    >
                      <span>Get Started Free</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </a>
                    <a
                      href="#features"
                      className="px-6 py-4 rounded-xl font-bold text-sm text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 transition-all flex items-center justify-center gap-2.5 active:scale-95 shadow-xs"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
                      <span>See How It Works</span>
                    </a>
                  </div>

                  <div className="pt-2 flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>No credit card needed</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Built-in WhatsApp notifications</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Setup in 5 mins</span>
                  </div>
                </div>

                <div className="lg:col-span-5 relative">
                  <div className="relative rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden">
                    <div className="bg-slate-900 px-4 py-3 text-white flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="font-mono font-bold tracking-tight text-slate-100">VAHANDESK RETENTION BOT</span>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">CYCLE AUTOMATION</span>
                    </div>

                    <div className="bg-slate-100 px-4 py-2 border-b border-slate-200 flex items-center justify-between text-[11px]">
                      <span className="text-slate-700">Hyundai Creta 1.5 SX • <strong className="text-slate-900 font-mono">DL 08 CK 2024</strong></span>
                      <span className="text-amber-700 font-bold font-mono">Due in 3 Days</span>
                    </div>

                    <div className="p-4 sm:p-5 space-y-3.5 bg-slate-50/60 text-xs text-slate-700">
                      <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2.5">
                        <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                          <div className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-[10px]">WA</div>
                          <div>
                            <div className="text-[11px] font-bold text-slate-900 flex items-center gap-1">
                              AutoCare Garage
                            </div>
                            <div className="text-[9px] text-slate-400 font-mono">Official Service Reminder Bot</div>
                          </div>
                        </div>

                        <p className="text-slate-700 text-[11px] leading-relaxed">
                          Namaste <strong className="text-red-600">Rohit ji</strong>! Your Creta's 9,999 km general service is due. We've reserved a priority bay this Saturday at 10:00 AM with complimentary engine bay glaze.
                        </p>

                        <button
                          onClick={() => {
                            setActionDone1(true);
                            setTimeout(() => setActionDone1(false), 3000);
                          }}
                          className="w-full py-2.5 px-3 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-all flex items-center justify-center gap-1.5 active:scale-95 shadow-sm"
                        >
                          <span>{actionDone1 ? "Slot Confirmed in Bay 3! 🎉" : "🗓️ Confirm Slot for Saturday 10:00 AM"}</span>
                        </button>
                      </div>

                      <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1.5">
                        <div className="flex justify-between text-[11px] font-mono">
                          <span className="text-slate-500">Service Cycle (90 Days)</span>
                          <span className="text-emerald-700 font-bold">88 / 90 Days</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                          <div className="bg-gradient-to-r from-emerald-500 to-amber-500 h-full rounded-full" style={{ width: '96%' }} />
                        </div>
                      </div>
                    </div>

                    <div className="px-4 py-2.5 bg-white border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                        Smart interval algorithm
                      </span>
                      <span className="font-mono text-emerald-700 font-bold">+42% Bay Fill Rate</span>
                    </div>
                  </div>

                  <div className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white border border-emerald-300 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-[11px] font-bold text-slate-800">
                      <strong className="text-emerald-700 font-mono">+₹48,500</strong> Extra Repeat Revenue/mo
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Slide 2 */}
            {heroSlide === 2 && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
                <div className="lg:col-span-7 space-y-6 text-left">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-amber-800">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                    <span>Enterprise Control for Modern Auto Workshops</span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08]">
                    Complete Control Over<br />
                    <span className="text-red-600">Every Bay, Mechanic, and Rupee.</span>
                  </h1>

                  <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-normal">
                    From vehicle check-in photos to parts margin tracking and instant customer approvals, VahanDesk gives multi-brand car and bike service centers total operational visibility.
                  </p>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
                    <a
                      href={whatsappDemoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="px-8 py-4 rounded-xl font-extrabold text-sm text-white bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/25 transition-all flex items-center justify-center gap-2 active:scale-95 group"
                    >
                      <span>Request Live Demo</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </a>
                    <a
                      href="#features"
                      className="px-6 py-4 rounded-xl font-bold text-sm text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 transition-all flex items-center justify-center gap-2.5 active:scale-95 shadow-xs"
                    >
                      <span>Explore Features</span>
                    </a>
                  </div>

                  <div className="pt-2 flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Supports 2-wheelers, 4-wheelers & EVs</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Role-based staff access</span>
                  </div>
                </div>

                <div className="lg:col-span-5 relative">
                  <div className="relative rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden">
                    <div className="bg-slate-900 px-4 py-3 text-white flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                        <span className="font-mono font-bold tracking-tight text-slate-100">VAHANDESK MULTI-BAY OS</span>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">Indiranagar Hub</span>
                    </div>

                    <div className="bg-slate-100 px-4 py-2 border-b border-slate-200 flex items-center justify-between text-[11px] font-mono">
                      <span className="text-slate-600">Daily Revenue: <strong className="text-slate-900">₹84,200</strong></span>
                      <span className="text-emerald-700 font-bold">Parts Profit: ₹26,450 (31%)</span>
                    </div>

                    <div className="p-4 sm:p-5 space-y-2.5 bg-slate-50/60 text-xs">
                      <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-red-50 text-red-700 border border-red-200 font-bold">4W BAY 1</span>
                            <span className="font-bold text-slate-900 text-[11px]">Mahindra Thar CRDe</span>
                          </div>
                          <div className="text-[10px] text-slate-500 mt-0.5">Clutch Overhaul • Tech: <span className="text-slate-800 font-medium">Rajesh (Master)</span></div>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-1 rounded border border-emerald-200 font-bold">+34% Margin</span>
                      </div>

                      <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-blue-50 text-blue-700 border border-blue-200 font-bold">2W BAY 2</span>
                            <span className="font-bold text-slate-900 text-[11px]">KTM Duke 390</span>
                          </div>
                          <div className="text-[10px] text-slate-500 mt-0.5">Chain & Sprocket • Tech: <span className="text-slate-800 font-medium">Imran (2W Sp.)</span></div>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-1 rounded border border-emerald-200 font-bold">+29% Margin</span>
                      </div>

                      <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold">EV BAY 3</span>
                            <span className="font-bold text-slate-900 text-[11px]">Tata Nexon EV</span>
                          </div>
                          <div className="text-[10px] text-slate-500 mt-0.5">Coolant & Battery BMS Scan • Tech: <span className="text-slate-800 font-medium">Anand (EV)</span></div>
                        </div>
                        <span className="text-[10px] font-mono text-cyan-700 bg-cyan-50 px-2 py-1 rounded border border-cyan-200 font-bold">Diagnostics OK</span>
                      </div>
                    </div>

                    <div className="px-4 py-2.5 bg-white border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        Role-based staff permissions
                      </span>
                      <span className="font-mono text-slate-700 font-medium">Centralized P&L Sync</span>
                    </div>
                  </div>

                  <div className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white border border-amber-300 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                    <span className="text-[11px] font-bold text-slate-800">
                      <strong className="text-amber-700 font-mono">Zero Stock Leakage</strong> Across Branches
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Slide 3 */}
            {heroSlide === 3 && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
                <div className="lg:col-span-7 space-y-6 text-left">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-red-700">
                    <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                    <span>VahanDesk.in — Workshop Management Made Easy</span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08]">
                    Digital Job Cards, Fast Digital Billing &<br />
                    <span className="text-red-600">Service Reminders in One Place.</span>
                  </h1>

                  <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-normal">
                    Built specifically for Indian multi-brand garages, bike service centers, and detailing studios to save time and look like an authorized dealership.
                  </p>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
                    <a
                      href="#pricing"
                      className="px-8 py-4 rounded-xl font-extrabold text-sm text-white bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/25 transition-all flex items-center justify-center gap-2 active:scale-95 group"
                    >
                      <span>Try Free for 14 Days</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </a>
                    <a
                      href="#pricing"
                      className="px-6 py-4 rounded-xl font-bold text-sm text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 transition-all flex items-center justify-center gap-2.5 active:scale-95 shadow-xs"
                    >
                      <span>View Plans</span>
                    </a>
                  </div>

                  <div className="pt-2 flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>₹0 setup fee</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Dedicated WhatsApp support</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Instant cloud backup</span>
                  </div>
                </div>

                <div className="lg:col-span-5 relative">
                  <div className="relative rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden">
                    <div className="bg-slate-900 px-4 py-3 text-white flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                        <span className="font-mono font-bold tracking-tight text-slate-100">VAHANDESK.IN • DEALERSHIP SUITE</span>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">DEALER GRADE</span>
                    </div>

                    <div className="p-4 sm:p-5 space-y-3 bg-slate-50/60 text-xs text-slate-700">
                      <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 font-bold text-sm flex items-center justify-center border border-red-200">1</div>
                          <div>
                            <div className="font-bold text-slate-900 text-xs">15s Vehicle Inward</div>
                            <div className="text-[10px] text-slate-500">Reg plate OCR scan + pre-check</div>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-bold">Auto-fill</span>
                      </div>

                      <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 font-bold text-sm flex items-center justify-center border border-amber-200">2</div>
                          <div>
                            <div className="font-bold text-slate-900 text-xs">Instant Digital Invoice</div>
                            <div className="text-[10px] text-slate-500">HSN auto-coded parts + labour split</div>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-bold">100% Tax OK</span>
                      </div>

                      <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 font-bold text-sm flex items-center justify-center border border-emerald-200">3</div>
                          <div>
                            <div className="font-bold text-slate-900 text-xs">Dynamic UPI Settlement</div>
                            <div className="text-[10px] text-slate-500">Direct credit to your current account</div>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-bold">0% Fee</span>
                      </div>

                      <div className="pt-1">
                        <a
                          href="#pricing"
                          className="w-full py-2.5 rounded-lg text-xs font-bold bg-red-600 hover:bg-red-700 text-white transition-all flex items-center justify-center gap-2 active:scale-95 shadow-md shadow-red-600/20"
                        >
                          <span>Launch Your 14-Day Free Trial</span>
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                        </a>
                      </div>
                    </div>

                    <div className="px-4 py-2.5 bg-white border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                        Cloud synced in 0.2s
                      </span>
                      <span className="font-mono text-slate-700 font-medium">Offline Fallback Ready</span>
                    </div>
                  </div>

                  <div className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white border border-red-300 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
                    <span className="text-[11px] font-bold text-slate-800">
                      <strong className="text-red-600 font-mono">3-Second</strong> Instant Clarity
                    </span>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Bottom Controls */}
          <div className="mt-8 flex items-center justify-between pt-4 border-t border-slate-200">
            <div className="flex items-center gap-3">
              <button
                onClick={prevHeroSlide}
                aria-label="Previous Slide"
                className="w-9 h-9 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-all active:scale-95 shadow-xs"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"/></svg>
              </button>
              <button
                onClick={nextHeroSlide}
                aria-label="Next Slide"
                className="w-9 h-9 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-all active:scale-95 shadow-xs"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/></svg>
              </button>
              <button
                onClick={() => setIsHeroPaused(!isHeroPaused)}
                className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-300 text-[10px] font-mono text-slate-600 hover:text-slate-900 flex items-center gap-1.5 transition-all shadow-xs"
              >
                <span className={`w-1.5 h-1.5 rounded-full ${isHeroPaused ? 'bg-amber-500' : 'bg-emerald-600'}`} />
                <span>{isHeroPaused ? 'Autoscroll PAUSED' : 'Autoscroll ON'}</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              {[0, 1, 2, 3].map((idx) => (
                <button
                  key={idx}
                  onClick={() => selectHeroSlide(idx)}
                  className={`h-1.5 rounded-full transition-all ${heroSlide === idx ? 'w-7 bg-red-600' : 'w-2 bg-slate-300'}`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-24 border-t border-slate-200 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs font-bold tracking-widest text-red-600 uppercase">Engineered for Automotive Profitability</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Everything You Need to Run & Scale Your Workshop
            </p>
            <p className="text-slate-600 text-base">
              No generic spreadsheets. VahanCRM gives you specialized automotive workflows built around real Indian workshop operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Pillar 1 */}
            <div id="inspection" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600">
                  <CarIcon />
                </div>
                <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-red-50 text-red-700 border border-red-200">
                  Zero Customer Disputes
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900">Digital Vehicle Scratch Inspection</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Never pay for a customer's pre-existing dent or scratch again. Your floor technician taps the car diagram to mark existing scratches, snaps photos, and the customer automatically signs the inspection slip via WhatsApp before washing starts.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-mono text-slate-900 font-semibold">Hyundai Creta SX (MH 12 AB 9981)</span>
                  <span className="text-amber-700 font-mono">3 Dents Logged (Tap a dot)</span>
                </div>
                
                <div className="relative bg-white rounded-lg p-5 border border-slate-200 flex items-center justify-center">
                  <div className="relative w-56 h-28 border-2 border-dashed border-slate-300 rounded-2xl flex items-center justify-center bg-slate-50/50">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest">Top-Down Car Outline</span>
                    <button
                      onClick={() => setSelectedDamage({ title: 'Front Bumper Scuff', desc: 'Minor clearcoat abrasion from kerb hit. 2 photos attached.' })}
                      className="absolute -top-2 left-6 w-6 h-6 rounded-full bg-amber-500 text-white font-bold text-xs flex items-center justify-center shadow hover:scale-110 transition-transform active:scale-95"
                      title="Front Bumper Scuff"
                    >
                      !
                    </button>
                    <button
                      onClick={() => setSelectedDamage({ title: 'Rear Left Quarter Dent', desc: '5cm shopping trolley ding near fuel flap.' })}
                      className="absolute bottom-1 right-8 w-6 h-6 rounded-full bg-red-600 text-white font-bold text-xs flex items-center justify-center shadow hover:scale-110 transition-transform active:scale-95"
                      title="Rear Left Dent"
                    >
                      ✕
                    </button>
                    <button
                      onClick={() => setSelectedDamage({ title: 'Driver Door Swirl Cluster', desc: 'Improper microfibre wipe by previous cleaner.' })}
                      className="absolute top-1/2 left-2 -translate-y-1/2 w-6 h-6 rounded-full bg-amber-500 text-white font-bold text-xs flex items-center justify-center shadow hover:scale-110 transition-transform active:scale-95"
                      title="Driver Door Swirls"
                    >
                      !
                    </button>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-700 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-900 block">Selected: {selectedDamage.title}</span>
                    <span className="text-[11px] text-slate-500">{selectedDamage.desc}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold">
                    WA Approved
                  </span>
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div id="whatsapp" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                  <WhatsAppIcon className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                  The Retention Machine
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900">Client 360° Predictive WhatsApp Engine</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Don't wait for car owners to remember to wash their car. VahanCRM automatically identifies clients due for monthly wash (30 days), polish maintenance (90 days), or ceramic coat booster (180 days) and sends polite, 1-click WhatsApp booking links.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-3">
                <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs">
                    WA
                  </div>
                  <div>
                    <span className="font-bold text-xs text-slate-900 block">Sparkle Detailing Studio</span>
                    <span className="text-[10px] text-emerald-700 font-mono">Official WhatsApp Cloud API</span>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-lg border border-slate-200 text-xs space-y-2 shadow-xs">
                  <p className="text-slate-800">
                    Namaste <strong>Vikram ji</strong>! It's been <strong>28 days</strong> since your Safari's Ceramic Booster wash. We have a Sunday 10 AM slot reserved for you with 10% loyalty discount.
                  </p>
                  <div className="pt-1 flex gap-2">
                    <a href={whatsappDemoLink} target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded bg-emerald-600 text-white font-bold text-[11px] hover:bg-emerald-700 transition-colors">
                      Confirm Sunday 10 AM Slot
                    </a>
                  </div>
                </div>

                <div className="text-[11px] text-slate-500 flex items-center justify-between">
                  <span>Automated 28-day trigger</span>
                  <span className="text-emerald-700 font-bold font-mono">34% Return Booking Rate</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* PRICING SECTION: ONE PLAN • EVERYTHING UNLIMITED */}
      <section id="pricing" className="py-24 border-t border-slate-200 bg-slate-50/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-red-700">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
              <span>ONE SIMPLE PLAN • EVERYTHING UNLIMITED</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              One Transparent Plan.<br />
              <span className="text-red-600">
                Unlimited Owners, Branches, Staff & Job Cards.
              </span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-normal">
              No tier restrictions, no per-mechanic fees, no branch limits. Every single feature and module built in VahanCRM is fully unlocked from day one.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-3 pt-4">
              <span
                onClick={() => setBillingCycle('monthly')}
                className={`text-xs font-semibold cursor-pointer ${billingCycle === 'monthly' ? 'text-slate-900 font-bold' : 'text-slate-500'}`}
              >
                Monthly Billing
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="w-12 h-6 rounded-full bg-slate-300 border border-slate-300 p-0.5 transition-colors relative"
                aria-label="Toggle Billing"
              >
                <div className={`w-5 h-5 rounded-full bg-red-600 transition-transform ${billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-0'}`} />
              </button>
              <span
                onClick={() => setBillingCycle('yearly')}
                className={`text-xs font-bold cursor-pointer flex items-center gap-1.5 ${billingCycle === 'yearly' ? 'text-slate-900' : 'text-slate-500'}`}
              >
                Annual Billing
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-300">
                  Save 20% (2 Months Free)
                </span>
              </span>
            </div>
          </div>

          {/* SINGLE PLAN HERO CARD */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative bg-white rounded-3xl p-6 sm:p-10 border-2 border-red-600 shadow-xl">
              
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-red-600 text-white font-extrabold text-[11px] uppercase tracking-wider shadow-md">
                ALL-IN-ONE UNLIMITED WORKSHOP OS
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                <div className="md:col-span-7 space-y-4">
                  <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest block">FULL COMMERCIAL LICENSE</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">VahanCRM Complete Suite</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Everything your 2W, 4W or detailing workshop needs to ditch paper registers, automate customer retention on WhatsApp, track spare parts margin, and run unlimited branches.
                  </p>

                  <div className="grid grid-cols-2 gap-2.5 pt-2">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2">
                      <span className="text-red-600 font-bold text-sm">♾️</span>
                      <div>
                        <div className="text-xs font-bold text-slate-900">Unlimited Branches</div>
                        <div className="text-[10px] text-slate-500">Indiranagar, Whitefield, etc.</div>
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2">
                      <span className="text-red-600 font-bold text-sm">♾️</span>
                      <div>
                        <div className="text-xs font-bold text-slate-900">Unlimited Staff & Techs</div>
                        <div className="text-[10px] text-slate-500">Zero per-user charge</div>
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2">
                      <span className="text-red-600 font-bold text-sm">♾️</span>
                      <div>
                        <div className="text-xs font-bold text-slate-900">Unlimited Job Cards</div>
                        <div className="text-[10px] text-slate-500">No monthly count caps</div>
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2">
                      <span className="text-red-600 font-bold text-sm">♾️</span>
                      <div>
                        <div className="text-xs font-bold text-slate-900">Unlimited Owners & Roles</div>
                        <div className="text-[10px] text-slate-500">Full RBAC security</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center space-y-4">
                  <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider block">ALL MODULES UNLOCKED</span>
                  
                  <div>
                    <div className="flex items-baseline justify-center gap-1.5">
                      <span className="text-5xl font-black font-mono text-slate-900 tracking-tight">
                        {billingCycle === 'yearly' ? '₹9,999' : '₹999'}
                      </span>
                      <span className="text-slate-500 text-sm font-semibold">
                        {billingCycle === 'yearly' ? '/ year' : '/ month'}
                      </span>
                    </div>
                    <div className="text-xs text-emerald-700 font-semibold mt-1">
                      {billingCycle === 'yearly'
                        ? 'Effective ₹833/month • 2 Months Free (Save 20%)'
                        : 'Billed monthly at ₹999/mo • Cancel anytime'}
                    </div>
                  </div>

                  <div className="space-y-2.5 pt-2">
                    <a
                      href={whatsappDemoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-3.5 px-4 rounded-xl font-extrabold text-sm text-white bg-red-600 hover:bg-red-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-600/20 active:scale-95"
                    >
                      <span>Start 14-Day Free Trial</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </a>

                    <a
                      href={whatsappDemoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-3 px-4 rounded-xl font-bold text-xs text-emerald-800 bg-emerald-50 border border-emerald-300 hover:bg-emerald-100 transition-all flex items-center justify-center gap-2 active:scale-95"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>

                  <div className="text-[11px] text-slate-500 flex items-center justify-center gap-1.5 pt-1">
                    <span className="text-emerald-600 font-bold">✓</span> No credit card required • Instant setup
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ALL MODULES & FEATURES TABLE */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">All Modules & Features Included in Your Plan</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">Full breakdown of all 18 production modules built into the system. Every capability is 100% unrestricted.</p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden">
              <div className="sm:hidden text-[11px] font-mono text-slate-500 text-right px-4 pt-2">← Swipe table horizontally →</div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[580px]">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 font-mono text-[11px] uppercase tracking-wider">
                      <th className="py-3.5 px-4 sm:px-6">Module & Codebase Route</th>
                      <th className="py-3.5 px-4 sm:px-6">What It Does in Your Workshop</th>
                      <th className="py-3.5 px-4 sm:px-6 text-right">In This Plan</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    
                    {/* Category 1 */}
                    <tr className="bg-slate-50 font-bold text-slate-900 text-xs">
                      <td colSpan={3} className="py-2.5 px-4 sm:px-6 text-red-600 font-mono uppercase tracking-wider">
                        1. Workshop Floor & Operations Modules
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-4 sm:px-6 font-semibold text-slate-900">
                        Job Cards Lifecycle <span className="block text-[10px] font-mono text-slate-400">/job-cards</span>
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-slate-600 text-xs">
                        30-sec vehicle check-in, labor items, spare parts issuance, mechanic allocation, draft &rarr; in-progress &rarr; ready &rarr; delivered pipeline.
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-right font-mono font-bold text-emerald-700">
                        ✓ Unlimited
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-4 sm:px-6 font-semibold text-slate-900">
                        Diagnostics & Scratch Map <span className="block text-[10px] font-mono text-slate-400">/diagnostics</span>
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-slate-600 text-xs">
                        Digital 360° vehicle blueprint, dent & scratch photo inspection, prevents false damage claims with customer sign-off.
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-right font-mono font-bold text-emerald-700">
                        ✓ Unlimited
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-4 sm:px-6 font-semibold text-slate-900">
                        Planner & Calendar <span className="block text-[10px] font-mono text-slate-400">/calendar</span>
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-slate-600 text-xs">
                        Visual day/week bay calendar, service appointment scheduling, technician workload balance.
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-right font-mono font-bold text-emerald-700">
                        ✓ Unlimited
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-4 sm:px-6 font-semibold text-slate-900">
                        Enquiry & Lead Intake <span className="block text-[10px] font-mono text-slate-400">/enquiry</span>
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-slate-600 text-xs">
                        Walk-in lead tracking, customer estimate requests, 1-click conversion from enquiry to active Job Card.
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-right font-mono font-bold text-emerald-700">
                        ✓ Unlimited
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-4 sm:px-6 font-semibold text-slate-900">
                        Garage Map & Bay Floor <span className="block text-[10px] font-mono text-slate-400">/garage-map</span>
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-slate-600 text-xs">
                        Interactive workshop bay layout, vehicle location monitor, floor occupancy timers and bottlenecks.
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-right font-mono font-bold text-emerald-700">
                        ✓ Unlimited
                      </td>
                    </tr>

                    {/* Category 2 */}
                    <tr className="bg-slate-50 font-bold text-slate-900 text-xs">
                      <td colSpan={3} className="py-2.5 px-4 sm:px-6 text-emerald-700 font-mono uppercase tracking-wider">
                        2. Digital Invoicing, Payments & WhatsApp Retention
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-4 sm:px-6 font-semibold text-slate-900">
                        Billing & Dues Ledger <span className="block text-[10px] font-mono text-slate-400">/billing</span>
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-slate-600 text-xs">
                        Professional digital invoices, custom tax rules, partial & split payments (Cash, Card, UPI, Credit), outstanding dues tracking.
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-right font-mono font-bold text-emerald-700">
                        ✓ Unlimited
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-4 sm:px-6 font-semibold text-slate-900">
                        Dynamic UPI Settlement <span className="block text-[10px] font-mono text-slate-400">Instant QR</span>
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-slate-600 text-xs">
                        Generates dynamic UPI QR codes on invoices for instant customer counter payment (PhonePe, GPay, Paytm) with 0% fee.
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-right font-mono font-bold text-emerald-700">
                        ✓ Unlimited
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-4 sm:px-6 font-semibold text-slate-900">
                        Client 360° & WhatsApp Bot <span className="block text-[10px] font-mono text-slate-400">/client-360</span>
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-slate-600 text-xs">
                        Complete vehicle service history, automated service cycle WhatsApp reminders, pickup ready alerts, 1-click dues reminder pings.
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-right font-mono font-bold text-emerald-700">
                        ✓ Unlimited
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-4 sm:px-6 font-semibold text-slate-900">
                        Clients & Vehicle Records <span className="block text-[10px] font-mono text-slate-400">/clients</span>
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-slate-600 text-xs">
                        Customer database, registration plate index, mileage & odometer logs, total lifetime revenue per client.
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-right font-mono font-bold text-emerald-700">
                        ✓ Unlimited
                      </td>
                    </tr>

                    {/* Category 3 */}
                    <tr className="bg-slate-50 font-bold text-slate-900 text-xs">
                      <td colSpan={3} className="py-2.5 px-4 sm:px-6 text-amber-700 font-mono uppercase tracking-wider">
                        3. Inventory, Parts Stock & Vendor Procurement
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-4 sm:px-6 font-semibold text-slate-900">
                        Inventory & Parts Stock <span className="block text-[10px] font-mono text-slate-400">/inventory</span>
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-slate-600 text-xs">
                        Real-time stock deduction when job cards are billed, minimum stock reorder alerts, parts margin tracker.
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-right font-mono font-bold text-emerald-700">
                        ✓ Unlimited
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-4 sm:px-6 font-semibold text-slate-900">
                        Service Catalog & Packages <span className="block text-[10px] font-mono text-slate-400">/products</span>
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-slate-600 text-xs">
                        Custom labor charges, wash packages, ceramic & PPF pricing tiers, parts catalog with MRP & purchase cost.
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-right font-mono font-bold text-emerald-700">
                        ✓ Unlimited
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-4 sm:px-6 font-semibold text-slate-900">
                        Vendors & Purchase Orders <span className="block text-[10px] font-mono text-slate-400">/vendors</span>
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-slate-600 text-xs">
                        Parts suppliers directory, purchase orders, vendor invoices, supplier credit balances.
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-right font-mono font-bold text-emerald-700">
                        ✓ Unlimited
                      </td>
                    </tr>

                    {/* Category 4 */}
                    <tr className="bg-slate-50 font-bold text-slate-900 text-xs">
                      <td colSpan={3} className="py-2.5 px-4 sm:px-6 text-blue-700 font-mono uppercase tracking-wider">
                        4. Enterprise Multi-Branch, Staff RBAC & Financial Reports
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-4 sm:px-6 font-semibold text-slate-900">
                        All Branches & Switcher <span className="block text-[10px] font-mono text-slate-400">/branches</span>
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-slate-600 text-xs">
                        Create unlimited workshop locations; switch branches in 1-click; branch-scoped inventory and invoicing.
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-right font-mono font-bold text-emerald-700">
                        ✓ Unlimited Branches
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-4 sm:px-6 font-semibold text-slate-900">
                        Staff & Mechanics RBAC <span className="block text-[10px] font-mono text-slate-400">/users</span>
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-slate-600 text-xs">
                        Unlimited staff logins, role-based security (Owner, Manager, Technician), commission tracking, theft prevention.
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-right font-mono font-bold text-emerald-700">
                        ✓ Unlimited Staff
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-4 sm:px-6 font-semibold text-slate-900">
                        Expenses & Daily Petty Cash <span className="block text-[10px] font-mono text-slate-400">/expenses</span>
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-slate-600 text-xs">
                        Workshop rent, electricity, technician advances, tea/snacks, daily cash drawer reconciliation.
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-right font-mono font-bold text-emerald-700">
                        ✓ Unlimited
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-4 sm:px-6 font-semibold text-slate-900">
                        Reports & Tax Analytics <span className="block text-[10px] font-mono text-slate-400">/reports</span>
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-slate-600 text-xs">
                        Gross revenue, parts profit margins, labor earnings, sales ledger export for your CA / Tally in 1-click.
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-right font-mono font-bold text-emerald-700">
                        ✓ Unlimited
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-4 sm:px-6 font-semibold text-slate-900">
                        2W, 4W & EV Master DB <span className="block text-[10px] font-mono text-slate-400">/settings/vehicle-makes</span>
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-slate-600 text-xs">
                        Preloaded Indian database of vehicle makes & models (Maruti, Hyundai, Tata, Mahindra, Royal Enfield, Honda, etc.).
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-right font-mono font-bold text-emerald-700">
                        ✓ Unlimited
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-4 sm:px-6 font-semibold text-slate-900">
                        Connectors & CCTV Sync <span className="block text-[10px] font-mono text-slate-400">/settings/connectors</span>
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-slate-600 text-xs">
                        Official WhatsApp Cloud API connector, bay CCTV camera live stream integration, SMS gateway fallback.
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-right font-mono font-bold text-emerald-700">
                        ✓ Unlimited
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
              <div className="p-4 bg-slate-50 border-t border-slate-200 text-center text-xs text-slate-500">
                Everything above is included in the <strong className="text-slate-900">₹999/mo or ₹9,999/yr plan</strong>. Zero hidden add-on charges.
              </div>
            </div>
          </div>

        </div>
      </section>

                  {/* AUTHENTIC AUTOMOTIVE AI INTELLIGENCE & HARDWARE STACK */}
      <section id="integrations-ai" className="py-24 border-t border-slate-200 bg-slate-50/70 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-white text-slate-800 border border-slate-200 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span>AUTOMOTIVE INTELLIGENCE &amp; WORKSHOP STACK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Software That Fits Your Workshop Floor.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              From 0.5-second number plate lookups and walkaround scratch scanning to 1-click Tally ledger sync and automated multilingual voice alerts. Built for how Indian garages actually operate.
            </p>
          </div>

          {/* PART 1: ASYMMETRIC AI OPERATIONS CONSOLE (7 COLS VS 5 COLS) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            
            {/* Left: Live Camera Viewfinder (ANPR Plate + Vision Scratch HUD) */}
            <div className="lg:col-span-7 bg-slate-900 text-white rounded-3xl p-6 sm:p-7 border border-slate-800 shadow-2xl flex flex-col justify-between relative overflow-hidden">
              
              {/* Subtle Top Ambient Glow */}
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-6 relative z-10">
                {/* Viewfinder Header Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono font-bold tracking-wider text-slate-200 uppercase">
                      INTAKE CAMERA HUD • 0.5s ANPR &amp; VISION AI
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-red-600/30 text-red-300 border border-red-500/40">
                    ACTIVE VIEWPORT
                  </span>
                </div>

                {/* Viewfinder Main Display Area */}
                <div className="bg-slate-950/80 rounded-2xl p-5 border border-slate-800/80 relative">
                  
                  {/* Camera Corner Brackets */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-slate-500" />
                  <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-slate-500" />
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-slate-500" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-slate-500" />

                  {/* Top: Number Plate Scanner Simulation */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800/60">
                    <div className="flex items-center gap-3">
                      {/* Indian Number Plate Graphic */}
                      <div className="bg-white text-slate-900 border-2 border-slate-800 rounded px-2.5 py-1 font-mono font-extrabold text-sm sm:text-base tracking-widest flex items-center gap-1.5 shadow-inner">
                        <span className="text-[9px] bg-blue-700 text-white px-1 py-0.5 rounded font-black">IND</span>
                        <span>HR 26 DQ 5541</span>
                      </div>
                      <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-500/40 px-2 py-0.5 rounded">
                        ✓ Vahan API Decoded (0.42s)
                      </span>
                    </div>
                    <div className="text-[11px] font-mono text-slate-400">
                      RTO: Gurgaon North (HR)
                    </div>
                  </div>

                  {/* Middle: Vehicle Auto-Populated Spec Strip */}
                  <div className="py-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs font-mono">
                    <div className="bg-slate-900/90 rounded-lg p-2 border border-slate-800">
                      <span className="text-[10px] text-slate-400 block">MAKE &amp; MODEL</span>
                      <strong className="text-white text-xs truncate block">Hyundai Creta</strong>
                    </div>
                    <div className="bg-slate-900/90 rounded-lg p-2 border border-slate-800">
                      <span className="text-[10px] text-slate-400 block">VARIANT</span>
                      <strong className="text-white text-xs truncate block">1.5 SX(O) CRDi</strong>
                    </div>
                    <div className="bg-slate-900/90 rounded-lg p-2 border border-slate-800">
                      <span className="text-[10px] text-slate-400 block">FUEL &amp; YEAR</span>
                      <strong className="text-white text-xs truncate block">Diesel • 2023</strong>
                    </div>
                    <div className="bg-slate-900/90 rounded-lg p-2 border border-slate-800">
                      <span className="text-[10px] text-slate-400 block">INSURANCE</span>
                      <strong className="text-emerald-400 text-xs truncate block">Active (HDFC Ergo)</strong>
                    </div>
                  </div>

                  {/* Bottom: Vision AI Damage Detection HUD Tags */}
                  <div className="pt-3 border-t border-slate-800/60 space-y-2">
                    <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between">
                      <span>360° WALKAROUND DAMAGE SCAN</span>
                      <span className="text-red-400 font-bold">2 Pre-Existing Flaws Tagged</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div className="bg-red-950/50 border border-red-500/40 rounded-lg p-2.5 flex items-start gap-2 text-red-200">
                        <span className="text-red-400 font-bold text-sm leading-none">●</span>
                        <div>
                          <div className="font-bold text-[11px]">Front Bumper Lower Lip</div>
                          <div className="text-[10px] text-slate-300">Surface stone scuff (14mm) • Photos saved to Job Card</div>
                        </div>
                      </div>
                      <div className="bg-amber-950/50 border border-amber-500/40 rounded-lg p-2.5 flex items-start gap-2 text-amber-200">
                        <span className="text-amber-400 font-bold text-sm leading-none">●</span>
                        <div>
                          <div className="font-bold text-[11px]">Left Rear Door Panel</div>
                          <div className="text-[10px] text-slate-300">Minor parking ding (2mm) • Customer signature captured</div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Card Bottom Result Bar */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Floor supervisor takes 4 photos. Body map &amp; specs auto-populate in 20s.</span>
                </span>
                <strong className="text-white font-mono uppercase tracking-wider text-[11px]">
                  Zero Damage Claims
                </strong>
              </div>

            </div>

            {/* Right Column: 2 Distinct High-Impact Cards (5 cols) */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
              
              {/* Card A: Predictive Service & Bay Balancing Timeline */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 font-bold">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      </div>
                      <div>
                        <h3 className="font-extrabold text-slate-900 text-sm">Predictive Bay Scheduler</h3>
                        <span className="text-[10px] font-mono text-slate-400 block -mt-0.5">MACHINE LEARNING CYCLE ENGINE</span>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-purple-100 text-purple-800">
                      +34% Retention
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    Calculates daily mileage wear and seasonal spikes. Fills empty service bays on slow weekdays before customers drift to competitors.
                  </p>

                  {/* Graphical Mini Timeline */}
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 space-y-2 text-xs font-mono">
                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                      <span>Maruti Brezza (DL 01 AB 4092)</span>
                      <span className="text-purple-700 font-bold">Odo: 29,800 km</span>
                    </div>
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-purple-600 h-full rounded-full" style={{ width: '88%' }} />
                    </div>
                    <div className="flex items-center justify-between text-[10px] pt-1">
                      <span className="text-slate-500">Major 30K Service Due: <strong className="text-slate-800">In 5 Days</strong></span>
                      <span className="text-emerald-700 font-bold">Auto WhatsApp Sent</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Outcome</span>
                  <strong className="text-slate-900 font-medium">Bays booked 4 days in advance</strong>
                </div>
              </div>

              {/* Card B: Multilingual AI Voice Assistant (Audio Player UI) */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 font-bold">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      </div>
                      <div>
                        <h3 className="font-extrabold text-slate-900 text-sm">Multilingual Voice Agent</h3>
                        <span className="text-[10px] font-mono text-slate-400 block -mt-0.5">HUMAN-SOUNDING AI CALLS</span>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800">
                      6 Languages
                    </span>
                  </div>

                  {/* Audio Call Dialogue Box */}
                  <div className="bg-slate-900 text-slate-200 rounded-xl p-3 space-y-2 text-xs">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Outgoing: Vehicle Ready Alert</span>
                      </span>
                      <span>00:18 / 00:34</span>
                    </div>
                    {/* Simulated Voice Waveform */}
                    <div className="flex items-center gap-1 h-5 py-1">
                      <span className="w-1 bg-emerald-400 h-2 rounded-full animate-pulse" />
                      <span className="w-1 bg-emerald-400 h-4 rounded-full" />
                      <span className="w-1 bg-emerald-400 h-5 rounded-full animate-pulse" />
                      <span className="w-1 bg-emerald-400 h-3 rounded-full" />
                      <span className="w-1 bg-emerald-400 h-4 rounded-full" />
                      <span className="w-1 bg-emerald-400 h-2 rounded-full" />
                      <span className="w-1 bg-emerald-400 h-5 rounded-full" />
                      <span className="w-1 bg-emerald-400 h-3 rounded-full" />
                      <span className="w-1 bg-emerald-400 h-4 rounded-full" />
                      <span className="w-1 bg-emerald-400 h-2 rounded-full" />
                      <span className="w-1 bg-emerald-400 h-4 rounded-full" />
                      <span className="w-1 bg-emerald-400 h-5 rounded-full animate-pulse" />
                      <span className="w-1 bg-emerald-400 h-3 rounded-full" />
                      <span className="w-1 bg-emerald-400 h-1 rounded-full" />
                    </div>
                    <p className="text-[11px] text-slate-300 italic leading-snug">
                      "Namaste Sharma ji! Aapki Creta Bay 3 me ready ho gayi hai. Total bill ₹4,850 WhatsApp par bhej diya gaya hai."
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Coverage</span>
                  <strong className="text-slate-900 font-medium">Hindi, Hinglish, Tamil, Telugu, Marathi</strong>
                </div>
              </div>

            </div>

          </div>

          {/* PART 2: CONNECTED HARDWARE & FINANCIAL PIPELINE (3 DISTINCT CARDS) */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-3 border-b border-slate-200">
              <div>
                <span className="text-xs font-mono font-extrabold text-slate-500 uppercase tracking-wider block">REAL WORKSHOP STACK</span>
                <h3 className="text-xl font-extrabold text-slate-900">Connected Hardware &amp; Accounting Tools</h3>
              </div>
              <span className="text-xs text-slate-500 font-mono">Zero Custom APIs • Works Day One</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Hardware Card 1: Tally & Accounting */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md space-y-4 hover:border-slate-300 transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-orange-600 uppercase">1-CLICK CA EXPORT</span>
                  <div className="flex gap-1.5">
                    <span className="px-2 py-0.5 rounded text-[10px] font-black bg-orange-100 text-orange-800">TallyPrime</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-black bg-blue-100 text-blue-800">Zoho</span>
                  </div>
                </div>

                {/* Visual Tally XML Export Card */}
                <div className="bg-slate-900 text-slate-200 rounded-xl p-3.5 space-y-2 text-xs font-mono">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1.5 border-b border-slate-800">
                    <span>EXPORT_TALLY_SALES.XML</span>
                    <span className="text-emerald-400">READY</span>
                  </div>
                  <div className="space-y-1 text-[11px]">
                    <div className="text-slate-300">• 54 Daily Job Invoices</div>
                    <div className="text-slate-300">• HSN 8708 Spares &amp; SAC 9987 Labor</div>
                    <div className="text-emerald-400 font-bold">• 100% Daily Accounts &amp; Ledger Reconciled</div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  No manual double-entry. Your accountant downloads the XML or Excel batch once a week and imports directly into Tally.
                </p>
              </div>

              {/* Hardware Card 2: Dynamic NPCI UPI QR */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md space-y-4 hover:border-slate-300 transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase">AMOUNT-LOCKED UPI QR</span>
                  <div className="flex gap-1.5">
                    <span className="px-2 py-0.5 rounded text-[10px] font-black bg-slate-900 text-white">NPCI</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-black bg-indigo-100 text-indigo-800">PhonePe</span>
                  </div>
                </div>

                {/* Visual Dynamic QR Snippet */}
                <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200 flex items-center justify-between gap-3 text-xs">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-slate-400 block">DYNAMIC COUNTER QR</span>
                    <div className="text-base font-black text-slate-900">₹3,450.00</div>
                    <div className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded inline-block">
                      ✓ Instant Webhook Settle
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-white border border-slate-300 rounded-lg p-1.5 flex flex-col items-center justify-center shadow-xs">
                    <div className="grid grid-cols-3 gap-0.5 w-full h-full">
                      <span className="bg-slate-900 rounded-xs" /><span className="bg-slate-900 rounded-xs" /><span className="bg-slate-300 rounded-xs" />
                      <span className="bg-slate-300 rounded-xs" /><span className="bg-red-600 rounded-xs" /><span className="bg-slate-900 rounded-xs" />
                      <span className="bg-slate-900 rounded-xs" /><span className="bg-slate-300 rounded-xs" /><span className="bg-slate-900 rounded-xs" />
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Customer scans at counter or on WhatsApp. Exact amount is locked. Payment verified in 2 seconds; gate pass auto-unlocks.
                </p>
              </div>

              {/* Hardware Card 3: Bay CCTV & Bluetooth Thermal Printer */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md space-y-4 hover:border-slate-300 transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-slate-800 uppercase">CCTV &amp; THERMAL PRINT</span>
                  <div className="flex gap-1.5">
                    <span className="px-2 py-0.5 rounded text-[10px] font-black bg-slate-800 text-white">RTSP CCTV</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-black bg-slate-100 text-slate-800">58mm ESC/POS</span>
                  </div>
                </div>

                {/* Visual Bay Cam + Receipt Snippet */}
                <div className="bg-slate-900 text-slate-200 rounded-xl p-3.5 space-y-2 text-xs font-mono">
                  <div className="flex items-center justify-between text-[10px] text-slate-400 pb-1 border-b border-slate-800">
                    <span className="flex items-center gap-1 text-red-400">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      <span>LIVE - BAY 2 (HYDRAULIC LIFT)</span>
                    </span>
                    <span>CP PLUS RTSP</span>
                  </div>
                  <div className="bg-white text-slate-900 p-2 rounded text-[10px] font-mono leading-tight space-y-0.5 shadow-inner">
                    <div className="font-bold border-b border-slate-200 pb-0.5">VAHAN WORKSHOP • GATE PASS #419</div>
                    <div>Hyundai Creta (HR26...) • Paid: ₹3,450</div>
                    <div className="text-[9px] text-slate-500">Printed via Bluetooth in 2s</div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Connect existing IP cameras to watch bays live. Print 58mm/80mm key tags and exit passes wirelessly from any budget phone.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* FAQ SECTION */}
      <section id="faq" className="py-24 border-t border-slate-200 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-xs font-bold tracking-widest text-red-600 uppercase">Frequently Asked Questions</h2>
            <p className="text-3xl font-extrabold text-slate-900">
              Straight Answers. No Jargon.
            </p>
          </div>

          <div className="space-y-4">
            
            <details className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs group" open>
              <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer flex justify-between items-center list-none select-none">
                <span>Do my washers and floor staff need to download an app from Google Play Store?</span>
                <span className="text-red-600 group-open:rotate-180 transition-transform duration-200 font-bold">&darr;</span>
              </summary>
              <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed border-t border-slate-100 pt-3">
                No! VahanCRM runs as a responsive progressive web app on any mobile phone, tablet, or desktop browser. Your staff doesn't need to install anything or manage app updates. Even on budget Android phones, vehicle check-in takes less than 20 seconds.
              </p>
            </details>

            <details className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs group">
              <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer flex justify-between items-center list-none select-none">
                <span>Do car owners need to download an app to receive bills or inspection reports?</span>
                <span className="text-red-600 group-open:rotate-180 transition-transform duration-200 font-bold">&darr;</span>
              </summary>
              <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed border-t border-slate-100 pt-3">
                Zero app downloads for car owners. Everything is delivered natively through official WhatsApp: vehicle ready notifications, before/after scratch inspection photos, digital tax invoices, and 1-click UPI payment links.
              </p>
            </details>

            <details className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs group">
              <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer flex justify-between items-center list-none select-none">
                <span>Can floor staff delete or edit invoices to steal cash?</span>
                <span className="text-red-600 group-open:rotate-180 transition-transform duration-200 font-bold">&darr;</span>
              </summary>
              <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed border-t border-slate-100 pt-3">
                No. VahanCRM has strict role-based access control (RBAC). Floor staff and mechanics can only create job cards and collect recorded payments. Once a job card is billed, only the business owner (with password verification) can edit, discount, or void invoices. You get an immutable audit trail of every rupee.
              </p>
            </details>

            <details className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs group">
              <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer flex justify-between items-center list-none select-none">
                <span>What hardware do I need to get started?</span>
                <span className="text-red-600 group-open:rotate-180 transition-transform duration-200 font-bold">&darr;</span>
              </summary>
              <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed border-t border-slate-100 pt-3">
                You don't need expensive POS terminals. A simple ₹8,000 Android phone or ₹12,000 tablet on the workshop floor, plus an optional standard Bluetooth thermal printer (₹2,500) for gate passes or any standard desktop printer for customer bills is all you need.
              </p>
            </details>

            <details className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs group">
              <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer flex justify-between items-center list-none select-none">
                <span>Is there a setup fee or lock-in contract?</span>
                <span className="text-red-600 group-open:rotate-180 transition-transform duration-200 font-bold">&darr;</span>
              </summary>
              <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed border-t border-slate-100 pt-3">
                ₹0 setup fee and zero lock-in contract. You get a full 14-day free trial with personal WhatsApp onboarding. If you choose the ₹999 monthly plan, you can cancel anytime with 1 click. If you choose the ₹9,999 annual plan, you save ₹2,000 upfront.
              </p>
            </details>

          </div>
        </div>
      </section>

      {/* HIGH-CONVERTING PRE-FOOTER CTA BANNER */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-3xl p-6 sm:p-12 lg:p-16 border border-slate-800 shadow-2xl relative overflow-hidden">
            
            {/* Subtle Ambient Glow */}
            <div className="absolute -right-24 -top-24 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-red-500/10 text-red-400 border border-red-500/20">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span>GET STARTED IN 30 SECONDS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Stop Losing ₹40,000+ Every Month to Missing Parts and Unbilled Labor.
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Upgrade your workshop to VahanCRM today. Everything is unlimited—branches, staff logins, job cards, and vehicle records—for just ₹999/month.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a href="#pricing" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/30 transition-all active:scale-95 text-center">
                  <span>Start 14-Day Free Trial</span>
                  <span className="font-mono text-xs opacity-90">&rarr;</span>
                </a>
                <a href={whatsappDemoLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 hover:bg-emerald-900/50 transition-all text-center">
                  <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                  <span>Talk to Workshop Expert</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-2 font-mono">
                <span className="flex items-center gap-1.5"><span className="text-emerald-400">✓</span> No credit card required</span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1.5"><span className="text-emerald-400">✓</span> Instant WhatsApp onboarding</span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1.5"><span className="text-emerald-400">✓</span> 100% Indian Data Sovereignty</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* REDESIGNED HIGH-AUTHORITY ENTERPRISE FOOTER */}
            {/* CLEAN & MINIMAL FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-10 border-t border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Row: Logo, Nav, WhatsApp CTA */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
            
            {/* Brand */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-red-600 p-0.5 flex items-center justify-center shadow-md shadow-red-600/20">
                <div className="w-full h-full bg-white rounded-[7px] flex items-center justify-center">
                  <CarIcon />
                </div>
              </div>
              <div>
                <span className="text-base font-extrabold text-white tracking-tight flex items-center gap-1">
                  Vahan<span className="text-red-500">CRM</span>
                </span>
                <span className="text-[9px] uppercase tracking-wider text-slate-400 block -mt-0.5">
                  Workshop Revenue OS • India
                </span>
              </div>
            </div>

            {/* Quick Nav Links */}
            <nav aria-label="Footer Navigation" className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-300">
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#integrations-ai" className="hover:text-white transition-colors">Integrations &amp; AI</a>
              <a href="#pricing" className="hover:text-white transition-colors">Pricing (₹999/mo)</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              <a href="mailto:support@vahandesk.in" className="hover:text-white transition-colors">support@vahandesk.in</a>
            </nav>

            {/* WhatsApp Support Link */}
            <a
              href={whatsappDemoLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-500/30 hover:bg-emerald-900/50 transition-all shadow-xs"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
              <span>Chat on WhatsApp</span>
            </a>

          </div>

          {/* Bottom Row: Copyright, Legal & Indian Compliance */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
            <div className="flex items-center gap-2">
              <span>&copy; 2026 VahanCRM Technologies Pvt. Ltd.</span>
              <span className="text-slate-700">•</span>
              <span>100% DPDPA 2023 Compliant</span>
              <span className="text-slate-700">•</span>
              <span>AWS Mumbai (ap-south-1)</span>
            </div>
            <div className="flex items-center gap-6">
              <button onClick={() => openLegalModal("privacy")} className="hover:text-slate-300 transition-colors cursor-pointer bg-transparent border-0 p-0 text-[11px] text-slate-500">Privacy Policy</button>
              <button onClick={() => openLegalModal("terms")} className="hover:text-slate-300 transition-colors cursor-pointer bg-transparent border-0 p-0 text-[11px] text-slate-500">Terms of Service</button>
              <button onClick={() => openLegalModal("dpdpa")} className="hover:text-slate-300 transition-colors cursor-pointer bg-transparent border-0 p-0 text-[11px] text-slate-500">DPDPA Compliance</button>
            </div>
          </div>

        </div>
      </footer>

    
      {/* ========================================== */}
      {/* DPDPA 2023 PRIVACY & LEGAL MODAL DIALOG   */}
      {/* ========================================== */}
      {legalModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10" role="dialog" aria-modal="true">
          <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity" onClick={() => setLegalModalOpen(false)} />
          <div className="relative z-10 w-full max-w-4xl max-h-[90vh] flex flex-col bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/90">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-red-600/10 border border-red-600/20 flex items-center justify-center text-red-600 font-black text-sm">
                  §
                </div>
                <div>
                  <h2 className="text-lg font-extrabold text-slate-900 tracking-tight leading-tight">
                    Legal &amp; Statutory Documentation
                  </h2>
                  <p className="text-xs text-slate-500 font-mono">
                    Compliant with Digital Personal Data Protection Act (DPDPA) 2023 &amp; DPDP Rules 2025
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setLegalModalOpen(false)}
                className="w-8 h-8 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 flex items-center justify-center transition-colors"
                aria-label="Close dialog"
              >
                ✕
              </button>
            </div>

            <div className="flex border-b border-slate-200 bg-white px-6 pt-2 gap-2 text-xs font-bold overflow-x-auto">
              <button
                onClick={() => setLegalModalTab('privacy')}
                className={`px-4 py-2.5 border-b-2 whitespace-nowrap transition-colors ${legalModalTab === 'privacy' ? 'border-red-600 text-red-600 font-bold' : 'border-transparent text-slate-600 hover:text-slate-900 font-medium'}`}
              >
                Privacy Policy (DPDPA 2023)
              </button>
              <button
                onClick={() => setLegalModalTab('terms')}
                className={`px-4 py-2.5 border-b-2 whitespace-nowrap transition-colors ${legalModalTab === 'terms' ? 'border-red-600 text-red-600 font-bold' : 'border-transparent text-slate-600 hover:text-slate-900 font-medium'}`}
              >
                Terms of Service
              </button>
              <button
                onClick={() => setLegalModalTab('dpdpa')}
                className={`px-4 py-2.5 border-b-2 whitespace-nowrap transition-colors ${legalModalTab === 'dpdpa' ? 'border-red-600 text-red-600 font-bold' : 'border-transparent text-slate-600 hover:text-slate-900 font-medium'}`}
              >
                DPDPA 2023 Statutory Readiness
              </button>
            </div>

            <div className="overflow-y-auto px-6 py-6 text-sm text-slate-700 space-y-6 leading-relaxed max-h-[60vh] divide-y divide-slate-100">
              {legalModalTab === 'privacy' && (
                <div className="space-y-5">
                  <div className="bg-emerald-50 border border-emerald-200/70 rounded-xl p-4 text-xs text-emerald-900 flex items-start gap-3">
                    <div>
                      <p className="font-bold">Indian Statutory Notice under Section 5, Digital Personal Data Protection Act, 2023</p>
                      <p className="mt-0.5 text-emerald-800">This Privacy Policy informs Data Principals of the specific personal data collected, lawful processing purposes, storage limits, and legal redressal channels.</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">1. Identity of Data Fiduciary &amp; Data Processor</h3>
                    <p><strong>VahanCRM Technologies Pvt. Ltd.</strong> acts as a Data Fiduciary regarding user accounts, and operates as a Data Processor on behalf of partner automobile workshops operating digital job cards.</p>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">2. Categories of Personal Data Collected</h3>
                    <p>We process only minimal digital personal data strictly required to fulfill automotive repair, service tracking, and delivery notifications:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-slate-600 pl-2">
                      <li><strong>Contact Identifiers:</strong> Customer full name, phone number (WhatsApp-enabled), and optional email.</li>
                      <li><strong>Vehicle Registry Telematics:</strong> Vehicle Registration Number (VRN), Make, Model, Fuel Type, and Odometer reading.</li>
                      <li><strong>Visual Inspection Records:</strong> Timestamped 360° intake walkaround photographs highlighting pre-existing scratches and dents.</li>
                      <li><strong>Commercial Records:</strong> Itemized parts list, labor charges, billing amounts, and UPI transaction reference IDs.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">3. Statutory Rights of the Data Principal</h3>
                    <p>Under Chapter III (Sections 11–14) of DPDPA 2023, you hold rights to Access Summary of personal data, Correction &amp; Erasure, Withdrawal of consent via WhatsApp <strong>"STOP"</strong>, and Nomination.</p>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">4. 100% Indian Data Sovereignty</h3>
                    <p>100% of VahanCRM databases and vehicle intake logs are hosted locally within India on AWS Mumbai region (<code>ap-south-1</code>) with AES-256 GCM encryption at rest.</p>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">5. Data Protection Officer (DPO)</h3>
                    <p>Designated Officer: Murali D (privacy@vahancrm.in • +91 97913 88549). Statutory resolution timeframe: within 7 working days.</p>
                  </div>
                </div>
              )}

              {legalModalTab === 'terms' && (
                <div className="space-y-5 pt-2">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">1. Workshop SaaS Subscription</h3>
                    <p>VahanCRM provides a specialized cloud Workshop Operating System billed at the agreed flat rate (₹999/month or ₹9,999/year) without per-job-card surcharges.</p>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">2. Data Ownership &amp; Privacy</h3>
                    <p>All job cards, customer phone lists, parts stock ledgers, and vehicle scratch photographs recorded by the workshop remain the exclusive property of the workshop. VahanCRM never sells or monetizes your garage database.</p>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">3. 99.98% Uptime SLA</h3>
                    <p>We commit to 99.98% platform availability with maintenance scheduled outside active Indian garage hours.</p>
                  </div>
                </div>
              )}

              {legalModalTab === 'dpdpa' && (
                <div className="space-y-5 pt-2">
                  <div className="border-l-4 border-red-600 bg-red-50/60 p-4 rounded-r-xl text-xs text-red-950">
                    <p className="font-bold text-sm text-red-900 mb-1">DPDPA 2023 Statutory Readiness</p>
                    <p>VahanCRM is architected around the statutory mandates of the Digital Personal Data Protection Act, 2023 and DPDP Rules, 2025. Every workshop using our system automatically complies with Indian customer data protection guidelines.</p>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-xl border border-slate-200 bg-white">
                      <h4 className="font-bold text-slate-900 text-xs">• Section 5 Notice Compliance</h4>
                      <p className="text-xs text-slate-600 mt-1">Unambiguous, itemized service notices detailing why customer phone numbers and vehicle photos were registered, along with an instant opt-out toggle.</p>
                    </div>
                    <div className="p-3.5 rounded-xl border border-slate-200 bg-white">
                      <h4 className="font-bold text-slate-900 text-xs">• Zero Cross-Garage Data Leakage</h4>
                      <p className="text-xs text-slate-600 mt-1">Multi-tenant isolation ensures customer records registered by one workshop are cryptographically isolated from all others.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-slate-500">
                Official Grievance Desk: <a href="mailto:privacy@vahancrm.in" className="text-red-600 hover:underline font-medium">privacy@vahancrm.in</a> • +91 97913 88549
              </span>
              <button
                type="button"
                onClick={() => setLegalModalOpen(false)}
                className="w-full sm:w-auto px-5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold transition-all"
              >
                I Understand &amp; Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}


import React from 'react';

interface Props { 
  onInitiateStrategy: () => void;
  showBackToSolutions?: boolean;
  onBackToSolutions?: () => void;
}

export const ODC: React.FC<Props> = ({ onInitiateStrategy, showBackToSolutions, onBackToSolutions }) => {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative h-[60vh] flex items-center bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000" className="w-full h-full object-cover" />
        </div>

        {showBackToSolutions && (
          <button 
            onClick={onBackToSolutions}
            className="absolute top-28 left-6 md:left-10 z-50 flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white transition-all group"
          >
            <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Solutions
          </button>
        )}

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="accent-bar bg-[#4918A9] w-24 mb-10"></div>
          <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-6">
            Offshore Dev<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D9D1DB] to-[#4918A9]">Centers (ODC)</span>
          </h1>
          <p className="text-xl text-gray-400 font-light max-w-2xl leading-relaxed">
            Global talent, centralized control. We build and manage dedicated innovation hubs tailored to your technical roadmap.
          </p>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 border border-gray-100">
            {[
              { title: 'Talent Acquisition', desc: 'Direct access to top-tier engineering talent globally.' },
              { title: 'Cultural Sync', desc: 'Standardized operational procedures aligned with your brand.' },
              { title: 'Operational Rigor', desc: 'Security, HR, and compliance managed by Antern.' },
              { title: 'Cost Efficiency', desc: 'Optimized resource allocation without compromising quality.' }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-12 hover:bg-gray-50 transition-all">
                <span className="text-[11px] font-black text-[#4918A9] mb-4 block">0{i+1}</span>
                <h3 className="text-xl font-black uppercase mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-sm text-gray-500 font-light">{feature.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-32 p-20 bg-[#1A1A1A] text-white flex flex-col md:flex-row items-center justify-between gap-12">
            <h2 className="text-3xl font-black uppercase tracking-tight">Expand your engineering horizon.</h2>
            <button onClick={onInitiateStrategy} className="px-12 py-5 bg-[#4918A9] text-white font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-[#1A1A1A] transition-all">
              Initiate ODC Discovery
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

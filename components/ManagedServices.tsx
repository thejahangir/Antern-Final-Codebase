
import React from 'react';

interface Props { 
  onInitiateStrategy: () => void;
  showBackToSolutions?: boolean;
  onBackToSolutions?: () => void;
}

export const ManagedServices: React.FC<Props> = ({ onInitiateStrategy, showBackToSolutions, onBackToSolutions }) => {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative h-[60vh] flex items-center bg-[#1A1A1A] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000" className="w-full h-full object-cover" />
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
          <div className="max-w-4xl">
            <div className="accent-bar bg-white w-24 mb-10"></div>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6 text-white">
              Managed<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D9D1DB] to-[#4918A9]">Services</span>
            </h1>
            <p className="text-xl text-gray-400 font-light max-w-3xl leading-relaxed">
              Continuous optimization for mission-critical infrastructure. We handle the complexity so you can focus on innovation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: '24/7 Cognitive Support', desc: 'AI-enhanced monitoring and rapid incident response across your entire stack.' },
              { title: 'Security Patching & Resilience', desc: 'Proactive vulnerability management and continuous zero-trust hardening.' },
              { title: 'Performance Engineering', desc: 'Ongoing tuning of database, cloud, and local resources for peak efficiency.' },
              { title: 'Strategic Roadmap Sync', desc: 'Regular reviews to ensure your managed stack aligns with future business goals.' }
            ].map((service, i) => (
              <div key={i} className="flex gap-8 p-12 bg-white border border-gray-100 hover:shadow-xl transition-all">
                <div className="text-4xl font-black text-[#4918A9]">{i+1}</div>
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4">{service.title}</h3>
                  <p className="text-gray-500 font-light leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-32 text-center">
            <button onClick={onInitiateStrategy} className="px-12 py-6 bg-[#4918A9] text-white font-bold uppercase tracking-widest text-sm hover:bg-[#1A1A1A] transition-all">
              Request Managed Support Proposal
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};


import React from 'react';

interface Props { 
  onInitiateStrategy: () => void; 
  showBackToSolutions?: boolean;
  onBackToSolutions?: () => void;
}

export const OnPremiseDelivery: React.FC<Props> = ({ onInitiateStrategy, showBackToSolutions, onBackToSolutions }) => {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative h-[60vh] flex items-center bg-[#1A1A1A] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40 grayscale">
          <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2000" className="w-full h-full object-cover" />
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
          <div className="accent-bar bg-white w-24 mb-10"></div>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
            On-Premise<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D9D1DB] to-[#4918A9]">Delivery</span>
          </h1>
          <p className="text-xl text-gray-400 font-light max-w-2xl leading-relaxed">
            Ultimate security and performance. We deploy Antern's full intelligence stack within your own secure infrastructure.
          </p>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-8">Air-Gapped Excellence</h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-10">
                For organizations with strict regulatory requirements, we provide end-to-end on-premise installation and maintenance of our proprietary platforms.
              </p>
              <div className="space-y-6">
                {['Hardware Optimization', 'Local Data Sovereignty', 'Dedicated Support Mesh', 'Real-time On-site Updates'].map(item => (
                  <div key={item} className="flex items-center gap-4 py-4 border-b border-gray-100">
                    <div className="w-3 h-3 bg-[#4918A9]"></div>
                    <span className="text-sm font-bold uppercase tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-12 bg-gray-50">
              <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200" className="w-full grayscale" alt="Server Infrastructure" />
            </div>
          </div>
          <div className="mt-32 text-center">
             <button onClick={onInitiateStrategy} className="px-12 py-6 bg-[#1A1A1A] text-white text-[12px] font-black uppercase tracking-[0.4em] hover:bg-[#4918A9] transition-all">
               Request Infrastructure Audit
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};

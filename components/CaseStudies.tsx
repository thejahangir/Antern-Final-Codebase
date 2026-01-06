
import React, { useState, useEffect } from 'react';

export const CaseStudies: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* 1. KINETIC HERO */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center bg-[#0A0A0A] overflow-hidden">
        <div 
          className="absolute -inset-y-24 inset-x-0 z-0 opacity-40 grayscale"
          style={{ transform: `translate3d(0, ${offsetY * 0.15}px, 0)` }}
        >
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Success Metrics"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="accent-bar bg-[#4918A9] w-24 mb-10"></div>
            <span className="text-[12px] font-black uppercase tracking-[0.6em] text-[#D9D1DB] mb-6 block">
              Proven Outcomes
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-8">
              Case<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D9D1DB] to-[#4918A9]">
                Studies
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl leading-relaxed border-l border-[#4918A9] pl-8">
              Real impact, global scale. How Antern partners are redefining their industries through digital excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-20">
            {[
              { client: 'Global Logistics Corp', impact: '+40% Efficiency', title: 'Modernizing Supply Chain with Cognitive Automation', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200' },
              { client: 'FinTech Alpha', impact: 'Zero Breaches', title: 'Implementing Zero-Trust Across a Decentralized Network', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200' },
              { client: 'NexaHealth', impact: '95% UX Satisfaction', title: 'Humanizing High-Stakes Patient Data Management', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200' }
            ].map((study, i) => (
              <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center group">
                <div className={`overflow-hidden ${i % 2 === 1 ? 'lg:order-last' : ''}`}>
                  <img src={study.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={study.title} />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#4918A9] mb-4 block">{study.client}</span>
                  <h3 className="text-4xl font-black uppercase tracking-tight mb-6 leading-tight">{study.title}</h3>
                  <div className="text-2xl font-black text-gray-300 mb-10">{study.impact}</div>
                  <button className="flex items-center gap-4 text-[12px] font-black uppercase tracking-[0.3em] hover:text-[#4918A9] transition-all">
                    Full Analysis <div className="w-12 h-px bg-current"></div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

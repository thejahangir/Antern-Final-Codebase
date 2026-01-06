
import React, { useState, useEffect } from 'react';

export const Whitepapers: React.FC = () => {
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
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Technical Research"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="accent-bar bg-[#4918A9] w-24 mb-10"></div>
            <span className="text-[12px] font-black uppercase tracking-[0.6em] text-[#D9D1DB] mb-6 block">
              Deep Architecture
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-8">
              Technical<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D9D1DB] to-[#4918A9]">
                Whitepapers
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl leading-relaxed border-l border-[#4918A9] pl-8">
              Deep technical deep-dives and strategic frameworks for the next generation of enterprise architecture.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100 border border-gray-100">
            {[
              { title: 'The Ethics of Autonomous UX', desc: 'A framework for human-in-the-loop AI orchestration.' },
              { title: 'Post-Quantum Resilience', desc: 'Preparing infrastructure for next-gen cryptographic challenges.' },
              { title: 'Semantic Matching Engines', desc: 'The math behind ScanJD and the future of talent sourcing.' },
              { title: 'Cloud Mesh Optimization', desc: 'Reducing latency in high-density multi-cloud environments.' }
            ].map((paper, i) => (
              <div key={i} className="bg-white p-16 hover:bg-gray-50 transition-all">
                <h3 className="text-2xl font-black uppercase tracking-tight mb-4 leading-tight">{paper.title}</h3>
                <p className="text-gray-500 font-light mb-12">{paper.desc}</p>
                <button className="px-8 py-4 border border-gray-200 text-[10px] font-black uppercase tracking-widest hover:bg-[#4918A9] hover:text-white transition-all">
                  Access Paper
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

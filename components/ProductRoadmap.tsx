
import React from 'react';

interface Props { onInitiateStrategy: () => void; }

export const ProductRoadmap: React.FC<Props> = ({ onInitiateStrategy }) => {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative h-[60vh] flex items-center bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2000" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="accent-bar bg-[#4918A9] w-24 mb-10"></div>
          <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-6">
            Product<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D9D1DB] to-[#4918A9]">Roadmap</span>
          </h1>
          <p className="text-xl text-gray-400 font-light max-w-2xl leading-relaxed">
            The evolution of Antern's intelligence suite. We build today for the mission-critical needs of tomorrow.
          </p>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              { q: 'Q1-Q2 2025', title: 'Cognitive Integration', items: ['IAmInterviewed Video Synthesis', 'SkillTest Adaptive Scoring', 'ScanJD Sentiment Analysis'] },
              { q: 'Q3-Q4 2025', title: 'Autonomous Scale', items: ['Managed Services AI Overlay', 'Predictive Resource Balancing', 'Global Edge Node Expansion'] },
              { q: '2025 Vision', title: 'Universal Intelligence', items: ['Neuromorphic Compute Support', 'Quantum Resilient Encryption', 'Full ODC Automation'] }
            ].map((phase, i) => (
              <div key={i} className="p-12 border border-gray-100 hover:border-[#4918A9]/30 transition-all">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#4918A9] mb-4 block">{phase.q}</span>
                <h3 className="text-3xl font-black uppercase tracking-tight mb-8">{phase.title}</h3>
                <ul className="space-y-4">
                  {phase.items.map(item => (
                    <li key={item} className="flex items-center gap-4 text-gray-500 font-light">
                      <div className="w-1.5 h-1.5 bg-[#4918A9]"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-32 p-20 bg-gray-50 text-center">
            <h2 className="text-4xl font-black mb-12 uppercase tracking-tighter">Shape our direction.</h2>
            <button onClick={onInitiateStrategy} className="px-12 py-5 bg-[#4918A9] text-white font-bold uppercase tracking-widest text-sm hover:bg-[#1A1A1A] transition-all">
              Request Roadmap Deep-Dive
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

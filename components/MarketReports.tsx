
import React, { useState, useEffect } from 'react';

export const MarketReports: React.FC = () => {
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
            src="https://images.unsplash.com/photo-1551288049-bbda4833878d?q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Market Analysis"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="accent-bar bg-[#4918A9] w-24 mb-10"></div>
            <span className="text-[12px] font-black uppercase tracking-[0.6em] text-[#D9D1DB] mb-6 block">
              Strategic Intelligence
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-8">
              Market<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D9D1DB] to-[#4918A9]">
                Reports
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl leading-relaxed border-l border-[#4918A9] pl-8">
              Intelligence-driven insights into the future of enterprise tech and human-centric design.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { date: 'March 2025', title: 'The AI Sovereignty Index', category: 'Cognitive Intelligence' },
              { date: 'Jan 2025', title: 'Cloud-Smart vs Cloud-First', category: 'Infrastructure' },
              { date: 'Nov 2025', title: 'UX ROI: Quantifying Intuition', category: 'Experience Design' },
              { date: 'Sept 2025', title: 'Zero-Trust for the Edge', category: 'Security' }
            ].map((report, i) => (
              <div key={i} className="group p-10 border border-gray-100 hover:bg-[#1A1A1A] transition-all duration-500">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#4918A9] group-hover:text-white mb-4 block">{report.category}</span>
                <h3 className="text-2xl font-black uppercase mb-8 leading-tight group-hover:text-white transition-colors">{report.title}</h3>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-10">{report.date}</p>
                <button className="text-[11px] font-black uppercase tracking-widest text-[#4918A9] group-hover:text-white flex items-center gap-3">
                  Download PDF <div className="w-8 h-px bg-current"></div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

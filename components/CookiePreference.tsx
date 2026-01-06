
import React from 'react';

export const CookiePreference: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-40 pb-32">
      <div className="max-w-4xl mx-auto px-6">
        <div className="accent-bar bg-[#4918A9] w-12 mb-10"></div>
        <h1 className="text-5xl font-black uppercase tracking-tighter mb-16">Cookie Preference</h1>
        <p className="text-xl text-gray-500 font-light mb-16">Control your digital footprint across the Antern ecosystem.</p>
        
        <div className="space-y-8">
          {[
            { title: 'Necessary Intelligence', desc: 'Critical cookies required for core session management and security protocols.', active: true },
            { title: 'Cognitive Optimization', desc: 'Cookies that allow us to tailor the strategic insights shown to your operational history.', active: false },
            { title: 'Interface Persistence', desc: 'Remembers your preferred UI settings and navigation history.', active: true }
          ].map((item, i) => (
            <div key={i} className="p-8 border border-gray-100 flex items-center justify-between">
              <div className="max-w-xl">
                <h3 className="text-lg font-black uppercase tracking-tight mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 font-light">{item.desc}</p>
              </div>
              <button className={`w-14 h-8 rounded-full transition-all relative ${item.active ? 'bg-[#4918A9]' : 'bg-gray-200'}`}>
                <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${item.active ? 'left-7' : 'left-1'}`}></div>
              </button>
            </div>
          ))}
        </div>
        
        <button className="mt-16 px-12 py-5 bg-[#1A1A1A] text-white text-[11px] font-black uppercase tracking-widest hover:bg-[#4918A9] transition-all">
          Save Preferences
        </button>
      </div>
    </div>
  );
};

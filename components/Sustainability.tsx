
import React from 'react';

export const Sustainability: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative h-[70vh] flex items-center bg-[#0A0A0A] overflow-hidden text-white">
        <div className="absolute inset-0 opacity-40 grayscale">
          <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="accent-bar bg-[#4918A9] w-24 mb-10"></div>
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-8">
            Net-Zero<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D9D1DB] to-[#4918A9]">Operations</span>
          </h1>
          <p className="text-2xl text-gray-400 font-light max-w-2xl leading-relaxed">
            Sustainability is a mission-critical metric. Our goal is 100% carbon neutrality by 2030 across all digital infrastructure.
          </p>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-32">
            {[
              { label: 'Green Compute', desc: 'Utilizing carbon-aware scheduling for all heavy processing tasks.' },
              { label: 'Circular Ops', desc: '100% recycling program for all corporate and lab hardware.' },
              { label: 'Ethics in AI', desc: 'Building inclusive algorithms that minimize cognitive bias.' }
            ].map((p, i) => (
              <div key={i} className="space-y-6">
                <div className="w-12 h-12 bg-[#4918A9] text-white flex items-center justify-center font-black">0{i+1}</div>
                <h3 className="text-2xl font-black uppercase tracking-tight">{p.label}</h3>
                <p className="text-gray-500 leading-relaxed font-light">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="p-20 bg-gray-50 border-l-8 border-[#4918A9]">
            <h2 className="text-4xl font-black mb-8 uppercase tracking-tighter">Our Promise</h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-4xl">
              "We recognize that digital progress must not come at an ecological cost. Antern Technologies is committed to engineering solutions that are as kind to the planet as they are efficient for the enterprise."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

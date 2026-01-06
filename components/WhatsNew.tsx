
import React from 'react';

const newsHighlights = [
  {
    tag: "Press Release",
    title: "Antern Technologies Recognized as a Leader in AI-Driven Recruitment Strategy for 2024",
    date: "March 15, 2024",
    link: "#"
  },
  {
    tag: "Innovation",
    title: "Introducing ScanJD 2.0: The Future of Semantic Job Matching and Talent Acquisition",
    date: "March 10, 2024",
    link: "#"
  },
  {
    tag: "Sustainability",
    title: "Antern Commits to Net-Zero Operations Across All Digital Infrastructure by 2030",
    date: "March 05, 2024",
    link: "#"
  }
];

export const WhatsNew: React.FC = () => {
  return (
    <section id="whats-new" className="py-32 bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Feature */}
          <div className="lg:col-span-7 group cursor-pointer">
            <div className="accent-bar bg-white"></div>
            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#D9D1DB] mb-6 block">Featured Story</span>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight group-hover:text-[#D9D1DB] transition-colors">
              Pioneering the Future of <span className="text-white">Sustainable Computing</span> and Cognitive Intelligence.
            </h2>
            <div className="relative aspect-video overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 mb-8">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200" 
                alt="Quantum Computing" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-10">
                <button className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-white">
                  Read Full Vision
                  <div className="w-8 h-px bg-white group-hover:w-16 transition-all"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Secondary News List */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-12 border-b border-white/10 pb-4">
              Recent <span className="text-[#D9D1DB]">Announcements</span>
            </h3>
            <div className="space-y-12">
              {newsHighlights.map((item, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-white/5 text-[#D9D1DB] border border-white/10">
                      {item.tag}
                    </span>
                    <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">{item.date}</span>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold leading-snug group-hover:text-[#D9D1DB] transition-colors">
                    {item.title}
                  </h4>
                  <div className="mt-6 h-px w-full bg-white/5 relative overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-0 bg-[#D9D1DB] group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="mt-16 self-start px-10 py-4 border border-white/20 text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#1A1A1A] transition-all">
              Newsroom Archive
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

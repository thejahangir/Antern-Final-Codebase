
import React, { useState, useEffect } from 'react';

export const Events: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to generate dates relative to today for dynamic demo purposes
  const getRelativeDate = (days: number) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date;
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }).toUpperCase();
  };

  const eventsList = [
    {
      dateObj: getRelativeDate(-3),
      location: 'Virtual Lab',
      title: 'Microservices & Chaos Engineering',
      type: 'Technical Workshop'
    },
    {
      dateObj: getRelativeDate(-2),
      location: 'Bangalore Hub',
      title: 'Accessible UX: Beyond Compliance',
      type: 'Design Sprint'
    },
    {
      dateObj: getRelativeDate(12),
      location: 'San Francisco',
      title: 'Cognitive Summit 2024',
      type: 'Flagship Conference'
    },
    {
      dateObj: getRelativeDate(25),
      location: 'Virtual',
      title: 'UX ROI Masterclass',
      type: 'Webinar'
    },
    {
      dateObj: getRelativeDate(40),
      location: 'London',
      title: 'Enterprise Modernization Forum',
      type: 'Roundtable'
    },
    {
      dateObj: getRelativeDate(60),
      location: 'New York',
      title: 'Generative AI in FinTech',
      type: 'Industry Panel'
    }
  ];

  const isPast = (date: Date) => {
    const today = new Date();
    // Reset time to ensure correct day comparison
    today.setHours(0, 0, 0, 0); 
    date.setHours(0, 0, 0, 0);
    return date < today;
  };

  return (
    <div className="bg-white min-h-screen">
      {/* 1. KINETIC HERO */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center bg-[#0A0A0A] overflow-hidden">
        <div 
          className="absolute -inset-y-24 inset-x-0 z-0 opacity-40 grayscale"
          style={{ transform: `translate3d(0, ${offsetY * 0.15}px, 0)` }}
        >
          <img 
            src="https://images.unsplash.com/photo-1540575861501-7c0f110f6f3a?q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Global Networking Events"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="accent-bar bg-[#4918A9] w-24 mb-10"></div>
            <span className="text-[12px] font-black uppercase tracking-[0.6em] text-[#D9D1DB] mb-6 block">
              Global Assemblies
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-8">
              Strategic<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D9D1DB] to-[#4918A9]">
                Events
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl leading-relaxed border-l border-[#4918A9] pl-8">
              Connecting global thinkers and industrial leaders to define the next horizon of digital excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-12">
            {eventsList.map((event, i) => {
              const eventIsPast = isPast(new Date(event.dateObj));
              const dateString = formatDate(event.dateObj);
              const dateParts = dateString.split(','); // "MMM DD, YYYY" -> ["MMM DD", " YYYY"]
              
              return (
                <div 
                  key={i} 
                  className={`flex flex-col md:flex-row items-center gap-12 p-12 border transition-all relative overflow-hidden ${
                    eventIsPast 
                      ? 'border-gray-100 bg-gray-50/50 opacity-75 grayscale-[0.8]' 
                      : 'border-gray-100 hover:border-[#4918A9]/50 bg-white hover:shadow-lg'
                  }`}
                >
                  {eventIsPast && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-gray-200 text-gray-500 text-[9px] font-black uppercase tracking-widest rounded-sm">
                      Concluded
                    </div>
                  )}
                  
                  <div className="text-center md:text-left shrink-0 min-w-[140px]">
                    <div className={`text-3xl font-black ${eventIsPast ? 'text-gray-400' : 'text-[#4918A9]'}`}>
                      {dateParts[0]}
                    </div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">
                      {dateParts[1] ? dateParts[1].trim() : ''}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-2 block">
                      {event.type} &bull; {event.location}
                    </span>
                    <h3 className={`text-2xl font-black uppercase tracking-tight ${eventIsPast ? 'text-gray-500 line-through decoration-2 decoration-gray-300' : 'text-[#1A1A1A]'}`}>
                      {event.title}
                    </h3>
                  </div>
                  
                  <button 
                    disabled={eventIsPast}
                    className={`px-10 py-4 text-[10px] font-black uppercase tracking-[0.3em] transition-all whitespace-nowrap ${
                      eventIsPast 
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                        : 'bg-[#1A1A1A] text-white hover:bg-[#4918A9]'
                    }`}
                  >
                    {eventIsPast ? 'Registration Closed' : 'Register'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

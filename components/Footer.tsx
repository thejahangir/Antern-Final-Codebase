
import React from 'react';
import { Logo } from './Logo';

interface FooterProps {
  onInitiateStrategy?: () => void;
  onNavigateTo: (page: any) => void;
}

export const Footer: React.FC<FooterProps> = ({ onInitiateStrategy, onNavigateTo }) => {
  return (
    <footer id="contact" className="bg-[#1A1A1A] pt-24 pb-12 text-white overflow-hidden relative">
      {/* Ambient Background Glow */}
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#4918A9]/5 rounded-full blur-[150px] pointer-events-none transform translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Section: The Monolith Interface */}
        <div className="mb-24 relative">
          <div className="bg-[#0f0f0f] border border-white/10 relative overflow-hidden group/monolith">
            
            {/* Decorative Scanline Animation */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#4918A9] to-transparent opacity-0 group-hover/monolith:opacity-100 animate-scan-line transition-opacity duration-700"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
              
              {/* Left Chamber: Strategy */}
              <div className="p-10 md:p-16 flex flex-col justify-between group h-full relative min-h-[350px]">
                 {/* Hover Bar Indicator */}
                 <div className="absolute top-0 left-0 w-1 h-0 bg-[#4918A9] group-hover:h-full transition-all duration-700 ease-out"></div>
                 
                 <div className="mb-12 relative z-10">
                   <div className="flex items-center gap-3 mb-8">
                     <div className="w-1.5 h-1.5 bg-[#00E676] rounded-full animate-pulse"></div>
                     <span className="text-[10px] font-mono text-[#00E676] uppercase tracking-widest font-bold">System: Ready</span>
                   </div>
                   <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white leading-[0.9] mb-6">
                     Initiate <br/>
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D9D1DB] to-[#4918A9]">Sequence.</span>
                   </h2>
                   <p className="text-gray-300 font-mono text-[11px] leading-relaxed max-w-xs uppercase tracking-wide opacity-90">
                     Deploy strategic assets for immediate enterprise impact.
                   </p>
                 </div>

                 <button 
                   onClick={onInitiateStrategy}
                   className="w-full py-6 bg-white hover:bg-[#4918A9] text-[#1A1A1A] hover:text-white transition-all duration-300 flex justify-between items-center px-8 group/btn relative z-10"
                 >
                   <span className="text-[11px] font-black uppercase tracking-[0.3em]">Start Project</span>
                   <svg className="w-5 h-5 transform group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                 </button>
              </div>

              {/* Right Chamber: Intelligence */}
              <div className="p-10 md:p-16 flex flex-col justify-between group h-full relative min-h-[350px]">
                 {/* Hover Bar Indicator */}
                 <div className="absolute bottom-0 right-0 w-1 h-0 bg-[#D9D1DB] group-hover:h-full transition-all duration-700 ease-out"></div>

                 <div className="mb-12 relative z-10">
                   <div className="flex items-center gap-3 mb-8">
                     <div className="w-1.5 h-1.5 bg-[#A78BFA] rounded-full"></div>
                     <span className="text-[10px] font-mono text-[#A78BFA] uppercase tracking-widest font-bold">Feed: Active</span>
                   </div>
                   <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white leading-[0.9] mb-6">
                     Ingest <br/>
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D9D1DB] to-[#4918A9]">Data.</span>
                   </h2>
                   <p className="text-gray-300 font-mono text-[11px] leading-relaxed max-w-xs uppercase tracking-wide opacity-90">
                     Subscribe to mission-critical intelligence streams.
                   </p>
                 </div>

                 <div className="relative z-10 group/input">
                    <input 
                      type="email" 
                      placeholder="Enter your Email" 
                      className="w-full bg-[#151515] border border-white/10 py-6 px-8 text-xs font-mono text-white placeholder:text-gray-500 focus:outline-none focus:border-[#4918A9] focus:bg-[#1A1A1A] transition-all uppercase tracking-widest"
                    />
                    <button className="absolute right-2 top-2 bottom-2 aspect-square bg-white/5 hover:bg-[#4918A9] text-white flex items-center justify-center transition-colors border border-white/5">
                       <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                 </div>
              </div>

            </div>
          </div>
        </div>

        {/* Middle Section: Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20 pt-8 border-t border-white/5">
          <div className="col-span-2 lg:col-span-1">
             <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-500 mb-8">Digital Products</h4>
             <ul className="space-y-4">
               <li><button onClick={() => onNavigateTo('roadmap')} className="text-[13px] text-gray-400 hover:text-[#D9D1DB] transition-colors">Product Roadmap</button></li>
               <li><button onClick={() => onNavigateTo('home')} className="text-[13px] text-gray-400 hover:text-[#D9D1DB] transition-colors">IAmInterviewed</button></li>
               <li><button onClick={() => onNavigateTo('home')} className="text-[13px] text-gray-400 hover:text-[#D9D1DB] transition-colors">MySkillTest</button></li>
               <li><button onClick={() => onNavigateTo('home')} className="text-[13px] text-gray-400 hover:text-[#D9D1DB] transition-colors">ScanJD</button></li>
             </ul>
          </div>
          
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-500 mb-8">Advisory</h4>
            <ul className="space-y-4 text-left">
              <li><button onClick={() => onNavigateTo('on-premise')} className="text-[13px] text-gray-400 hover:text-[#D9D1DB] transition-colors">On-Premise Delivery</button></li>
              <li><button onClick={() => onNavigateTo('odc')} className="text-[13px] text-gray-400 hover:text-[#D9D1DB] transition-colors">ODC</button></li>
              <li><button onClick={() => onNavigateTo('managed-services')} className="text-[13px] text-gray-400 hover:text-[#D9D1DB] transition-colors">Managed Services</button></li>
              <li><button onClick={() => onNavigateTo('ux-studio')} className="text-[13px] text-gray-400 hover:text-[#D9D1DB] transition-colors font-bold">UX Studio</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-500 mb-8">Intelligence</h4>
            <ul className="space-y-4 text-left">
              <li><button onClick={() => onNavigateTo('reports')} className="text-[13px] text-gray-400 hover:text-[#D9D1DB] transition-colors">Market Reports</button></li>
              <li><button onClick={() => onNavigateTo('case-studies')} className="text-[13px] text-gray-400 hover:text-[#D9D1DB] transition-colors">Case Studies</button></li>
              <li><button onClick={() => onNavigateTo('whitepapers')} className="text-[13px] text-gray-400 hover:text-[#D9D1DB] transition-colors">Whitepapers</button></li>
              <li><button onClick={() => onNavigateTo('events')} className="text-[13px] text-gray-400 hover:text-[#D9D1DB] transition-colors">Events</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-500 mb-8">Corporate</h4>
            <ul className="space-y-4 text-left">
              <li><button onClick={() => onNavigateTo('our-vision')} className="text-[13px] text-gray-400 hover:text-[#D9D1DB] transition-colors">Our Vision</button></li>
              <li><button onClick={() => onNavigateTo('leadership')} className="text-[13px] text-gray-400 hover:text-[#D9D1DB] transition-colors">Leadership Team</button></li>
              <li><button onClick={() => onNavigateTo('careers')} className="text-[13px] text-gray-400 hover:text-[#D9D1DB] transition-colors">Careers</button></li>
              <li><button onClick={() => onNavigateTo('sustainability')} className="text-[13px] text-gray-400 hover:text-[#D9D1DB] transition-colors">Sustainability</button></li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-500 mb-8">Connect</h4>
            <div className="space-y-6">
              <div className="text-[13px] text-gray-400">
                <p className="mb-2 uppercase tracking-widest text-[9px] text-[#4918A9] font-black">Email</p>
                <button onClick={() => onNavigateTo('contact')} className="hover:text-white transition-colors">contact@antern.com</button>
              </div>
              <div className="text-[13px] text-gray-400">
                <p className="mb-2 uppercase tracking-widest text-[9px] text-[#4918A9] font-black">Global Offices</p>
                <p>USA &bull; Bangalore &bull; Hyderabad</p>
              </div>
              <div className="flex gap-6 pt-4">
                <a href="#" className="text-gray-500 hover:text-white transition-colors">
                  <span className="text-[10px] font-black uppercase tracking-widest">LinkedIn</span>
                </a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors">
                  <span className="text-[10px] font-black uppercase tracking-widest">Twitter</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section: Legal & Credits */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
            <p>© 2024 ANTERN TECHNOLOGIES.</p>
            <div className="flex gap-8">
              <button onClick={() => onNavigateTo('privacy')} className="hover:text-white transition-colors">Privacy</button>
              <button onClick={() => onNavigateTo('terms')} className="hover:text-white transition-colors">Terms</button>
              <button onClick={() => onNavigateTo('cookies')} className="hover:text-white transition-colors">Cookies</button>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-[9px] font-black text-gray-500 uppercase tracking-[0.4em]">
            <span>Empowering Global Scale</span>
            <div className="w-1.5 h-1.5 bg-[#4918A9] rounded-full"></div>
            <span>Built for Tomorrow</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scan-line {
          0% { transform: translateX(-100%); }
          50%, 100% { transform: translateX(100%); }
        }
        .animate-scan-line {
          animation: scan-line 3s linear infinite;
        }
      `}</style>
    </footer>
  );
};

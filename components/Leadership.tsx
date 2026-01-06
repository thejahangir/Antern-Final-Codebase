
import React, { useState, useEffect } from 'react';

interface Leader {
  name: string;
  role: string;
  image: string;
  bio: string;
  fullBio?: string;
  expertise: string[];
  strategicHighlight: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const leadershipTeam: Leader[] = [
  {
    name: "Ramakrishna RL",
    role: "Chief Executive Officer & Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    bio: "Visionary leader with 20+ years of enterprise tech transformation experience.",
    fullBio: "Ramakrishna is a seasoned executive with over two decades of experience in navigating complex digital landscapes. Before founding Antern, he held senior leadership positions at several Fortune 500 tech firms, where he specialized in large-scale infrastructure modernization and cloud adoption.",
    expertise: ["Digital Strategy", "Enterprise Scaling", "Cloud Migration", "M&A Advisory"],
    strategicHighlight: "Pioneering the 'Intuition-First' enterprise framework for Global 500 partners.",
    socials: { linkedin: "#", twitter: "#", email: "ramakrishna@antern.tech" }
  },
  {
    name: "Sarah Jenkins",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    bio: "Cloud-native architecture specialist and AI advocate leading our global R&D.",
    fullBio: "Sarah leads Antern’s technological evolution. With a background in computer science and behavioral psychology, she champions the integration of cognitive AI into mission-critical systems.",
    expertise: ["AI/ML Systems", "Cyber Resilience", "Cloud Native", "Neuro-UX Architecture"],
    strategicHighlight: "Architecting zero-trust cognitive ecosystems for mission-critical reliability.",
    socials: { linkedin: "#", twitter: "#", email: "sarah@antern.tech" }
  }
];

const advisors: Leader[] = [
  {
    name: "Dr. Elena Rossi",
    role: "Strategic Board Advisor",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    bio: "Former Fortune 100 executive specializing in organizational agility and scaling.",
    fullBio: "Dr. Rossi brings a wealth of experience in corporate strategy and operational excellence. Her advisory work focuses on helping Antern's partners navigate the cultural shifts required for successful digital transformation.",
    expertise: ["Operational Agility", "Change Management", "GNP Optimization"],
    strategicHighlight: "Empowering cultural shifts within traditional enterprise hierarchies.",
    socials: { linkedin: "#", email: "elena@antern.tech" }
  },
  {
    name: "Marcus Thorne",
    role: "Investment & Scale Advisor",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
    bio: "Venture partner with a focus on enterprise SaaS and global market entry.",
    fullBio: "Marcus is a veteran investor with a track record of scaling high-growth tech companies. He provides strategic guidance on Antern's global expansion.",
    expertise: ["Venture Capital", "SaaS Growth", "Global Expansion"],
    strategicHighlight: "Unlocking $1B+ in value through optimized digital market entry.",
    socials: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Hiroshi Tanaka",
    role: "Innovation Consultant",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    bio: "Renowned expert in industrial automation and HMI optimization.",
    fullBio: "Based in Tokyo, Hiroshi consults on Antern's most complex industrial IoT and automation projects.",
    expertise: ["IoT Engineering", "Industrial UX", "Automation Ethics"],
    strategicHighlight: "Bridging the physical-digital divide in heavy industrial environments.",
    socials: { linkedin: "#" }
  }
];

const uxStudioTeam: Leader[] = [
  {
    name: "Liam O'Connor",
    role: "Head of Experience Systems",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    bio: "Architect of our 'Intuition Logic' framework, bridging data and human instinct.",
    fullBio: "Liam oversees the design philosophy across Antern’s service portfolio. He pioneered the 'Intuition Logic' framework.",
    expertise: ["Behavioral Design", "Systems Thinking", "Service Design"],
    strategicHighlight: "Redefining the relationship between human instinct and machine logic.",
    socials: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Sophia Chen",
    role: "Principal Design Strategist",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    bio: "Specialist in behavioral economics and conversion architecture.",
    fullBio: "Sophia leads the discovery and strategy phases for our Tier-1 partners. Her expertise in behavioral economics allows her to design ethical funnels.",
    expertise: ["Conversion Design", "Market Psych", "Revenue Strategy"],
    strategicHighlight: "Generating measurable ROI through behavioral science integration.",
    socials: { linkedin: "#", twitter: "#", email: "sophia@antern.tech" }
  },
  {
    name: "David Vance",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
    bio: "Focused on high-fidelity enterprise aesthetics and tokenized design systems.",
    fullBio: "David ensures that Antern’s visual language reflects the sophistication of the technology it represents.",
    expertise: ["Visual Identity", "Design Systems", "Motion Logic"],
    strategicHighlight: "Setting the global standard for enterprise-grade digital aesthetics.",
    socials: { linkedin: "#", twitter: "#" }
  }
];

interface LeadershipProps {
  onContact?: () => void;
}

export const Leadership: React.FC<LeadershipProps> = ({ onContact }) => {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);
  const [isDossierActive, setIsDossierActive] = useState(false);

  useEffect(() => {
    if (selectedLeader) {
      setTimeout(() => setIsDossierActive(true), 50);
      document.body.style.overflow = 'hidden';
    } else {
      setIsDossierActive(false);
      document.body.style.overflow = 'unset';
    }
  }, [selectedLeader]);

  const TeamSection = ({ title, subtitle, members, columns = 3 }: { title: string; subtitle: string; members: Leader[]; columns?: number }) => (
    <div className="mb-32">
      <div className="flex flex-col mb-16">
        <div className="accent-bar bg-[#4918A9] w-12 mb-6"></div>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#1A1A1A] mb-4">{title}</h2>
        <p className="text-gray-400 text-lg font-light uppercase tracking-widest text-[10px]">{subtitle}</p>
      </div>
      <div className={`grid grid-cols-1 md:grid-cols-${columns > 2 ? '3' : '2'} gap-10`}>
        {members.map((member) => (
          <div key={member.name} className="group relative">
            <div 
              className="aspect-[4/5] overflow-hidden bg-gray-100 mb-8 border border-gray-100 transition-all duration-700 hover:shadow-2xl grayscale group-hover:grayscale-0 relative cursor-pointer"
              onClick={() => setSelectedLeader(member)}
            >
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <p className="text-white text-sm font-light leading-relaxed mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{member.bio}</p>
                <button 
                  className="w-full py-4 bg-white text-[#1A1A1A] text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#4918A9] hover:text-white transition-all transform translate-y-8 group-hover:translate-y-0 transition-all duration-500"
                  onClick={() => setSelectedLeader(member)}
                >
                  View Profile Dossier
                </button>
              </div>
            </div>
            <div className="relative">
              <h3 className="text-2xl font-black uppercase tracking-tight text-[#1A1A1A] group-hover:text-[#4918A9] transition-colors">{member.name}</h3>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mt-2">{member.role}</p>
              <div className="absolute top-0 right-0 w-8 h-px bg-gray-200 group-hover:bg-[#4918A9] group-hover:w-12 transition-all duration-500"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[65vh] min-h-[500px] flex items-center bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2400&auto=format&fit=crop" 
            alt="Antern Leadership Collaboration" 
            className="w-full h-full object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent"></div>
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
               style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="accent-bar bg-[#D9D1DB] w-24 h-1.5 mb-10"></div>
            <span className="text-[12px] font-black uppercase tracking-[0.5em] text-[#D9D1DB] mb-6 block">
              Global Governance
            </span>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-white mb-8">
              Leadership<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D9D1DB] via-[#7C4DFF] to-[#4918A9]">
                Team
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl border-l border-[#4918A9] pl-10">
              The architects of Antern's global mission, committed to delivering intelligent solutions with enterprise-grade integrity and strategic foresight.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <TeamSection 
            title="Leadership" 
            subtitle="Strategic Executive Council" 
            members={leadershipTeam} 
            columns={2}
          />
          <TeamSection 
            title="Advisors" 
            subtitle="Global Strategy & Innovation Board" 
            members={advisors} 
          />
          <TeamSection 
            title="UX Studio" 
            subtitle="Experience Architecture & Behavioral Design Leads" 
            members={uxStudioTeam} 
          />
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-48 bg-gray-50 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] text-[400px] font-black select-none pointer-events-none">
          +
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight text-[#1A1A1A] mb-12">
            Build with the <span className="text-[#4918A9]">Best.</span>
          </h2>
          <p className="text-xl text-gray-500 font-light mb-16 leading-relaxed max-w-2xl mx-auto">
            Our multi-disciplinary teams are ready to transform your most complex challenges into intuitive, scalable digital assets.
          </p>
          <button 
            onClick={onContact}
            className="px-16 py-6 bg-[#1A1A1A] text-white text-[12px] font-black uppercase tracking-[0.5em] hover:bg-[#4918A9] transition-all shadow-[0_30px_60px_rgba(73,24,169,0.15)] group"
          >
            Initiate Consultation
            <span className="ml-4 inline-block transform transition-transform group-hover:translate-x-2">→</span>
          </button>
        </div>
      </section>

      {/* Profile Dossier Detail Overlay */}
      {selectedLeader && (
        <div className={`fixed inset-0 z-[100] transition-opacity duration-700 ${isDossierActive ? 'opacity-100' : 'opacity-0'}`}>
          <div 
            className="absolute inset-0 bg-[#0A0A0A]/95 backdrop-blur-3xl" 
            onClick={() => setSelectedLeader(null)}
          ></div>
          
          <div className="relative h-full w-full overflow-y-auto overflow-x-hidden flex flex-col lg:flex-row">
            {/* Visual Portrait Side */}
            <div className={`w-full lg:w-1/2 h-[50vh] lg:h-full relative bg-[#1A1A1A] transition-all duration-1000 ease-expo ${isDossierActive ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
              <img src={selectedLeader.image} alt={selectedLeader.name} className="w-full h-full object-cover grayscale opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-transparent"></div>
              
              {/* Dynamic Scan Line Effect */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
                <div className="w-full h-px bg-white/40 absolute top-0 left-0 animate-scan"></div>
                <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '100% 4px' }}></div>
              </div>

              {/* Large Outline Name */}
              <div className="absolute bottom-10 left-10 lg:bottom-20 lg:left-20">
                <div className="text-[10vw] font-black leading-none text-transparent border-text select-none opacity-10 absolute -bottom-8 left-0 whitespace-nowrap">
                   {selectedLeader.name.split(' ')[0]}
                </div>
                <h3 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter text-white relative z-10">
                  {selectedLeader.name}
                </h3>
                <p className="text-[12px] font-black uppercase tracking-[0.6em] text-[#4918A9] mt-6 relative z-10 flex items-center gap-4">
                  <span className="w-8 h-px bg-[#4918A9]"></span>
                  {selectedLeader.role}
                </p>
              </div>
            </div>

            {/* Strategic Content Side */}
            <div className={`w-full lg:w-1/2 p-10 lg:p-24 flex flex-col justify-center bg-[#0A0A0A] text-white transition-all duration-1000 delay-300 ease-expo ${isDossierActive ? 'translate-x-0 opacity-100' : 'translate-x-24 opacity-0'}`}>
              <button 
                onClick={() => setSelectedLeader(null)}
                className="absolute top-10 right-10 w-16 h-16 flex items-center justify-center border border-white/10 hover:bg-white hover:text-[#1A1A1A] transition-all group rounded-full"
              >
                <svg className="w-8 h-8 transform group-hover:rotate-90 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="max-w-xl">
                <div className="accent-bar bg-[#4918A9] w-12 mb-12"></div>
                
                <section className="mb-16">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#D9D1DB] mb-6">Strategic Vision</h4>
                  <p className="text-3xl lg:text-4xl font-light italic leading-tight text-white/90">
                    "{selectedLeader.strategicHighlight}"
                  </p>
                </section>

                <section className="mb-16">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#D9D1DB] mb-6">Executive Context</h4>
                  <p className="text-lg text-gray-400 font-light leading-relaxed">
                    {selectedLeader.fullBio || selectedLeader.bio}
                  </p>
                </section>

                <section className="mb-16">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#D9D1DB] mb-8">Core Expertise</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedLeader.expertise.map(exp => (
                      <span key={exp} className="px-5 py-3 border border-white/10 text-[11px] font-bold uppercase tracking-widest text-gray-300 bg-white/5 hover:border-[#4918A9] transition-colors">
                        {exp}
                      </span>
                    ))}
                  </div>
                </section>

                {/* Dossier Social Connect */}
                <div className="pt-12 border-t border-white/10">
                  <div className="flex flex-wrap gap-12">
                    {Object.entries(selectedLeader.socials).map(([key, val]) => val && (
                      <a 
                        key={key} 
                        href={key === 'email' ? `mailto:${val}` : val} 
                        className="group flex flex-col gap-2"
                      >
                        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-500 group-hover:text-[#4918A9] transition-colors">
                          {key}
                        </span>
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-black uppercase tracking-widest">Connect</span>
                          <div className="w-0 h-px bg-[#4918A9] group-hover:w-8 transition-all duration-500"></div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .border-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.4);
        }
        .ease-expo {
          transition-timing-function: cubic-bezier(0.85, 0, 0.15, 1);
        }
        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
      `}</style>
    </div>
  );
};

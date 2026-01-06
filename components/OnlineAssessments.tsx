
import React, { useState, useEffect } from 'react';

interface Props { onInitiateStrategy: () => void; }

export const OnlineAssessments: React.FC<Props> = ({ onInitiateStrategy }) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center bg-[#0A0A0A] overflow-hidden">
        <div 
          className="absolute -inset-y-24 inset-x-0 z-0 opacity-40 grayscale"
          style={{ transform: `translate3d(0, ${offsetY * 0.15}px, 0)` }}
        >
          <img 
            src="https://images.unsplash.com/photo-1551288049-bbda4833878d?q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Data Analytics"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="accent-bar bg-[#4918A9] w-24 mb-10"></div>
            <span className="text-[12px] font-black uppercase tracking-[0.6em] text-[#D9D1DB] mb-6 block">
              Validation Protocol
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-8">
              Online<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D9D1DB] to-[#4918A9]">
                Assessments
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl leading-relaxed border-l border-[#4918A9] pl-8">
              Data-driven competency validation. Our adaptive testing engine dynamically adjusts complexity to pinpoint candidate expertise with surgical accuracy.
            </p>
          </div>
        </div>
      </section>

      {/* INTELLIGENCE BLOCK */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <div className="accent-bar bg-[#1A1A1A] w-12 mb-8"></div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#1A1A1A] mb-10 leading-tight">
                Adaptive <br /><span className="text-[#4918A9]">Intelligence.</span>
              </h2>
              <p className="text-lg text-gray-500 font-light leading-relaxed mb-12">
                Standardized tests fail to capture the nuance of senior talent. Our engine utilizes Item Response Theory (IRT) to adapt in real-time, serving harder problems as candidates prove their proficiency, ensuring a precise skill calibration in half the time.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                {[
                  { val: "60%", label: "Time Saved" },
                  { val: "99%", label: "Cheat Detection" },
                  { val: "45+", label: "Tech Stacks" },
                  { val: "24/7", label: "Availability" }
                ].map((stat, i) => (
                  <div key={i} className="border-t border-gray-100 pt-6">
                    <div className="text-3xl font-black text-[#1A1A1A] mb-2">{stat.val}</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
               {/* Visualizing Adaptive Logic */}
               <div className="space-y-6">
                 {[1, 2, 3, 4].map((i) => (
                   <div key={i} className="flex items-center gap-6">
                     <div className="w-16 h-16 bg-gray-50 flex items-center justify-center font-black text-[#4918A9] border border-gray-100">Q{i}</div>
                     <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                       <div className="h-full bg-[#1A1A1A]" style={{ width: `${20 * i}%` }}></div>
                     </div>
                     <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Difficulty {i*25}%</div>
                   </div>
                 ))}
               </div>
               <div className="mt-12 p-8 bg-[#F8F7F9] border-l-4 border-[#4918A9]">
                 <p className="text-sm text-gray-500 italic">"The system correctly identified the candidate's proficiency limit at the Senior Architect level within 15 minutes."</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOMAIN COVERAGE */}
      <section className="py-32 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-black uppercase tracking-widest mb-16 text-center text-[#D9D1DB]">Full-Stack Validation</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {[
              { title: "Frontend", tags: ["React", "Vue", "Angular", "WebAssembly"] },
              { title: "Backend", tags: ["Node.js", "Python", "Go", "Java Spring"] },
              { title: "Data Science", tags: ["TensorFlow", "Pandas", "R", "SQL Advanced"] },
              { title: "DevOps", tags: ["Kubernetes", "AWS/Azure", "Terraform", "CI/CD"] }
            ].map((domain, i) => (
              <div key={i} className="p-10 bg-[#1A1A1A] hover:bg-white/5 transition-colors group">
                <h3 className="text-xl font-bold uppercase tracking-tight mb-6 group-hover:text-[#4918A9] transition-colors">{domain.title}</h3>
                <ul className="space-y-3">
                  {domain.tags.map(tag => (
                    <li key={tag} className="flex items-center gap-3 text-sm text-gray-400 font-light">
                      <div className="w-1 h-1 bg-[#D9D1DB] rounded-full"></div>
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-black uppercase tracking-tighter text-[#1A1A1A] mb-8">Deploy Assessment</h2>
          <p className="text-gray-500 mb-12">Start screening your pipeline with enterprise-grade rigour.</p>
          <button 
            onClick={onInitiateStrategy}
            className="px-16 py-6 bg-[#4918A9] text-white text-[12px] font-black uppercase tracking-[0.5em] hover:bg-[#1A1A1A] transition-all shadow-xl"
          >
            Create Test
          </button>
        </div>
      </section>
    </div>
  );
};

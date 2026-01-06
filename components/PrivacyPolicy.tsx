
import React from 'react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-40 pb-32">
      <div className="max-w-4xl mx-auto px-6">
        <div className="accent-bar bg-[#4918A9] w-12 mb-10"></div>
        <h1 className="text-5xl font-black uppercase tracking-tighter mb-16">Privacy Policy</h1>
        <div className="space-y-12 text-gray-600 leading-relaxed font-light">
          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-[#1A1A1A] mb-4">1. Information We Collect</h2>
            <p>We collect information that you provide directly to us when you use our services, including operational handles, email nodes, and professional dossiers during recruitment processes.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-[#1A1A1A] mb-4">2. Data Usage</h2>
            <p>Your data is used solely for the purpose of delivering high-performance enterprise services, improving our cognitive engine, and processing professional applications.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-[#1A1A1A] mb-4">3. Data Sovereignty</h2>
            <p>Antern Technologies respects user sovereignty. We do not sell data to third parties. All information is handled with zero-trust encryption protocols.</p>
          </section>
          <section>
             <p className="text-xs text-gray-400 mt-20">Last Updated: March 2025</p>
          </section>
        </div>
      </div>
    </div>
  );
};

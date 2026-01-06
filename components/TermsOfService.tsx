
import React from 'react';

export const TermsOfService: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-40 pb-32">
      <div className="max-w-4xl mx-auto px-6">
        <div className="accent-bar bg-[#4918A9] w-12 mb-10"></div>
        <h1 className="text-5xl font-black uppercase tracking-tighter mb-16">Terms of Service</h1>
        <div className="space-y-12 text-gray-600 leading-relaxed font-light">
          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-[#1A1A1A] mb-4">1. Acceptance of Terms</h2>
            <p>By accessing Antern's digital ecosystem, you agree to abide by these strategic guidelines and operational protocols.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-[#1A1A1A] mb-4">2. Intellectual Property</h2>
            <p>All cognitive frameworks, design tokens, and proprietary algorithms within this domain are the exclusive intellectual property of Antern Technologies.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-[#1A1A1A] mb-4">3. Ethical Conduct</h2>
            <p>Users must interact with our cognitive engines with integrity. Any attempt to exploit or reverse-engineer our intelligence stack is strictly prohibited.</p>
          </section>
          <section>
             <p className="text-xs text-gray-400 mt-20">Last Updated: March 2024</p>
          </section>
        </div>
      </div>
    </div>
  );
};


import React, { useState, useEffect } from 'react';
import { EXPERIENCES, TESTIMONIALS } from '../constants';
import ResumeModal from './ResumeModal';

interface AboutPageProps {
  onBack: () => void;
}

const ROLES = [
  "FRONT END WEB DEVELOPER",
  "WEB3 BUILDER", 
  "SMART CONTRACT DEVELOPER"
];

const AboutPage: React.FC<AboutPageProps> = ({ onBack }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Navbar Overlay */}
      <div className="absolute top-0 left-0 w-full px-8 py-6 flex justify-between items-start z-50">
        <div 
          onClick={onBack}
          className="text-white font-bold text-sm tracking-tighter uppercase select-none cursor-pointer hover:text-blue-500 transition-colors"
        >
          BAYU MUKTI WIBOWO
        </div>
        <button 
          onClick={onBack}
          className="bg-white text-black px-6 py-2 rounded-full flex items-center gap-4 text-xs font-bold hover:bg-blue-500 transition-colors group"
        >
          Back
          <span className="text-black/40 group-hover:text-black">
            &lt; &gt;
          </span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 text-center">
        <div className="text-blue-500 text-[10px] uppercase font-bold tracking-[0.4em] mb-6">// Hello World</div>
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-outfit font-black text-white tracking-tighter leading-none mb-16 uppercase">
          I'M A <br/> 
          <span 
            key={currentRoleIndex}
            className="text-blue-500 inline-block animate-fade-in"
          >
            {ROLES[currentRoleIndex]}
          </span>
        </h1>
        <div className="max-w-[1400px] mx-auto relative px-6 md:px-12">
           <div className="relative aspect-[4/5] md:aspect-[21/9] rounded-3xl overflow-hidden bg-[#111]">
              <img 
                src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=2000&q=80" 
                className="w-full h-full object-cover grayscale opacity-60" 
                alt="Bayu Portrait"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
           </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
         <div className="text-white font-mono text-lg md:text-2xl leading-relaxed mb-12">
            &lt;p&gt; I CRAFT <span className="text-blue-500 font-bold">MODERN WEB APPLICATIONS AND DECENTRALIZED SOLUTIONS</span> — COMBINING REACT FRONTEND DEVELOPMENT WITH <span className="text-blue-500 font-bold">SMART CONTRACT ENGINEERING</span> USING SOLIDITY AND MOVE FOR WEB3 ECOSYSTEMS. &lt;/p&gt;
         </div>
         <p className="text-white/40 text-sm md:text-base leading-relaxed mb-12">
            I thrive on solving real-world problems, turning ideas into clean, maintainable code, and learning through experimentation. You'll find me building Web3 projects, diving into blockchain tech stacks, or exploring decentralized applications.
         </p>
         <button 
           onClick={() => setIsResumeOpen(true)}
           className="bg-blue-500 text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform"
         >
           My Resume
         </button>
      </section>

      {/* Grid Gallery Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
         <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-outfit font-black text-white uppercase tracking-tighter">
              Creating, Exploring &<br/> Enjoying Every Single Day
            </h2>
            <p className="text-white/40 text-xs uppercase tracking-widest mt-4">Life for me is about balance — doing what I love, staying curious, and finding joy.</p>
         </div>

         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-white/5 md:translate-y-12">
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden bg-white/5">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-white/5 md:translate-y-24">
              <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden bg-white/5 md:translate-y-8">
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden bg-white/5">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-white/5 md:-translate-y-12">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden bg-white/5 md:translate-y-16">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-white/5">
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
         </div>
      </section>

      {/* Experience Section */}
      <section className="py-40 px-6 max-w-7xl mx-auto">
         <div className="flex flex-col md:flex-row justify-between items-start mb-20">
            <div className="text-blue-500 text-[10px] uppercase font-bold tracking-[0.4em] mb-4 md:mb-0">// Experience</div>
            <h2 className="text-4xl md:text-6xl font-outfit font-black text-white uppercase tracking-tighter text-right md:text-left">
              Professional<br/>Working Experience
            </h2>
         </div>
         <div className="border-t border-white/10">
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className="group grid grid-cols-1 md:grid-cols-12 gap-4 py-8 border-b border-white/5 hover:bg-white/[0.02] transition-colors px-4">
                 <div className="md:col-span-5">
                    <h3 className="text-white font-bold text-xl uppercase group-hover:text-blue-500 transition-colors">{exp.company}</h3>
                    <p className="text-blue-500/50 text-[10px] font-bold uppercase tracking-widest mt-1">{exp.period}</p>
                 </div>
                 <div className="md:col-span-7 flex md:justify-end items-center">
                    <p className="text-white/40 uppercase font-bold text-sm tracking-widest">{exp.role}</p>
                 </div>
              </div>
            ))}
         </div>
      </section>

      {/* Process Section */}
      <section className="py-40 px-6 bg-[#0d0d0d]">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-32">
               <div className="text-blue-500 text-[10px] uppercase font-bold tracking-[0.4em] mb-4 md:mb-0">// Process</div>
               <h2 className="text-4xl md:text-6xl font-outfit font-black text-white uppercase tracking-tighter text-right">
                 My Development<br/>Work Process
               </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
               <div className="group">
                  <div className="text-8xl md:text-9xl font-outfit font-black text-transparent stroke-text opacity-20 group-hover:text-blue-500 group-hover:opacity-100 group-hover:stroke-none transition-all duration-500 mb-8">01</div>
                  <h4 className="text-white font-bold text-2xl mb-4">Plan & Architect</h4>
                  <p className="text-white/40 leading-relaxed text-sm">Before writing a single line of code, I dive deep into understanding the project goals, user needs, and technical constraints.</p>
               </div>
               <div className="group">
                  <div className="text-8xl md:text-9xl font-outfit font-black text-transparent stroke-text opacity-20 group-hover:text-blue-500 group-hover:opacity-100 group-hover:stroke-none transition-all duration-500 mb-8">02</div>
                  <h4 className="text-white font-bold text-2xl mb-4">Build & Develop</h4>
                  <p className="text-white/40 leading-relaxed text-sm">Build pixel-perfect user interfaces and robust backend systems in parallel. I ensure every component is maintainable.</p>
               </div>
               <div className="group">
                  <div className="text-8xl md:text-9xl font-outfit font-black text-transparent stroke-text opacity-20 group-hover:text-blue-500 group-hover:opacity-100 group-hover:stroke-none transition-all duration-500 mb-8">03</div>
                  <h4 className="text-white font-bold text-2xl mb-4">Launch & Support</h4>
                  <p className="text-white/40 leading-relaxed text-sm">Post-launch monitoring, performance optimization, and ongoing iteration support to keep your product growing.</p>
               </div>
            </div>
         </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-40 px-6 max-w-7xl mx-auto">
         <div className="flex flex-col md:flex-row justify-between items-start mb-32">
            <div className="text-blue-500 text-[10px] uppercase font-bold tracking-[0.4em] mb-4 md:mb-0">// Testimonials</div>
            <h2 className="text-4xl md:text-6xl font-outfit font-black text-white uppercase tracking-tighter">
              What Clients Say<br/> About Me
            </h2>
         </div>
         
         <div className="relative">
            <div className="text-[12rem] md:text-[20rem] font-outfit font-black text-blue-500/10 leading-none absolute -top-40 -left-10 select-none">“</div>
            <div className="relative z-10 max-w-4xl mx-auto">
               <p className="text-2xl md:text-5xl font-outfit font-bold text-white leading-tight mb-16 text-center md:text-left">
                 {TESTIMONIALS[0].quote}
               </p>
               <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden border border-white/10">
                    <img src={TESTIMONIALS[0].image} alt={TESTIMONIALS[0].author} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl">{TESTIMONIALS[0].author}</h4>
                    <p className="text-white/40 uppercase text-[10px] font-bold tracking-widest">{TESTIMONIALS[0].role}</p>
                  </div>
                  <div className="ml-auto flex gap-4">
                     <button className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-blue-500 hover:text-black transition-all">&larr;</button>
                     <button className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-blue-500 hover:text-black transition-all">&rarr;</button>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
};

export default AboutPage;

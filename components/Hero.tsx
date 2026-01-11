
import React, { useState, useEffect } from 'react';
import bayuimg from '@/bayuimg.png';

interface HeroProps {
  onMenuToggle?: () => void;
}

const ROLES = [
  "Front End Web Developer",
  "Web3 Builder", 
  "Smart Contract Developer"
];

const Hero: React.FC<HeroProps> = ({ onMenuToggle }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-6 md:px-12 overflow-hidden">
      {/* Background Glow behind the portrait */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[70%] bg-blue-500/10 blur-[120px] rounded-full z-0 pointer-events-none"></div>

      {/* Top Bar - Local Navbar integrated into Hero for layout accuracy */}
      <div className="absolute top-0 left-0 w-full px-8 py-6 flex justify-between items-start z-50">
        <div className="select-none">
          <span className="text-white font-bold text-sm tracking-tighter uppercase">BAYU MUKTI WIBOWO</span>
        </div>
        <button 
          onClick={onMenuToggle}
          className="bg-blue-500 text-black px-6 py-2 rounded-full flex items-center gap-4 text-xs font-bold hover:bg-blue-400 transition-colors group"
        >
          Menu
          <span className="text-black/40 group-hover:text-black">
            &lt; &gt;
          </span>
        </button>
      </div>

      <div className="relative w-full max-w-[1400px] flex flex-col md:flex-row items-center justify-between min-h-[80vh] z-10">
        
        {/* Left Content Column */}
        <div className="w-full md:w-1/3 flex flex-col justify-start pt-20 self-start z-30">
          <p className={`text-white font-bold text-lg mb-4 transition-all duration-700 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
             style={{ transitionDelay: '200ms' }}>
            Hey, 👋 I'm a <span key={currentRoleIndex} className="text-blue-500 animate-fade-in inline-block">{ROLES[currentRoleIndex]}</span>
          </p>
          
          {/* Big Name - This is large and bold like the screenshot */}
          <h1 className={`text-[10vw] md:text-[8vw] font-outfit font-black text-blue-500 leading-none tracking-tighter uppercase mb-8 pointer-events-none select-none transition-all duration-700 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: '400ms' }}>
            BAYU MUKTI
          </h1>

          <div className={`mt-auto hidden md:block transition-all duration-700 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
               style={{ transitionDelay: '600ms' }}>
            <div className="space-y-3">
              <a href="mailto:bayumuktywibowo02@gmail.com" className="flex items-center gap-3 text-white font-bold text-sm hover:text-blue-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                bayumuktywibowo02@gmail.com
              </a>
              <a href="https://t.me/Ubayyww" target="_blank" className="flex items-center gap-3 text-white font-bold text-sm hover:text-blue-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                @Ubayyww
              </a>
            </div>
          </div>
        </div>

        {/* Center Portrait */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex justify-center items-end pointer-events-none z-20">
          <div className="relative animate-slideUp">
            <img 
              src={bayuimg} 
              alt="Bayu Mukti Wibowo" 
              className="w-[85vw] md:w-[45vw] lg:w-[40vw] max-w-[700px] h-auto object-contain"
              style={{
                maskImage: 'linear-gradient(to top, transparent 5%, black 40%)',
                WebkitMaskImage: 'linear-gradient(to top, transparent 5%, black 40%)'
              }}
            />
          </div>
        </div>

        {/* Right Content Column */}
        <div className="w-full md:w-1/3 flex flex-col items-end pt-20 text-right h-full justify-between z-30">
          
          {/* Vertical Scroll Indicator */}
          <div className="relative h-48 w-full flex justify-end mb-12">
            <div className="flex flex-col items-center gap-4 rotate-0 mr-2">
              <div className="w-px h-24 bg-white/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-scrollLine"></div>
              </div>
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-white [writing-mode:vertical-lr] opacity-60">
                SCROLL
              </span>
            </div>
          </div>

          <div className="max-w-xs space-y-8 animate-slideUpText">
            <p className="text-white/60 text-sm leading-relaxed font-medium">
              I craft modern web applications and decentralized solutions — combining React frontend development with smart contract engineering using Solidity and Move for Web3 ecosystems.
            </p>

            <div className="flex flex-wrap justify-end gap-x-4 gap-y-2 text-[11px] font-bold uppercase tracking-widest text-white">
              <a href="https://x.com/0xmukti_w" target="_blank" className="hover:text-blue-500 transition-colors">/ Twitter (X)</a>
              <a href="https://www.linkedin.com/in/baym/" target="_blank" className="hover:text-blue-500 transition-colors">/ LinkedIn</a>
              <a href="https://github.com/edison-alpha/" target="_blank" className="hover:text-blue-500 transition-colors">/ GitHub</a>
              <a href="https://dorahacks.io/hacker/NGDK" target="_blank" className="hover:text-blue-500 transition-colors">/ DoraHacks</a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Contact Info (only shows on mobile) */}
      <div className="md:hidden w-full text-center py-10 z-30">
        <p className="text-white font-bold text-xs uppercase tracking-widest">info@bayumukti.com</p>
      </div>

      {/* Floating Action Button (+ like in screenshot) */}
      <div className="fixed bottom-6 right-6 z-40 hidden">
        <button className="bg-blue-500 text-black w-10 h-10 rounded-lg flex items-center justify-center text-xl font-bold shadow-xl hover:scale-110 transition-transform">
          +
        </button>
      </div>

      <style>{`
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        .animate-scrollLine {
          animation: scrollLine 2s linear infinite;
        }
        @keyframes slideUp {
          0% {
            transform: translateY(150px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slideUp {
          animation: slideUp 1.2s ease-out 0.5s forwards;
          opacity: 0;
        }
        @keyframes slideUpText {
          0% {
            transform: translateY(50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slideUpText {
          animation: slideUpText 0.8s ease-out 0.7s forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Hero;

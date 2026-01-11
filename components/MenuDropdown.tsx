
import React, { useState, useEffect } from 'react';
import Lanyard from './Lanyard';

interface MenuDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (section: 'home' | 'about' | 'works' | 'contact') => void;
}

const ROLES = [
  "Front End Web Developer",
  "Web3 Builder", 
  "Smart Contract Developer"
];

const MenuDropdown: React.FC<MenuDropdownProps> = ({ isOpen, onClose, onNavigate }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    if (!isOpen) return;
    
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Works', id: 'works' },
    { label: 'Contact', id: 'contact' },
  ] as const;

  return (
    <div className="fixed inset-0 z-[100] bg-[#0a0a0a]/95 backdrop-blur-xl animate-fadeIn">
      {/* 3D Lanyard Card - Full screen canvas behind everything */}
      <div className="hidden md:block absolute inset-0 z-0">
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col h-full p-8 md:p-12 pointer-events-none">
        {/* Header */}
        <div className="flex justify-between items-center w-full mb-12 pointer-events-auto">
          <div className="text-white font-bold text-xs tracking-tighter uppercase select-none">
            BAYU MUKTI WIBOWO
          </div>
          <button 
            onClick={onClose}
            className="bg-white text-black w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg hover:bg-blue-500 transition-colors group"
          >
            <span className="group-hover:rotate-90 transition-transform">✕</span>
          </button>
        </div>

        {/* Main Links */}
        <div className="flex-1 flex items-center">
          <nav className="flex-1 flex flex-col justify-center pointer-events-auto">
            <ul className="space-y-2 md:space-y-4">
              {menuItems.map((item, index) => (
                <li 
                  key={item.id} 
                  className="overflow-hidden group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <button
                    onClick={() => {
                      onNavigate(item.id);
                      onClose();
                    }}
                    className="text-5xl md:text-[6vw] font-outfit font-black text-white/20 hover:text-blue-500 tracking-tighter uppercase transition-all duration-500 hover:pl-6 flex items-center gap-6"
                  >
                    <span className="text-[10px] font-mono font-bold tracking-widest text-blue-500/40 mt-3">0{index + 1}</span>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Text beside lanyard */}
          <div className="hidden md:flex flex-1 items-center justify-end">
            <div className="pr-8 text-right">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-2">itsme</p>
              <h2 className="text-4xl font-outfit font-black text-white tracking-tight mb-2">BAYU MUKTI</h2>
              <p key={currentRoleIndex} className="text-blue-500 text-sm uppercase tracking-widest animate-fade-in">{ROLES[currentRoleIndex]}</p>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-end border-t border-white/10 pt-8 pointer-events-auto">
          <div className="space-y-1">
            <p className="text-white/30 text-[9px] uppercase font-bold tracking-widest">Get in touch</p>
            <p className="text-white font-bold text-lg">bayumuktywibowo02@gmail.com</p>
            <p className="text-white/40 font-mono text-xs">Telegram: @Ubayyww</p>
          </div>
          <div className="flex md:justify-end gap-5 text-[9px] font-bold uppercase tracking-[0.3em] text-white/40">
            <a href="https://x.com/0xmukti_w" target="_blank" className="hover:text-blue-500 transition-colors">Twitter (X)</a>
            <a href="https://www.linkedin.com/in/baym/" target="_blank" className="hover:text-blue-500 transition-colors">LinkedIn</a>
            <a href="https://github.com/edison-alpha/" target="_blank" className="hover:text-blue-500 transition-colors">GitHub</a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default MenuDropdown;

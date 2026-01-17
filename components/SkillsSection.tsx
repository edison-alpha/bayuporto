
import React, { useState } from 'react';
import { SKILL_GROUPS, STATS } from '../constants';
import ResumeModal from './ResumeModal';

const TOOLS = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express', icon: 'https://img.icons8.com/fluency/96/express-js.png' },
  { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Hardhat', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hardhat/hardhat-original.svg' },
  { name: 'Foundry', icon: 'https://raw.githubusercontent.com/foundry-rs/.github/main/profile/logo.png' },
  { name: 'Ethers.js', icon: 'https://moralis.com/wp-content/uploads/2024/05/Blog-What-is-Ethers-Logo-1024x708.png' },
  { name: 'Solidity', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg' },
  { name: 'Move', icon: 'https://pontemnetwork.gallerycdn.vsassets.io/extensions/pontemnetwork/move-language/0.5.0/1624039308768/Microsoft.VisualStudio.Services.Icons.Default' },
  { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg' },
];

const SkillsSection: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        <div>
          <h3 className="text-blue-500 font-mono mb-10 text-lg">// Skills</h3>
          <div className="space-y-8">
            {SKILL_GROUPS.map((group, idx) => (
              <div key={idx} className="border-b border-white/10 pb-6 group">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-white text-xl font-bold">{group.category}</h4>
                  <div className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 18 6-6-6-6"/><path d="M8 6l-6 6 6 6"/></svg>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, sIdx) => (
                    <span key={sIdx} className="text-white/40 text-sm">{skill}{sIdx < group.items.length - 1 ? ' \u2022 ' : ''}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-white/60 text-xl leading-relaxed mb-8">
            I thrive on solving real-world problems, turning ideas into clean, maintainable code, and learning through experimentation. You'll find me building side projects, diving into new tech stacks, or simply exploring what's next in the world of web development.
          </p>
          <button 
            onClick={() => setIsResumeOpen(true)}
            className="bg-blue-500 text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform w-fit"
          >
            My Resume
          </button>
        </div>
      </div>

      {/* Tools Section */}
      <div className="mb-24">
        <h3 className="text-blue-500 font-mono mb-10 text-lg">// Tools & Technologies</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {TOOLS.map((tool, idx) => (
            <div 
              key={idx} 
              className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center gap-2 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group cursor-pointer"
            >
              <img 
                src={tool.icon} 
                alt={tool.name} 
                className={`w-8 h-8 group-hover:scale-110 transition-transform ${tool.name === 'Solidity' ? 'invert brightness-0 invert' : ''}`} 
              />
              <span className="text-white/60 text-xs font-medium group-hover:text-blue-500 transition-colors">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-16">
        {STATS.map((stat, idx) => (
          <div key={idx} className="text-left">
            <div className="text-5xl md:text-7xl font-outfit font-black text-white mb-2">{stat.value}</div>
            <div className="text-white/40 uppercase tracking-widest text-sm font-bold">{stat.label}</div>
          </div>
        ))}
      </div>

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
};

export default SkillsSection;

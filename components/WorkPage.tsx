import React from 'react';
import { PROJECTS } from '../constants';

interface WorkPageProps {
  onBack: () => void;
  onSelectProject: (id: number) => void;
}

const WorkPage: React.FC<WorkPageProps> = ({ onBack, onSelectProject }) => {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Header */}
      <div className="fixed top-0 left-0 w-full px-8 py-6 flex justify-between items-center z-50 bg-[#0a0a0a]/80 backdrop-blur-md">
        <div 
          onClick={onBack}
          className="text-white font-bold text-sm tracking-tighter uppercase select-none cursor-pointer hover:text-blue-500 transition-colors"
        >
          BAYU MUKTI WIBOWO
        </div>
        <button 
          onClick={onBack}
          className="bg-white text-black px-6 py-2 rounded-full flex items-center gap-4 text-xs font-bold hover:bg-blue-500 transition-colors"
        >
          Back Home
        </button>
      </div>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40 mb-8">
            <button onClick={onBack} className="hover:text-blue-500 transition-colors cursor-pointer">// Home</button>
            <span className="text-blue-500">// Works</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-outfit font-black text-white tracking-tighter uppercase mb-6">
            FEATURED<br/>
            <span className="text-blue-500">WORK</span>
          </h1>
          
          <p className="text-white/50 text-lg md:text-xl max-w-2xl leading-relaxed">
            A collection of projects that showcase my expertise in building modern, 
            scalable, and user-friendly web applications.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 md:px-12 pb-32">
        <div className="max-w-[1400px] mx-auto">
          {/* Filter Tags */}
          <div className="flex flex-wrap gap-3 mb-16">
            <button className="bg-blue-500 text-black px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
              All
            </button>
            <button className="border border-white/20 text-white/60 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:border-blue-500 hover:text-blue-500 transition-colors">
              React
            </button>
            <button className="border border-white/20 text-white/60 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:border-blue-500 hover:text-blue-500 transition-colors">
              Next.js
            </button>
            <button className="border border-white/20 text-white/60 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:border-blue-500 hover:text-blue-500 transition-colors">
              Web3
            </button>
            <button className="border border-white/20 text-white/60 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:border-blue-500 hover:text-blue-500 transition-colors">
              Solidity
            </button>
          </div>

          {/* Projects */}
          <div className="space-y-32">
            {PROJECTS.map((project, idx) => (
              <div 
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image */}
                <div 
                  className={`group cursor-pointer ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}
                  onClick={() => {
                    onSelectProject(project.id);
                    window.scrollTo(0, 0);
                  }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-white/5">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-500">
                      <span className="bg-blue-500 text-black px-6 py-2 rounded-full font-bold uppercase text-xs tracking-widest inline-block">
                        View Project
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-blue-500/50 font-mono text-sm">0{idx + 1}</span>
                    {project.status === 'in-progress' && (
                      <span className="bg-yellow-500/20 text-yellow-500 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                        In Progress
                      </span>
                    )}
                  </div>
                  
                  <h2 
                    className="text-4xl md:text-5xl lg:text-6xl font-outfit font-black text-white tracking-tighter uppercase mb-6 cursor-pointer hover:text-blue-500 transition-colors"
                    onClick={() => {
                      onSelectProject(project.id);
                      window.scrollTo(0, 0);
                    }}
                  >
                    {project.title}
                  </h2>
                  
                  <p className="text-white/50 text-lg leading-relaxed mb-8 max-w-lg">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="text-blue-500 text-[10px] font-bold tracking-widest border border-blue-500/30 px-4 py-1.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.details && (
                    <div className="grid grid-cols-2 gap-6 text-sm">
                      <div>
                        <p className="text-white/30 uppercase text-[10px] tracking-widest mb-1">Client</p>
                        <p className="text-white font-medium">{project.details.client}</p>
                      </div>
                      <div>
                        <p className="text-white/30 uppercase text-[10px] tracking-widest mb-1">Timeline</p>
                        <p className="text-white font-medium">{project.details.timeline}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-outfit font-black text-white tracking-tighter mb-6">
            Have a project in mind?
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
            Let's collaborate and bring your ideas to life with modern web technologies.
          </p>
          <button className="bg-blue-500 text-black px-10 py-4 rounded-full font-bold uppercase text-sm tracking-widest hover:scale-105 transition-transform">
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default WorkPage;

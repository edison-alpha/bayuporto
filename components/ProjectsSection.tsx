
import React from 'react';
import { PROJECTS } from '../constants';

interface ProjectsSectionProps {
  onSelectProject: (id: number) => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  return (
    <section id="works" className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-white/20 text-xl font-mono mb-2 uppercase tracking-tighter">// Works</h2>
            <h3 className="text-5xl md:text-7xl font-outfit font-black text-white tracking-tighter">FEATURED WORK</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PROJECTS.map((project, idx) => (
            <div 
              key={project.id} 
              className={`group cursor-pointer ${idx % 2 !== 0 ? 'md:mt-24' : ''}`}
              onClick={() => onSelectProject(project.id)}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6 bg-[#1a1a1a]">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {project.status === 'in-progress' && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-yellow-500/90 text-black px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                      In Progress
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                   <span className="bg-white text-black px-6 py-2 rounded-full font-bold uppercase text-xs tracking-widest">View Project</span>
                </div>
              </div>
              <div className="flex gap-2 mb-3 flex-wrap">
                {project.status === 'in-progress' && (
                  <span className="bg-yellow-500/20 text-yellow-500 text-[10px] uppercase font-bold tracking-widest border border-yellow-500/30 px-2 py-0.5 rounded-full">In Progress</span>
                )}
                {project.tags.map(tag => (
                  <span key={tag} className="text-blue-500 text-[10px] uppercase font-bold tracking-widest border border-blue-500/30 px-2 py-0.5 rounded-full">{tag}</span>
                ))}
              </div>
              <h4 className="text-2xl md:text-3xl font-outfit font-bold text-white mb-2">{project.title}</h4>
              <p className="text-white/40 text-sm leading-relaxed max-w-md">{project.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <button className="bg-blue-500/10 border border-blue-500/30 text-blue-500 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-blue-500 hover:text-black transition-all">
            View More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

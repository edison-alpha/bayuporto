
import React from 'react';
import { Project } from '../types';
import { PROJECTS } from '../constants';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
  onNavigateProject: (id: number) => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack, onNavigateProject }) => {
  const details = project.details;
  if (!details) return <div>Details not available.</div>;

  const nextProjects = PROJECTS.filter(p => p.id !== project.id).slice(0, 2);

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Navbar */}
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

      {/* Header Info */}
      <section className="pt-32 px-6 md:px-12 max-w-[1400px] mx-auto mb-20">
        <div className="flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40 mb-12">
          <button onClick={onBack} className="hover:text-blue-500 transition-colors cursor-pointer">// Home</button>
          <span>// Portfolio</span>
          <span className="text-blue-500">// Portfolio Single</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-4">
              {project.status === 'in-progress' && (
                <span className="bg-yellow-500/20 text-yellow-500 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                  In Progress
                </span>
              )}
            </div>
            <h1 className="text-6xl md:text-8xl font-outfit font-black text-white tracking-tighter mb-8 uppercase">
              {project.title}
            </h1>
            <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              {project.description}
            </p>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-500 text-black px-8 py-3 rounded-full font-bold uppercase text-xs tracking-widest hover:scale-105 transition-transform inline-block"
            >
              Live Preview
            </a>
          </div>

          <div className="lg:col-span-4 bg-[#141414] p-8 rounded-2xl border border-white/5">
            <div className="grid grid-cols-2 gap-y-8">
              <div>
                <p className="text-blue-500 text-[10px] uppercase font-bold tracking-widest mb-1">Client</p>
                <p className="text-white font-medium">{details.client}</p>
              </div>
              <div>
                <p className="text-blue-500 text-[10px] uppercase font-bold tracking-widest mb-1">Industry</p>
                <p className="text-white font-medium">{details.industry}</p>
              </div>
              <div>
                <p className="text-blue-500 text-[10px] uppercase font-bold tracking-widest mb-1">Timeline</p>
                <p className="text-white font-medium">{details.timeline}</p>
              </div>
              <div>
                <p className="text-blue-500 text-[10px] uppercase font-bold tracking-widest mb-1">Technologies</p>
                <p className="text-white font-medium leading-tight">
                  {details.techStackDetailed.join(', ')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Hero Image */}
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto mb-32">
        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-white/5">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          {/* Decorative Grid Overlay like in screenshot */}
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </section>

      {/* Content Blocks */}
      <section className="px-6 md:px-12 max-w-4xl mx-auto space-y-32 mb-32">
        {/* Overview */}
        <div>
          <h2 className="text-3xl font-outfit font-bold text-white mb-6">Project Overview</h2>
          <p className="text-white/50 leading-relaxed text-lg mb-8">
            {details.overview}
          </p>
        </div>

        {/* Roles & Tech Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-outfit font-bold text-white mb-6">Your Role</h2>
            <ul className="space-y-4">
              {details.role.map((r, i) => (
                <li key={i} className="flex gap-4 items-start text-white/50">
                  <span className="text-blue-500 font-bold mt-1">•</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-outfit font-bold text-white mb-6">Key Features</h2>
            <ul className="space-y-4">
              {details.features.map((f, i) => (
                <li key={i} className="flex gap-4 items-start text-white/50">
                  <span className="text-blue-500 font-bold mt-1">•</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Architecture */}
        {details.architecture && (
          <div>
            <h2 className="text-3xl font-outfit font-bold text-white mb-6">Code Structure & Architecture</h2>
            <div className="bg-[#0f0f0f] rounded-xl p-8 border border-white/5 font-mono text-sm overflow-x-auto whitespace-pre text-blue-500/80">
              <code>{details.architecture}</code>
            </div>
          </div>
        )}

        {/* Challenges */}
        {details.challenges.length > 0 && (
          <div>
            <h2 className="text-3xl font-outfit font-bold text-white mb-6">Challenges & Solutions</h2>
            <div className="space-y-8">
              {details.challenges.map((c, i) => (
                <div key={i} className="border-l-2 border-blue-500/20 pl-6">
                  <p className="text-white font-bold mb-2 uppercase text-xs tracking-widest text-white/30 italic">Challenge:</p>
                  <p className="text-white mb-4 text-lg">{c.challenge}</p>
                  <p className="text-white font-bold mb-2 uppercase text-xs tracking-widest text-blue-500/50 italic">Solution:</p>
                  <p className="text-white/50 leading-relaxed">{c.solution}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Secondary Images Collage */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {details.galleryImages.map((img, i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden bg-white/5">
                <img src={img} className="w-full h-full object-cover" />
              </div>
            ))}
        </div>

        {/* Takeaways */}
        <div className="border-t border-white/10 pt-16">
          <h2 className="text-3xl font-outfit font-bold text-white mb-6">Takeaways</h2>
          <p className="text-white/50 text-xl leading-relaxed italic">
            "{details.takeaways}"
          </p>
        </div>
      </section>

      {/* More Projects Section */}
      <section className="bg-[#0d0d0d] py-32 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-between items-center mb-20">
            <h2 className="text-4xl md:text-6xl font-outfit font-black text-white tracking-tighter">MORE PROJECT</h2>
            <button 
              onClick={onBack}
              className="bg-blue-500 text-black px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform"
            >
              All Project
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {nextProjects.map(p => (
              <div 
                key={p.id} 
                className="group cursor-pointer"
                onClick={() => {
                  onNavigateProject(p.id);
                  window.scrollTo(0,0);
                }}
              >
                <div className="aspect-[16/10] overflow-hidden rounded-3xl mb-8 bg-white/5 border border-white/5">
                  <img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <h4 className="text-3xl font-outfit font-bold text-white mb-4 uppercase">{p.title}</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-blue-500 text-[10px] font-bold tracking-widest border border-blue-500/20 px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProjectDetail;

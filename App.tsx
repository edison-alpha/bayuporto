
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import ProjectDetail from './components/ProjectDetail';
import AboutPage from './components/AboutPage';
import WorkPage from './components/WorkPage';
import MenuDropdown from './components/MenuDropdown';
import { PROJECTS } from './constants';

const App: React.FC = () => {
  const [activeProjectId, setActiveProjectId] = useState<number | null>(null);
  const [isAboutPage, setIsAboutPage] = useState(false);
  const [isWorkPage, setIsWorkPage] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Simple "Reveal on Scroll" logic
  useEffect(() => {
    const observerOptions = { threshold: 0.1 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.scroll-reveal');
    sections.forEach(s => observer.observe(s));

    return () => observer.disconnect();
  }, [activeProjectId, isAboutPage, isWorkPage]);

  const handleNavigation = (target: 'home' | 'about' | 'works' | 'contact') => {
    if (target === 'about') {
      setIsAboutPage(true);
      setIsWorkPage(false);
      setActiveProjectId(null);
    } else if (target === 'home') {
      setIsAboutPage(false);
      setIsWorkPage(false);
      setActiveProjectId(null);
    } else if (target === 'works') {
      setIsAboutPage(false);
      setIsWorkPage(true);
      setActiveProjectId(null);
    } else if (target === 'contact') {
      setIsAboutPage(false);
      setIsWorkPage(false);
      setActiveProjectId(null);
      setTimeout(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }, 100);
    }
    window.scrollTo(0, 0);
  };

  const activeProject = PROJECTS.find(p => p.id === activeProjectId);

  // Router Logic
  if (isAboutPage) {
    return (
      <div className="min-h-screen relative">
        <MenuDropdown 
          isOpen={isMenuOpen} 
          onClose={() => setIsMenuOpen(false)} 
          onNavigate={handleNavigation}
        />
        <AboutPage onBack={() => {
          setIsAboutPage(false);
          window.scrollTo(0,0);
        }} />
        <Footer />
        <AIAssistant />
      </div>
    );
  }

  if (isWorkPage) {
    return (
      <div className="min-h-screen relative">
        <MenuDropdown 
          isOpen={isMenuOpen} 
          onClose={() => setIsMenuOpen(false)} 
          onNavigate={handleNavigation}
        />
        <WorkPage 
          onBack={() => {
            setIsWorkPage(false);
            window.scrollTo(0,0);
          }}
          onSelectProject={(id) => {
            setActiveProjectId(id);
            setIsWorkPage(false);
            window.scrollTo(0,0);
          }}
        />
        <Footer />
        <AIAssistant />
      </div>
    );
  }

  if (activeProjectId && activeProject) {
    return (
      <div className="min-h-screen relative">
        <MenuDropdown 
          isOpen={isMenuOpen} 
          onClose={() => setIsMenuOpen(false)} 
          onNavigate={handleNavigation}
        />
        <ProjectDetail 
          project={activeProject} 
          onBack={() => {
            setActiveProjectId(null);
            window.scrollTo(0,0);
          }} 
          onNavigateProject={(id) => setActiveProjectId(id)}
        />
        <Footer />
        <AIAssistant />
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      <MenuDropdown 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        onNavigate={handleNavigation}
      />
      <Navbar />
      
      <main>
        <Hero onMenuToggle={() => setIsMenuOpen(true)} />
        
        <div className="scroll-reveal opacity-0 translate-y-10 transition-all duration-1000">
          <Marquee />
        </div>

        <div className="scroll-reveal opacity-0 translate-y-10 transition-all duration-1000 delay-100">
          <SkillsSection />
        </div>

        <div className="scroll-reveal opacity-0 translate-y-10 transition-all duration-1000 delay-200">
          <ProjectsSection onSelectProject={(id) => {
            setActiveProjectId(id);
            window.scrollTo(0,0);
          }} />
        </div>

        {/* Process Section */}
        <section className="py-24 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="group">
              <h5 className="text-white font-bold text-xl mb-4 group-hover:text-blue-500 transition-colors">Plan & Architect</h5>
              <p className="text-white/40 text-sm leading-relaxed">Before writing a single line of code, I dive deep into understanding the project goals, user needs, and technical constraints.</p>
            </div>
            <div className="group">
              <h5 className="text-white font-bold text-xl mb-4 group-hover:text-blue-500 transition-colors">Build & Develop</h5>
              <p className="text-white/40 text-sm leading-relaxed">Build pixel-perfect user interfaces and robust backend systems in parallel. I ensure that every component—UI or API—is maintainable.</p>
            </div>
            <div className="group">
              <h5 className="text-white font-bold text-xl mb-4 group-hover:text-blue-500 transition-colors">Launch & Support</h5>
              <p className="text-white/40 text-sm leading-relaxed">I also provide post-launch monitoring, performance optimization, and ongoing iteration support to keep your product growing.</p>
            </div>
          </div>
        </section>

        <ContactForm />

      </main>

      <Footer />
      
      {/* Gemini AI Assistant */}
      <AIAssistant />
    </div>
  );
};

export default App;

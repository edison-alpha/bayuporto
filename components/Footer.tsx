
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative pt-32 pb-16 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-[150px] rounded-full -z-10"></div>
      
      <div className="max-w-7xl mx-auto text-center mb-32">
        <h2 className="text-5xl md:text-8xl font-outfit font-black text-white tracking-tighter leading-none mb-12">
          READY TO TAKE YOUR<br/>
          <span className="relative inline-block">
            IDEA TO
            <div className="absolute -right-16 md:-right-24 top-1/2 -translate-y-1/2">
              <button className="w-24 h-24 md:w-32 md:h-32 bg-blue-500 text-black rounded-full font-bold text-[10px] md:text-xs uppercase tracking-widest hover:scale-110 transition-transform leading-tight">
                Start<br/>Project
              </button>
            </div>
          </span><br/>
          THE NEXT LEVEL?
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-16">
        <div>
          <h4 className="text-white/30 uppercase tracking-widest text-xs font-bold mb-6">Quick Links</h4>
          <ul className="space-y-3 font-bold uppercase text-xs tracking-widest">
            <li><a href="#" className="hover:text-blue-500 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">About</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Works</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Blogs</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white/30 uppercase tracking-widest text-xs font-bold mb-6">Portfolio</h4>
          <ul className="space-y-3 font-bold uppercase text-xs tracking-widest">
            <li><a href="https://github.com/edison-alpha/" target="_blank" className="hover:text-blue-500 transition-colors">Github</a></li>
            <li><a href="https://dorahacks.io/hacker/NGDK" target="_blank" className="hover:text-blue-500 transition-colors">DoraHacks</a></li>
            <li><a href="https://earn.superteam.fun/t/edison-alpha" target="_blank" className="hover:text-blue-500 transition-colors">Earn Superteam</a></li>
          </ul>
        </div>

        <div className="md:col-span-2 text-right md:text-left">
           <h4 className="text-white/30 uppercase tracking-widest text-xs font-bold mb-6">Social Link</h4>
           <div className="flex flex-wrap gap-x-8 gap-y-3 font-bold uppercase text-xs tracking-widest">
              <a href="https://www.linkedin.com/in/baym/" target="_blank" className="hover:text-blue-500 transition-colors">LinkedIn</a>
              <a href="https://x.com/0xmukti_w" target="_blank" className="hover:text-blue-500 transition-colors">Twitter "X"</a>
              <a href="https://t.me/Ubayyww" target="_blank" className="hover:text-blue-500 transition-colors">Telegram</a>
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div>
          <div className="text-white font-bold text-xl mb-1">bayumuktywibowo02@gmail.com</div>
          <div className="text-white/40 font-mono">Telegram: @Ubayyww</div>
        </div>
        <div className="text-white/20 text-[10px] uppercase font-bold tracking-[0.3em]">
          © 2024 BAYU MUKTI WIBOWO — PORTFOLIO
        </div>
      </div>
    </footer>
  );
};

export default Footer;

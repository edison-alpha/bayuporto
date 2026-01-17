import React from 'react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative w-[95vw] h-[95vh] max-w-6xl bg-[#1a1a1a] rounded-2xl overflow-hidden border border-blue-500/30 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 bg-[#0a0a0a] border-b border-white/10 px-6 py-4 flex justify-between items-center z-10">
          <h3 className="text-white font-bold text-lg">Resume - Bayu Mukti Wibowo</h3>
          <div className="flex gap-3">
            <a 
              href="/Bayu_Mukti_Wibowo_CV_Frontend_Web3.pdf" 
              download="Bayu_Mukti_Wibowo_CV.pdf"
              className="bg-blue-500 text-black px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-blue-400 transition-colors"
            >
              Download
            </a>
            <button 
              onClick={onClose}
              className="bg-white/10 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
              </svg>
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="w-full h-full pt-16">
          <iframe 
            src="/Bayu_Mukti_Wibowo_CV_Frontend_Web3.pdf"
            className="w-full h-full"
            title="Resume PDF"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;

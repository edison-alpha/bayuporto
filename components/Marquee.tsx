
import React from 'react';
import Stack from './Stack';
import inticImg from '@/src/assets/intic.png';
import hibeatsImg from '@/src/assets/hibeats.png';
import ventaImg from '@/src/assets/venta.png';
import somguessImg from '@/src/assets/somguess.png';

const stackImages = [inticImg, hibeatsImg, ventaImg, somguessImg];

const Marquee: React.FC = () => {
  return (
    <div className="relative py-20 border-y border-white/5 overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center text-8xl md:text-[140px] font-outfit font-black text-transparent stroke-text tracking-tighter px-10">
            <span className="text-white/5" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>BAYU MUKTI W</span>
            <span className="mx-10 text-blue-500/10">✱</span>
          </div>
        ))}
      </div>
      
      {/* Stack Image Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
        <div style={{ width: 208, height: 208 }}>
          <Stack
            randomRotation={true}
            sensitivity={180}
            sendToBackOnClick={true}
            cards={stackImages.map((src, i) => (
              <img 
                key={i} 
                src={src} 
                alt={`card-${i + 1}`} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            ))}
          />
        </div>
      </div>
    </div>
  );
};

export default Marquee;

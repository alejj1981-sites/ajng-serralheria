import React, { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

import mezanino09 from '../../assets/images/mezanino-09.jpg';
import mezanino10 from '../../assets/images/mezanino-10.jpg';
import mezanino12 from '../../assets/images/mezanino-12.jpg';
import mezanino13 from '../../assets/images/mezanino-13.jpg';
import mezanino08 from '../../assets/images/mezanino-08.jpg';
import telha03    from '../../assets/images/telha-03.jpg';

export const Galeria: React.FC = () => {
  useScrollReveal();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const closeLightbox = () => setSelectedImage(null);

  return (
    <section className="galeria">
      <div className="section-label reveal">Trabalhos Realizados</div>
      <h2 className="section-title reveal">Nossa <em>Galeria</em></h2>
      <p className="section-sub reveal">Obras executadas com qualidade e profissionalismo. Cada projeto, uma estrutura única.</p>
      
      <div className="gallery-grid">
        <div className="gallery-item reveal" onClick={() => setSelectedImage(mezanino09)} style={{ cursor: 'pointer' }}>
          <img src={mezanino09} alt="Fabricação de estrutura para mezanino metálico" loading="lazy" width={800} height={600} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <div className="gallery-overlay">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
          </div>
        </div>

        <div className="gallery-item reveal" onClick={() => setSelectedImage(mezanino10)} style={{ transitionDelay: '.1s', cursor: 'pointer' }}>
          <img src={mezanino10} alt="Instalação de mezanino metálico para ampliação de espaço" loading="lazy" width={800} height={600} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <div className="gallery-overlay">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
          </div>
        </div>

        <div className="gallery-item reveal" onClick={() => setSelectedImage(mezanino12)} style={{ transitionDelay: '.2s', cursor: 'pointer' }}>
          <img src={mezanino12} alt="Projeto estrutural de aço sob medida finalizado" loading="lazy" width={800} height={600} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <div className="gallery-overlay">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
          </div>
        </div>

        <div className="gallery-item reveal" onClick={() => setSelectedImage(mezanino13)} style={{ transitionDelay: '.3s', cursor: 'pointer' }}>
          <img src={mezanino13} alt="Construção de mezanino metálico industrial em galpão" loading="lazy" width={800} height={600} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <div className="gallery-overlay">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
          </div>
        </div>

        <div className="gallery-item reveal" onClick={() => setSelectedImage(mezanino08)} style={{ transitionDelay: '.4s', cursor: 'pointer' }}>
          <img src={mezanino08} alt="Trabalho de serralheria em estrutura metálica soldada" loading="lazy" width={800} height={600} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <div className="gallery-overlay">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
          </div>
        </div>

        <div className="gallery-item reveal" onClick={() => setSelectedImage(telha03)} style={{ transitionDelay: '.5s', cursor: 'pointer' }}>
          <img src={telha03} alt="Cobertura metálica com telha sanduíche instalada" loading="lazy" width={800} height={600} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <div className="gallery-overlay">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
          </div>
        </div>

      </div>

      {selectedImage && (
        <div 
          onClick={closeLightbox}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 99999, backgroundColor: 'rgba(0,0,0,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'zoom-out' }}
        >
          <button 
            onClick={closeLightbox}
            style={{ position: 'absolute', top: '20px', right: '30px', color: 'white', fontSize: '40px', background: 'none', border: 'none', cursor: 'pointer' }}
            aria-label="Fechar galeria"
          >
            &times;
          </button>
          <img 
            src={selectedImage} 
            alt="Imagem ampliada" 
            style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain', cursor: 'default', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }} 
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </section>
  );
};

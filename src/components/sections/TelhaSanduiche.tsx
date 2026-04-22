import React from 'react';
import telhaImg from '../../assets/images/telha-01.jpg';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const TelhaSanduiche: React.FC = () => {
  useScrollReveal();

  return (
    <section className="sanduiche">
      <div className="sanduiche-inner">
        <div className="sanduiche-visual reveal-left">
          <div className="sanduiche-img-wrap">
            <img 
              src={telhaImg} 
              alt="Instalação de estrutura metálica para telha sanduíche" 
              loading="lazy"
              width={1280}
              height={960}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} 
            />
          </div>
        </div>
        <div className="reveal-right">
          <div className="section-label">Especialidade</div>
          <h2 className="section-title">Telha <em>Sanduíche</em></h2>
          <p className="section-sub" style={{ marginBottom: 0 }}>
            Trabalhamos com estrutura metálica reforçada para coberturas com telha sanduíche — a escolha certa para quem quer resistência e conforto térmico.
          </p>
          <div className="benefits-list">
            
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z"/>
                </svg>
              </div>
              <div className="benefit-text">
                <strong>Isolamento Térmico</strong>
                <span>Redução significativa do calor interno, garantindo conforto o ano inteiro.</span>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                  <line x1="23" y1="9" x2="17" y2="15"/>
                  <line x1="17" y1="9" x2="23" y2="15"/>
                </svg>
              </div>
              <div className="benefit-text">
                <strong>Isolamento Acústico</strong>
                <span>Atenua ruídos externos, ideal para áreas de trabalho e lazer.</span>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
              </div>
              <div className="benefit-text">
                <strong>Instalação Rápida</strong>
                <span>Montagem ágil e profissional com mínima interrupção na sua rotina.</span>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <div className="benefit-text">
                <strong>Alta Durabilidade</strong>
                <span>Material de qualidade com excelente resistência às intempéries.</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

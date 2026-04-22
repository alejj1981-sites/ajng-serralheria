import React from 'react';
import mezaninoImg from '../../assets/images/mezanino-12.jpg';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const Mezanino: React.FC = () => {
  useScrollReveal();

  return (
    <section className="mezanino">
      <div className="mezanino-grid">
        <div className="reveal-left">
          <div className="section-label">Aproveitamento de Espaço</div>
          <h2 className="section-title">Mezanino <em>Metálico</em></h2>
          <p className="section-sub" style={{ marginBottom: 0 }}>
            Transformamos o espaço vertical ocioso em área útil. Projeto sob medida, estrutura em aço de alta qualidade e solda reforçada em cada detalhe.
          </p>
          <div className="mezanino-specs">
            <div className="spec-box">
              <div className="spec-box-num">Aço</div>
              <div className="spec-box-label">Alta Qualidade</div>
            </div>
            <div className="spec-box">
              <div className="spec-box-num">100%</div>
              <div className="spec-box-label">Sob Medida</div>
            </div>
            <div className="spec-box">
              <div className="spec-box-num">✔</div>
              <div className="spec-box-label">Solda Reforçada</div>
            </div>
            <div className="spec-box">
              <div className="spec-box-num">✔</div>
              <div className="spec-box-label">Laudo de Carga</div>
            </div>
          </div>
          <a 
            href="https://wa.me/5511940885781?text=Ol%C3%A1%2C%20quero%20or%C3%A7amento%20de%20mezanino" 
            className="btn-primary" 
            style={{ marginTop: 36, display: 'inline-block' }}
            aria-label="Solicitar orçamento de mezanino metálico pelo WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Solicitar Orçamento →
          </a>
        </div>
        <div className="reveal-right">
          <div className="mezanino-img">
            <img 
              src={mezaninoImg} 
              alt="Soldadores instalando estrutura metálica de mezanino" 
              loading="lazy"
              width={1280}
              height={960}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};
